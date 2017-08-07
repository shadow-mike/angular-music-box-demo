import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SearchBarComponent } from './search-bar/search-bar.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchBarComponent
  ],
  exports: [
    FormsModule,
    HttpModule,
    SearchBarComponent,
  ]
})
export class SharedModule { }
