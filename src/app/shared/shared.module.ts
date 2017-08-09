import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumComponent } from './album/album.component';
import { PlayerComponent } from './player/player.component';
import { FormatSecondsPipe } from './pipes/format-seconds.pipe';
import { LoadingDirective } from './directives/loading.directive'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchBarComponent,
    AlbumComponent,
    PlayerComponent,
    FormatSecondsPipe,
    LoadingDirective
  ],
  exports: [
    FormsModule,
    HttpModule,
    SearchBarComponent,
    AlbumComponent,
    PlayerComponent,
    FormatSecondsPipe
  ]
})
export class SharedModule { }
