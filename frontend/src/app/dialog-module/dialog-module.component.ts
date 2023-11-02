import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-module',
  templateUrl: './dialog-module.component.html',
  styleUrls: ['./dialog-module.component.css'],
})
export class DialogModuleComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
