import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

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
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachGoalsPage");
  }
}
