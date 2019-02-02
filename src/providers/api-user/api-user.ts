import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginResponse} from "../../models/login-response";
 /*
  Generated class for the ApiUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiUserProvider {
  public user: LoginResponse;
url ='https://dron.limited/digimess/appapi/BasicInfo/FetchLoginUser.php';
  response = '';

  constructor(public http: HttpClient) {
    console.log('Hello ApiUserProvider Provider');
  }
  login(username: string, password: string){

    const data1 = new FormData() ;
    data1.append('username', 'krs@gmail.com');
    data1.append('password', 'karan123');

    const body = JSON.stringify(data1);
    const data = this.http.post(this.url, body);
    data.subscribe(d => {
      console.log(d);
    });
  }



}
