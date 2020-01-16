import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Tabs,
  ToastController,
  Events,
  AlertController,
  ModalController,
  Modal,
} from "ionic-angular";
import firebase from "firebase";
import { AddProductPage } from "../addproduct/addproduct";
import { AllTransactionPage } from "../all-transaction/all-transaction";
import { IncomeTransactionPage } from "../income-transaction/income-transaction";
import { ExpenseTransactionPage } from "../expense-transaction/expense-transaction";
import { TransactionProductPage } from "../transaction-product/transaction-product";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { LoginPage } from "../login/login";
import { ContactUsPage } from "../contact-us/contact-us";

/**
 * Generated class for the TransactionHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-transaction-home",
  templateUrl: "transaction-home.html",
})
export class TransactionHomePage {
  @ViewChild("myTabs") tabRef: Tabs;

  AllTransactions = AllTransactionPage;
  IncomeTransactions = IncomeTransactionPage;
  //ExpenseTransactions = ExpenseTransactionPage;
  ExpenseTransactions = TransactionProductPage;

  //Calculator = CalculatorPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    public toastCtrl: ToastController,
    public sp: StorageProvider,
    public events: Events,
    public alertCtrl: AlertController,
    private modal: ModalController,
  ) {
    //this.getUserData();
    this.tutorial();
    this.events.subscribe("newUser", data => {
      //this.events.unsubscribe("newUser");
      this.tutorial();
    });

    this.events.subscribe("cbUpdate:created", async data => {
      await this.getUserData();
    });
  }

  async ionViewDidEnter() {
    console.log("ionViewDidLoad TransactionHomePage");
    // document.addEventListener("backbutton",function(e) {
    //   console.log("disable back button")
    // }, false);

    this.delay(3000).then(() => {
      this.getUserData();
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }
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

  openCalc() {
    //this.navCtrl.push(CalculatorPage);
    this.tabRef.select(3);
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
                      text: message3.value,
                      handler: data1 => {
                        if (data1.cb != null) {
                          //console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                    {
                      //@ts-ignore
                      text: message4.value,
                      role: "cancel",
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

  setUsrLang() {
    this.translateConfigService.setLanguage(this.userdata.language);
    console.log(this.userdata.language);
  }

  tutorial() {
    const passedData = {
      //youtube link, required text
      //add a boolean and ngIf in case tutorial page is different from help page
      page: "Tutorial"
    };
    const tutorialModal: Modal = this.modal.create("HelpPage", { data: passedData });
    tutorialModal.present();
    tutorialModal.onDidDismiss(()=>{
      const helpAlert = this.alertCtrl.create({
        title: "Help Button",
        subTitle: "For any queries about a page, click the ? icon in the top right for more information",
        message: "For further queries, you can reach us through the \"Contact Us\" page",
        buttons: [
          {
            text: "Contact Us",
            handler: ()=>{
              this.navCtrl.push(ContactUsPage);
            }
          },
          {
            text: "Okay",
            role: "cancel"
          }
        ]
      });
      helpAlert.present();
    })
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
