import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { StorageProvider } from '../services/storage/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { SMS } from '@ionic-native/sms/ngx';
import { Observable } from 'rxjs';
import domtoimage from 'dom-to-image';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-individual-contact',
  templateUrl: './individual-contact.page.html',
  styleUrls: ['./individual-contact.page.scss'],
})
export class IndividualContactPage implements OnInit {

  constructor(
    public event: EventService,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    private localNotif: LocalNotifications,
    private location: Location,
    private route: ActivatedRoute,
    private social: SocialSharing,
    private sms: SMS,
    private platform: Platform
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.data) {
        const res = JSON.parse(params.data);
        console.log('res', res);
        this.contact = res;
        this.newDisc = this.contact.discount;
        this.newDate = this.contact.dueDate;
      }
    });
    // if(this.newDate==undefined) this.remDate();
  }
  contact = {
    displayName: '',
    balance: 0,
    phno: [],
    transacHistory: [],
    dueDate: '',
    discount: 0
  };
  listOfNewTransactions = [];
  minDate = new Date().toISOString();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
  newDate;
  newDisc;
  usingShare = false;

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.newDisc = 0;
    this.event.emitIsBack(true);
    this.event.emitBackRoute('/home/contacts');
  }

  ionViewWillLeave() {
    this.event.emitBackRoute('');
    this.event.emitIsBack(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividualContactPage');
  }

  remDate() {
    this.newDate = '';
  }

  subscriber(message: Observable<any>) {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    return msg;
  }

  async goBack() {
    if (this.listOfNewTransactions.length === 0 && this.newDate === this.contact.dueDate && this.newDisc === this.contact.discount
    ) {
      this.location.back();
    } else {
      if (this.listOfNewTransactions.length > 0) {
        const toast = await this.toastCtrl
          .create({
            message: this.subscriber(this.translateConfigService.getTranslatedMessage('Updating contact')),
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

      if (this.newDisc !== this.contact.discount) {
        console.log(this.newDisc);
        console.log(this.contact.discount);
        await this.sp.updateContactDisc(this.contact.displayName, this.newDisc);
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
          placeholder: this.subscriber(this.translateConfigService.getTranslatedMessage('Amount')),
          type: 'number',
        },
      ],
      buttons: [
        {
          text: this.subscriber(this.translateConfigService.getTranslatedMessage('Cancel')),
          role: 'cancel',
        },
        {
          text: this.subscriber(this.translateConfigService.getTranslatedMessage('Okay')),
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

  getDateTime(datetime, forSMS: boolean) {
    // return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);

    let t = temp.getDate().toString() + '/' + (temp.getMonth() + 1).toString() + '/' + temp.getFullYear().toString();
    if (!forSMS) { t = t + ' ' + this.getHours(temp) + ':' + this.getMinutes(temp); }
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
      subHeader: this.subscriber(this.translateConfigService.getTranslatedMessage('Are you sure you want to delete this contact?')),
      buttons: [
        {
          text: this.subscriber(this.translateConfigService.getTranslatedMessage('Cancel')),
          role: 'cancel',
        },
        {
          text: this.subscriber(this.translateConfigService.getTranslatedMessage('Okay')),
          handler: () => {
            this.sp.deleteContact(this.contact.displayName).then(() => this.location.back());
          },
        },
      ],
    });
    a.present();
  }
  share() {
    this.usingShare = true;
    const div = document.getElementById('share');
    const options = { width: div.offsetWidth, height: div.offsetHeight  };
    domtoimage.toPng(div, options).then((dataUrl) => {
      console.log(dataUrl);
      this.social
        .share('Made using Open POS app\n', '', dataUrl, 'facebook.com/openfinanceapp')
        .then(response => console.log(response))
        .catch(e => console.log(e));
    });
    // html2canvas(document.querySelector('#share'), { useCORS: true }).then(canvas => {
    //   const dataUrl = canvas.toDataURL();
    // });
    setTimeout(() => (this.usingShare = false), 5000);
  }

  async sendSMS() {
    let message = 'Dear customer,\nYou have a payment of ' + Math.abs(this.contact.balance).toString() + ' due';
    if (this.newDate !== '') {
      message += ' on ' + this.getDateTime(this.newDate, true);
    }
    message += '.\nMade using Open POS app\nfacebook.com/openfinanceapp';
    const alert = await this.alertCtrl
      .create({
        header: 'Send SMS',
        subHeader: 'Message will be sent to: ',
        inputs: [
          {
            name: 'phoneNum',
            value: this.contact.phno[0],
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Send',
            handler: async data => {
              try {
                if (data.phoneNum.length < 8) { throw Error; }
                for (let i = 0; i < data.phoneNum.length; ++i) {
                  const char: string = data.phoneNum.charAt(i);
                  if (char === '+') {
                    if (i !== 0) { throw Error; }
                  } else if (char.localeCompare('0') < 0 || char.localeCompare('9') > 0) {
                    throw Error;
                  }
                }
              } catch {
                const toast = await this.toastCtrl
                  .create({
                    message:
                      'Improper phone number. Number should be greater than 8 characters and not have any spaces',
                    duration: 2500,
                  });
                toast.present();
                return false;
              }
              if (this.contact.phno[0] !== data.phoneNum) {
                this.contact.phno[0] = data.phoneNum;
                const temp = {
                  displayName: this.contact.displayName,
                  phno: this.contact.phno,
                };
                this.sp.saveContacts([temp], false);
              }
              this.sms
                .send(data.phoneNum, message, { replaceLineBreaks: true, android: { intent: 'INTENT' } })
                .then(response => console.log(response))
                .catch(e => console.log(e));
            },
          },
        ],
      });
    alert.present();
  }
}
