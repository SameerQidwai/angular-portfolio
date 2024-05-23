import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMovingRoutingModule } from './company-moving-routing.module';
import { CompanyMovingComponent } from './company-moving.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    CompanyMovingComponent
  ],
  imports: [
    CommonModule,
    CompanyMovingRoutingModule,
    SharedModule,
    DatePipe
  ]
})
export class CompanyMovingModule { }
