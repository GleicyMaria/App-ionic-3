import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePostPage } from '../../pages/detalhe-post/detalhe-post';
import {DatePipe} from '@angular/common'
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input()
  public post: any;
  public data:any;
  public dataHora:any;
  
  constructor(public navCtrl: NavController, private dataPipe:DatePipe) {
     this.dataPipe = new DatePipe('pt-BR') 
  }


   ngOnInit() {
     console.log("aqui")
     this.mudarData();
   }
  
  detailPost() {
    
    this.navCtrl.push(DetalhePostPage.name, { 'detalhe': this.post  , 'data':this.dataHora});

  }

  mudarData(){
    this.data = this.dataPipe.transform(this.post.data, 'dd/MM/yyy')
    this.dataHora = this.dataPipe.transform(this.post.data, 'short')
    console.log(this.data);
    console.log(this.dataHora);
        
      
     
    }
  }



