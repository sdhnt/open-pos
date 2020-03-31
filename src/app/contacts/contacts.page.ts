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
import { Observable } from 'rxjs';
import { SheetStates } from 'ionic-custom-bottom-sheet';
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
  totalUserCredit: number;
  totalUserDebit: number;
  public BottomSheetState: SheetStates = SheetStates.Closed;
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
      if (val === null) {
        this.contactList = [];
      }
      this.zone.run(() => {
        this.contactList = JSON.parse(val);
        this.totalUserCredit = 0;
        this.totalUserDebit = 0;
        this.contactList.forEach(contact => {
          if (contact.balance > 0) { this.totalUserDebit += contact.balance; }
          if (contact.balance < 0) { this.totalUserCredit += contact.balance; }
        });
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
        data: JSON.stringify(contact)
      }
    };
    this.router.navigate(['/home/individual-contact'], naviExtra);
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async navAdd(num: number) {
    if (num === 1) {
      this.BottomSheetState = SheetStates.Closed
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
      this.BottomSheetState = SheetStates.Closed
      const m1 = this.subscriber(this.translateConfigService.getTranslatedMessage('Add Contact'));
      const m2 = this.subscriber(this.translateConfigService.getTranslatedMessage('Contact Name'));
      const m3 = this.subscriber(this.translateConfigService.getTranslatedMessage('Contact Number'));
      const m4 = this.subscriber(this.translateConfigService.getTranslatedMessage('Cancel'));
      const m5 = this.subscriber(this.translateConfigService.getTranslatedMessage('Add'));
      const a = await this.alertCtrl.create({
        subHeader: m1,
        inputs: [
          {
            name: 'name',
            placeholder: m2,
          },
          {
            name: 'phno',
            placeholder: m3,
          },
        ],
        buttons: [
          {
            text: m4,
            role: 'cancel',
          },
          {
            text: m5,
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
                    message: this.subscriber(this.translateConfigService.getTranslatedMessage('Please fill in name')),
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
    console.log('this.contactList', this.contactList)
    if (this.contactList === null) { return; }
    this.filteredList = this.contactList.filter(contact =>
      contact.displayName.toLowerCase().includes(this.searchterm.toLowerCase()),
    );
  }

  sort(event) {
    const num = Number(event.target.value);
    if (num === 1 || num === 2) {
      this.filteredList.sort((a, b) => a.displayName.localeCompare(b.displayName));
      if (num === 2) {
        this.filteredList.reverse();
      }
    } else if (num === 3 || num === 4) {
      this.filteredList.sort((a, b) => a.balance - b.balance);
      if (num === 4) {
        this.filteredList.reverse();
      }
    }
  }

  navCredReminder() {
    this.BottomSheetState = SheetStates.Closed
    this.router.navigate(['/home/credit-reminder']);
  }

  public openSheet() {
    this.BottomSheetState = SheetStates.Opened;
  }

  public closeSheet() {
    this.BottomSheetState = SheetStates.Closed;
  }

  public StateChanged(event) {
    if (event === SheetStates.Closed) {
      console.log('Sheet Closed');
    }
  }
}
