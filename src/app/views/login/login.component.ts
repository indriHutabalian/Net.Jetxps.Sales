import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

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

  user: any = {
    username: '',
    password: ''
  };

  ngOnInit() {
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
        // return this.authService.getBranches();

        this.router.navigate(['/dashboard']);
      }, error => {
        this.message = ``;
      });;
  }
  
}
