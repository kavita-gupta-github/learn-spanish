import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilterPipe } from './pipes';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { AboutPage } from '../pages/about/about';
import { MoreApps } from '../pages/more-apps/more-apps';
//import { AdMob } from 'ionic-native';
import { InAppBrowser } from 'ionic-native';
import { AdmobProvider } from '../providers/admob';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //Root page for slides
  rootPage: any = IntroPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(private socialSharing: SocialSharing, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private admodProvider: AdmobProvider) {
    this.initializeApp();
    this.platform = platform;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage },
      { title: 'About Us', icon: 'pricetags', component: AboutPage },
      { title: 'More Apps', icon: 'apps', component: MoreApps }
    ];

  }

  //Sise menu FACEBOOK
  facebook() {
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("https://www.facebook.com/myhabeshatube/",'_blank');
    });
  }
  //side menu WEB VERSION
  web() {
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("https://www.facebook.com/myhabeshatube/",'_blank');
    });
  }
  //Side menu EXIT button
  halt() {
    console.log('EXIT Button CLicked');
    this.platform.exitApp();
    navigator['app'].exitApp();

  }

 share() {
   console.log('Share CLicked Ready');
  //  this.platform.ready().then(() => {
    this.socialSharing.share('Hello World', null, null, null);
  // });
   
  //  debugger;

    // this.platform.ready().then(() => {
      // let browser = new InAppBrowser("https://play.google.com/store/apps/details?id=eindbk.learn.amh",'_blank');
    // });
  }

  //rate app
  rate() {
    // this.platform.ready().then(() => {
      let browser = new InAppBrowser("https://play.google.com/store/apps/details?id=eindbk.learn.amh",'_blank');
    // });
  }

  //more app
  more() {
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("https://play.google.com/store/apps/details?id=eindbk.learn.amh",'_blank');
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.admodProvider.InterstitialAd();
      this.admodProvider.BannerAd();
      //INTERESTITAL AD CLOSED
    });
  }

  openPage(page) {
    
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openWebsite(){
    let browser = new InAppBrowser("http://myhabeshatube.com/",'_blank');
  }

}
