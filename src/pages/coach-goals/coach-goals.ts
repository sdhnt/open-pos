import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import firebase from "firebase";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the CoachGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-coach-goals",
  templateUrl: "coach-goals.html",
})
export class CoachGoalsPage {
  videoLinks;
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    private dom: DomSanitizer,
  ) {
    firebase
      .firestore()
      .collection("contact-us")
      .get()
      .then(doc => {
        this.videoLinks = doc.docs[1].data().video;
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachGoalsPage");
  }

  linkValue(val: string){
    return this.dom.bypassSecurityTrustResourceUrl(val);
  }
}
