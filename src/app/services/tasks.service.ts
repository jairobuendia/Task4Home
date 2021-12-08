import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];

  constructor() { 
    this.tasks = [
      {"id":1,"name":"Limpiar la cocina","points":100,"stars":3,"selected":false},
      {"id":2,"name":"Recoger el salón","points":300,"stars":4,"selected":false},
      {"id":3,"name":"Limpiar el baño","points":500,"stars":5,"selected":false},
      {"id":4,"name":"Hacer la cena","points":50,"stars":2,"selected":true},
      ];
  }

  getTasks() {
    return this.tasks;
  }
}
