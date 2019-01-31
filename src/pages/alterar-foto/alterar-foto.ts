import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Session } from '../../providers/session/session';



 @IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  
  id = this.navParams.get('id');
  photo: any;
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera:Camera,
     private session:Session,) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarFotoPage');
   
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
      targetHeight:500,
      targetWidth:500,

     };
    this.camera.getPicture(options).then((imageData)=>{
      this.photo = 'data:image/jpeg;base64,' + imageData;
         this.fotoLogin();
              },(erro)=>{
      console.log(erro)
    });
    
    
  }

 fotoLogin(){
  this.session.set(String(this.id),this.photo);
  console.log(this.session.set(String(this.id),this.photo))
  console.log(this.photo)
  
  
   }
  

}
