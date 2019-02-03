import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //requiring the form elements
  @ViewChild('username') username;
  @ViewChild('password') password;
  todo = {};
  response: string;
  str: object;
  user: FormGroup;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private http: Http) {
    
  }
 
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Error',
      subTitle: "Wrong Username or Password entered",
      buttons: ['OK']
    }).present();
  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
    });

  }

  // function to authenticate the user logined
  signIn() {
    if (localStorage.getItem('authencation') == 'ne' || localStorage.getItem('authencation') == 'wp') {
    } if(true) {
      const url = 'https://www.dron.limited/digimess/appapi/BasicInfo/FetchLoginUser.php';
      const data1 = new FormData();
      data1.append('username', this.user.value.name);
      data1.append('password', this.user.value.pass);
      this.http.post(url, data1)
        .subscribe(data => {
          this.response = data['_body'];
          localStorage.setItem('authencation', this.response);
          console.log(this.response);
          if (this.response !== 'ne' && this.response !== 'wp') {
            this.navCtrl.setRoot(HomePage);
          }
        }, error => {
          console.log('Login fail');
        });
    }
  }
}
