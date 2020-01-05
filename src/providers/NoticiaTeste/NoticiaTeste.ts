import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Noticia} from "../../models/Noticia";
import { TopoNoticia } from "../../models/TopoNoticia";
//import {OutrosPortais} from "../../models/OutrosPortais";
/*
  Generated class for the ContatoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaTesteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NoticiaProvider Provider');
  }

  obterTopoNoticia(){
  return this.http.get<TopoNoticia[]>('http://localhost:3000/TopoNews');
 }
 
 obterNoticia(){
   
  return this.http.get<Noticia[]>('http://localhost:3000/Noticia');
 }

//obterOutrosPortais(){
  //return this.http.get<OutrosPortais[]>('http://localhost:3000/OutrosPortais');
//}


// obterNoticia(){
 // return this.http.get<Noticia[]>('https://projetocentec2018.firebaseio.com/Noticia');
//}
 //-teste 
 //obterNoticia(){
    //return this.http.get<Noticia[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Noticia');
 // }
  
}
