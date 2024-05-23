import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateMovingComponent } from './private-moving.component';

const routes: Routes = [{ path: '', component: PrivateMovingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateMovingRoutingModule { }
