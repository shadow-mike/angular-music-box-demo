import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  host: {
    'width': '100%'
  }
})
export class SearchBarComponent implements OnInit {

  @Output() onSearched = new EventEmitter<string>();
  keywords: string = '';

  constructor() { }

  ngOnInit() {
  }

  search () {
    this.onSearched.emit(this.keywords);
  }

}
