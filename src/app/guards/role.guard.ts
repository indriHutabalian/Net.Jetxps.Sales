import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let expectedRoles = next.data.expectedRoles;

    let currentAccessRoles = this.authService.getCurrentAccessRoles();

    expectedRoles.map(role => {
      if (currentAccessRoles.includes(role))
        return true;
    });

    this.router.navigate(['/login']);
    this.toastrService.error(`Forbidden`);
    return false;
  }
}
