import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPostPage } from './lista-post';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ListaPostPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ListaPostPage),
    ComponentsModule
  ],
})
export class ListaPostPageModule {}
