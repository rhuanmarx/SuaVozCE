import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalidadesPage } from './localidades';

@NgModule({
  declarations: [
    LocalidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalidadesPage),
  ],
})
export class LocalidadesPageModule {}
