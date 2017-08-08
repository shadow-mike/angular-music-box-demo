import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../shared/class/album';

@Component({
  selector: 'm-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.scss'],
  host: {
    'style': `display: flex; flex-grow: 1;`
  }
})
export class AlbumContainerComponent implements OnInit {

  @Input() albums: Album[] = [];
  constructor() { }

  ngOnInit() {
  }

}
