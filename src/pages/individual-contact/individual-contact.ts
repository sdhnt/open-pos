import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ToastController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";

import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the IndividualContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-individual-contact",
  templateUrl: "individual-contact.html",
})
export class IndividualContactPage {
  contact = {
    displayName: "",
    balance: 0,
    phno: "",
    transacHistory: [],
    dueDate: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
  ) {
    this.contact = this.navParams.get("data");
    this.newDate = this.contact.dueDate;
    // if(this.newDate==undefined) this.remDate();
  }

  listOfNewTransactions = [];
  minDate = new Date().toISOString();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
  newDate;

  ionViewDidLoad() {
    console.log("ionViewDidLoad IndividualContactPage");
  }

  remDate(){
    this.newDate = "";
  }

  async goBack() {
    if (this.listOfNewTransactions.length == 0 && this.newDate==this.contact.dueDate) {
      this.navCtrl.pop();
    } else {
      if(this.listOfNewTransactions.length>0){
        this.toastCtrl
        .create({
          //@ts-ignore
          message: this.translateConfigService.getTranslatedMessage("Updating contact").value,
          dismissOnPageChange: true,
          duration: 1500,
        })
        .present();
      await this.sp.updateContactTransaction(this.contact.displayName, this.listOfNewTransactions);
      }
      if(this.newDate!=this.contact.dueDate){
        await this.sp.updateContactDate(this.contact.displayName, this.contact.dueDate, this.newDate);
      }
      this.navCtrl.pop();
    }
  }

  transaction(signedOne: number) {
    let amountToAdd = 0;
    const a = this.alertCtrl.create({
      inputs: [
        {
          name: "amount",
          //@ts-ignore
          placeholder: this.translateConfigService.getTranslatedMessage("Amount").value,
          type: "number",
        },
      ],
      buttons: [
        {
          //@ts-ignore
          text: this.translateConfigService.getTranslatedMessage("Cancel").value,
          role: "cancel",
        },
        {
          //@ts-ignore
          text: this.translateConfigService.getTranslatedMessage("Okay").value,
          handler: data => {
            if (data.amount > 0) {
              amountToAdd = data.amount * signedOne;
            } else console.log("Improper Number");
          },
        },
      ],
    });
    a.present();
    a.onDidDismiss(() => {
      if (amountToAdd === 0) {
        return;
      }
      const transaction = {
        amount: amountToAdd,
        date: new Date(),
        // reminderDate: "",
        discount: 0,
        note: "",
        img: "",
      };
      if (!this.contact.transacHistory) this.contact.transacHistory = [];
      this.contact.transacHistory.unshift(transaction);
      this.contact.balance += amountToAdd;
      this.listOfNewTransactions.unshift(transaction);
    });
  }

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);

    const t =
      temp.getDate().toString() +
      "/" +
      (temp.getMonth() + 1).toString() +
      "/" +
      temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp);
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
  }

  getHours(datetime) {
    const temp = new Date(datetime);
    const t = temp.getHours();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  delete() {
    const a = this.alertCtrl.create({
      //@ts-ignore
      subTitle: this.translateConfigService.getTranslatedMessage("Are you sure you want to delete this contact?").value,
      buttons: [
        {
          //@ts-ignore
          text: this.translateConfigService.getTranslatedMessage("Cancel").value,
          role: "cancel",
        },
        {
          //@ts-ignore
          text: this.translateConfigService.getTranslatedMessage("Okay").value,
          handler: () => {
            this.sp.deleteContact(this.contact.displayName).then(() => this.navCtrl.pop());
          },
        },
      ],
    });
    a.present();
  }
}
