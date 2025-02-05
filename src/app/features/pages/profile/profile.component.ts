import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {IUser} from '../../../core/models/user';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  public activeUser: IUser | null = null;
  private userService = inject(UserService);

  ngOnInit() {
    this.activeUser = this.userService.activeUser
  }
}
