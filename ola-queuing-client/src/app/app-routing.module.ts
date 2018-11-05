import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerModule } from './customer';
import { CustomerComponent } from './customer/customer.component';
import {DriverComponent} from './driver/driver.component';
import {DriverModule} from './driver';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    loadChildren: (): any => CustomerModule,
  },
  {
    path: 'driver',
    component: DriverComponent,
    loadChildren: (): any => DriverModule,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: (): any => DashboardModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
