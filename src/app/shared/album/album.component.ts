import { Component, OnInit, Input } from '@angular/core';

import { Album } from '../class/album'

@Component({
  selector: 'm-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  constructor() { }

  ngOnInit() {
  }

}
