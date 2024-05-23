import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRentalRoutingModule } from './car-rental-routing.module';
import { CarRentalComponent } from './car-rental.component';
// import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CarRentalComponent
  ],
  imports: [
    CommonModule,
    CarRentalRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class CarRentalModule { }
