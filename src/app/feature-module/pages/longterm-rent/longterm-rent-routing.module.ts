import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LongtermRentComponent } from './longterm-rent.component';

const routes: Routes = [{ path: '', component: LongtermRentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongtermRentRoutingModule { }
