import { Component, OnInit } from '@angular/core';
import {
  NavController,
  NavParams,
  ToastController,
  ModalController,
  AlertController,
  LoadingController,
  Platform,
  PopoverController
} from '@ionic/angular';
import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import * as firebase from 'firebase';
import { StorageProvider } from '../services/storage/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { TransactionHomePage } from '../transaction-home/transaction-home.page';
import { PrinterProvider } from './../services/printer/printer';
import { commands } from './../services/printer/printer-commands';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import html2canvas from 'html2canvas';
import download from 'downloadjs';
// import { Base64ToGallery, Base64ToGalleryOptions } from "@ionic-native/base64-to-gallery";
// import { File } from "@ionic-native/file";
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { ContactsPage } from '../contacts/contacts.page';
import { ExpenseGeneralPage } from '../expense-general/expense-general.page';
import { Router, NavigationExtras } from '@angular/router';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import domtoimage from 'dom-to-image';
import { SheetStates } from 'ionic-custom-bottom-sheet';
import { AddItemPopoverPage } from '../add-item-popover/add-item-popover.page';
import { SelectPrinterPopoverPage } from '../select-printer-popover/select-printer-popover.page';
@Component({
  selector: 'app-income-transaction',
  templateUrl: './income-transaction.page.html',
  styleUrls: ['./income-transaction.page.scss'],
})
export class IncomeTransactionPage implements OnInit {
  taxbtn = 0;
  showrec = false;

  lastTransaction: any;
  isReady: boolean;

  userdata: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    // tslint:disable-next-line: max-line-length
    logo_url: 'https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-9/79674109_100715951430298_615106696234139648_n.png?_nc_cat=109&_nc_ohc=2pdu1s1LRmoAX-04NCO&_nc_ht=scontent.fhkg10-1.fna&oh=70fea5a886837de2b9cf4aaf4a4112a8&oe=5EF6F085',
    language: 'en',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };

  discount = 0.0;
  lastsumdisc = 0.0;
  taxrate = 0.0;
  contact = '';
  temp;

  file: any;
  discbtn = 0;

  result = '';
  displayManual = 0;
  datastore = { itemslist: [] };
  // tslint:disable-next-line: variable-name
  flag_mode = 0;
  showSampleRec = true;
  itemsprice: string[] = [];
  ctr = 0;
  lastsum = 0;
  lastsumAfterIndividualDiscount = 0;
  lastchar = 'NIL';
  lastdigit = 0;

  newItemName = '';
  newUnitPrice: number = null;
  newUnitQty = 1;
  newItemCat = '';
  newItemDiscount: number = null;

  listProducts: any;
  filteredList: any;
  listArray: any = [];
  listCat: any;
  lastsumtax;

  prodidlist: any = [];
  pnllist: any = [];
  datetime = new Date();
  // tslint:disable-next-line: variable-name
  tax_vat: any = [];
  geolocation: {};

  disableDownload = false;
  disableShare = false;
  discountlist = [];

  ///////////////////////

  receipt: any;
  inputData: any = {};
  public BottomSheetState: SheetStates = SheetStates.Closed;
  constructor(
    public events: EventService,
    public camera: Camera,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner,
    private printer: PrinterProvider,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private gps: GeolocationService,
    private modal: ModalController,
    private popover: PopoverController,
    private social: SocialSharing,
    private photoLibrary: PhotoLibrary,
    private router: Router,
    private platform: Platform
  ) {
    this.isReady = false;
    // const nav = app._appRoot._getActivePortal() || app.getActiveNav();
    // const activeView = nav.getActive();
    // if (activeView != null) {
    //   if (activeView.isOverlay) {
    //     console.log("Alert Prev");
    //     activeView.dismiss();
    //   }
    // }
    // console.log("Recieved -1" + this.navParams.get('itemslist'));
    this.getUserData();
    this.gps
      .getCoordinates()
      .then(coordinates => {
        this.geolocation = coordinates;
      })
      .catch(error => {
        console.log(error);
      });

    this.events.addNewItemFunc.subscribe((res) => {
      console.log(res);
      switch (res) {
        case 'calc':
          this.addCalc();
          break;

        case 'prod':
          this.addProdList();
          break;

        case 'additional':
          this.dispM();
          break;

        case 'barcode':
          this.qrscan();
          break;

        default:
          break;
      }
    });
    this.events.genRecCreated.subscribe(data => {
      console.log('ENTERED!');
      console.log('Received 0 ' + typeof JSON.parse(data));
      this.datastore = JSON.parse(data);
      this.showrec = true;

      // Here if 2 items have same code then coagulate/merge - price is always full price, merge discounts accordingly
      console.log(this.datastore.itemslist);
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

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }

  async printOldRec(transac) {
    console.log(transac);
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    result
      .codepage('cp936')
      .align('center')
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .line(this.userdata.business_name)
      .raw(commands.TEXT_FORMAT.TXT_NORMAL)
      .line(this.userdata.business_address)
      .line(this.userdata.businesstype)
      .line(this.userdata.ph_no)
      .newline()
      .line(this.getDateTime(transac.datetime))
      .align('center')
      .text(commands.HORIZONTAL_LINE.HR_58MM)
      .newline();

    result
      // .raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
      // .raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
      .text('Item Name           ') // 10 char + 10 char
      // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
      .text('Qty ') // 4 char
      // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
      .text('Price   ') // 8 char
      .newline()
      .newline();

    transac.itemslist.forEach(element => {
      element.qty = element.qty.toString();
      element.price = element.price.toString();
      // autotab system
      if (element.name.length < 20) {
        for (let i = element.name.length; i < 20; i++) {
          element.name += ' ';
        }
      } else {
        element.name = element.name.substring(0, 20);
      }

      if (element.qty < 10000) {
        for (let i = element.qty.length; i < 4; i++) {
          element.qty += ' ';
        }
      } else {
        element.qty.substring(0, 4);
      }

      if (element.price < 10000000) {
        for (let i = element.price.length; i < 8; i++) {
          element.price += ' ';
        }
      } else {
        element.price.substring(0, 8);
      }

      result

        .text(element.name) // 19 + space
        // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.qty) // 4+ space
        // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.price) // 7+space

        .newline();

      if (parseFloat(element.discount) !== 0) {
        result
          .text('Discount (' + Math.round(parseFloat(element.discount) * 100) / 100 + '%) : ')

          .text('-' + Math.round((element.price * element.discount * element.qty) / 100))
          .newline();
      }
    });
    const spacer1 = '                  ';
    const spacer2 = '    ';
    const spacer3 = '          ';
    result.newline();
    result.align('center').line(spacer1 + 'Total:' + transac.totalsum);
    if (this.lastsumAfterIndividualDiscount !== this.lastsumdisc) {
      result.line(spacer2 + 'After Discount (' + Math.round(this.discount * 100) / 100 + '%): ' + transac.totaldisc);
    }
    if (this.lastsumAfterIndividualDiscount !== this.lastsumtax) {
      result.line(spacer3 + 'After Tax (' + Math.round(this.taxrate * 100) / 100 + '%): ' + transac.totalatax);
    }

    result
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .newline()
      .line('')
      .newline()
      .cut('full');
    this.mountAlertBt(result.encode());
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

  getLastTransaction() {
    this.sp.storageReady().then(() => {
      this.sp.getTransactions().then(val => {
        let listOfTransactions: any[] = JSON.parse(val);
        listOfTransactions = listOfTransactions.reverse();
        this.lastTransaction = listOfTransactions[0];
        this.isReady = true;
      });
    });
  }

  async addNewItembtn() {
    this.BottomSheetState = SheetStates.Closed;
    const addItem = await this.popover.create({
      component: AddItemPopoverPage
    });
    addItem.present();
    addItem.onDidDismiss().then(res => {
      console.log(res);
      if (res.data) {
        switch (res.data) {
          case 'calc':
            this.addCalc();
            break;

          case 'prod':
            this.addProdList();
            break;

          case 'additional':
            this.dispM();
            break;

          case 'barcode':
            this.qrscan();
            break;

          default:
            break;
        }
      }
    });
    // const message1: Observable<any> = await this.translateConfigService.getTranslatedMessage('CANCEL ');
    // const message2: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Calculator');
    // const message3: Observable<any> = await this.translateConfigService.getTranslatedMessage('Scan Barcode');
    // const message4: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Product List');
    // const message5: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add Additional Charges');
    // console.log({
    //   message1,
    //   message2,
    //   message3,
    //   message4,
    //   message5
    // });

    // const subscriber = (message: Observable<any>) => {
    //   let msg;
    //   message.subscribe(res => {
    //     msg = res;
    //   });
    //   return msg;
    // };
    // const alert = await this.alertCtrl
    //   .create({
    //     header: 'Add From', // translate this
    //     backdropDismiss: true,
    //     cssClass: 'addItemAlert',
    //     buttons: [
    //       {
    //         text: subscriber(message2),
    //         handler: () => {
    //           this.addCalc();
    //         },
    //       },
    //       {
    //         text: subscriber(message3),
    //         handler: () => {
    //           this.qrscan();
    //         },
    //       },
    //       {
    //         text: subscriber(message4),
    //         handler: () => {
    //           this.addProdList();
    //         },
    //       },
    //       {
    //         text: subscriber(message5),
    //         handler: () => {
    //           this.dispM();
    //         },
    //       },
    //       {
    //         text: subscriber(message1),
    //         role: 'cancel',
    //       },
    //     ],
    //   });
    // alert.present();
  }

  async addNewExp() {
    this.BottomSheetState = SheetStates.Closed;
    const expModal = await this.modal.create({ component: ExpenseGeneralPage });
    expModal.present();
  }

  updateRec() {
    this.lastsum = 0;
    let totalDiscount = 0,
      totalIndividualDiscount = 0;
    console.log(this.datastore.itemslist);
    this.datastore.itemslist.forEach(item => {
      console.log(item);
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

  upload_new() {
    // LET REF be tied to a particular product- we save the url in the products db
    const ref = firebase
      .storage()
      .ref()
      .child('prodImages/' + this.userdata.id + 'logo')
      .putString(this.file.split(',')[1], 'base64')
      .then(snap => {
        snap.ref.getDownloadURL().then(async (url) => {
          console.log('Uploaded!');
          // do something with url here
          this.userdata.logo_url = url;
          const toast = await this.toastCtrl.create({ message: 'Please wait- saving...', duration: 2000 });
          toast.present();
          this.sp.setUserDat(this.userdata).then(async () => {
            const toast1 = await this.toastCtrl.create({ message: 'Saved!', duration: 2000 });
            toast1.present();
          });
          // this.temp = url;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  launchCamera() {
    return new Promise((resolve, reject) => {
      const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        targetHeight: 256,
        targetWidth: 256,
        allowEdit: true,
      };
      this.camera
        .getPicture(options)
        .then(pic => {
          this.file = 'data:image/png;base64,' + pic;
          // console.log(base64Image)
          resolve();
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  async editRecTop() {
    // const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    // const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Save');
    // const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('Edit Receipt Details');
    // const message3: Observable<any> = this.translateConfigService.getTranslatedMessage('Enter Information');

    // const message4: Observable<any> = this.translateConfigService.getTranslatedMessage('Add Logo');
    // const message5: Observable<any> = this.translateConfigService.getTranslatedMessage('Remove Logo');

    // const alert = await this.alertCtrl
    //   .create({
    //     header: this.subscriber(message2),
    //     inputs: [
    //       { name: 'Line1', placeholder: this.subscriber(message3), value: this.userdata.business_name },
    //       { name: 'Line2', placeholder: this.subscriber(message3), value: this.userdata.business_address },
    //       { name: 'Line3', placeholder: this.subscriber(message3), value: this.userdata.businesstype },
    //       { name: 'Line4', placeholder: this.subscriber(message3), value: this.userdata.ph_no },
    //     ],
    //     buttons: [
    //       { text: this.subscriber(message), role: 'cancel' },
    //       {
    //         text: this.subscriber(message1),
    //         handler: data => {
    //           this.userdata.business_name = data.Line1;
    //           this.userdata.business_address = data.Line2;
    //           this.userdata.businesstype = data.Line3;
    //           this.userdata.ph_no = data.Line4;
    //           this.sp.setUserDat(this.userdata);
    //         },
    //       },
    //       {
    //         text: this.subscriber(message4),
    //         handler: data => {
    //           this.launchCamera().then(() => {
    //             this.upload_new();
    //           });
    //         },
    //       },
    //       {
    //         text: this.subscriber(message5),
    //         handler: async  data => {
    //           const toast = await this.toastCtrl.create({ message: 'Please wait- removing...', duration: 2000 });
    //           toast.present();
    // tslint:disable-next-line: max-line-length
    //           this.userdata.logo_url = 'https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-9/79674109_100715951430298_615106696234139648_n.png?_nc_cat=109&_nc_ohc=2pdu1s1LRmoAX-04NCO&_nc_ht=scontent.fhkg10-1.fna&oh=70fea5a886837de2b9cf4aaf4a4112a8&oe=5EF6F085';
    //           this.sp.setUserDat(this.userdata).then(async () => {
    //             const toast1 = await this.toastCtrl.create({ message: 'Removed!', duration: 2000 });
    //             toast1.present();
    //           });
    //         },
    //       },
    //     ],
    //   });
    // alert.present();
    this.BottomSheetState = SheetStates.Closed;
    this.router.navigate(['/home/user-data']);
  }

  setTax() {
    this.taxrate = this.userdata.taxrate;
    this.taxbtn = 1;
    this.updateRec();
  }
  remTax() {
    this.taxbtn = 0;
    this.taxrate = 0.0;
    this.updateRec();
  }
  setDisc() {
    this.discount = this.userdata.discount;
    this.discbtn = 1;
    this.updateRec();
  }
  remDisc() {
    this.discount = 0.0;
    this.discbtn = 0;
    this.updateRec();
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

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async dispM() {
    console.log('DisM = ' + this.displayManual);
    if (this.showrec) {
      if (this.displayManual === 0) {
        this.displayManual = 1;
      } else {
        this.displayManual = 0;
      }
      const popover = await this.popover.create({
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

  ngOnInit() {
    // this.itemsprice=JSON.parse(this.dataparm);
    console.log('ionViewDidLoad IncomeTransactionPage');
    this.getCategories();
    this.getUserData();
    this.getLastTransaction();
  }
  ionViewWillEnter() {
    this.events.emitFabButton('');
  }
  createRec() {
    // Nav to Rec Page
    // Build Expand Feature on REC Page
  }

  removeItem(index) {
    // this.lastsum=this.lastsum-(this.datastore.itemslist[index].price*this.datastore.itemslist[index].qty);

    const rem = this.datastore.itemslist.splice(index, 1);
    if (this.datastore.itemslist.length === 0) {
      this.cancelRec();
    }

    this.updateRec();
    console.log('I: ' + index);
    console.log(this.datastore.itemslist[index]);
  }

  addQty(index) {
    // this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty = Number(this.datastore.itemslist[index].qty) + 1;

    this.updateRec();
  }

  removeQty(index) {
    // this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty = this.datastore.itemslist[index].qty - 1;
    if (this.datastore.itemslist[index].qty === 0) {
      this.removeItem(index);
    }

    this.updateRec();
  }

  addNewItem() {
    if (this.newItemName !== '' && this.newUnitPrice !== null && this.newUnitQty !== null) {
      const newitem = {
        code: '000000',
        name: this.newItemName,
        price: this.newUnitPrice,
        qty: this.newUnitQty,
        discount: this.newItemDiscount ? this.newItemDiscount : 0,
      };

      this.datastore.itemslist.push(newitem);
      this.newItemCat = '';
      this.newItemName = '';
      this.newUnitPrice = null;
      this.newUnitQty = 1;
      this.newItemDiscount = 0;
      this.showrec = true;
      this.displayManual = 0;

      this.updateRec();
    }
  }

  getCategories() {
    this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
    });
  }

  async cancelRec() {
    this.showrec = false;
    this.datastore.itemslist = [];
    this.lastsum = 0;
    this.lastsumdisc = 0;
    this.lastsumtax = 0;
    this.discount = 0;
    this.taxrate = 0;
    this.taxbtn = 0;
    this.displayManual = 0;
    this.discbtn = 0;
    this.updateRec();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Receipt was cancelled');
    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(message),
        duration: 2000,
      });
    toast.present();
  }

  updateProduct() { }

  async updateCb(postransacsum) {
    this.getUserData();
    this.userdata.cash_balance = (parseFloat(this.userdata.cash_balance) + parseFloat(postransacsum)).toString();
    await this.sp.setUserDat(this.userdata);
  }

  shareRec() {
    this.disableShare = true;
    const div = document.getElementById('recImg');
    const options = { width: div.offsetWidth, height: div.offsetHeight };
    domtoimage.toPng(div, options).then((dataUrl) => {
      console.log(dataUrl);
      this.social
        .share('Receipt made using Open POS app\n', '', dataUrl, 'facebook.com/openfinanceapp')
        .then(response => console.log(response))
        .catch(err => console.log(err));
    });
    // html2canvas(document.querySelector('#recImg'), { useCORS: true }).then(canvas => {
    //   // var ctx = canvas.getContext("2d");
    //   // var img = new Image();
    //   // img.src = this.userdata.logo_url
    //   // ctx.drawImage(img, 10, 10);
    //   const dataUrl = canvas.toDataURL();
    // });
    setTimeout(() => (this.disableShare = false), 1000);
  }

  async autodownloadRec() {
    console.log('Preference:', this.userdata.autosave);
    if (this.userdata.autosave !== 1 && this.userdata.autosave !== -1) {
      const alert = await this.alertCtrl.create({
        subHeader: 'Would you like to auto-download reciepts as images?',
        message: 'You can change this preference later in settings',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.userdata.autosave = -1;
              this.sp.setUserDat(this.userdata).then(async () => {
                const toast = await this.toastCtrl
                  .create({
                    message: 'OK',
                    duration: 1500,
                  });
                toast.present();
              });
            },
          },
          {
            text: 'Yes',
            handler: () => {
              this.userdata.autosave = 1;
              this.sp.setUserDat(this.userdata).then(() => {
                this.recAction();
              });
            },
          },
        ],
      });
      alert.present();
    } else if (this.userdata.autosave === 1) {
      this.recAction();
    } else {
      console.log('autosave attribute is -1');
    }
  }

  async recAction() {
    this.disableDownload = true;
    const toast = await this.toastCtrl.create({ message: 'Please Wait...', duration: 3000 });
    toast.present();
    const div = document.getElementById('recImg');
    const options = { width: div.offsetWidth, height: div.offsetHeight };
    domtoimage.toPng(div, options).then((dataUrl) => {
      console.log(dataUrl);
      this.photoLibrary
        .requestAuthorization({ read: true, write: true })
        .then(() => {
          this.photoLibrary
            .saveImage(dataUrl, 'OpenFinance')
            .then(async libItem => {
              console.log('Success!', libItem);
              const toast1 = await this.toastCtrl.create({ message: 'Saved to Gallery!', duration: 2000 });
              toast1.present();
            })
            .catch(err => console.log('Error' + err));
        })
        .catch(err => console.log('Permission not granted'));
    });
    // html2canvas(document.querySelector('#recImg'), { useCORS: true }).then(canvas => {
    //   const dataUrl = canvas.toDataURL();
    //   //   const options: Base64ToGalleryOptions = {
    //   //     prefix: "_img",
    //   //     mediaScanner: true,
    //   //   };
    //   //   this.base64toGallery
    //   //     .base64ToGallery(dataUrl, options)
    //   //     .then(res => console.log(res))
    //   //     .catch(err => console.log(err));
    //   //   // download(dataUrl, 'r.png');
    // });
    setTimeout(() => (this.disableDownload = false), 1000);
  }

  async contactAlert() {
    if (this.contact !== '') {
      let amountToCredit = 0;
      const tempVal = this.lastsumtax;
      const contactTemp = this.contact;
      const m1: Observable<any> = this.translateConfigService.getTranslatedMessage('Amount to be paid later');
      const m2: Observable<any> = this.translateConfigService.getTranslatedMessage('On Full Credit');
      const m3: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
      const m4: Observable<any> = this.translateConfigService.getTranslatedMessage('Okay');
      const a = await this.alertCtrl.create({
        backdropDismiss: false,
        inputs: [
          {
            placeholder: this.subscriber(m1),
            type: 'number',
            name: 'creditAmount',
          },
        ],
        buttons: [
          {
            text: this.subscriber(m2),
            handler: () => {
              amountToCredit = tempVal;
            },
          },
          {
            text: this.subscriber(m3),
            role: 'cancel',
          },
          {
            text: this.subscriber(m4),
            handler: data => {
              if (data.creditAmount && data.creditAmount > 0) {
                amountToCredit = data.creditAmount;
              } else {
                return false;
              }
            },
          },
        ],
      });
      a.present();
      a.onDidDismiss().then(async () => {
        if (amountToCredit === 0) { return; }
        const transaction = {
          amount: -1 * amountToCredit,
          date: this.datetime,
          reminderDate: '',
          discount: 0,
          note: '',
          img: '',
        };
        await this.sp.updateContactTransaction(contactTemp, [transaction]);
      });
    }
  }

  saveRec() {
    this.datetime = new Date();
    if (this.contact != null && this.contact !== undefined && this.contact !== '') {
      this.contactAlert();
    }
    if (this.datastore.itemslist.length === 0) {
    } else {
      const data = {
        itemslist: this.datastore.itemslist,
        totalsum: this.lastsum,
        prodidlist: this.prodidlist,
        pnllist: this.pnllist,
        datetime: this.datetime,
        taxrate: this.taxrate,
        discountlist: [],
        discount: this.discount,
        totaldisc: this.lastsumdisc,
        totalatax: this.lastsumtax,
        geolocation: this.geolocation,
      };

      this.datastore.itemslist.forEach(async product => {
        if (product.code !== '000000') {
          const data1 = {
            ...product,
            code: product.code,
            name: product.name,
            price: product.price,
            wholesale_price: product.wholesale_price,
            cost: product.cost,
            cat: product.cat,
            url: product.url,
            stock_qty: product.stock_qty - product.qty,
          };
          await this.sp.updateProduct(data1, product.code);
          data.discountlist.push(product.discount);
          this.discountlist.push(product.discount);
          console.log(this.discountlist);
        } else {
          data.discountlist.push(product.discount);
          this.discountlist.push(product.discount);
        }
      });

      this.sp.storageReady().then(async () => {
        // for(var i=0;i<160;i++){
        console.log(data);
        await this.sp.addTransactions(data);
        await this.updateCb(this.lastsum).then(() => {
          this.events.emitCbUpdateCreated(0);
          this.events.emitProductUpdateCreated(0);
          // this.sp.backupStorage();
          console.log('backup here');
        });
        // }
        const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
        const toast = await this.toastCtrl.create({
          message: this.subscriber(message),
          duration: 3000,
        });

        // REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well
        this.lastTransaction = data;
        console.log(this.lastTransaction);
        this.datastore.itemslist = [];
        this.lastsum = 0;
        this.lastsumtax = 0;
        this.lastsumdisc = 0;
        this.discount = 0;
        this.taxrate = 0;
        this.taxbtn = 0;
        this.discbtn = 0;
        this.contact = '';
        // this.sp.backupStorage();
        toast.present();

        this.showrec = false;
      });
    }
    // this.getLastTransaction();
    // (this.navCtrl.parent as Tabs).select(0);
    setTimeout(() => this.autodownloadRec(), 2000);
  }
  async addCalc() {
    // (this.navCtrl.parent as Tabs).select(0);
    const helpModal = await this.popover.create({ component: AllTransactionPage });
    helpModal.present();
    this.delay(300).then(() => {
      this.events.emitAddRecCalcCcreated(JSON.stringify(this.datastore.itemslist)); // SEND ITEMS PRICE

      console.log('Sent: 1332 ');

      // your task after delay.
    });
  }

  addSingleProd(item, index) {
    const naviExtra: NavigationExtras = {
      queryParams: {
        item,
        index,
        itemList: this.datastore.itemslist
      }
    };
    this.router.navigate(['/home/transaction-product']);
    // (this.navCtrl.parent as Tabs).select(2);
    this.delay(300).then(() => {
      this.events.emitAddSingleProdCreated({
        item,
        index,
        itemList: this.datastore.itemslist
      });

      console.log('Sent: 1330 ');

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

  // printOldRec(data){
  //   this.datastore.itemslist=data.itemslist;
  //   this.lastsum=data.totalsum,
  //   prodidlist: this.prodidlist,
  //   pnllist: this.pnllist,
  //   datetime: this.datetime,
  //   taxrate: this.taxrate,
  //   discountlist: this.discountlist,
  //   discount: this.discount,
  //   totaldisc: this.lastsumdisc,
  //   totalatax: this.lastsumtax,
  // }

  printRec() {
    this.datetime = new Date();
    if (this.contact != null && this.contact !== undefined && this.contact !== '') {
      this.contactAlert();
    }
    if (this.datastore.itemslist.length === 0) {
    } else {
      const data = {
        itemslist: this.datastore.itemslist,
        totalsum: this.lastsum,
        prodidlist: this.prodidlist,
        pnllist: this.pnllist,
        datetime: this.datetime,
        taxrate: this.taxrate,
        discountlist: this.discountlist,
        discount: this.discount,
        totaldisc: this.lastsumdisc,
        totalatax: this.lastsumtax,
      };

      this.datastore.itemslist.forEach(product => {
        if (product.code !== '000000') {
          const data1 = {
            ...product,
            code: product.code,
            name: product.name,
            price: product.price,
            wholesale_price: product.wholesale_price,
            cost: product.cost,
            cat: product.cat,
            url: product.url,
            stock_qty: product.stock_qty - product.qty,
          };
          this.sp.updateProduct(data1, product.code).then(() => { });
        }
      });

      this.sp.storageReady().then(async () => {
        console.log(data);
        this.sp.addTransactions(data);
        await this.updateCb(this.lastsum).then(() => {
          this.events.emitCbUpdateCreated(0);
          this.events.emitProductUpdateCreated(0);
          // this.sp.backupStorage();
          console.log('backup here');
        });
        // this.sp.backupStorage();
        this.lastTransaction = data;
        console.log(this.lastTransaction);
        this.prepareToPrint();
      });
    }
  } // do you got conflicts?yes

  async showToast(data) {
    const toast = await this.toastCtrl.create({
      duration: 3000,
      message: data,
      position: 'bottom',
    });
    toast.present();
  }
  async print(device, data) {
    console.log('Device mac: ', device);
    console.log('Data: ', JSON.stringify(data));
    this.datastore.itemslist = [];
    this.lastsum = 0;
    this.lastsumtax = 0;
    this.lastsumdisc = 0;
    this.discount = 0;
    this.taxrate = 0;
    this.taxbtn = 0;
    this.discbtn = 0;

    const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Printing...');
    const msg2: Observable<any> = this.translateConfigService.getTranslatedMessage('Successful print!');
    const msg3: Observable<any> = this.translateConfigService.getTranslatedMessage('Ok');
    const msg4: Observable<any> = this.translateConfigService.getTranslatedMessage('There was an error printing, please try again!');
    const load = await this.loadCtrl.create({
      message: this.subscriber(msg1),
      backdropDismiss: true,
    });
    load.present();
    this.printer.connectBluetooth(device).subscribe(
      status => {
        console.log(status);
        this.printer
          .printData(data)
          .then(async printStatus => {
            console.log(printStatus);
            const alert = await this.alertCtrl.create({
              header: this.subscriber(msg2),
              buttons: [
                {
                  text: this.subscriber(msg3),
                  handler: () => {
                    load.dismiss();
                    this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            this.datastore.itemslist = [];
            this.lastsum = 0;
            this.lastsumtax = 0;
            this.lastsumdisc = 0;
            this.discount = 0;
            this.taxrate = 0;
            this.taxbtn = 0;
            this.discbtn = 0;
            alert.present();
            // (this.navCtrl.parent as Tabs).select(0);
          })
          .catch(async error => {
            console.log(error);
            const alert = await this.alertCtrl.create({
              header: this.subscriber(msg4),
              buttons: [
                {
                  text: this.subscriber(msg3),
                  handler: () => {
                    load.dismiss();
                    // this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            this.datastore.itemslist = [];
            this.lastsum = 0;
            this.lastsumtax = 0;
            this.lastsumdisc = 0;
            this.discount = 0;
            this.taxrate = 0;
            this.taxbtn = 0;
            this.discbtn = 0;
            alert.present();
            // (this.navCtrl.parent as Tabs).select(0);
          });
      }, async error => {
        console.log(error);
        const alert = await this.alertCtrl.create({
          header: 'There was an error connecting to the printer, please try again!',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                load.dismiss();
                // this.printer.disconnectBluetooth();
              },
            },
          ],
        });
        alert.present();
      },
    );
  }

  getDateTime(datetime) {
    // return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    const temp1 = temp;

    const t =
      temp.getDate().toString() +
      '/' +
      (temp.getMonth() + 1).toString() +
      '/' +
      temp.getFullYear().toString() +
      ' ' +
      this.getHours(temp) +
      ':' +
      this.getMinutes(temp);
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

  showOldRec() {
    // this.app.getRootNav().setRoot(SummarySummaryPage, { item: "ViewRecs" });
    // this.events.publish("ViewRecs", 0);
    console.log('View Recs Called');
  }

  printLogo() {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = this.userdata.logo_url;
    console.log('URL ' + this.userdata.logo_url);
    //  "https://firebasestorage.googleapis.com/v0/b/open-fintech.appspot.com/o/prodImages%2F65435757_2393255207562866_2949577797074419712_n.jpg?alt=media&token=1a481415-2e75-4473-b56f-ec18099545ad";
    img.onload = () => {
      result
        .align('center')
        .image(img, 256, 256, 'atkinson', 128)
        .newline();
      result
        .codepage('cp936')
        .align('center')
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .line(this.userdata.business_name)
        .raw(commands.TEXT_FORMAT.TXT_NORMAL)
        .line(this.userdata.business_address)
        .line(this.userdata.businesstype)
        .line(this.userdata.ph_no)
        .newline()
        .line(this.getDateTime(this.datetime))
        .align('center')
        .text(commands.HORIZONTAL_LINE.HR_58MM)
        .newline();
      if (this.datastore != null) {
        result
          // .raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
          // .raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
          .text('Item Name           ') // 10 char + 10 char
          // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text('Qty ') // 4 char
          // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text('Price   ') // 8 char
          .newline()
          .newline();

        this.datastore.itemslist.forEach((element, index) => {
          element.qty = element.qty.toString();
          element.price = element.price.toString();
          // autotab system
          if (element.name.length < 20) {
            for (let i = element.name.length; i < 20; i++) {
              element.name += ' ';
            }
          } else {
            element.name = element.name.substring(0, 20);
          }

          if (element.qty < 10000) {
            for (let i = element.qty.length; i < 4; i++) {
              element.qty += ' ';
            }
          } else {
            element.qty.substring(0, 4);
          }

          if (element.price < 10000000) {
            for (let i = element.price.length; i < 8; i++) {
              element.price += ' ';
            }
          } else {
            element.price.substring(0, 8);
          }
          result

            .text(element.name) // 19 + space
            // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.qty) // 4+ space
            // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.price) // 7+space

            .newline();
          if (parseFloat(element.discount) !== 0) {
            result
              .text('Discount (' + Math.round(parseFloat(element.discount) * 100) / 100 + '%) : ')

              .text('-' + Math.round((element.price * element.discount * element.qty) / 100))
              .newline();
          }
        });
        const spacer1 = '                  ';
        const spacer2 = '    ';
        const spacer3 = '         ';
        result.newline();
        result.align('center').line(spacer1 + 'Total: ' + this.lastsumAfterIndividualDiscount);
        if (this.lastsumAfterIndividualDiscount !== this.lastsumdisc) {
          result.line(spacer2 + 'After Discount (' + Math.round(this.discount * 100) / 100 + '%): ' + this.lastsumdisc);
        }
        if (this.lastsumAfterIndividualDiscount !== this.lastsumtax) {
          result.line(spacer3 + 'After Tax (' + Math.round(this.taxrate * 100) / 100 + '%): ' + this.lastsumtax);
        }
      }

      result
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .newline()
        .line('')
        .newline()
        .cut('full');
      this.mountAlertBt(result.encode());
    };
  }

  prepareToPrint() {
    this.showrec = false;
    setTimeout(() => this.autodownloadRec(), 2000);
    /*
        let receipt = '';
        receipt += commands.HARDWARE.HW_INIT;
        receipt += commands.TEXT_FORMAT.TXT_4SQUARE;
        receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
        receipt += data.title.toUpperCase();
        receipt += commands.EOL;
        receipt += commands.TEXT_FORMAT.TXT_NORMAL;
        receipt += commands.HORIZONTAL_LINE.HR_58MM;
        receipt += commands.EOL;
        receipt += commands.HORIZONTAL_LINE.HR2_58MM;
        receipt += commands.EOL;
        receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
        receipt += data.text;
        //secure space on footer
        receipt += commands.EOL;
        receipt += commands.EOL;
        receipt += commands.EOL;*/
    // this.receipt = receipt;
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    if (this.userdata.logo_url !== '' && this.userdata.logo_url !== null && this.userdata.logo_url !== undefined) {
      this.printLogo();
    } else {
      result
        .codepage('cp936')
        .align('center')
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .line(this.userdata.business_name)
        .raw(commands.TEXT_FORMAT.TXT_NORMAL)
        .line(this.userdata.business_address)
        .line(this.userdata.businesstype)
        .line(this.userdata.ph_no)
        .newline()
        .line(this.getDateTime(this.datetime))
        .align('center')
        .text(commands.HORIZONTAL_LINE.HR_58MM)
        .newline();
      if (this.datastore != null) {
        result
          // .raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
          // .raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
          .text('Item Name           ') // 10 char + 10 char
          // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text('Qty ') // 4 char
          // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text('Price   ') // 8 char
          .newline()
          .newline();

        this.datastore.itemslist.forEach((element, index) => {
          element.qty = element.qty.toString();
          element.price = element.price.toString();
          // autotab system
          if (element.name.length < 20) {
            for (let i = element.name.length; i < 20; i++) {
              element.name += ' ';
            }
          } else {
            element.name = element.name.substring(0, 20);
          }

          if (element.qty < 10000) {
            for (let i = element.qty.length; i < 4; i++) {
              element.qty += ' ';
            }
          } else {
            element.qty.substring(0, 4);
          }

          if (element.price < 10000000) {
            for (let i = element.price.length; i < 8; i++) {
              element.price += ' ';
            }
          } else {
            element.price.substring(0, 8);
          }
          result

            .text(element.name) // 19 + space
            // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.qty) // 4+ space
            // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.price) // 7+space

            .newline();
          if (parseFloat(element.discount) !== 0) {
            result
              .text('Discount (' + Math.round(parseFloat(element.discount) * 100) / 100 + '%) : ')

              .text('-' + Math.round((element.price * element.discount * element.qty) / 100))
              .newline();
          }
        });
        const spacer1 = '                  ';
        const spacer2 = '    ';
        const spacer3 = '         ';
        result.newline();
        result.align('center').line(spacer1 + 'Total: ' + this.lastsumAfterIndividualDiscount);
        if (this.lastsumAfterIndividualDiscount !== this.lastsumdisc) {
          result.line(spacer2 + 'After Discount (' + Math.round(this.discount * 100) / 100 + '%): ' + this.lastsumdisc);
        }
        if (this.lastsumAfterIndividualDiscount !== this.lastsumtax) {
          result.line(spacer3 + 'After Tax (' + Math.round(this.taxrate * 100) / 100 + '%): ' + this.lastsumtax);
        }
      }

      result
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .newline()
        .line('')
        .newline()
        .cut('full');
      this.mountAlertBt(result.encode());
    }
  }

  async mountAlertBt(data) {
    this.receipt = data;
    console.log(this.receipt);
    const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Select your printer');
    const msg2: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const msg3: Observable<any> = this.translateConfigService.getTranslatedMessage('Select printer');
    const msg4: Observable<any> = this.translateConfigService.getTranslatedMessage('Select a printer!');
    const msg5: Observable<any> = this.translateConfigService.getTranslatedMessage(
      'There was an error connecting the printer, please try again!',
    );
    const msg6: Observable<any> = this.translateConfigService.getTranslatedMessage('Error activating bluetooth, please try again!');
    const alertInputs = [];

    this.printer
      .enableBluetooth()
      .then(() => {
        this.printer
          .searchBluetooth()
          .then(async devices => {
            const printerScreen = await this.popover.create({ component: SelectPrinterPopoverPage, componentProps: devices });
            printerScreen.present();

            printerScreen.onDidDismiss()
              .then((result) => {
                if (result.data) {
                  this.print(result.data.address, this.receipt);
                }
                console.log(result.data);
              });

            devices.forEach(device => {
              // console.log("Devices: ", JSON.stringify(device));
              alertInputs.push({
                name: 'printer',
                value: device.address,
                label: device.name,
                type: 'radio',
              });
            });
          })
          .catch(error => {
            console.log(error);
            this.showToast(this.subscriber(msg5));
            this.mountAlertBt(this.receipt);
          });
      })
      .catch(error => {
        console.log(error);
        this.showToast(this.subscriber(msg6));
        this.mountAlertBt(this.receipt);
      });
  }

  async addContact() {
    // this.events.publish("chooseContact");
    const m = await this.modal.create({
      component: ContactsPage,
      componentProps: { choosingContact: true }
    });
    m.present();
    m.onDidDismiss().then((contactName: any) => {
      if (contactName && (contactName.data === null || contactName.data === undefined)) {
        return;
      }
      this.contact = contactName.data;
    });
  }
  clearContact() {
    this.contact = '';
  }
}

@Component({
  template: `<ion-card class="ion-padding" *ngIf="displayManual==1;">
  <ion-list lines="none">
  <ion-item>
    <ion-label style="font-size: 1.0rem;">{{"Name"|translate}}</ion-label>
    <ion-input type="text" placeholder="{{'Enter Product Name'|translate}}" [(ngModel)]="newItemName"
      ngDefaultControl></ion-input>
  </ion-item>
  <ion-item>
    <ion-label style="font-size: 1.0rem;">{{"Price"|translate}}</ion-label>
    <ion-input type="number" placeholder="{{'Enter Price'|translate}}" [(ngModel)]="newUnitPrice"
      ngDefaultControl></ion-input>
  </ion-item>
  <ion-item>
  <ion-button style="font-size: 1.0rem;" expand="full" (click)="addNewItem()" shape="round">
    {{"Add Charges"|translate}}
  </ion-button>
  </ion-item>
  </ion-list>
</ion-card>`,
  styleUrls: ['./income-transaction.page.scss'],
})
export class AdditionalChargePage implements OnInit {
  newItemName;
  newUnitPrice;
  newUnitQty = 1;
  displayManual;
  constructor(private modal: PopoverController) {

  }

  ngOnInit() {

  }

  addNewItem() {
    if (this.newItemName !== '' && this.newUnitPrice !== null && this.newUnitQty !== null) {
      const newitem = {
        code: '000000',
        name: this.newItemName,
        price: this.newUnitPrice,
        qty: this.newUnitQty,
        discount: 0,
      };
      this.modal.dismiss(newitem);
    }
  }
}

