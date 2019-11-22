import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs, ToastController, DateTime} from 'ionic-angular';
import { AllTransactionPage } from '../all-transaction/all-transaction';
import firebase from 'firebase';
import { StorageProvider } from '../../providers/storage/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ThrowStmt } from '@angular/compiler';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-transaction',
  templateUrl: 'income-transaction.html',
})
export class IncomeTransactionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, 
    public sp: StorageProvider, public toastCtrl: ToastController, private translateConfigService: TranslateConfigService,
    private barcodeScanner: BarcodeScanner) {
    
    //console.log("Recieved -1" + this.navParams.get('itemslist'));
    this.getUserData();
  
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}



taxbtn=0;

userdata: any = {business_address: "",

  business_name: "",
  cash_balance: "",
  currency: "",
  created: "",
  language: "en",
  owner: "", 
  owner_name: "",
  ph_no: "",
  businesstype: "",
  taxrate: 0.0,
  discount: 0.0,
}

discount:number=0.0;
lastsumdisc=0.0;
taxrate: number=0.0;

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



  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeTransactionPage');
    this.getCategories();
    this.getUserData();
      this.events.subscribe('genRec:created',(data) => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      var JSONitems=JSON.parse(data);
      this.datastore=JSONitems;
      console.log(this.datastore.itemslist)
      this.lastsum=0;
      for(let i = 0; i < this.datastore.itemslist.length; i++){
        this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
        console.log(this.lastsum)
      }
      this.lastsumdisc=this.lastsum*(1.0-(this.discount/100));
      this.lastsumtax=this.lastsumdisc*(1.0+(this.taxrate/100)); 
    });
  
}
temp;

updateRec(){
  this.lastsum=0;
  for(let i = 0; i < this.datastore.itemslist.length; i++){
         this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
     }
     this.lastsumdisc=this.lastsum*(1.0-(this.discount/100));
     this.lastsumtax=this.lastsumdisc*(1.0+(this.taxrate/100));  
}

setTax(){
  this.taxrate=this.userdata.taxrate;
  this.taxbtn=1;
  this.updateRec();
}
remTax(){
  this.taxbtn=0;
  this.taxrate=0.0;
  this.updateRec();
}
discbtn=0;
setDisc(){
  this.discount=this.userdata.discount;
  this.discbtn=1;
  this.updateRec();
}
remDisc(){
  this.discount=0.0;
  this.discbtn=0; 
  this.updateRec();
}

qrscan(){
  var curprod;
  this.barcodeScanner.scan().then(barcodeData => {
    this.sp.searchProduct(barcodeData.text).then(val => {
      if(val[0] != null){
        curprod=val[0];
        let toast = this.toastCtrl.create({
          message: "Found Product "+ val[0].name,
          duration: 2000
        });
        toast.present();
        curprod.qty=1;
        this.temp=curprod;

        // addQty(index){
        //   //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
        //   this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;  
      
        //   this.lastsum=0;
        //   for(let i = 0; i < this.datastore.itemslist.length; i++){
        //     this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
        //   }
        // }
        this.datastore.itemslist.push(curprod)
        //this.lastsum=this.lastsum+curprod.price;
        this.lastsum=0;
        for(let i = 0; i < this.datastore.itemslist.length; i++){
               this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
           }
           this.lastsumdisc=this.lastsum*(1.0-(this.discount/100));
            this.lastsumtax=this.lastsumdisc*(1.0+(this.taxrate/100));  

      
      }else{
        let toast = this.toastCtrl.create({
          message: "ကုန်ပစ္စည်းမရှိပါ!!!",
          duration: 2000
        });
        toast.present();
      }
    })
  }).catch(err => {
      console.log('Error', err);
  });
}


    
  dispM(){
    console.log("DisM = "+ this.displayManual)
    if(this.displayManual==0)
    {this.displayManual=1;}
    else
    {this.displayManual=0;}
  }




  result = "";
  displayManual=0;
  datastore={'itemslist':[]};
  flag_mode=0;
  showSampleRec=true;
  itemsprice: string[] = [] ;
  ctr=0;
  lastsum=0;
  lastchar="NIL"
  lastdigit=0;

	ngOnInit() {

    //this.itemsprice=JSON.parse(this.dataparm);
  }

  createRec(){
    //Nav to Rec Page
    //Build Expand Feature on REC Page
  }

  removeItem(index){
    //this.lastsum=this.lastsum-(this.datastore.itemslist[index].price*this.datastore.itemslist[index].qty);

    var rem=this.datastore.itemslist.splice(index,1);

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
    this.lastsumdisc=this.lastsum*(1.0-(this.discount/100)); 
    this.lastsumtax=this.lastsumdisc*(1.0-(this.taxrate/100)); 
    console.log("I: "+ index)
    console.log(this.datastore.itemslist[index])
    }

  addQty(index){
    //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;  

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
    this.lastsumdisc=this.lastsum*(1.0-(this.discount/100)); 
    this.lastsumtax=this.lastsumdisc*(1.0-(this.taxrate/100)); 
  }

  removeQty(index){
    //this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty=this.datastore.itemslist[index].qty-1;
    if(this.datastore.itemslist[index].qty==0){
      this.removeItem(index);
    }

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
    this.lastsumdisc=this.lastsum*(1.0-(this.discount/100)); 
    this.lastsumtax=this.lastsumdisc*(1.0-(this.taxrate/100)); 
  }

  newItemName: string="";
  newUnitPrice: number=null;
  newUnitQty: number=null;
  newItemCat: string="";

  addNewItem(){

    if(this.newItemName!="" && this.newUnitPrice!=null && this.newUnitQty!=null){

    var newitem={
      code: "000000",
      name: this.newItemName,
      price: this.newUnitPrice,
      qty: this.newUnitQty,
    }

    this.datastore.itemslist.push(newitem);
    this.newItemCat="";
    this.newItemName="";
    this.newUnitPrice=null;
    this.newUnitQty=null;

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
    this.lastsumdisc=this.lastsum*(1.0-(this.discount/100)); 
    this.lastsumtax=this.lastsumdisc*(1.0-(this.taxrate/100)); 
  }


  }


  listProducts: any;
  filteredList: any;
  listArray: any =[];
  listCat : any;
  lastsumtax;
  
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

  cancelRec(){
    this.datastore.itemslist=[];
    this.lastsum=0;
    this.lastsumdisc=0;
    this.lastsumtax=0;
    this.discount=0;
    this.taxrate=0;
    this.taxbtn=0;
    this.discbtn=0;
    this.toastCtrl.create({
      message: "ငွေလက်ခံဖြတ်ပိုင်းဖျက်သိမ်းခဲ့သည်",
      duration: 2000,
    }).present();
    
  }

  prodidlist: any=[];
  pnllist: any=[];
  datetime = Date.now();
  tax_vat: any = [];
  discountlist: any=[];


  updateProduct(){
    
      
  
  
    
  }


  async updateCb(postransacsum){

    this.getUserData();
    this.userdata.cash_balance= (parseInt(this.userdata.cash_balance)+parseInt(postransacsum)).toString();
    this.sp.setUserDat(this.userdata);
 }
  

  saveRec(){
    if(this.datastore.itemslist.length==0){     
    }
    else{
      const data = {
        "itemslist": this.datastore.itemslist,
        "totalsum": this.lastsum,
        "prodidlist": this.prodidlist,
        "pnllist": this.pnllist,
        "datetime": this.datetime,
        "taxrate": this.taxrate,
        "discountlist": this.discountlist,
        "discount": this.discount,
        "totaldisc": this.lastsumdisc,
        "totalatax":this.lastsumtax,
      };

      this.datastore.itemslist.forEach(product => {
        if(product.code!="000000"){
          const data1 = {
            "code": product.code,
            "name": product.name,
            "price": product.price,
            "cost": product.cost,
            "cat": product.cat,
            "url": product.url,
            "stock_qty":(product.stock_qty-product.qty),
          }
          this.sp.updateProduct(data1, product.code).then(()=>{
          })
        }
      });




      this.sp.storageReady().then(() => {
        console.log(data)
        this.sp.addTransactions(data);
        this.updateCb(this.lastsum).then(()=>{this.events.publish('cbUpdate:created', 0);});
          let toast = this.toastCtrl.create({
            message: 'ပြီးပြီ',
            duration: 3000
          });

      //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well 
      
      this.datastore.itemslist=[];
      this.lastsum=0;
      this.lastsumtax=0;
      this.lastsumdisc=0;
      this.discount=0;
      this.taxrate=0;
      this.taxbtn=0;
      this.discbtn=0;
      this.sp.backupStorage();
      toast.present();
      
      });
    }
  }

  addCalc(){

    (this.navCtrl.parent as Tabs).select(0);
    this.delay(300).then(any=>{
      this.events.publish('addRecCalc:created', JSON.stringify(this.datastore.itemslist));//SEND ITEMS PRICE
    
    console.log("Sent: 1332 ");
    
      //your task after delay.
    });


  }

  addSingleProd(item, index){

      
    (this.navCtrl.parent as Tabs).select(1);
    this.delay(300).then(any=>{
      this.events.publish('addSingleProd:created', JSON.stringify(item), JSON.stringify(index),JSON.stringify(this.datastore.itemslist));
    
    console.log("Sent: 1330 ");
    
      //your task after delay.
    });

   
  }

  addProdList(){
    
    (this.navCtrl.parent as Tabs).select(1);
    this.delay(300).then(any=>{
      this.events.publish('addRecProd:created', JSON.stringify(this.datastore.itemslist));
    
    console.log("Sent: 1331 ");
    
      //your task after delay.
    });

  }

  printRec(){

    this.toastCtrl.create({
  
      message: "ဒီအင်္ဂါရပ်မကြာမီဖွင့်ပါလိမ့်မည်",
      duration: 2000,
    }).present();

  }

}
