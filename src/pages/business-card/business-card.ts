import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController } from "ionic-angular";
import { SocialSharing } from "@ionic-native/social-sharing";
import html2canvas from "html2canvas";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { StorageProvider } from "../../providers/storage/storage";
import { CameraOptions, Camera } from "@ionic-native/camera";
import firebase from "firebase";

/**
 * Generated class for the BusinessCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-business-card",
  templateUrl: "business-card.html",
})
export class BusinessCardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    private social: SocialSharing,
    private translateConfigService: TranslateConfigService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private sp: StorageProvider,
    private camera: Camera,
  ) {}

  userdata;

  ionViewWillLoad() {
    console.log("ionViewWillLoad BusinessCardPage");
    this.userdata = this.navParams.get("data");
    console.log(this.userdata);
  }

  goBack() {
    this.view.dismiss();
  }

  share() {
    html2canvas(document.querySelector("#card"), { useCORS: true }).then(canvas => {
      const dataUrl = canvas.toDataURL();
      this.social
        .share(
          "This is my business card. Please feel free to contact us for any enquiries\nCreated by OpenPOS",
          "",
          dataUrl,
          "facebook.com/openfinanceapp",
        )
        .then(response => console.log(response))
        .catch(e => console.log(e));
    });
  }

  editRecTop() {
    const message = this.translateConfigService.getTranslatedMessage("Cancel");
    const message1 = this.translateConfigService.getTranslatedMessage("Save");
    const message2 = this.translateConfigService.getTranslatedMessage("Edit Receipt Details");
    const message3 = this.translateConfigService.getTranslatedMessage("Enter Information");

    const message4 = this.translateConfigService.getTranslatedMessage("Add Logo");
    const message5 = this.translateConfigService.getTranslatedMessage("Remove Logo");

    this.alertCtrl
      .create({
        //@ts-ignore
        title: message2.value,
        inputs: [
          //@ts-ignore
          { name: "Line1", placeholder: message3.value, value: this.userdata.business_name },
          //@ts-ignore
          { name: "Line4", placeholder: message3.value, value: this.userdata.ph_no },
          //@ts-ignore
          { name: "Line3", placeholder: message3.value, value: this.userdata.email },
          //@ts-ignore
          { name: "Line2", placeholder: message3.value, value: this.userdata.business_address },
        ],
        buttons: [
          //@ts-ignore
          { text: message.value, role: "cancel" },
          {
            //@ts-ignore
            text: message1.value,
            handler: data => {
              this.userdata.business_name = data.Line1;
              this.userdata.business_address = data.Line2;
              this.userdata.email = data.Line3;
              this.userdata.ph_no = data.Line4;
              this.sp.setUserDat(this.userdata);
            },
          },
          {
            //@ts-ignore
            text: message4.value,
            handler: data => {
              this.launchCamera().then(() => {
                this.upload_new();
              });
            },
          },
          {
            //@ts-ignore
            text: message5.value,
            handler: data => {
              this.toastCtrl.create({ message: "Please wait- removing...", duration: 2000 }).present();
              this.userdata.logo_url = "";
              this.sp.setUserDat(this.userdata).then(() => {
                this.toastCtrl.create({ message: "Removed!", duration: 2000 }).present();
              });
            },
          },
        ],
      })
      .present();
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
          this.file = "data:image/png;base64," + pic;
          // console.log(base64Image)
          resolve();
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  file: any;

  upload_new() {
    //LET REF be tied to a particular product- we save the url in the products db
    const ref = firebase
      .storage()
      .ref()
      .child("prodImages/" + this.userdata.id + "logo")
      .putString(this.file.split(",")[1], "base64")
      .then(snap => {
        snap.ref.getDownloadURL().then(url => {
          console.log("Uploaded!");
          // do something with url here
          this.userdata.logo_url = url;
          this.toastCtrl.create({ message: "Please wait- saving...", duration: 2000 }).present();
          this.sp.setUserDat(this.userdata).then(() => {
            this.toastCtrl.create({ message: "Saved!", duration: 2000 }).present();
          });
          // this.temp = url;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
