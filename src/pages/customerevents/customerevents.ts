import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomereventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customerevents',
  templateUrl: 'customerevents.html',
})
export class CustomereventsPage {

  event:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomereventsPage');
  }

}
