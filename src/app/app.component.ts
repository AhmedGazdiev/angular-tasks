import { NgFor, NgIf, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  toggler: boolean = true;

  users = [
    { id: 1, name: 'Иван Петров' },
    { id: 2, name: 'Светлана Сидорова' },
  ];
}
