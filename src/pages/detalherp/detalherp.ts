import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { PoliciaProvider } from '../../providers/policia/policia';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
/**
 * Generated class for the DetalherpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const MEDIA_FILES_KEY = 'mediaFiles';


@IonicPage()
@Component({
  selector: 'page-detalherp',
  templateUrl: 'detalherp.html',
})
export class DetalherpPage {
  public Policia= {

    Video: ''

  };
  Url= 'http://localhost:3000/Policia';
  urlteste = 'https://www.youtube.com/watch?v=AE4b9jO1uB4';
  
mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http, 
    private videoPlayer: VideoPlayer, private file: File, private media: Media ) {
    this.Policia= navParams.get('PoliciaSelecionada');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalherpPage');
  }

  play(myFile) {
    let path = this.file.dataDirectory + myFile.name;
    let url = path.replace('Url'+'/Video'+ /^file:\/\//, '');
    let video = this.myVideo.nativeElement;
    video.src = url;
    video.play();
  }

  /*VideoPlay(){
    return this.videoPlayer.play('Url'+'/Video').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log(err);
     });
     }*/
     
}
