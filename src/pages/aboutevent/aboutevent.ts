import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';

/**
 * Generated class for the AbouteventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutevent',
  templateUrl: 'aboutevent.html',
})
export class AbouteventPage {

  firstname:any;
		lastname:any;
		mailid:any;
		password:any;
		phonenumber:any;
		signUpData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signUpData={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbouteventPage');
  }

  goBack(){
    //this.navCtrl.pop();
    this.navCtrl.setRoot(EventDetailsPage);
    //this.navCtrl.popToRoot();
} 

}
