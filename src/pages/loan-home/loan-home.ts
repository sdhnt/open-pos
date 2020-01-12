import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ToastController, Events } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { StorageProvider } from "../../providers/storage/storage";
import { GettersetterProvider } from "../../providers/gettersetter/gettersetter";

/**
 * Generated class for the LoanHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-loan-home",
  templateUrl: "loan-home.html",
})
export class LoanHomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    public getset: GettersetterProvider,
    private toastCtrl: ToastController,
    public events: Events,
  ) {
    this.getUserData();

    this.events.subscribe("cbUpdate:created", data => {
      this.getUserData();
    });
   
  }

  userdata: any = {
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };
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

  ionViewDidLoad() {
    this.showloan=0;
    this.loanvar=[];
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

  showloan=0;
  loanvar: any=[];
  showloanform(){
    this.showloan=1;
  }

  loan1;
  loan2;
  loan3;
  loan4;
  loan5;
  loan6;
  loanq1="1. How interested are you in getting a loan? ";
  loanq2="2. When would you like to get this loan?  ";
  loanq3="3. How much would you like to borrow? ";
  loanq4="4. How long will you need to pay it back?  ";
  loanq5="5. What do you need  to loan for? ";
  loanq6="6. What's the best way to contact you about the loan?";  
  submitloanform(){
      this.loanvar.push({
        q: this.loanq1,
        a: this.loan1
      })
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
}
