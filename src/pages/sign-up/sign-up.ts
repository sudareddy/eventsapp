import { Component } from '@angular/core';
import { NavController,MenuController} from 'ionic-angular';
import{HomePage}from'../home/home';
import{SignIn}from '../sign-in/sign-in';
import {authService} from "../service/authService";
import {FormGroup} from "@angular/forms";
import {ComponentService} from "../service/componentService";


/**
 * Generated class for the SignUp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUp {

		firstname:any;
		lastname:any;
		mailid:any;
		password:any;
		phonenumber:any;
		signUpData:any;
		user:FormGroup;
  constructor(public navCtrl: NavController,private authService:authService, private componentService:ComponentService,public menuCtrl:MenuController) {
      this.signUpData={};
      this.menuCtrl.swipeEnable(false)
  }

 signUp(signUpData)
  {
	  //this.navCtrl.setRoot(HomePage);
      if(signUpData.firstname){
          if(signUpData.lastname){
              if(signUpData.email){
                  if(signUpData.phone){
                    if(signUpData.password){
                        signUpData.type = 'user';
                        console.log(signUpData);
						this.navCtrl.setRoot(HomePage);
                        this.authService.signUp(signUpData).subscribe(
                            response=>{
                                console.log("Response");
                                console.log(response);
                                this.componentService.presentAlert('Signup successful','');

                                this.navCtrl.setRoot(HomePage);
                            }
                        )
                    }else{
                        this.componentService.presentAlert('Error','Please enter Password');
                    }
                  }else{
                      this.componentService.presentAlert('Error','Please enter Phone');
                  }
              }else{
                  this.componentService.presentAlert('Error','Please enter email');
              }
          }else{
              this.componentService.presentAlert('Error','Please enter lastname');
          }
      }else{
        this.componentService.presentAlert('Error','Please enter firstname');
      }

  }
  goTo()
  {
  	this.navCtrl.setRoot(SignIn);
  }

}
