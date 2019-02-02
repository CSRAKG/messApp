import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  response: string;
  xyz = {
    event: '',
    event_id: '',
    start: ''
  }

  constructor(private view: ViewController, public navCtrl: NavController, public navParams: NavParams,
    private http: Http) {
  }

  update() {
    const url = 'https://www.dron.limited/digimess/appapi/BasicInfo/ManageEvents.php';
    const data1 = new FormData();
    data1.append('type', 'updateevent');
    data1.append('evid', this.xyz.event_id);
    data1.append('event', this.xyz.event);
    data1.append('evdate', this.xyz.start);
    this.http.post(url, data1)
      .subscribe(data => {
        this.response = data['_body'];
        console.log(this.response);
      }, error => {
        console.log('No Response');
      });
  }

  closeModal() {
    this.view.dismiss();
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    this.xyz.event = data.event;
    this.xyz.event_id = data.event_id;
    this.xyz.start = data.start;
    console.log(this.xyz.event + this.xyz.event_id + this.xyz.start);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
