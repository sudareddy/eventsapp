import { AdminVendorPage } from './../admin-vendor/admin-vendor';
import { NavController,Events, MenuController } from 'ionic-angular';
import{HomePage}from'../home/home';
import {ComponentService} from "../service/componentService";
import {Component} from "@angular/core";
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{ForgotPassword} from "../forgot-password/forgot-password";
import { Intro } from '../intro/intro';
import { AuthProvider } from '../service/auth';
/**
 * Generated class for the SignIn page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignIn implements OnInit{

	username:any;
	password:any;
    msg:any;
  constructor(public navCtrl: NavController, public compService:ComponentService,public events:Events,
    public menuCtrl: MenuController, private authProvider: AuthProvider) {
      this.menuCtrl.swipeEnable(false)
  }

  addPage()
  {
    this.navCtrl.setRoot(AdminVendorPage);
  }
    goTo()
    {
this.navCtrl.push(ForgotPassword);
    }
  
  login(){
      //console.log(this.username+" : "+this.password);
    //this.authProvider.login(this.username, this.password).then(success => {
        this.navCtrl.setRoot(HomePage);
    //});
    
  }

    ngOnInit() {

    }

    goBack(){
        //this.navCtrl.pop();
        this.navCtrl.setRoot(Intro);
        //this.navCtrl.popToRoot();
    } 

}
