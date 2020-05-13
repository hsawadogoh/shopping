import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannierPageRoutingModule } from './pannier-routing.module';

import { PannierPage } from './pannier.page';
import {NgxIonicImageViewerModule} from 'ngx-ionic-image-viewer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PannierPageRoutingModule,
        NgxIonicImageViewerModule
    ],
  declarations: [PannierPage]
})
export class PannierPageModule {}
