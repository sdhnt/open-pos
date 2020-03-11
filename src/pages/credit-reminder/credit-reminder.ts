import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { IndividualContactPage } from "../individual-contact/individual-contact";

/**
 * Generated class for the CreditReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-credit-reminder",
  templateUrl: "credit-reminder.html",
})
export class CreditReminderPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public sp: StorageProvider) {}

  todayList = [];
  tomList = [];
  pendingList = [];

  async ionViewWillEnter() {
    this.todayList = [];
    this.tomList = [];
    this.pendingList = [];
    const contacts = JSON.parse(await this.sp.getContacts());
    const todayDate = new Date();
    contacts.forEach(contact => {
      if (contact.dueDate && contact.dueDate != "" && contact.balance != 0) {
        const contactDate = new Date(contact.dueDate);
        console.log( contactDate.valueOf() - todayDate.valueOf());
        if (contactDate.getFullYear() == todayDate.getFullYear()) {
          if (contactDate.getMonth() == todayDate.getMonth()) {
            if (contactDate.getDate() == todayDate.getDate()) {
              this.todayList.push(contact);
            } else if (contactDate.getDate() == todayDate.getDate() + 1) {
              this.tomList.push(contact);
            }
          } else if (todayDate.getMonth() == contactDate.getMonth() - 1) {
            if (contactDate.valueOf() - todayDate.valueOf() < 86400000) {
              //8.64e7 is one day in milliseconds
              this.tomList.push(contact);
            }
          } 
        }
        if ( contactDate.valueOf() - todayDate.valueOf() < 0){
          if(contactDate.getDate()!=todayDate.getDate() || contactDate.getMonth()!=todayDate.getMonth() || contactDate.getFullYear()!=todayDate.getFullYear())
            this.pendingList.push(contact);
        }
      }
    });
  }

  navToIndividual(contact) {
    this.navCtrl.push(IndividualContactPage, { data: contact });
  }

  goBack() {
    this.navCtrl.pop();
  }
}
