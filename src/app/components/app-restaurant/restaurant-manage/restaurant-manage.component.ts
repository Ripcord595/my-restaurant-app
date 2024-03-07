import { Component } from '@angular/core';
import {AddItemComponent} from "../add-item/add-item.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-restaurant-manage',
  templateUrl: './restaurant-manage.component.html',
  styleUrl: './restaurant-manage.component.css'
})
export class RestaurantManageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '1000px',
      height: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('The dialog was closed');
    });
  }
}
