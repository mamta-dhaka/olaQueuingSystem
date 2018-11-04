import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionService } from './services/connection.service';
import { DashboardModule } from './dashboard';

import { CustomerModule } from './customer';
import {DriverModule} from './driver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerModule,
    DashboardModule,
    DriverModule,
    MomentModule
  ],
  providers: [ ConnectionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
