import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-exam',
  template: `
    <p>
      directive-exam works!
    </p>
  `,
  styles: []
})
export class DirectiveExamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
