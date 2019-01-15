import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cyphrd from 'cyphrd';



@Injectable()
export class UserProvider {

  private url = 'http://aulas.getsandbox.com/login'


  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');

  }

  login(user: string, password) {
    console.log("login");
    var h = cyphrd.sha256(password)
    var hash = h.b64()
    console.log(hash);
    return new Promise((resolve, reject) => {
      var data = {
        login: user,
        senha: hash
      };
      this.postLogin(data).subscribe((result: any) => {
        resolve(result);
        console.log(data);
        console.log(result);
      },
        (error) => {
          reject(error);
          console.log(error);
        });
    });
  }

  postLogin(data) {

    return this.http.post(this.url, data)
  }






}
