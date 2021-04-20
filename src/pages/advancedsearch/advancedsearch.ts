import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-advancedsearch',
  templateUrl: 'advancedsearch.html',
})
export class AdvancedsearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancedsearchPage');
  }

  back(){
    this.navCtrl.pop();
  }

  notification(){
    this.navCtrl.push("NotificationPage");
  }

  search(){
    this.navCtrl.push("ShoplistPage");
  }

  advanced(){
    this.navCtrl.setRoot("LocationPage");

    

  }

}
