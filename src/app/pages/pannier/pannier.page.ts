import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {Pannier} from '../../model/pannier.model';
import {ParameterService} from '../../services/parameter.service';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.page.html',
  styleUrls: ['./pannier.page.scss'],
})
export class PannierPage implements OnInit {
  pannier: Pannier[];
  sommeTotal = 0;
  constructor(
      private modalController: ModalController,
      private parameter: ParameterService,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.pannier = new Array<Pannier>();
    this.pannier = this.parameter.getPannierProduct();
    this.sommeTotal = 0;
    this.calculSommeTotal();
    console.log(this.pannier);
    console.log(this.parameter.getPannierProduct());
  }

  onDismiss() {
    this.modalController.dismiss();
  }

  calculSommeTotal() {
    if (this.pannier.length !== 0) {
      for (const p of this.pannier) {
        this.sommeTotal += p.qte * p.item.price + p.item.availability.feed;
      }
    }
  }

  async presentAlert(pannier: Pannier, index: number) {
      console.log(index);
      const alert = await this.alertCtrl.create({
          header: 'Suppression',
          message: 'Voulez-vous supprimer l\'article "' + pannier.item.title + '"',
          buttons: [
              {
                  text: 'Annuler',
                  role: 'cancel'
              },
              {
                  text: 'Oui',
                  handler: () => {
                      this.removeArticle(index);
                  }
              }
          ]
      });
      return await alert.present();
  }

  removeArticle(index: number) {
      this.pannier = this.parameter.removeProductFromPannier(index);
      this.sommeTotal = 0;
      this.calculSommeTotal();
  }
}
