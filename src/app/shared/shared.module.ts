import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumComponent } from './album/album.component';
import { PlayerComponent } from './player/player.component';
import { FormatSecondsPipe } from './pipes/format-seconds.pipe';
import { PlayListComponent } from './play-list/play-list.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    SearchBarComponent,
    AlbumComponent,
    PlayerComponent,
    FormatSecondsPipe,
    PlayListComponent
  ],
  exports: [
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SearchBarComponent,
    AlbumComponent,
    PlayerComponent,
    FormatSecondsPipe,
    PlayListComponent
  ]
})
export class SharedModule { }
