import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { UserAuthenticatedService } from '../services/user-authenticated.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthServiceService,
    private route: Router,
    private userAuthenticate: UserAuthenticatedService
  ) {}
  email: string = '';
  password: string = '';

  login() {
    this.auth.loginUser(this.email, this.password).subscribe((res: any) => {
      const token = res.accessToken;
      localStorage.setItem('access-token', token);
    });
    this.route.navigate(['/contacts'], { queryParams: { data: 'true' } });
    this.email = '';
    this.password = '';
    this.userAuthenticate.checkUserAuthenticity();
  }
}
