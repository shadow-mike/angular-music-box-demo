import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[m-loading]'
})
export class LoadingDirective {

  constructor(el: ElementRef) { }

}
