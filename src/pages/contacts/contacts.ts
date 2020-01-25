import { Component } from "@angular/core";
import { AlertController, IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts,
    private toastController: ToastController,
    private alertController: AlertController,
  ) {}

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
    else {
      console.log("no user permission to access phone contacts");
      const message = "You have not given us the permission to access your phone contacts. Please click Yes first.";
      this.alertController
        .create({
          message,
          buttons: [
            {
              text: "Ok",
              role: "Cancel",
            },
          ],
        })
        .present()
        .then(() => {});
    }
  }

  setPermission(permission: boolean) {
    console.log(`phone contacts permission: ${permission}`);
    this.hasPermission = permission;
  }
}
