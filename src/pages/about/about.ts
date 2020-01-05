import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {TpPage} from '../tp/tp';

import {AuthService} from '../../providers/auth/auth-service';
import {SigninPage} from '../signin/signin';
import {CallPage} from '../call/call';
import {MapaPage} from '../mapa/mapa';

import 'rxjs/add/operator/map';

import {Policia} from "../../models/policia";
import {Bombeiro} from "../../models/bombeiro";
import {Samu} from "../../models/samu";
import {Ciops} from "../../models/ciops";

import { PoliciaProvider} from "../../providers/policia/policia";
import { BombeiroProvider } from "../../providers/bombeiro/bombeiro";
import { SamuProvider } from "../../providers/samu/samu";
import {CiopsProvider } from "../../providers/ciops/ciops";

import {DetalherpPage} from '../detalherp/detalherp';
import {DetalhebombPage} from '../detalhebomb/detalhebomb';
import {DetalhesamuPage} from '../detalhesamu/detalhesamu';
import {DetalheciopsPage} from '../detalheciops/detalheciops';

/*import {CadastrarpPage} from '../cadastrarp/cadastrarp';
import {CadastrabombPage} from '../cadastrabomb/cadastrabomb';
import {CadastrasamuPage} from '../cadastrasamu/cadastrasamu';
import {CadastraciopsPage} from '../cadastraciops/cadastraciops';*/


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 

 Policia : Policia[] = [];
 Bombeiro: Bombeiro[] = [];
 Samu: Samu[] = [];
 Ciops: Ciops[] = [];
 
 
   termo : string;
   loadLocal;
 constructor(public navCtrl: NavController, 
  public load : LoadingController,
  public alert : AlertController,
    private authService: AuthService,  private toastCtrl : ToastController, private PoliciaProvider : PoliciaProvider, 
    private BombeiroProvider : BombeiroProvider, private SamuProvider : SamuProvider, private CiopsProvider : CiopsProvider ) {

   this.loadLocal = this.load.create({content:'Aguarde ...'});
    this.loadLocal.present();

}

exibirToast() {
let toast = this.toastCtrl.create({
  message: 'Volte Sempre!!!',
  duration: 3000,
  position: 'bottom'
});
toast.present(toast);
}

signOut(){
this.authService.signOut()
.then(() =>{
  this.navCtrl.parent.parent.setRoot(SigninPage);
  this.exibirToast();
})
.catch((error) =>{
  console.error(error);
});
}

TipoRelato() {
 this.navCtrl.parent.parent.push(TpPage);
  
}
Mapa(){
  this.navCtrl.parent.parent.push(MapaPage);
}
Telefone(){
  this.navCtrl.parent.parent.push(CallPage);
}


ionViewWillEnter(){
  this.obterPoliciaAPI();
  this.obterBombeiroAPI();
  this.obterSamuAPI();
  this.obterCiopsAPI();
  }

  selecionaPolicia(x) {
    console.log(x.Nome);
    console.log(x.Foto);
    console.log(x.Data);
    console.log(x.Hora);
    console.log(x.Endereco_da_Ocorrencia);
    console.log(x.Tipo_de_Ocorrencia);
    this.navCtrl.parent.parent.push(DetalherpPage, { PoliciaSelecionada : x } );
    
  }

  obterPoliciaAPI() {
    this.PoliciaProvider.obterPolicia()
    .subscribe(response => 
          {
            this.Policia = response;
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
  } 
  
  selecionaBombeiro(x) {
    console.log(x.Nome);
    console.log(x.Foto);
    console.log(x.Data);
    console.log(x.Hora);
    console.log(x.Endereco_da_Ocorrencia);
    console.log(x.Tipo_de_Ocorrencia);
    this.navCtrl.parent.parent.push(DetalhebombPage, { BombeiroSelecionada : x } );
    
  }

  obterBombeiroAPI() {
    this.BombeiroProvider.obterBombeiro()
    .subscribe(response => 
          {
            this.Bombeiro= response;
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
  } 

  selecionaSamu(x) {
    console.log(x.Nome);
    console.log(x.Foto);
    console.log(x.Data);
    console.log(x.Hora);
    console.log(x.Endereco_da_Ocorrencia);
    console.log(x.Tipo_de_Ocorrencia);
    this.navCtrl.parent.parent.push(DetalhesamuPage, { SamuSelecionada : x } );
    
  }
obterSamuAPI() {
    this.SamuProvider.obterSamu()
    .subscribe(response => 
          {
            this.Samu = response;
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
  } 

  selecionaCiops(x) {
    console.log(x.Nome);
    console.log(x.Foto);
    console.log(x.Data);
    console.log(x.Hora);
    console.log(x.Endereco_da_Ocorrencia);
    console.log(x.Tipo_de_Ocorrencia);
    this.navCtrl.parent.parent.push(DetalheciopsPage, { CiopsSelecionada : x } );
    
  }

  obterCiopsAPI() {
    this.CiopsProvider.obterCiops()
    .subscribe(response => 
          {
            this.Ciops = response;
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
  } 

    
  /*CadPol() {
    console.log('Adicionar Relato policial ...');
    this.navCtrl.parent.parent.push(CadastrarpPage);
     
   }
   CadBomb() {
    console.log('Adicionar Relato Bombeiros ...');
    this.navCtrl.parent.parent.push(CadastrabombPage);
     
   }
   CadSam() {
    console.log('Adicionar Relato Samu ...');
    this.navCtrl.parent.parent.push(CadastrasamuPage);
     
   }
   CadCio() {
    console.log('Adicionar Relato Ciops ...');
    this.navCtrl.parent.parent.push(CadastraciopsPage);
     
   }*/


}
