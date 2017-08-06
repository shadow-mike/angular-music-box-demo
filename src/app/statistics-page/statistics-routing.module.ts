import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBarComponent } from '../main-page/search-bar/search-bar.component'

const routes: Routes = [
  {
    path: '',
    component: SearchBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
