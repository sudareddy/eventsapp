import { Component } from '@angular/core';
import { NavController, Platform , MenuController } from 'ionic-angular';
import { NewInvite } from '../new-invite/new-invite';
import { ComponentService } from "../service/componentService";
import { ModalController } from 'ionic-angular';
import { PushService } from "../service/pushService";
import { authService } from "../service/authService";
import {Device} from "@ionic-native/device";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pushObject: any;
  profile : any;
  association:any;
  uid:any;
  notifications:any;
  count=0;

  constructor(public deviceId:Device,public platform : Platform, public navCtrl: NavController,public menuCtrl: MenuController, public component:ComponentService, public modalctrl:ModalController, public pushService: PushService, public authService : authService) {
    this.menuCtrl.enable(true);
    this.pushObject = {};
    this.profile = {};
    this.uid=this.deviceId.uuid
  }

  
  
  addEvent()
  {
    this.navCtrl.push(NewInvite);
  }


    ngOnInit(){
        //this.getProfile()

    }
    
}
