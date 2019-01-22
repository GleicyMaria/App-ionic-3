import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
 import {Camera, CameraOptions} from '@ionic-native/camera'


 @IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  url: any 
  photo: any;
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera:Camera,
     
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarFotoPage');
   
  }
  get(type){
    
   const options:CameraOptions ={
      quality:100,
      destinationType:this.camera.DestinationType.NATIVE_URI,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? 
      this.camera.PictureSourceType.CAMERA:
      this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      
     };
    this.camera.getPicture(options).then((imageData)=>{
      this.photo = 'data:image/jpeg;base64,' + imageData;
      console.log("Aqui")
         },(erro)=>{
      console.log(erro)
    });
  }

  

}
