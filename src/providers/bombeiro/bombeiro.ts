import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Bombeiro} from "../../models/bombeiro";


/*
  Generated class for the BombeiroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BombeiroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BombeiroProvider Provider');
  }
  
  obterBombeiro(){

    return this.http.get<Bombeiro[]>('http://localhost:3000/Bombeiros');
   }
}
