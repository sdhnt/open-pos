import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events, ToastController, ViewController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import firebase from "firebase";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { ProductListPage } from "../product-list/product-list";
import { DashboardPage } from "../dashboard/dashboard";
import { GeolocationService } from "../../providers/geolocation/geolocation.service";

/**
 * Generated class for the ExpenseGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-expense-general",
  templateUrl: "expense-general.html",
})
export class ExpenseGeneralPage {
  expType: string[] = ["Transportation", "Salaries", "Utilities", "Depreciation", "Miscellaneous"];
  listOfExpenses: Expense[];
  geolocation: {};
  currtime = new Date();
  userdata: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    public sp: StorageProvider,
    public events: Events,
    public toastCtrl: ToastController,
    private gps: GeolocationService,
    private view: ViewController,
  ) {
    this.getUserData();
    this.listOfExpenses = [];
    this.listOfExpenses.push(new Expense());
    this.gps
      .getCoordinates()
      .then(coordinates => {
        this.geolocation = coordinates;
      })
      .catch(error => {
        console.log(error);
      });
  }

  expType1 = [];
  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpenseGeneralPage");
    this.expType.forEach(element => {
      console.log(element);
      //@ts-ignore
      console.log(this.translateConfigService.getTranslatedMessage(element).value);
      //@ts-ignore
      this.expType1.push(this.translateConfigService.getTranslatedMessage(element).value);
    });
  }

  addExpense() {
    this.listOfExpenses.push(new Expense());
  }

  removeExpense(index: number) {
    this.listOfExpenses.splice(index, 1);
  }

  async updateExpenses() {
    const itemslist = [];
    let totalsum = 0;
    this.listOfExpenses.forEach(element => {
      if (!element.isValid()) {
        element.flag = false;
        return;
      } else {
        element.flag = true;
        totalsum -= element.amount;
        const prodOfExpense = {
          cat: element.type,
          code: "EXPENSE",
          discount: 0,
          name: element.name,
          price: element.amount * -1,
          qty: 1,
          stock_qty: 0,
        };
        itemslist.push(prodOfExpense);
      }
    });
    console.log(totalsum);
    console.log(itemslist);
    const dataexp = {
      itemslist: itemslist,
      totalsum: totalsum,
      prodidlist: [],
      pnllist: [],
      datetime: this.currtime,
      taxrate: 0,
      discountlist: [],
      discount: 0,
      totaldisc: totalsum,
      totalatax: totalsum,
      geolocation: this.geolocation,
    };
    console.log(dataexp);
    this.sp.storageReady().then(() => {
      this.sp.addTransactions(dataexp);
      this.updateCb(Math.abs(totalsum)).then(() => {
        this.events.publish("cbUpdate:created", 0);
      });
      const message = this.translateConfigService.getTranslatedMessage("Finish");
      const toast = this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 3000,
      });

      toast.present();
      this.currtime = new Date();
      this.listOfExpenses = [];
      this.listOfExpenses.push(new Expense());
      this.sp.backupStorage();
      this.view.dismiss();
    });
  }

  close(){
    this.view.dismiss();
  }

  async updateCb(negtransacsum) {
    this.getUserData();
    this.userdata.cash_balance = (parseInt(this.userdata.cash_balance) - parseInt(negtransacsum)).toString();
    this.sp.setUserDat(this.userdata);
  }

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }
}

class Expense {
  public name: string;
  public type: string;
  public amount: number;
  //public notes: String;
  public flag: boolean;

  constructor() {
    this.flag = true;
  }

  isValid() {
    if (this.name == undefined || this.type == undefined || this.amount == undefined) return false;
    return true;
  }
}
