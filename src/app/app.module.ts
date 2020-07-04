import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FilterPipe } from './pipes';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IntroPage } from '../pages/intro/intro';
import { AboutPage } from '../pages/about/about';
import { MoreApps } from '../pages/more-apps/more-apps';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AdMob } from 'ionic-native';
import { IonicStorageModule } from '@ionic/storage';

import { AdMob } from '@ionic-native/admob-plus';
import { AdmobProvider } from '../providers/admob';

@NgModule({
  declarations: [
    MyApp,
    FilterPipe,
    HomePage,
    ListPage,
    IntroPage,
    AboutPage,
    MoreApps
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    AboutPage,
    MoreApps
  ],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen,
    AdMob,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdmobProvider
  ]
})
export class AppModule {}
