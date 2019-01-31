import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { PostProvider } from '../../providers/post/post';
import { Storage } from '@ionic/storage';
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
  public iniciais;
  foto = null;

  constructor(public navCtrl: NavController,
    private postPrivider: PostProvider,
    public navParams: NavParams,
    public authProvider: AuthProvider
    ) {

      
  }


  ngOnInit() {

    this.authProvider.getStorageUser()
      .then((data) => {
        this.user = data

        if (this.user == null){
          this.user = this.navParams.get('user');
        }
        
        this.getIniciais();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPostPage');

    this.postPrivider.getLetPost().subscribe(

      (data) => {
        console.log(data)
        this.postDestaque = data;
        
      }, error => {
        console.log(error);
      }


    )

  }

  ionViewWillEnter(){
    
    this.authProvider.getFoto().then((data)=>{this.foto = data});
  }


  getIniciais() {

    this.authProvider.getFoto().then((data)=>{this.foto = data});
    
      let res = this.user.nome.split(" ")
      let nome = res[0].charAt(0)
      let sobrenome = res[res.length - 1].charAt(0);
      this.iniciais = nome + sobrenome
      console.log("aqui" + res)
      console.log(nome)
      console.log(this.iniciais)
    
    

    
  }

  logout() {
    this.authProvider.removeUser();
    this.authProvider.removeCheckbox();
    this.navCtrl.setRoot(LoginPage.name);
    
  }

  listMessage() {

    this.navCtrl.push(ListaMensagemPage.name, { 'id': this.user.id });
  }

  listPost() {
    this.navCtrl.push(ListaPostPage.name)
  }

  changePhoto() {
    this.navCtrl.push(AlterarFotoPage.name)
  }



}
