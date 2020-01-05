import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the DetalhebombPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhebomb',
  templateUrl: 'detalhebomb.html',
})
export class DetalhebombPage {
  public Bombeiro;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.Bombeiro= navParams.get('BombeiroSelecionada');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhebombPage');
  }

}
