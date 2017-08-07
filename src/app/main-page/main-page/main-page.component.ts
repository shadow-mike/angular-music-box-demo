import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service'

@Component({
  selector: 'm-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  musicData: Array<any> = [];

  constructor(
    private mpService: MainPageService
  ) { }

  ngOnInit() {
  }

  searchMusic(keywords: string) {
    this.mpService.getMusic(keywords)
      .then(data => {
        this.musicData = data.data
      })
  }

}
