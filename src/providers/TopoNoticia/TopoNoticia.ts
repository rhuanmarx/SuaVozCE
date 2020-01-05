import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopoNoticia } from "../../models/TopoNoticia";
/*
  Generated class for the ContatoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TopoNoticiaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TopoNoticiaProvider Provider');
  }

  obterTopoNoticia(){
  return this.http.get<TopoNoticia[]>('http://localhost:3000/TopoNews');
 }

// obterNoticia(){
 // return this.http.get<Noticia[]>('https://projetocentec2018.firebaseio.com/Noticia');
//}
 //-teste 
 //obterNoticia(){
    //return this.http.get<Noticia[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Noticia');
 // }
  
}
