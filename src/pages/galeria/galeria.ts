import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name : 'Pagina2', segment: 'Pagina-2'})
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  razas: any = [];
  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit() {
    this.loadBreeds()
  }

  loadBreeds() {
    this.http.get('https://dog.ceo/api/breeds/list/all').subscribe(
      (res: any) => {
        let result: any = Object.entries(res.message);
        result.forEach((entry) => {
          this.http.get('https://dog.ceo/api/breed/'+entry[0]+'/images/random').subscribe(
            (image: any) => {
              this.items.push({
                name : entry[0],
                image : image.message,
                subraza : entry[1]
              });
            }
          );
        });

        this.razas = this.items;
      }
    );
  }

  getItems(ev) {
    this.razas = this.items;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.razas = this.razas.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  detailBreed(item) {
    alert(item.subraza.length);
    if(item.subraza.length > 0) {

    } else {

    }
  }

  toggleSection(i, raza) {
    if(raza.subraza.length > 0) {
      this.razas[i].open = !this.razas[i].open;
    } else {
      this.navCtrl.push('Detail', {param: raza}, {animate: true, direction: 'forward'});
    }
    
  }

  toggleItem(i, j, raza, subraza) {
    //this.razas[i].subraza[j].open = !this.razas[i].subraza[j].open;
    //alert(raza + ' ' + subraza);
    this.navCtrl.push('Detail', {param: subraza+'-'+raza}, {animate: true, direction: 'forward'});
  }

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriaPage');
  }
  */

}
