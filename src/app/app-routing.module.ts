import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
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
    component: MainPageComponent
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