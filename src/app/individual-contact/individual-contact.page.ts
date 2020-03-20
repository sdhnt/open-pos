import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { StorageProvider } from '../services/storage/storage';

import { TranslateConfigService } from '../services/translation/translate-config.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-contact',
  templateUrl: './individual-contact.page.html',
  styleUrls: ['./individual-contact.page.scss'],
})
export class IndividualContactPage implements OnInit {
  contact = {
    displayName: '',
    balance: 0,
    phno: '',
    transacHistory: [],
    dueDate: '',
  };
  listOfNewTransactions = [];
  minDate = new Date().toISOString();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
  newDate;

  constructor(
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    private localNotif: LocalNotifications,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (params.res) {
        const res = JSON.parse(params.res);
        this.contact = res.data;
      }
    });
    this.newDate = this.contact.dueDate;
    // if(this.newDate==undefined) this.remDate();
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividualContactPage');
  }

  remDate() {
    this.newDate = '';
  }

  async goBack() {
    if (this.listOfNewTransactions.length === 0 && this.newDate === this.contact.dueDate) {
      this.location.back();
    } else {
      if (this.listOfNewTransactions.length > 0) {
        const toast = await this.toastCtrl
          .create({
            // @ts-ignore
            message: this.translateConfigService.getTranslatedMessage('Updating contact').value,
            duration: 1500,
          });
        toast.present();
        await this.sp.updateContactTransaction(this.contact.displayName, this.listOfNewTransactions);
      }
      if (this.newDate !== this.contact.dueDate) {
        await this.sp.updateContactDate(this.contact.displayName, this.newDate);
        const phoneNumToUse: string = this.contact.phno[0];
        console.log(phoneNumToUse.toString());
        const notifId: number = Number(phoneNumToUse.substring(phoneNumToUse.length - 8, phoneNumToUse.length));
        console.log(notifId);
        this.localNotif.isScheduled(notifId).then(isSchdeuled => {
          if (isSchdeuled) {
            this.localNotif.cancel(notifId);
            console.log('Cleared notif of', notifId);
          }
          if (this.newDate !== '') {
            let timeSchedule = new Date(this.newDate).getTime() - new Date().getTime();
            timeSchedule = timeSchedule <= 0 ? 0 : timeSchedule;
            this.localNotif.schedule({
              text: 'Credit/Debit due today from ' + this.contact.displayName,
              id: notifId,
              // trigger: { at: new Date(this.newDate) },
              trigger: { at: new Date(new Date().getTime() + timeSchedule) },
            });
            console.log('Notif scheduled for: ', new Date(this.newDate));
          }
        }).catch(e => console.log(e));
      }
      this.location.back();
    }
  }

  async transaction(signedOne: number) {
    let amountToAdd = 0;
    const a = await this.alertCtrl.create({
      inputs: [
        {
          name: 'amount',
          // @ts-ignore
          placeholder: this.translateConfigService.getTranslatedMessage('Amount').value,
          type: 'number',
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
          text: this.translateConfigService.getTranslatedMessage('Okay').value,
          handler: data => {
            if (data.amount > 0) {
              amountToAdd = data.amount * signedOne;
            } else { console.log('Improper Number'); }
          },
        },
      ],
    });
    a.present();
    a.onDidDismiss().then(() => {
      if (amountToAdd === 0) {
        return;
      }
      const transaction = {
        amount: amountToAdd,
        date: new Date(),
        // reminderDate: "",
        discount: 0,
        note: '',
        img: '',
      };
      if (!this.contact.transacHistory) { this.contact.transacHistory = []; }
      this.contact.transacHistory.unshift(transaction);
      this.contact.balance += amountToAdd;
      this.listOfNewTransactions.unshift(transaction);
    });
  }

  getDateTime(datetime) {
    // return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);

    const t =
      temp.getDate().toString() +
      '/' +
      (temp.getMonth() + 1).toString() +
      '/' +
      temp.getFullYear().toString() +
      ' ' +
      this.getHours(temp) +
      ':' +
      this.getMinutes(temp);
    return t;
    // if any hours or mins <0 then need to add 0 4 use cases
  }

  getHours(datetime) {
    const temp = new Date(datetime);
    const t = temp.getHours();
    if (t > 9) {
      return t.toString();
    } else {
      return '0' + t.toString();
    }
  }

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return '0' + t.toString();
    }
  }

  async delete() {
    const a = await this.alertCtrl.create({
      // @ts-ignore
      subTitle: this.translateConfigService.getTranslatedMessage('Are you sure you want to delete this contact?').value,
      buttons: [
        {
          // @ts-ignore
          text: this.translateConfigService.getTranslatedMessage('Cancel').value,
          role: 'cancel',
        },
        {
          // @ts-ignore
          text: this.translateConfigService.getTranslatedMessage('Okay').value,
          handler: () => {
            this.sp.deleteContact(this.contact.displayName).then(() => this.location.back());
          },
        },
      ],
    });
    a.present();
  }
}
