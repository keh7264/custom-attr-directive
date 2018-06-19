import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[textColor]'
})
export class TextColorDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('textColor') color: string;
  @Input() defaultColor: string;

  ngOnInit(): void {
    this.textColor(this.defaultColor);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(this.defaultColor);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
