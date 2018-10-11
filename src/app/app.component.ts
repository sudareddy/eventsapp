import { AuthProvider } from './../pages/service/auth';
import { MyeventsPage } from './../pages/myevents/myevents';
import { MysettingsPage } from './../pages/mysettings/mysettings';
import { AddWeddingPage } from './../pages/add-wedding/add-wedding';
import { AddThanksgivingPage } from './../pages/add-thanksgiving/add-thanksgiving';
import { AddSpaPage } from './../pages/add-spa/add-spa';
import { AddSingersPage } from './../pages/add-singers/add-singers';
import { AddRetirementPage } from './../pages/add-retirement/add-retirement';
import { AddPartyPage } from './../pages/add-party/add-party';
import { AddMusicianPage } from './../pages/add-musician/add-musician';
import { AddMothersdayPage } from './../pages/add-mothersday/add-mothersday';
import { AddMagiciansPage } from './../pages/add-magicians/add-magicians';
import { AddHotelsPage } from './../pages/add-hotels/add-hotels';
import { AddGivingbirthPage } from './../pages/add-givingbirth/add-givingbirth';
import { AddGettogethersPage } from './../pages/add-gettogethers/add-gettogethers';
import { AddDecoratorsPage } from './../pages/add-decorators/add-decorators';
import { AddCateringPage } from './../pages/add-catering/add-catering';
import { AddBirthdayPage } from './../pages/add-birthday/add-birthday';
import { AddActivitiesPage } from './../pages/add-activities/add-activities';
import { AddAccommodationPage } from './../pages/add-accommodation/add-accommodation';
import { MyprofilePage } from './../pages/myprofile/myprofile';
import { Component, ViewChild } from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Toast} from "@ionic-native/toast";
import { OneSignal } from '@ionic-native/onesignal';
import {ModalController} from "ionic-angular";
// import{SweetAlert} from "sweetalert/typings/core";
// import{PhotoViewer} from "@ionic-native/photo-viewer";

import {ComponentService} from "../pages/service/componentService";
import{Intro} from "../pages/intro/intro";
import {Device} from "@ionic-native/device";
import{authService} from "../pages/service/authService";
import { App } from 'ionic-angular/components/app/app';
import { CustomerprofilePage } from '../pages/customerprofile/customerprofile';
import { ActiveeventsPage } from '../pages/activeevents/activeevents';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

  rootPage: any =Intro;
  public counter=0;
    username:any;
    uid:any;
    firstName:any;
    profile:any;
  pages: Array<{title: string, component: any}>;
  footerPage:Array<{title:string, component:any}>;

  constructor(public menuCtrl:MenuController,public deviceId:Device,public platform: Platform, 
    public events:Events,public statusBar: StatusBar, public modalCtrl: ModalController, 
    public splashScreen: SplashScreen,public toastCtrl: ToastController,public toast:Toast,
    public compService:ComponentService,
    private oneSignal: OneSignal,public authService:authService,app: App,
    private authProvider: AuthProvider)

  {
      this.profile=[];
    this.initializeApp();

      this.pages = [
        { title: 'PROFILE', component: MyprofilePage },
        { title: 'SETTINGS', component: MysettingsPage },
        { title: 'EVENTS', component: MyeventsPage },
        { title: 'CUST PROFILE', component: CustomerprofilePage },
        { title: 'ACTIVE EVENTS', component: ActiveeventsPage }
      ];

    this.username = window.localStorage.getItem('userName');
    this.events.subscribe('userName',(username)=>{
        this.username=username;
    })
      this.firstName = window.localStorage.getItem('firstName');
      this.events.subscribe('firstName',(firstName)=>{
          this.firstName=firstName;
      });
 
  }

  
    // ionViewDidEnter() {
    //     console.log("hi entered into ion view did enter");
    //     console.log("this.authProvider.isAdmin() 123: "+this.authProvider.isAdmin());
    //     this.menuCtrl.enable(true, "menuId");
    // }

    ionViewDidEnter() {
      //to disable menu, or
      this.menuCtrl.enable(false);
    }
  
    ionViewWillLeave() {
      // to enable menu.
      console.log("this.authProvider.isAdmin() 123: "+this.authProvider.isAdmin());
      this.menuCtrl.enable(true,"menuId");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('primary');

        this.platform.registerBackButtonAction(() => {
            let view = this.nav.getActive();
            console.log("Back button event");
            console.log(view);
            console.log(this.nav.canGoBack());
            if(this.nav.canGoBack())
            {
                this.nav.pop();
            }
            else if (this.counter == 0) {
                this.counter++;
                this.presentToast();
                setTimeout(() => { this.counter = 0 }, 3000)
            } else {
                // console.log("exitapp");
                this.platform.exitApp();
            }
        }, 0);

    });
  }


    initOneSignal() {
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    }

    presentToast() {
        this.compService.showToast('Press again to exit','center');
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenaria
    console.log(" page"+page)
    this.nav.setRoot(page);
  }

  logout()
  {
     this.nav.setRoot(Intro);
     window.localStorage.clear();
  }

}
