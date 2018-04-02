import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditsPage} from "../reddits/reddits";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getDefaults();
  }

  getDefaults() {
    if(localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    } else {
        this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    } else {
        this.limit = 10;
    }
  }

  setDefaults() {
    console.log('submit');
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditsPage);
  }
}
