import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import firebase from 'firebase';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { ProductListPage } from '../product-list/product-list';
import { DashboardPage } from '../dashboard/dashboard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GeolocationService } from "../../providers/geolocation/geolocation.service";

/**
 * Generated class for the ExpensesHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses-home',
  templateUrl: 'expenses-home.html',
})
export class ExpensesHomePage {

  constructor(public navCtrl: NavController, private translateConfigService: TranslateConfigService,public navParams: NavParams,
    public sp: StorageProvider, public events: Events, public toastCtrl: ToastController, public barcodeScanner: BarcodeScanner, private gps: GeolocationService
    ) {
      this.getUserData();
      this.gps.getCoordinates().then(coordinates => {this.geolocation = coordinates}).catch(error => {console.log(error)});
  }

  prodqty;
  prodcost;
  prodcostitem;
  prodName="";
  minDate=new Date().toISOString();
  maxDate =  new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
  expirydate=new Date().toISOString();
  currtime = new Date();
  listProducts: any=[];
  filteredList: any=[];
  searchterm="";
  selectedCat: any=[];
  listCat : any;
  totalamt=0.0;
  userdata: any;
  hideButton: boolean = true;
  geolocation: {};

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensesHomePage');
    console.log(this.currtime);
    this.getProducts();
    this.getCategories();
    this.getUserData();
  }

  async getUserData(){
    this.sp.storageReady().then(() => {
      this.sp.getUserDat().then((val) => {
       this.userdata=JSON.parse(val);
       console.log(this.userdata)
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
   }

  updatebalance(edited: string){
    if(this.prodcostitem!=null && this.prodqty!=null && (edited=="prodcostitem" ||edited=="prodqty")){
      this.prodcost=this.prodqty*this.prodcostitem;
    }
    else if(this.prodcost!=null && this.prodqty!=null && (edited=="prodcost" ||edited=="prodqty")){
      this.prodcostitem=this.prodcost/this.prodqty;
    }

    
  }

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

  getProducts(){
    this.sp.storageReady().then(() => {
      this.sp.getProducts().then((val) => {
        this.listProducts = JSON.parse(val);
        if(this.listProducts!=null){
          this.filteredProduct();
        }
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
  }

  
  filteredProduct(){

    this.filteredList = this.listProducts.filter(
      (item) => { 
        //console.log(this.searchterm);
        console.log(item);
        if(item.name.toLowerCase().includes(this.searchterm.toLowerCase())){

          if(this.selectedCat.length>0){
            for(var i=0;i<this.selectedCat.length;i++){
              if(this.selectedCat==null ||  item.cat.includes(this.selectedCat[i]))
              {return true}
            }
          }
          else{
            return true;
          }
        }
    });   

    
    //console.log("FilteredProd: "+this.filteredList)
  }

  product;

  async addinventoryexpense(){
    var itemslist=[];
    var prodidlist=[];
    var pnllist=[];
    var discountlist=[];
    itemslist.push(this.product);
    prodidlist.push(this.expirydate);
    const dataexp = {
      "itemslist": itemslist,
      "totalsum": (this.prodcost*-1),
      "prodidlist": prodidlist,
      "pnllist": pnllist,
      "datetime": this.currtime,
      "taxrate": 0,
      "discountlist": discountlist,
      "discount": 0,
      "totaldisc": (this.prodcost*-1),
      "totalatax":(this.prodcost*-1),
      "geolocation": this.geolocation,
    };
        const data1 = {
          "code": this.product.code,
          "name": this.product.name,
          "price": this.product.price,
          "wholesale_price": this.product.wholesale_price,
          "cost": Math.round(((parseInt(this.product.cost)*parseInt(this.product.stock_qty))+(parseInt(this.prodcost)))/(parseInt(this.prodqty)+parseInt(this.product.stock_qty))*100)/100,
          "cat": this.product.cat,
          "url": this.product.url,
          "stock_qty":(parseInt(this.product.stock_qty)+parseInt(this.prodqty)),
        }
        await this.sp.updateProduct(data1, this.product.code).then(()=>{});






    this.sp.storageReady().then(() => {
      console.log(dataexp)
      this.sp.addTransactions(dataexp);
      this.updateCb(this.prodcost).then(()=>{this.events.publish('cbUpdate:created', 0); console.log("update")});
        const message = this.translateConfigService.getTranslatedMessage('Finish');
        let toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 3000
        });

        this.prodqty=null;
        this.prodcost=null;
        this.prodName="";
        this.expirydate=new Date().toISOString();
        this.currtime = new Date();
        this.searchterm="";
        this.selectedCat=[];

        this.totalamt=0.0;
    this.product=null;
    this.sp.backupStorage();
    toast.present();
    this.navCtrl.setRoot(DashboardPage);
      });

    //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well 
  }

  
  async updateCb(negtransacsum){

    this.getUserData();
    this.userdata.cash_balance= (parseInt(this.userdata.cash_balance)-parseInt(negtransacsum)).toString();
    this.sp.setUserDat(this.userdata);
 }

  scanQR(){    
    this.barcodeScanner.scan().then(barcodeData => {
    this.sp.searchProduct(barcodeData.text).then(val => {
      if(val[0] != null){
        const message = this.translateConfigService.getTranslatedMessage('Found Product');
        let toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value + " "+ val[0].name,
          duration: 2000
        });
        toast.present();
        this.chooseProd(val[0]);
      }else{
        const message = this.translateConfigService.getTranslatedMessage('Not found!');
        let toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 2000
        });
        toast.present();
      }
    })
  }).catch(err => {
      console.log('Error', err);
  });

  }

  chooseProd(product){
    this.prodName=product.name;
    console.log(this.prodName);
    this.product=product;
    this.hideButton = false;
  }

  clearProduct(){
    this.hideButton = true;
    this.prodName = "";
    this.product = null;
    this.prodqty = "";
    this.prodcost = "";
    this.prodcostitem = "";
  }

  // qrscan(){
  //   var curprod;
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     this.sp.searchProduct(barcodeData.text).then(val => {
  //       if(val[0] != null){
  //         curprod=val[0];
  //         let toast = this.toastCtrl.create({
  //           message: "Found Product "+ val[0].name,
  //           duration: 2000
  //         });
  //         toast.present();
  //         curprod.qty=1;
  //         this.temp=curprod;
  
  //         // addQty(index){
  //         //   //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
  //         //   this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;  
        
  //         //   this.lastsum=0;
  //         //   for(let i = 0; i < this.datastore.itemslist.length; i++){
  //         //     this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
  //         //   }
  //         // }
  //         this.datastore.itemslist.push(curprod)
  //         //this.lastsum=this.lastsum+curprod.price;
  //         this.lastsum=0;
  //         for(let i = 0; i < this.datastore.itemslist.length; i++){
  //                this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
  //            }
  //            this.lastsumdisc=this.lastsum*(1.0-(this.discount/100));
  //             this.lastsumtax=this.lastsumdisc*(1.0+(this.taxrate/100));  
  
        
  //       }else{
  //         let toast = this.toastCtrl.create({
  //           message: "ကုန်ပစ္စည်းမရှိပါ!!!",
  //           duration: 2000
  //         });
  //         toast.present();
  //       }
  //     })
  //   }).catch(err => {
  //       console.log('Error', err);
  //   });
  // }
  

}
