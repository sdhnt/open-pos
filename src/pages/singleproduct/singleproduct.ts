import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';
import { ToastController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

@Component({
  selector: 'page-single-product',
  templateUrl: 'singleproduct.html'
}) 
export class SingleProductPage {

  prodCodeOld: any;
  product: any;


  prodCode: any = "";
  prodName: any = "";
  prodPrice: number = 0;
  prodWholesalePrice: number = 0;
  prodCost: number = 0;
  prodCat: any = "";
  listProduct: any;

  orgData = {
    prodCode: 0,
    prodName: "",
    prodPrice: 0,
    prodWholesalePrice: 0,
    prodCost: 0,
    stock: 0,
    prodCat: "",
    image: ""
  };

  formProduct: FormGroup;

  constructor(public navCtrl: NavController, private translateConfigService: TranslateConfigService,
              public barcodeScanner: BarcodeScanner,
              public navParams: NavParams,
              public sp: StorageProvider,
              private toastCtrl: ToastController,
              public camera: Camera,
              private formBuilder: FormBuilder,
              ) {
    this.product = this.navParams.get("data");
    this.prodCodeOld = this.product.code;
    this.image=this.product.url;

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

  newprodCat: any ="";
  listCat : any;
  getCategories(){
    //console.log(this.listCat + " and "+this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp.getCategories().then((val) => {
       this.listCat = JSON.parse(val);
        //console.log("Addprodpg: "+this.listCat)
        this.getCategories();
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
  }

  userdata;
  uid;

  async getUserData(){
    this.sp.storageReady().then(() => {
      this.sp.getUserDat().then((val) => {
       this.userdata=JSON.parse(val);
       console.log(this.userdata)
       this.uid=this.userdata.uid;
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
   }
  image: any="";
  launchCamera(){
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
    this.camera.getPicture(options).then((base64Image)=>{
      this.image = "data:image/png;base64," + base64Image;
      this.upload_new(this.product.name);
    }).catch((err)=>{console.log(err)})
  }
  temp="na";
  upload_new(name: string){ 
    return new Promise((resolve, reject) => {
      const message = this.translateConfigService.getTranslatedMessage('Please wait - Uploading new image');
      this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 1000,
      }).present();
      this.temp="prodImages/"+this.uid+ this.prodCode+ name;
      //LET REF be tied to a particular product- we save the url in the products db
      let ref = firebase.storage().ref("prodImages/"+this.uid+ this.prodCode+ name);

      let uploadTask = ref.putString(this.image.split(',')[1], "base64");

      this.temp="UPTask";

      uploadTask.then(snap => {

        snap.ref.getDownloadURL().then((url) => {
          // do something with url here
        
            this.product.url = url;
            this.temp = url;
            const message = this.translateConfigService.getTranslatedMessage('Done uploading');
            this.toastCtrl.create({
              // @ts-ignore
              message: message.value,
              duration: 1000,
            }).present();

            resolve();
            
      

        });
      
      })
    })
  }
  

  addCategory(){
    //console.log(this.listCat + " and "+this.newprodCat);
    if(this.newprodCat!=""){
    const data = {
      "name": this.newprodCat,
    };
    this.sp.storageReady().then(() => {
      this.sp.addCategory(data);
      setTimeout(()=> {
        const message = this.translateConfigService.getTranslatedMessage('Finish');
        let toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 3000
        });
        this.newprodCat="";


        //this.navCtrl.push(ProductListPage);
        //this.events.publish('prodAdd:created',0);
       // (this.navCtrl.parent as Tabs).select(0);
        toast.present();
      },1000)        
    })
  }
  }

  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
        //this.prodCode = barcodeData.text;
        //this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
        this.prodCode=barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });
  }

  updateProduct(){
    if (!this.formProduct.valid) {
      console.log('invalid product with missing fields');
    } else {
      if(this.newprodCat!=""){
        this.addCategory();
        this.product.cat=this.newprodCat;
      }

      const data = {
        "code": this.product.code,
        "name": this.product.name,
        "price": this.product.price,
        "wholesale_price": this.product.wholesale_price,
        "cost": this.product.cost,
        "cat": this.product.cat,
        "url": this.product.url,
        "stock_qty":this.product.stock_qty,
      };

      this.sp.updateProduct(data, this.prodCodeOld).then(()=>{
        this.sp.backupStorage();
        setTimeout(() => {
          const message = this.translateConfigService.getTranslatedMessage('Finish');
          let toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000
          });
          toast.present();
          this.navCtrl.push(ProductListPage);
        }, 1000)
        this.prodCode="";
      })
    }
  }
  
  produrl:any="";

  
  

  deleteproduct(data){
    this.sp.storageReady().then(() => {
      this.sp.deleteProduct(data);
      
      setTimeout(() => {
        const message = this.translateConfigService.getTranslatedMessage('Finish');
        let toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 2000
        });
        toast.present();
        this.sp.backupStorage();
        this.navCtrl.push(ProductListPage);
      }, 1000)
    }).catch(err => {
      console.log(err)
    });
  }

  discardChange(){
    this.image = this.orgData["image"] ;
    this.product.code = this.orgData["prodCode"];
    this.product.name = this.orgData["prodName"];
    this.product.price = this.orgData["prodPrice"];
    this.product.wholesale_price = this.orgData["prodWholesalePrice"];
    this.product.cost = this.orgData["prodCost"];
    this.product.stock_qty = this.orgData["stock"];
    this.product.cat = this.orgData["prodCat"];
  }
}
