import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  dados ={
    user: ""

  }

  checkbox:boolean = false;

  constructor(public http: HttpClient,
              public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  setStorageUser(data){
    return this.storage.set("user",data).then(data => console.log('set usuario: '+data));
    
  }

  getStorageUser(){
    return this.storage.get("user");
    
  }

  removeUser(){
    this.storage.remove("user");
  }  
 
  getUser(){
    return this.dados.user;
  }

}
