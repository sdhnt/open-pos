import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { Contacts, ContactFindOptions } from "@ionic-native/contacts";
import { StorageProvider } from "../../providers/storage/storage";
import { IndividualContactPage } from "../individual-contact/individual-contact";

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-contacts",
  templateUrl: "contacts.html",
})
export class ContactsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts,
    private toastController: ToastController,
    private sp: StorageProvider,
  ) {
    let contact1 = {
      displayName: "Pranay"
    };
    this.contactList.push(contact1);
  }

  hasPermission = true;

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactsPage");
  }

  contactList = [];

  importContacts() {
    const fields = ["*"];

    const options = new ContactFindOptions();
    options.multiple = true;
    options.desiredFields = ["id", "displayName", "phoneNumbers"];
    options.hasPhoneNumber = true;

    const onSuccess = contacts => {
      this.contactList = contacts;
      console.log(contacts);
      contacts.forEach(element => {
        console.log(element.displayName);
      });
      // un-comment the next line to save in storage provider
      // this.sp.saveContacts(contacts);
      this.toastController
        .create({
          message: "Phone contacts have been imported.",
          duration: 2000,
        })
        .present()
        .then(() => {});
    };

    if (this.hasPermission)
      this.contacts
        // @ts-ignore
        .find(fields, options)
        .then(contacts => onSuccess(contacts))
        .catch(error => console.log(error));
    else console.log("no user permission to access phone contacts");
  }

  setPermission(permission: boolean) {
    console.log(`phone contacts permission: ${permission}`);
    this.hasPermission = permission;
  }

  navToIndividual(){
    this.navCtrl.push(IndividualContactPage);
  }
}
