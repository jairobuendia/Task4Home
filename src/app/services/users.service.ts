import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  userCounter: number = 4;

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Jairo',
        username: 'ExoKone',
        email: 'jairo@gmail.com',
        password: '123456',
        image: '../../assets/img/1.jpg',
      },
      {
        id: 2,
        name: 'Sergio',
        username: 'Molon_Labe',
        email: 'test@gmail.com',
        password: '123456',
      },
      {
        id: 3,
        name: 'Lucía',
        username: 'Lalu23',
        email: 'test3@gmail.com',
        password: '123456',
        image: '../../assets/img/3.jpg',
      },
      {
        id: 4,
        name: 'David',
        username: 'CallMeWill',
        email: 'test2@gmail.com',
        password: '123456',
        image: '../../assets/img/2.jpg',
      },
    ];
  }

  getUsers() {
    return this.users;
  }

  saveUser(user: User): void {
    if (user.id == undefined) {
      user.id = this.userCounter++;
      this.users.push(user);
    } else {
      this.deleteTask(user.id);
      this.users.push(user);
    }
  }

  deleteTask(id: number) {
    this.users = this.users.filter((t) => t.id != id);
  }
}
