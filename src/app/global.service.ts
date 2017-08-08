import { Injectable } from '@angular/core';
import { Album } from './shared/class/album'

@Injectable()
export class GlobalService {

  singingAlbum: Album = new Album();

  constructor() { }

}
