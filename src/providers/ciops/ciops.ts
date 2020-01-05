import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Ciops} from '../../models/ciops';
/*
  Generated class for the CiopsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CiopsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CiopsProvider Provider');
  }

 obterCiops(){
    return this.http.get<Ciops[]>('http://localhost:3000/CIOPS');
   }
}
