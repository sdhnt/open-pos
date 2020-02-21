import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  listVal = [300, 250, -110, -100, -500];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad IndividualContactPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

  transaction(one:number){
    //pop up alert
    //multiply value by *one* to get appropriate -ve,+ve
  }
}
