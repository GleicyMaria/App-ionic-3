import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-post',
  templateUrl: 'detalhe-post.html',
})
export class DetalhePostPage {
  
  
  detalhePost = {
  titulo:"",
  autor:"",
  conteudo:"",
  data:"",
  }


  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.getDetalhes();
  }

  ionViewDidLoad() {
    
  }

  getDetalhes(){
   let detalhes = this.navParams.get('detalhe');
   this.detalhePost.titulo = detalhes.titulo;
   this.detalhePost.autor = detalhes.autor;
   this.detalhePost.conteudo = detalhes.conteudo;
   this.detalhePost.data = detalhes.data;
   
  }

}
