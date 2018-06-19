import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <p textColor [color]="color">Text Color</p>
      <button myDirective [inputValue]="msg" staticValue="hi">Click me</button>
  `,
  styles: []
})
export class AppComponent {
  color = 'red';
  msg = 'button click';
}
