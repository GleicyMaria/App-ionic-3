import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
    private base = "http://aulas.getsandbox.com";
  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

 getPosts(){
   return this.http.get( this.base +"/posts");
 }

 getLetPost(){
   return this.http.get(this.base + "/last_post")
 }
}
