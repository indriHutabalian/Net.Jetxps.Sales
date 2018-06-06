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

  private user: any = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user)
      .subscribe(data => {
        this.router.navigate(['/dashboard']);
      });
  }
}
