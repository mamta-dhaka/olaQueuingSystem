import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { NewDriverComponent } from './newDriver/driver.component';
import { DriverViewComponent } from './viewDriver/driver-view.component';
import {NewDriverModule} from './newDriver';
import {DriverViewModule} from './viewDriver';


const ROUTES: Routes = [
  { path: 'driver', component: NewDriverComponent, pathMatch: 'full' },
  { path: 'driver/:id', component: DriverViewComponent, pathMatch: 'full' },

];

@NgModule({ imports: [
  CommonModule,
  FormsModule,
  NewDriverModule,
  DriverViewModule,
  RouterModule.forChild(ROUTES),
  ],
  declarations: [DriverComponent],
  exports: [DriverComponent] })
export class DriverModule {}
