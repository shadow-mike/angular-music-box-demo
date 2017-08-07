import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './main-page.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MainPageComponent
  ],
  providers: [
    MainPageService
  ]
})
export class MainPageModule { }
