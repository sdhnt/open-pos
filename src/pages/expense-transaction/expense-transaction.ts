import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the ExpenseTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-expense-transaction",
  templateUrl: "expense-transaction.html",
})
export class ExpenseTransactionPage {
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpenseTransactionPage");
  }
}
