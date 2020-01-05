import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Samu} from '../../models/samu';
/*
  Generated class for the SamuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SamuProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SamuProvider Provider');
  }
  obterSamu(){
    return this.http.get<Samu[]>('http://localhost:3000/SAMU');
   }
}
