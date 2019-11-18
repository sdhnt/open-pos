import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

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
  prodCost: number = 0;
  prodCat: any = "";
  listProduct: any;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public navParams: NavParams,
              public sp: StorageProvider,
              private toastCtrl: ToastController,
              public camera: Camera,
              ) {
    this.product = this.navParams.get("data");
    this.prodCodeOld = this.product.code;
    this.image=this.product.url;
    this.getUserData();
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
    console.log(firebase.auth().currentUser.uid);
    var ud;
    var uu;
    const snapshot = await firebase.firestore().collection('users').where("owner","==",firebase.auth().currentUser.uid).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          uu=doc.id;
          ud=doc.data();
          //this.userdata=doc.data();       
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  this.userdata=ud;
  this.uid=uu;
  console.log(this.userdata);
    
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
      allowEdit: true,
    }
    this.camera.getPicture(options).then((base64Image)=>{
      this.image = "data:image/png;base64," + base64Image;
      this.upload_new(this.product.name);
    }).catch((err)=>{console.log(err)})
  }
  temp="na";
  upload_new(name: string){ 
    return new Promise((resolve, reject) => {
      this.toastCtrl.create({
        message:"Please wait - Uploading New Image",
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
            this.toastCtrl.create({
              message:"Done Uploading",
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
        let toast = this.toastCtrl.create({
          message: 'ပြီးပြီ',
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
    if(this.newprodCat!=""){
      this.addCategory();
      this.product.cat=this.newprodCat;
    }
    
      const data = {
        "code": this.product.code,
        "name": this.product.name,
        "price": this.product.price,
        "cost": this.product.cost,
        "cat": this.product.cat,
        "url": this.product.url,
        "stock_qty":this.product.stock_qty,
      };
  
      this.sp.updateProduct(data, this.prodCodeOld).then(()=>{
        this.sp.backupStorage();
        setTimeout(() => {
          let toast = this.toastCtrl.create({
            message: "ပြီးပြီ",
            duration: 2000
          });
          toast.present();
          this.navCtrl.setRoot(ProductListPage);
        }, 1000)
        this.prodCode="";
      })
  
    
  }
  
  produrl:any="";

  
  

  deleteproduct(data){
    this.sp.storageReady().then(() => {
      this.sp.deleteProduct(data);
      
      setTimeout(() => {
        let toast = this.toastCtrl.create({
          message: "ပြီးပြီ",
          duration: 2000
        });
        toast.present();
        this.sp.backupStorage();
        this.navCtrl.setRoot(ProductListPage);
      }, 1000)
    }).catch(err => {
      console.log(err)
    });
  }
}
