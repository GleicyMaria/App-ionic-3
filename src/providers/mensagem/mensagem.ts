import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MensagemProvider {
  private url = "http://aulas2.getsandbox.com/msgs/"
  
  constructor(public http: HttpClient) {
    console.log('Hello MensagemProvider Provider');
    
  }

  getMensagens(id){
    return this.http.get(this.url+ id);
  }

}
