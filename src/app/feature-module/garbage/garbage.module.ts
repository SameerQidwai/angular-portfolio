import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarbageRoutingModule } from './garbage-routing.module';
import { GarbageComponent } from './garbage.component';


@NgModule({
  declarations: [
    GarbageComponent
  ],
  imports: [
    CommonModule,
    GarbageRoutingModule,
  ]
})
export class GarbageModule { }
