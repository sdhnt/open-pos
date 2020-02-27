import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Events,
  Tabs,
  AlertController,
  Platform,
  App,
  ModalController,
  FabContainer,
} from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { SingleProductPage } from "../singleproduct/singleproduct";
import { AddProductPage } from "../addproduct/addproduct";
import { AddProductCategoryPage } from "../add-product-category/add-product-category";

/**
 * Generated class for the TransactionProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-transaction-product",
  templateUrl: "transaction-product.html",
})
export class TransactionProductPage {
  updateOrCreate = "Complete Sale";

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public sp: StorageProvider,
    public events: Events,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public app: App,
    public modal: ModalController,
  ) {
    this.event = false;
    this.showmanual = 0;
    this.itname = "";

    this.events.subscribe("newUser", data => {
      this.delay(500).then(() => {
        this.ionViewDidLoad();
        console.log("update this page");
      });
    });

    this.events.subscribe("productUpdate:created", async data => {
      this.delay(500).then(() => {
        this.ionViewDidLoad();
        console.log("update this page");
      });
    });

    this.events.subscribe("addRecProd:created", data => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      this.updateOrCreate = "Update Receipt";

      const tempdat = JSON.parse(data);
      this.getProducts();
      console.log(tempdat);

      tempdat.forEach(element => {
        this.event = true;

        // this.itemsname.push(element.name)
        // this.itemsprice.push(element.price);
        // this.itemsqty.push(element.qty)

        if (this.listProducts.length != 0) {
          this.listProducts.forEach(element1 => {
            if (element1.name == element.name) {
              element1.qty = element.qty;
              element1.discount = element.discount;
            }
          });
        }
        if (element.code == "000000") {
          this.calcitems.push(element);
        }
      });
      console.log(this.calcitems);
    });

    // this.events.subscribe("cbUpdate:created", async ()=>{
    //   await this.getProducts();
    // })

    this.events.subscribe("addSingleProd:created", async (data, index, fulldat) => {
      console.log("ENTERED!");
      console.log("Received 1 " + data + index);
      this.recitemslist = JSON.parse(fulldat);

      this.index = parseInt(index);

      const tempdat = JSON.parse(data);
      this.event1 = true;
      await this.getProducts();
      this.price = tempdat.price;
      this.filteredProductPrice(tempdat.price);
      //console.log(this.listProducts)
    });
  }

  doRefresh(refresher) {
    this.ionViewDidLoad();
    refresher.complete();
  }
  price;
  itname = "";

  navAdd(num: number, fab: FabContainer) {
    fab.close();
    if (num == 1) {
      this.navCtrl.push(AddProductPage);
    } else if (num == 2) {
      this.navCtrl.push(AddProductCategoryPage);
    }
  }

  updateName() {
    if (this.itname == "") {
      this.event1 = false;
      this.event = false;
      this.showmanual = 0;
      this.itname = "";
      this.ionViewDidLoad();
      (this.navCtrl.parent as Tabs).select(1);
    } else {
      console.log("Create Rec");
      const data1 = {
        code: "000000",
        cat: "NIL",
        stock_qty: 0,
        name: this.itname,
        price: this.price,
        qty: this.recitemslist[this.index].qty,
        discount: this.recitemslist[this.index].discount,
      };
      this.singleProduct(data1);
    }
  }

  ionViewDidLeave() {
    this.updateOrCreate = "Complete Sale";
  }

  calcitems: any = [];

  reset() {
    this.event1 = false;
    this.event = false;
    this.showmanual = 0;
    this.itname = "";
    this.ionViewDidLoad();
    (this.navCtrl.parent as Tabs).select(1);
  }

  selectedItem: any;
  index;
  recitemslist: any = [];
  event = false;
  event1 = false;
  searchprice: any;
  searchterm: any = "";
  selectedCat: any = [];
  icons: string[];
  items: Array<{ title: string; note: string; icon: string }>;
  listProducts: any;
  filteredList: any = [];
  listArray: any = [];
  listCat: any;

  ionViewDidLoad() {
    console.log("ionViewDidLoad TransactionProductPage");
    this.getProducts();
    this.getCategories();
  }

  buttonReset() {
    this.selectedCat = [];
  }

  getCategories() {
    this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
    });
  }

  tempprodlist: any = [{}];

  addUp(index) {
    this.listProducts[index].qty++;
  }
  addDown(index) {
    if (this.listProducts[index].qty > 0) {
      this.listProducts[index].qty--;
    }
  }
  sellProd(product) {
    product.qty = 1;
  }
  getProducts() {
    this.sp.storageReady().then(() => {
      this.sp
        .getProducts()
        .then(val => {
          if (val) {
            if (this.event != true) {
              this.listProducts = JSON.parse(val);
              console.log(this.listProducts);
              if (this.listProducts != null) {
                this.listProducts.forEach(element => {
                  element.qty = 0;
                });
              }
            }

            if (this.event1 != true) {
              if (this.listProducts != null) {
                this.filteredProduct();
              }
            }
          } else {
            this.getProducts();
          }
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  openCalc() {
    const helpModal = this.modal.create("AllTransactionPage");
    helpModal.present();
  }

  filteredProduct() {
    this.filteredList = this.listProducts.filter(item => {
      //console.log(this.searchterm);
      //console.log(item);
      if (item.name.toLowerCase().includes(this.searchterm.toLowerCase())) {
        if (this.selectedCat.length > 0) {
          for (let i = 0; i < this.selectedCat.length; i++) {
            if (this.selectedCat == null || item.cat.includes(this.selectedCat[i])) {
              return true;
            }
          }
        } else {
          return true;
        }
      }
    });
  }

  addwholesaledisc(val: string, product) {
    //product.discount = ((product.price - product.wholesale_price) / product.price) * 100;
    if (val == "r") {
      product.discount = null;
    } else {
      product.discount = ((product.price - product.wholesale_price) / product.price) * 100;
    }
  }
  remwholesaledisc(product) {
    product.discount = null;
  }

  singleProduct(product) {
    const tempqty = this.recitemslist[this.index].qty;
    let tempdisc = this.recitemslist[this.index].discount;
    if (this.price == product.price) {
      //console.log("Discount == Regular");
      tempdisc = this.recitemslist[this.index].discount;
    } else if (this.price == product.wholesale_price) {
      //console.log("discount==wholesale");

      const wholesaledisc = ((product.price - product.wholesale_price) / product.price) * 100;
      tempdisc = this.recitemslist[this.index].discount + wholesaledisc;
    }

    //const tempdsc = this.recitemslist[this.index].disc;
    //check if search w wholesale or retail price
    this.recitemslist[this.index] = product;

    this.recitemslist[this.index].qty = tempqty;
    this.recitemslist[this.index].discount = tempdisc;

    const tempJSON = { itemslist: this.recitemslist };

    const myObjStr = JSON.stringify(tempJSON);

    this.showmanual = 0;
    this.itname = "";
    this.ionViewDidLoad();
    (this.navCtrl.parent as Tabs).select(1);
    this.delay(300).then(any => {
      this.events.publish("genRec:created", myObjStr);
      console.log("Sent: " + myObjStr);
      this.getProducts();
      this.event = false;
      this.event1 = false;
    });

    this.getProducts();
  }

  singleitemname = "";

  setfilter(price) {
    return new Promise(async resolve => {
      this.filteredList = await this.listProducts.filter(item => {
        console.log(item.price + " and " + price);

        if (item.price == price || item.wholesale_price == price) {
          return true;
        } else {
          false;
        }
      });
      resolve();
    });
  }
  showmanual = 0;

  filteredProductPrice(price) {
    this.setfilter(price).then(() => {
      if (this.filteredList.length == 0) {
        this.showmanual = 1;
        console.log("No Items");

        // create event and send back
        //at other end if event received,

        //   const message1 = this.translateConfigService.getTranslatedMessage("Alert!");
        //   const message20 = this.translateConfigService.getTranslatedMessage("There is no item with ");
        //   const message21 = this.translateConfigService.getTranslatedMessage(
        //     " price in database. Please type the item name:",
        //   );
        //   const message3 = this.translateConfigService.getTranslatedMessage("Enter Name Here");
        //   const message4 = this.translateConfigService.getTranslatedMessage("Cancel");
        //   const message5 = this.translateConfigService.getTranslatedMessage("Update Receipt");

        //   const alert = this.alertCtrl
        //     .create({
        //       // @ts-ignore
        //       title: message1.value, //translate this
        //       // @ts-ignore
        //       message: message20.value + price + message21.value,
        //       enableBackdropDismiss: true,
        //       inputs: [
        //         {
        //           name: "singleitemname",
        //           // @ts-ignore
        //           placeholder: message3.value,
        //         },
        //       ],

        //       buttons: [
        //         {
        //           // @ts-ignore
        //           text: message4.value,
        //           role: "cancel",
        //           handler: data => {

        //         this.event1 = false;
        //         this.event = false;

        //        //(this.navCtrl.parent as Tabs).select(2).catch(err=>{
        //        //  console.log("ERRORZONE"+ err)
        //       // });

        //           },
        //         },
        //         {
        //           // @ts-ignore
        //           text: message5.value,
        //           handler: data => {
        //   if (data.singleitemname == "") {
        //     this.event1 = false;
        //     this.event = false;
        //    //(this.navCtrl.parent as Tabs).select(2);
        //   } else {
        //     console.log("Create Rec");
        //     const data1 = {
        //       code: "000000",
        //       cat: "NIL",
        //       stock_qty: 0,
        //       name: data.singleitemname,
        //       price: price,
        //       qty: this.recitemslist[this.index].qty,
        //       discount: this.recitemslist[this.index].discount,
        //     };
        //     this.singleProduct(data1);
        //   }
        // },
        //         },
        //       ],
        //     })
        //     .present()
      }
    });
  }

  datlist: any = [];

  createRec() {
    //console.log("bangin");

    const tempJSON = { itemslist: [] };

    this.listProducts.forEach(element => {
      if (element.qty > 0) {
        tempJSON.itemslist.push(element);
        console.log("pushed" + element);
      }
    });

    if (this.calcitems.length > 0) {
      console.log(this.calcitems);
      console.log(this.calcitems.length);
      this.calcitems.forEach(element => {
        tempJSON.itemslist.push(element);
      });
    }

    if (tempJSON.itemslist.length == 0) {
      this.toastCtrl.create({ message: "Please choose atleast 1 item to add to receipt", duration: 2000 }).present();
    } else {
      tempJSON.itemslist.forEach(element => {
        if (element.discount) {
        } else {
          element.discount = 0;
        }
      });

      this.listProducts = [];
      this.calcitems = [];
      this.listArray = [];
      this.recitemslist = [];

      console.log(this.datlist);
      const myObjStr = JSON.stringify(tempJSON);

      (this.navCtrl.parent as Tabs).select(1);
      this.delay(300).then(any => {
        this.events.publish("genRec:created", myObjStr);

        console.log("Sent: " + myObjStr);
        this.getProducts();
        this.event = false;
        this.event1 = false;
        //this.listProducts=
        //your task after delay.
      });

      this.getProducts();
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  viewEditProduct(data) {
    console.log(data);
    this.navCtrl.push(SingleProductPage, { data: data });
  }
}
