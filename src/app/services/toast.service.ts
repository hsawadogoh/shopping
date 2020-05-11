import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(
      private toastController: ToastController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create(
        {
          duration: 1000,
          position: 'middle',
          message: `${message}`
        }
    );
    return await toast.present();
  }
}
