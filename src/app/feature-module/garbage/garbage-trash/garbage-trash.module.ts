import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarbageTrashRoutingModule } from './garbage-trash-routing.module';
import { GarbageTrashComponent } from './garbage-trash.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GarbageTrashComponent
  ],
  imports: [
    CommonModule,
    GarbageTrashRoutingModule,
    FormsModule
  ]
})
export class GarbageTrashModule { }
