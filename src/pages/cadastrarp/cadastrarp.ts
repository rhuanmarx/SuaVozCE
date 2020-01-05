import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Camera, CameraOptions} from "@ionic-native/camera";
//Video modules
//import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
//import { Storage } from '@ionic/storage';
//import { Media, MediaObject } from '@ionic-native/media/ngx';
//import { File } from '@ionic-native/file/ngx';
//import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the CadastrarpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//const MEDIA_FILES_KEY = 'mediaFiles';


@IonicPage()
@Component({
  selector: 'page-cadastrarp',
  templateUrl: 'cadastrarp.html',
})
export class CadastrarpPage {


//CadastroForm: FormGroup;

  /*public CadastroForm: any;
  messageTelefone = ""
  messageData_e_Hora = "";
  messageEndereco_da_Ocorrencia = "";
  messageBairro = "";
  messagePonto_de_Referencia = "";
  messageTipo_de_Ocorrencia = "";
  messageDescricao_da_Ocorrencia = "";
  messageEu_sou_a_Vitima = "";
  messageFoto = "";
  errorTelefone = false;
  errorData_e_Hora = false;
  errorEndereco_da_Ocorrencia = false;
  errorBairro = false;
  errorPonto_de_Referencia = false;
  errorTipo_de_Ocorrencia = false;
  errorDescricao_da_Ocorrencia = false;
  errorEu_sou_a_Vitima = false;
  errorFoto = false;*/

  Policia = {
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
 // Video: '',
   // Audio: ''
  };

  currentPhoto : any;
  Photo : any;

 //mediaFiles = [];
  //@ViewChild('this.Policia.Video') myVideo: any;
  //public monthNames =  ["Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro"];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http : Http,
    private toastCtrl : ToastController, 
    private camera : Camera ) {
     
     // , private mediaCapture: MediaCapture, private storage: Storage, 
   // private file: File, private media: Media
      //public formBuilder: FormBuilder
     // this.CadastroForm= this.createMyForm();
     
  }

   //this.CadastroForm = formBuilder.group({
   /* private createMyForm(){
      return this.formBuilder.group({
  Telefone: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(14),
    Validators.required])],
  Data_e_Hora: ['', Validators.required],
  Endereco_da_Ocorrencia: ['', Validators.required],
  Bairro: ['', Validators.required],
 Ponto_de_Referencia: ['', Validators.required],
  Tipo_de_Ocorrencia: ['', Validators.required],
  Descricao_da_Ocorrencia: ['', Validators.required],
  Eu_sou_a_Vitima: ['', Validators.required],
  Foto: ['', Validators.required],
});
} */
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarpPage');
   /* this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })*/
  }

  /*captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      let capturedFile = res[0];
      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');      
      var toDirectory = this.file.dataDirectory;
      
      this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then((res) => {
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      },err => {
        console.log('err: ', err);
      });
          },
    (err: CaptureError) => console.error(err));
  }
  play(myFile) {
    let path = this.file.dataDirectory + myFile.name;
    let url = path.replace(/^file:\/\//, '');
    let video = this.myVideo.nativeElement;
    video.src = url;
    video.play();
  }

  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }*/


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
    message: 'Relato Cadastrado  com sucesso, e enviado para a Policia',
    duration: 3000,
    position: 'bottom'
  });
  toast.present(toast);
}

cadastraPolicia(){
 //console.log(this.CadastroForm.value)

 /* let { Telefone, Data_e_Hora, Endereco_da_Ocorrencia, Bairro, Ponto_de_Referencia, Tipo_de_Ocorrencia,
      Descricao_da_Ocorrencia,Eu_sou_a_Vitima,Foto } = this.CadastroForm.controls;
 
      if (!Telefone.valid) {
        this.errorTelefone = true;
        this.messageTelefone ="O Telefone precisa ter de 9 a 14 caracteres"
      } else {
        this.messageTelefone = "";
      }
   

  if (!this.CadastroForm.valid) {
    if (!Data_e_Hora.valid) {
      this.errorData_e_Hora = true;
      this.messageData_e_Hora = "Ops! A Data e Hora Obrigatório";
    } else {
      this.messageData_e_Hora = "";
    }
    if (!Endereco_da_Ocorrencia.valid) {
      this.errorEndereco_da_Ocorrencia = true;
      this.messageEndereco_da_Ocorrencia ="Ops! O Endereço é Obrigatório"
    } else {
      this.messageEndereco_da_Ocorrencia = "";
    }

    if (!Bairro.valid) {
      this.errorBairro = true;
      this.messageBairro ="Ops! O bairro é Obrigatório"
    } else {
      this.messageBairro = "";
    }

    if (!Ponto_de_Referencia.valid) {
      this.errorPonto_de_Referencia = true;
      this.messagePonto_de_Referencia ="Ops! O Ponto de Referência é Obrigatório"
    } else {
      this.messagePonto_de_Referencia = "";
    }
   
    if (!Tipo_de_Ocorrencia.valid) {
      this.errorTipo_de_Ocorrencia = true;
      this.messageTipo_de_Ocorrencia ="Ops! O Tipo de Ocorrência é Obrigatório"
    } else {
      this.messageTipo_de_Ocorrencia = "";
    }
  
    if (!Descricao_da_Ocorrencia.valid) {
      this.errorDescricao_da_Ocorrencia = true;
      this.messageDescricao_da_Ocorrencia ="Ops! A Descrição da Ocorrência é Obrigatória"
    } else {
      this.messageDescricao_da_Ocorrencia = "";
    }

    if (!Eu_sou_a_Vitima.valid) {
      this.errorEu_sou_a_Vitima = true;
      this.messageEu_sou_a_Vitima ="Ops! A Descrição da Ocorrência é Obrigatória"
    } else {
      this.messageEu_sou_a_Vitima = "";
    }

 // }
//  else {
   // alert("Login Realizado");
 // }*/
    
  this.Policia.Foto = this.currentPhoto;
  this.Policia.Foto_de_Identificacao = this.Photo;
  //this.Policia.Video = this.myVideo;
  console.log("Adcionar Relato policial: " + this.Policia.Nome);
  console.log("Adcionar Relato Policial: " + this.Policia.Idade);
  console.log("Adcionar Relato policial: " + this.Policia.Telefone);
  console.log("Adcionar Relato policial: " + this.Policia.Data);
  console.log("Adcionar Relato policial: " + this.Policia.Hora);
  console.log("Adcionar Relato policial: " + this.Policia.Endereco_da_Ocorrencia);
  console.log("Adcionar Relato policial: " + this.Policia.Bairro);
  console.log("Adcionar Relato policial: " + this.Policia.Tipo_de_Ocorrencia);
  console.log("Adcionar Relato policial: " + this.Policia.Descricao_da_Ocorrencia);
  console.log("Adcionar Relato policial: " + this.Policia.Eu_sou_a_Vitima);

  let body = JSON.stringify(this.Policia);
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers });

  //this.http.post('https://pacific-harbor-95140.herokuapp.com/contatos', body, options)
  this.http.post('http://localhost:3000/Policia', body, options)    
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

