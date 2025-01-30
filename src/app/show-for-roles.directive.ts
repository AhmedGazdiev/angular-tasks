import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowForRoles]',
})
export class ShowForRolesDirective {
  @Input('appShowForRoles') set roles(allowedRoles: string[]) {
    const userRole = 'admin';

    if (allowedRoles.includes(userRole)) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
