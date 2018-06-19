import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <p textColor [color]="color">Text Color</p>
  `,
  styles: []
})
export class AppComponent {
  color = 'red';
}
