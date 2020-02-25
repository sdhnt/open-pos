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
} from "ionic-angular";
import firebase from "firebase";
import { AddProductPage } from "../addproduct/addproduct";
import { AllTransactionPage } from "../all-transaction/all-transaction";
import { IncomeTransactionPage } from "../income-transaction/income-transaction";
import { TransactionProductPage } from "../transaction-product/transaction-product";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { LoginPage } from "../login/login";
import { ContactUsPage } from "../contact-us/contact-us";
import { SummaryGraphsPage } from "../summary-graphs/summary-graphs";
import { AppVersion } from "@ionic-native/app-version";
import axios from "axios";
import { Market } from "@ionic-native/market";
import { ContactsPage } from "../contacts/contacts";
import { hasInternet } from "../../utilities/hasInternet";

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
  Contacts = ContactsPage;

  Accounts = SummaryGraphsPage;

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
    private appVersion: AppVersion,
    private market: Market,
  ) {
    this.userdata.language = this.translateConfigService.getCurrentLanguage();
    //this.getUserData();
    //this.tutorial();
    if (this.navParams.get("data") == "newUser") {
      this.delay(500).then(() => {
        this.tutorial();
        this.getUserData();
      });
    }
    this.events.subscribe("newUser", data => {
      //this.events.unsubscribe("newUser");
      this.delay(500).then(() => {
        this.tutorial();
        this.getUserData();
      });
    });

    this.events.subscribe("cbUpdate:created", async data => {
      await this.getUserData();
    });
    const mg1 = this.translateConfigService.getTranslatedMessage("Update available");
    const mg2 = this.translateConfigService.getTranslatedMessage("Update the app");
    const mg3 = this.translateConfigService.getTranslatedMessage("Not Now");
    const mg4 = this.translateConfigService.getTranslatedMessage("Update now");
    const url = "https://us-central1-open-fintech.cloudfunctions.net/data/versionNumber";

    hasInternet().then(isThereInternet => {
      if (isThereInternet)
        axios
          .get(url)
          .then(response => {
            const newestVersion = response.data.versionNumber;
            this.appVersion
              .getVersionNumber()
              .then(version => {
                console.log(version);
                if (newestVersion > version) {
                  this.alertCtrl
                    .create({
                      //@ts-ignore
                      title: mg1.value,
                      //@ts-ignore
                      subTitle: mg2.value,
                      buttons: [
                        {
                          //@ts-ignore
                          text: mg3.value,
                          role: "cancel",
                        },
                        {
                          //@ts-ignore
                          text: mg4.value,
                          handler: () => {
                            //window.open("https://play.google.com/store/apps/details?id=com.openfintech.openpos", "_system", "location=yes");
                            market
                              .open("com.openfintech.openpos")
                              .then(() => {
                                console.log("Opened Google play");
                              })
                              .catch(error => {
                                console.log(error);
                              });
                          },
                        },
                      ],
                    })
                    .present();
                } else {
                  console.log("Version same");
                }
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
    });
  }

  async ionViewDidEnter() {
    console.log("ionViewDidLoad TransactionHomePage");
    if (
      this.navParams.get("lang") != this.userdata.language &&
      this.navParams.get("lang") != null &&
      this.navParams.get("lang") != undefined
    ) {
      this.userdata.language = this.navParams.get("lang");
    }
    this.delay(500).then(() => {
      this.getUserData();
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }
  userdata: any = {
    autosave: 0,
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: this.translateConfigService.getCurrentLanguage(),
    logo_url: "",
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
          .then(async val => {
            if (val) {
              this.userdata = JSON.parse(val);
              console.log(this.userdata);
              this.setUsrLang();
              resolve();
            } else {
              await this.getUserData();
            }
          })
          .catch(err => {
            alert("Error: " + err);
          });
      });
    });
  }

  // openCalc() {
  //   //this.navCtrl.push(CalculatorPage);
  //   this.tabRef.select(3);
  // }

  uploadbtn() {
    this.sp
      .backupStorage()
      .then()
      .catch();
    const message = this.translateConfigService.getTranslatedMessage("Online backup ready");

    const message1 = this.translateConfigService.getTranslatedMessage("Backup Online");
    const message2 = this.translateConfigService.getTranslatedMessage("backupdescrip");

    this.alertCtrl
      .create({
        //@ts-ignore
        title: message1.value,
        //@ts-ignore
        subTitle: message2.value,
        buttons: [{ text: "OK", role: "cancel" }],
      })
      .present();
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
    const ms = this.translateConfigService.getTranslatedMessage("Cash Balance");
    const ms1 = this.translateConfigService.getTranslatedMessage("cashbalancedescrip");

    this.alertCtrl
      .create({
        //@ts-ignore
        title: ms.value,
        //@ts-ignore
        subTitle: ms1.value,
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

  setUsrLang() {
    this.translateConfigService.setLanguage(this.userdata.language);
    console.log(this.userdata.language);
  }

  tutorial() {
    const msg = this.translateConfigService.getTranslatedMessage("Create New Sales");
    const passedData = {
      //youtube link, required text
      //@ts-ignore
      page: msg.value,
    };
    const msg1 = this.translateConfigService.getTranslatedMessage("Help Button");
    const msg2 = this.translateConfigService.getTranslatedMessage(
      "For any queries about a page, click the ? icon in the top right for more information",
    );
    const msg3 = this.translateConfigService.getTranslatedMessage(
      "For further queries, you can reach us through the Contact Us page",
    );
    const msg4 = this.translateConfigService.getTranslatedMessage("Contact Us");
    const msg5 = this.translateConfigService.getTranslatedMessage("Okay");

    const helpAlert = this.alertCtrl.create({
      //@ts-ignore
      title: msg1.value,
      //@ts-ignore
      subTitle: msg2.value,
      //@ts-ignore
      message: msg3.value,
      buttons: [
        {
          //@ts-ignore
          text: msg4.value,
          handler: () => {
            this.navCtrl.push(ContactUsPage);
          },
        },
        {
          //@ts-ignore
          text: msg5.value,
          role: "cancel",
        },
      ],
    });
    helpAlert.present();
  }

  help() {
    // const msg = this.translateConfigService.getTranslatedMessage("Create New Sales");
    // const temptxt = [];
    // let tempvid = [];

    // firebase
    //   .firestore()
    //   .collection("tutorial")
    //   .get()
    //   .then(doc => {
    //     //console.log(doc)
    //     doc.docs.forEach(element => {
    //       console.log(element);
    //       if (element.id == this.userdata.language) {
    //         element.data().text.forEach(element1 => {
    //           if (element1.page == "Sale") {
    //             temptxt.push(element1);
    //           }
    //         });

    //         element.data().video.forEach(element2 => {
    //           if (element2.page == "Sale") {
    //             tempvid.push(element2);
    //           }
    //         });
    //         tempvid = element.data().video;
    //       }
    //     });
    //   });

    // const passedData = {
    //   //youtube link, required text
    //   //@ts-ignore
    //   page: msg.value,
    //   text: temptxt,
    //   video: tempvid,
    // };
    const helpModal = this.modal.create("HelpPage");
    helpModal.present();
  }

  contactpg() {
    this.navCtrl.push(ContactUsPage);
  }
}
