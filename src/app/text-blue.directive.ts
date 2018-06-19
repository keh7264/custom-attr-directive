import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'blue';
   }

}
