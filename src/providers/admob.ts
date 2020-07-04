import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { AdMob, AdUnitIDOption } from '@ionic-native/admob-plus';

@Injectable()
export class AdmobProvider {
  bannerId_ios = "ca-app-pub-2188012581174186/2505620207";
  bannerId_android = "";
  id_ios = "ca-app-pub-2188012581174186/4940211857";
  id_android = "";

  constructor(
    public platform: Platform,
    private admob: AdMob
  ) {
    console.log('Hello AdmobProvider Provider');
  }

  InterstitialAd() {
    this.platform.ready().then(() => {
      this.admob.interstitial.load({
        id : {
          ios: this.id_ios,
          android: this.id_android
        }
      })
      .then(() => {
        this.admob.interstitial.show();
      })
    })
  }

  BannerAd() {
    this.admob.banner.show({
      id : {
        ios: this.bannerId_ios,
        android: this.bannerId_android
      }
    })
  }

  HideBannerAd() {
    this.admob.banner.hide();
  }
}
