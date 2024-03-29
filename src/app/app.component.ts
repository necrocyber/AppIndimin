import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GaleriaPage } from '../pages/galeria/galeria';
import { JuegoPage } from '../pages/juego/juego';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{ title : string, component: any }>;

  constructor( platform: Platform, 
               statusBar: StatusBar, 
               splashScreen: SplashScreen,
               //navCtrl: NavController
              ) {

    this.pages = [
      { title : 'Home', component : HomePage },
      { title : 'Razas', component : GaleriaPage },
      { title : 'Juego', component : JuegoPage }
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    //this.navCtrl.push(page);
    this.nav.setRoot(page.component);
  }
}

