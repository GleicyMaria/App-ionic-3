import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { UserProvider } from '../../providers/user/user';
import { Session } from '../../providers/session/session';

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
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public alertCtrl: AlertController,
    public session:Session
  ) { }

  login() {

    this.userProvider.login(this.dados.username, this.dados.password)
      .then((result: any) => {
        
        this.criarSession(result);
        this.navCtrl.setRoot(HomePage.name);

      }).catch((error: any) => {
        this.showAlert(error.error.erro.codigo, error.error.erro.mensagem)
        
      })
    }

   showAlert(codigo, mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Login Invalido',
      subTitle: 'Erro ' + codigo + ' ' + mensagem,
      buttons: ['OK']
    });
    alert.present();
  }
   
  criarSession(user){
    this.session.create(user);
  }
  
 


}
