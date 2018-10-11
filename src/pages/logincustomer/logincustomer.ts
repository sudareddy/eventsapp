import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, MenuController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { NewInvite } from '../new-invite/new-invite';
import { HomePage } from '../home/home';
import { ComponentService } from '../service/componentService';

/**
 * Generated class for the LogincustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logincustomer',
  templateUrl: 'logincustomer.html',
})
export class LogincustomerPage {

	username:any;
	password:any;
    user:FormGroup;
    msg:any;
  constructor(public navCtrl: NavController, public compService:ComponentService,
    public events:Events,public menuCtrl: MenuController) {
      this.menuCtrl.swipeEnable(false)
  }

    goTo()
    {
this.navCtrl.push(NewInvite);
    }
  
  login(username,password){
    this.navCtrl.setRoot(HomePage);
  }

    ngOnInit() {
        this.user = new FormGroup({
            name: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });

    }

    goBack(){
        //this.navCtrl.pop();
        this.navCtrl.setRoot(NewInvite);
        //this.navCtrl.popToRoot();
    } 

    addPage(){
        this.navCtrl.setRoot(NewInvite);
    }

}
