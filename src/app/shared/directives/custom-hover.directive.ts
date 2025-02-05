import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[customHover]',
})
export class CustomHoverDirective {
  @Input() customHover!: string;
  @HostBinding('style.backgroundColor') bgColor: string | null = null;
  @HostBinding('style.color') color: string | null = null;
  @HostBinding('style.transition') transition: string = 'background-color .3s ease';

  @HostListener('mouseenter') onMouseEnter(): void {
    if (this.customHover === 'online') {
      this.bgColor = 'green'
      this.color = 'white'
    } else {
      this.bgColor = 'red'
      this.color = 'black'
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.bgColor = null
    this.color = null
  }
}
