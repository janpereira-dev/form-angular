import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', loadChildren: () => import('./base-formgroup/base-formgroup.module').then(m => m.BaseFormgroupModule) },
  { path: 'exercise1', loadChildren: () => import('./exercise-formgroup/exercise-formgroup.module').then(m => m.ExerciseFormgroupModule) },
  { path: '**', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
