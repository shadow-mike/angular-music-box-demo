import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Album } from '../../shared/class/album';

@Component({
  selector: 'm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {


  mcl: number = 0; // music current length
  @Input() album: Album = new Album();
  @ViewChild('audio') audio: ElementRef;
  @ViewChild('audioBtn') audioBtn: ElementRef;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.album.music = 'http://m10.music.126.net/20170807222129/88261227856ef422f9f4ebfa77db90ac/ymusic/7d5f/aaeb/36d1/3921301e60fddf07aa85f016a00241f3.mp3';
    this.renderer.listen(this.audioBtn.nativeElement, 'click', (event) => {
      console.log(event)
      // 判断状态，定时器修改mcl
    })
  }

  // ngDoCheck() {
  //   console.log(this.mcl)
  //   this.mcl = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;
  // }

}
