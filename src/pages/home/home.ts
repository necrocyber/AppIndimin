import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GaleriaPage } from '../galeria/galeria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoPage() {
    this.navCtrl.push('Pagina2');
  }

}
