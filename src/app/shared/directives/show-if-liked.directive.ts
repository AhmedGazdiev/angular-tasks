import {Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[showIfLiked]'
})
export class ShowIfLikedDirective implements OnInit {
  private viewContainer: ViewContainerRef = inject(ViewContainerRef)
  private template: TemplateRef<unknown> = inject(TemplateRef)
  private _show: boolean = false;

  @Input() set showIfLiked(show: boolean) {
    this._show = show
    this.displayTemplate()
  }

  ngOnInit() {
    this.displayTemplate()
  }

  private displayTemplate() {
    this.viewContainer.clear()
    if (this._show) {
      this.viewContainer.createEmbeddedView(this.template)
    }
  }
}
