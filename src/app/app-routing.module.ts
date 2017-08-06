import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchBarComponent } from './main-page/search-bar/search-bar.component'

const appRoutes: Routes = [
  {
    path: 'main',
    component: SearchBarComponent
  },
  {
    path: 'statistics',
    loadChildren: 'app/statistics-page/statistics.module#StatisticsModule'
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: SearchBarComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }