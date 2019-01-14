import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagemProvider } from '../../providers/mensagem/mensagem';

/**
 * Generated class for the MensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export class MensagemPage {
    
  mensagem:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.getMensagem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
   
      

  }

  getMensagem(){
    let detalhes = this.navParams.get('mensagem');
    this.mensagem = detalhes;
   }

   
}
