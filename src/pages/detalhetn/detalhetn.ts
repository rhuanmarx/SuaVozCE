import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the DetalhetnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhetn',
  templateUrl: 'detalhetn.html',
})
export class DetalhetnPage {
  public Noticia;
  text = 'Da uma olhada nesta notícia do Aplicativo SuaVozCE!';
  url = 'http://localhost:8100';

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http : Http,  
    private socialSharing: SocialSharing, private file: File) {
    this.Noticia= navParams.get('NoticiaSelecionada');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhetnPage');
  }
  async shareTwitter() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(null, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareWhatsApp() {
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async resolveLocalFile() {
    return this.file.copyFile(`${this.file.applicationDirectory}www/assets/imgs/`, 'SVC.png', this.file.cacheDirectory, `${new Date().getTime()}.png`);
  }
 
  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }
 
  async shareEmail() {
    let file = await this.resolveLocalFile();
 
    this.socialSharing.shareViaEmail(this.text, 'My custom subject', ['rhuan.marx.ti@gmail.com'], null, null, file.nativeURL).then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareFacebook() {
    let file = await this.resolveLocalFile();
 
    // Image or URL works
    this.socialSharing.shareViaFacebook(null, file.nativeURL, null).then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {
      // Error!
    });
  }

}
