import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {IUser} from '../../../core/models/user';
import {CardComponent} from '../../../shared/components/card/card.component';
import {CustomHoverDirective} from '../../../shared/directives/custom-hover.directive';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [
    CardComponent,
    CustomHoverDirective,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService)
  public users: IUser[] = []

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

  toggleUser(id: number) {
    this.userService.switchUser(id)
  }

  updateUser(name: string, age: number, status: 'online' | 'offline') {
    const updatedUser: IUser = {
      id: 4,
      name: name, // Новое имя
      age: age, // Новый возраст
      status: status, // Новый статус
      city: 'Казань',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    };
    this.users = this.userService.updateUser(updatedUser);
  }


}
