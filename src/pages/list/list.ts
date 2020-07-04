import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdmobProvider } from '../../providers/admob';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  present: number;
  parameter: string;
  listings: any[];
  isListen: boolean;
  listenId : any = 990;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private admodProvider: AdmobProvider
  ) {
    this.parameter = navParams.get('thing1'); 
    this.OnInit(); 
  }

  //for musics buttons
  music(id,folder){
    console.log(" ID = " + id + ", Folder = " + folder);
    var a = new Audio();
    a.src = "assets/mp3/"+folder+"/"+id+".m4a";
    console.log("mp3 path :" +a.src);
    a.load();
    a.play();
    this.isListen = true;
    this.listenId = id;
  }

  OnInit(){
    this.present = 0;
    var parameter = this.parameter;
    console.log("parameter :"+parameter);
    
    //var url = "http://182.71.167.75:8032/test.ods";
    var url = "assets/test.ods";
   // this.test = "assets/test1.ods";
    var listdata;
    /** set up async GET request **/
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function(e) {
      var data = new Uint8Array(req.response);
      var workbook = XLSX.read(data, {type:"array"});
  
      /** save data **/
      var ws = workbook.Sheets[parameter];
      listdata = (XLSX.utils.sheet_to_json(ws));
      console.log("listdata :"+JSON.stringify(listdata));
    }
    req.send();

    setTimeout(()=>{
      this.present = 1;
      this.listings = listdata;
      console.log("listdata After :"+JSON.stringify(this.listings)); 
    },1000);
     
 
  }
  
  ionViewDidLoad() {
    this.admodProvider.BannerAd();
  }
  ngOnDestroy() {
    this.admodProvider.HideBannerAd();
  }

  enableListen(){
    this.isListen = true
  }

}