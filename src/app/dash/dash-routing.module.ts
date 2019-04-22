import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashComponent} from './dash.component';
import {MainDashComponent} from './main-dash/main-dash.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
      },
      {
        path: 'index',
        component: MainDashComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
