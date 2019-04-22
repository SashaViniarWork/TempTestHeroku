import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MainAdminComponent} from './main-admin/main-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from '../app-material/app-material.module';
import {HttpClientModule} from '@angular/common/http';
import {GirlService} from '../services/girl.service';

@NgModule({
  declarations: [AdminComponent, MainAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [GirlService]
})
export class AdminModule {
}
