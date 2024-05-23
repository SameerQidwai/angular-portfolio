import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarRentalComponent } from './car-rental.component';

const routes: Routes = [{ path: '', component: CarRentalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRentalRoutingModule { }
