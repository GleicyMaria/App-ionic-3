import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagemPage } from '../mensagem/mensagem';
import { MensagemProvider } from '../../providers/mensagem/mensagem';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime'
/**
 * Generated class for the ListaMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mensagem',
  templateUrl: 'lista-mensagem.html',
})

export class ListaMensagemPage {
  public listMensagens: any;
  private id:number ;
  
  
  public array:any; 
  public termo:string = '';
  public controleBusca: FormControl;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private mensagemPrivider:MensagemProvider) {
      this.controleBusca = new FormControl;
      this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagemPage');
    
    this.controleBusca.valueChanges.debounceTime(600).subscribe(busca =>{
      
      this.setFiltraMensagens();  
    })
    
    this.mensagemPrivider.getMensagens(this.id).subscribe(
     
      (data)=>{
        this.listMensagens = data;
        this.array = this.listMensagens;
        console.log(this.array)
      }, error =>{
        console.log(error);
      }
    )
  
  }

  

  detailsMessage(mensagem){
    
    this.navCtrl.push(MensagemPage.name,{'mensagem': mensagem});
  }

  get(){
    this.listMensagens = new Array();
    this.id = this.navParams.get('id');
   
  }
  
    setFiltraMensagens(){
       this.array = this.filtro(this.termo);
       console.log(this.array);
      
       console.log(this.listMensagens)
    }
   
   filtro(busca){
       return this.listMensagens.filter((mensagem)=>{
       return mensagem.toLowerCase().indexOf(busca.toLowerCase()) > -1;
       })
   }
}
