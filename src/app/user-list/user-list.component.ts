import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser, UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  removeUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
}
