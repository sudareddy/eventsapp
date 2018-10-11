import { CustomerprofilePage } from './../pages/customerprofile/customerprofile';
import { ActiveeventsPage } from './../pages/activeevents/activeevents';
import { MyeventsPage } from './../pages/myevents/myevents';
import { AbouteventPage } from './../pages/aboutevent/aboutevent';
import { MyprofilePage } from './../pages/myprofile/myprofile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{ToastController} from "ionic-angular";
import { Toast} from "@ionic-native/toast";
import{ComponentService} from "../pages/service/componentService";
import { FormsModule } from '@angular/forms';
import { Contacts } from '@ionic-native/contacts';
import{Camera} from "@ionic-native/camera";
import { OneSignal } from '@ionic-native/onesignal';
import { PushService } from '../pages/service/pushService';
import{NgModule} from "@angular/core";
// import{GooglePlacesAutocompleteComponentModule} from "ionic2-google-places-autocomplete";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{NewInvite} from '../pages/new-invite/new-invite';
import{SignIn}from '../pages/sign-in/sign-in';
import{SignUp}from '../pages/sign-up/sign-up';

import{ForgotPassword} from "../pages/forgot-password/forgot-password";

import {Intro} from "../pages/intro/intro";

// import {GoogleMaps} from "@ionic-native/google-maps";
import{LaunchNavigator} from "@ionic-native/launch-navigator";

import {HttpClient} from "../pages/Interceptor/HttpClient";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AppConfig, MY_CONFIG_TOKEN} from "../pages/service/app-config";
 import {authService} from "../pages/service/authService";
import {HttpModule} from "@angular/http";

import {IonicImageViewerModule} from "ionic-img-viewer";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";
import {Uid} from "@ionic-native/uid";
import {Device} from "@ionic-native/device";
import { AdminVendorPage } from '../pages/admin-vendor/admin-vendor';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { AddAccommodationPage } from '../pages/add-accommodation/add-accommodation';
import { AddActivitiesPage } from '../pages/add-activities/add-activities';
import { AddBirthdayPage } from '../pages/add-birthday/add-birthday';
import { AddCateringPage } from '../pages/add-catering/add-catering';
import { AddDecoratorsPage } from '../pages/add-decorators/add-decorators';
import { AddGettogethersPage } from '../pages/add-gettogethers/add-gettogethers';
import { AddGivingbirthPage } from '../pages/add-givingbirth/add-givingbirth';
import { AddHotelsPage } from '../pages/add-hotels/add-hotels';
import { AddMagiciansPage } from '../pages/add-magicians/add-magicians';
import { AddMothersdayPage } from '../pages/add-mothersday/add-mothersday';
import { AddMusicianPage } from '../pages/add-musician/add-musician';
import { AddPartyPage } from '../pages/add-party/add-party';
import { AddRetirementPage } from '../pages/add-retirement/add-retirement';
import { AddSingersPage } from '../pages/add-singers/add-singers';
import { AddSpaPage } from '../pages/add-spa/add-spa';
import { AddThanksgivingPage } from '../pages/add-thanksgiving/add-thanksgiving';
import { AddWeddingPage } from '../pages/add-wedding/add-wedding';
import { LogincustomerPage } from '../pages/logincustomer/logincustomer';
import { AuthProvider } from '../pages/service/auth';
import { MysettingsPage } from '../pages/mysettings/mysettings';
import { CustomereventsPage } from '../pages/customerevents/customerevents';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewInvite,
    SignIn,
    SignUp,
    ForgotPassword,
    Intro,
    AdminVendorPage,
    MyprofilePage,
    EventDetailsPage,
    AbouteventPage,
    MyeventsPage,
    LogincustomerPage,
    ActiveeventsPage,
    CustomerprofilePage,
    MysettingsPage,
    CustomereventsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
      FormsModule,
      IonicModule.forRoot(MyApp),
      IonicImageViewerModule,
      SelectSearchableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewInvite,
    SignIn,
    SignUp,
    ForgotPassword,
    Intro,
    AdminVendorPage,
    MyprofilePage,
    EventDetailsPage,
    AbouteventPage,
    MyeventsPage,
    LogincustomerPage,
    ActiveeventsPage,
    CustomerprofilePage,
    MysettingsPage,
    CustomereventsPage
  ],
  providers: [
    AuthProvider,
    StatusBar,
    SplashScreen,
    authService,
    HttpClient,
      ToastController,
      Toast,
      ComponentService,
      Contacts,
      Camera,
      OneSignal,
      PushService,
      LaunchNavigator,
      UniqueDeviceID,
      Uid,
      Device,
       {provide: ErrorHandler, useClass: IonicErrorHandler},
      {provide:MY_CONFIG_TOKEN, useValue: AppConfig}
  ]
})
export class AppModule {}
