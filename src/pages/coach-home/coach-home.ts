import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { CoachGoalsPage } from "../coach-goals/coach-goals";
import { CoachCoachPage } from "../coach-coach/coach-coach";
import { CoachBusinesstipsPage } from "../coach-businesstips/coach-businesstips";
import { ContactUsPageModule } from "../contact-us/contact-us.module";
import { ContactUsPage } from "../contact-us/contact-us";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the CoachHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-coach-home",
  templateUrl: "coach-home.html",
})
export class CoachHomePage {
  Goals = CoachGoalsPage;
  Coach = CoachCoachPage;
  Tips = CoachBusinesstipsPage;

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachHomePage");
  }

  contactpg() {
    this.navCtrl.push(ContactUsPage);
  }

  help(){
    const a = this.alertCtrl.create({
      title: "Help",
      message: "Welcome to Coach home page",
      buttons: [
        {
          text: "Show video",
          handler: () => {
            this.navCtrl.push(CoachHomePage);
          }
        },
        {
          text: "OK",
          role: "cancel"
        }
      ]
    });
    a.present();
  }
}
