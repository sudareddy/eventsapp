import { MyeventsPage } from './../myevents/myevents';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomereventsPage } from '../customerevents/customerevents';

/**
 * Generated class for the ActiveeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activeevents',
  templateUrl: 'activeevents.html',
})
export class ActiveeventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveeventsPage');
  }

  createEvent(){
    this.navCtrl.setRoot(CustomereventsPage);
  }

}
