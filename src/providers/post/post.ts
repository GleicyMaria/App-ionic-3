import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
    private url = "http://aulas2.getsandbox.com";
  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

 getPosts(){
   return this.http.get( this.url +"/posts");
 }

 getLetPost(){
   return this.http.get(this.url+ "/last_post")
 }
}
