import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {FIREBASE_CONFIG} from './firebase.cred';
import {AppMaterialModule} from './app-material/app-material.module';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
