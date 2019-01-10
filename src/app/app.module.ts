import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { DetalhePostPageModule } from '../pages/detalhe-post/detalhe-post.module';
import { ListaMensagemPageModule } from '../pages/lista-mensagem/lista-mensagem.module';
import { ListaPostPageModule } from '../pages/lista-post/lista-post.module';
import { MensagemPageModule } from '../pages/mensagem/mensagem.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    DetalhePostPageModule,
    ListaMensagemPageModule,
    ListaPostPageModule,
    MensagemPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
