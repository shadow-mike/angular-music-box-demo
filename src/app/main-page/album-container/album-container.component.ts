import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../shared/class/album';

@Component({
  selector: 'm-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.scss']
})
export class AlbumContainerComponent implements OnInit {

  @Input() albums: Album[] = [];
  constructor() { }

  ngOnInit() {
  }

}
