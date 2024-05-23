import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongtermRentRoutingModule } from './longterm-rent-routing.module';
import { LongtermRentComponent } from './longterm-rent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LongtermRentComponent
  ],
  imports: [
    CommonModule,
    LongtermRentRoutingModule,
    FormsModule
  ]
})
export class LongtermRentModule { }
