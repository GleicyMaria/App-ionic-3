import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  dados={
    username:'',
    password:''
  };

  botaoaDesabilitado = true;

  habilitar:boolean = false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     ) {
     
     
  
  }
  
  login(form){
    console.log("login");
    console.log(form);
   
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
 

}
