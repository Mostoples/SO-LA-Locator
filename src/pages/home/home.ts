import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  cat1(){
    this.navCtrl.push("LocationPage");
  }

  cat2(){
    this.navCtrl.push("panduann");
  }

  cat3(){
    this.navCtrl.push("tentang-page");
  }

  cat4(){
    this.navCtrl.push("page-objek");
  }

  cat5(){
    this.navCtrl.push("AkunPage");
  }

}
