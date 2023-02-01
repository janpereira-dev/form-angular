import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseFormgroupRoutingModule } from './exercise-formgroup-routing.module';
import { ExerciseFormgroupComponent } from './exercise-formgroup.component';


@NgModule({
  declarations: [
    ExerciseFormgroupComponent
  ],
  imports: [
    CommonModule,
    ExerciseFormgroupRoutingModule
  ]
})
export class ExerciseFormgroupModule { }
