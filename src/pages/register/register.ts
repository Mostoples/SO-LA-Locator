import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public storage: Storage, public element: ElementRef, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  fullname_input : any;
  password_input : any;
  password_confirmation_input : any;
  username_input : any;


  isChecked : any = false;
  isConfirmation : any = false;

  warningPassword : any = "none";
  elem : any;
  warningElem : any;
  coba : any;
  ceklist : any;

  hasil : any;
  warningElemEmail : any;

  elemarray : any;
  countpromise : any;

  arraytrue : any;
  arraytrue2 : any;

  anim : any; 
  status2 : any; 

  elem3 : any;




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.storage.set('status', 'false');
    this.storage.set('status2', 'false');

    this.elem3 = this.element.nativeElement as HTMLElement;
    this.elem3 = this.elem3.getElementsByTagName('div');
    
    this.anim = this.elem3.namedItem('status');


  }

  login(){
    this.navCtrl.push("LoginPage");
  }

  checked(){
    if(this.isChecked == false){
      this.isChecked = true;
    }else{
      this.isChecked = false;
    }
  }

  

  verif(state){
    this.countpromise += 1;
    if(state && this.countpromise == 3){
        console.log("halo sekali");
        console.log(state);
        console.log(this.countpromise);
      
        this.navCtrl.push("VerifPage");
    }
  }

  clear(){
    this.warningElem.style.display = 'none';
    this.warningElemEmail.style.display = 'none';
    this.ceklist.style.display = 'none';
  }

  register(){
    

    this.arraytrue = 0;
    this.arraytrue2 = 0;
    this.countpromise = 0;
    this.elem = this.element.nativeElement as HTMLElement;
    this.elem = this.elem.getElementsByTagName('a');
    
    this.warningElem = this.elem.namedItem('warningPassword');
    this.coba = this.elem.namedItem('coba');
    this.ceklist = this.elem.namedItem('ceklist');
    this.warningElemEmail = this.elem.namedItem('emailWarn');

    this.clear();

    this.elemarray = [this.username_input, this.fullname_input, this.password_input, this.warningElemEmail, this.navCtrl, this.storage, this.anim];



    if(this.isConfirmation == false){
      if(this.password_input == this.password_confirmation_input){
        this.isConfirmation = true;
      }else{
        this.warningElem.style.display = "block";
        this.isConfirmation = false;
      }
    }

    function callback(temp, elem){
        console.log(temp);
        console.log(elem[6]);
        console.log('aaaaaaaaaaaaaaaaaaaa');
        elem[6].style.animationName = 'status';
        
          if(temp.length == 2){
                    var https = new XMLHttpRequest();
                    var url = 'https://tohudancovid.xyz/index.php/register';
                    var params = 'username='+elem[0]+'&fullname='+elem[1]+'&password='+elem[2];
                    https.open('POST', url, true);
      
                    //Send the proper header information along with the request
                    https.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      
                    https.onreadystatechange = function() {
                      if(https.readyState == 4 && https.status == 200){
                        console.log(https.responseText);
                        elem[4].push("LoginPage");
                        elem[5].set('status', 'status');
                        elem[5].set('status2', 'status');
                       

                      }
                    }

                    https.send(params);
                    return true;
          }else{
  

          }
        //}
    }


    if(this.isChecked && this.isConfirmation){
      console.log("aaaaa");
      var http = new XMLHttpRequest();

      var url = 'https://tohudancovid.xyz/index.php/register?username='+this.username_input;
      
      http.onreadystatechange = () => {
        if(http.readyState == 4 && http.status == 200){
            this.verif(callback(http.responseText,  this.elemarray));
        }
      };

      http.open('GET', url, true);
      //http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      http.send(null);
      
                    
                    
                    
    }else{
      this.ceklist.style.display = "block";
    }

                    
    
  }

}
