import { Component,  OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx'
/**
/**
 * Generated class for the PoliciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policia',
  templateUrl: 'policia.html',
})
export class PoliciaPage {
  locais: Array<Local>;

  termo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

 // ionViewDidLoad() {
  ngOnInit() { 
    this.getLocais();  
 console.log('ionViewDidLoad PoliciaPage');
  }
  getLocais() {
    this.locais = [
  //Delegacias
    
      new Local('1° Distrito Policial', 'Rua Raimundo Corrêia, 199 - Monte Castelo', '60321-020','Fortaleza','CE', '(85) 3101-2233'),
      new Local('3° Distrito Policial', 'Av. Bezerra de Menezes, 479 - Otávio Bonfim', '60325-005','Fortaleza','CE', '(85) 3101-2229'),
      new Local('4° Distrito Policial', 'Rua Monsenhor Salazar, 1237 - Pio XII,', '60130-371','Fortaleza','CE','(85) 3101-2047'),
      new Local('5º Distrito Policial', 'Av. Gen. Osório de Paiva, 181 - Parangaba', '60720-015','Fortaleza','CE', '(85) 3101-2948'),
      new Local('7º Distrito Policial', 'R. Marcílio Dias, 436 - Pirambu', '60310-750','Fortaleza','CE', '(85) 3101-2232'),
      new Local('8º Distrito Policial', 'Av. João de Araújo Lima, 561 - Conjunto Prefeito José Walter', '60760-740','Fortaleza','CE', '(85) 3101-2950'),
      new Local('9° Distrito Policial', 'R. Hermínia Bonavides, s/n - Antonio Diogo', '60182-260','Fortaleza','CE', '(85) 3101-1144'),
      new Local('12° Distrito Policial - Conjunto Ceará', 'R. Seiscentos Dois, s/n - Conj. Ceará', '60531-510','Fortaleza','CE', '(85) 3101-5665'),
      new Local('14º Distrito Policial - Conjunto Industrial Maracanaú/CE', 'Conjunto, R. Nossa Sra. Aparecida, 470 - Industrial', '60765-135','Maracanaú','CE','(85) 3101-2944'),
      new Local('15º Distrito Policial', 'Av. Central, S/N - Cidade 2000', ' 60190-611','Fortaleza','CE', '(85) 3101-1137'),
      new Local('18º Distrito Policial', 'Av. Dom Almeida Lustosa, 3627 - Mal. Rondon (Jurema)', '61652-000','Caucaia','CE', '(85) 3294-2494'),
      new Local('29° Distrito Policial de Maracanaú', 'R. Estevão Alves, 2-96 - Pajuçara', '61932-300','Maracanaú','CE',''),
      new Local('33° Distrito Policial', 'Rua da Salema, 153 - Barra do Ceará', '60332-410','Fortaleza','CE', '(85) 3101-2512'),
      new Local('Delegacia Geral da Polícia Civil', 'Rua do Rosário, 199 - Centro', '60055-090','Fortaleza','CE', '(85) 3101-7300'),
      new Local('Delegacia da Criança e do Adolescente - DCA', 'Rua Tabelião Fabião, 114 - São Gerardo,', '60355-515','Fortaleza','CE', '(85) 3101-2514'),
      new Local('Delegacia de Defesa da Mulher', 'R. Manuelito Moreira, 12 - Benfica', '60025-210','Fortaleza','CE', '(85) 3108-2950'),
      new Local(' Delegacia de Roubos e Furtos de Veículos e Cargas', 'Av. Godofredo Maciel, 2800 - Maraponga', '60710-000','Fortaleza','CE', '(85) 3101-1141'),
     
 //Policia
 new Local('5º Batalhão da Polícia Militar do Estado do Ceará', 'R. Antônio Pompeu, 555 - José Bonifacio', '60040-000','Fortaleza','CE', '(85) 3101-4947'),
 new Local('6º Batalhão de Polícia Militar do Ceará', 'Av. Penetração Oeste, 1020 - Conj. Esperança', '60870-605','Fortaleza','CE', '(85) 3101-4968'),
 new Local('8º Batalhão de Polícia Militar do Ceará', 'Silva Paulet, 495 - Meireles', '60160-090','Fortaleza','CE', ''),
 new Local('16° Batalhão De Policia Militar do Ceará', 'R. Padre Pedro de Alencar, 1091 - Messejana', '60840-120','Fortaleza','CE', ''),
 new Local('17º Batalhão da Polícia Militar do Ceará', 'Av. Ministro Albuquerque Lima, 280 - Conj. Ceará I', '60533-605','Fortaleza','CE', ''),
 new Local('Núcleo da 1ª Companhia /6° Batalhão da Polícia Militar do Ceará', 'R. Primeiro de Janeiro, 928 - Parangaba', '60710-435','Fortaleza','CE','(85) 3101-6107'),
 new Local('Policia Militar Do Ceara', 'Av. Filomeno Gomes, 680 - Jacarecanga', '60010-281','Fortaleza','CE', ''),
 new Local('Comando da Polícia Militar do Ceará', 'Av. Aguanambi, 7630-7642 - José Bonifacio', '60415-170','Fortaleza','CE', ''),
 new Local('Polícia Militar 2ª Cia', 'Av. Parque Leste, 500 - Distrito Industrial', '61900-410',', Maracanaú','CE',''),
 new Local('3ª Cia GATE', 'Rodovia CE-065, Km 8, 9999 - Jaçanaú', '61913-005',' Maracanaú','CE', '(85) 3383-2444'),
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
this.telefone= telefone;
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
