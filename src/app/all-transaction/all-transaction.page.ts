import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  AlertController,
  ModalController,
  PopoverController
} from '@ionic/angular';
import * as firebase from 'firebase';
import { StorageProvider } from '../services/storage/storage';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.page.html',
  styleUrls: ['./all-transaction.page.scss'],
})
export class AllTransactionPage implements OnInit {
  updateOrCreate = 'Create Receipt';
  itemsname: string[] = [];
  loitems: any = [];
  buttonColor = '#ffa100';
  buttonColor1 = '#ff0300';
  datastore = {};
  result = '';
  // tslint:disable-next-line: variable-name
  flag_mode = 0;
  showSampleRec = true;
  itemsprice: string[] = [];
  itemsqty: number[] = [];
  itemsDiscount: number[] = [];
  ctr = 0;
  lastsum = 0;
  lastchar = 'NIL';
  lastdigit = 0;

  userdata: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: 'en',
    logo_url: '',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };

  flag = false;
  constructor(
    private translateConfigService: TranslateConfigService,
    public events: EventService,
    public sp: StorageProvider,
    public tstCtrl: ToastController,
    private alertCtrl: AlertController,
    private view: PopoverController
  ) {
    this.getUserData().then(() => console.log('get user data'));
    this.events.addRecCalcCcreated.subscribe(data => {
      this.updateOrCreate = 'Update Receipt';
      // console.log("ENTERED!");
      console.log('Received 0 ' + data);
      // SET itemsprice here? - make new addgen - diff button calls diff event that pushes rather than replaces
      // Same for Product Transaction Page
      // console.log(this.showSampleRec);
      const tempdat = JSON.parse(data);
      this.datastore = tempdat;
      this.showSampleRec = true;
      // this.itemsname=null;
      // this.itemsprice=null;
      // this.itemsqty=null;
      tempdat.forEach(element => {
        this.itemsname.push(element.name);
        this.itemsprice.push(element.price);
        this.itemsqty.push(element.qty);
        this.loitems.push(element);
        this.itemsDiscount.push(element.discount);
      });
      // console.log(this.itemsprice);
    });
  }

  ngOnInit() {
    if (this.itemsprice.length > 0) {
      this.showSampleRec = false;
      this.flag_mode = 1;
    }
    this.showSampleRec = false;
    this.delay(3000).then(() => {
      this.getUserData();
    });
  }

  ionViewDidLoad() {
    // console.log("ionViewDidLoad AllTransactionPage");
    // console.log("Size of array: " + this.itemsprice.length);
  }

  ionViewWillLeave() {
    this.updateOrCreate = 'Create Receipt';
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          // console.log(this.userdata);
        })
        .catch(err => {
          alert('Error: ' + err);
        });
    });
  }

  close() {
    this.view.dismiss();
  }

  createRec() {
    const tempJSON = { itemslist: [] };
    this.showSampleRec = false;

    this.itemsprice.forEach((element, index) => {
      if (this.itemsname.length > 0 && index < this.itemsname.length) {
        tempJSON.itemslist.push(this.loitems[index]);
      } else {
        tempJSON.itemslist.push({
          code: '000000',
          cat: 'NIL',
          stock_qty: 0,
          name: 'Item ' + index,
          price: Number(element),
          qty: this.itemsqty[index],
          discount: this.itemsDiscount[index],
        });
      }
    });

    // var sampledat={ 'itemslist': myJsonString,};

    const myObjStr = JSON.stringify(tempJSON);

    // (this.navCtrl.parent as Tabs).select(2);

    this.view.dismiss();

    this.delay(300).then(() => {
      this.events.emitGenRecCreated(myObjStr);

      console.log('Sent: ' + myObjStr);

      // your task after delay.
    });

    this.result = '';
    this.itemsname = [];
    this.itemsprice = [];
    this.lastsum = 0;
    this.itemsqty = [];
    this.itemsDiscount = [];
    this.loitems = [];
  }

  btnClicked(btn) {
    this.getUserData();

    if (this.flag) {
      this.flag = false;
      this.btnClicked('C');
    }

    try {
      // console.log("CalculatorPage::btnClicked = " + btn);
      if (btn === 'C') {
        this.result = '';
        this.itemsprice = [];
        this.lastsum = 0;
        this.itemsqty = [];
        this.itemsDiscount = [];
        this.showSampleRec = false;
      } else if (btn === '=') {
        this.showSampleRec = true;

        if (this.buttonColor === '#ffa100') {
          this.buttonColor = '#ff0300';
          this.buttonColor1 = '#ffa100';
        } else {
          this.buttonColor = '#ffa100';
          this.buttonColor1 = '#ff0300';
        }

        // IF LAST = character then remove that character
        while (this.result.includes('%')) {
          if (!this.result.includes('*')) { throw Error; }
          const index1 = this.result.indexOf('%');
          const index2 = this.result.substring(0, index1).lastIndexOf('*');
          const num = parseFloat(this.result.substring(index2 + 1, index1)) / 100;
          this.result = this.result.substring(0, index2 + 1) + num + this.result.substring(index1 + 1);
        }

        const answ = this.result.split('+');
        // if(this.result.includes('-')){
        //   answ=this.result.split('+').join('-').split('-');
        // }
        let temp;

        answ.forEach((element, index) => {
          let discAmt;
          if (!element.includes('-')) {
            discAmt = 0;
          } else {
            discAmt = parseFloat(element.substring(element.indexOf('-') + 1));
            answ[index] = element.substring(0, element.indexOf('-'));
            element = answ[index];
          }

          if (element.includes('*')) {
            console.log(this.discEval(element));
            const l = this.discEval(element).split('/');
            this.itemsqty.push(Number(l[1]));
            this.itemsprice.push(l[0]);
            discAmt += parseFloat(l[2]);
          } else if (element.includes('/')) {
            answ[index] = element.substring(0, element.indexOf('/'));
            this.itemsprice.push(answ[index]);
            temp = Math.round((1 / Number(element.substring(element.indexOf('/') + 1))) * 100) / 100;
            // console.log(temp);
            this.itemsqty.push(temp);
          } else {
            if (element !== '') {
              this.itemsprice.push(element);
              this.itemsqty.push(Number('1'));
              temp = 1;
            }
          }

          // console.log("ItemsPrice[index]: " + answ[index] + " Qty: " + temp);

          this.itemsDiscount.push((discAmt * 100) / (parseFloat(this.itemsprice[index]) * this.itemsqty[index]));
          // tslint:disable-next-line: max-line-length
          // console.log("Element: "+element+" DiscAmt: "+discAmt+" Discount: "+(discAmt * 100) / (parseFloat(this.itemsprice[index]) * this.itemsqty[index]))

          // this.itemsprice.push(
          //   {'name': "Blank_Item",
          //   'price': Number(element),
          //   'qty': 0,
          //   })
        });
        // flag_mode=0 means normal (sample reciept is generated)
        // if(flag_mode==1) then go to reciept page directly - call createRec()
        // if(flag_mode=2) then just use as calc - no reciept is generated

        console.log(this.itemsprice);
        console.log(this.itemsqty);
        // tslint:disable-next-line: no-eval
        this.result = eval(this.result) + '';
        this.lastsum = 0;

        // this.lastsum=Number(this.result);
        for (let i = 0; i < this.itemsprice.length; i++) {
          this.lastsum = this.lastsum + Number(this.itemsprice[i]) * this.itemsqty[i];
          console.log(this.lastsum);
        }

        this.createRec();
      } else if (btn === 'b') {
        this.result = this.result.substring(0, this.result.length - 1);
        this.lastchar = this.result.charAt(this.result.length - 1);
      } else if (btn === 'squareroot') {
        // tslint:disable-next-line: no-eval
        this.result = Math.sqrt(eval(this.result)) + '';
      } else if (btn === 'square') {
        // tslint:disable-next-line: no-eval
        this.result = eval('(' + this.result + ') * ( ' + this.result + ')');
      } else if (btn === 'reciproc') {
        // tslint:disable-next-line: no-eval
        this.result = eval(1 + '/ (' + this.result + ')');
      } else {
        if (Number(this.result) === this.lastsum) {
          this.result = this.result.substring(0, 0);
        }

        console.log('Lastchar: ' + this.lastchar + ' Result: ' + this.result);

        if (
          (btn === '+' || btn === '-' || btn === '*' || btn === '/' || btn === '%') &&
          (this.lastchar === '+' || this.lastchar === '-' || this.lastchar === '*' || this.lastchar === '/')
        ) {
          this.result = this.result = this.result.substring(0, this.result.length - 1);
        }
        if (this.lastchar === '%' && btn !== '+' && btn !== '-') {
          this.result = this.result = this.result.substring(0, this.result.length - 1);
        }
        this.lastchar = btn;
        this.result += btn;
      }
    } catch (err) {
      this.result = 'Input Error!';
      this.itemsprice = [];
      this.lastsum = 0;
      this.itemsqty = [];
      this.itemsDiscount = [];
      this.loitems = [];
      this.flag = true;
    } finally {
    }
  }

  discEval(expression) {
    const l = expression.split('*');
    let s = '';
    if (l.length === 3) {
      if (l[2] > 1) {
        console.log('Discount amount exceeds 1');
        throw Error;
      } else {
        l[2] = (1 - parseFloat(l[2])) * parseFloat(l[1]) * l[0];
        s = l.join('/');
      }
    } else if (l.length === 2) {
      if (parseFloat(l[1]) <= 1) {
        l[1] = (1 - parseFloat(l[1])) * parseFloat(l[0]);
        s = l[0] + '/1/' + l[1];
      } else {
        s = l[0] + '/' + l[1] + '/0';
      }
    } else {
      console.log(l.length + ' is length of temp list');
    }
    return s;
  }

  // addSalesExp() {
  //   const msg = this.translateConfigService.getTranslatedMessage("Add");
  //   const msg1 = this.translateConfigService.getTranslatedMessage("Sales");
  //   const msg2 = this.translateConfigService.getTranslatedMessage("Expense");
  //   const msg3 = this.translateConfigService.getTranslatedMessage("CANCEL");
  //   const alert = this.alertCtrl.create({
  //     //@ts-ignore
  //     title: msg.value,
  //     buttons: [
  //       {
  //         //@ts-ignore
  //         text: msg1.value,
  //         handler: () => {
  //           (this.navCtrl.parent as Tabs).select(1);
  //         },
  //       },
  //       {
  //         //@ts-ignore
  //         text: msg2.value,
  //         handler: () => {
  //           this.app.getRootNav().setRoot(ExpenseTransactionPage, { data: "ViewExp" });
  //         },
  //       },
  //       {
  //         //@ts-ignore
  //         text: msg3.value,
  //         role: "cancel",
  //       },
  //     ],
  //   });
  //   alert.present();
  // }
}
