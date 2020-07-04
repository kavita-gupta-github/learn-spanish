import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as XLSX from 'ts-xlsx';

//import { AdMob } from 'ionic-native';
import { ListPage } from '../list/list';
import { AdmobProvider } from '../../providers/admob';
import { Storage } from '@ionic/storage';

//import { FilterPipe } from './pipes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  present: number;
  sheetName: any[];

  constructor(
    public navCtrl: NavController,
    private admodProvider: AdmobProvider,
    private storage: Storage
  ) { 
    this.onInit();
  }

  PushSingleCategory(name){
    //poping up iNTERSTITIAL ADS while clicking categories
   // this.admodProvider.InterstitialAd();
   
    this.navCtrl.push(ListPage, {
        thing1: name
    });
  }

  onInit() {

    this.present = 0;
    //var url = "http://182.71.167.75:8032/test.ods";
    var url = "assets/test.ods";
    //this.path= "assets/test.ods";
    if(url){
      console.log('url = '+ url);
    }
    var sheet_name_list;
    
    // set up async GET request
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    
    req.onload = function(e){
      console.log("onload test");
      var data = new Uint8Array(req.response);
      var workbook = XLSX.read(data, {type:"array"});

      sheet_name_list = workbook.SheetNames;
      console.log("sheet_name_list : "+JSON.stringify(sheet_name_list));

      var len = sheet_name_list.length;
      console.log("SheetNames length = " + len);     
    }
    req.send();

    setTimeout(()=>{
      this.present = 1;
      this.sheetName = sheet_name_list;
      console.log("wsSheets after :"+JSON.stringify(sheet_name_list));
    },1000);
  
  }

 // ionViewDidLoad() {
 //   this.admodProvider.InterstitialAd();
//  }

}
