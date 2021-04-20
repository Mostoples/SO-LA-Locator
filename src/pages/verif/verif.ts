import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the VerifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verif',
  templateUrl: 'verif.html',
})
export class VerifPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public storage: Storage) {
  }

  otpInput : string;

  username : any;
  fullname : any;
  password : any;
  is_activated : any;

  activation_number : any;

  countpromtise : any;

  number_input : any;



  ionViewDidLoad() {
    this.storage.set('status', 'false');
    this.storage.set('status2', 'false');
    console.log('ionViewDidLoad VerifyPage');
    this.storage.get('fullname').then((val) => {
      this.fullname = val;
    });
    this.storage.get('username').then((val) => {
      this.username = val;
    });
    this.storage.get('password').then((val) => {
      this.password = val;
    });
    this.storage.get('is_activated').then((val) => {
      this.is_activated = val;
    });
    this.storage.get('activation_number').then((val) => {
      this.activation_number = val;
    });
   

  }

  close(){
    this.viewCtrl.dismiss();
  }

  callback(){
    // this.countpromtise += 1;
    // console.log(this.countpromtise);
    // if(this.countpromtise == 4){
                    var xmlHttp = new XMLHttpRequest();
                    var url = 'https://tohudancovid.xyz/index.php/activate';
                    var params = 'username='+this.username;
                    xmlHttp.open('POST', url, true);
                    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xmlHttp.onreadystatechange = ()=> {
                      if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        var tempjson = JSON.parse(xmlHttp.responseText);
                        console.log(tempjson);
                        if(tempjson.is_activated == 1){
                          this.navCtrl.push("HomePage");
                        }
                      }
                        
                    }
                    xmlHttp.send(params);


    // }
  }

  activate(){
                    this.countpromtise = 0;
                    var https = new XMLHttpRequest();
                    var url = 'https://tohudancovid.xyz/index.php/activate';
                    var params = 'username='+this.username;
                    https.open('POST', url, true);
                    https.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    https.onreadystatechange = ()=> {
                      if(https.readyState == 4 && https.status == 200){
                        this.callback();
                      }
                    }
                    https.send(params);
                    
  }

}
