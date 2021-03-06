import { Component, Input } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { Branch, UserProfile } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  public accessBranches: Branch[] = [];
  public currentUser: UserProfile;
  public currentBranch: Branch;
  public currentAccessRoles: string[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    this.accessBranches = this.authService.getAccessibleBranches();
    this.currentUser = this.authService.getCurrentUserProfile();
    this.currentBranch = this.authService.getCurrentBranch();
    this.currentAccessRoles = this.authService.getCurrentAccessRoles();

    // intercept navItems
    let accessibleNavItems = [];

    this.navItems.forEach(item => {
      // available for all
      if (!item.expectedRoles) {
        accessibleNavItems.push(item);
        return;
      }

      // based on role
      if (item.expectedRoles.some(role => {
        return this.currentAccessRoles.includes(role);
      })) {
        accessibleNavItems.push(item);
        return;
      }
    });

    this.navItems = accessibleNavItems;
  }

  public logout() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }

  public changeCurrentBranch(branch) {
    this.authService.setCurrentBranch(branch);

    window.location.reload();
  }
}
