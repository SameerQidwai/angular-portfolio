import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMovingRoutingModule } from './private-moving-routing.module';
import { PrivateMovingComponent } from './private-moving.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PrivateMovingComponent
  ],
  imports: [
    CommonModule,
    PrivateMovingRoutingModule,
    SharedModule
  ]
})
export class PrivateMovingModule { }
