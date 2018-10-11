import { Intro } from './../intro/intro';
import {Component} from '@angular/core';
import {Events, MenuController, NavController} from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import {authService} from "../service/authService";
import {ComponentService} from "../service/componentService";
import { LogincustomerPage } from '../logincustomer/logincustomer';
// import {GoogleMaps} from "@ionic-native/google-maps";

/**
 * Generated class for the NewInvite page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-new-invite',
  templateUrl: 'new-invite.html',

})

export class NewInvite  {
    
    inviteData:any;
    

    constructor(public menuCtrl:MenuController,public navCtrl: NavController,
        public events:Events,public modalctrl:ModalController,public authService:authService,
        public componentService:ComponentService, public navParams: NavParams) {
        this.inviteData={};
  }

  

    saveEvent(){
        this.navCtrl.setRoot(Intro);
    }

    loginascustomer(){
        this.navCtrl.setRoot(LogincustomerPage);
    }

    goToHome(){
        this.navCtrl.setRoot(Intro);
      }
      
      goBack(){
        //this.navCtrl.push(Intro);
         // console.log(this.viewCtrl.index);
        //this.navCtrl.pop();
        this.navCtrl.setRoot(Intro);
        //this.navCtrl.popToRoot();
    } 
  
}

