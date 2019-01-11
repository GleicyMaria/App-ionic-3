import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPostPage } from './lista-post';


@NgModule({
  declarations: [
    ListaPostPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ListaPostPage),
    
  ],
})
export class ListaPostPageModule {}
