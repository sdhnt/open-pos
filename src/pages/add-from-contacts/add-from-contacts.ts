import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, ToastController } from "ionic-angular";
import { Contacts, ContactFindOptions } from "@ionic-native/contacts";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
/**
 * Generated class for the AddFromContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-from-contacts",
  templateUrl: "add-from-contacts.html",
})
export class AddFromContactsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private contacts: Contacts,
    private translateConfigService: TranslateConfigService,
    private toastController: ToastController,
  ) {
    this.contactList = [];
  }

  contactList;
  searchterm = "";
  filteredList;

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddFromContactsPage");
    this.getContact();
  }

  done() {
    const contactsToAdd = [];
    this.contactList.forEach(element => {
      if (element.isSelected) contactsToAdd.push(element);
    });
    this.view.dismiss(contactsToAdd);
  }

  goBack() {
    this.view.dismiss([]);
  }

  getContact() {
    const fields = ["name"];

    const options = new ContactFindOptions();
    options.multiple = true;
    options.desiredFields = ["id", "displayName", "phoneNumbers"];
    options.hasPhoneNumber = true;

    const onSuccess = contacts => {
      this.contactList = contacts;
      console.log(contacts);
      contacts.forEach(element => {
        element.isSelected = false;
        console.log(element.displayName);
      });
      // un-comment the next line to save in storage provider
      // this.sp.saveContacts(contacts);
      this.toastController
        .create({
          //@ts-ignore
          message: this.translateConfigService.getTranslatedMessage("Phone contacts have been imported.").value,
          duration: 2000,
        })
        .present()
        .then(() => {});
      this.filteredList = this.contactList;
    };

    this.contacts
      // @ts-ignore
      .find(fields, options)
      .then(contacts => onSuccess(contacts))
      .catch(error => console.log(error));
  }

  filter() {
    this.filteredList = this.contactList.filter(contact =>
      contact.displayName.toLowerCase().includes(this.searchterm.toLowerCase()),
    );
  }
}
