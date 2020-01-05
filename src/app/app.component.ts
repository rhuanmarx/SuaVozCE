import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import {AngularFireAuth} from 'angularfire2/auth';
import{SigninPage} from '../pages/signin/signin';

//import { SlidePage } from '../pages/slide/slide';

//import { Storage } from '@ionic/storage';

//import {Firebase} from '@ionic-native/firebase/ngx';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 //rootPage:any = TabsPage;
rootPage:any = SigninPage;
//rootPage:any;
//rootPage:any = SlidePage;

  constructor(platform: Platform, statusBar: StatusBar, private alertCtrl: AlertController,
     splashScreen: SplashScreen, afAuth: AngularFireAuth) {
     // private firebase: Firebase
    //storage: Storage
    //Função que estava usando para tela de login, atualmente sem uso mas permanece para testes
 
     const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
 this.rootPage = TabsPage;
authObserver.unsubscribe();
} else {
  this.rootPage = SigninPage;
 authObserver.unsubscribe();
 }  
  })
   
  afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = TabsPage;
     } else {
       this.rootPage = SigninPage;
       }
   })
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
      splashScreen.hide();
     // this.solicitarTokenDoFirebase();
    });
  }
 /*solicitarTokenDoFirebase() {
 
    this.firebase.getToken()
      .then(token => {
        console.log("firebase token recebido", token);
        this.enviarTokenParaOservidor(token);
        this.iniciarListenerDeNotificacoes();
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => {
        console.error('Error getting token', error)
      });
 
  }
 
  iniciarListenerDeNotificacoes() {
 
    this.firebase.onNotificationOpen().subscribe((notification: any) => {
 
      console.log(notification);
      if (!notification.tap) {
        this.mostrarAlert(notification.title, notification.body);
      }
 
    })
 
  }
 
  enviarTokenParaOservidor(token) {
 
    //lógica para enviar o token para o seu servidor através da sua api
  }
 
  mostrarAlert(titulo, texto) {
    let alert = this.alertCtrl.create({
      title: titulo,
      message: texto,
      buttons: [
        {
          text: 'Entendi',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }*/
  
}
