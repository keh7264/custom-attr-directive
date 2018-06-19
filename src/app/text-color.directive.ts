import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[textColor]'
})
export class TextColorDirective {

  @Input() color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
