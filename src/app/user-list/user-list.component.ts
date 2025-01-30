import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule, UserCardComponent, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Иван Петров' },
    { id: 2, name: 'Светлана Сидорова' },
  ];

  onUserDeleted() {
    console.log('Дочерний компонент сообщил об удалении пользователя');
  }
}
