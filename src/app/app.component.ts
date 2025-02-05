import {Component} from '@angular/core';
import {FeedComponent, ProfileComponent} from './features/features';
import {UsersComponent} from './features/pages/users/users.component';

@Component({
  selector: 'app-root',
  imports: [FeedComponent, ProfileComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
