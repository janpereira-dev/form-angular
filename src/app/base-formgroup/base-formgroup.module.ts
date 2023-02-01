import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseFormgroupRoutingModule } from './base-formgroup-routing.module';
import { BaseFormgroupComponent } from './base-formgroup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BaseFormgroupComponent
  ],
  imports: [
    CommonModule,
    BaseFormgroupRoutingModule,
    ReactiveFormsModule
  ]
})
export class BaseFormgroupModule { }
