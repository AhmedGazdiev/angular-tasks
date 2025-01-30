import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appCustom2]',
})
export class Custom2Directive implements OnInit, OnChanges {
  @Input() appCustom2: any;

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.template);
  }
  ngOnChanges() {
    this.appCustom2
      ? this.viewContainer.createEmbeddedView(this.template)
      : this.viewContainer.clear();
  }
}
