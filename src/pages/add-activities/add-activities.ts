import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-activities',
  templateUrl: 'add-activities.html',
})
export class AddActivitiesPage {

  firstname:any;
		lastname:any;
		mailid:any;
		password:any;
		phonenumber:any;
    activitiesData:any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activitiesData={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActivitiesPage');
  }

}
