import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovingsComponent } from './movings.component';

const routes: Routes = [
  { path: '', component: MovingsComponent },
  { path: 'private-moving', loadChildren: () => import('./private-moving/private-moving.module').then(m => m.PrivateMovingModule) }, 
  { path: 'company-moving', loadChildren: () => import('./company-moving/company-moving.module').then(m => m.CompanyMovingModule) }, 
  { path: 'packing', loadChildren: () => import('./packing/packing.module').then(m => m.PackingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovingsRoutingModule { }
