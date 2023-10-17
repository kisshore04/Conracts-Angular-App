import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
// import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  userlist: any;
  isUserAuthorized: boolean = false;
  constructor(private auth: AuthServiceService, private route: Router) {}

  ngOnInit(): void {
    this.viewUsers();
    // this.isUserAuthorized = this.route.snapshot.queryParamMap.get('data')
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
