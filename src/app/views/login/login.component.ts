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

  public loading: boolean = false;
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
    this.loading = true;

    console.log(`Logging in`);

    this.authService.login(user)
      .then(res => {
        let promises = [];
        
        promises.push(this.authService.getAccessBranches());
        promises.push(this.authService.getProfile());
        promises.push(this.authService.getAccessRoles());

        Promise.all(promises)
          .then(responses => {

            this.loading = false;
            this.accessibleBranches = responses[0];
            this.selectedBranch = this.accessibleBranches[0];

            if (this.accessibleBranches.length == 1)
              this.selectCurrentBranch(this.accessibleBranches[0]);
          });
      })
      .catch(res => {
        this.loading = false;
        this.authService.logout();
        this.toastrService.error(`Login Failed`);
      });;

  }

  selectCurrentBranch(branch) {
    this.authService.setCurrentBranch(branch);
    this.router.navigate(['/dashboard']);
  }

}
