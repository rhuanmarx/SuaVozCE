import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliciaPage } from './policia';

@NgModule({
  declarations: [
    PoliciaPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliciaPage),
  ],
})
export class PoliciaPageModule {}
