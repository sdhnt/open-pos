import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController, AlertController, Platform, PopoverController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import html2canvas from 'html2canvas';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { StorageProvider } from '../services/storage/storage';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { Html2canvasService } from '../services/html2canvas.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.page.html',
  styleUrls: ['./business-card.page.scss'],
})
export class BusinessCardPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: PopoverController,
    private social: SocialSharing,
    private translateConfigService: TranslateConfigService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private sp: StorageProvider,
    private camera: Camera,
    private platform: Platform,
    // tslint:disable-next-line: no-shadowed-variable
    private html2canvas: Html2canvasService
  ) { }

  userdata;
  file: any;
  img;
  ngOnInit() {
    console.log('ionViewWillLoad BusinessCardPage');
    // this.userdata = this.navParams.get('data');
    console.log(this.userdata);
  }

  ionViewWillLoad() {
  }

  goBack() {
    this.view.dismiss();
  }

  share() {
    const div = document.getElementById('card');
    const options = { width: div.offsetWidth, height: div.offsetHeight  };
    domtoimage.toPng(div, options).then((dataUrl) => {
      console.log(dataUrl);
      this.social
        .share(
          'This is my business card. Please feel free to contact us for any enquiries\nCreated by OpenPOS',
          '',
          dataUrl,
          'facebook.com/openfinanceapp',
        )
        .then(response => console.log(response))
        .catch(e => console.log(e));
    });

    // const element = document.getElementById('html2canvas');
    // const targetElement = document.getElementById('card').cloneNode(true);
    // element.appendChild(targetElement);
    // this.html2canvas.html2canvas(element.firstChild).then((img) => {
    //   console.log('this is component line 70', img);
    //   this.img = img;
    //   element.firstChild.remove();
    //   this.social
    //     .share(
    //       'This is my business card. Please feel free to contact us for any enquiries\nCreated by OpenPOS',
    //       '',
    //       this.img,
    //       'facebook.com/openfinanceapp',
    //     ).then(response => console.log(response)).catch(e => console.log(e));
    // }).catch((res) => {
    //   console.log(res);
    // });
    // html2canvas(document.querySelector('#card'), { useCORS: true }).then(canvas => {
    //   const dataUrl = canvas.toDataURL();
    // });
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async editRecTop() {
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Save');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('Edit Receipt Details');
    const message3: Observable<any> = this.translateConfigService.getTranslatedMessage('Enter Information');

    const message4: Observable<any> = this.translateConfigService.getTranslatedMessage('Add Logo');
    const message5: Observable<any> = this.translateConfigService.getTranslatedMessage('Remove Logo');

    const alert = await this.alertCtrl
      .create({
        header: this.subscriber(message2),
        inputs: [
          { name: 'Line1', placeholder: this.subscriber(message3), value: this.userdata.business_name },
          { name: 'Line4', placeholder: this.subscriber(message3), value: this.userdata.ph_no },
          { name: 'Line3', placeholder: this.subscriber(message3), value: this.userdata.email },
          { name: 'Line2', placeholder: this.subscriber(message3), value: this.userdata.business_address },
        ],
        buttons: [
          { text: this.subscriber(message), role: 'cancel' },
          {
            text: this.subscriber(message1),
            handler: data => {
              this.userdata.business_name = data.Line1;
              this.userdata.business_address = data.Line2;
              this.userdata.email = data.Line3;
              this.userdata.ph_no = data.Line4;
              this.sp.setUserDat(this.userdata);
            },
          },
          {
            text: this.subscriber(message4),
            handler: data => {
              this.launchCamera().then(() => {
                this.upload_new();
              });
            },
          },
          {
            text: this.subscriber(message5),
            handler: async data => {
              const toast = await this.toastCtrl.create({ message: 'Please wait- removing...', duration: 2000 });
              toast.present();
              this.userdata.logo_url = '';
              this.sp.setUserDat(this.userdata).then(async () => {
                const to = await this.toastCtrl.create({ message: 'Removed!', duration: 2000 });
                to.present();
              });
            },
          },
        ],
      });
    alert.present();
  }

  launchCamera() {
    return new Promise((resolve, reject) => {
      const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        targetHeight: 256,
        targetWidth: 256,
        allowEdit: true,
      };
      this.camera
        .getPicture(options)
        .then(pic => {
          this.file = 'data:image/png;base64,' + pic;
          // console.log(base64Image)
          resolve();
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  upload_new() {
    // LET REF be tied to a particular product- we save the url in the products db
    const ref = firebase
      .storage()
      .ref()
      .child('prodImages/' + this.userdata.id + 'logo')
      .putString(this.file.split(',')[1], 'base64')
      .then(snap => {
        snap.ref.getDownloadURL().then(async url => {
          console.log('Uploaded!');
          // do something with url here
          this.userdata.logo_url = url;
          const toast = await this.toastCtrl.create({ message: 'Please wait- saving...', duration: 2000 });
          toast.present();
          this.sp.setUserDat(this.userdata).then(async () => {
            const to = await this.toastCtrl.create({ message: 'Saved!', duration: 2000 });
            to.present();
          });
          // this.temp = url;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
