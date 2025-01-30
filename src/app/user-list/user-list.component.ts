import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userName: string = 'Расомаха';
  userPicUrl = '/favicon.ico';
  deleteUser() {
    console.log('Пользователь удалён');
  }
  name = '';
}
