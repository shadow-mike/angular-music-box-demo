import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './main-page.service';
import { AlbumContainerComponent } from './album-container/album-container.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MainPageComponent,
    AlbumContainerComponent
  ],
  providers: [
    MainPageService
  ]
})
export class MainPageModule { }
