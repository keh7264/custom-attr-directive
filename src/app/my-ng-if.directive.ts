import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myNgIf]'
})
export class MyNgIfDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {

  }

  @Input() set myNgIf(condition: boolean) {
    if (condition) {
      // 호스트 뷰에 ng-template 디렉티브를 추가
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // 호스트 뷰에서 ng-template 디렉티브를 제거
      this.viewContainer.clear();
    }
  }
}
