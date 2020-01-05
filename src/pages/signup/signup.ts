import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {User} from '../../providers/auth/user';
import {AuthService} from '../../providers/auth/auth-service';
//import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';
/**

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User = new User();
  @ViewChild('form') form: NgForm
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private authService: AuthService) {
    }
   CreateAccount(){
  if (this.form.form.valid) {
        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
  
        this.authService.createUser(this.user)
          .then((user: any) => {
            user.sendEmailVerification();
  
            toast.setMessage('Usuário criado com sucesso.');
            toast.present();
  
           // this.navCtrl.setRoot(PedidosPage);
           this.navCtrl.setRoot(TabsPage);
          })
          .catch((error: any) => {
            if (error.code  == 'auth/email-already-in-use') {
              toast.setMessage('O e-mail digitado já está em uso.');
            } else if (error.code  == 'auth/invalid-email') {
              toast.setMessage('O e-mail digitado não é valido.');
            } else if (error.code  == 'auth/operation-not-allowed') {
              toast.setMessage('Não está habilitado criar usuários.');
            } else if (error.code  == 'auth/weak-password') {
              toast.setMessage('A senha digitada é muito fraca.');
            }
            //toast.setMessage(error.message);
            toast.present();
          });
      }
   }
    ionViewDidLoad() {
      console.log('ionViewDidLoad SignupPage');
    }
}
