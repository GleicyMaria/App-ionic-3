import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { PostProvider } from '../../providers/post/post';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any = null;
  postDestaque: any;
  usuarioLogado;
  private load
  public iniciais;
  photo = null;

  constructor(public navCtrl: NavController,
    private postPrivider: PostProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public auth: AuthProvider
  ) { }

  
  ngOnInit() {
    this.auth.get('user').then(res => {
      this.user = (res);
      console.log('usuário logado: ', this.user);
      console.log(this.user.nome)
      this.getIniciais();
      this.setFoto();
      console.log("foto" + this.photo)
    });
    
  
    }
    
   
  ionViewDidEnter(){
    if(this.user!=null ){
      this.setFoto();
    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
    
    this.postPrivider.getLetPost().subscribe(

      (data) => {
        console.log(data)
        this.postDestaque = data;
        
      }, error => {
        this.closeLoading();
        this.showAlert(error.message)
        
      }


    )

  }

   setFoto(){
    this.auth.get(this.user.id).then(res =>{
      this.photo = res;
      console.log(res);
      console.log("set foto");
      console.log(this.photo);
      
    })

  }

  getIniciais() {
    let res = this.user.nome.split(" ")
    let nome = res[0].charAt(0).toUpperCase()
    let sobrenome = res[res.length - 1].charAt(0).toUpperCase()
    this.iniciais = nome.concat(sobrenome)
    console.log("aqui" + res)
    console.log(nome)
    console.log(this.iniciais)
  }
  

  logout() {
   
    this.confirmarLogout();
    
    
   
  }

  listMessage() {

    this.navCtrl.push(ListaMensagemPage.name, { 'id': this.user.id });
  }

  listPost() {
    this.navCtrl.push(ListaPostPage.name)
  }

  changePhoto() {
    this.navCtrl.push(AlterarFotoPage.name,{'id': this.user.id })
    
  }

  showAlert(mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Falha no Ultimo Post',
      subTitle: 'Erro ' + mensagem,
      buttons: ['OK']
    });
    alert.present();
  }
  
  confirmarLogout(){
    const conf = this.alertCtrl.create({
      title:'Logout',
      subTitle:' Deseja realmente fazer o logout?',
      buttons:[{
        text:'Não'
      },{
        text:'Sim',
        handler: ()=>{
          this.auth.remove('user');
          this.auth.remove('checkbox');
          this.navCtrl.setRoot(LoginPage.name)
        }
       
      }]
    })
    conf.present();
  }
 
  loading() {
    
    this.load = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.load.present();
  }
  closeLoading() {
    this.load.dismiss();
  }
}

