import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LottieSplashScreen} from '@ionic-native/lottie-splash-screen/ngx';
import {PannierPage} from './pages/pannier/pannier.page';

@NgModule({
  declarations: [AppComponent, PannierPage],
  entryComponents: [PannierPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      LottieSplashScreen
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
