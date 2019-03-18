import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the JuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class JuegoPage {

  random: any = [];
  format: any = [];
  filter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  }

  ngOnInit() {
    this.initGame();
  }

  initGame() {
    this.http.get('https://dog.ceo/api/breeds/list/all').subscribe(
      (res: any) => {
        let result: any = Object.entries(res.message);
        
        let shuffled = result.sort(function(){return .5 - Math.random()});
        let selected = shuffled.slice(0,3);
        selected.forEach((entry) => {
          let str = entry.toString();
          
          this.http.get('https://dog.ceo/api/breed/'+str.substring(0, str.length-1)+'/images/random').subscribe(
            (image: any) => {
              //alert(image.message);
              this.random.push({
                name : str.substring(0, str.length-1),
                image : image.message
              });
            }
          );
          
        });

        this.format = this.random;
        //alert(this.random.toString());
        
        
      }
    );
  }

  

}
