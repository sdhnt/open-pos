import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ModalController } from "ionic-angular";
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
    private modal: ModalController,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachHomePage");
  }

  contactpg() {
    this.navCtrl.push(ContactUsPage);
  }

  help() {
    const passedData = {
      //youtube link, required text
      page: "Transaction Page",
    };
    const helpModal = this.modal.create("HelpPage", { data: passedData });
    helpModal.present();
  }
}
