import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the DetalhesamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhesamu',
  templateUrl: 'detalhesamu.html',
})
export class DetalhesamuPage {
  public Samu;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.Samu= navParams.get('SamuSelecionada');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesamuPage');
  }

}
