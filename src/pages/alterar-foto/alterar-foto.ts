import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
 


 @IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarFotoPage');
   
  }
  

  

}
