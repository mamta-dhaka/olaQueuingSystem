import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewDriverComponent } from './driver.component';

const ROUTES: Routes = [
  { path: 'new', component: NewDriverComponent, pathMatch: 'full' },
];

@NgModule({ imports: [
  CommonModule,
  FormsModule,
  RouterModule.forChild(ROUTES),
  ],
  declarations: [NewDriverComponent],
  exports: [NewDriverComponent] })
export class NewDriverModule {}
