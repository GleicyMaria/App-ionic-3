import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public objeto_user ={
    name:"Gleicy Maria",
    username:"gleicymaria"

  }

  public objeto_postDestaque ={
    titulo:"Lorem ipsum",
    conteudo:"Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
    data:"09/01/2019 15:21",
    autor:"gleicymaria"
    
  }
  
  
  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  

  listMessage(){
    this.navCtrl.push(ListaMensagemPage);
  }

  listPost(){
    this.navCtrl.push(ListaPostPage)
  }
   
  changePhoto(){
    this.navCtrl.push(AlterarFotoPage)
  }
 
}
