import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MensagemPage } from '../mensagem/mensagem';
import { MensagemProvider } from '../../providers/mensagem/mensagem';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime'

@IonicPage()
@Component({
    selector: 'page-lista-mensagem',
    templateUrl: 'lista-mensagem.html',
})

export class ListaMensagemPage {
    private listMensagens: any;
    private id: number;
    private load;

    public array: Array<any>;
    public termo: string = '';
    public controleBusca: FormControl;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private mensagemProvider: MensagemProvider,
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

        this.mensagemProvider.getMensagens(this.id).subscribe((res: any) => {

            if (res.erro) {
                this.closeLoading();
                this.alert(res.erro.codigo, res.erro.mensagem)
            } else {
                this.listMensagens = res;
                this.array = this.listMensagens;
                this.closeLoading();


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
