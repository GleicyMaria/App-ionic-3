import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';


@IonicPage()
@Component({
  selector: 'page-lista-post',
  templateUrl: 'lista-post.html',
 
})
export class ListaPostPage {

  public listPosts:any = new Array();
  load;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private postPrivider:PostProvider,
     public alertCtrl: AlertController, 
     public loadingCtrl:LoadingController) {
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPostPage');
     this.loading();
    this.postPrivider.getPosts().subscribe(
      
      (data) =>{
        console.log(data)
        this.listPosts = data;
        this.closeLoading();
      }, error =>{
        this.closeLoading();
        this.showAlert(error.message);
      }
    )

    
    
  }

  showAlert (mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Erro na Lista de Post',
      subTitle: 'Erro '  + mensagem,
      buttons: ['OK']
    });
    alert.present();

  }
   
  loading() {
    
    
    this.load = this.loadingCtrl.create({
      content: "Carregando posts..."
    });
    this.load.present();
  }
  closeLoading() {
    this.load.dismiss();
  }
  

}
