import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ToastController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";

import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { LocalNotifications } from "@ionic-native/local-notifications";
import html2canvas from "html2canvas";
import { SocialSharing } from "@ionic-native/social-sharing";
import { SMS } from "@ionic-native/sms";

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
    phno: [],
    transacHistory: [],
    dueDate: "",
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    private localNotif: LocalNotifications,
    private social: SocialSharing,
    private sms: SMS,
    private toastController: ToastController,
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

  remDate() {
    this.newDate = "";
  }

  async goBack() {
    if (this.listOfNewTransactions.length == 0 && this.newDate == this.contact.dueDate) {
      this.navCtrl.pop();
    } else {
      if (this.listOfNewTransactions.length > 0) {
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
      if (this.newDate != this.contact.dueDate) {
        await this.sp.updateContactDate(this.contact.displayName, this.newDate);
        const phoneNumToUse: string = this.contact.phno[0];
        console.log(phoneNumToUse.toString());
        const notifId: number = parseInt(phoneNumToUse.substring(phoneNumToUse.length - 8, phoneNumToUse.length));
        console.log(notifId);
        this.localNotif
          .isScheduled(notifId)
          .then(isSchdeuled => {
            if (isSchdeuled) {
              this.localNotif.cancel(notifId);
              console.log("Cleared notif of", notifId);
            }
            if (this.newDate != "") {
              let timeSchedule = new Date(this.newDate).getTime() - new Date().getTime();
              timeSchedule = timeSchedule <= 0 ? 0 : timeSchedule;
              this.localNotif.schedule({
                text: "Credit/Debit due today from " + this.contact.displayName,
                id: notifId,
                // trigger: { at: new Date(this.newDate) },
                trigger: { at: new Date(new Date().getTime() + timeSchedule) },
              });
              console.log("Notif scheduled for: ", new Date(this.newDate));
            }
          })
          .catch(e => console.log(e));
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

  getDateTime(datetime, forSMS: boolean) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);

    let t = temp.getDate().toString() + "/" + (temp.getMonth() + 1).toString() + "/" + temp.getFullYear().toString();
    if (!forSMS) t = t + " " + this.getHours(temp) + ":" + this.getMinutes(temp);
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

  usingShare = false;
  share() {
    this.usingShare = true;
    html2canvas(document.querySelector("#share"), { useCORS: true }).then(canvas => {
      const dataUrl = canvas.toDataURL();
      this.social
        .share("Made using Open POS app\n", "", dataUrl, "facebook.com/openfinanceapp")
        .then(response => console.log(response))
        .catch(e => console.log(e));
    });
    setTimeout(() => (this.usingShare = false), 5000);
  }

  sendSMS() {
    let message = "Dear customer,\nYou have a payment of " + Math.abs(this.contact.balance).toString() + " due";
    if (this.newDate != "") {
      message += " on " + this.getDateTime(this.newDate, true);
    }
    message += ".\nMade using Open POS app\nfacebook.com/openfinanceapp";
    this.alertCtrl
      .create({
        title: "Send SMS",
        subTitle: "Message will be sent to: ",
        inputs: [
          {
            name: "phoneNum",
            value: this.contact.phno[0],
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Send",
            handler: data => {
              try {
                if (data.phoneNum.length < 8) throw Error;
                for (let i = 0; i < data.phoneNum.length; ++i) {
                  const char: string = data.phoneNum.charAt(i);
                  if (char == "+") {
                    if (i != 0) throw Error;
                  } else if (char.localeCompare("0") < 0 || char.localeCompare("9") > 0) {
                    throw Error;
                  }
                }
              } catch {
                this.toastController
                  .create({
                    message:
                      "Improper phone number. Number should be greater than 8 characters and not have any spaces",
                    duration: 2500,
                  })
                  .present();
                return false;
              }
              if (this.contact.phno[0] != data.phoneNum) {
                this.contact.phno[0] = data.phoneNum;
                const temp = {
                  displayName: this.contact.displayName,
                  phno: this.contact.phno,
                };
                this.sp.saveContacts([temp], false);
              }
              this.sms
                .send(data.phoneNum, message, { replaceLineBreaks: true, android: { intent: "INTENT" } })
                .then(response => console.log(response))
                .catch(e => console.log(e));
            },
          },
        ],
      })
      .present();
  }
}
