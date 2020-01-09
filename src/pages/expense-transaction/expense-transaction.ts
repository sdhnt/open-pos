import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Tabs } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { ExpensesHomePage } from "../expenses-home/expenses-home";
import { ExpenseGeneralPage } from "../expense-general/expense-general";

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
  @ViewChild("myTabs") tabRef: Tabs;

  ViewList = ExpensesHomePage;
  AddProd = ExpenseGeneralPage;

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpenseTransactionPage");
  }
}
