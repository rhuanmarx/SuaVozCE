import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Policia} from '../../models/policia';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
/*
  Generated class for the PoliciaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoliciaProvider {
Url= 'http://localhost:3000/Policia'
  constructor(public http: HttpClient, private videoPlayer: VideoPlayer) {
    console.log('Hello PoliciaProvider Provider');
  }
  obterPolicia(){
    return this.http.get<Policia[]>('http://localhost:3000/Policia');
   }
   VideoPlay(){
  return this.videoPlayer.play('Url'+'/Video').then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
}
}
