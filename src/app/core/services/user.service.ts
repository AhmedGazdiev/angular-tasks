import {Injectable} from '@angular/core';
import {IUser} from '../core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Человек паук',
      age: 25,
      status: 'online',
      city: 'Москва',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
      id: 2,
      name: 'Железный человек',
      age: 30,
      status: 'offline',
      city: 'Санкт-Петербург',
      avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
      id: 3,
      name: 'Человек молот',
      age: 29,
      status: 'online',
      city: 'Новосибирск',
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    {
      id: 4,
      name: 'Человек азиат',
      age: 34,
      status: 'offline',
      city: 'Казань',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
  ];


  public activeUser: IUser | null = this.users[0]


  getUsers(): IUser[] {
    return this.users;
  }

  getUserById(id: number): IUser | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(updatedUser: IUser): IUser[] {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id ? {...user, ...updatedUser} : user
    );
    return this.users;
  }

  getActiveUser(): IUser | null {
    return this.activeUser;
  }

  switchUser(id: number):void {
    const user = this.getUserById(id)
    console.log(user)
    if (user) {
      this.activeUser = user
    }
  }
}
