import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackingRoutingModule } from './packing-routing.module';
import { PackingComponent } from './packing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PackingComponent
  ],
  imports: [
    CommonModule,
    PackingRoutingModule,
    SharedModule
  ]
})
export class PackingModule { }
