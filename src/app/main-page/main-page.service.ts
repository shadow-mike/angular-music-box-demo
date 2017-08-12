import { Injectable } from '@angular/core';
import { MHttp } from '../service/m-http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainPageService {

  constructor(private http: MHttp) { }

  getMusic(keywords: string): Promise<any> {
    const url = `/search?keywords=${keywords}`;
    return this.http.get(url)
      .toPromise()
      .then(data => data.json())
      .catch(error => console.error(error));
  }

}
