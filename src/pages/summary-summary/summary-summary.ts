import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Tabs, Events, AlertController, ModalController } from "ionic-angular";
import { SummaryHomePage } from "../summary-home/summary-home";
import { SummaryAccountsPage } from "../summary-accounts/summary-accounts";
import { SummaryGraphsPage } from "../summary-graphs/summary-graphs";
import { CoachHomePage } from "../coach-home/coach-home";

/**
 * Generated class for the SummarySummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-summary-summary",
  templateUrl: "summary-summary.html",
})
export class SummarySummaryPage {
  @ViewChild("myTabs") tabRef: Tabs;

  //ViewList = ProductListPage;
  //AddProd = AddProductPage;
  SumChart = SummaryGraphsPage;
  SumAcc = SummaryAccountsPage;
  SumRec = SummaryHomePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public alertCtrl: AlertController,
    private modal: ModalController,
  ) {
    // this.events.subscribe("ViewRecs", (data)=> {
    //   (this.navCtrl.parent as Tabs).select(2);
    //   console.log("ViewRecs Event")
    // });
    if (this.navParams.get("item") == "ViewRecs") {
      console.log("Yo");
      //change tab
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SummarySummaryPage");
  }

  help() {
    const passedData = {
      //youtube link, required text
      page: "Business Summary Page",
    };
    const helpModal = this.modal.create("HelpPage", { data: passedData });
    helpModal.present();
  }
}
