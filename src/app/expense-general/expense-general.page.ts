import { Component, OnInit } from '@angular/core';
import {
  NavController,
  NavParams,
  ToastController,
  ModalController,
} from '@ionic/angular';
import { StorageProvider } from '../services/storage/storage';
import * as firebase from 'firebase';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { ContactsPage } from '../contacts/contacts.page';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';

class Expense {
  public name: string;
  public type: string;
  public amount: number;
  // public notes: String;
  public flag: boolean;
  public contact: string;

  constructor() {
    this.flag = true;
    this.contact = '';
  }

  isValid() {
    if (this.name === undefined || this.type === undefined || this.amount === undefined) { return false; }
    return true;
  }
}

@Component({
  selector: 'app-expense-general',
  templateUrl: './expense-general.page.html',
  styleUrls: ['./expense-general.page.scss'],
})
export class ExpenseGeneralPage implements OnInit {
  expType: string[] = ['Transportation', 'Salaries', 'Utilities', 'Depreciation', 'Miscellaneous'];
  listOfExpenses: Expense[];
  geolocation: {};
  currtime = new Date();
  userdata: any;
  expType1 = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    public sp: StorageProvider,
    public events: EventService,
    public toastCtrl: ToastController,
    private gps: GeolocationService,
    private modal: ModalController,
  ) {
    this.getUserData();
    this.listOfExpenses = [];
    this.listOfExpenses.push(new Expense());
    this.gps
      .getCoordinates()
      .then(coordinates => {
        this.geolocation = coordinates;
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {
    console.log('ionViewDidLoad ExpenseGeneralPage');
    this.expType.forEach(async element => {
      console.log(element);
      await this.expType1.push(this.subscriber(this.translateConfigService.getTranslatedMessage(element)));
    });
  }

  subscriber(message: Observable<any>) {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    return msg;
  }

  ionViewDidLoad() {
  }

  addExpense() {
    this.listOfExpenses.push(new Expense());
  }

  removeExpense(index: number) {
    this.listOfExpenses.splice(index, 1);
  }

  async updateExpenses() {
    const itemslist = [];
    let totalsum = 0;
    this.listOfExpenses.forEach(element => {
      if (!element.isValid()) {
        element.flag = false;
        return;
      } else {
        element.flag = true;
        totalsum -= element.amount;
        const prodOfExpense = {
          cat: element.type,
          code: 'EXPENSE',
          discount: 0,
          name: element.name,
          price: element.amount * -1,
          qty: 1,
          stock_qty: 0,
        };
        if (element.contact !== '') {
          const transaction = {
            amount: 1 * element.amount,
            date: new Date(),
            reminderDate: '',
            discount: 0,
            note: '',
            img: '',
          };
          this.sp.updateContactTransaction(element.contact, [transaction]);
        }
        itemslist.push(prodOfExpense);
      }
    });
    console.log(totalsum);
    console.log(itemslist);
    const dataexp = {
      itemslist,
      totalsum,
      prodidlist: [],
      pnllist: [],
      datetime: this.currtime,
      taxrate: 0,
      discountlist: [],
      discount: 0,
      totaldisc: totalsum,
      totalatax: totalsum,
      geolocation: this.geolocation,
    };
    console.log(dataexp);
    this.sp.storageReady().then(async () => {
      this.sp.addTransactions(dataexp);
      this.updateCb(Math.abs(totalsum)).then(() => {
        this.events.emitCbUpdateCreated(0);
      });
      const message = this.translateConfigService.getTranslatedMessage('Finish');
      const toast = await this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 3000,
      });

      toast.present();
      this.currtime = new Date();
      this.listOfExpenses = [];
      this.listOfExpenses.push(new Expense());
      this.modal.dismiss();
    });
  }

  close() {
    this.modal.dismiss();
  }

  async addContact(exp: Expense) {
    const m = await this.modal.create({
      component: ContactsPage,
      componentProps: { choosingContact: true }
    });
    m.present();
    m.onDidDismiss().then((contactName: any) => {
      if (contactName === null || contactName === undefined) {
        return;
      }
      exp.contact = contactName;
    });
  }

  clearContact(exp: Expense) {
    exp.contact = '';
  }

  async updateCb(negtransacsum) {
    this.getUserData();
    this.userdata.cash_balance = (Number(this.userdata.cash_balance) - Number(negtransacsum)).toString();
    this.sp.setUserDat(this.userdata);
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
}
