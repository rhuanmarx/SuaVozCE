import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {User} from '../../providers/auth/user';
import {AuthService} from '../../providers/auth/auth-service';
//import {HomePage} from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SigninwithemailPage } from '../signinwithemail/signinwithemail';
import {HelpPage} from '../help/help';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private authService: AuthService) {
  }
CreateAccount(){
	this.navCtrl.push(SignupPage);
}
signInWithEmailPage() {
    this.navCtrl.push(SigninwithemailPage);
  }

//ResetPassword(){
//	this.navCtrl.push(ResetpasswordPage);
//}

//signIn(){
//	if (this.form.form.valid){
	//this.authService.signIn(this.user)
	//.then(() => {
	//this.navCtrl.setRoot(HomePage);
	//})
	//.catch((error : any) =>{
//let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
//if (error.code  == 'auth/invalid-email') {
 //           toast.setMessage('O e-mail não é valido.');
  //        } else if (error.code  == 'auth/user-disabled') {
   //         toast.setMessage('O usuário está desativado.');
    //      } else if (error.code  == 'auth/user-not-found') {
     //       toast.setMessage('Não foi possível encontar usuário.');
      //    } else if (error.code  == 'auth/wrong-password') {
       //     toast.setMessage('A senha digitada está errada.');
        //  }
          //toast.setMessage(error.message);
         // toast.present();
	//});
	//}
//}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  Help() {
    this.navCtrl.push(HelpPage);
     
   }
}
