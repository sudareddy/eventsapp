import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddAccommodationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-accommodation',
  templateUrl: 'add-accommodation.html',
})
export class AddAccommodationPage {

  firstname:any;
		lastname:any;
		mailid:any;
		password:any;
		phonenumber:any;
		accommData:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accommData={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAccommodationPage');
  }

}
