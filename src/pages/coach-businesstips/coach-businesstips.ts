import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the CoachBusinesstipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-coach-businesstips",
  templateUrl: "coach-businesstips.html",
})
export class CoachBusinesstipsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachBusinesstipsPage");
  }
}
