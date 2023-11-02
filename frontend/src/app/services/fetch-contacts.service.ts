import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchContactsService {
  constructor(private http: HttpClient) {}

  token: string | null = localStorage.getItem('access-token');

  fetchContacts() {
    // console.log(this.token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get('http://localhost:5001/api/contacts', { headers });
  }
}
