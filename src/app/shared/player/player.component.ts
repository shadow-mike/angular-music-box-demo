import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  OnChanges,
  SimpleChanges,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { Album } from '../../shared/class/album';
import { PlayListComponent } from '../../shared/play-list/play-list.component';
import { slideUpDown } from '../../animation/slide-up-down';


@Component({
  selector: 'm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  host: {
    'style': `position: relative;`
  },
  animations: [slideUpDown]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit, OnChanges, AfterContentInit {


  @Input() album: Album = new Album();
  @ViewChild('audio') audio: ElementRef;
  @ViewChild('audioBtn') audioBtn: ElementRef;
  @ContentChild(PlayListComponent) pl: PlayListComponent;
  mcl: number = 0; // music current length
  mclTimer: any;
  noMusicPic: string = 'http://s4.music.126.net/style/web2/img/default/default_album.jpg';
  state: string = 'down'

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.listen(this.audioBtn.nativeElement, 'click', (event) => {
      const audio = this.audio.nativeElement;
      if (!audio.currentSrc) return;
      if (!audio.paused) {
        this.mclTimer = setInterval(() => {
          this.mcl = (audio.currentTime / audio.duration) * 100;
        }, 500);
      } else {
        clearInterval(this.mclTimer);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.album.previousValue 
      && changes.album.previousValue.music !== changes.album.currentValue.music) {
      // 不额外写定时器的话，click回调里的audio.currentSrc为''。这种写法与之前PrimeNG的更新chart问题一样？
      setTimeout(() => this.audioBtn.nativeElement.click(), 0);
    }
  }

  ngAfterContentInit() {
    this.pl;
  }

  slideToggle() {
    this.state = this.state==='down'?'up':'down';
  }

}
