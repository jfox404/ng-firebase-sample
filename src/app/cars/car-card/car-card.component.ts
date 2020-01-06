import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { MatDialog } from '@angular/material/dialog';
import { CarEditComponent } from '../car-edit/car-edit.component';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.less']
})
export class CarCardComponent implements OnInit {
  @Input()
  car: Car;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openCarDialog(car: Car): void {
    const dialogRef = this.dialog.open(CarEditComponent, {
      width: '250px',
      data: car,
      autoFocus: false,
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
