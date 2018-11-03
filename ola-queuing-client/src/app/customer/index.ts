import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const ROUTES: Routes = [
  { path: '', component: CustomerComponent },
];

@NgModule({ imports: [
  CommonModule,
  FormsModule,
  RouterModule.forChild(ROUTES),
  ],
  declarations: [CustomerComponent],
  exports: [CustomerComponent] })
export class CustomerModule {}
