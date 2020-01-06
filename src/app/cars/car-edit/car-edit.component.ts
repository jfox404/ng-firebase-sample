import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.less']
})
export class CarEditComponent implements OnInit {
  @Input()
  action: string;
  constructor(
    public dialogRef: MatDialogRef<CarEditComponent>,
    @Inject(MAT_DIALOG_DATA) public car: Car
  ) {}

  ngOnInit() {
    this.action = this.car.id ? 'Edit' : 'Add';
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
