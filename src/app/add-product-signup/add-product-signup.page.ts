import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, ActionSheetController, Platform } from '@ionic/angular';
// import { Events } from 'ionic-angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageProvider } from '../services/storage/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { EventService } from '../services/event.service';
import { Location } from '@angular/common';
import { SheetStates } from 'ionic-custom-bottom-sheet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product-signup',
  templateUrl: './add-product-signup.page.html',
  styleUrls: ['./add-product-signup.page.scss'],
})
export class AddProductSignupPage implements OnInit {

  constructor(
    public barcodeScanner: BarcodeScanner,
    private route: ActivatedRoute,
    private translateConfigService: TranslateConfigService,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: EventService,
    public camera: Camera,
    public alertCtrl: AlertController,
    private router: Router,
    private location: Location,
    private actionCtrl: ActionSheetController,
    private platform: Platform
  ) {
    this.isProdCode000000 = false;
    this.route.queryParams.subscribe(params => {
      if (params.res) {
        const res = JSON.parse(params.res);
        this.prodCode = res.code;
      }
    });
    this.getUserData();
  }
  public BottomSheetState: SheetStates = SheetStates.Closed;
  prodName: any = '';
  prodCode: any = '';
  prodPrice: number = null;
  prodWholesalePrice: number = null;
  prodCost: number = null;
  prodCat: any = '';
  listProduct: any;
  isProdCode000000: boolean;
  mode = 0;
  finalProd: any;
  userdata;
  uid;
  currstock = 0;

  newprodCat: any = '';
  listCat: any;

  image: any = '';
  temp = 'na';
  produrl: any = '';
  disabled = false;

  ngOnInit() {
    console.log('ionViewDidLoad AddProductCategoryPage');
    this.getCategories();
    this.disabled = false;
    this.mode = 1;
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

  ionViewDidLoad() {
  }

  addMode() {
    this.mode++;
  }

  remMode() {
    this.mode--;
  }

  async getUserData() {
    return new Promise(resolve => {
      this.sp.storageReady().then(() => {
        this.sp
          .getUserDat()
          .then(async val => {
            if (val) {
              this.userdata = JSON.parse(val);
              console.log(this.userdata);
              // this.setUsrLang();
              resolve();
            } else {
              await this.getUserData();
            }
          })
          .catch(err => {
            alert('Error: ' + err);
          });
      });
    });
  }
  getCategories() {
    this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
    });
  }

  addQuantity() {
    console.log('ADD');
    this.currstock++;
  }

  remQuantity() {
    console.log('REMOVE');
    if (this.currstock >= 1) {
      this.currstock--;
    }
  }

  addCategoryBtn() {
    this.prodCat = 'New';
  }

  async openActionSheet() {
    const sheet = await this.actionCtrl.create({
      // header: 'Product Category',
      // tslint:disable-next-line: max-line-length
      header: 'Product Category',
      cssClass: 'categoryAction',
      buttons: [{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    sheet.present();
  }

  subscriber(message: Observable<any>) {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    return msg;
  }

  async askCamera() {
    const getFityDest = () => {
      if (this.platform.is('android')) {
        return this.camera.DestinationType.DATA_URL;
      } else if (this.platform.is('ios')) {
        return this.camera.DestinationType.DATA_URL;
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

    const msg1 = this.subscriber(this.translateConfigService.getTranslatedMessage('Gallery or Camera?'));
    const msg2 = this.subscriber(this.translateConfigService.getTranslatedMessage('Gallery'));
    const msg3 = this.subscriber(this.translateConfigService.getTranslatedMessage('Camera'));
    const alert = await this.alertCtrl
      .create({
        message: msg1,
        buttons: [
          {
            text: msg3,
            handler: () => {
              this.launchCamera(options);
            },
          },
          {
            text: msg2,
            handler: () => {
              this.launchCamera(options1);
            },
          },
        ],
      });
    alert.present();
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
        this.image = base64Image;
        // console.log(base64Image)
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

      const uploadTask = ref.putString(this.image.split(',')[1], 'base64');

      this.temp = 'UPTask';

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
    // console.log(this.listCat + " and "+this.newprodCat);
    if (this.newprodCat !== '') {
      const data = {
        name: this.newprodCat,
      };
      this.sp.storageReady().then(() => {
        this.sp.addCategory(data).then();
        setTimeout(async () => {
          const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Finish'));
          const toast = await this.toastCtrl.create({
            message,
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

  addProdMode() {
    this.addproduct();
  }

  startApp() {
    const navigatoinExtra: NavigationExtras = {
      queryParams: {
        // data: 'newUser',
        lang: this.translateConfigService.getCurrentLanguage(),
      }
    };
    this.router.navigate(['/home/income-transaction'], navigatoinExtra);
    this.events.emitNewUserEvent('newUser');
  }

  clearFields() {
    this.prodCode = '';
    this.prodName = '';
    this.prodPrice = null;
    this.prodWholesalePrice = null;
    this.prodCost = null;
    this.prodCat = '';
    this.location.back();
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

  async addproduct() {
    if (this.prodCode === '000000') {
      const msg = this.translateConfigService.getTranslatedMessage('Code not permitted. Please use a different code');
      this.isProdCode000000 = true;
      return;
    } else {
      this.isProdCode000000 = false;
    }

    this.disabled = true;

    if (this.prodCat === 'New' && this.newprodCat === '') {
      const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Incomplete'));
      const toast = await this.toastCtrl
        .create({
          message,
          duration: 1000,
        });
      toast.present();
      this.disabled = false;
    } else {
      // old
      if (this.prodCode === '' || this.prodCode == null || this.prodCode === undefined) {
        this.prodCode = Math.round(Math.random() * 10000000).toString();
        console.log('No Code ::' + this.prodCode);
      }

      if (this.newprodCat !== '') {
        this.addCategory();
        this.prodCat = this.newprodCat;
      }
      if (this.image === '') {
        const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Creating item, please wait a moment'));
        const toast = await this.toastCtrl
          .create({
            message,
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
          stock_qty: this.currstock,
          // "sub-group": (productcode, itemslist)
        };

        const exprod = {
          cat: 'Example',
          code: '0000',
          cost: '100',
          name: 'Example Product',
          price: '0',
          stock_qty: '10',
          url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
          wholesale_price: '0',
        };
        this.finalProd = JSON.parse(JSON.stringify(data)) || JSON.parse(JSON.stringify(exprod));
        console.log(data);
        this.temp = JSON.stringify(data);
        this.sp.storageReady().then(() => {
          this.sp.addProduct(data);
          setTimeout(async () => {
            // tslint:disable-next-line: no-shadowed-variable
            const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Finish'));
            // tslint:disable-next-line: no-shadowed-variable
            const toast = await this.toastCtrl.create({
              message,
              duration: 2000,
            });
            this.sp.deleteProduct(exprod);
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
            toast.onDidDismiss().then(() => {
              // const msg = this.translateConfigService.getTranslatedMessage("Refresh page to see changes");
              this.events.emitProductUpdateCreated(0);
              this.mode++;
              // this.toastCtrl
              //   .create({
              //     //@ts-ignore
              //     message: msg.value,
              //     duration: 1500,
              //   })
              //   .present();
            }).catch((e) => {
              console.log('error at toast', e);
            });
            toast.present();
          }, 1000);
        });
      } else {
        this.temp = this.prodName;
        const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Creating item, please wait a moment'));
        const toast = await this.toastCtrl
          .create({
            message,
            duration: 2000,
          });
        toast.present();
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
            // "sub-group": (productcode, itemslist)
          };

          console.log(data);
          this.temp = JSON.stringify(data);
          this.finalProd = JSON.parse(JSON.stringify(data));
          this.sp.storageReady().then(() => {
            this.sp.addProduct(data);
            setTimeout(async () => {
              const message1 = this.subscriber(this.translateConfigService.getTranslatedMessage('Finish'));
              const toast1 = await this.toastCtrl.create({
                message: message1,
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
              toast1.present();
              this.mode++;
              // toast.onDidDismiss(() => {
              //   //const msg = this.translateConfigService.getTranslatedMessage("Refresh page to see changes");
              //   // this.toastCtrl
              //   //   .create({
              //   //     //@ts-ignore
              //   //     message: msg.value,
              //   //     duration: 1500,
              //   //   })
              //   //   .present();
              // });
            }, 1000);
          });
        });
      }
      this.events.emitProductUpdateCreated('');
      // this.navCtrl.pop();
    }
  }
}
