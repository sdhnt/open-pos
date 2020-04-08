import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  AlertController,
  Platform,
  ModalController,
} from '@ionic/angular';
import { StorageProvider } from '../services/storage/storage';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { Router, NavigationExtras } from '@angular/router';
import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { SheetStates } from 'ionic-custom-bottom-sheet';

@Component({
  selector: 'app-transaction-product',
  templateUrl: './transaction-product.page.html',
  styleUrls: ['./transaction-product.page.scss'],
})
export class TransactionProductPage implements OnInit {
  updateOrCreate;
  price;
  itname = '';

  calcitems: any = [];

  selectedItem: any;
  index;
  recitemslist: any = [];
  event = false;
  event1 = false;
  searchprice: any;
  searchterm: any = '';
  selectedCat: any = [];
  icons: string[];
  items: Array<{ title: string; note: string; icon: string }>;
  listProducts: any;
  filteredList: any = [];
  listArray: any = [];
  listCat: any;

  tempprodlist: any = [{}];

  singleitemname = '';
  showmanual = 0;

  datlist: any = [];
  public BottomSheetState: SheetStates = SheetStates.Closed;
  showSellButton: boolean;
  constructor(
    private translateConfigService: TranslateConfigService,
    public sp: StorageProvider,
    public events: EventService,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public modal: ModalController,
    private router: Router
  ) {
    this.event = false;
    this.showmanual = 0;
    this.itname = '';
    this.translateConfigService.getTranslatedMessage('Complete Sale').subscribe((res) => {
      this.updateOrCreate = res;
    });

    this.events.newUser.subscribe(data => {
      this.delay(500).then(() => {
        this.ngOnInit();
        console.log('update this page');
      });
    });

    this.events.productUpdateCreated.subscribe(async data => {
      this.delay(500).then(() => {
        this.ngOnInit();
        console.log('update this page');
      });
    });

    this.events.addRecProdCreated.subscribe(async data => {
      if (data) {
        console.log('ENTERED!');
        console.log('Received 0 ', data);
        this.translateConfigService.getTranslatedMessage('Update Receipt').subscribe((res) => {
          this.updateOrCreate = res;
        });

        const tempdat = data;
        await this.getProducts();
        console.log(tempdat);

        tempdat.forEach(element => {
          this.event = true;

          // this.itemsname.push(element.name)
          // this.itemsprice.push(element.price);
          // this.itemsqty.push(element.qty)

          if (this.listProducts.length !== 0) {
            this.listProducts.forEach(element1 => {
              if (element1.name === element.name) {
                element1.qty = element.qty;
                element1.discount = element.discount;
              }
            });
          }
          if (element.code === '000000') {
            this.calcitems.push(element);
          }
        });
        console.log(this.calcitems);
      }
    });

    // this.events.subscribe("cbUpdate:created", async ()=>{
    //   await this.getProducts();
    // })

    this.events.addSingleProdCreated.subscribe(async (res) => {
      console.log(res);
      const { item, index, itemList } = res;
      console.log('ENTERED!');
      console.log('Received 1 ', item, index);
      this.recitemslist = itemList;

      this.index = Number(index);

      const tempdat = item;
      this.event1 = true;
      await this.getProducts();
      this.price = tempdat.price;
      this.filteredProductPrice(Number(tempdat.price));
      // console.log(this.listProducts)
    });
  }

  public openSheet() {
    this.BottomSheetState = SheetStates.Opened;
  }

  public closeSheet() {
    this.BottomSheetState = SheetStates.Closed;
  }

  public StateChanged(event) {
    if (event === SheetStates.Closed) {
      console.log('Sheet Closed');
    }
  }

  ngOnInit() {
    this.translateConfigService.getTranslatedMessage('Complete Sale').subscribe((res) => {
      this.updateOrCreate = res;
    });
    console.log('ionViewDidLoad TransactionProductPage');
  }

  ionViewDidEnter() {
    this.getCategories();
    this.getProducts();
    this.events.emitFabButton('transaction-product');
  }

  ionViewWillLeave() {
    // this.events.emitFabButton('');
    this.showSellButton = false;
  }
  ionViewDidLoad() {
    this.translateConfigService.getTranslatedMessage('Complete Sale').subscribe((res) => {
      this.updateOrCreate = res;
    });
  }

  doRefresh(refresher) {
    this.ngOnInit();
    refresher.target.complete();
  }

  navAdd(num: number) {
    this.BottomSheetState = SheetStates.Closed;
    if (num === 1) {
      this.router.navigate(['/home/addproduct']);
      // this.navCtrl.push(AddProductPage);
    } else if (num === 2) {
      this.router.navigate(['/home/add-product-category']);
      // this.navCtrl.push(AddProductCategoryPage);
    }
  }

  updateName() {
    if (this.itname === '') {
      this.event1 = false;
      this.event = false;
      this.showmanual = 0;
      this.itname = '';
      this.ngOnInit();
      this.router.navigate(['/home/income-transaction']);
      // (this.navCtrl.parent as Tabs).select(0);
    } else {
      console.log('Create Rec');
      const data1 = {
        code: '000000',
        cat: 'NIL',
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
    this.translateConfigService.getTranslatedMessage('Complete Sale').subscribe((res) => {
      this.updateOrCreate = res;
    });
  }

  subscriber(message: Observable<any>) {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  reset() {
    this.event1 = false;
    this.event = false;
    this.showmanual = 0;
    this.itname = '';
    this.ngOnInit();
    this.router.navigate(['/home/income-transaction']);
    // (this.navCtrl.parent as Tabs).select(0);
  }

  async buttonReset() {
    // $('#select-col-1').css({
    //   'max-width': '100%'
    // });
    await console.log($('#select-col-1').hasClass('item-selected'));
    await $('#select-col-1').removeClass('item-selected');
    await console.log($('#select-col-1').hasClass('item-selected'));
    this.selectedCat = [];
  }

  getCategories() {
    this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
    });
  }

  addUp(index) {
    this.listProducts[index].qty++;
    this.listProducts.forEach(product => {
      if (product.qty > 0) {
        this.showSellButton = true;
      }
    });
  }
  addDown(index) {
    if (this.listProducts[index].qty > 0) {
      this.listProducts[index].qty--;
    }
    let qtySum = 0;
    this.listProducts.forEach(product => {
      qtySum += Number(product.qty);
      console.log(qtySum);
    });

    if (qtySum === 0) {
      this.showSellButton = false;
    }
  }
  sellProd(product) {
    this.showSellButton = true;
    product.qty = 1;
  }
  async getProducts() {
    this.sp.storageReady().then(() => {
      this.sp
        .getProducts()
        .then(val => {
          if (val) {
            if (this.event !== true) {
              this.listProducts = JSON.parse(val);
              console.log(this.listProducts);
              if (this.listProducts !== null) {
                this.listProducts.forEach(element => {
                  element.qty = 0;
                });
              }
            }

            if (this.event1 !== true) {
              if (this.listProducts !== null) {
                this.filteredProduct();
              }
            }
          } else {
            this.getProducts();
          }
        })
        .catch(err => {
          alert('Error: ' + err);
        });
    });
  }

  async openCalc() {
    const helpModal = await this.modal.create({
      component: AllTransactionPage
    });
    helpModal.present();
  }

  filteredProduct(option?) {
    if (option && !$('#select-col-1').hasClass('item-selected')) {
      // $('#select-col-1').css({
      //   'max-width': '70%'
      // });
      $('#select-col-1').addClass('item-selected');
    }
    this.filteredList = this.listProducts.filter(item => {
      // console.log(this.searchterm);
      // console.log(item);
      if (item.name.toLowerCase().includes(this.searchterm.toLowerCase())) {
        if (this.selectedCat.length > 0) {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < this.selectedCat.length; i++) {
            if (this.selectedCat === null || item.cat.includes(this.selectedCat[i])) {
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
    // product.discount = ((product.price - product.wholesale_price) / product.price) * 100;
    if (val === 'r') {
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
    if (this.price === product.price) {
      // console.log("Discount === Regular");
      tempdisc = this.recitemslist[this.index].discount;
    } else if (this.price === product.wholesale_price) {
      // console.log("discount==wholesale");

      const wholesaledisc = ((product.price - product.wholesale_price) / product.price) * 100;
      tempdisc = this.recitemslist[this.index].discount + wholesaledisc;
    }

    // const tempdsc = this.recitemslist[this.index].disc;
    // check if search w wholesale or retail price
    this.recitemslist[this.index] = product;

    this.recitemslist[this.index].qty = tempqty;
    this.recitemslist[this.index].discount = tempdisc;

    const tempJSON = { itemslist: this.recitemslist };

    const myObjStr = JSON.stringify(tempJSON);

    this.showmanual = 0;
    this.itname = '';
    this.ngOnInit();
    this.router.navigate(['/home/income-transaction']);
    // (this.navCtrl.parent as Tabs).select(0);
    this.delay(300).then(() => {
      this.events.emitGenRecCreated(myObjStr);
      console.log('Sent: ' + myObjStr);
      this.getProducts();
      this.event = false;
      this.event1 = false;
    });

    this.getProducts();
  }

  setfilter(price) {
    return new Promise(async resolve => {
      console.log(this.listProducts);
      this.filteredList = await this.listProducts.filter(item => {
        // tslint:disable-next-line: triple-equals
        console.log(item.price, item.price == price || item.wholesale_price == price, price);
        // tslint:disable-next-line: triple-equals
        if (item.price == price || item.wholesale_price == price) {
          return true;
        } else {
          return false;
        }
      });
      console.log(this.filteredList);
      resolve();
    });
  }

  filteredProductPrice(price) {
    this.setfilter(price).then(() => {
      if (this.filteredList.length === 0) {
        this.showmanual = 1;
        console.log('No Items');

        // create event and send back
        // at other end if event received,

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

        //       title: message1.value, //translate this

        //       message: message20.value + price + message21.value,
        //       enableBackdropDismiss: true,
        //       inputs: [
        //         {
        //           name: "singleitemname",

        //           placeholder: message3.value,
        //         },
        //       ],

        //       buttons: [
        //         {

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

        //           text: message5.value,
        //           handler: data => {
        //   if (data.singleitemname === "") {
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

  async createRec() {
    // console.log("bangin");

    const tempJSON = { itemslist: [] };

    this.listProducts.forEach(element => {
      if (element.qty > 0) {
        tempJSON.itemslist.push(element);
        console.log('pushed' + element);
      }
    });

    if (this.calcitems.length > 0) {
      console.log(this.calcitems);
      console.log(this.calcitems.length);
      this.calcitems.forEach(element => {
        tempJSON.itemslist.push(element);
      });
    }

    if (tempJSON.itemslist.length === 0) {
      const toast = await this.toastCtrl.create({ message: 'Please choose atleast 1 item to add to receipt', duration: 2000 });
      toast.present();
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
      this.router.navigate(['/home/income-transaction']);
      // (this.navCtrl.parent as Tabs).select(0);
      this.delay(300).then(() => {
        this.events.emitGenRecCreated(myObjStr);

        console.log('Sent: ' + myObjStr);
        this.getProducts();
        this.event = false;
        this.event1 = false;
        // this.listProducts=
        // your task after delay.
      });

      this.getProducts();
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }

  viewEditProduct(data) {
    console.log(data);
    const naviExtra: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    };
    this.router.navigate(['/home/singleproduct'], naviExtra);
    // this.navCtrl.push(SingleProductPage, { data });
  }
}
