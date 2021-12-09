import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(private router: Router, public tasksService: TasksService,) { }

  ngOnInit() {
  }

  goToUser(){
    this.router.navigate(['/users']);
  }

  goLoginPage(){
    this.router.navigate(['/home']);
  }

  goToPrizes(){
    this.router.navigate(['/prizes']);
  }

  goEditTaskPage(id?: number) {
    this.router.navigateByUrl(`/edit-task${id != undefined ? '/' + id : ''}`);
  }

}
