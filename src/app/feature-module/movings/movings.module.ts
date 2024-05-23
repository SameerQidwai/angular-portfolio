import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovingsRoutingModule } from './movings-routing.module';
import { MovingsComponent } from './movings.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MovingsComponent
  ],
  imports: [
    CommonModule,
    MovingsRoutingModule,
    DatePipe
  ]
})
export class MovingsModule { }
