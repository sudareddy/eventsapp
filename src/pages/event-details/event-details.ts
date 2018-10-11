import { Intro } from './../intro/intro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbouteventPage } from '../aboutevent/aboutevent';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

eventDetailsArray : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');

    this.eventDetailsArray = [{
      "title":"WEDDING AND BRIDAL",
      "age":20
  },{"title":"WEDDING AND JAPAN",
  "age":10},{"title":"WEDDING AND DUBAI",
  "age":30}]
  }

  eventDetails(event){
    console.log("event==========="+event);
    this.navCtrl.setRoot(AbouteventPage);
  }

  goBack(){
    //this.navCtrl.pop();
    this.navCtrl.setRoot(Intro);
    //this.navCtrl.popToRoot();
} 

}
