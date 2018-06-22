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

  private message: string;
  private accessibleBranches: any;

  user: any = {
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
        this.message = `Please wait`;
        return this.authService.getAccessBranches();
      }, error => {
        this.message = `Retrieving accessible branches`;
      })
      .then(result => {
        this.message = '';

        this.accessibleBranches = result;
      }, error => {
        this.message = '';
      });
  }

  selectCurrentBranch(branch) {
    this.authService.setCurrentBranch(branch);

    this.router.navigate(['/dashboard']);

  }

}
