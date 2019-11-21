import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { SingleProductPage } from '../singleproduct/singleproduct';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  

  selectedItem: any;
  searchterm: any ="";
  selectedCat: any=[];
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  listProducts: any;
  filteredList: any;
  listArray: any =[];
  listCat : any;
  constructor(public navCtrl: NavController, private translateConfigService: TranslateConfigService,public navParams: NavParams,public sp: StorageProvider, public events: Events, 
    public toastCtrl: ToastController) {

    this.events.subscribe('prodAdd:created',(data) => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      this.getProducts();
    
    });
    this.ionViewDidLoad();
    this.getCategories();
  }

  ionViewDidLoad() {
    this.getProducts();
    
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
  backBtn(){
      //Hide back btn if src is tab
      this.navCtrl.pop();
    
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

  singleProduct(data){
    this.navCtrl.setRoot(SingleProductPage, {'data': data});
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

  swapUp(prodCodeOld: string){
    this.sp.storageReady().then(() => {
      this.sp.swapProductUp(prodCodeOld).then(()=>{
        this.getProducts();
      })
    })

  }

  swapDown(prodCodeOld: string){
    this.sp.storageReady().then(() => {
      this.sp.swapProductDown(prodCodeOld).then(()=>{
        this.getProducts();
      })
    })

  }



}
