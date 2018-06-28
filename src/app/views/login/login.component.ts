import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { Branch } from '../../models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  public loggingIn: boolean;
  public accessibleBranches: any;
  public selectedBranch: Branch;

  public user: any = {
    username: '',
    password: ''
  };

  ngOnInit() {
    this.authService.logout();
  }

  login(user) {
    this.loggingIn = true;

    console.log(`Logging in`);

    this.authService.login(user)
      .then(res => {
        console.log(`Fetch Profile`);
        return this.authService.getProfile();
      })
      .then(res => {
        console.log(`Fetch Access Branch`);
        return this.authService.getAccessBranches();
      })
      .then(res => {
        this.loggingIn = false;

        this.accessibleBranches = res;
        this.selectedBranch = this.accessibleBranches[0];

        if (this.accessibleBranches.length == 1)
          this.selectCurrentBranch(this.accessibleBranches[0]);
      })
      .catch(res => {
        this.loggingIn = false;
        this.authService.logout();
        this.toastrService.error(`Login Failed`);
      });
  }

  selectCurrentBranch(branch) {
    this.authService.setCurrentBranch(branch);
    this.router.navigate(['/dashboard']);
  }

}
