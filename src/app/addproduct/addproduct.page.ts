import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageProvider } from '../services/storage/storage';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { EventService } from '../services/event.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class
  AddproductPage implements OnInit {
  prodCode: any = '';
  prodName: any = '';
  prodPrice: number = null;
  prodWholesalePrice: number = null;
  prodCost: number = null;
  prodCat: any = '';
  listProduct: any;
  isProdCode000000: boolean;
  formProduct: FormGroup;
  userdata;
  uid;
  currstock: number;
  newprodCat: any = '';
  listCat: any;
  image: any = '';
  previewImage: any = '';
  temp = 'na';
  produrl: any = '';
  disabled = false;
  constructor(
    public navCtrl: Location,
    public barcodeScanner: BarcodeScanner,
    private translateConfigService: TranslateConfigService,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: EventService,
    public camera: Camera,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private webView: WebView,
    private base64: Base64,
    private backgroundMode: BackgroundMode
  ) {
    this.isProdCode000000 = false;
    this.getUserData();
    this.formProduct = this.formBuilder.group({
      prodName: new FormControl('', Validators.required),
      prodCode: new FormControl(''),
      prodPrice: new FormControl(0, Validators.required),
      prodWholesalePrice: new FormControl(0, Validators.required),
      prodCost: new FormControl(0, Validators.required),
      currstock: new FormControl(0, Validators.required),
      prodCat: new FormControl('', Validators.required),
      newprodCat: new FormControl('', Validators.compose([])),
    });
  }

  ngOnInit() {
    console.log('ionViewDidLoad AddProductCategoryPage');
    this.getCategories();
    this.disabled = false;
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.events.emitIsBack(true);
    this.events.emitBackRoute('home/transaction-product');
  }

  ionViewWillLeave() {
    this.events.emitIsBack(false);
    this.events.emitBackRoute('');
    this.prodCode = '';
    this.prodName = '';
    this.prodPrice = null;
    this.prodWholesalePrice = null;
    this.prodCost = null;
    this.prodCat = '';
    this.isProdCode000000 = false;
    this.currstock = null;
    this.newprodCat = '';
    this.image = '';
    this.temp = 'na';
    this.produrl = '';
    this.disabled = false;
  }
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
          alert('Error: ' + err);
        });
    });
  }
  getCategories() {
    this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
    });
  }

  async askCamera() {
    const getFityDest = () => {
      if (this.platform.is('android')) {
        return this.camera.DestinationType.FILE_URI;
      } else if (this.platform.is('ios')) {
        return this.camera.DestinationType.NATIVE_URI;
      }
    };
    const options: CameraOptions = {
      quality: 20,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: getFityDest(),
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 300,
      allowEdit: false,
    };
    const options1: CameraOptions = {
      quality: 20,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: getFityDest(),
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 300,
      allowEdit: false,
    };
    const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Gallery or Camera?');
    const msg2: Observable<any> = this.translateConfigService.getTranslatedMessage('Gallery');
    const msg3: Observable<any> = this.translateConfigService.getTranslatedMessage('Camera');
    const alert = await this.alertCtrl
      .create({
        message: this.subscriber(msg1),
        buttons: [
          {
            text: this.subscriber(msg3),
            handler: () => {
              this.launchCamera(options);
            },
          },
          {
            text: this.subscriber(msg2),
            handler: () => {
              this.launchCamera(options1);
            },
          },
        ],
      });
    alert.present();
  }
  async launchCamera(options) {
    // const options: CameraOptions = {
    //   quality: 20,
    //   //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   destinationType: getFityDest(),
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   correctOrientation: true,
    //   targetHeight: 300,
    //   targetWidth: 300,
    //   allowEdit: false,
    // };
    await this.backgroundMode.enable();
    this.camera
      .getPicture(options)
      .then(base64Image => {
        // this.image = 'data:image/png;base64,' + base64Image;
        this.base64.encodeFile(base64Image).then((base64File: string) => {
          this.image = base64File;
          console.log(this.image);
          this.previewImage = this.webView.convertFileSrc(base64Image);
          console.log(this.previewImage);
          this.backgroundMode.disable();
        }, (err) => {
          console.log(err);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  upload_new(name: string) {
    return new Promise(resolve => {
      this.temp = 'prodImages/' + this.uid + this.prodCode + name;
      // LET REF be tied to a particular product- we save the url in the products db
      const ref = firebase.storage().ref('prodImages/' + this.uid + this.prodCode + name);

      const uploadTask = ref.putString(this.image.split('base64,')[1], 'base64');

      this.temp = 'UPTask';

      uploadTask.then(snap => {
        snap.ref.getDownloadURL().then(url => {
          // do something with url here
          console.log('97986878789688758959', url);
          this.produrl = url;
          this.temp = url;

          resolve(this.produrl);
        });
      });
    });
  }

  addCategory() {
    // console.log(this.listCat + " and "+this.newprodCat);
    if (this.newprodCat !== '') {
      const data = {
        name: this.newprodCat,
      };
      this.sp.storageReady().then(() => {
        this.sp.addCategory(data).then();
        setTimeout(async () => {
          const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
          const toast = await this.toastCtrl.create({
            message: this.subscriber(message),
            duration: 3000,
          });
          this.newprodCat = '';

          // this.navCtrl.push(ProductListPage);
          // this.events.publish('prodAdd:created',0);
          // (this.navCtrl.parent as Tabs).select(0);
          toast.present();
        }, 1000);
      });
    }
  }

  clearFields() {
    this.prodCode = '';
    this.prodName = '';
    this.prodPrice = null;
    this.prodWholesalePrice = null;
    this.prodCost = null;
    this.prodCat = '';
    this.navCtrl.back();
  }

  addProdPic() { }

  scanQR() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.prodCode = barcodeData.text;
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

  async addproduct() {
    if (this.prodCode === '000000') {
      const msg = this.translateConfigService.getTranslatedMessage('Code not permitted. Please use a different code');
      this.isProdCode000000 = true;
      return;
    } else {
      this.isProdCode000000 = false;
    }

    this.disabled = true;

    if (!this.formProduct.valid || (this.prodCat === 'New' && this.newprodCat === '')) {
      const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Incomplete');
      const toast = await this.toastCtrl
        .create({
          message: this.subscriber(message),
          duration: 1000,
        });
      toast.present();
      this.disabled = false;
    } else {
      // old
      if (this.prodCode === '' || this.prodCode === null || this.prodCode === undefined) {
        this.prodCode = Math.round(Math.random() * 10000000).toString();
        console.log('No Code ::' + this.prodCode);
        this.formProduct.value.prodCode = this.prodCode;
      }

      if (this.newprodCat !== '') {
        this.addCategory();
        this.prodCat = this.newprodCat;
      }
      if (this.image === '') {
        const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Creating item, please wait a moment');
        const toast = await this.toastCtrl
          .create({
            message: this.subscriber(message),
            duration: 2000,
          });
        toast.present();

        const data = {
          code: this.prodCode,
          name: this.prodName,
          price: this.prodPrice,
          wholesale_price: this.prodWholesalePrice,
          cost: this.prodCost,
          cat: this.prodCat,
          url: this.produrl,
          stock_qty: this.currstock
        };

        console.log(data);
        this.temp = JSON.stringify(data);
        this.sp.storageReady().then(() => {
          this.sp.addProduct(data);
          setTimeout(async () => {
            const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
            const toast1 = await this.toastCtrl.create({
              message: this.subscriber(message1),
              duration: 2000,
            });
            this.prodCode = '';
            this.prodName = '';
            this.prodPrice = null;
            this.prodWholesalePrice = null;
            this.prodCat = '';
            this.prodCost = null;
            this.produrl = '';
            this.currstock = null;
            this.image = '';
            this.disabled = false;

            // this.navCtrl.push(ProductListPage);
            this.events.emitProdAddCreated(0);
            toast1.onDidDismiss().then(async () => {
              const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Refresh page to see changes');
              this.events.emitProductUpdateCreated(0);
              const toast2 = await this.toastCtrl
                .create({
                  message: this.subscriber(msg),
                  duration: 1500,
                });
              toast2.present();
            });
            toast1.present();
          }, 1000);
        });
      } else {
        this.temp = this.prodName;
        const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Creating item, please wait a moment');
        const toast3 = await this.toastCtrl
          .create({
            message: this.subscriber(message),
            duration: 2000,
          });
        toast3.present();
        this.upload_new(this.prodName).then(() => {
          console.log(this.formProduct.value);
          const data = {
            code: this.formProduct.value.prodCode,
            name: this.formProduct.value.prodName,
            price: this.formProduct.value.prodPrice,
            wholesale_price: this.formProduct.value.prodWholesalePrice,
            cost: this.formProduct.value.prodCost,
            cat: this.formProduct.value.prodCat,
            url: this.produrl,
            stock_qty: this.formProduct.value.currstock
          };

          console.log(data);
          this.temp = JSON.stringify(data);

          this.sp.storageReady().then(() => {
            this.sp.addProduct(data);
            setTimeout(async () => {
              const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
              const toast = await this.toastCtrl.create({
                message: this.subscriber(message1),
                duration: 2000,
              });
              this.prodCode = '';
              this.prodName = '';
              this.prodPrice = 0;
              this.prodWholesalePrice = 0;
              this.prodCat = '';
              this.prodCost = 0;
              this.produrl = '';
              this.image = '';
              this.disabled = false;

              // this.navCtrl.push(ProductListPage);
              this.events.emitProdAddCreated(0);
              toast.onDidDismiss().then(async () => {
                const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Refresh page to see changes');
                const toast1 = await this.toastCtrl
                  .create({
                    message: this.subscriber(msg),
                    duration: 1500,
                  });
                toast1.present();
              });
              toast.present();
            }, 1000);
          });
        });
      }
      this.events.emitProductUpdateCreated();
      this.navCtrl.back();
    }
  }
}
