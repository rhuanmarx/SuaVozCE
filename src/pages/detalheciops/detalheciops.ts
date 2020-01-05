import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the DetalheciopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalheciops',
  templateUrl: 'detalheciops.html',
})
export class DetalheciopsPage {
  public Ciops;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.Ciops= navParams.get('CiopsSelecionada');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheciopsPage');
  }

}
