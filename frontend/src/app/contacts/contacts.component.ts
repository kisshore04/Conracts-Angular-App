import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { User } from '../model/User';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  userlist: any;

  constructor(private auth: AuthServiceService) {}

  ngOnInit(): void {
    this.viewUsers();
  }

  viewUsers() {
    this.auth
      .fetchUsers()
      .pipe((res) => {
        return res;
      })
      .subscribe((res) => {
        // console.log(res);
        this.userlist = res;
        console.log(this.userlist);
      });
  }
}
