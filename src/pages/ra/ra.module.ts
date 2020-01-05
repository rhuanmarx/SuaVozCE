import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaPage } from './ra';

@NgModule({
  declarations: [
    RaPage,
  ],
  imports: [
    IonicPageModule.forChild(RaPage),
  ],
})
export class RaPageModule {}
