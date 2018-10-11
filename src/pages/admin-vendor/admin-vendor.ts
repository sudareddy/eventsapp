import { Intro } from './../intro/intro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignIn } from '../sign-in/sign-in';

/**
 * Generated class for the AdminVendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-vendor',
  templateUrl: 'admin-vendor.html',
})
export class AdminVendorPage {

  firstname:any;
		lastname:any;
		mailid:any;
		password:any;
		phonenumber:any;
		signUpData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signUpData={};
  }

  signUp(signUpData)
  {
  this.navCtrl.setRoot(Intro);
  }

  goTo()
  {
  	this.navCtrl.setRoot(SignIn);
  }

  goToHome(){
    this.navCtrl.setRoot(Intro);
  }

  

  goBack(){
    //this.navCtrl.pop();
    this.navCtrl.setRoot(Intro);
    //this.navCtrl.popToRoot();
} 
}
