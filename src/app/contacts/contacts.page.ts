import { Component, OnInit, NgZone, Inject } from '@angular/core';
import {
  ToastController,
  AlertController,
  ModalController,
} from '@ionic/angular';
import { Contacts } from '@ionic-native/contacts/ngx';
import { StorageProvider } from '../services/storage/storage';
import { IndividualContactPage } from '../individual-contact/individual-contact.page';

import { TranslateConfigService } from '../services/translation/translate-config.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  choosingContact = false;

  contactList = [];
  searchterm = '';
  filteredList;
  constructor(
    // @Inject(NavParams) public navParams: NavParams,
    // tslint:disable-next-line: deprecation
    private contacts: Contacts,
    private toastController: ToastController,
    private sp: StorageProvider,
    private alertCtrl: AlertController,
    private translateConfigService: TranslateConfigService,
    private zone: NgZone,
    private view: ModalController,
    private router: Router
  ) { }



  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
    // const temp = this.navParams.get('data');
    // console.log(temp);
    // if (temp === true) {
    //   this.choosingContact = true;
    // } else {
    //   this.choosingContact = false;
    // }
  }

  dismiss() {
    this.view.dismiss();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ContactPage');
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

  navToIndividual(contact) {
    if (this.choosingContact) {
      this.view.dismiss(contact.displayName);
      this.choosingContact = false;
      return;
    }
    const naviExtra: NavigationExtras = {
      queryParams: {
        data: contact
      }
    };
    this.router.navigate(['/home/individual-contact'], naviExtra);
  }

  async navAdd(num: number) {
    if (num === 1) {
      // const modal = this.modalCtrl.create(AddFromContactsPage);
      // modal.present();
      // modal.onWillDismiss(listToAdd => {
      //   const newContactList = [];
      //   listToAdd.forEach(element => {
      //     const temp = {
      //       displayName: element.displayName,
      //       phno: element.phoneNumbers,
      //     };
      //     // this.contactList.push(temp);
      //     newContactList.push(temp);
      //   });
      //   this.sp.saveContacts(newContactList, false).then(() => {
      //     this.ionViewDidEnter();
      //   });
      // });
      this.contacts.pickContact().then(contactReturned => {
        const phNoList = [];
        if (!contactReturned.phoneNumbers) {
          alert('Cannot add contact without phone number');
          return;
        }
        contactReturned.phoneNumbers.forEach(num1 => {
          let phoneNum = num1.value;
          while (phoneNum.indexOf(' ') !== -1) {
            phoneNum = phoneNum.replace(' ', '');
          }
          phNoList.push(phoneNum);
        });
        const temp = {
          displayName: contactReturned.displayName,
          phno: phNoList,
        };
        this.sp.saveContacts([temp], false).then(() => {
          this.ionViewDidEnter();
        });
      });
    } else if (num === 2) {
      const a = await this.alertCtrl.create({
        // @ts-ignore
        subTitle: this.translateConfigService.getTranslatedMessage('Add Contact').value,
        inputs: [
          {
            name: 'name',
            // @ts-ignore
            placeholder: this.translateConfigService.getTranslatedMessage('Contact Name').value,
          },
          {
            name: 'phno',
            // @ts-ignore
            placeholder: this.translateConfigService.getTranslatedMessage('Contact Number').value,
          },
        ],
        buttons: [
          {
            // @ts-ignore
            text: this.translateConfigService.getTranslatedMessage('Cancel').value,
            role: 'cancel',
          },
          {
            // @ts-ignore
            text: this.translateConfigService.getTranslatedMessage('Add').value,
            handler: async data => {
              if (data.name !== '') {
                try {
                  if (data.phno.length < 8) { throw Error; }
                  for (let i = 0; i < data.phno.length; i++) {
                    const char: string = data.phno.charAt(i);
                    if (char === '+') {
                      if (i !== 0) { throw Error; }
                    } else if (char.localeCompare('0') < 0 || char.localeCompare('9') > 0) {
                      throw Error;
                    }
                  }
                } catch (error) {
                  const toast = await this.toastController
                    .create({
                      message: 'Improper phone number',
                      duration: 2500,
                    });
                  toast.present();
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
                const toast = await this.toastController
                  .create({
                    // @ts-ignore
                    message: this.translateConfigService.getTranslatedMessage('Please fill in name').value,
                    duration: 2500,
                  });
                toast.present();
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
    if (this.contactList == null) { return; }
    this.filteredList = this.contactList.filter(contact =>
      contact.displayName.toLowerCase().includes(this.searchterm.toLowerCase()),
    );
  }

  // sortVal;
  // sort(num){
  //   console.log(num);
  //   this.sortVal = num;
  //   if(this.sortVal==1||this.sortVal==2){
  //     this.filteredList.sort((a,b)=>Math.pow(-1, this.sortVal+1)*a.displayName.localeCompare(b.displayName));
  //   } else if(this.sortVal==3||this.sortVal==4){
  //     this.filteredList.sort((a,b)=>Math.pow(-1, this.sortVal+1)*(a.balance-b.balance))
  //   }
  // }
}
