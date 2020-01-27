import { Component } from "@angular/core";
import { NavController, NavParams, Tabs, Events, AlertController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { StorageProvider } from "../../providers/storage/storage";
import { ToastController } from "ionic-angular";
import { ProductListPage } from "../product-list/product-list";
import { Camera, CameraOptions } from "@ionic-native/camera";
import firebase from "firebase";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  selector: "page-add-product",
  templateUrl: "addproduct.html",
})
export class AddProductPage {
  prodCode: any = "";
  prodName: any = "";
  prodPrice: number = null;
  prodWholesalePrice: number = null;
  prodCost: number = null;
  prodCat: any = "";
  listProduct: any;
  isProdCode000000: boolean;

  formProduct: FormGroup;

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: Events,
    public camera: Camera,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
  ) {
    this.isProdCode000000 = false;
    this.prodCode = this.navParams.get("code");
    this.getUserData();
    this.formProduct = this.formBuilder.group({
      prodName: new FormControl("", Validators.required),
      prodPrice: new FormControl(0, Validators.required),
      prodWholesalePrice: new FormControl(0, Validators.required),
      prodCost: new FormControl(0, Validators.required),
      currstock: new FormControl(0, Validators.required),
      prodCat: new FormControl("", Validators.required),
      newprodCat: new FormControl("", Validators.compose([])),
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddProductCategoryPage");
    this.getCategories();
    this.disabled = false;
  }

  userdata;
  uid;
  currstock: number;

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          this.uid = this.userdata.id;
          console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  newprodCat: any = "";
  listCat: any;
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

  image: any = "";

  askCamera(){
    const options: CameraOptions = {
      quality: 20,
      //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 300,
      allowEdit: false,
    };
    const options1: CameraOptions = {
      quality: 20,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 300,
      allowEdit: false,
    };
    this.alertCtrl.create({
      message: "Gallery or Camera?",
      buttons: [
        {

          text: "Camera",
          handler: ()=>{
            this.launchCamera(options)
          }
        },
        {

          text: "Gallery",
          handler: ()=>{
            this.launchCamera(options1)
          }
        },
      ]
    }).present();
  }
  launchCamera(options) {
    // const options: CameraOptions = {
    //   quality: 20,
    //   //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   correctOrientation: true,
    //   targetHeight: 300,
    //   targetWidth: 300,
    //   allowEdit: false,
    // };
    this.camera
      .getPicture(options)
      .then(base64Image => {
        this.image = "data:image/png;base64," + base64Image;
        // console.log(base64Image)
      })
      .catch(err => {
        console.log(err);
      });
  }
  temp = "na";
  upload_new(name: string) {
    return new Promise((resolve, reject) => {
      this.temp = "prodImages/" + this.uid + this.prodCode + name;
      //LET REF be tied to a particular product- we save the url in the products db
      const ref = firebase.storage().ref("prodImages/" + this.uid + this.prodCode + name);

      const uploadTask = ref.putString(this.image.split(",")[1], "base64");

      this.temp = "UPTask";

      uploadTask.then(snap => {
        snap.ref.getDownloadURL().then(url => {
          // do something with url here

          this.produrl = url;
          this.temp = url;

          resolve();
        });
      });
    });
  }

  addCategory() {
    //console.log(this.listCat + " and "+this.newprodCat);
    if (this.newprodCat != "") {
      const data = {
        name: this.newprodCat,
      };
      this.sp.storageReady().then(() => {
        this.sp.addCategory(data);
        setTimeout(() => {
          const message = this.translateConfigService.getTranslatedMessage("Finish");
          const toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 3000,
          });
          this.newprodCat = "";

          //this.navCtrl.push(ProductListPage);
          //this.events.publish('prodAdd:created',0);
          // (this.navCtrl.parent as Tabs).select(0);
          toast.present();
        }, 1000);
      });
    }
  }

  clearFields() {
    this.prodCode = "";
    this.prodName = "";
    this.prodPrice = null;
    this.prodWholesalePrice = null;
    this.prodCost = null;
    this.prodCat = "";
    this.navCtrl.pop();
  }

  addProdPic() {}

  scanQR() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.prodCode = barcodeData.text;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  produrl: any = "";
  disabled = false;

  addproduct() {
    if (this.prodCode == "000000") {
      const msg = this.translateConfigService.getTranslatedMessage("Code not permitted. Please use a different code");
      const toast = this.toastCtrl
        .create({
          //@ts-ignore
          message: msg.value,
          duration: 3000,
        })
        .present();
      this.isProdCode000000 = true;
      return;
    } else {
      this.isProdCode000000 = false;
    }

    this.disabled = true;

    if (!this.formProduct.valid || (this.prodCat == "New" && this.newprodCat == "")) {
      const message = this.translateConfigService.getTranslatedMessage("Incomplete");
      this.toastCtrl
        .create({
          // @ts-ignore
          message: message.value,
          duration: 1000,
        })
        .present();
      this.disabled = false;
    } else {
      //old
      if (this.prodCode == "" || this.prodCode == null || this.prodCode == undefined) {
        this.prodCode = Math.round(Math.random() * 10000000000).toString();
        console.log("No Code ::" + this.prodCode);
      }

      if (this.newprodCat != "") {
        this.addCategory();
        this.prodCat = this.newprodCat;
      }
      if (this.image == "") {
        const message = this.translateConfigService.getTranslatedMessage("Creating item, please wait a moment");
        this.toastCtrl
          .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
          })
          .present();

        const data = {
          code: this.prodCode,
          name: this.prodName,
          price: this.prodPrice,
          wholesale_price: this.prodWholesalePrice,
          cost: this.prodCost,
          cat: this.prodCat,
          url: this.produrl,
          stock_qty: this.currstock,
          //"sub-group": (productcode, itemslist)
        };

        console.log(data);
        this.temp = JSON.stringify(data);
        this.sp.storageReady().then(() => {
          this.sp.addProduct(data);
          setTimeout(() => {
            const message = this.translateConfigService.getTranslatedMessage("Finish");
            const toast = this.toastCtrl.create({
              // @ts-ignore
              message: message.value,
              duration: 2000,
            });
            this.prodCode = "";
            this.prodName = "";
            this.prodPrice = null;
            this.prodWholesalePrice = null;
            this.prodCat = "";
            this.prodCost = null;
            this.produrl = "";
            this.currstock = null;
            this.image = "";
            this.disabled = false;

            this.sp.backupStorage();

            //this.navCtrl.push(ProductListPage);
            this.events.publish("prodAdd:created", 0);
            toast.present();
            toast.onDidDismiss(() => {
              const msg = this.translateConfigService.getTranslatedMessage("Refresh page to see changes");
              this.toastCtrl
                .create({
                  //@ts-ignore
                  message: msg.value,
                  duration: 1500,
                })
                .present();
            });
          }, 1000);
        });
      } else {
        this.temp = this.prodName;
        const message = this.translateConfigService.getTranslatedMessage("Creating item, please wait a moment");
        this.toastCtrl
          .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
          })
          .present();
        this.upload_new(this.prodName).then(() => {
          const data = {
            code: this.prodCode,
            name: this.prodName,
            price: this.prodPrice,
            wholesale_price: this.prodWholesalePrice,
            cost: this.prodCost,
            cat: this.prodCat,
            url: this.produrl,
            stock_qty: this.currstock,
            //"sub-group": (productcode, itemslist)
          };

          console.log(data);
          this.temp = JSON.stringify(data);

          this.sp.storageReady().then(() => {
            this.sp.addProduct(data);
            setTimeout(() => {
              const message = this.translateConfigService.getTranslatedMessage("Finish");
              const toast = this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 2000,
              });
              this.prodCode = "";
              this.prodName = "";
              this.prodPrice = 0;
              this.prodWholesalePrice = 0;
              this.prodCat = "";
              this.prodCost = 0;
              this.produrl = "";
              this.image = "";
              this.disabled = false;

              this.sp.backupStorage();
              //this.navCtrl.push(ProductListPage);
              this.events.publish("prodAdd:created", 0);
              toast.present();
              toast.onDidDismiss(() => {
                const msg = this.translateConfigService.getTranslatedMessage("Refresh page to see changes");
                this.toastCtrl
                  .create({
                    //@ts-ignore
                    message: msg.value,
                    duration: 1500,
                  })
                  .present();
              });
            }, 1000);
          });
        });
      }
      this.events.publish("productUpdate:created");
      this.navCtrl.pop();
    }
  }
}
