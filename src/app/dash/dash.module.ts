import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import {GirlService} from '../services/girl.service';
import {AppMaterialModule} from '../app-material/app-material.module';

@NgModule({
  declarations: [DashComponent, MainDashComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    AppMaterialModule
  ],
  providers: [GirlService]
})
export class DashModule { }
