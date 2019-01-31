import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  load
  dados = {
    username: '',
    password: ''
  };
   user:any;

  public checked:boolean=false;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public auth:AuthProvider, 
   
  ) { }


  login() {
    this.loading();
    if(this.checked == true){
      this.auth.set('checkbox',this.checked);
    }else{
      this.auth.remove('checkbox');
    }

    this.userProvider.login(this.dados.username, this.dados.password)
      .then((result: any) => {
        this.closeLoading();   
        this.criarSession(result);
        this.navCtrl.setRoot(HomePage.name,{'id':result.id});

      }).catch((error: any) => {
        this.closeLoading();
        if (error.message) {
          this.alert(error.message);
        } else {
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


  loading() {
    
    this.load = this.loadingCtrl.create({
      content: "Login..."
    });
    this.load.present();
  }
  
  closeLoading() {
    this.load.dismiss();
  }

   
  criarSession(user){
    this.auth.set('user',user);
  }
  
}
