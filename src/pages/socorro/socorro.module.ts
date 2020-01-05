import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocorroPage } from './socorro';

@NgModule({
  declarations: [
    SocorroPage,
  ],
  imports: [
    IonicPageModule.forChild(SocorroPage),
  ],
})
export class SocorroPageModule {}
