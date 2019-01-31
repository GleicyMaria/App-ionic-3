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
    public auth:AuthProvider, 
   
     ) { }

  login() {
   
    if(this.checked == true){
      this.auth.set('checkbox',this.checked);
    }else{
      this.auth.remove('checkbox');
    }

    this.userProvider.login(this.dados.username, this.dados.password)
      .then((result: any) => {
           
        this.criarauth(result);
        this.navCtrl.setRoot(HomePage.name,{'id':result.id});

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
   
  criarauth(user){
    this.auth.set('user',user);
  }
  
}
