import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  user: User = {name: '', username: '', email: ''};

  constructor(private usersService: UsersService,private router: Router, private toastController: ToastController) { }

  ngOnInit(
    
  ) {
  }
  saveUser() {
    this.usersService.saveUser(this.user);
    this.router.navigate(['/users']);
    this.user = {name: '', username: '', email: ''};
    this.showToast('Saving user...');
  }

  goUsers() {
    this.router.navigate(['/users']);
    this.user = {name: '', username: '', email: ''};
    this.showToast('Canceling...');
  }

  /* Mostrar el toast */
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 800,
      position: 'bottom',
      animated: true,
      color: 'light',
    });
    toast.present();
  }
}
