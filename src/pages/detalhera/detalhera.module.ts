import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheraPage } from './detalhera';

@NgModule({
  declarations: [
    DetalheraPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheraPage),
  ],
})
export class DetalheraPageModule {}
