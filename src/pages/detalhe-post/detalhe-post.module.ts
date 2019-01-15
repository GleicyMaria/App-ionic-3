import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePostPage } from './detalhe-post';

@NgModule({
  declarations: [
    DetalhePostPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePostPage),
  ],
})
export class DetalhePostPageModule { }
