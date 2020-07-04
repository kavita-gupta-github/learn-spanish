import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import moreAppsData from "../../assets/MoreApps";

@Component({
  selector: 'page-more-apps',
  templateUrl: 'more-apps.html'
})
export class MoreApps  {
  sheetNames: any[];
  moreAppsData: any[] = moreAppsData;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  web() {
    let browser = new InAppBrowser("https://www.learnamharic.club",'_blank');
  }

  gotoPage(link){
    let browser = new InAppBrowser(link,'_blank');
  }

  // more() {
  //   let browser = new InAppBrowser("https://www.learnamharic.club",'_blank');
  // }
}
