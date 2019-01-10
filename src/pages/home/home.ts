import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DetalhePostPage } from '../detalhe-post/detalhe-post';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name = "Gleicy Maria"
  public username:string ="Gleicy";
  
  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  detailPost(){
    this.navCtrl.push(DetalhePostPage);
  }

  listMessage(){
    this.navCtrl.push(ListaMensagemPage);
  }

  listPost(){
    this.navCtrl.push(ListaPostPage)
  }

 
}
