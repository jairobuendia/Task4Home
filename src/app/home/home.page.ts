import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  email: string;
  password: string;

  goRegisterPage() {
    this.router.navigate(['/register']);
  }

  goWelcomePage() {
    if (this.email == "test@gmail.com" && this.password == "123456") {
      this.router.navigate(['/welcome']);
    } else {
      this.showToast("Email o contraseña son incorrectos, inténtalo de nuevo")
      this.email = "";
      this.password = "";
    }
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
