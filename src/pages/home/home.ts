import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";
import { EventLogPage } from "../event-log/event-log";
import { QrCodePage } from "../qr-code/qr-code";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  tab1Root = MenuPage;
  tab2Root = EventLogPage;
  tab3Root = QrCodePage;




  constructor(public navCtrl: NavController) {
  }

  ionViewWillEnter() {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
