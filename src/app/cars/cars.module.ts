import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarCardComponent } from './car-card/car-card.component';
import { MaterialModule } from '../shared/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CarEditComponent } from './car-edit/car-edit.component';


@NgModule({
  declarations: [CarsComponent, CarCardComponent, CarEditComponent],
  entryComponents: [
    CarEditComponent
  ],
  imports: [CommonModule, MaterialModule, CarsRoutingModule],
  providers: []
})
export class CarsModule {}
