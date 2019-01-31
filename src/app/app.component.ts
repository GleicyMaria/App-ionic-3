import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any='';
  result;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage:Storage, private authProvier: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.show();
      splashScreen.hide();
      this.retornaStorage();    
    });
  }

  retornaStorage(){
      
      this.authProvier.getCheckbox().then((data)=> {
        if(data){
          this.rootPage = HomePage;
        } else{
          this.rootPage = LoginPage;        
        } 
      });
   
  }
  
}

