import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {







  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public alertCtrl: AlertController
  ) { }

  login(user: string, password) {

    this.userProvider.login(user, password)
      .then((result: any) => {

        this.navCtrl.setRoot(HomePage.name, { 'dados': result });

      }).catch((error: any) => {
        this.showAlert(error.error.erro.codigo, error.error.erro.mensagem)
        console.log("erro" + error.error.erro.codigo)
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
