import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePageModule } from "../pages/home/home.module";
import { LoginPageModule } from "../pages/login/login.module";
import { ApiUserProvider } from '../providers/api-user/api-user';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { MenuPageModule } from "../pages/menu/menu.module";
import { EventLogPageModule } from "../pages/event-log/event-log.module";
import { QrCodePageModule } from "../pages/qr-code/qr-code.module";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    LoginPageModule,
    HttpClientModule,
    MenuPageModule,
    EventLogPageModule,
    QrCodePageModule,
    NgxQRCodeModule,
    ZXingScannerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiUserProvider,
    HttpClient,
  ]
})
export class AppModule { }
