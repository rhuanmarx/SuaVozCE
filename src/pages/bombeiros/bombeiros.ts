import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx'
/**
 * Generated class for the BombeirosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bombeiros',
  templateUrl: 'bombeiros.html',
})
export class BombeirosPage {
  locais: Array<Local>;

  termo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private callNumber: CallNumber) {
  }

  //ionViewDidLoad() {
    ngOnInit() { 
      this.getLocais();    
  console.log('ionViewDidLoad BombeirosPage');
  }
  getLocais() {
    this.locais = [
       //bombeiros
       new Local('Quartel Central do Corpo de Bombeiros Militar do Estado do Ceará', 'R. Oto de Alencar, 215 - Centro,', '60010-270','Fortaleza','CE', '(85) 3101-2373'),
       new Local('Corpo de Bombeiros Militar do Ceará - Núcleo de Busca e Salvamento', 'Av. Presidente Castelo Branco, 1000 - Moura Brasil', 'Nulo','Fortaleza','CE', '(85) 3101-2219'),
       new Local('D5ª Seção de Bombeiros - 5ª SB/1º GB (Quartel do Conjunto Ceará)', 'Av. F, 629 - Conj. Ceará', '60533-645','Fortaleza','CE', '(85) 3101-5662'),
       new Local('Corpo de Bombeiros Militar do Est do Ceará', 'R. Eng. Sandoval Sá, 100 - Sandes Veraneio', '61624-480','Caucaia','CE', '(85) 3101-2219'),
       new Local('Corpo de Bombeiros Militar', 'R. Padre Pedro de Alencar, 1091 - Messejana', '60180-410','Fortaleza','CE', '(85) 3101-2018'),
      ];
    } 
  };
  
    export class Local {
      Nome: string;
      Bairro : string;
      cep: string;
  cidade: string;
  estado: string;
  telefone: string;
  mapa: string;
        callNumber: any;
  
  constructor(nome: string, bairro: string,
    cep: string, cidade: string, estado: string, telefone: string) {
    this.Nome = nome;
    this.Bairro = bairro;
    this.cep = cep;
    this.cidade = cidade;
    this.estado = estado;
    this.telefone = telefone
    this.mapa = this.getMapa();
    }
  
    private getEndereco(){
      return this.Bairro + ', ' + this.cidade + ' - ' + this.estado;
    }
  
    private getMapa() {
      return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyAJAYMh2Vawe36ECDOZf3ceKKn7ZoSi3f8'
    }

    Call(string) {
      this.callNumber.Callnumber(string(this.telefone), true)
        .then(res => console.log('Ligando...', res))
       .catch(err => console.log('Contato sem Acesso!!!', err));
    }
    
    /*async call():Promise<any>{
      try{
        await this.CallNumber(this.telefone,true);
      }
      catch(e){
        console.error(e);
      }
    }*/
}
