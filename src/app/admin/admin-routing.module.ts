import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {MainAdminComponent} from './main-admin/main-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
      },
      {
        path: 'index',
        component: MainAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
