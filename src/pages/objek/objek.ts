import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ObjekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


export interface Coba{
  loc_x0: number;
  loc_y0: number;
  dist0: number;
  deg0: number;
  loc_x1: number;
  loc_y1: number;
  dist1: number;
  deg1: number;
  loc_x2: number;
  loc_y2: number;
  dist2: number;
  deg2: number;
  loc_x3: number;
  loc_y3: number;
  dist3: number;
  deg3: number;
  loc_x4: number;
  loc_y4: number;
  dist4: number;
  deg4: number;
  loc_x5: number;
  loc_y5: number;
  dist5: number;
  deg5: number;
}

@IonicPage(
  {
  name: 'page-objek'
  }

  
  
@Component({
  selector: 'page-objek',
  templateUrl: 'objek.html',
})



export class ObjekPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

 
    hasil0 : Coba;

    number : any;

    obj0 : any;
    obj1 : any;
    obj2 : any;
    obj3 : any;
    obj4 : any;
    obj5 : any;

    x1  : any =  0;
    y1  : any =  0;
    x2  : any =  0;
    y2  : any =  0;
    x3  : any =  0;
    y3  : any =  0;
    x4  : any =  0;
    y4  : any =  0;
    x5  : any =  0;
    y5  : any =  0;
    x0  : any =  0;
    y0  : any =  0;

    distance0 : any;
    distance1 : any;
    distance2 : any;
    distance3 : any;
    distance4 : any;
    distance5 : any;

    degree0 : any;
    degree1 : any;
    degree2 : any;
    degree3 : any;
    degree4 : any;
    degree5 : any;

    dsudut0 : any;
    djarak0 : any;
    dloc_x0 : any;
    dloc_y0 : any;

    dsudut1 : any;
    djarak1 : any;
    dloc_x1 : any;
    dloc_y1 : any;

    dsudut2 : any;
    djarak2 : any;
    dloc_x2 : any;
    dloc_y2 : any;

    dsudut3 : any;
    djarak3 : any;
    dloc_x3 : any;
    dloc_y3 : any;

    dsudut4 : any;
    djarak4 : any;
    dloc_x4 : any;
    dloc_y4 : any;
    
    dsudut5 : any;
    djarak5 : any;
    dloc_x5 : any;
    dloc_y5 : any;


    redraw() {
            var xmlHttp0 = new XMLHttpRequest();
            xmlHttp0.onreadystatechange = ()=> { 
                if (xmlHttp0.readyState == 4 && xmlHttp0.status == 200){
                    this.hasil0 = JSON.parse(xmlHttp0.responseText);
                    this.obj0 = document.getElementById('o0');
                    this.obj1 = document.getElementById('o1');
                    this.obj2 = document.getElementById('o2');
                    this.obj3 = document.getElementById('o3');
                    this.obj4 = document.getElementById('o4');
                    this.obj5 = document.getElementById('o5');

                    this.dsudut0 = document.getElementById('sudut0');
                    this.djarak0 = document.getElementById('jarak0');
                    this.dloc_x0 = document.getElementById('loc_x0');
                    this.dloc_y0 = document.getElementById('loc_y0');

                    this.dsudut1 = document.getElementById('sudut1');
                    this.djarak1 = document.getElementById('jarak1');
                    this.dloc_x1 = document.getElementById('loc_x1');
                    this.dloc_y1 = document.getElementById('loc_y1');

                    this.dsudut2 = document.getElementById('sudut2');
                    this.djarak2 = document.getElementById('jarak2');
                    this.dloc_x2 = document.getElementById('loc_x2');
                    this.dloc_y2 = document.getElementById('loc_y2');

                    this.dsudut3 = document.getElementById('sudut3');
                    this.djarak3 = document.getElementById('jarak3');
                    this.dloc_x3 = document.getElementById('loc_x3');
                    this.dloc_y3 = document.getElementById('loc_y3');

                    this.dsudut4 = document.getElementById('sudut4');
                    this.djarak4 = document.getElementById('jarak4');
                    this.dloc_x4 = document.getElementById('loc_x4');
                    this.dloc_y4 = document.getElementById('loc_y4');

                    this.dsudut5 = document.getElementById('sudut5');
                    this.djarak5 = document.getElementById('jarak5');
                    this.dloc_x5 = document.getElementById('loc_x5');
                    this.dloc_y5 = document.getElementById('loc_y5');

                    this.x0 = 10 * Number(this.hasil0.loc_x0);
                    this.y0 = 10 * Number(this.hasil0.loc_y0);
                    this.x1 = 10 * Number(this.hasil0.loc_x1);
                    this.y1 = 10 * Number(this.hasil0.loc_y1);
                    this.x2 = 10 * Number(this.hasil0.loc_x2);
                    this.y2 = 10 * Number(this.hasil0.loc_y2);
                    this.x3 = 10 * Number(this.hasil0.loc_x3);
                    this.y3 = 10 * Number(this.hasil0.loc_y3);
                    this.x4 = 10 * Number(this.hasil0.loc_x4);
                    this.y4 = 10 * Number(this.hasil0.loc_y4);
                    this.x5 = 10 * Number(this.hasil0.loc_x5);
                    this.y5 = 10 * Number(this.hasil0.loc_y5);

                    this.distance0 = Number(this.hasil0.dist0);
                    this.distance1 = Number(this.hasil0.dist1);
                    this.distance2 = Number(this.hasil0.dist2);
                    this.distance3 = Number(this.hasil0.dist3);
                    this.distance4 = Number(this.hasil0.dist4);
                    this.distance5 = Number(this.hasil0.dist5);

                    this.degree0 = Number(this.hasil0.deg0);
                    this.degree1 = Number(this.hasil0.deg1);
                    this.degree2 = Number(this.hasil0.deg2);
                    this.degree3 = Number(this.hasil0.deg3);
                    this.degree4 = Number(this.hasil0.deg4);
                    this.degree5 = Number(this.hasil0.deg5);

                    this.dsudut0.innerHTML = this.degree0.toFixed(2).toString();
                    this.djarak0.innerHTML = this.distance0.toFixed(2).toString();
                    this.dloc_x0.innerHTML = this.x0.toFixed(2).toString();
                    this.dloc_y0.innerHTML = this.y0.toFixed(2).toString();

                    this.dsudut1.innerHTML = this.degree1.toFixed(2).toString();
                    this.djarak1.innerHTML = this.distance1.toFixed(2).toString();
                    this.dloc_x1.innerHTML = this.x1.toFixed(2).toString();
                    this.dloc_y1.innerHTML = this.y1.toFixed(2).toString();

                    this.dsudut2.innerHTML = this.degree2.toFixed(2).toString();
                    this.djarak2.innerHTML = this.distance2.toFixed(2).toString();
                    this.dloc_x2.innerHTML = this.x2.toFixed(2).toString();
                    this.dloc_y2.innerHTML = this.y2.toFixed(2).toString();

                    this.dsudut3.innerHTML = this.degree3.toFixed(2).toString();
                    this.djarak3.innerHTML = this.distance3.toFixed(2).toString();
                    this.dloc_x3.innerHTML = this.x3.toFixed(2).toString();
                    this.dloc_y3.innerHTML = this.y3.toFixed(2).toString();

                    this.dsudut4.innerHTML = this.degree4.toFixed(2).toString();
                    this.djarak4.innerHTML = this.distance4.toFixed(2).toString();
                    this.dloc_x4.innerHTML = this.x4.toFixed(2).toString();
                    this.dloc_y4.innerHTML = this.y4.toFixed(2).toString();

                    this.dsudut5.innerHTML = this.degree5.toFixed(2).toString();
                    this.djarak5.innerHTML = this.distance5.toFixed(2).toString();
                    this.dloc_x5.innerHTML = this.x5.toFixed(2).toString();
                    this.dloc_y5.innerHTML = this.y5.toFixed(2).toString();

                    this.obj0.style.left = (this.x0 + 50).toString() + 'vw';
                    this.obj0.style.top = (this.y0 + 50).toString() + 'vw';

                    this.obj1.style.left = (this.x1 + 50).toString() + 'vw';
                    this.obj1.style.top = (this.y1 + 50).toString() + 'vw';

                    this.obj2.style.left = (this.x2 + 50).toString() + 'vw';
                    this.obj2.style.top = (this.y2 + 50).toString() + 'vw';

                    this.obj3.style.left = (this.x3 + 50).toString() + 'vw';
                    this.obj3.style.top = (this.y3 + 50).toString() + 'vw';

                    this.obj4.style.left = (this.x4 + 50).toString() + 'vw';
                    this.obj4.style.top = (this.y4 + 50).toString() + 'vw';

                    this.obj5.style.left = (this.x5 + 50).toString() + 'vw';
                    this.obj5.style.top = (this.y5 + 50).toString() + 'vw';

                }   
            }
            var theURL0 = "https://tohudancovid.xyz/index.php/control?pilihan=6";
            xmlHttp0.open("GET", theURL0 , true); // true for asynchronous 
            xmlHttp0.send(null);
    }


    ionViewDidLoad() {
        

        

        setInterval(this.redraw, 100);
    }

}
