import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingListRoutingModule } from './listing-list-routing.module';
import { ListingListComponent } from './listing-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListingListComponent
  ],
  imports: [
    CommonModule,
    ListingListRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ListingListModule { }
