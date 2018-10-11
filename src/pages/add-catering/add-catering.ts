import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCateringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-catering',
  templateUrl: 'add-catering.html',
})
export class AddCateringPage {

  firstname:any;
  lastname:any;
  mailid:any;
  password:any;
  phonenumber:any;
  cateringData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cateringData={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCateringPage');
  }

}
