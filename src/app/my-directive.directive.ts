import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myDirective]'
})
export class MyDirectiveDirective {

  @Input() inputValue: string;
  @Input() staticValue: string;

  @HostListener('click') handleClick() {
    console.log(`inputValue :${this.inputValue}`);
    console.log(`staticValue :${this.staticValue}`);
  }

  constructor() { }

}
