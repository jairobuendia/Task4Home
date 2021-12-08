import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrizesService } from 'src/app/services/prizes.service';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.page.html',
  styleUrls: ['./prizes.page.scss'],
})
export class PrizesPage implements OnInit {

  constructor(private router: Router, public prizesService: PrizesService) { }

  ngOnInit() {
  }

  goLoginPage(){
    this.router.navigate(['/home']);
  }

  goToUser(){
    this.router.navigate(['/users']);
  }


  goToTasks(){
    this.router.navigate(['/tasks']);
  }

}
