import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';


@Injectable()
export class Session {

  constructor(public storage:Storage) {
    console.log('Hello Session');
  }

  create(user){
    return this.storage.set('user', user);
  }

  get(){
    return this.storage.get('user');
  }

  setPhoto(id,photo){
    return this.storage.set(id,photo);
  }
  getPhoto(id){
  return this.storage.get(String(id));
  }
  remove(){
    this.storage.remove('user');
  }
  exist() {
    this.get().then(res => {
        console.log('User: ', res);
        if(res) {
            console.log("Existe Sessão")
            return true;
        } else {
          console.log("Não Existe Sessão")
            return false;
        }
    });
}
}

