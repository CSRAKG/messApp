import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-event-log',
  templateUrl: 'event-log.html',
})
export class EventLogPage {
  basepath = "/"
  response: string;
  str: object;
  value: string = '';
  array: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http
    , public modal: ModalController,
    private _platform: Platform) {
    if (this._platform.is){
      
    }
  }

  openModal(event_id, event, start) {

    const myData = {
      event_id: event_id,
      event: event,
      start: start
    };

    const myModal = this.modal.create('ModalPage', { data: myData });
    myModal.present();
  }

  event() {
    const url = 'https://www.dron.limited/digimess/appapi/BasicInfo/ManageEvents.php';
    const data1 = new FormData();
    data1.append("type", "fetchevents");
    this.http.post(url, data1)
      .subscribe(data => {
        this.response = data['_body'];
        this.str = JSON.parse(this.response);
      }, error => {
        console.log();
      });
    // Print response data
  }

  ionViewDidLoad() {
    this.event();
    console.log('ionViewDidLoad EventLogPage');
  }

}
