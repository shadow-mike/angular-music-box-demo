import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../shared/class/album';
import { GlobalService } from '../../global.service';

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
  constructor(
    public glbService: GlobalService
  ) { }

  ngOnInit() {
  }

  setSingingMusic(a: Album) {
    this.glbService.singingAlbum = a;
  }

}
