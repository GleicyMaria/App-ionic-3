import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage'

import { MyApp } from './app.component';

import { PostProvider } from '../providers/post/post';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import { MensagemProvider } from '../providers/mensagem/mensagem';
import { UserProvider } from '../providers/user/user';
import { Session } from '../providers/session/session';
import { DatePipe } from '@angular/common';
import  localeptBr from '@angular/common/locales/pt';
import {registerLocaleData } from '@angular/common';

import { Camera } from '@ionic-native/camera';
registerLocaleData(localeptBr);
@NgModule({
  declarations: [
    MyApp,
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    HttpClientModule,
    LoginPageModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide:LOCALE_ID, useValue:'pt-BR'},
    PostProvider,
    MensagemProvider,
    UserProvider,
    Session,
    DatePipe,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
