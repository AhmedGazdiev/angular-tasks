import { Component } from '@angular/core';
import { TestUserComponent } from './test-user/test-user.component';

@Component({
  selector: 'app-root',
  imports: [TestUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tasks';
}
