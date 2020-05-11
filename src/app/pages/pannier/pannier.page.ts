import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.page.html',
  styleUrls: ['./pannier.page.scss'],
})
export class PannierPage implements OnInit {

  constructor(
      private modalController: ModalController
  ) { }

  ngOnInit() {
  }

    onDismiss() {
        this.modalController.dismiss();
    }
}
