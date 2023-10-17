import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthServiceService, private route: Router) {}
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    this.auth
      .registerUser(this.username, this.email, this.password)
      .subscribe((res) => {
        console.log(res);
      });
    this.route.navigate(['/']);
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
