import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <p textBlue> textBlue directive </p>
      <h1 #h1>Heading1</h1>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  @ViewChild('h1') myElem: ElementRef;

  ngAfterViewInit() {
    // ElementRef의 nativeElement 프로퍼티는 네이티브 DOM 요소를 가리킨다.
    console.log(this.myElem.nativeElement.outerHTML);

    this.myElem.nativeElement.style.color = 'red';
  }
}
