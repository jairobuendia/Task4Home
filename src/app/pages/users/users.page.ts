import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private router: Router, public usersService: UsersService, private alertController: AlertController) { }

  ngOnInit() {
  }

  goLoginPage() {
    this.router.navigate(['/home']);
  }

  goTaskPage(){
    this.router.navigate(['/tasks']);
  }

  goPrizesPage(){
    this.router.navigate(['/prizes']);
  }

  async masInfo(u: User) {
    console.log("TESTING")
    const alert = await this.alertController.create({
      header: 'User info',
      message: `<h3>Name:<b>&nbsp${u.name}</b></h3><h4>Username:&nbsp<b>${u.username}</b></h4>&nbsp${u.email}`
      ,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

}
