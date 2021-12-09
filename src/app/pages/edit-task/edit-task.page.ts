import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/model/task';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  task: Task = {name: '', stars: null, points: null, selected: false};

  constructor(private tasksService: TasksService, private router: Router, private activatedRoute: ActivatedRoute, public alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id != null) {
      this.task = this.tasksService.getTask(+id);
    }
  }

  saveTask() {
    this.tasksService.saveTask(this.task);
    this.router.navigate(['/tasks']);
  }

  // deleteTask(){
  //   this.tasksService.deleteTask(this.task.id);
  //   this.router.navigate(['/tasks']);
  // }
  goTasks() {
    this.router.navigate(['/tasks']);
  }

  changeSelected(t: Task){
    if(t.selected == false){
      t.selected = true;
      this.showToast("Assigned task...")
    } else {
      t.selected = false;
      this.showToast("Designed task...")
    }
  }
  
  async deleteTask(t: Task) {
    const alert = await this.alertController.create({
      header: 'Delete task',
      message: `Task <strong>"${t.name}"</strong> will be 
              deleted!`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            
          }
        }, {
          text: 'Delete',
          cssClass: 'secondary',
          handler: () => {
            this.tasksService.deleteTask(t.id);
            this.router.navigate(['/tasks']);
          }
        }
      ]
    });

    await alert.present();
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 500,
      position: 'bottom',
      animated: true,
      color: 'light',
    });
    toast.present();
  }
}
