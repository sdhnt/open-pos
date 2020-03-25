import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from '@ionic/angular';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { StorageProvider } from '../services/storage/storage';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.page.html',
  styleUrls: ['./update-stock.page.scss'],
})
export class UpdateStockPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    private view: ModalController,
    private gps: GeolocationService,
    private sp: StorageProvider,
    private events: EventService,
    private toastCtrl: ToastController,
  ) {
    this.gps
      .getCoordinates()
      .then(coordinates => {
        this.geolocation = coordinates;
      })
      .catch(error => {
        console.log(error);
      });
  }

  product;
  prodqty;
  prodcostitem;
  prodcost;
  expiryDate = new Date().toISOString();
  minDate = new Date().toISOString();
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
  currtime = new Date();
  geolocation: {};
  userdata: any;
  damage = 0;

  ngOnInit() {
    console.log('ionViewDidLoad UpdateStockPage');
    // this.product = this.navParams.get('data');
    this.getUserData();
  }

  ionViewWillLoad() {
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.view.dismiss('cancel');
  }

  updatebalance(edited: string) {
    if (
      this.prodcostitem !== null &&
      this.prodcostitem !== undefined &&
      this.prodqty !== undefined &&
      this.prodqty !== null &&
      (edited === 'prodcostitem' || edited === 'prodqty')
    ) {
      this.prodcost = this.prodqty * this.prodcostitem;
    } else if (
      this.prodcost !== null &&
      this.prodcost !== undefined &&
      this.prodqty !== undefined &&
      this.prodqty !== null &&
      (edited === 'prodcost' || edited === 'prodqty')
    ) {
      this.prodcostitem = this.prodcost / this.prodqty;
    }
  }

  subscriber(message: Observable<any>) {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async addinventoryexpense() {
    if (
      this.prodcost === null ||
      this.prodcost === undefined ||
      this.prodqty === undefined ||
      this.prodqty === null ||
      this.prodcostitem === null ||
      this.prodcostitem === undefined
    ) {
      const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Incomplete');
      const toast = await this.toastCtrl
        .create({
          message: this.subscriber(msg),
          duration: 2000,
        });
      toast.present();
    } else {
      console.log(this.prodqty + ' ' + this.prodcost);
      if (this.damage) {
      } else {
        this.damage = 0;
      }

      this.prodqty = this.prodqty - this.damage;
      const itemslist = [];
      const prodidlist = [];
      const pnllist = [];
      const discountlist = [];
      itemslist.push({ ...this.product, qty: this.prodqty });
      prodidlist.push(this.expiryDate);
      const dataexp = {
        itemslist,
        totalsum: this.prodcost * -1,
        prodidlist,
        pnllist,
        datetime: this.currtime,
        taxrate: 0,
        discountlist,
        discount: 0,
        totaldisc: this.prodcost * -1,
        totalatax: this.prodcost * -1,
        geolocation: this.geolocation,
      };
      const data1 = {
        ...this.product,
        cost:
          Math.round(
            ((parseFloat(this.product.cost) * parseFloat(this.product.stock_qty) + parseFloat(this.prodcost)) /
              (parseFloat(this.prodqty) + parseFloat(this.product.stock_qty))) *
            100,
          ) / 100,
        stock_qty: Number(this.product.stock_qty) + Number(this.prodqty),
      };
      await this.sp.updateProduct(data1, this.product.code).then(() => {
        this.events.emitProductUpdateCreated(0);
      });

      this.sp.storageReady().then(() => {
        console.log(dataexp);
        this.sp.addTransactions(dataexp);
        this.updateCb(this.prodcost).then(() => {
          this.events.emitCbUpdateCreated(0);
          console.log('update');
        });
      });
      this.view.dismiss('update');
      // REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well
    }
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

  async updateCb(negtransacsum) {
    this.getUserData();
    this.userdata.cash_balance = (Number(this.userdata.cash_balance) - Number(negtransacsum)).toString();
    this.sp.setUserDat(this.userdata);
  }
}
