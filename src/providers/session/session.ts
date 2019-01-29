import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class Session {

  constructor(public storage: Storage) {
    console.log('Hello Session');
  }

  set(key, user) {
    return this.storage.set(key, user);
  }

  get(key) {
    return this.storage.get(key);
  }

  remove(key) {
    this.storage.remove(key);
  }
  
  
  
}

