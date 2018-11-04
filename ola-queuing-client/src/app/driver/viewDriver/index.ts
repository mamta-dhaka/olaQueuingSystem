import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DriverViewComponent } from './driver-view.component';
import {NewDriverModule} from '../newDriver';

const ROUTES: Routes = [
  { path: '', component: DriverViewComponent },
];

@NgModule({ imports: [
  CommonModule,
  FormsModule,
  MomentModule,
  RouterModule.forChild(ROUTES),
  ],
  declarations: [DriverViewComponent],
  exports: [DriverViewComponent] })
export class DriverViewModule {}
