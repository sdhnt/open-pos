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
      this.contact.transacHistory.unshift(amountToAdd);
      this.contact.balance += amountToAdd;
    });
  }
}
