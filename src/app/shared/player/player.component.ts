import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../shared/class/album';

@Component({
  selector: 'm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() album: Album = new Album();
  constructor() { }

  ngOnInit() {
    this.album.music = 'http://m10.music.126.net/20170807151441/ac9d9bcf21011543b31ad34d7b4e1963/ymusic/fd75/c069/b7d0/b24b661d90b6d82ff42730c355c91c6b.mp3';
  }

}
