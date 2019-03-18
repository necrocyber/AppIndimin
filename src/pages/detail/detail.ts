import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name : 'Detail', segment: 'Detail/:param' })
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  detail : any;
  images : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private photoViewer: PhotoViewer) {
    this.detail = navParams.get('param');
    
  }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    let row: any = [];
    //alert(this.detail)
    if(typeof this.detail == 'string') {

      this.http.get('https://dog.ceo/api/breed/'+this.detail+'/images/random/10').subscribe(
        (res: any) => {
          this.images = res.message;
          console.log(this.images);
        }
      );

    } else {
      
      this.http.get('https://dog.ceo/api/breed/'+this.detail.name+'/images/random/10').subscribe(
        (res: any) => {
          this.images = res.message;
          console.log(this.images);
        }
      );
    }
    //this.http.get()
  }

  showImages(image) {
    this.photoViewer.show(image);
  }



}
