import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Tabs,
  AlertController,
  ToastController,
  Events,
  ModalController,
} from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { ExpensesHomePage } from "../expenses-home/expenses-home";
import { ExpenseGeneralPage } from "../expense-general/expense-general";
import { StorageProvider } from "../../providers/storage/storage";
import { CoachHomePage } from "../coach-home/coach-home";

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

  userdata: any = {
    business_address: "",

    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "en",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: Events,
    private modal: ModalController,
  ) {
    this.events.subscribe("cbUpdate:created", async data => {
      await this.getUserData();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpenseTransactionPage");
    if (this.navParams.get("data") == "ViewExp") {
      console.log("Yo000");
      //change tab
      this.tabRef.select(1);
    }
  }

  uploadbtn() {
    this.sp.backupStorage();
    const message = this.translateConfigService.getTranslatedMessage("Online backup ready");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      })
      .present();
  }

  async cashbtn() {
    await this.getUserData();
    const message = this.translateConfigService.getTranslatedMessage("Balance");
    const message1 = this.translateConfigService.getTranslatedMessage("Edit");
    const message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
    const message3 = this.translateConfigService.getTranslatedMessage("Update");
    const message4 = this.translateConfigService.getTranslatedMessage("Cancel");
    const message5 = this.translateConfigService.getTranslatedMessage("OK");

    this.alertCtrl
      .create({
        //@ts-ignore
        message: message.value + ": " + this.userdata.cash_balance,

        buttons: [
          {
            //@ts-ignore
            text: message1.value,
            handler: data => {
              this.alertCtrl
                .create({
                  inputs: [
                    //@ts-ignore
                    { name: "cb", placeholder: message2.value },
                  ],
                  buttons: [
                    {
                      //@ts-ignore
                      text: message4.value,
                      role: "cancel",
                    },
                    {
                      //@ts-ignore
                      text: message3.value,
                      handler: data1 => {
                        if (data1.cb != null && data1.cb != "" && data1.cb != undefined) {
                          //console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                  ],
                })
                .present();
            },
          }, // end Edit Button
          {
            //translate these buttons
            //@ts-ignore
            text: message5.value,
            role: "Cancel",
          }, // end OK Button
        ], //end button
      })
      .present();
  }

  async getUserData() {
    return new Promise((resolve, reject) => {
      this.sp.storageReady().then(() => {
        this.sp
          .getUserDat()
          .then(val => {
            this.userdata = JSON.parse(val);
            console.log(this.userdata);
            this.setUsrLang();
            resolve();
          })
          .catch(err => {
            alert("Error: " + err);
          });
      });
    });
  }

  setUsrLang() {
    this.translateConfigService.setLanguage(this.userdata.language);
    console.log(this.userdata.language);
  }

  help() {
    const passedData = {
      //youtube link, required text
      page: "Expenses Page",
    };
    const helpModal = this.modal.create("HelpPage", { data: passedData });
    helpModal.present();
  }
}
