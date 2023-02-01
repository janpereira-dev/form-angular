import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseFormgroupComponent } from './base-formgroup.component';

const routes: Routes = [
  { path: '', component: BaseFormgroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseFormgroupRoutingModule { }
