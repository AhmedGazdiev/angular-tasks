import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-count',
  imports: [],
  templateUrl: './user-count.component.html',
  styleUrl: './user-count.component.scss',
})
export class UserCountComponent implements OnInit {
  total = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const users = this.userService.getUsers();
    this.total = users.length;
  }
}
