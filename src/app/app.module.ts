import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBlueDirective } from './text-blue.directive';
import { TextColorDirective } from './text-color.directive';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyNgIfDirective } from './my-ng-if.directive';
import { RangeDirective } from './range.directive';
import { RangeComponent } from './range/range.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective,
    TextColorDirective,
    MyDirectiveDirective,
    MyNgIfDirective,
    RangeDirective,
    RangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
