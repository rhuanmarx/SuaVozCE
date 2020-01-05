import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the CadastrasamuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrasamu',
  templateUrl: 'cadastrasamu.html',
})
export class CadastrasamuPage {
 Samu = {
    Nome : '',
    Idade : '',
    Telefone: '',
    Foto_de_Identificacao : '',
    Data: '',
    Hora: '',
    Endereco_da_Ocorrencia: '',
    Bairro :'',
    Ponto_de_Referencia: '',
    Tipo_de_Ocorrencia: '',
    Descricao_da_Ocorrencia : '',
    Eu_sou_a_Vitima: '',
    Foto: '',
  //  Video: '',
   // Audio: ''
  };
  currentPhoto : any;
  Photo : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http : Http,
    private toastCtrl : ToastController, private camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrasamuPage');
  }
  getPhoto(type){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {

      this.currentPhoto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
}


PegaPhoto(type){

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE,
    sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    correctOrientation: true
  };

  this.camera.getPicture(options).then((imageData) => {

    this.Photo = 'data:image/jpeg;base64,' + imageData;

  }, (err) => {
    // Handle error
  });
} 

exibirToast() {
  let toast = this.toastCtrl.create({
    message: 'Relato Cadastrado  com sucesso, e enviado para o Samu',
    duration: 3000,
    position: 'bottom'
  });
  toast.present(toast);
}
cadastraSamu(){
  this.Samu.Foto = this.currentPhoto;
  this.Samu.Foto_de_Identificacao = this.Photo;
  console.log("Adcionar Relato Samu: " + this.Samu.Nome);
  console.log("Adcionar Relato Samu: " + this.Samu.Idade);
  console.log("Adcionar Relato Samu: " + this.Samu.Telefone);
  console.log("Adcionar Relato Samu: " + this.Samu.Data);
  console.log("Adcionar Relato Samu: " + this.Samu.Hora);
  console.log("Adcionar Relato Samu: " + this.Samu.Endereco_da_Ocorrencia);
  console.log("Adcionar Relato Samu: " + this.Samu.Bairro);
  console.log("Adcionar Relato Samu: " + this.Samu.Tipo_de_Ocorrencia);
  console.log("Adcionar Relato Samu: " + this.Samu.Descricao_da_Ocorrencia);
  console.log("Adcionar Relato Samu: " + this.Samu.Eu_sou_a_Vitima);

  let body = JSON.stringify(this.Samu);
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers });

  //this.http.post('https://pacific-harbor-95140.herokuapp.com/contatos', body, options)
  this.http.post('http://localhost:3000/SAMU', body, options)    
  .map(res => res.json())
      .toPromise()
      .then(response => {
                         console.log(response);
                        this.exibirToast();
                          this.navCtrl.pop();
                        }
     );
  
  
}

}
