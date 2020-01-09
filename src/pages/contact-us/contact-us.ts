import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import firebase from "firebase";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-contact-us",
  templateUrl: "contact-us.html",
})
export class ContactUsPage {
  email = "Loading...";
  phone = "Loading...";
  chatbot = "";

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
  ) {
    this.getInfo();
  }

  getInfo() {
    firebase
      .firestore()
      .collection("contact-us")
      .get()
      .then(doc => {
        this.email = doc.docs[0].data().email;
        this.phone = doc.docs[0].data().phone;
        this.chatbot = doc.docs[0].data().chatbot;
      });
  }

  navFB() {
    window.open(this.chatbot, "_system", "location=no");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactUsPage");
  }
}
