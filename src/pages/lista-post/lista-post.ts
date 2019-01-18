import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';


@IonicPage()
@Component({
  selector: 'page-lista-post',
  templateUrl: 'lista-post.html',
 
})
export class ListaPostPage {

  public listPosts:any = new Array();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private postPrivider:PostProvider) {
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPostPage');
    
    this.postPrivider.getPosts().subscribe(
    
      (data) =>{
        console.log(data)
        this.listPosts = data;
       
      }, error =>{
        console.log(error);
      }
    )
    
  }

  
   
  

}
