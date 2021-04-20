import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AkunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-akun',
  templateUrl: 'akun.html',
})
export class AkunPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  username : any;
  fullname : any;



 ionViewDidLoad() {

    this.storage.get('fullname').then((val) => {
      this.fullname = val;
    });
    this.storage.get('username').then((val) => {
      this.username = val;
    });
   
    console.log(this.username);
    console.log(this.fullname);
   

  }

}
