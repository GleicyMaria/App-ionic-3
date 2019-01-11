import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePostPage } from '../../pages/detalhe-post/detalhe-post';


/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input()
  listPost:any;

  public objeto_postDestaque ={
    titulo:"Lorem ipsum",
    conteudo:"Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
    data:"09/01/2019 ",
    autor:"gleicymaria"
    
  }
  

  constructor(public navCtrl: NavController) {
    
    
  }
  
  detailPost(){
    
    this.navCtrl.push(DetalhePostPage.name, {'detalhe':this.objeto_postDestaque});
  }

}
