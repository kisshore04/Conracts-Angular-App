import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthServiceService) {}
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    this.auth
      .registerUser(this.username, this.email, this.password)
      .subscribe((res) => {
        console.log(res);
      });
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
