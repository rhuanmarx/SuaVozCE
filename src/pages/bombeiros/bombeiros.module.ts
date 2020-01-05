import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BombeirosPage } from './bombeiros';

@NgModule({
  declarations: [
    BombeirosPage,
  ],
  imports: [
    IonicPageModule.forChild(BombeirosPage),
  ],
})
export class BombeirosPageModule {}
