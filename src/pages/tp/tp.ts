import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CadastrarpPage} from '../cadastrarp/cadastrarp';
import {CadastrabombPage} from '../cadastrabomb/cadastrabomb';
import {CadastrasamuPage} from '../cadastrasamu/cadastrasamu';
import {CadastraciopsPage} from '../cadastraciops/cadastraciops';
/**
 * Generated class for the TpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tp',
  templateUrl: 'tp.html',
})
export class TpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TpPage');
  }
   
  CadPol() {
    console.log('Adicionar Relato policial ...');
    this.navCtrl.push(CadastrarpPage);
     
   }
   CadBomb() {
    console.log('Adicionar Relato Bombeiros ...');
    this.navCtrl.push(CadastrabombPage);
     
   }
   CadSam() {
    console.log('Adicionar Relato Samu ...');
    this.navCtrl.push(CadastrasamuPage);
     
   }
   CadCio() {
    console.log('Adicionar Relato Ciops ...');
    this.navCtrl.push(CadastraciopsPage);
     
   }
}
