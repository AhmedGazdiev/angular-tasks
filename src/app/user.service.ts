import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  age: number;
  status: string;
  isFriend: boolean;
  city: string;
  avatar: string;
  joined: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Человек паук',
      age: 25,
      status: 'online',
      isFriend: false,
      city: 'Москва',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      joined: '2023-01-10',
    },
    {
      id: 2,
      name: 'Железный человек',
      age: 30,
      status: 'offline',
      isFriend: true,
      city: 'Санкт-Петербург',
      avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
      joined: '2022-10-05',
    },
    {
      id: 3,
      name: 'Человек молот',
      age: 29,
      status: 'online',
      isFriend: false,
      city: 'Новосибирск',
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
      joined: '2023-02-01',
    },
    {
      id: 4,
      name: 'Человек азиат',
      age: 34,
      status: 'offline',
      isFriend: false,
      city: 'Казань',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      joined: '2023-01-20',
    },
  ];

  getUsers() {
    return this.users;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
