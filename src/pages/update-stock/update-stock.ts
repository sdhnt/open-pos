import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, ToastController, Events } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { GeolocationService } from "../../providers/geolocation/geolocation.service";
import { StorageProvider } from "../../providers/storage/storage";

/**
 * Generated class for the UpdateStockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-update-stock",
  templateUrl: "update-stock.html",
})
export class UpdateStockPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    private view: ViewController,
    private gps: GeolocationService,
    private sp: StorageProvider,
    private events: Events,
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
  damage: number=0;

  ionViewWillLoad() {
    this.product = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdateStockPage");
    this.getUserData();
  }

  dismiss() {
    this.view.dismiss("cancel");
  }

  updatebalance(edited: string) {
    if (
      this.prodcostitem != null &&
      this.prodcostitem != undefined &&
      this.prodqty != undefined &&
      this.prodqty != null &&
      (edited == "prodcostitem" || edited == "prodqty")
    ) {
      this.prodcost = this.prodqty * this.prodcostitem;
    } else if (
      this.prodcost != null &&
      this.prodcost != undefined &&
      this.prodqty != undefined &&
      this.prodqty != null &&
      (edited == "prodcost" || edited == "prodqty")
    ) {
      this.prodcostitem = this.prodcost / this.prodqty;
    }
  }

  async addinventoryexpense() {
    if (
      this.prodcost == null ||
      this.prodcost == undefined ||
      this.prodqty == undefined ||
      this.prodqty == null ||
      this.prodcostitem == null ||
      this.prodcostitem == undefined
    ) {
      const msg = this.translateConfigService.getTranslatedMessage("Incomplete");
      this.toastCtrl
        .create({
          //@ts-ignore
          message: msg.value,
          duration: 2000,
        })
        .present();
    } else {
      console.log(this.prodqty + " " + this.prodcost);
      if(this.damage){

      }
      else{
        this.damage=0;
      }

      this.prodqty=this.prodqty-this.damage;
      const itemslist = [];
      const prodidlist = [];
      const pnllist = [];
      const discountlist = [];
      itemslist.push(this.product);
      prodidlist.push(this.expiryDate);
      const dataexp = {
        itemslist: itemslist,
        totalsum: this.prodcost * -1,
        prodidlist: prodidlist,
        pnllist: pnllist,
        datetime: this.currtime,
        taxrate: 0,
        discountlist: discountlist,
        discount: 0,
        totaldisc: this.prodcost * -1,
        totalatax: this.prodcost * -1,
        geolocation: this.geolocation,
      };
      const data1 = {
        code: this.product.code,
        name: this.product.name,
        price: this.product.price,
        wholesale_price: this.product.wholesale_price,
        cost:
          Math.round(
            ((parseFloat(this.product.cost) * parseFloat(this.product.stock_qty) + parseFloat(this.prodcost)) /
              (parseFloat(this.prodqty) + parseFloat(this.product.stock_qty))) *
              100,
          ) / 100,
        cat: this.product.cat,
        url: this.product.url,
        stock_qty: parseInt(this.product.stock_qty) + parseInt(this.prodqty),
      };
      await this.sp.updateProduct(data1, this.product.code).then(() => {
        this.sp.backupStorage();
        this.events.publish("productUpdate:created", 0);
      });

      this.sp.storageReady().then(() => {
        console.log(dataexp);
        this.sp.addTransactions(dataexp);
        this.updateCb(this.prodcost).then(() => {
          this.sp.backupStorage();
          this.events.publish("cbUpdate:created", 0);
          console.log("update");
        });
      });
      this.view.dismiss("update");
      //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well
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
          alert("Error: " + err);
        });
    });
  }

  async updateCb(negtransacsum) {
    this.getUserData();
    this.userdata.cash_balance = (parseInt(this.userdata.cash_balance) - parseInt(negtransacsum)).toString();
    this.sp.setUserDat(this.userdata);
  }
}
