import { Component } from "@angular/core";
import { NavController, NavParams, Tabs } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { StorageProvider } from "../../providers/storage/storage";
import { ToastController } from "ionic-angular";
import { ProductListPage } from "../product-list/product-list";
import { Camera, CameraOptions } from "@ionic-native/camera";
import firebase from "firebase";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  selector: "page-single-product",
  templateUrl: "singleproduct.html",
})
export class SingleProductPage {
  prodCodeOld: any;
  product: any;

  prodCode: any = "";
  prodName: any = "";
  prodPrice = 0;
  prodWholesalePrice = 0;
  prodCost = 0;
  prodCat: any = "";
  listProduct: any;
  isProdCode000000: boolean = false;

  orgData = {
    prodCode: "",
    prodName: "",
    prodPrice: 0,
    prodWholesalePrice: 0,
    prodCost: 0,
    stock: 0,
    prodCat: "",
    image: "",
  };

  formProduct: FormGroup;

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public barcodeScanner: BarcodeScanner,
    public navParams: NavParams,
    public sp: StorageProvider,
    private toastCtrl: ToastController,
    public camera: Camera,
    private formBuilder: FormBuilder,
  ) {
    this.product = this.navParams.get("data");
    this.prodCodeOld = this.product.code;
    this.image = this.product.url;

    this.orgData["image"] = this.image;
    this.orgData["prodCode"] = this.product.code;
    this.orgData["prodName"] = this.product.name;
    this.orgData["prodPrice"] = this.product.price;
    this.orgData["prodWholesalePrice"] = this.product.wholesale_price;
    this.orgData["prodCost"] = this.product.cost;
    this.orgData["stock"] = this.product.stock_qty;
    this.orgData["prodCat"] = this.product.cat;

    this.getUserData();
    this.formProduct = this.formBuilder.group({
      prodCode: new FormControl("", Validators.required),
      prodName: new FormControl("", Validators.required),
      prodPrice: new FormControl(0, Validators.required),
      prodWholesalePrice: new FormControl(0, Validators.required),
      prodCost: new FormControl(0, Validators.required),
      currstock: new FormControl(0, Validators.required),
      prodCat: new FormControl("", Validators.required),
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddProductCategoryPage");
    this.getCategories();
    this.disabled = false;
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

  userdata;
  uid;

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
          this.uid = this.userdata.uid;
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }
  image: any = "";
  launchCamera() {
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
    this.camera
      .getPicture(options)
      .then(base64Image => {
        this.image = "data:image/png;base64," + base64Image;
        this.upload_new(this.product.name);
      })
      .catch(err => {
        console.log(err);
      });
  }
  temp = "na";
  upload_new(name: string) {
    return new Promise((resolve, reject) => {
      const message = this.translateConfigService.getTranslatedMessage("Please wait - Uploading new image");
      this.toastCtrl
        .create({
          // @ts-ignore
          message: message.value,
          duration: 1000,
        })
        .present();
      this.temp = "prodImages/" + this.uid + this.prodCode + name;
      //LET REF be tied to a particular product- we save the url in the products db
      const ref = firebase.storage().ref("prodImages/" + this.uid + this.prodCode + name);

      const uploadTask = ref.putString(this.image.split(",")[1], "base64");

      this.temp = "UPTask";

      uploadTask.then(snap => {
        snap.ref.getDownloadURL().then(url => {
          // do something with url here

          this.product.url = url;
          this.temp = url;
          const message = this.translateConfigService.getTranslatedMessage("Done uploading");
          this.toastCtrl
            .create({
              // @ts-ignore
              message: message.value,
              duration: 1000,
            })
            .present();

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

  scanQR() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        //this.prodCode = barcodeData.text;
        //this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
        this.prodCode = barcodeData.text;
        this.product.code = barcodeData.text;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  disabled = false;

  updateProduct() {
    if(this.product.code=="000000"){
      const msg = this.translateConfigService.getTranslatedMessage("Code not permitted. Please use a different code");
      let toast = this.toastCtrl.create({
        //@ts-ignore
        message: msg.value,
        duration: 3000
      });
      toast.present();
      this.isProdCode000000 = true;
      return;
    } else {
      this.isProdCode000000 = false;
    }
    this.disabled = true;
    if (!this.formProduct.valid) {
      console.log("invalid product with missing fields");
      const message = this.translateConfigService.getTranslatedMessage("Please fill all the information!");
      const toast = this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      });
      toast.present();
      this.disabled = false;
    } else {
      if (this.newprodCat != "") {
        this.addCategory();
        this.product.cat = this.newprodCat;
      }

      const message = this.translateConfigService.getTranslatedMessage("Modifying item, please wait a moment");
      const toast = this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      });
      toast.present();

      const data = {
        code: this.product.code,
        name: this.product.name,
        price: this.product.price,
        wholesale_price: this.product.wholesale_price,
        cost: this.product.cost,
        cat: this.product.cat,
        url: this.product.url,
        stock_qty: this.product.stock_qty,
      };

      this.sp.updateProduct(data, this.prodCodeOld).then(() => {
        this.sp.backupStorage();
        setTimeout(() => {
          const message = this.translateConfigService.getTranslatedMessage("Finish");
          const toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
          });
          toast.present();
          this.disabled = false;
          this.navCtrl.push(ProductListPage);
        }, 1000);
        this.prodCode = "";
      });
    }
  }

  produrl: any = "";

  deleteproduct(data) {
    this.disabled = true;

    const message = this.translateConfigService.getTranslatedMessage("Deleting item, please wait a moment");
    const toast = this.toastCtrl.create({
      // @ts-ignore
      message: message.value,
      duration: 2000,
    });
    toast.present();
    this.disabled = false;

    this.sp
      .storageReady()
      .then(() => {
        this.sp.deleteProduct(data);

        setTimeout(() => {
          const message = this.translateConfigService.getTranslatedMessage("Finish");
          const toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
          });
          toast.present();
          this.sp.backupStorage();
          this.navCtrl.push(ProductListPage);
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  discardChange() {
    const message = this.translateConfigService.getTranslatedMessage("Changes discarded");
    this.image = this.orgData["image"];
    this.product.code = this.orgData["prodCode"];
    this.product.name = this.orgData["prodName"];
    this.product.price = this.orgData["prodPrice"];
    this.product.wholesale_price = this.orgData["prodWholesalePrice"];
    this.product.cost = this.orgData["prodCost"];
    this.product.stock_qty = this.orgData["stock"];
    this.product.cat = this.orgData["prodCat"];

    const toast = this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2500,
      })
      .present();
    (this.navCtrl.parent as Tabs).select(0);
  }
}
