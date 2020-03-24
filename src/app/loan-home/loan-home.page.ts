import { Component, OnInit } from '@angular/core';
import {
  NavController,
  NavParams,
  AlertController,
  ToastController,
  ModalController
} from '@ionic/angular';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageProvider } from '../services/storage/storage';
import * as firebase from 'firebase';
import { GettersetterProvider } from '../services/gettersetter/gettersetter';
import { Observable } from 'rxjs';
import { HelpPage } from '../help/help.page';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-loan-home',
  templateUrl: './loan-home.page.html',
  styleUrls: ['./loan-home.page.scss'],
})
export class LoanHomePage implements OnInit {
  userdata: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: '',
    owner: '',
    logo_url: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };

  showloan = 0;
  loanvar: any = [];

  loan1;
  loan2;
  loan3;
  loan4;
  loan5;
  loan6;
  loanq1 = this.subscriber(this.translateConfigService.getTranslatedMessage('1. How urgently do you need a loan?'));
  loanq2 = this.subscriber(this.translateConfigService.getTranslatedMessage('2. When would you like to get this loan?'));
  loanq3 = this.subscriber(this.translateConfigService.getTranslatedMessage('3. How much would you like to borrow?'));
  loanq4 = this.subscriber(this.translateConfigService.getTranslatedMessage('4. How long will you need to pay it back?'));
  loanq5 = this.subscriber(this.translateConfigService.getTranslatedMessage('5. What do you need the loan for?'));
  loanq6 = this.subscriber(this.translateConfigService.getTranslatedMessage('6. What\'s the best way to contact you?'));
  randovar = this.subscriber(this.translateConfigService.getTranslatedMessage('Close'));
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    public getset: GettersetterProvider,
    private toastCtrl: ToastController,
    public events: EventService,
    private modal: ModalController
  ) {
    this.getUserData();

    this.events.cbUpdateCreated.subscribe(data => {
      this.getUserData();
    });
  }

  ngOnInit() {
    this.showloan = 0;
    this.loanvar = [];
  }

  subscriber(message: Observable<any>) {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  dismiss() {
    this.modal.dismiss();
  }
  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
        })
        .catch(err => {
          alert('Error: ' + err);
        });
    });
  }

  ionViewDidLoad() {

  }

  async uploadbtn() {
    this.sp
      .backupStorage()
      .then()
      .catch();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Online backup ready');
    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(message),
        duration: 2000,
      });
    toast.present();
  }
  showloanform() {
    this.showloan = this.showloan === 1 ? 0 : 1;
  }

  async submitloanform() {
    this.loanvar.push({
      q: this.loanq1,
      a: this.loan1,
    });
    this.loanvar.push({
      q: this.loanq2,
      a: this.loan2,
    });
    this.loanvar.push({
      q: this.loanq3,
      a: this.loan3,
    });
    this.loanvar.push({
      q: this.loanq4,
      a: this.loan4,
    });
    this.loanvar.push({
      q: this.loanq5,
      a: this.loan5,
    });
    this.loanvar.push({
      q: this.loanq6,
      a: this.loan6,
    });

    firebase
      .firestore()
      .collection('loan_apps')
      .add({
        user: this.userdata,
        loan_details: this.loanvar,
      })
      .then(async doc => { })
      .catch(err => {
        console.log(err);
      });
    this.loanvar = [];
    this.showloan = 0;
    const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Submitted!');
    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(msg),
        duration: 3000,
      });
    toast.present();
  }

  async cashbtn() {
    await this.getUserData();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Balance');
    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Edit');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('Enter Current Cash Balance');
    const message3: Observable<any> = this.translateConfigService.getTranslatedMessage('Update');
    const message4: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const message5: Observable<any> = this.translateConfigService.getTranslatedMessage('OK');

    const alert = await this.alertCtrl
      .create({
        message: this.subscriber(message) + ': ' + this.userdata.cash_balance,

        buttons: [
          {
            text: this.subscriber(message1),
            handler: async data => {
              const a = await this.alertCtrl
                .create({
                  inputs: [
                    { name: 'cb', placeholder: this.subscriber(message2) },
                  ],
                  buttons: [
                    {
                      text: this.subscriber(message3),
                      handler: data1 => {
                        if (data1.cb != null) {
                          // console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                    {
                      text: this.subscriber(message4),
                      role: 'cancel',
                    },
                  ],
                });
              a.present();
            },
          }, // end Edit Button
          {
            // translate these buttons
            text: this.subscriber(message5),
            role: 'Cancel',
          }, // end OK Button
        ], // end button
      });
    alert.present();
  }

  async help() {
    const passedData = {
      // youtube link, required text
      page: 'Loan Page',
    };
    const helpModal = await this.modal.create({
      component: HelpPage,
      componentProps: {
        data: passedData
      }
    });
    helpModal.present();
  }
}
