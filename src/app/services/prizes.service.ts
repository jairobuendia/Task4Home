import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Prize} from '../model/prize';

@Injectable({
  providedIn: 'root'
})
export class PrizesService {
  prizes: Prize[] = [];

  constructor() { 
    this.prizes = [
      {"id":1,"name":"Entrada Warner","points":5000,"image":"../../assets/prizes-img/warner.jpg"},
      {"id":2,"name":"20€ Paysafecard","points":2500},
      {"id":3,"name":"1 Juego a elegir","points":3000,"image":"../../assets/prizes-img/juegos-ps5.jpg"},
      {"id":4,"name":"50€ en Primark","points":3500},
      ];
  }

  getPrizes() {
    return this.prizes;
  }
}