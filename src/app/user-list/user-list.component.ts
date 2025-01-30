import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit, OnDestroy, OnChanges {
  ngOnInit() {
    console.log('ngOnInit: компонент инициализирован');
    // Здесь можно, например, загрузить пользователей из сервиса
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: компонент будет уничтожен');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: входные свойства изменились', changes);
  }
}
