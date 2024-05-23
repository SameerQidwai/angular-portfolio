import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListingsComponent
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
    NgxPaginationModule
  ]
})
export class ListingsModule { }
