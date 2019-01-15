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
  post: any;

  constructor(public navCtrl: NavController) { }

  detailPost() {

    this.navCtrl.push(DetalhePostPage.name, { 'detalhe': this.post });

  }


}
