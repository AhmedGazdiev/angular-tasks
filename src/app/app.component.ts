import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserCountComponent } from './user-count/user-count.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent, UserCountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tasks';
}
