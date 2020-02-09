import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import firebase from "firebase";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";

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
    private callNumber: CallNumber,
    private emailComposer: EmailComposer
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

  call(){
    this.callNumber.callNumber(this.phone, false)
      .then(res => {
        console.log("Successful", res);
      })
      .catch(err => console.log("Error with dialing",err));
  }

  sendMail(){
    let emailSettings = {
      to: this.email,
      subject: "OPEN Help", //edit as and when needed
      body: "Hello! I need your help!",
      isHTML: true,
    };
    // this.emailComposer.requestPermission()
    //   .then((response:boolean)=>{
    //     if(response){

    //     }
    //   });
    this.emailComposer.open(emailSettings)
    .then(res=>console.log("Successful",res))
    .catch(err=>console.log("Error on email", err));
  }
}
