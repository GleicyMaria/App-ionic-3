import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { PostProvider } from '../../providers/post/post';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any = this.navParams.get('user');
  postDestaque: any;
  usuarioLogado;
  public iniciais;

  constructor(public navCtrl: NavController,
    private postPrivider: PostProvider,
    public navParams: NavParams,
    ) {

  }

  ngOnInit() {

        this.getIniciais()
  
        
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

  getIniciais() {

    let res = this.user.nome.split(" ")
    let nome = res[0].charAt(0)
    let sobrenome = res[res.length - 1].charAt(0)
    this.iniciais = nome + sobrenome
    console.log("aqui" + res)
    console.log(nome)
    console.log(this.iniciais)
  }

  logout() {
    
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
