import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseFormgroupComponent } from './exercise-formgroup.component';

const routes: Routes = [
  { path: '', component: ExerciseFormgroupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseFormgroupRoutingModule { }
