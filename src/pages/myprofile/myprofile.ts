import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  file: File;
  profile:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
  }
  
  /*goBack(){
    this.navCtrl.goToRoot();
  }*/

  changeListener(event) : void {
    this.file = event.target.files[0];
  }
}
