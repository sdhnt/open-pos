import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateConfigService } from '../services/translation/translate-config.service'
import { PopoverController, ToastController } from '@ionic/angular'
import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import { EventService } from '../services/event.service';
import { Router, NavigationExtras } from '@angular/router';
import { AdditionalChargePage } from '../income-transaction/income-transaction.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageProvider } from '../services/storage/storage';

@Component({
  selector: 'app-add-item-popover',
  templateUrl: './add-item-popover.page.html',
  styleUrls: ['./add-item-popover.page.scss'],
})
export class AddItemPopoverPage implements OnInit {
  newMessage1: any;
  newMessage2: any;
  newMessage3: any;
  newMessage4: any;
  newMessage5: any;
  datastore: any;
  showrec: boolean = true;
  lastsum: number;
  lastsumAfterIndividualDiscount: number;
  lastsumdisc: number;
  discount: number;
  lastsumtax: number;
  taxrate: number;
  displayManual = 0;
  newItemName = '';
  newUnitPrice: number = null;
  temp: any;

  constructor(public toastCtrl: ToastController,public sp: StorageProvider,private barcodeScanner: BarcodeScanner,public router: Router,public events: EventService, private popover1: PopoverController, private translateConfigService: TranslateConfigService) { }

  async ngOnInit() {
    const message1: Observable<any> = await this.translateConfigService.getTranslatedMessage('CANCEL ');
    const message2: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Calculator');
    const message3: Observable<any> = await this.translateConfigService.getTranslatedMessage('Scan Barcode');
    const message4: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Product List');
    const message5: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add Additional Charges');

    this.newMessage1 = this.subscriber(message1)
    this.newMessage2 = this.subscriber(message2)
    this.newMessage3 = this.subscriber(message3)
    this.newMessage4 = this.subscriber(message4)
    this.newMessage5 = this.subscriber(message5)
    console.log(
      this.newMessage1,
      this.newMessage2,
      this.newMessage3,
      this.newMessage4,
      this.newMessage5
    );

    this.events.genRecCreated.subscribe(data => {
      console.log('ENTERED!');
      console.log('Received 0 ' + typeof JSON.parse(data));
      this.datastore = JSON.parse(data);
      this.showrec = true;
      console.log(data)
      // Here if 2 items have same code then coagulate/merge - price is always full price, merge discounts accordingly

      this.datastore.itemslist.map((item, index) => {
        this.datastore.itemslist.map((item1, index1) => {
          if (index1 !== index) {
            if (item.code === item1.code && item.price === item1.price && item.name === item1.name) {
              // ALL the 0000 might get combined
              const totaldiscsumx = (item.price * (item.discount * item.qty + item1.discount * item1.qty)) / 100;
              console.log('Total Disc Sum ' + totaldiscsumx);
              item.qty = item.qty + item1.qty;
              item.discount = (totaldiscsumx / (item.price * item.qty)) * 100; // new qty

              const rem = this.datastore.itemslist.splice(index1, 1);
              // remove item1, merge qty and manage discount as avg
            }
          }
        });
      });
      this.updateRec();
    });
  }


  updateRec() {
    this.lastsum = 0;
    let totalDiscount = 0,
      totalIndividualDiscount = 0;
    this.datastore.itemslist.forEach(item => {
      if (item.discount !== 0) {
        totalIndividualDiscount += ((item.price * parseFloat(item.discount)) / 100) * item.qty;
        console.log(((parseFloat(item.price) * parseFloat(item.discount)) / 100) * item.qty);
      }
      this.lastsum += item.price * item.qty;
    });
    totalDiscount += totalIndividualDiscount;
    console.log(this.lastsum + ' ' + totalDiscount);
    this.lastsumAfterIndividualDiscount = Math.round((this.lastsum - totalIndividualDiscount) * 100) / 100;
    console.log(this.lastsum + ' ' + this.lastsumAfterIndividualDiscount);
    this.lastsumdisc = Math.round((this.lastsum - totalDiscount) * ((100 - this.discount) / 100) * 100) / 100;
    this.lastsumtax = Math.round(this.lastsumdisc * (1.0 + this.taxrate / 100) * 100) / 100;
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }

  async addCalc() {
    console.log(this.datastore)
    // (this.navCtrl.parent as Tabs).select(0);
    const helpModal = await this.popover1.create({ component: AllTransactionPage });
    helpModal.present();
    this.delay(300).then(() => {
      this.events.emitAddRecCalcCcreated(this.datastore.itemslist); // SEND ITEMS PRICE

      console.log('Sent: 1332 ');

      // your task after delay.
    });
  }

  addProdList() {
    const naviExtra: NavigationExtras = {
      queryParams: {
        itemList: this.datastore.itemslist
      }
    };
    this.router.navigate(['/home/transaction-product']);
    // (this.navCtrl.parent as Tabs).select(2);
    console.log(this.datastore.itemslist);
    this.delay(300).then(() => {
      this.events.emitAddRecProdCreated(this.datastore.itemslist);

      console.log('Sent: 1331 ');

      // your task after delay.
    });
  }

  async dispM() {
    console.log('DisM = ' + this.displayManual);
    if (this.showrec) {
      if (this.displayManual === 0) {
        this.displayManual = 1;
      } else {
        this.displayManual = 0;
      }
      const popover = await this.popover1.create({
        // tslint:disable-next-line: no-use-before-declare
        component: AdditionalChargePage,
        componentProps: {
          newItemName: this.newItemName,
          newUnitPrice: this.newUnitPrice,
          displayManual: 1
        }
      });
      popover.present();
      popover.onDidDismiss().then(data => {
        console.log(data);
        this.datastore.itemslist.push(data.data);
        this.updateRec();
      });
    }
  }

  qrscan() {
    let curprod;
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log(barcodeData);
        this.sp.searchProduct(barcodeData.text).then(async val => {
          console.log(val);
          if (val && val[0] != null) {
            curprod = val[0];
            const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Found Product');
            const toast = await this.toastCtrl.create({
              message: this.subscriber(message) + ' ' + val[0].name,
              duration: 2000,
            });
            toast.present();
            curprod.qty = 1;
            this.temp = curprod;

            // addQty(index){
            //   //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
            //   this.datastore.itemslist[index].qty=Number(this.datastore.itemslist[index].qty)+1;

            //   this.lastsum=0;
            //   for(let i = 0; i < this.datastore.itemslist.length; i++){
            //     this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
            //   }
            // }
            curprod.discount = 0;
            this.datastore.itemslist.push(curprod);
            this.showrec = true;
            // this.lastsum=this.lastsum+curprod.price;
            this.updateRec();
          } else {
            const message: Observable<any> = this.translateConfigService.getTranslatedMessage('No Product!!!');
            const toast = await this.toastCtrl.create({
              message: this.subscriber(message),
              duration: 2000,
            });
            toast.present();
          }
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  goBack(){
    this.popover1.dismiss();
  }
}