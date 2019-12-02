import { Component, ViewChild } from "@angular/core";
import { NavController, Tabs, Events } from "ionic-angular";
import { AddProductPage } from "../addproduct/addproduct";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { AlertController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { GettersetterProvider } from "../../providers/gettersetter/gettersetter";
import { ToastController } from "ionic-angular";
import firebase from "firebase";
import { LoginPage } from "../login/login";
import { ProductListPage } from "../product-list/product-list";
import { AddProductCategoryPage } from "../add-product-category/add-product-category";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html",
})
export class DashboardPage {
  total: number;
  count: number;
  vat: number;

  // tab1Root = DashboardPage;
  // tab2Root = LoginPage;
  // tab3Root = LoginPage;

  @ViewChild("myTabs") tabRef: Tabs;

  ViewList = ProductListPage;
  AddProd = AddProductPage;
  AddCat = AddProductCategoryPage;

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    public getset: GettersetterProvider,
    private toastCtrl: ToastController,
    public events: Events,
  ) {
    this.getUserData();

    this.events.subscribe("cbUpdate:created", data => {
      this.getUserData();
    });
  }

  userdata: any = {
    business_address: "",

    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };
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

  ionViewDidLoad() {
    this.total = this.getset.getTotal();
    this.count = this.getset.getCount();
    this.vat = this.getset.getVat();
  }

  uploadbtn() {
    this.sp.backupStorage();
    const message = this.translateConfigService.getTranslatedMessage("Online backup ready");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      })
      .present();
  }

  cashbtn() {
    this.getUserData();
    const messsage = this.translateConfigService.getTranslatedMessage("Balance");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value + this.userdata.cash_balance,
        duration: 3000,
      })
      .present();
  }

  qrscan() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.sp.searchProduct(barcodeData.text).then(val => {
          if (val[0] != null) {
            const message = this.translateConfigService.getTranslatedMessage("Found Product");
            const toast = this.toastCtrl.create({
              // @ts-ignore
              message: message.value + " " + val[0].name,
              duration: 2000,
            });
            toast.present();
            this.count++;
            this.total += parseFloat(val[0].price);
            this.vat += parseFloat(val[0].price) * 0.05;
            this.getset.setTotal(this.total);
            this.getset.setCount(this.count);
            this.getset.setVat(this.vat);
          } else {
            const message = this.translateConfigService.getTranslatedMessage("Get Product!!!");
            const toast = this.toastCtrl.create({
              // @ts-ignore
              message: message.value,
              duration: 2000,
            });
            toast.present();
          }
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  addproduct() {
    this.navCtrl.push(AddProductPage);
  }

  manual() {
    const alertPop = this.alertCtrl.create({
      title: "Product",
      inputs: [
        {
          name: "code",
          placeholder: "Product Code",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Search",
          handler: data => {
            this.sp.searchProduct(data.code).then(val => {
              if (val[0] != null) {
                const message = this.translateConfigService.getTranslatedMessage("Found Product");
                const toast = this.toastCtrl.create({
                  // @ts-ignore
                  message: message.value + " " + val[0].name,
                  duration: 2000,
                });
                toast.present();
                this.count++;
                this.total += parseFloat(val[0].price);
                this.vat += parseFloat(val[0].price) * 0.05;
                this.getset.setTotal(this.total);
                this.getset.setCount(this.count);
                this.getset.setVat(this.vat);
              } else {
                const message = this.translateConfigService.getTranslatedMessage("Get Product!!!");
                const toast = this.toastCtrl.create({
                  // @ts-ignore
                  message: message.value,
                  duration: 2000,
                });
                toast.present();
              }
            });
          },
        },
      ],
    });
    alertPop.present();
  }

  reset() {
    this.getset.setTotal(0);
    this.getset.setCount(0);
    this.getset.setVat(0);
    this.total = 0;
    this.count = 0;
    this.vat = 0;
    const message = this.translateConfigService.getTranslatedMessage("POS reset to Zero");
    const toast = this.toastCtrl.create({
      // @ts-ignore
      message: message.value,
      duration: 2000,
    });
    toast.present();
  }
}
