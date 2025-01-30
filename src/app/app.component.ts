import { JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CutTextPipe } from './cut-text.pipe';
import { SortDataPipe } from './sort-data.pipe';

@Component({
  selector: 'app-root',
  imports: [CutTextPipe, SortDataPipe, JsonPipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tasks';

  ageOfUsers = [{ age: 0 }, { age: 12 }, { age: 33 }, { age: 17 }, { age: 15 }];
}
