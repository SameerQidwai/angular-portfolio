import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstateRoutingModule } from './estate-routing.module';
import { EstateComponent } from './estate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstateComponent
  ],
  imports: [
    CommonModule,
    EstateRoutingModule,
    FormsModule
  ]
})
export class EstateModule { }
