import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  email: String = "";
  phone: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getInfo();
  }

  getInfo(){
    firebase.firestore().collection("contact-us").get()
    .then((doc) => {
      this.email = doc.docs[0].data().email;
      this.phone = doc.docs[0].data().phone;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');

    
  }

}