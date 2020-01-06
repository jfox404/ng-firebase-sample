import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MaterialModule {}
