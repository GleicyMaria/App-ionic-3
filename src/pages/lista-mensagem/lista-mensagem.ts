import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagemPage } from '../mensagem/mensagem';

/**
 * Generated class for the ListaMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mensagem',
  templateUrl: 'lista-mensagem.html',
})

export class ListaMensagemPage {
   listaMensagens = new Array<any>();

     
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagemPage');
  }

  detailsMessage(){
    this.navCtrl.push(MensagemPage);
  }

 
  

}
