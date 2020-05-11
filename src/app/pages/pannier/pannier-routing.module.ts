import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PannierPage } from './pannier.page';

const routes: Routes = [
  {
    path: '',
    component: PannierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PannierPageRoutingModule {}
