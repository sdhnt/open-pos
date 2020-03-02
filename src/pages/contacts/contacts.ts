import { Component, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  FabContainer,
  AlertController,
  ModalController,
  ViewController,
} from "ionic-angular";
import { Contacts, ContactFindOptions } from "@ionic-native/contacts";
import { StorageProvider } from "../../providers/storage/storage";
import { IndividualContactPage } from "../individual-contact/individual-contact";
import { AddFromContactsPage } from "../add-from-contacts/add-from-contacts";

import { TranslateConfigService } from "../../providers/translation/translate-config.service";

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
    private translateConfigService: TranslateConfigService,
    private zone: NgZone,
    private view: ViewController,
  ) {}

  choosingContact;

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactsPage");
    const temp = this.navParams.get("data");
    console.log(temp);
    if (temp == true) {
      this.choosingContact = true;
    } else {
      this.choosingContact = false;
    }
  }

  dismiss() {
    this.view.dismiss();
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

  navToIndividual(contact) {
    if (this.choosingContact) {
      this.view.dismiss(contact.displayName);
      this.choosingContact = false;
      return;
    }
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
        //@ts-ignore
        subTitle: this.translateConfigService.getTranslatedMessage("Add Contact").value,
        inputs: [
          {
            name: "name",
            //@ts-ignore
            placeholder: this.translateConfigService.getTranslatedMessage("Contact Name").value,
          },
          {
            name: "phno",
            //@ts-ignore
            placeholder: this.translateConfigService.getTranslatedMessage("Contact Number").value,
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
            text: this.translateConfigService.getTranslatedMessage("Add").value,
            handler: data => {
              if (data.name != "") {
                try {
                  if(data.phno.length<8) throw Error;
                  for(let i=0; i<data.phno.length; i++){
                    let char : String = data.phno.charAt(i);
                    if(char=="+"){
                      if(i!=0) throw Error;
                    } else if (char.localeCompare("0")<0 || char.localeCompare("9")>0){
                      throw Error;
                    }
                  }
                } catch (error) {
                  this.toastController.create({
                    message: "Improper phone number",
                    duration: 2500
                  }).present();
                  return false;
                }
                const temp = {
                  displayName: data.name,
                  phno: [data.phno],
                };
                // this.contactList.push(temp);
                this.sp.saveContacts([temp], true).then(() => {
                  this.ionViewDidEnter();
                });
              } else {
                this.toastController
                  .create({
                    //@ts-ignore
                    message: this.translateConfigService.getTranslatedMessage("Please fill in name").value,
                    duration: 2500,
                  })
                  .present();
                a.present();
                return false;
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
    if (this.contactList == null) return;
    this.filteredList = this.contactList.filter(contact =>
      contact.displayName.toLowerCase().includes(this.searchterm.toLowerCase()),
    );
  }
}
