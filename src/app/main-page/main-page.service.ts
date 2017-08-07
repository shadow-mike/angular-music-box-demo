import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainPageService {

  constructor(private http: Http) { }

  getMusic(keywords: string): Promise<any> {
    const url = `http://localhost:2333/api/search?keywords=${keywords}`;
    return this.http.get(url)
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));
  }

}
