import { Injectable } from '@angular/core';

export interface IUser {
  id?: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [
    {
      id: 34685,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 34758,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: 83465,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
    },
    {
      id: 95637,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
    },
    {
      id: 58345,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
    },
    {
      id: 34540,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
    },
    {
      id: 45465,
      name: 'Emily Thompson',
      email: 'emily.thompson@example.com',
    },
    {
      id: 54855,
      name: 'Frank Miller',
      email: 'frank.miller@example.com',
    },
    {
      id: 78678,
      name: 'Grace Wilson',
      email: 'grace.wilson@example.com',
    },
  ];

  constructor() {}

  nextId() {
    return Math.floor(Math.random() * 100000);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return id ? this.users.find((user) => user.id === id) : undefined;
  }

  createUser({ name, email }: IUser) {
    const newUrser = {
      id: this.nextId(),
      name,
      email,
    };
    this.users.push(newUrser);
  }

  updateUser(id: number, newName: string, newEmail: string) {
    const user = this.getUserById(id);
    if (user) {
      user.name = newName;
      user.email = newEmail;
    }
    return user;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
