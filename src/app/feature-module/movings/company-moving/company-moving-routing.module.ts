import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyMovingComponent } from './company-moving.component';

const routes: Routes = [{ path: '', component: CompanyMovingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyMovingRoutingModule { }
