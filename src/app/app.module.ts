import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MapaPage} from '../pages/mapa/mapa';
import { SigninPage } from '../pages/signin/signin';
import { SigninwithemailPage } from '../pages/signinwithemail/signinwithemail';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import {HelpPage} from '../pages/help/help';
import {CallPage} from '../pages/call/call';
import {DetalhenoticiaPage} from '../pages/detalhenoticia/detalhenoticia';
import {DetalherpPage} from '../pages/detalherp/detalherp';
import {CadastrarpPage} from '../pages/cadastrarp/cadastrarp';
import {DetalhetnPage} from '../pages/detalhetn/detalhetn';
import {SlidePage} from '../pages/slide/slide';
import {CadastrabombPage} from '../pages/cadastrabomb/cadastrabomb';
import {DetalhebombPage} from '../pages/detalhebomb/detalhebomb';
import {CadastrasamuPage} from '../pages/cadastrasamu/cadastrasamu';
import {DetalhesamuPage} from '../pages/detalhesamu/detalhesamu';
import {CadastraciopsPage} from '../pages/cadastraciops/cadastraciops';
import {DetalheciopsPage} from '../pages/detalheciops/detalheciops';
import {TpPage} from '../pages/tp/tp';
import {PoliciaPage} from '../pages/policia/policia';
import {BombeirosPage} from '../pages/bombeiros/bombeiros';
import {SocorroPage} from '../pages/socorro/socorro';


//http e firebase
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Push } from '@ionic-native/push/ngx';
import {Firebase} from '@ionic-native/firebase/ngx';

//media
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SMS } from '@ionic-native/sms/ngx'
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Camera} from '@ionic-native/camera';
import {Geolocation} from '@ionic-native/geolocation';

//providers
import { AuthService } from '../providers/auth/auth-service';
import {NoticiaTesteProvider} from '../providers/NoticiaTeste/NoticiaTeste';
import { PoliciaProvider } from '../providers/policia/policia';
import { BombeiroProvider } from '../providers/bombeiro/bombeiro';
import { SamuProvider } from '../providers/samu/samu';
import { CiopsProvider } from '../providers/ciops/ciops';
import { FiltroPipe } from "../pipes/filtro/filtro";

//outros importes
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

//paginas desabilitadas!!!
//import {LocalidadesPage} from '../pages/localidades/localidades';
//import {RpPage} from '../pages/rp/rp';
//import {RaPage} from '../pages/ra/ra';
//import {DetalheraPage} from '../pages/detalhera/detalhera';
//import {CadastraraPage} from '../pages/cadastrara/cadastrara';
//import {OutrospotaisPage} from '../pages/outrospotais/outrospotais';
//import {OutrosPortaisPage} from '../pages/outros-portais/outros-portais';
//import { AgmCoreModule } from '@agm/core';
//AIzaSyAJAYMh2Vawe36ECDOZf3ceKKn7ZoSi3f8
//import {GoogleMap, GoogleMaps} from '@ionic-native/google-maps';
//import {Geolocation} from '@ionic-native/geolocation/ngx';
//import {NoticiaProvider} from '../providers/Noticia/Noticia';
//import {TopoNoticiaProvider} from '../providers/TopoNoticia/TopoNoticia';
//import {Camera} from '@ionic-native/camera/ngx';




const firebaseConfig = {
  apiKey: "AIzaSyAJAYMh2Vawe36ECDOZf3ceKKn7ZoSi3f8",
  authDomain: "suavozce.firebaseapp.com",
  databaseURL: "https://suavozce.firebaseio.com",
  projectId: "suavozce",
  storageBucket: "suavozce.appspot.com",
  messagingSenderId: "364278743724"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapaPage,
    SigninPage,
    SigninwithemailPage,
      SignupPage,
      ResetpasswordPage,
      HelpPage,
      CallPage,
      DetalhenoticiaPage,
      DetalherpPage,
      CadastrarpPage,
      SlidePage,
      DetalhetnPage,
      CadastrabombPage,
      DetalhebombPage,
      CadastrasamuPage,
      DetalhesamuPage,
      CadastraciopsPage,
      DetalheciopsPage,
    TpPage,
    PoliciaPage,
    BombeirosPage,
    SocorroPage,
    FiltroPipe, 
//LocalidadesPage,
     // OutrospotaisPage,
     // OutrosPortaisPage,
       // RpPage,
      //RaPage,
        //DetalheraPage,
        //CadastraraPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
     //AgmCoreModule.forRoot({
      //apiKey: "AIzaSyAJAYMh2Vawe36ECDOZf3ceKKn7ZoSi3f8",
      //libraries: ["places"]
  //}),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapaPage,
    SigninPage,
    SigninwithemailPage,
      SignupPage,
      ResetpasswordPage,
      HelpPage,
      CallPage,
      DetalhenoticiaPage,
      DetalherpPage,
      CadastrarpPage,
      SlidePage,
      DetalhetnPage,
      CadastrabombPage,
      DetalhebombPage,
      CadastrasamuPage,
      DetalhesamuPage,
      CadastraciopsPage,
      DetalheciopsPage,
TpPage,
PoliciaPage,
BombeirosPage,
SocorroPage,
    //LocalidadesPage,
      // OutrospotaisPage
     // OutrosPortaisPage,
     // RpPage,
      //RaPage,
       //DetalheraPage,
       //CadastraraPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireModule,
    AngularFireDatabase,
  
   Camera,
    NoticiaTesteProvider,
    MediaCapture,
    Media,
    File,
    NativeAudio,
    VideoPlayer,
    VideoCapturePlus,
    Geolocation,
    SMS,
    CallNumber,
    PoliciaProvider,
    BombeiroProvider,
    SamuProvider,
    CiopsProvider,
    Push,
    Firebase,
     // GoogleMap,
   // GoogleMaps,
    // NoticiaProvider,
   // TopoNoticiaProvider,
  ]
})
export class AppModule {}
