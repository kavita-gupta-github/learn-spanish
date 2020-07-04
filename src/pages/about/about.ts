import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  sheetNames: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  web() {
    let browser = new InAppBrowser("https://www.learnamharic.club",'_blank');
  }

  // more() {
  //   let browser = new InAppBrowser("https://www.learnamharic.club",'_blank');
  // }
}
