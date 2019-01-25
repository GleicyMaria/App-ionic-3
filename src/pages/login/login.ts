import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { UserProvider } from '../../providers/user/user';

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
     ) { }

  login() {

    this.userProvider.login(this.dados.username, this.dados.password)
      .then((result: any) => {
          this.navCtrl.setRoot(HomePage.name,{'user':result});

      }).catch((error: any) => {
        if(error.message){
          this.alert(error.message);
        }else{
          this.showAlert(error.error.erro.codigo, error.error.erro.mensagem)
        }
       
        
      })
    }


    alert(mensagem) {
      const alert = this.alertCtrl.create({
        title: 'Login Invalido',
        subTitle: 'Erro: ' + mensagem,
        buttons: ['OK']
      });
      alert.present();
    }



   showAlert(codigo, mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Login Invalido',
      subTitle: 'Erro: ' + codigo + ' ' + mensagem,
      buttons: ['OK']
    });
    alert.present();
  }
   
  
  
 


}
