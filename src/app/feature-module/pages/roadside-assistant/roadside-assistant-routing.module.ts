import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadsideAssistantComponent } from './roadside-assistant.component';

const routes: Routes = [{ path: '', component: RoadsideAssistantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadsideAssistantRoutingModule { }
