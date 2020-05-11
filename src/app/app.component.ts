import {Component, QueryList, ViewChildren} from '@angular/core';

import {AlertController, IonRouterOutlet, MenuController, ModalController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {LottieSplashScreen} from '@ionic-native/lottie-splash-screen/ngx';
import {ParameterService} from './services/parameter.service';
import {Category} from './model/category.model';
import {PannierPage} from './pages/pannier/pannier.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  categories: Category[];

  @ViewChildren(IonRouterOutlet)
  routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private lottieSplashScreen: LottieSplashScreen,
    private parameter: ParameterService,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.backButtonEvent();
    this.categories = parameter.getCategories();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      // this.lottieSplashScreen.show();
      setTimeout(() => {
        this.lottieSplashScreen.hide();
      }, 75);
    });
  }

  async onOpenPannier() {
    this.menuCtrl.close();
    const modal = await this.modalController.create({
        component: PannierPage
    });
    return await modal.present();
  }

  onOpenHome() {
    this.menuCtrl.close();
    this.router.navigate(['home']);
  }

    backButtonEvent() {
        document.addEventListener('backbutton', () => {
            this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                } else if (this.router.url === '/login' || this.router.url === '/home') {
                     this.presentConfirmation();
                } else {
                    outlet.pop();
                }
            });
        });
    }

    async presentConfirmation() {
      const alert = await this.alertCtrl.create({
          header: 'Voulez-vous quitter ?',
          buttons: [
              {
                  text: 'Annuler',
                  role: 'cancel',
                  handler: () => {
                      console.log('Confirm Cancel: blah');
                  }
              }, {
                  text: 'OK',
                  handler: () => {
                      navigator['app'].exitApp();
                  }
              }
          ]
      });
      return await alert.present();
    }
}
