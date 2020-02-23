import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";

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
    balance: "",
    phno: "",
    transacHistory: [],
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    const temp = navParams.get("data");
    this.contact = JSON.parse(temp);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad IndividualContactPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

  transaction(signedOne: number) {
    let amountToAdd = 0;
    const a = this.alertCtrl.create({
      inputs: [
        {
          name: "amount",
          placeholder: "Amount",
          type: "number",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "OK",
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
      if (amountToAdd == 0) {
        return;
      }
      const transaction = {
        amount: amountToAdd,
        date: Date.now(),
      };
      this.contact.transacHistory.unshift(transaction);
      this.contact.balance += amountToAdd;
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
}
