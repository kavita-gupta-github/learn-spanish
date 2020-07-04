import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  //slides: string[];
  constructor(public navCtrl: NavController) {}

  test(){
    this.navCtrl.push(HomePage);
  }

  slides = [
    {
      title: "Welcome to the App!",
      description: "The <b>Learn Spanish</b> includes lots of categories to learn things easily.",
      image: "assets/img/s11.png",
    },
    {
      title: "Fun & Learn",
      description: "<b>Learn Spanish</b> provide user to learn things easily so they can learn from here as a fun.",
      image: "assets/img/s12.png",
    }
  ];
}
