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
    this.storage.remove('user');
  }  

  getFoto(){
    return this.storage.get("foto");
    
  }

  setFoto(foto){
    return this.storage.set("foto",foto).then(data => console.log('set foto: '+foto));
    
  }

  setCheckbox(data){
     this.storage.set('checkbox',data).then(data => console.log(data));
  }

  getCheckbox(){
    return this.storage.get('checkbox');
  }

  removeCheckbox(){
    this.storage.remove('checkbox');
  }
}
