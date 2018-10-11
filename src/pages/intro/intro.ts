import { EventDetailsPage } from './../event-details/event-details';
import { AdminVendorPage } from './../admin-vendor/admin-vendor';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from "ionic-angular";
import { HomePage } from '../home/home';
import { NewInvite } from '../new-invite/new-invite';

/**
 * Generated class for the Intro page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {
 
  public query = '';
  public countries = ["Accommodation", "Activities", "Birthday", "Catering", "Decorators", "Gettogethers",
    "Givingbirth", "Hotels", "Magicians", "Mothersday", "Musician",
    "Party", "Retirement", "Singers", "Spa", "Thanksgiving", "Wedding"];
  public filteredList = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
   }

  ngOnInit() {

  }

  searchEvent() {
    console.log("this.autocomplete.query ============>>>>>>>>>>" + this.query);
    this.navCtrl.setRoot(EventDetailsPage);
  }

  vendorLogin() {
    this.navCtrl.setRoot(AdminVendorPage);
  }

  createEvent() {
    this.navCtrl.setRoot(NewInvite);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');

    if (window.localStorage.getItem('session')) {
      this.navCtrl.setRoot(HomePage);
    }
    else {

    }
  }


  filter() {
    if (this.query !== "") {
      this.filteredList = this.countries.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

}
