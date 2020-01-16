import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { CoachHomePage } from "../coach-home/coach-home";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-help",
  templateUrl: "help.html",
})
export class HelpPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController,
    private dom: DomSanitizer) {
    this.data = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HelpPage");
  }

  close() {
    this.view.dismiss();
  }

  navigate() {
    this.navCtrl.push(CoachHomePage);
  }

  secureLink(val: string){
    return this.dom.bypassSecurityTrustResourceUrl(val);
  }
}
