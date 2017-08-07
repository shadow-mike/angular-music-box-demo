import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumComponent } from './album/album.component';
import { PlayerComponent } from './player/player.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchBarComponent,
    AlbumComponent,
    PlayerComponent
  ],
  exports: [
    FormsModule,
    HttpModule,
    SearchBarComponent,
    AlbumComponent,
    PlayerComponent
  ]
})
export class SharedModule { }
