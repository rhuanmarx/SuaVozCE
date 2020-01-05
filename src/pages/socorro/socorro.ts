import { Component,  OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

/**
 * Generated class for the SocorroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socorro',
  templateUrl: 'socorro.html',
})
export class SocorroPage {
  locais: Array<Local>;

  termo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  //ionViewDidLoad() {
    ngOnInit() { 
  this.getLocais();
    console.log('ionViewDidLoad SocorroPage');
  }

  getLocais() {
    this.locais = [

        //samu
  new Local('SAMU - Serviço de Atendimento Movel de Urgência', 'R. da Paz, 29 - Centro', '60025-210','Eusébio',' CE','(85) 3433-7434'),
  new Local('SAMU-CE / BASE CAUCAIA', 'Rua Tobias Correia - Centro,', 'Nulo','entro, Caucaia','CE', '(85) 98606-9999'),
  
  //ciops
  new Local('CIOPS', 'Av. Bezerra de Menezes, 581 - São Gerardo', '60120-020','Fortaleza','CE', '(85) 3101-6000'),

//upa
new Local('UPA Conjunto Ceará', 'R. Oitocentos Cinqüenta Seis, s/n - 3ª Etapa do Conjunto Ceará', 'Nulo','Fortaleza','CE','3466-4000'),
new Local('UPA Cristo Redentor', 'Av. Presidente Castelo Branco, s/n - Cristo Redentor, Fortaleza - CE, 60010-450', '60025-210','Fortaleza','CE', '(85) 3284-2321'),
new Local('UPA Vila Velha', 'Av. G, 9 - Vila Velha', '60810-670','Fortaleza','CE','(85) 3284-2211'),
new Local('UPA Praia do Futuro', 'R. Júlio Silva, 440 - Praia do Futuro', '60182-435','Fortaleza','CE', ''),
new Local('UPA 24hs MARANGUAPE', 'Rodovia Senador Almir Pinto, s/n - Novo Maranguape I', '61940-145',', Maranguape','CE', '(85) 3341-2723'),
new Local('UPA Bom Jardim', 'Rua Sargento João Pinheiro, s/n - Bom Jardim', ' 60540-050','Fortaleza','CE', '(85) 3245-8339'),
new Local('UPA Itaperi', 'R. Betel - Itaperi', '60714-230','Fortaleza','CE', '(85) 3493-5388'),
new Local('UPA Jangurussu', 'Av. Castelo de Castro, S/N - Jangurussu', '60875-205','Fortaleza','CE', '(85) 3269-7421'),
new Local('UPA Messejana', 'R. Miguel Gurgel, s/n - Messejana', '60871-790','Fortaleza','CE', '(85) 3276-1975'),
new Local('UPA Caucaia', 'Rua Tobias Correia, s/n - Centro', '02566-000','Caucai','CE','(85) 3342-1804'),


//hospitais
new Local('Hospital Geral De Fortaleza', 'Régis Jucá - R. André DallOlio, 1016 - Papicu', '60175-195','Fortaleza','CE', '(85) 3101-3209'),
new Local('Hospital Distrital Gonzaga Mota Barra do Ceará', 'Av. Dom Aloísio Lorscheider, 1130 - Vila Velha', 'Nulo','Fortaleza','CE', '(85) 3105-1590'),
new Local('Hospital Monte Klinikum', 'Rua República do Líbano, 747 - Meireles', '60160-140','Fortaleza','CE', '(85) 4012-0012'),
new Local('Hospital Geral Dr. César Cals', 'Avenida Imperador, 545 - Centro', '60015-152','Fortaleza','CE', '(85) 3101-5404'),
new Local('Hospital das Clínicas', 'Rua Capitão Francisco Pedro, 1290 - Rodolfo Teófilo', '60430-372','Fortaleza','CE', '(85) 3366-8167'),
new Local('Hospital Instituto Doutor José Frota', 'Rua Barão do Rio Branco, 1816 - Centro', '60025-061','Fortaleza','CE', '(85) 3255-5000'),
new Local('Hospital de Messejana Dr. Carlos Alberto Studart Gomes', 'Av. Frei Cirilo, 3480 - Messejana', 'Nulo','Fortaleza','CE', '(85) 3101-4075'),
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
  this.telefone = telefone;
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
}
