import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the OutrospotaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-outros-portais',
  templateUrl: 'outros-portais.html',
})
export class OutrosPortaisPage {
  
  public OutrosPortais;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http : Http) {
    this.OutrosPortais= navParams.get('NoticiaSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutrosPortaisPage');
  }

}
