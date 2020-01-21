import { Component, ViewChild } from "@angular/core";
import { NavController, Tabs, Events, ModalController } from "ionic-angular";
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
import { CoachHomePage } from "../coach-home/coach-home";

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
    private modal: ModalController,
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

  async cashbtn() {
    await this.getUserData();
    const message = this.translateConfigService.getTranslatedMessage("Balance");
    const message1 = this.translateConfigService.getTranslatedMessage("Edit");
    const message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
    const message3 = this.translateConfigService.getTranslatedMessage("Update");
    const message4 = this.translateConfigService.getTranslatedMessage("Cancel");
    const message5 = this.translateConfigService.getTranslatedMessage("OK");

    this.alertCtrl
      .create({
        //@ts-ignore
        message: message.value + ": " + this.userdata.cash_balance,

        buttons: [
          {
            //@ts-ignore
            text: message1.value,
            handler: data => {
              this.alertCtrl
                .create({
                  inputs: [
                    //@ts-ignore
                    { name: "cb", placeholder: message2.value },
                  ],
                  buttons: [
                    {
                      //@ts-ignore
                      text: message4.value,
                      role: "cancel",
                    },
                    {
                      //@ts-ignore
                      text: message3.value,
                      handler: data1 => {
                        if (data1.cb != null && data1.cb != "" && data1.cb != undefined) {
                          //console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                  ],
                })
                .present();
            },
          }, // end Edit Button
          {
            //translate these buttons
            //@ts-ignore
            text: message5.value,
            role: "Cancel",
          }, // end OK Button
        ], //end button
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

  help() {
    

    const msg = this.translateConfigService.getTranslatedMessage("View/Edit Products");
    
    let temptxt=[];
    let tempvid=[];

    firebase
      .firestore()
      .collection("tutorial").get().then( doc=> {
        //console.log(doc)
        doc.docs.forEach(element => {
          console.log(element.id + " "+ this.userdata.language)  
           if(element.id==this.userdata.language){
             element.data().text.forEach(element1 => {
               if(element1.page=="Product"){
                temptxt.push(element1);
               }
             });
             element.data().video.forEach(element2 => {
              if(element2.page=="Product"){
               tempvid.push(element2);
              }
            });
             tempvid = element.data().video;
           }
        });
      
      })
      ;


    const passedData = {
      //youtube link, required text
      //@ts-ignore
      page: msg.value,
      text: temptxt,
      video: tempvid,
    };
    const helpModal = this.modal.create("HelpPage", { data: passedData });
    helpModal.present();
  }
    
}
