import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController, Platform } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageProvider } from '../services/storage/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { UpdateStockPage } from '../update-stock/update-stock.page';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CameraPreviewPage } from '../addproduct/addproduct.page';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.page.html',
  styleUrls: ['./singleproduct.page.scss'],
})
export class SingleproductPage implements OnInit {

  constructor(
    private translateConfigService: TranslateConfigService,
    public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private toastCtrl: ToastController,
    public camera: Camera,
    private formBuilder: FormBuilder,
    private modal: ModalController,
    public events: EventService,
    private location: Location,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private imagePicker: ImagePicker,
    private base64: Base64,
    private platform: Platform,
    private webView: WebView
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.data) {
        const res = JSON.parse(params.data);
        console.log('res', res);
        this.product = res;
        console.log('this.product', this.product);
        this.prodCodeOld = this.product.code;
        this.image = this.product.url;
        this.previewImage = this.product.url;
        this.orgData.image = this.image;
        this.orgData.prodCode = this.product.code;
        this.orgData.prodName = this.product.name;
        this.orgData.prodPrice = this.product.price;
        this.orgData.prodWholesalePrice = this.product.wholesale_price;
        this.orgData.prodCost = this.product.cost;
        this.orgData.stock = this.product.stock_qty;
        this.orgData.prodCat = this.product.cat;
      }
    });
    console.log(this.product);
    this.getUserData();
    this.formProduct = this.formBuilder.group({
      prodCode: new FormControl('', Validators.required),
      prodName: new FormControl('', Validators.required),
      prodPrice: new FormControl(0, Validators.required),
      prodWholesalePrice: new FormControl(0, Validators.required),
      prodCost: new FormControl(0, Validators.required),
      currstock: new FormControl(0, Validators.required),
      prodCat: new FormControl('', Validators.required),
    });
  }
  prodCodeOld: any;
  product: any = {};

  prodCode: any = '';
  prodName: any = '';
  prodPrice = 0;
  prodWholesalePrice = 0;
  prodCost = 0;
  prodCat: any = '';
  listProduct: any;
  isProdCode000000 = false;

  orgData = {
    prodCode: '',
    prodName: '',
    prodPrice: 0,
    prodWholesalePrice: 0,
    prodCost: 0,
    stock: 0,
    prodCat: '',
    image: '',
  };

  formProduct: FormGroup;

  newprodCat: any = '';
  listCat: any;

  userdata;
  uid;
  image: any = '';
  previewImage: any = '';
  temp = 'na';
  disabled = false;

  produrl: any = '';

  ngOnInit() {
    console.log('ionViewDidLoad AddProductCategoryPage');
    this.getCategories();
    this.disabled = false;
  }

  ionViewDidLoad() {
  }

  async getCategories() {
    await this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
      console.log('CAT LIST', this.listCat);
    });
  }

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
          this.uid = this.userdata.id;
        })
        .catch(err => {
          alert('Error: ' + err);
        });
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

  async askCamera() {
    const options: CameraOptions = {
      quality: 20,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
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
      destinationType: this.camera.DestinationType.DATA_URL,
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
              this.lanuchCamPreview();
            },
          },
          {
            text: this.subscriber(msg2),
            handler: () => {
              this.launchCamera();
            },
          },
        ],
      });
    alert.present();
  }
  launchCamera() {
    if (this.platform.is('android')) {
      this.fileChooser.open().then(uri => {
        this.filePath.resolveNativePath(uri).then(file => {
          const filePath: string = file;
          if (filePath) {
            this.base64.encodeFile(filePath).then((base64File: string) => {
              this.image = base64File;
              this.previewImage = this.webView.convertFileSrc(filePath);
              this.upload_new(this.product.name);
            }, (err) => {
              console.log('err' + JSON.stringify(err));
            });
          }
        }).catch(err => console.log(err));
      }).catch(e => console.log('uri' + JSON.stringify(e)));
    } else if (this.platform.is('ios')) {
      this.imagePicker.getPictures({ outputType: 1 }).then((results) => {
        // console.log('Image URI: ' + results[0]);
        this.image = results[0];
        this.previewImage = results[0];
        this.upload_new(this.product.name);
      }, (err) => {
        console.log(err);
      });
    }
  }
  async lanuchCamPreview() {
    const modal = await this.modalCtrl.create({
      // tslint:disable-next-line: no-use-before-declare
      component: CameraPreviewPage
    });
    modal.present();
    modal.onDidDismiss().then(data => {
      console.log(data);
      if (data.data) {
        this.image = data.data;
        this.previewImage = data.data;
        this.upload_new(this.product.name);
      }
    });
  }
  upload_new(name: string) {
    return new Promise(async (resolve, reject) => {
      const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Please wait - Uploading new image');
      const toast = await this.toastCtrl
        .create({
          message: this.subscriber(message),
          duration: 1000,
        });
      toast.present();
      this.temp = 'prodImages/' + this.uid + this.prodCode + name;
      // LET REF be tied to a particular product- we save the url in the products db
      const ref = firebase.storage().ref('prodImages/' + this.uid + this.prodCode + name);

      const uploadTask = ref.putString(this.image.split('base64,')[1], 'base64');

      this.temp = 'UPTask';

      uploadTask.then(async snap => {
        snap.ref.getDownloadURL().then(async url => {
          // do something with url here

          this.product.url = url;
          this.temp = url;
          const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Done uploading');
          const tost = await this.toastCtrl
            .create({
              message: this.subscriber(message1),
              duration: 1000,
            });
          tost.present();

          resolve();
        });
      });
    });
  }

  async confirmDelete(product) {
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Ok');
    const a = await this.alertCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: this.subscriber(message),
          role: 'cancel',
        },
        {
          text: this.subscriber(message1),
          handler: () => {
            this.deleteproduct(product);
          },
        },
      ],
    });
    a.present();
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

  scanQR() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        // this.prodCode = barcodeData.text;
        // this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
        this.prodCode = barcodeData.text;
        this.product.code = barcodeData.text;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  async updateProduct() {
    if (this.product.code === '000000') {
      const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Code not permitted. Please use a different code');
      const toast = await this.toastCtrl.create({
        message: this.subscriber(msg),
        duration: 3000,
      });
      toast.present();
      this.isProdCode000000 = true;
      return;
    } else {
      this.isProdCode000000 = false;
    }
    this.disabled = true;
    if (!this.formProduct.valid) {
      console.log('invalid product with missing fields');
      const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Please fill all the information!');
      const toast = await this.toastCtrl.create({
        message: this.subscriber(message),
        duration: 2000,
      });
      toast.present();
      this.disabled = false;
    } else {
      if (this.newprodCat !== '') {
        this.addCategory();
        this.product.cat = this.newprodCat;
      }

      const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Modifying item, please wait a moment');
      const toast = await this.toastCtrl.create({
        message: this.subscriber(message),
        duration: 2000,
      });
      toast.present();

      const data = {
        ...this.product,
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
        setTimeout(async () => {
          const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
          const toast1 = await this.toastCtrl.create({
            message: this.subscriber(message1),
            duration: 2000,
          });
          toast1.present();
          this.disabled = false;
          this.events.emitProductUpdateCreated();
          this.location.back();
        }, 1000);
        this.prodCode = '';
      });
    }
  }

  async deleteproduct(data) {
    this.disabled = true;

    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Deleting item, please wait a moment');
    const toast = await this.toastCtrl.create({
      message: this.subscriber(message),
      duration: 2000,
    });
    toast.present();
    this.disabled = false;

    this.sp
      .storageReady()
      .then(() => {
        this.sp.deleteProduct(data);

        setTimeout(async () => {
          const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
          const toast1 = await this.toastCtrl.create({
            message: this.subscriber(message1),
            duration: 2000,
          });
          toast1.present();
          this.events.emitProductUpdateCreated();
          this.location.back();
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async discardChange() {
    console.log({ product: this.product, orgPr: this.orgData });
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Changes discarded');
    this.image = this.orgData.image;
    this.product.code = this.orgData.prodCode;
    this.product.name = this.orgData.prodName;
    this.product.price = this.orgData.prodPrice;
    this.product.wholesale_price = this.orgData.prodWholesalePrice;
    this.product.cost = this.orgData.prodCost;
    this.product.stock_qty = this.orgData.stock;
    this.product.cat = this.orgData.prodCat;

    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(message),
        duration: 2500,
      });
    toast.present();
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

  async goToUpdateStock() {
    const m = await this.modal.create({
      component: UpdateStockPage,
      componentProps: {
        product: this.product
      }
    });
    m.present();
    m.onDidDismiss().then(async data => {
      if (data === 'cancel') {
      } else {
        const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Finish');
        const toast = await this.toastCtrl.create({
          message: this.subscriber(message),
          duration: 2000,
        });
        toast.present();
        toast.onDidDismiss().then(() => {
          this.events.emitProductUpdateCreated();
          this.location.back();
        });
      }
    });
  }
}
