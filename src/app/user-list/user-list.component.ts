import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Иван Петров' },
    { id: 2, name: 'Светлана Сидорова' },
  ];
}
