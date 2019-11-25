import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events, Tabs } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the TransactionProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-product',
  templateUrl: 'transaction-product.html',
})
export class TransactionProductPage {

  constructor(public navCtrl: NavController, private translateConfigService: TranslateConfigService, public navParams: NavParams, public sp: StorageProvider, public events: Events,
    public toastCtrl: ToastController) {

      this.event=false;


      this.events.subscribe('addRecProd:created',(data) => {
        console.log("ENTERED!");
        console.log("Received 0 " + data);
       
        var tempdat= JSON.parse(data);
        this.getProducts(); 
        console.log(tempdat);
     
        tempdat.forEach(element => {
          this.event=true;
  
          // this.itemsname.push(element.name)
          // this.itemsprice.push(element.price);
          // this.itemsqty.push(element.qty)

          if(this.listProducts.length!=0){
            this.listProducts.forEach(element1 => {
              if(element1.name==element.name)
              {
                element1.qty=element.qty;
              }
            });
          }
        if(element.code=="000000"){
          this.calcitems.push(element);
        }
        
          
        });
        console.log(this.calcitems)
      });

      this.events.subscribe('addSingleProd:created',(data, index, fulldat) => {
        console.log("ENTERED!");
        console.log("Received 1 " + data + index);
        this.recitemslist=JSON.parse(fulldat);

        this.index=parseInt(index);


       
        var tempdat= JSON.parse(data);
        this.event1=true;
        this.getProducts(); 
         this.filteredProductPrice(tempdat.price)
        //console.log(this.listProducts)
      });
  }

  calcitems: any=[];

  reset(){
   
    this.event1=false;
    this.event=false;
    this.ionViewDidLoad();

  }



  selectedItem: any;
  index;
  recitemslist: any= [];
  event=false;
  event1=false;
  searchprice:any;
  searchterm: any = "";
  selectedCat: any = [];
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  listProducts: any;
  filteredList: any;
  listArray: any = [];
  listCat: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionProductPage');
    this.getProducts();
    this.getCategories();
  }


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

  // backBtn(){
  //     //Hide back btn if src is tab
  //     this.navCtrl.pop();

  // }

  tempprodlist: any = [{}];

  addUp(index) {

    this.listProducts[index].qty++;
  }
  addDown(index) {

    if (this.listProducts[index].qty > 0) {
      this.listProducts[index].qty--;
    }

  }
  getProducts() {
    this.sp.storageReady().then(() => {
      this.sp.getProducts().then((val) => {

    

        if(this.event!=true){
          this.listProducts = JSON.parse(val);
          console.log(this.listProducts+ "yo")
          if(this.listProducts !=null){
            this.listProducts.forEach(element => {
              element.qty = 0;
            });
          }
          
        }
 
        if(this.event1!=true){
          if (this.listProducts != null) {
            this.filteredProduct();
          }
        }
      }).catch(err => {
        alert("Error: " + err);
      })
    })
  }

  filteredProduct() {

    this.filteredList = this.listProducts.filter(
      (item) => {
        //console.log(this.searchterm);
        console.log(item);
        if (item.name.toLowerCase().includes(this.searchterm.toLowerCase())) {

          if (this.selectedCat.length > 0) {
            for (var i = 0; i < this.selectedCat.length; i++) {
              if (this.selectedCat == null || item.cat.includes(this.selectedCat[i])) { return true }
            }
          }
          else {
            return true;
          }
        }
      });

  }

  singleProduct(product){
   
    var tempqty=this.recitemslist[this.index].qty;
    this.recitemslist[this.index]=product;
    this.recitemslist[this.index].qty=tempqty;

    var tempJSON = { "itemslist": this.recitemslist, };

    const myObjStr = JSON.stringify(tempJSON);
    (this.navCtrl.parent as Tabs).select(2);
    this.delay(300).then(any => {
      this.events.publish('genRec:created', myObjStr);
      console.log("Sent: " + myObjStr);
      this.getProducts(); 
      this.event=false;
      this.event1=false;
    });

    this.getProducts();

  }

  filteredProductPrice(price) {
    console.log(price);
    this.filteredList = this.listProducts.filter(
      (item) => {

        console.log(item.price + " and "+price);
        //console.log(this.searchterm);
        
        if (item.price==price) {
          console.log("HEAVY APRTY");
          return true;
          
        }
        else{
          false;
        }

        
      });

      
      // if(this.filteredList.length==0)
      // {
      //   this.filteredProduct();
      // }

  }

  datlist: any = [];

  createRec() {
    //console.log("bangin");

    var tempJSON = { "itemslist": [], };

    this.listProducts.forEach(element => {
      if (element.qty > 0) {
        tempJSON.itemslist.push(element);
        console.log("pushed" + element);
      }
    });

    if(this.calcitems.length>0){
      console.log(this.calcitems)
      console.log(this.calcitems.length)
      this.calcitems.forEach(element => {
        tempJSON.itemslist.push(element);
      });
    }

    tempJSON.itemslist.forEach(element => {
      element.discount=0;
    });

    this.listProducts=[];
    this.calcitems=[];
    this.listArray= [];
    this.recitemslist= [];
    
    console.log(this.datlist)
    const myObjStr = JSON.stringify(tempJSON);

    (this.navCtrl.parent as Tabs).select(2);
    this.delay(300).then(any => {
      this.events.publish('genRec:created', myObjStr);

      console.log("Sent: " + myObjStr);
      this.getProducts(); 
      this.event=false;
      this.event1=false;
      //this.listProducts=
      //your task after delay.
    });

    this.getProducts();


  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }




}
