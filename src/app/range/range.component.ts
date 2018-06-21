import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  template: `
    <h1>Your age : </h1>
    <select>
      <ng-container *range="[10,19]; let num">
       <option [value]="num">{{num}}</option>
      </ng-container>
    </select>

    <h1>Year: </h1>
    <select>
      <ng-container *range="[2000,2017]; let num">
        <option [value]="num">{{num}}</option>
      </ng-container>
    </select>
  `,
  styles: []
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
