import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


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
  public objeto_user ={
     username:"gleicymaria"

  }
  public objeto_postDestaque ={
    titulo:"Lorem ipsum",
    conteudo:"Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
    data:"09/01/2019 15:21",
    autor:"gleicymaria"
    
  }
  

  constructor(public navCtrl: NavController) {
    console.log('Hello PostComponent Component');
    
  }
  
}
