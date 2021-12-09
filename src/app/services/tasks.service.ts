import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];

  taskCounter: number = 5;

  constructor() { 
    this.tasks = [
      {"id":1,"name":"Limpiar la cocina","points":100,"stars":3,"selected":false,finishDate:"09-12-2022"},
      {"id":2,"name":"Recoger el salón","points":300,"stars":4,"selected":false},
      {"id":3,"name":"Limpiar el baño","points":500,"stars":5,"selected":false},
      {"id":4,"name":"Hacer la cena","points":50,"stars":2,"selected":true},
      ];
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: number): Task {
    const task = this.tasks.filter(t => t.id === id)[0];
    const newTask = Object.assign({}, task);
    return newTask;
  }

  saveTask(task: Task): void {
    if (task.id == undefined) {
      task.id = this.taskCounter++;
      this.tasks.push(task);
    } else {
      this.deleteTask(task.id);
      this.tasks.push(task);
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id != id);
  }
}
