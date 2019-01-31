import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';


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
   user:any;

  public checked:boolean=false;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public alertCtrl: AlertController,
    public authProvider : AuthProvider
     ) {  }
     

  login() {
   
    if(this.checked == true){
      this.authProvider.setCheckbox(this.checked);
    }else{
      this.authProvider.removeCheckbox();
    }

    this.userProvider.login(this.dados.username, this.dados.password)
      .then((result: any) => {
        this.user = result;
        this.authProvider.setStorageUser(this.user);
        this.navCtrl.setRoot(HomePage.name,{'user': this.user});
       
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

 
  
}
