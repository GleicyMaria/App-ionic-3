import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagemPage } from '../mensagem/mensagem';
import { MensagemProvider } from '../../providers/mensagem/mensagem';

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
  private listMensagens: any = new Array();
  private id:number = this.navParams.get('id');

     
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private mensagemPrivider:MensagemProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagemPage');
    
    this.mensagemPrivider.getMensagens(this.id).subscribe(
     
      (data)=>{
        console.log(this.id)
        console.log(data)
        this.listMensagens = data
      }, error =>{
        console.log(error);
      }
    )
  
  }


  detailsMessage(mensagem){
    
    this.navCtrl.push(MensagemPage.name,{'mensagem': mensagem});
  }

 
  

}
