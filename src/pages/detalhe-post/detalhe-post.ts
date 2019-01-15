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


  detalhePost: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.getDetalhes();
  }

  ionViewDidLoad() {

  }

  getDetalhes() {
    this.detalhePost= this.navParams.get('detalhe');
     
  }

}
