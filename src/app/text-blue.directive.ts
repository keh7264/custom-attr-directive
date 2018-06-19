import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[textBlue]'
})
export class TextBlueDirective {

  // private를 추가하여 생성자 내부에서만 유효하던 ElementRef 클래스의 인스턴스 el을
  // 클래스 내부에서 참조가능한 클래스 프로퍼티로 변경
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
