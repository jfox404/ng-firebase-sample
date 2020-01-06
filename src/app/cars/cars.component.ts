import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Car } from './car.model';
import { CarEditComponent } from './car-edit/car-edit.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(public dialog: MatDialog) {
    this.cars = [
      {
        id: '1',
        make: 'Hyundai',
        model: 'Veloster',
        year: 2015,
        initCrtdDt: new Date(),
        lastUpdateDt: new Date(),
        lastUpdateById: 'jfox404'
      },
      {
        id: '1',
        make: 'Hyundai',
        model: 'Elantra',
        year: 2013,
        initCrtdDt: new Date(),
        lastUpdateDt: new Date(),
        lastUpdateById: 'jfox404'
      },
      {
        id: '1',
        make: 'Hyundai',
        model: 'Veloster',
        year: 2015,
        initCrtdDt: new Date(),
        lastUpdateDt: new Date(),
        lastUpdateById: 'jfox404'
      },
      {
        id: '1',
        make: 'Hyundai',
        model: 'Elantra',
        year: 2013,
        initCrtdDt: new Date(),
        lastUpdateDt: new Date(),
        lastUpdateById: 'jfox404'
      }
    ];
  }

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
