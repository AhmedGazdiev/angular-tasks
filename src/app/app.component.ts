import { NgFor, NgIf, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirective } from './custom.directive';
import { Custom2Directive } from './custom2.directive';
import { HighlightDirective } from './highlight.directive';
import { ShowForRolesDirective } from './show-for-roles.directive';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    NgFor,
    NgSwitchCase,
    CustomDirective,
    Custom2Directive,
    HighlightDirective,
    ShowForRolesDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  toggler: boolean = true;

  users = [
    { id: 1, name: 'Иван Петров' },
    { id: 2, name: 'Светлана Сидорова' },
  ];

  colorProperty: string = 'blue';
}
