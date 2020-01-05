import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from "../../models/Noticia";
/*
  Generated class for the ContatoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NoticiaProvider Provider');
  }

  obterNoticia(){
  return this.http.get<Noticia[]>('http://localhost:3000/Noticia');
 }

// obterNoticia(){
 // return this.http.get<Noticia[]>('https://projetocentec2018.firebaseio.com/Noticia');
//}
 //-teste 
 //obterNoticia(){
    //return this.http.get<Noticia[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Noticia');
 // }
  
}
