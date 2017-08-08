import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Album } from '../../shared/class/album';

@Component({
  selector: 'm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {


  @Input() album: Album = new Album();
  @ViewChild('audio') audio: ElementRef;
  @ViewChild('audioBtn') audioBtn: ElementRef;
  mcl: number = 0; // music current length
  mclTimer: any;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.album.music = 'http://m10.music.126.net/20170808110205/ea4709336046dd5c194bbb3c092046a1/ymusic/fc05/9501/db63/b0a3040b0f75e288bbb60cdc06cd2d0e.mp3';
    this.album.pic = "http://p1.music.126.net/Umm6zijgR6TO35X9nXkWcA==/2477199697381036.jpg?param=100x100";
    this.album.name = "随便~\(≧▽≦)/~啦啦啦";
    this.renderer.listen(this.audioBtn.nativeElement, 'click', (event) => {
      console.log(this.audio)
      let audio = this.audio.nativeElement;
      if (!audio.paused) {
        this.mclTimer = setInterval(() => {
          this.mcl = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;
        }, 500)
      } else {
        clearInterval(this.mclTimer);
      }
    });
  }

  // ngDoCheck() {
  //   console.log(this.mcl)
  //   this.mcl = (this.audio.nativeElement.currentTime / this.audio.nativeElement.duration) * 100;
  // }

}
