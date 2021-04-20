import { Component, ViewChild, ElementRef } from '@angular/core';
import { Slides,  IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public element : ElementRef, public storage: Storage) {
  }


  username_input : any;
  password_input : any;

  anim : any; 
  status2 : any; 

  elem3 : any;



  ionViewDidLoad() {
    this.elem3 = this.element.nativeElement as HTMLElement;
    this.elem3 = this.elem3.getElementsByTagName('div');
    
    this.anim = this.elem3.namedItem('status');
    this.status2 = this.elem3.namedItem('status2');
    console.log('ionViewDidLoad LoginPage');
    this.storage.get('status').then((val) => {
      if(val == 'status'){
        this.anim.style.animationName = 'status';
      }
    });
  }



  callback(temp){
 
 

      if(temp.length == 2){
        console.log(temp);
        console.log("Akun tidak ada");
        if(this.status2.style.animationName != 'status'){
          this.status2.style.animationName = 'status';
        }else{
          this.status2.style.animationName = 'status2';
        }
        
      }else{
       
        let halosa = JSON.parse(temp)[0];
        
        
        if(halosa.username == this.username_input && halosa.password == this.password_input && halosa.is_activated == 0){
          console.log("sampe sini juga");
          this.storage.set('fullname', halosa.fullname);
          this.storage.set('username', halosa.username);
          this.storage.set('password', halosa.password);
 
          this.storage.set('activation_number', halosa.activation_number);
          this.storage.set('is_activated', halosa.is_activated);

          this.navCtrl.push("VerifPage");

        }else if(halosa.username == this.username_input && halosa.password == this.password_input && halosa.is_activated == 1){
          
          this.storage.set('fullname', halosa.fullname);
          this.storage.set('username', halosa.username);
          this.storage.set('password', halosa.password);

          this.storage.set('activation_number', halosa.activation_number);
          this.storage.set('is_activated', halosa.is_activated);

          this.navCtrl.push("HomePage");
        }
      }
    
  }
  



  login(){

      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = () => { 
          if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
              this.callback(xmlHttp.responseText);
          }
      }
      xmlHttp.open("GET", "https://tohudancovid.xyz/index.php/register?username="+this.username_input, true); // true for asynchronous 
      xmlHttp.send(null);
  }

  register() {
    this.navCtrl.push("RegisterPage");
  }


  


  @ViewChild(Slides) slides: Slides;




 



}
