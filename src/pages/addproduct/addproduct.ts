import { Component } from '@angular/core';
import { NavController, NavParams, Tabs, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider } from '../../providers/storage/storage';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'page-add-product',
  templateUrl: 'addproduct.html'
})
export class AddProductPage {

  prodCode: any = "";
  prodName: any = "";
  prodPrice: number = null;
  prodWholesalePrice: number = null;
  prodCost: number = null;
  prodCat: any = "";
  listProduct: any;

  formProduct: FormGroup;

  constructor(public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public navParams: NavParams,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: Events,
    public camera: Camera,
              private formBuilder: FormBuilder
  ) {
    this.prodCode = this.navParams.get("code");
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductCategoryPage');
    this.getCategories();
  }

  userdata;
  uid;
  currstock: number;

  async getUserData() {
    console.log(firebase.auth().currentUser.uid);
    var ud;
    var uu;
    var user;
    const snapshot = await firebase.firestore().collection('users').where("owner", "==", firebase.auth().currentUser.uid).get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          uu = doc.id;
          ud = doc.data();
          user=doc;
          
          //this.userdata=doc.data();       
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    this.userdata = ud;
    this.uid = uu;
    this.sp.addUserDat(user);
    console.log(this.userdata);
  }

  newprodCat: any = "";
  listCat: any;
  getCategories() {
    //console.log(this.listCat + " and "+this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp.getCategories().then((val) => {
        this.listCat = JSON.parse(val);
        //console.log("Addprodpg: "+this.listCat)
        this.getCategories();
      }).catch(err => {
        alert("Error: " + err);
      })
    })
  }

  image: any = "";

  launchCamera() {
    let options: CameraOptions = {
      quality: 20,
      //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 300,
      allowEdit: false,
    }
    this.camera.getPicture(options).then((base64Image) => {
      this.image = "data:image/png;base64," + base64Image;
      // console.log(base64Image)
    }).catch((err) => { console.log(err) })
  }
  temp = "na";
  upload_new(name: string) {
    return new Promise((resolve, reject) => {
      this.temp = "prodImages/" + this.uid + this.prodCode + name;
      //LET REF be tied to a particular product- we save the url in the products db
      let ref = firebase.storage().ref("prodImages/" + this.uid + this.prodCode + name);

      let uploadTask = ref.putString(this.image.split(',')[1], "base64");

      this.temp = "UPTask";

      uploadTask.then(snap => {

        snap.ref.getDownloadURL().then((url) => {
          // do something with url here

          this.produrl = url;
          this.temp = url;

          resolve();



        });

      })

    })
  }



  addCategory() {
    //console.log(this.listCat + " and "+this.newprodCat);
    if (this.newprodCat != "") {
      const data = {
        "name": this.newprodCat,
      };
      this.sp.storageReady().then(() => {
        this.sp.addCategory(data);
        setTimeout(() => {
          let toast = this.toastCtrl.create({
            message: 'ပြီးပြီ',
            duration: 3000
          });
          this.newprodCat = "";


          //this.navCtrl.push(ProductListPage);
          //this.events.publish('prodAdd:created',0);
          // (this.navCtrl.parent as Tabs).select(0);
          toast.present();
        }, 1000)
      })
    }
  }



  addProdPic() {

  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      //this.prodCode = barcodeData.text;
      //this.navCtrl.setRoot(AddProductPage,{code: barcodeData.text})
      this.prodCode = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }
  produrl: any = "";

  addproduct() {
    if (!this.formProduct.valid) {
      console.log('invalid product with missing fields');
    } else {
      if (this.newprodCat != "") {
        this.addCategory();
        this.prodCat = this.newprodCat;
      }
      if (this.image == "") {



        this.toastCtrl.create({
          message: "ပစ္စည်းဖန်တီးလျက်ရှိသည်။ ကျေးဇူးပြုပြီးခဏစောင့်ပါ။",
          duration: 2000,
        });

        const data = {
          "code": this.prodCode,
          "name": this.prodName,
          "price": this.prodPrice,
          "wholesale_price": this.prodWholesalePrice,
          "cost": this.prodCost,
          "cat": this.prodCat,
          "url": this.produrl,
          "stock_qty": this.currstock,
          //"sub-group": (productcode, itemslist)
        };

        console.log(data);
        this.temp = JSON.stringify(data);
        this.sp.storageReady().then(() => {
          this.sp.addProduct(data);
          setTimeout(() => {
            let toast = this.toastCtrl.create({
              message: 'ပြီးပြီ',
              duration: 3000
            });
            this.prodCode = "";
            this.prodName = "";
            this.prodPrice = 0;
            this.prodWholesalePrice = 0;
            this.prodCat = "";
            this.prodCost = 0;
            this.produrl = "";
            this.currstock=0;
            this.image = "";

            this.sp.backupStorage();

            //this.navCtrl.push(ProductListPage);
            this.events.publish('prodAdd:created', 0);
            (this.navCtrl.parent as Tabs).select(0);
            toast.present();
          }, 1000)
        })

      }
      else {
        this.temp = this.prodName;
        this.toastCtrl.create({
          message: "ပစ္စည်းဖန်တီးလျက်ရှိသည်။ ကျေးဇူးပြုပြီးခဏစောင့်ပါ။",
          duration: 2000,
        });
        this.upload_new(this.prodName).then(() => {


          const data = {
            "code": this.prodCode,
            "name": this.prodName,
            "price": this.prodPrice,
            "wholesale_price": this.prodWholesalePrice,
            "cost": this.prodCost,
            "cat": this.prodCat,
            "url": this.produrl,
            "stock_qty": this.currstock,
            //"sub-group": (productcode, itemslist)
          };

          console.log(data);
          this.temp = JSON.stringify(data);

          this.sp.storageReady().then(() => {
            this.sp.addProduct(data);
            setTimeout(() => {
              let toast = this.toastCtrl.create({
                message: 'ပြီးပြီ',
                duration: 3000
              });
              this.prodCode = "";
              this.prodName = "";
              this.prodPrice = 0;
              this.prodWholesalePrice = 0;
              this.prodCat = "";
              this.prodCost = 0;
              this.produrl = "";
              this.image = "";

              this.sp.backupStorage();

              //this.navCtrl.push(ProductListPage);
              this.events.publish('prodAdd:created', 0);
              (this.navCtrl.parent as Tabs).select(0);
              toast.present();
            }, 1000)
          })

        });
      }
    }
  }
}
