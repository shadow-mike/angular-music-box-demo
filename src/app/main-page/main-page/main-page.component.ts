import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service'

@Component({
  selector: 'm-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  host: {
    'style' : `flex-grow: 1; display: flex;`
  }
})
export class MainPageComponent implements OnInit {

  albums: Array<any> = [];

  constructor(
    private mpService: MainPageService
  ) { }

  ngOnInit() {
  }

  searchMusic(keywords: string) {
    this.mpService.getMusic(keywords)
      .then(data => {
        data && data.code === 200 ?
          this.albums = data.data : [];
      })
      .catch((err) => console.log(err));
  }

}
