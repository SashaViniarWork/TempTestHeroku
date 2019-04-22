import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
