import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {  AuthProvider } from '../../providers/auth/auth';



 @IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  private id = this.navParams.get('id');
  public photo: any;
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera:Camera,
     private auth:AuthProvider,) {
       this.getFoto();
     }

  

  get(type){
    
   const options:CameraOptions ={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? 
      this.camera.PictureSourceType.CAMERA:
      this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      saveToPhotoAlbum:true,
      correctOrientation:true,
      allowEdit:true,
      targetHeight:400,
      targetWidth:400,

     };
    this.camera.getPicture(options).then((imageData)=>{
      this.photo = 'data:image/jpeg;base64,' + imageData;
         this.fotoLogin();
              },(erro)=>{
      console.log(erro)
    });
    
    
  }

 fotoLogin(){
  this.auth.set(String(this.id),this.photo);
  console.log(this.auth.set(String(this.id),this.photo))
  console.log(this.photo)
  
  
   }


   getFoto() {
    this.auth.get(this.id).then(res => {
      this.photo = res;
      console.log(res);
      console.log("set foto");
      console.log(this.photo);

    })

  }
 
  

}
