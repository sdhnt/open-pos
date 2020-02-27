import { Component, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  FabContainer,
  AlertController,
  ModalController,
} from "ionic-angular";
import { Contacts, ContactFindOptions } from "@ionic-native/contacts";
import { StorageProvider } from "../../providers/storage/storage";
import { IndividualContactPage } from "../individual-contact/individual-contact";
import { AddFromContactsPage } from "../add-from-contacts/add-from-contacts";

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
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private zone: NgZone,
  ) {}

  hasPermission = true;

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactsPage");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter ContactPage");
    this.sp.getContacts().then(val => {
      if (val == null) {
        this.contactList = [];
      }
      this.zone.run(() => {
        this.contactList = JSON.parse(val);
        this.filteredList = this.contactList;
      });
    });
  }

  contactList = [];
  searchterm = "";
  filteredList;

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

  navToIndividual(contact) {
    this.navCtrl.push(IndividualContactPage, { data: contact });
  }

  navAdd(num: number, fab: FabContainer) {
    fab.close();
    if (num == 1) {
      const modal = this.modalCtrl.create(AddFromContactsPage);
      modal.present();
      modal.onWillDismiss(listToAdd => {
        const newContactList = [];
        listToAdd.forEach(element => {
          const temp = {
            displayName: element.displayName,
            phno: element.phoneNumbers,
          };
          // this.contactList.push(temp);
          newContactList.push(temp);
        });
        this.sp.saveContacts(newContactList, false).then(() => {
          this.ionViewDidEnter();
        });
      });
    } else if (num == 2) {
      const a = this.alertCtrl.create({
        subTitle: "Add Contact",
        inputs: [
          {
            name: "name",
            placeholder: "Contact Name",
          },
          {
            name: "phno",
            placeholder: "Contact Number",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Add",
            handler: data => {
              if (data.name != "") {
                const temp = {
                  displayName: data.name,
                  phno: data.phno != "" ? [data.phno] : ["0000"],
                };
                // this.contactList.push(temp);
                this.sp.saveContacts([temp], true).then(() => {
                  this.ionViewDidEnter();
                });
              } else {
                this.toastController
                  .create({
                    message: "Please fill in name",
                    duration: 2500,
                  })
                  .present();
                a.present();
              }
            },
          },
        ],
      });
      a.present();
    }
    // this.zone.run(() => {
    //   this.contactList.sort((a, b) => a.displayName.localeCompare(b.displayName));
    //   this.filteredList = this.contactList;
    // });
  }

  filter() {
    if(this.contactList == null) return;
    this.filteredList = this.contactList.filter(contact =>
      contact.displayName.toLowerCase().includes(this.searchterm.toLowerCase()),
    );
  }
}
