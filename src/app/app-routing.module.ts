import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminModule} from './admin/admin.module';
import {DashModule} from './dash/dash.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () =>  AdminModule,
  },
  {
    path: 'dash',
    loadChildren: () =>  DashModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
