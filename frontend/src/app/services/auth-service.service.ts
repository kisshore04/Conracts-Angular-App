import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  registerUser(username: string, email: string, password: string) {
    return this.http.post('http://localhost:5001/api/users/register', {
      username,
      email,
      password,
    });
  }

  loginUser() {}

  fetchUsers() {
    return this.http.get('http://localhost:5001/api/users/viewusers');
  }
}
