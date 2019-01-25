import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
  private id: number;
  load;

  public array: Array<any>;
  public termo: string = '';
  public controleBusca: FormControl;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private mensagemPrivider: MensagemProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.controleBusca = new FormControl;
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagemPage');

    this.controleBusca.valueChanges.debounceTime(600).subscribe(busca => {

      this.setFiltraMensagens();
    })
    this.loading();
    this.mensagemPrivider.getMensagens(this.id).subscribe((data) => {
      
      if (!data.erro) {
        this.listMensagens = data;
        this.array = this.listMensagens;
        this.closeLoading();
      } else {
        this.closeLoading();
        this.alert(data.erro.codigo, data.erro.mensagem)

      }

      console.log(this.array)
    }, erro => {
      this.closeLoading();
      this.showAlert(erro.message);
    }
    )

  }


  detailsMessage(mensagem) {

    this.navCtrl.push(MensagemPage.name, { 'mensagem': mensagem });
  }

  get() {
    this.listMensagens = new Array();
    this.id = this.navParams.get('id');

  }

  setFiltraMensagens() {
    this.array = this.filtro(this.termo);
  }

  filtro(busca) {

    return this.listMensagens.filter((mensagem) => {
      return mensagem.toLowerCase().indexOf(busca.toLowerCase()) > -1;
    })
  }


  alert(codigo, mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Erro na Lista de Mensagem',
      subTitle: 'Erro ' + codigo + ' ' + mensagem,
      buttons: ['OK']
    });
    alert.present();

  }

  showAlert(mensagem) {
    const alert = this.alertCtrl.create({
      title: 'Erro na Lista de Mensagem',
      subTitle: 'Erro ' + mensagem,
      buttons: ['OK']
    });
    alert.present();

  }

  loading() {


    this.load = this.loadingCtrl.create({
      content: "Carregando Mensagens..."
    });
    this.load.present();
  }
  closeLoading() {
    this.load.dismiss();
  }

}
