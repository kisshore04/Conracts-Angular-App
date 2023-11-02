import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { UserAuthenticatedService } from '../services/user-authenticated.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FetchContactsService } from '../services/fetch-contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  userlist: any;
  isUserAuthorized: boolean = this.userAuthenticate.checkUserAuthenticity();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private auth: AuthServiceService,
    private route: Router,
    private userAuthenticate: UserAuthenticatedService,
    private fetchContacts: FetchContactsService
  ) {}

  ngOnInit(): void {
    this.showContacts();
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.userlist.paginator = this.paginator;
    }

    if (this.sort) {
      this.userlist.sort = this.sort;
    }
  }
  // viewUsers() {
  //   this.auth.fetchUsers().subscribe((res: any) => {
  //     this.userlist = new MatTableDataSource(res);
  //     this.userlist.paginator = this.paginator; // Set the paginator here as well
  //     this.userlist.sort = this.sort;
  //   });
  // }

  showContacts() {
    this.fetchContacts.fetchContacts().subscribe((res: any) => {
      // console.log(res);
      this.userlist = new MatTableDataSource(res);
      this.userlist.paginator = this.paginator; // Set the paginator here as well
      this.userlist.sort = this.sort;
    });
  }
  logOut() {
    console.log("You've clicked log out");
    localStorage.removeItem('access-token');
    this.route.navigate(['/'], { queryParams: { data: 'false' } });
    alert("You've been logged out!");
    this.userAuthenticate.checkUserAuthenticity();
  }

  displayedColumns: string[] = ['id', '_id', 'username', 'email'];
  clickedRows = new Set();
}
