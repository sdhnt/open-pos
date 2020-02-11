import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  Tabs,
  ToastController,
  DateTime,
  App,
  ModalController,
  Img,
} from "ionic-angular";
import { AllTransactionPage } from "../all-transaction/all-transaction";
import firebase from "firebase";
import { StorageProvider } from "../../providers/storage/storage";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { AlertController, LoadingController } from "ionic-angular";
import { PrinterProvider } from "./../../providers/printer/printer";
import { commands } from "./../../providers/printer/printer-commands";
import EscPosEncoder from "esc-pos-encoder-ionic";
import { GeolocationService } from "../../providers/geolocation/geolocation.service";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { SocialSharing } from "@ionic-native/social-sharing";
import html2canvas from "html2canvas";
import download from "downloadjs";
// import { Base64ToGallery, Base64ToGalleryOptions } from "@ionic-native/base64-to-gallery";
import { File } from "@ionic-native/file";
/**
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-income-transaction",
  templateUrl: "income-transaction.html",
})
export class IncomeTransactionPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public camera: Camera,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner,
    private printer: PrinterProvider,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private gps: GeolocationService,
    public app: App,
    private modal: ModalController,
    private social: SocialSharing,
    private fileOperations: File,
  ) {
    this.isReady = false;
    const nav = app._appRoot._getActivePortal() || app.getActiveNav();
    const activeView = nav.getActive();
    if (activeView != null) {
      if (activeView.isOverlay) {
        console.log("Alert Prev");
        activeView.dismiss();
      }
    }
    //console.log("Recieved -1" + this.navParams.get('itemslist'));
    this.getUserData();
    this.gps
      .getCoordinates()
      .then(coordinates => {
        this.geolocation = coordinates;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  taxbtn = 0;
  showrec = false;

  lastTransaction: any;
  isReady: boolean;

  userdata: any = {
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    logo_url: "",
    language: "en",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };

  discount = 0.0;
  lastsumdisc = 0.0;
  taxrate = 0.0;

  printOldRec(transac) {
    console.log(transac);
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    result
      .codepage("cp936")
      .align("center")
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .line(this.userdata.business_name)
      .raw(commands.TEXT_FORMAT.TXT_NORMAL)
      .line(this.userdata.business_address)
      .line(this.userdata.businesstype)
      .line(this.userdata.ph_no)
      .newline()
      .line(this.getDateTime(transac.datetime))
      .align("center")
      .text(commands.HORIZONTAL_LINE.HR_58MM)
      .newline();

    result
      //.raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
      //.raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
      .text("Item Name           ") //10 char + 10 char
      //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
      .text("Qty ") //4 char
      //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
      .text("Price   ") //8 char
      .newline()
      .newline();

    transac.itemslist.forEach(element => {
      element.qty = element.qty.toString();
      element.price = element.price.toString();
      //autotab system
      if (element.name.length < 20) {
        for (let i = element.name.length; i < 20; i++) {
          element.name += " ";
        }
      } else {
        element.name = element.name.substring(0, 20);
      }

      if (element.qty < 10000) {
        for (let i = element.qty.length; i < 4; i++) {
          element.qty += " ";
        }
      } else {
        element.qty.substring(0, 4);
      }

      if (element.price < 10000000) {
        for (let i = element.price.length; i < 8; i++) {
          element.price += " ";
        }
      } else {
        element.price.substring(0, 8);
      }

      result

        .text(element.name) //19 + space
        //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.qty) //4+ space
        //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.price) //7+space

        .newline();

      if (parseFloat(element.discount) != 0) {
        result
          .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ")

          .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
          .newline();
      }
    });
    const spacer1 = "                  ";
    const spacer2 = "    ";
    const spacer3 = "          ";
    result.newline();
    result.align("center").line(spacer1 + "Total:" + transac.totalsum);
    if (this.lastsumAfterIndividualDiscount != this.lastsumdisc) {
      result.line(spacer2 + "After Discount (" + Math.round(this.discount * 100) / 100 + "%): " + transac.totaldisc);
    }
    if (this.lastsumAfterIndividualDiscount != this.lastsumtax) {
      result.line(spacer3 + "After Tax (" + Math.round(this.taxrate * 100) / 100 + "%): " + transac.totalatax);
    }

    result
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .newline()
      .line("")
      .newline()
      .cut("full");
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
          alert("Error: " + err);
        });
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad IncomeTransactionPage");
    this.getCategories();
    this.getUserData();
    this.events.subscribe("genRec:created", data => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      this.datastore = JSON.parse(data);
      this.showrec = true;

      //Here if 2 items have same code then coagulate/merge - price is always full price, merge discounts accordingly

      this.datastore.itemslist.forEach((item, index) => {
        this.datastore.itemslist.forEach((item1, index1) => {
          if (index1 != index) {
            if (item.code == item1.code && item.price == item1.price && item.name == item1.name) {
              //ALL the 0000 might get combined
              const totaldiscsumx = (item.price * (item.discount * item.qty + item1.discount * item1.qty)) / 100;
              console.log("Total Disc Sum " + totaldiscsumx);
              item.qty = item.qty + item1.qty;
              item.discount = (totaldiscsumx / (item.price * item.qty)) * 100; //new qty

              const rem = this.datastore.itemslist.splice(index1, 1);
              //remove item1, merge qty and manage discount as avg
            }
          }
        });
      });
      this.updateRec();
    });
    this.getLastTransaction();
  }
  temp;

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

  addNewItembtn() {
    const message1 = this.translateConfigService.getTranslatedMessage("CANCEL ");
    const message2 = this.translateConfigService.getTranslatedMessage("Add from Calculator");
    const message3 = this.translateConfigService.getTranslatedMessage("Scan Barcode");
    const message4 = this.translateConfigService.getTranslatedMessage("Add from Product List");
    const message5 = this.translateConfigService.getTranslatedMessage("Add Additional Charges");
    const alert = this.alertCtrl
      .create({
        // @ts-ignore
        title: "Add From", //translate this
        // @ts-ignore
        enableBackdropDismiss: true,
        buttons: [
          {
            // @ts-ignore
            text: message2.value,
            handler: () => {
              this.addCalc();
            },
          },
          {
            // @ts-ignore
            text: message3.value,
            handler: () => {
              this.qrscan();
            },
          },
          {
            // @ts-ignore
            text: message4.value,
            handler: () => {
              this.addProdList();
            },
          },
          {
            // @ts-ignore
            text: message5.value,
            handler: () => {
              this.dispM();
            },
          },
          {
            // @ts-ignore
            text: message1.value,
            role: "cancel",
          },
        ],
      })
      .present();
  }

  addNewExp() {
    this.modal.create("ExpenseGeneralPage").present();
  }

  updateRec() {
    this.lastsum = 0;
    let totalDiscount = 0,
      totalIndividualDiscount = 0;
    this.datastore.itemslist.forEach(item => {
      if (item.discount != 0) {
        totalIndividualDiscount += ((item.price * parseFloat(item.discount)) / 100) * item.qty;
        console.log(((parseFloat(item.price) * parseFloat(item.discount)) / 100) * item.qty);
      }
      this.lastsum += item.price * item.qty;
    });
    totalDiscount += totalIndividualDiscount;
    console.log(this.lastsum + " " + totalDiscount);
    this.lastsumAfterIndividualDiscount = Math.round((this.lastsum - totalIndividualDiscount) * 100) / 100;
    console.log(this.lastsum + " " + this.lastsumAfterIndividualDiscount);
    this.lastsumdisc = Math.round((this.lastsum - totalDiscount) * ((100 - this.discount) / 100) * 100) / 100;
    this.lastsumtax = Math.round(this.lastsumdisc * (1.0 + this.taxrate / 100) * 100) / 100;
  }

  file: any;

  upload_new() {
    //LET REF be tied to a particular product- we save the url in the products db
    const ref = firebase
      .storage()
      .ref()
      .child("prodImages/" + this.userdata.id + "logo")
      .putString(this.file.split(",")[1], "base64")
      .then(snap => {
        snap.ref.getDownloadURL().then(url => {
          console.log("Uploaded!");
          // do something with url here
          this.userdata.logo_url = url;
          this.toastCtrl.create({ message: "Please wait- saving...", duration: 2000 }).present();
          this.sp.setUserDat(this.userdata).then(() => {
            this.toastCtrl.create({ message: "Saved!", duration: 2000 }).present();
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
          this.file = "data:image/png;base64," + pic;
          // console.log(base64Image)
          resolve();
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  editRecTop() {
    const message = this.translateConfigService.getTranslatedMessage("Cancel");
    const message1 = this.translateConfigService.getTranslatedMessage("Save");
    const message2 = this.translateConfigService.getTranslatedMessage("Edit Receipt Details");
    const message3 = this.translateConfigService.getTranslatedMessage("Enter Information");

    const message4 = this.translateConfigService.getTranslatedMessage("Add Logo");
    const message5 = this.translateConfigService.getTranslatedMessage("Remove Logo");

    this.alertCtrl
      .create({
        //@ts-ignore
        title: message2.value,
        inputs: [
          //@ts-ignore
          { name: "Line1", placeholder: message3.value, value: this.userdata.business_name },
          //@ts-ignore
          { name: "Line2", placeholder: message3.value, value: this.userdata.business_address },
          //@ts-ignore
          { name: "Line3", placeholder: message3.value, value: this.userdata.businesstype },
          //@ts-ignore
          { name: "Line4", placeholder: message3.value, value: this.userdata.ph_no },
        ],
        buttons: [
          //@ts-ignore
          { text: message.value, role: "cancel" },
          {
            //@ts-ignore
            text: message1.value,
            handler: data => {
              this.userdata.business_name = data.Line1;
              this.userdata.business_address = data.Line2;
              this.userdata.businesstype = data.Line3;
              this.userdata.ph_no = data.Line4;
              this.sp.setUserDat(this.userdata);
            },
          },
          {
            //@ts-ignore
            text: message4.value,
            handler: data => {
              this.launchCamera().then(() => {
                this.upload_new();
              });
            },
          },
          {
            //@ts-ignore
            text: message5.value,
            handler: data => {
              this.toastCtrl.create({ message: "Please wait- removing...", duration: 2000 }).present();
              this.userdata.logo_url = "";
              this.sp.setUserDat(this.userdata).then(() => {
                this.toastCtrl.create({ message: "Removed!", duration: 2000 }).present();
              });
            },
          },
        ],
      })
      .present();
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
  discbtn = 0;
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
        this.sp.searchProduct(barcodeData.text).then(val => {
          if (val[0] != null) {
            curprod = val[0];
            const message = this.translateConfigService.getTranslatedMessage("Found Product");
            const toast = this.toastCtrl.create({
              // @ts-ignore
              message: message.value + " " + val[0].name,
              duration: 2000,
            });
            toast.present();
            curprod.qty = 1;
            this.temp = curprod;

            // addQty(index){
            //   //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
            //   this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;

            //   this.lastsum=0;
            //   for(let i = 0; i < this.datastore.itemslist.length; i++){
            //     this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
            //   }
            // }
            curprod.discount = 0;
            this.datastore.itemslist.push(curprod);
            this.showrec = true;
            //this.lastsum=this.lastsum+curprod.price;
            this.updateRec();
          } else {
            const message = this.translateConfigService.getTranslatedMessage("No Product!!!");
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

  dispM() {
    console.log("DisM = " + this.displayManual);
    if (this.displayManual == 0) {
      this.displayManual = 1;
    } else {
      this.displayManual = 0;
    }
  }

  result = "";
  displayManual = 0;
  datastore = { itemslist: [] };
  flag_mode = 0;
  showSampleRec = true;
  itemsprice: string[] = [];
  ctr = 0;
  lastsum = 0;
  lastsumAfterIndividualDiscount = 0;
  lastchar = "NIL";
  lastdigit = 0;

  ngOnInit() {
    //this.itemsprice=JSON.parse(this.dataparm);
  }

  createRec() {
    //Nav to Rec Page
    //Build Expand Feature on REC Page
  }

  removeItem(index) {
    //this.lastsum=this.lastsum-(this.datastore.itemslist[index].price*this.datastore.itemslist[index].qty);

    const rem = this.datastore.itemslist.splice(index, 1);
    if (this.datastore.itemslist.length == 0) {
      this.cancelRec();
    }

    this.updateRec();
    console.log("I: " + index);
    console.log(this.datastore.itemslist[index]);
  }

  addQty(index) {
    //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty = parseInt(this.datastore.itemslist[index].qty) + 1;

    this.updateRec();
  }

  removeQty(index) {
    //this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty = this.datastore.itemslist[index].qty - 1;
    if (this.datastore.itemslist[index].qty == 0) {
      this.removeItem(index);
    }

    this.updateRec();
  }

  newItemName = "";
  newUnitPrice: number = null;
  newUnitQty = 1;
  newItemCat = "";
  newItemDiscount: number = null;

  addNewItem() {
    if (this.newItemName != "" && this.newUnitPrice != null && this.newUnitQty != null) {
      const newitem = {
        code: "000000",
        name: this.newItemName,
        price: this.newUnitPrice,
        qty: this.newUnitQty,
        discount: this.newItemDiscount ? this.newItemDiscount : 0,
      };

      this.datastore.itemslist.push(newitem);
      this.newItemCat = "";
      this.newItemName = "";
      this.newUnitPrice = null;
      this.newUnitQty = 1;
      this.newItemDiscount = 0;
      this.showrec = true;
      this.displayManual = 0;

      this.updateRec();
    }
  }

  listProducts: any;
  filteredList: any;
  listArray: any = [];
  listCat: any;
  lastsumtax;

  getCategories() {
    //console.log(this.listCat + " and "+this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp
        .getCategories()
        .then(val => {
          this.listCat = JSON.parse(val);
          //console.log("Addprodpg: "+this.listCat)
          this.getCategories();
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  cancelRec() {
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
    const message = this.translateConfigService.getTranslatedMessage("Receipt was cancelled");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      })
      .present();
  }

  prodidlist: any = [];
  pnllist: any = [];
  datetime = Date.now();
  tax_vat: any = [];
  geolocation: {};

  updateProduct() {}

  async updateCb(postransacsum) {
    this.getUserData();
    this.userdata.cash_balance = (parseFloat(this.userdata.cash_balance) + parseFloat(postransacsum)).toString();
    await this.sp.setUserDat(this.userdata);
  }

  shareRec() {
    html2canvas(document.querySelector("#recImg"), { useCORS: true }).then(canvas => {
      // var ctx = canvas.getContext("2d");
      // var img = new Image();
      // img.src = this.userdata.logo_url
      // ctx.drawImage(img, 10, 10);
      const dataUrl = canvas.toDataURL();
      this.social
        .share("Receipt made using Open POS app\n", "", dataUrl, "facebook.com/openfinanceapp")
        .then(response => console.log(response))
        .catch(err => console.log(err));
    });
  }

  recAction() {
    //line 778, 949, 977
    html2canvas(document.querySelector("#recImg"), { useCORS: true }).then(canvas => {
      const dataUrl = canvas.toDataURL();
    //   const options: Base64ToGalleryOptions = {
    //     prefix: "_img",
    //     mediaScanner: true,
    //   };
    //   this.base64toGallery
    //     .base64ToGallery(dataUrl, options)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    //   // download(dataUrl, 'r.png');

    var filePath = this.fileOperations.externalDataDirectory;
    this.fileOperations.checkDir(filePath, 'OpenFinance')
      .then(()=>{
        //directory exists
        this.fileOperations.writeFile(filePath+"/OpenFinance", "Receipt"+this.datetime+".png", dataUrl)
          .then(()=>{
            console.log("File write success");
          }).catch(err=>console.log("File write error"+err));
      }).catch((err)=>{
        //directory doesn't exist
        console.log("No directory "+err);
        this.fileOperations.createDir(filePath, 'OpenFinance', false)
          .then(()=>{
            console.log("Directory created");
            this.fileOperations.writeFile(filePath+"/OpenFinance", "Receipt"+this.datetime+".png", dataUrl)
              .then(()=>console.log("File write success"))
              .catch(err=>console.log("File write error"+err));
          }).catch(err=>console.log("Directory error "+err));
      })
    });
  }

  saveRec() {
    this.datetime = Date.now();
    if (this.datastore.itemslist.length == 0) {
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
        if (product.code != "000000") {
          const data1 = {
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
          this.events.publish("cbUpdate:created", 0);
          this.events.publish("productUpdate:created", 0);
          //this.sp.backupStorage();
          console.log("backup here");
        });
        //}
        const message = this.translateConfigService.getTranslatedMessage("Finish");
        const toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 3000,
        });

        //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well
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
        //this.sp.backupStorage();
        toast.present();

        this.showrec = false;
      });
    }
    //this.getLastTransaction();
    //(this.navCtrl.parent as Tabs).select(0);
    // this.recAction();
  }
  discountlist = [];
  addCalc() {
    //(this.navCtrl.parent as Tabs).select(0);
    const helpModal = this.modal.create("AllTransactionPage");
    helpModal.present();
    this.delay(300).then(any => {
      this.events.publish("addRecCalc:created", JSON.stringify(this.datastore.itemslist)); //SEND ITEMS PRICE

      console.log("Sent: 1332 ");

      //your task after delay.
    });
  }

  addSingleProd(item, index) {
    (this.navCtrl.parent as Tabs).select(0);
    this.delay(300).then(any => {
      this.events.publish(
        "addSingleProd:created",
        JSON.stringify(item),
        JSON.stringify(index),
        JSON.stringify(this.datastore.itemslist),
      );

      console.log("Sent: 1330 ");

      //your task after delay.
    });
  }

  addProdList() {
    (this.navCtrl.parent as Tabs).select(0);
    this.delay(300).then(any => {
      this.events.publish("addRecProd:created", JSON.stringify(this.datastore.itemslist));

      console.log("Sent: 1331 ");

      //your task after delay.
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
    this.datetime = Date.now();
    if (this.datastore.itemslist.length == 0) {
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
        if (product.code != "000000") {
          const data1 = {
            code: product.code,
            name: product.name,
            price: product.price,
            wholesale_price: product.wholesale_price,
            cost: product.cost,
            cat: product.cat,
            url: product.url,
            stock_qty: product.stock_qty - product.qty,
          };
          this.sp.updateProduct(data1, product.code).then(() => {});
        }
      });

      this.sp.storageReady().then(async () => {
        console.log(data);
        this.sp.addTransactions(data);
        await this.updateCb(this.lastsum).then(() => {
          this.events.publish("cbUpdate:created", 0);
          this.events.publish("productUpdate:created", 0);
          //this.sp.backupStorage();
          console.log("backup here");
        });
        //this.sp.backupStorage();
        this.lastTransaction = data;
        console.log(this.lastTransaction);
        this.prepareToPrint();
      });
    }
  }

  ///////////////////////

  receipt: any;
  inputData: any = {};

  showToast(data) {
    const toast = this.toastCtrl.create({
      duration: 3000,
      message: data,
      position: "bottom",
    });
    toast.present();
  }
  print(device, data) {
    console.log("Device mac: ", device);
    console.log("Data: ", JSON.stringify(data));
    this.datastore.itemslist = [];
    this.lastsum = 0;
    this.lastsumtax = 0;
    this.lastsumdisc = 0;
    this.discount = 0;
    this.taxrate = 0;
    this.taxbtn = 0;
    this.discbtn = 0;

    const msg1 = this.translateConfigService.getTranslatedMessage("Printing...");
    const msg2 = this.translateConfigService.getTranslatedMessage("Successful print!");
    const msg3 = this.translateConfigService.getTranslatedMessage("Ok");
    const msg4 = this.translateConfigService.getTranslatedMessage("There was an error printing, please try again!");
    const load = this.loadCtrl.create({
      // @ts-ignore
      content: msg1.value,
      enableBackdropDismiss: true,
    });
    load.present();
    this.printer.connectBluetooth(device).subscribe(
      status => {
        console.log(status);
        this.printer
          .printData(data)
          .then(printStatus => {
            console.log(printStatus);
            const alert = this.alertCtrl.create({
              //@ts-ignore
              title: msg2.value,
              buttons: [
                {
                  //@ts-ignore
                  text: msg3.value,
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
            // this.recAction();
            //(this.navCtrl.parent as Tabs).select(0);
          })
          .catch(error => {
            console.log(error);
            const alert = this.alertCtrl.create({
              //@ts-ignore
              title: msg4.value,
              buttons: [
                {
                  //@ts-ignore
                  text: msg3.value,
                  handler: () => {
                    load.dismiss();
                    //this.printer.disconnectBluetooth();
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
            // this.recAction();
            //(this.navCtrl.parent as Tabs).select(0);
          });
      },
      error => {
        console.log(error);
        const alert = this.alertCtrl.create({
          title: "There was an error connecting to the printer, please try again!",
          buttons: [
            {
              text: "Ok",
              handler: () => {
                load.dismiss();
                //this.printer.disconnectBluetooth();
              },
            },
          ],
        });
        alert.present();
      },
    );
  }

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    const temp1 = temp;

    const t =
      temp.getDate().toString() +
      "/" +
      (temp.getMonth() + 1).toString() +
      "/" +
      temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp);
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
  }

  getHours(datetime) {
    const temp = new Date(datetime);
    const t = temp.getHours();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  showOldRec() {
    //this.app.getRootNav().setRoot(SummarySummaryPage, { item: "ViewRecs" });
    //this.events.publish("ViewRecs", 0);
    console.log("View Recs Called");
  }

  printLogo() {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = this.userdata.logo_url;
    console.log("URL " + this.userdata.logo_url);
    //  "https://firebasestorage.googleapis.com/v0/b/open-fintech.appspot.com/o/prodImages%2F65435757_2393255207562866_2949577797074419712_n.jpg?alt=media&token=1a481415-2e75-4473-b56f-ec18099545ad";
    img.onload = () => {
      result
        .align("center")
        .image(img, 256, 256, "atkinson", 128)
        .newline();
      result
        .codepage("cp936")
        .align("center")
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .line(this.userdata.business_name)
        .raw(commands.TEXT_FORMAT.TXT_NORMAL)
        .line(this.userdata.business_address)
        .line(this.userdata.businesstype)
        .line(this.userdata.ph_no)
        .newline()
        .line(this.getDateTime(this.datetime))
        .align("center")
        .text(commands.HORIZONTAL_LINE.HR_58MM)
        .newline();
      if (this.datastore != null) {
        result
          //.raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
          //.raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
          .text("Item Name           ") //10 char + 10 char
          //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text("Qty ") //4 char
          //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text("Price   ") //8 char
          .newline()
          .newline();

        this.datastore.itemslist.forEach((element, index) => {
          element.qty = element.qty.toString();
          element.price = element.price.toString();
          //autotab system
          if (element.name.length < 20) {
            for (let i = element.name.length; i < 20; i++) {
              element.name += " ";
            }
          } else {
            element.name = element.name.substring(0, 20);
          }

          if (element.qty < 10000) {
            for (let i = element.qty.length; i < 4; i++) {
              element.qty += " ";
            }
          } else {
            element.qty.substring(0, 4);
          }

          if (element.price < 10000000) {
            for (let i = element.price.length; i < 8; i++) {
              element.price += " ";
            }
          } else {
            element.price.substring(0, 8);
          }
          result

            .text(element.name) //19 + space
            //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.qty) //4+ space
            //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.price) //7+space

            .newline();
          if (parseFloat(element.discount) != 0) {
            result
              .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ")

              .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
              .newline();
          }
        });
        const spacer1 = "                  ";
        const spacer2 = "    ";
        const spacer3 = "         ";
        result.newline();
        result.align("center").line(spacer1 + "Total: " + this.lastsumAfterIndividualDiscount);
        if (this.lastsumAfterIndividualDiscount != this.lastsumdisc) {
          result.line(spacer2 + "After Discount (" + Math.round(this.discount * 100) / 100 + "%): " + this.lastsumdisc);
        }
        if (this.lastsumAfterIndividualDiscount != this.lastsumtax) {
          result.line(spacer3 + "After Tax (" + Math.round(this.taxrate * 100) / 100 + "%): " + this.lastsumtax);
        }
      }

      result
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .newline()
        .line("")
        .newline()
        .cut("full");
      this.mountAlertBt(result.encode());
    };
  }

  prepareToPrint() {
    this.showrec = false;
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
    //this.receipt = receipt;
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    if (this.userdata.logo_url != "" && this.userdata.logo_url != null && this.userdata.logo_url != undefined) {
      this.printLogo();
    } else {
      result
        .codepage("cp936")
        .align("center")
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .line(this.userdata.business_name)
        .raw(commands.TEXT_FORMAT.TXT_NORMAL)
        .line(this.userdata.business_address)
        .line(this.userdata.businesstype)
        .line(this.userdata.ph_no)
        .newline()
        .line(this.getDateTime(this.datetime))
        .align("center")
        .text(commands.HORIZONTAL_LINE.HR_58MM)
        .newline();
      if (this.datastore != null) {
        result
          //.raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
          //.raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
          .text("Item Name           ") //10 char + 10 char
          //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text("Qty ") //4 char
          //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text("Price   ") //8 char
          .newline()
          .newline();

        this.datastore.itemslist.forEach((element, index) => {
          element.qty = element.qty.toString();
          element.price = element.price.toString();
          //autotab system
          if (element.name.length < 20) {
            for (let i = element.name.length; i < 20; i++) {
              element.name += " ";
            }
          } else {
            element.name = element.name.substring(0, 20);
          }

          if (element.qty < 10000) {
            for (let i = element.qty.length; i < 4; i++) {
              element.qty += " ";
            }
          } else {
            element.qty.substring(0, 4);
          }

          if (element.price < 10000000) {
            for (let i = element.price.length; i < 8; i++) {
              element.price += " ";
            }
          } else {
            element.price.substring(0, 8);
          }
          result

            .text(element.name) //19 + space
            //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.qty) //4+ space
            //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
            .text(element.price) //7+space

            .newline();
          if (parseFloat(element.discount) != 0) {
            result
              .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ")

              .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
              .newline();
          }
        });
        const spacer1 = "                  ";
        const spacer2 = "    ";
        const spacer3 = "         ";
        result.newline();
        result.align("center").line(spacer1 + "Total: " + this.lastsumAfterIndividualDiscount);
        if (this.lastsumAfterIndividualDiscount != this.lastsumdisc) {
          result.line(spacer2 + "After Discount (" + Math.round(this.discount * 100) / 100 + "%): " + this.lastsumdisc);
        }
        if (this.lastsumAfterIndividualDiscount != this.lastsumtax) {
          result.line(spacer3 + "After Tax (" + Math.round(this.taxrate * 100) / 100 + "%): " + this.lastsumtax);
        }
      }

      result
        .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
        .newline()
        .line("")
        .newline()
        .cut("full");
      this.mountAlertBt(result.encode());
    }
  }

  mountAlertBt(data) {
    this.receipt = data;
    console.log(this.receipt);
    const msg1 = this.translateConfigService.getTranslatedMessage("Select your printer");
    const msg2 = this.translateConfigService.getTranslatedMessage("Cancel");
    const msg3 = this.translateConfigService.getTranslatedMessage("Select printer");
    const msg4 = this.translateConfigService.getTranslatedMessage("Select a printer!");
    const msg5 = this.translateConfigService.getTranslatedMessage(
      "There was an error connecting the printer, please try again!",
    );
    const msg6 = this.translateConfigService.getTranslatedMessage("Error activating bluetooth, please try again!");

    const alert = this.alertCtrl.create({
      //TRANSLATE THIS
      // @ts-ignore
      title: msg1.value,
      buttons: [
        {
          // @ts-ignore
          text: msg2.value,
          role: "cancel",
        },
        {
          // @ts-ignore
          text: msg3.value,
          handler: device => {
            if (!device) {
              // @ts-ignore
              this.showToast(msg4.value);
              return false;
            }
            console.log(device);
            this.print(device, this.receipt);
          },
        },
      ],
    });

    this.printer
      .enableBluetooth()
      .then(() => {
        this.printer
          .searchBluetooth()
          .then(devices => {
            devices.forEach(device => {
              //console.log("Devices: ", JSON.stringify(device));
              alert.addInput({
                name: "printer",
                value: device.address,
                label: device.name,
                type: "radio",
              });
            });
            alert.present();
          })
          .catch(error => {
            console.log(error);
            // @ts-ignore
            this.showToast(msg5.value);
            this.mountAlertBt(this.receipt);
          });
      })
      .catch(error => {
        console.log(error);
        // @ts-ignore
        this.showToast(msg6.value);
        this.mountAlertBt(this.receipt);
      });
  }
}
