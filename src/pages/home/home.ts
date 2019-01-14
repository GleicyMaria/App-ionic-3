import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public objeto_user ={
    name:"Gleicy Maria",
    username:"gleicymaria"

  }

  postDestaque:any;
    
  
  
  
  constructor(public navCtrl: NavController,
    private postPrivider:PostProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPostPage');
    
    this.postPrivider.getLetPost().subscribe(
    
      (data) =>{
        console.log(data)
        this.postDestaque = data;
        
      }, error =>{
        console.log(error);
      }

      
    )
    
  }

  logout(){
    this.navCtrl.setRoot(LoginPage.name);
  }
  
  listMessage(){
    this.navCtrl.push(ListaMensagemPage.name);
  }

  listPost(){
    this.navCtrl.push(ListaPostPage.name)
  }
   
  changePhoto(){
    this.navCtrl.push(AlterarFotoPage.name)
  }

  
 
}
