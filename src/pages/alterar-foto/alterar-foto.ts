import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { AuthProvider } from '../../providers/auth/auth';


 @IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  photo: string = '';
  imagem;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public authProvider: AuthProvider
    ) {
       this.authProvider.getFoto().then((data)=> {this.photo = data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarFotoPage');
   
  }

  takePicture() {
    this.photo = '';
 
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 300,
      targetHeight:300,
      saveToPhotoAlbum: true
      
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
        this.authProvider.setFoto(this.photo);
        
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  getImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true,
      allowEdit: false
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
        this.authProvider.setFoto(this.photo); 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }
  

  

}
