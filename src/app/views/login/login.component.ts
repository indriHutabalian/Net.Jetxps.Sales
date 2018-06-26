import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { Branch } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  public message: string;
  public accessibleBranches: any;

  public user: any = {
    username: '',
    password: ''
  };

  ngOnInit() {
    this.authService.logout();
  }

  login(user) {
    this.message = `Logging in`;

    this.authService.login(user)
      .then(result => {
        this.message = `Fetching user profile`;
        return this.authService.getProfile();
      }, error => {
        this.message = ``;
      })
      .then(result => {
        this.message = `Retrieving accessible branches`;
        return this.authService.getAccessBranches();
      }, error => {
        this.message = ``;
      })
      .then(result => {
        this.message = ``;

        this.accessibleBranches = result;
      }, error => {
        this.message = ``;
      });
  }

  selectCurrentBranch(branch) {
    if (branch) {
      this.authService.setCurrentBranch(branch);

      this.router.navigate(['/dashboard']);
    }
  }

}
