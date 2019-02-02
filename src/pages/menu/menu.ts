import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  todo = {};
  response: string;
  str: object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  messmenu() {
    const url = 'https://www.dron.limited/digimess/appapi/BasicInfo/ManageEvents.php';
    const data1 = new FormData();
    data1.append('type', 'messmenu');
    this.http.post(url, data1)
      .subscribe(data => {
        this.response = data['_body'];
        this.str = JSON.parse(this.response);
      }, error => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    this.messmenu();
    console.log('ionViewDidLoad MenuPage');
  }

}
