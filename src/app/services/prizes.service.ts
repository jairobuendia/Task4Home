import { Injectable } from '@angular/core';
import { Prize} from '../model/prize';

@Injectable({
  providedIn: 'root'
})
export class PrizesService {
  prizes: Prize[] = [];

  constructor() { 
    this.prizes = [
      {"id":1,"name":"Limpiar la cocina","points":100,"image":""},
      ];
  }

  getTasks() {
    return this.tasks;
  }
}