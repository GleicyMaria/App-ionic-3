import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { PostProvider } from '../../providers/post/post';
import { Session } from '../../providers/session/session';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any ;
  postDestaque: any;
  usuarioLogado

  constructor(public navCtrl: NavController,
    private postPrivider: PostProvider,
    public navParams: NavParams,
    public session:Session) {
    
  }

  ngOnInit() {
    this.session.get().then(res => {
            this.user = (res);
            console.log('usuário logado  >>> ',this.usuarioLogado);
        });

        console.log(this.session.exist());
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPostPage');

    this.postPrivider.getLetPost().subscribe(

      (data) => {
        console.log(data)
        console.log(this.session.get())
        this.postDestaque = data;
        console.log(this.session.exist());
      }, error => {
        console.log(error);
      }


    )

  }

  logout() {
    this.session.remove();
    this.navCtrl.setRoot(LoginPage.name);
    console.log(this.session.exist());
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
