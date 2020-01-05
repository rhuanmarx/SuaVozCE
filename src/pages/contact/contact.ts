import { Component } from '@angular/core';
//NgZone, ElementRef, OnInit, ViewChild
//import {FormControl} from "@angular/forms";
//import { } from 'googlemaps';
//import { MapsAPILoader } from '@agm/core';
//,  OnInit 
import { NavController, LoadingController, AlertController, ToastController,Platform  } from 'ionic-angular';
//import {Geolocation} from '@ionic-native/geolocation/ngx';
//import {Geolocation} from '@ionic-native/geolocation';

import {Geolocation} from '@ionic-native/geolocation';
//import {GoogleMap,GoogleMaps,GoogleMapOptions,GoogleMapsEvent} from '@ionic-native/google-maps';
declare var google;
//declare var google: any;

//import {AuthService} from '../../providers/auth/auth-service';
//import {SigninPage} from '../signin/signin';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 // public latitude: number;
  //  public longitude: number;
 //   public searchControl: FormControl;
 //   public zoom: number;

   // @ViewChild("search")
   // public searchElementRef;


  //implements OnInit
  map: any;
  markers:any;
  //loadLocal;
 
  Facada = [
    {
      nome: 'Facada',
      endereco: 'Rua, Valparaiso',
      latitude: -3.8459123,
      longitude: -38.5254143,
    }];

    Tiro = [
      {
        nome: 'Disparo a arma de fogo',
        endereco: 'Av. Senador Virgílio Távora, 1820 - Dionísio Torres, Fortaleza - CE',
        latitude: -3.7422196,
        longitude: -38.4974056,
      },
      {
        nome: 'Tiroteio',
        endereco: 'Rua Monsenhor Vicente Martins, 1117 - Henrique Jorge, Fortaleza - CE, 60510-185',
        latitude: -3.7688364,
        longitude: -38.5812032,
      }];
     
     Incendio = [
        {
          nome: 'Incendio',
          endereco: 'Av. Santos Dumont, 6130 - Papicu, Fortaleza - CE, 60190-800',
          latitude: -3.7409404,
          longitude: -38.4891626,
        }];
      
        Acidente = [
          {
            nome: 'Acidente de Carro',
            endereco: 'R. Cel. Antônio Botelho, 254 - Centro, Maranguape - CE',
            latitude: 3.8946567,
            longitude: -38.6864074,
          },
          {
          nome: 'Acidente de Moto',
          endereco: 'Av. Carlos Jereissati, 100 - Centro, Maracanaú - CE, 61900-010',
          latitude: -3.8796951,
          longitude: -38.6237527,
        }];

        Afogamento = [
          {
            nome: 'Afogamento',
            endereco: 'Av. Beira Mar, 848 - Praia de Iracema, Fortaleza - CE, 60165-120',
            latitude: -3.7191145,
          longitude: -38.5170796,
          },
          {
          nome: 'Afogamento Acidental',
          endereco: 'Av. Clóvis Arrais Maia, 3007 - Praia do Futuro, Fortaleza - CE, 60182-324',
          latitude: -3.7323207,
          longitude: -38.4584647,
        },
        {
        nome: 'Afogamento proposital',
        endereco: 'Parangaba, Fortaleza - CE, 60720-120',
        latitude: -3.7719858,
        longitude: -38.568657,
      }];


      Assalto = [
        {
          nome: 'Assalto a mão armada',
          endereco: 'Rua Juaci Sampaio Pontes, 1780 - São Miguel (Jurema), Caucaia - CE, 61601-012',
          latitude: -3.730476,
        longitude: -38.6596417,
        },
        {
        nome: 'Assalto',
        endereco: 'R. Tab. José Matias de Brito, 351 - Itambé, Caucaia - CE, 61602-070',
        latitude: -3.7302635,
        longitude: -38.6548219,
      }];


    Furto = [
      {
        nome: 'Furto de Casa',
        endereco: 'Rod CE 055, 400, Maranguape - CE, 61980-000',
        latitude: -3.7191145,
      longitude: -38.5170796,
      },
      {
      nome: 'Furto',
      endereco: 'Av. Clóvis Arrais Maia, 3007 - Praia do Futuro, Fortaleza - CE, 60182-324',
      latitude: -4.0308,
      longitude: -38.9354357,
    },
    {
    nome: 'Furto a Carro',
    endereco: 'R. Joaquim Magalhães, 835 - Centro, Canindé - CE, 62700-000',
    latitude: -4.3579118,
    longitude: -39.3188816,
  }];


Ato = [
    {
      nome: 'Ato Indiscreto',
      endereco: 'R. Napoleão Quezado, 10 - Parangaba, Fortaleza - CE, 60720-500',
      latitude: -3.7191145,
    longitude: -38.5170796,
    },
    {
    nome: 'Ato indiscreto',
    endereco: 'R. Tiburcio Targino, 358 - Centro, Aquiraz - CE, 61700-000',
    latitude: -3.7787733,
    longitude: -38.5675553,
}];

  Perigoso = [
    {
      nome: 'Região Perigosa',
      latitude: -3.8582277,
      longitude: -38.6564923,
    },
    {
    nome: 'Região Perigosa',
    latitude: -3.795595,
    longitude: -38.6104257,
  },
  {
  nome: 'Região Perigosa',
  latitude: -3.8420459,
  longitude: -38.5328747,
}];
  constructor(public navCtrl: NavController, 
    public load : LoadingController,
    public alert : AlertController,
      private toastCtrl : ToastController, public geolocation: Geolocation, public platform:Platform) {

        /*private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone 
        this.zoom = 10;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
  
        //create search FormControl
        this.searchControl = new FormControl();
  
        //set current position
       // this.setCurrentPosition();*/


     // this.loadLocal = this.load.create({content:'Aguarde ...'});
      //this.loadLocal.present();

}

ionViewWillEnter(){
  this.platform.ready().then(() => {
    this.initPage();
  });
}

/*ionViewDidLoad() {
  //set google maps defaults
  this.zoom = 4;
  this.latitude = 39.8282;
  this.longitude = -98.5795;

  //create search FormControl
  this.searchControl = new FormControl();

  //set current position
  this.setCurrentPosition();

  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
          types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();

              //verify result
              if (place.geometry === undefined || place.geometry === null) {
                  return;
              }

              //set latitude, longitude and zoom
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.zoom = 12;
          });
      });
  });
}*/

/*private setCurrentPosition() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 12;
        });
    }
}*/

initPage() {
  this.geolocation.getCurrentPosition().then(result => {
    this.loadMap(result.coords.latitude, result.coords.longitude);
  });
}


private loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);

    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    };

    let element = document.getElementById('map');

    this.map = new google.maps.Map(element, mapOptions);
    let marker = new google.maps.Marker({
      position: latLng,
     // document.getElementById('element')
      //element : this.map,
      animation: google.maps.Animation.BOUNCE,//DROP, // BOUNCE
      title: 'Sua Atual Localização',
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    })
    let content = `
    <div id="myid"  class="item item-thumbnail-left item-text-wrap">
      <ion-item>
        <ion-row>
          <h6>`+marker.title+`</h6>
        </ion-row>
      </ion-item>
    </div>
    `
    ;
    this.addInfoWindow(marker, content);
    marker.setMap(this.map);

    this.loadPoints();
  }

  loadPoints() {
    this.markers = [];

    for (const key of Object.keys(this.Facada)) {
      console.log(this.Facada[key].nome )
      let latLng = new google.maps.LatLng(this.Facada[key].latitude, this.Facada[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Facada[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/faca.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Facada[key].nome+`</h5>
            <h5>`+this.Facada[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }

    for (const key of Object.keys(this.Tiro)) {
      console.log(this.Tiro[key].nome )
      let latLng = new google.maps.LatLng(this.Tiro[key].latitude, this.Tiro[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Tiro[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/gun.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Tiro[key].nome+`</h5>
            <h5>`+this.Tiro[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }

 for (const key of Object.keys(this.Incendio)) {
      console.log(this.Incendio[key].nome )
      let latLng = new google.maps.LatLng(this.Incendio[key].latitude, this.Incendio[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Incendio[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/incendio.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Incendio[key].nome+`</h5>
            <h5>`+this.Incendio[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }



    for (const key of Object.keys(this.Acidente)) {
      console.log(this.Acidente[key].nome )
      let latLng = new google.maps.LatLng(this.Acidente[key].latitude, this.Acidente[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Acidente[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/Acidente.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Acidente[key].nome+`</h5>
            <h5>`+this.Acidente[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }



    for (const key of Object.keys(this.Afogamento)) {
      console.log(this.Afogamento[key].nome )
      let latLng = new google.maps.LatLng(this.Afogamento[key].latitude, this.Afogamento[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Afogamento[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/Afogamento.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Afogamento[key].nome+`</h5>
            <h5>`+this.Afogamento[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }



    for (const key of Object.keys(this.Assalto)) {
      console.log(this.Assalto[key].nome )
      let latLng = new google.maps.LatLng(this.Assalto[key].latitude, this.Assalto[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Assalto[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/Assalto.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Assalto[key].nome+`</h5>
            <h5>`+this.Assalto[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }


    for (const key of Object.keys(this.Furto)) {
      console.log(this.Furto[key].nome )
      let latLng = new google.maps.LatLng(this.Furto[key].latitude, this.Furto[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Furto[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/Furto.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Furto[key].nome+`</h5>
            <h5>`+this.Furto[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }

    for (const key of Object.keys(this.Ato)) {
      console.log(this.Ato[key].nome )
      let latLng = new google.maps.LatLng(this.Ato[key].latitude, this.Ato[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Ato[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/ato.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Ato[key].nome+`</h5>
            <h5>`+this.Ato[key].endereco+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }


    for (const key of Object.keys(this.Perigoso)) {
      console.log(this.Perigoso[key].nome )
      let latLng = new google.maps.LatLng(this.Perigoso[key].latitude, this.Perigoso[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Perigoso[key].nome,
        animation: google.maps.Animation.DROP,//DROP, // BOUNCE
        icon: 'assets/imgs/Região Perigosa.png',
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h5>`+this.Perigoso[key].nome+`</h5>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }
    return this.markers;
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('myid').addEventListener('click', () => {
          this.goToEmpresa(marker)
        });
      });
    })
  }

  goToEmpresa(empresa) {
    alert('Click');
  }

/*ngOnInit() {
  const position = new google.maps.LatLng(-3.845294,-38.5251889,17 );
  new google.maps.LatLng(-3.8472654,-38.5204606,16.08);

  const mapOptions = {
    zoom: 18,
    center: position,
    //disableDefaultUI: true
     styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
  }

 
  
  this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
  

  const marker = new google.maps.Marker({
    position: position,
    map: this.map,

    //Titulo
    title: 'Facada',

    //Animção
    animation: google.maps.Animation.DROP,//DROP, // BOUNCE

    //Icone
    //var image = 'assets/imgs/gun.png';
   icon: 'assets/imgs/faca.png',
  });
 new google.maps.Marker({
    position: position,
    map: this.map,

    //Titulo
    title: 'Facada',

    //Animção
    animation: google.maps.Animation.DROP,//DROP, // BOUNCE

    //Icone
    //var image = 'assets/imgs/gun.png';
   icon: 'assets/imgs/faca.png',
  });
}
/*exibirToast() {
  let toast = this.toastCtrl.create({
    message: 'Volte Sempre!!!',
    duration: 3000,
    position: 'bottom'
  });
  toast.present(toast);
}

signOut(){
  this.authService.signOut()
  .then(() =>{
    this.navCtrl.parent.parent.setRoot(SigninPage);
    this.exibirToast();
  })
  .catch((error) =>{
    console.error(error);
  });
  }*/
}
