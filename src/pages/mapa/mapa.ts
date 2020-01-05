import { Component,  OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PoliciaPage} from '../policia/policia';
import {BombeirosPage} from '../bombeiros/bombeiros';
import {SocorroPage} from '../socorro/socorro';
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  //locais: Array<Local>;

  //termo : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
   // this.getLocais();

    console.log('ionViewDidLoad MapaPage');
  }

  Pol() {
  
    this.navCtrl.push(PoliciaPage);
     
   }
   Bomb() {
  
    this.navCtrl.push(BombeirosPage);
     
   }
   Soc() {
   
    this.navCtrl.push(SocorroPage);
     
   }
  

  /*getLocais() {
    this.locais = [
  //Delegacias
    
      new Local('1° Distrito Policial', 'Rua Raimundo Corrêia, 199 - Monte Castelo', '60321-020','Fortaleza','CE'),
      new Local('3° Distrito Policial', 'Av. Bezerra de Menezes, 479 - Otávio Bonfim', '60325-005','Fortaleza','CE'),
      new Local('4° Distrito Policial', 'Rua Monsenhor Salazar, 1237 - Pio XII,', '60130-371','Fortaleza','CE'),
      new Local('5º Distrito Policial', 'Av. Gen. Osório de Paiva, 181 - Parangaba', '60720-015','Fortaleza','CE'),
      new Local('7º Distrito Policial', 'R. Marcílio Dias, 436 - Pirambu', '60310-750','Fortaleza','CE'),
      new Local('8º Distrito Policial', 'Av. João de Araújo Lima, 561 - Conjunto Prefeito José Walter', '60760-740','Fortaleza','CE'),
      new Local('9° Distrito Policial', 'R. Hermínia Bonavides, s/n - Antonio Diogo', '60182-260','Fortaleza','CE'),
      new Local('12° Distrito Policial - Conjunto Ceará', 'R. Seiscentos Dois, s/n - Conj. Ceará', '60531-510','Fortaleza','CE'),
      new Local('14º Distrito Policial - Conjunto Industrial Maracanaú/CE', 'Conjunto, R. Nossa Sra. Aparecida, 470 - Industrial,', '60765-135','Maracanaú','CE'),
      new Local('15º Distrito Policial', 'Av. Central, S/N - Cidade 2000', ' 60190-611','Fortaleza','CE'),
      new Local('18º Distrito Policial', 'Av. Dom Almeida Lustosa, 3627 - Mal. Rondon (Jurema)', '61652-000','Caucaia','CE'),
      new Local('29° Distrito Policial de Maracanaú', 'R. Estevão Alves, 2-96 - Pajuçara', '61932-300','Maracanaú','CE'),
      new Local('33° Distrito Policial', 'Rua da Salema, 153 - Barra do Ceará', '60332-410','Fortaleza','CE'),
      new Local('Delegacia Geral da Polícia Civil', 'Rua do Rosário, 199 - Centro', '60055-090','Fortaleza','CE'),
      new Local('Delegacia da Criança e do Adolescente - DCA', 'Rua Tabelião Fabião, 114 - São Gerardo,', '60355-515','Fortaleza','CE'),
      new Local('Delegacia de Defesa da Mulher', 'R. Manuelito Moreira, 12 - Benfica', '60025-210','Fortaleza','CE'),
      new Local(' Delegacia de Roubos e Furtos de Veículos e Cargas', 'Av. Godofredo Maciel, 2800 - Maraponga', '60710-000','Fortaleza','CE'),
     
 //Policia
 new Local('5º Batalhão da Polícia Militar do Estado do Ceará', 'R. Antônio Pompeu, 555 - José Bonifacio', '60040-000','Fortaleza','CE'),
 new Local('6º Batalhão de Polícia Militar do Ceará', 'Av. Penetração Oeste, 1020 - Conj. Esperança', '60870-605','Fortaleza','CE'),
 new Local('8º Batalhão de Polícia Militar do Ceará', 'Silva Paulet, 495 - Meireles', '60160-090','Fortaleza','CE'),
 new Local('16° Batalhão De Policia Militar do Ceará', 'R. Padre Pedro de Alencar, 1091 - Messejana', '60840-120','Fortaleza','CE'),
 new Local('17º Batalhão da Polícia Militar do Ceará', 'Av. Ministro Albuquerque Lima, 280 - Conj. Ceará I', '60533-605','Fortaleza','CE'),
 new Local('Núcleo da 1ª Companhia /6° Batalhão da Polícia Militar do Ceará', 'R. Primeiro de Janeiro, 928 - Parangaba', '60710-435','Fortaleza','CE'),
 new Local('Policia Militar Do Ceara', 'Av. Filomeno Gomes, 680 - Jacarecanga', '60010-281','Fortaleza','CE'),
 new Local('Comando da Polícia Militar do Ceará', 'Av. Aguanambi, 7630-7642 - José Bonifacio', '60415-170','Fortaleza','CE'),
 new Local('Polícia Militar Ceará', 'Av. São Vicente de Paula - Araturi (Jurema)', '61655-000','Caucaia','CE'),
 new Local('Polícia Militar 2ª Cia', 'Av. Parque Leste, 500 - Distrito Industrial', '61900-410',', Maracanaú','CE'),
 new Local('3ª Cia GATE', 'Rodovia CE-065, Km 8, 9999 - Jaçanaú', '61913-005',' Maracanaú','CE'),


        //bombeiros
        new Local('Quartel Central do Corpo de Bombeiros Militar do Estado do Ceará', 'R. Oto de Alencar, 215 - Centro,', '60010-270','Fortaleza','CE'),
        new Local('Corpo de Bombeiros Militar do Ceará - Núcleo de Busca e Salvamento', 'Av. Presidente Castelo Branco, 1000 - Moura Brasil', 'Nulo','Fortaleza','CE'),
        new Local('D5ª Seção de Bombeiros - 5ª SB/1º GB (Quartel do Conjunto Ceará)', 'Av. F, 629 - Conj. Ceará', '60533-645','Fortaleza','CE'),
        new Local('Corpo de Bombeiros Militar do Est do Ceará', 'R. Eng. Sandoval Sá, 100 - Sandes Veraneio', '61624-480','Caucaia','CE'),
        new Local('Corpo de Bombeiros Militar', 'R. Padre Pedro de Alencar, 1091 - Messejana', '60180-410','Fortaleza','CE'),
       
        //samu
  new Local('SAMU - Serviço de Atendimento Movel de Urgência', 'R. da Paz, 29 - Centro', '60025-210','Eusébio',' 61760-000'),
  new Local('SAMU-CE / BASE CAUCAIA', 'Rua Tobias Correia - Centro,', 'Nulo','entro, Caucaia','CE'),
  
  //ciops
  new Local('CIOPS', 'Av. Bezerra de Menezes, 581 - São Gerardo', '60120-020','Fortaleza','CE'),

//upa
new Local('UPA Conjunto Ceará', 'R. Oitocentos Cinqüenta Seis, s/n - 3ª Etapa do Conjunto Ceará', 'Nulo','Fortaleza','CE'),
new Local('UPA Cristo Redentor', 'Av. Presidente Castelo Branco, s/n - Cristo Redentor, Fortaleza - CE, 60010-450', '60025-210','Fortaleza','CE'),
new Local('UPA Vila Velha', 'Av. G, 9 - Vila Velha', '60810-670','Fortaleza','CE'),
new Local('UPA Praia do Futuro', 'R. Júlio Silva, 440 - Praia do Futuro', '60182-435','Fortaleza','CE'),
new Local('UPA 24hs MARANGUAPE', 'Rodovia Senador Almir Pinto, s/n - Novo Maranguape I', '61940-145',', Maranguape','CE'),
new Local('UPA Bom Jardim', 'Rua Sargento João Pinheiro, s/n - Bom Jardim', ' 60540-050','Fortaleza','CE'),
new Local('UPA Itaperi', 'R. Betel - Itaperi', '60714-230','Fortaleza','CE'),
new Local('UPA Jangurussu', 'Av. Castelo de Castro, S/N - Jangurussu', '60875-205','Fortaleza','CE'),
new Local('UPA Messejana', 'R. Miguel Gurgel, s/n - Messejana', '60871-790','Fortaleza','CE'),
new Local('UPA Caucaia', 'Rua Tobias Correia, s/n - Centro', '02566-000','Caucai','CE'),


//hospitais
new Local('Hospital Geral De Fortaleza', 'Régis Jucá - R. André DallOlio, 1016 - Papicu', '60175-195','Fortaleza','CE'),
new Local('Hospital Distrital Gonzaga Mota Barra do Ceará', 'Av. Dom Aloísio Lorscheider, 1130 - Vila Velha', 'Nulo','Fortaleza','CE'),
new Local('Hospital Monte Klinikum', 'Rua República do Líbano, 747 - Meireles', '60160-140','Fortaleza','CE'),
new Local('Hospital Geral Dr. César Cals', 'Avenida Imperador, 545 - Centro', '60015-152','Fortaleza','CE'),
new Local('Hospital das Clínicas', 'Rua Capitão Francisco Pedro, 1290 - Rodolfo Teófilo', '60430-372','Fortaleza','CE'),
new Local('Hospital Instituto Doutor José Frota', 'Rua Barão do Rio Branco, 1816 - Centro', '60025-061','Fortaleza','CE'),
new Local('Hospital de Messejana Dr. Carlos Alberto Studart Gomes', 'Av. Frei Cirilo, 3480 - Messejana', 'Nulo','Fortaleza','CE'),
    ];
  } 
};

  export class Local {
    Nome: string;
    Bairro : string;
    cep: string;
cidade: string;
estado: string;
mapa: string;

constructor(nome: string, bairro: string,
  cep: string, cidade: string, estado: string) {
  this.Nome = nome;
  this.Bairro = bairro;
  this.cep = cep;
  this.cidade = cidade;
  this.estado = estado;
  this.mapa = this.getMapa();
  }

  private getEndereco(){
    return this.Bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyAJAYMh2Vawe36ECDOZf3ceKKn7ZoSi3f8'
  }*/
}
