import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Attribute Directive</h1>

  <h4>텍스트의 컬러를 선택하세요</h4>
  <div>
    <input type="radio" name="colors" (click)="color='red'">Red
    <input type="radio" name="colors" (click)="color='blue'">Blue
    <input type="radio" name="colors" (click)="color='green'">Green
  </div>

  <p [textColor]="color" defaultColor="violet">Text Color</p>

  <h2 *myNgIf="condition">Hello {{name}}</h2>
  <button (click)="condition=!condition">Click</button>

  <br/><br/>
  <ng-container *ngIf="isShow">
    <ng-container *ngFor="let item of items">
      <span>{{item}}</span>
    </ng-container>
  </ng-container>
  <button (click)="isShow=!isShow">
    {{isShow?'hide':'show'}}
  </button>
  `,
  styles: []
})
export class AppComponent {
  color: string;

  condition = false;
  name = 'Lee';

  isShow = true;
  items = [1, 2, 3];
}
