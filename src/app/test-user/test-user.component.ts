import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser, UserService } from '../services/user.service';

@Component({
  selector: 'app-test-user',
  imports: [FormsModule, NgFor],
  templateUrl: './test-user.component.html',
  styleUrl: './test-user.component.scss',
})
export class TestUserComponent implements OnInit {
  userService = inject(UserService);
  users: IUser[] = [];
  name!: string;
  email!: string;

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log('initial users array: ', this.userService.getUsers());
  }

  createUser() {
    this.userService.createUser({
      name: this.name,
      email: this.email,
    });
    console.log('updated users array: ', this.userService.getUsers());
  }
  updateUser(id: number) {
    this.userService.updateUser(id, 'John Wik', 'john.wik@example.com');
    console.log('updated users array: ', this.userService.getUsers());
  }
  deleteUser(id: any) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
    console.log('updated users array: ', this.userService.getUsers());
  }
  logUsers() {
    console.log('log users array: ', this.userService.getUsers());
  }
}
