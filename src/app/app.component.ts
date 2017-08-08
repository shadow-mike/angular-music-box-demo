import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'music-box',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public glbService: GlobalService
  ) { }
}
