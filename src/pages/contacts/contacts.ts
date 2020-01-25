import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Contacts, ContactFindOptions } from "@ionic-native/contacts/ngx";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {}

  hasPermission = false;

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactsPage");
  }

  importContacts() {
    const fields = ["*"];

    const options = new ContactFindOptions();
    options.multiple = true;
    options.desiredFields = ["displayName", "phoneNumbers"];
    options.hasPhoneNumber = true;

    const onSuccess = contacts => {
      console.log(contacts);
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
    this.hasPermission = permission;
  }
}
