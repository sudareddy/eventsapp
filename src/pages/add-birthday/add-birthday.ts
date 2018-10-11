import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddBirthdayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-birthday',
  templateUrl: 'add-birthday.html',
})
export class AddBirthdayPage {

  firstname:any;
  lastname:any;
  mailid:any;
  password:any;
  phonenumber:any;
  birthdayData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.birthdayData={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBirthdayPage');
  }

}
