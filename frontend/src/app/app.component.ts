import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModuleComponent } from './dialog-module/dialog-module.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  // title = 'frontend';

  // openDialog() {
  //   this.dialog.open(DialogModuleComponent, {
  //     data: { animal: 'leo' },
  //   });
  // }
}
