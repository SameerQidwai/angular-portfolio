import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadsideAssistantRoutingModule } from './roadside-assistant-routing.module';
import { RoadsideAssistantComponent } from './roadside-assistant.component';


@NgModule({
  declarations: [
    RoadsideAssistantComponent
  ],
  imports: [
    CommonModule,
    RoadsideAssistantRoutingModule
  ]
})
export class RoadsideAssistantModule { }
