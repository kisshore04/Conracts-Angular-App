import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticatedService {
  // token: string;
  constructor() {}

  isUserAuthenticated: boolean = false;

  checkUserAuthenticity() {
    // this.isUserAuthenticated = !this.isUserAuthenticated;
    let token = localStorage.getItem('access-token');
    if (token) {
      this.isUserAuthenticated = !this.isUserAuthenticated;
    }
    return this.isUserAuthenticated;
  }
}
