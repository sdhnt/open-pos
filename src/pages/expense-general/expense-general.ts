import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  ToastController,
  ViewController,
  ModalController,
} from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import firebase from "firebase";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { GeolocationService } from "../../providers/geolocation/geolocation.service";
import { ContactsPage } from "../contacts/contacts";

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
    private modal: ModalController,
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

  updateExpenses() {
    const itemslist = [];
    let totalsum = 0;
    let b = true;
    this.listOfExpenses.forEach(element => {
      if (!element.isValid()) {
        console.log("HERE!")
        element.flag = false;
        b = false;
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
        if (element.contact != "") {
          const transaction = {
            amount: 1*element.contactAmount,
            date: new Date(),
            reminderDate: "",
            discount: 0,
            note: "",
            img: "",
          };
          this.sp.updateContactTransaction(element.contact, [transaction]);
        }
        itemslist.push(prodOfExpense);
      }
    });
    if(b) this.asyncActivity(totalsum, itemslist);
  }

  async asyncActivity(totalsum, itemslist){
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
      this.view.dismiss();
    });
  }

  close() {
    this.view.dismiss();
  }

  addContact(exp: Expense) {
    const m = this.modal.create(ContactsPage, { data: true });
    m.present();
    m.onDidDismiss((contactName: string) => {
      if (contactName == null || contactName == undefined) {
        return;
      }
      exp.contact = contactName;
      exp.contactAmount = exp.amount;
    });
  }

  clearContact(exp: Expense) {
    exp.contact = "";
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
  public contact: string;
  public contactAmount: number;

  constructor() {
    this.flag = true;
    this.contact = "";
  }

  isValid() {
    if (this.name == undefined || this.type == undefined || !(this.amount>0)
      || !(this.contactAmount>0)) return false;
    return true;
  }
}
