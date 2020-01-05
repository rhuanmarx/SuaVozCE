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
  selector: 'page-outrospotais',
  templateUrl: 'outrospotais.html',
})
export class OutrospotaisPage {
  public Noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http : Http) {
    this.Noticia= navParams.get('NoticiaSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutrospotaisPage');
  }

}
