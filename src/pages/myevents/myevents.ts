import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myevents',
  templateUrl: 'myevents.html',
})
export class MyeventsPage {
  
  event:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyeventsPage');
  }

}
