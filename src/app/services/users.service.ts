import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor() { 
    this.users = [
      {"id":1,"name":"Jairo","username":"BulKING","email":"jairo@gmail.com","password":"123456","image":"../../assets/img/43.jpg"},
      {"id":2,"name":"Sergio","username":"FFFServicio","email":"test@gmail.com","password":"123456"},
      {"id":3,"name":"Alex","username":"LocaliSHON","email":"test1@gmail.com","password":"123456"},
      ];
  }

  getUsers() {
    return this.users;
  }
}

