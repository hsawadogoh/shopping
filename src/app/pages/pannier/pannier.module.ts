import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannierPageRoutingModule } from './pannier-routing.module';

import { PannierPage } from './pannier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannierPageRoutingModule
  ],
  declarations: [PannierPage]
})
export class PannierPageModule {}
