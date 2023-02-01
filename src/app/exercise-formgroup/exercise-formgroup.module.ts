import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseFormgroupRoutingModule } from './exercise-formgroup-routing.module';
import { ExerciseFormgroupComponent } from './exercise-formgroup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciseFormgroupComponent
  ],
  imports: [
    CommonModule,
    ExerciseFormgroupRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExerciseFormgroupModule { }
