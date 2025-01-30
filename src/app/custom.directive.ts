import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective implements OnChanges {
  @Input('color') colorProps!: string;

  constructor(private element: ElementRef) {
    console.log('Custom Directive');
    console.log('element', this.element);

    this.element.nativeElement.style.color = 'red';
  }

  // @HostBinding('style.color') color = 'yellow';
  // @HostBinding('attr.color') attr = 'yellow';
  // @HostBinding('class.color') class: boolean = true;

  @HostBinding('style.color') color = null;
  @HostBinding('attr.color') attr = null;
  @HostBinding('class.color') class: boolean = false;

  @HostListener('click') handleClick() {
    console.log('click');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', this.colorProps);
  }
}
