import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, App } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

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
  text: any;
  video_set: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private dom: DomSanitizer,
    private app: App,
    private sp: StorageProvider,
    private translateConfigService: TranslateConfigService,
  ) {
    //this.data = this.navParams.get("data");
    this.getCoach();
  }

  getCoach() {
    //console.log(this.listCat + " and "+this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp
        .getCoach()
        .then(val => {
          this.data = JSON.parse(val);
          //console.log("Addprodpg: "+this.listCat)
          //this.getCategories();
          console.log(this.data);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  openVidVal = -1;

  openVid(i: number) {
    if (i == this.openVidVal) {
      this.openVidVal = -1;
    } else {
      this.openVidVal = i;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HelpPage");
  }

  close() {
    this.view.dismiss();
  }

  // navigate() {
  //   //this.navCtrl.push(CoachHomePage);
  //   this.view.dismiss();
  //   this.app.getRootNav().setRoot(CoachHomePage);
  // }

  secureLink(val: string) {
    return this.dom.bypassSecurityTrustResourceUrl(val);
  }
}
