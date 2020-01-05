import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import {DetalhenoticiaPage} from '../detalhenoticia/detalhenoticia';
import {DetalhetnPage} from '../detalhetn/detalhetn';
//import {OutrospotaisPage} from '../outrospotais/outrospotais';
//import {OutrosPortaisPage} from '../outros-portais/outros-portais';
//import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Noticia } from "../../models/Noticia";
//import { NoticiaProvider } from "../../providers/Noticia/Noticia";
import {TopoNoticia} from "../../models/TopoNoticia";
//import {TopoNoticiaProvider} from "../../providers/TopoNoticia/TopoNoticia";
//import {OutrosPortais} from "../../models/OutrosPortais";

import {NoticiaTesteProvider} from "../../providers/NoticiaTeste/NoticiaTeste";
//import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

/*import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

const MEDIA_FILES_KEY = 'mediaFiles';*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Noticia : Noticia[] = [];
TopoNoticia: TopoNoticia[] = [];
//OutrosPortais: OutrosPortais[] = [];

  termo : string;

  loadLocal;
 // urlteste = 'file:///android_asset/www/movie.mp4';
  
 // mediaFiles = [];
  //  @ViewChild('myvideo') myVideo: any;

    //videoOptions: VideoOptions;
  //videoUrl: string;
    constructor(public navCtrl: NavController, public load : LoadingController,
    public alert : AlertController, private NoticiaTesteProvider : NoticiaTesteProvider, 
    ) {
      //, private push: Push
//private file: File, private media: Media, private videoPlayer: VideoPlayer,
      this.loadLocal = this.load.create({content:'Aguarde ...'});
      this.loadLocal.present();

  
    
    //  this.push.hasPermission()
     // .then((res: any) => {
    
     //   if (res.isEnabled) {
     //     console.log('Bem-vindo ao SuaVozCE, Você possui acesso por meio das Notificações do App!!!');
          
//const options: PushOptions = {
  //android: {},
  //ios: {
   //   alert: 'true',
   ///   badge: true,
  //    sound: 'false'
 // },
 // windows: {},
 // browser: {
 //     pushServiceURL: 'http://push.api.phonegap.com/v1/push'
 // }
//}
//const pushObject: PushObject = this.push.init(options);

//pushObject.on('notification').subscribe((notification: any) => console.log( notification.message));

//pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

//pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

       // } else {
      //    console.log('Infelizmente você, não possui acesso por meio das Notificações!!!');
     //   }
    
    //  });
  }

 
  /*play(myFile) {
    let path = this.file.dataDirectory + myFile.name;
    let url = path.replace('urlteste' + /^file:\/\//, '');
    let video = this.myVideo.nativeElement;
    video.src = url;
    video.play();
  }

   /* VideoPlay(){
      return this.videoPlayer.play('urlteste').then(() => {
        console.log('video completed');
       }).catch(err => {
        console.log(err);
       });
       }*/
/*stopVideo(){
  this.videoPlayer.close()
  console.log("Video parou")
}
       async VideoPlay(){
         try {

this.videoOptions = {
  volume: 0.7
}
this.videoUrl = 'https://techslides.com/demos/sample-videos/small.mp4'
setTimeout(() => {
  this.stopVideo(); 
}, 3000);
await this.videoPlayer.play(this.videoUrl, this.videoOptions);
console.log("Video completo.")
         }
         catch(e){

console.error(e);
         }
       }*/
  ionViewWillEnter(){
  this.obterTopoNoticiaAPI();
  this.obterNoticiaAPI();
 
  }
 
  //ionViewDidEnter(){
    //this.obterNoticiaAPI();
   // }
 /* ionViewDidLoad(){
    this.obterOutrosPortaisAPI();
  }*/
 
 /* showLoading() {
    if(!this.loadLocal){
        this.loadLocal = this.load.create({
            content: 'erro na API...'
        });
        this.loadLocal.present();
    }
}*/

  selecionaTopoNoticia(x) {
    console.log(x.Titulo);
    console.log(x.Foto);
    console.log(x.LogoAutor);
    console.log(x.App);
    console.log(x.Hora);
    this.navCtrl.parent.parent.push(DetalhetnPage, { NoticiaSelecionada : x } );
    
  }

  obterTopoNoticiaAPI() {
    this.NoticiaTesteProvider.obterTopoNoticia()
    .subscribe(response => 
          {
            this.TopoNoticia = response;
            this.loadLocal.dismiss();
          },
          erro =>
          {
           
             //if(this.loadLocal){
               //   this.loadLocal.present();
                //  this.loadLocal = null;
           
          this.loadLocal.dismiss();
            this.alert.create(
              {
                title : 'Erro na API',
                buttons : [{text : 'Ok'}],
                subTitle : 'Tente novamente mais tarde!'
              }
            ).present();
          }
       // }
    );
  } 
 

  selecionaNoticia(x) {
    console.log(x.Titulo);
   console.log(x.Foto);
   console.log(x.LogoAutor);
   console.log(x.App);
   console.log(x.Hora);
   this.navCtrl.parent.parent.push(DetalhenoticiaPage, { NoticiaSelecionada : x } );

  } 

  obterNoticiaAPI() {
    this.NoticiaTesteProvider.obterNoticia()
    .subscribe(response => 
          {
            this.Noticia = response;
            this.loadLocal.dismiss();
          },
          erro =>
          {
           // if(this.loadLocal){
             // this.loadLocal.present();
              //this.loadLocal = null;
            this.loadLocal.dismiss();
            this.alert.create(
              {
                title : 'Erro na API',
                buttons : [{text : 'Ok'}],
                subTitle : 'Tente novamente mais tarde!'
              }
            ).present();
          }
      //  }
    );
}

/*selecionaOutrosPortais(x) {
  console.log(x.titulo);
  console.log(x.foto);
  console.log(x.logoAutor);
  console.log(x.app);
  console.log(x.hora);
  this.navCtrl.parent.parent.push(OutrosPortaisPage, { NoticiaSelecionada : x } );
  
}

obterOutrosPortaisAPI() {
  this.NoticiaTesteProvider.obterOutrosPortais()
  .subscribe(response => 
        {
          this.OutrosPortais = response;
          this.loadLocal.dismiss();
        },
        erro =>
        {
          this.loadLocal.dismiss();
          this.alert.create(
            {
              title : 'Erro na API',
              buttons : [{text : 'Ok'}],
              subTitle : 'Tente novamente mais tarde!'
            }
          ).present();
        }
  );
} */

}
