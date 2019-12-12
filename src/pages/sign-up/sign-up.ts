import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, AlertController } from "ionic-angular";
import firebase from "firebase";
import { DashboardPage } from "../dashboard/dashboard";
import { AllTransactionPage } from "../all-transaction/all-transaction";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html",
})
export class SignUpPage {
  listOfBType: string[] = [];
  listOfCurrency: string[] = [];
  listOfLang: string[] = [];
  disabled=false;

  name = "";
  email = "";
  password = "";
  businessname = "";
  businessaddress = "";
  businesstype = "";
  phno = "";
  language = "";
  currency = "";
  cb: number;
  discount: number;
  taxrate: number;
  nextbtn = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public sp: StorageProvider,
    private translateConfigService: TranslateConfigService,
    public alertCtrl: AlertController,
  ) {
    this.nextbtn = 0;
    this.loadDropDowns();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignUpPage");
    this.nextbtn = 0;
  }

  nextPg() {
    this.nextbtn = 1;
  }
  prevPg() {
    this.nextbtn = 0;
  }

  loadDropDowns() {
    firebase
      .firestore()
      .collection("sign-up")
      .get()
      .then(doc => {
        doc.docs[0].data().businessType.forEach(b => {
          this.listOfBType.push(b);
        });
        doc.docs[0].data().currency.forEach(c => {
          this.listOfCurrency.push(c);
        });
        doc.docs[0].data().language.forEach(l => {
          this.listOfLang.push(l);
        });
      });
  }

  datet = new Date();

  signup() {
    this.disabled=true;
    const message = this.translateConfigService.getTranslatedMessage("Please wait while creating your profile ...");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 3000,
      })
      .present();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(data => {
        const newUser: firebase.User = data.user;
        newUser
          .updateProfile({
            displayName: this.name,
          })
          .then(res => {
            console.log("Profile Updated");
            console.log(this.datet);

            firebase
              .firestore()
              .collection("users")
              .add({
                // file_name: this.text,
                created: firebase.firestore.FieldValue.serverTimestamp(),
                owner: firebase.auth().currentUser.uid,
                owner_name: firebase.auth().currentUser.displayName,
                business_name: this.businessname,
                businesstype: this.businesstype,
                business_address: this.businessaddress,
                ph_no: this.phno,
                language: this.language,
                currency: this.currency,
                cash_balance: this.cb,
                discount: this.discount,
                taxrate: this.taxrate,
                categories: [{ name: "Example" }],
                products: [
                  {
                    cat: "Example",
                    code: "0000",
                    cost: "0",
                    name: "Example Product",
                    price: "0",
                    stock_qty: "0",
                    url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
                    wholesale_price: "0",
                  },
                ],

                transactions: [
                  {
                    datetime: new Date(this.datet).getTime(),
                    discount: 0,
                    discountlist: [],
                    itemslist: [
                      { cat: "Example", code: "0000", cost: "0", name: "Example Product", price: "0", stock_qty: "0" },
                    ],
                    pnllist: [],
                    prodidlist: [],
                    taxrate: 0,
                    totalatax: 0,
                    totaldisc: 0,
                    totalsum: 0,
                  },
                ],
              })
              .then(async doc => {
                console.log(doc);
                const title = this.translateConfigService.getTranslatedMessage("Account Created");
                const message = this.translateConfigService.getTranslatedMessage(
                  "Your account has been created successfully",
                );
                this.alertCtrl
                  .create({
                    // @ts-ignore
                    title: title.value,
                    // @ts-ignore
                    message: message.value,
                    buttons: [
                      {
                        text: "OK",
                        handler: () => {
                          //this.sp.clearMem();
                          this.sp.setMem();
                          this.navCtrl.setRoot(TransactionHomePage); //navigate to feeds page
                        }, //end handler
                      },
                    ], //end button
                  })
                  .present();
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
            this.toastCtrl
              .create({
                message: err.message,
                duration: 3000,
              })
              .present();
          });
      });
  }
  goBack() {
    this.navCtrl.pop();
  }
}
