import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarbageComponent } from './garbage.component';

const routes: Routes = [
  { path: '', component: GarbageComponent },
  { path: 'estate', loadChildren: () => import('./estate/estate.module').then(m => m.EstateModule) }, 
  { path: 'garbage-trash', loadChildren: () => import('./garbage-trash/garbage-trash.module').then(m => m.GarbageTrashModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarbageRoutingModule { }
