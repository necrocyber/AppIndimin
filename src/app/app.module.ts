import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GaleriaPage } from '../pages/galeria/galeria';
import { JuegoPage } from '../pages/juego/juego';

import { HttpClientModule } from '@angular/common/http';

//import { IonicImageViewerModule } from 'ionic-img-viewer';

import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GaleriaPage,
    JuegoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //IonicImageViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GaleriaPage,
    JuegoPage
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
