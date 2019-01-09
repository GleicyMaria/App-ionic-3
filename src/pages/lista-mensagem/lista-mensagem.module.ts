import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMensagemPage } from './lista-mensagem';

@NgModule({
  declarations: [
    ListaMensagemPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMensagemPage),
  ],
})
export class ListaMensagemPageModule {}
