import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import html2canvas from 'html2canvas';

/**
 * Generated class for the BusinessCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-card',
  templateUrl: 'business-card.html',
})
export class BusinessCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController, private social: SocialSharing) {
  }

  userData;

  ionViewWillLoad() {
    console.log('ionViewWillLoad BusinessCardPage');
    this.userData = this.navParams.get("data");
  }

  goBack(){
    this.view.dismiss();
  }

  share(){
    html2canvas(document.querySelector("#card"), {useCORS: true}).then(canvas=>{
      const dataUrl = canvas.toDataURL();
      this.social.share("This is my business card. Please feel free to contact us for any enquiries\nCreated by OpenPOS","", dataUrl, "facebook.com/openfinanceapp")
        .then(response=>console.log(response))
        .catch(e=>console.log(e));
    })
  }
}
