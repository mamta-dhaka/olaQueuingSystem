import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({ imports: [
  CommonModule,
  FormsModule,
  MomentModule,
  RouterModule.forChild(ROUTES),
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent] })
export class DashboardModule {}
