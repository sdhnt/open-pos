import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ToastController, Events } from 'ionic-angular';
import { ListPage } from '../list/list';
import firebase from 'firebase';
import { AddProductPage } from '../addproduct/addproduct';
import { AllTransactionPage } from '../all-transaction/all-transaction'
import { IncomeTransactionPage } from '../income-transaction/income-transaction';
import { ExpenseTransactionPage } from '../expense-transaction/expense-transaction';
import { CalculatorPage } from '../calculator/calculator';
import { TransactionProductPage } from '../transaction-product/transaction-product';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the TransactionHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-home',
  templateUrl: 'transaction-home.html',
})
export class TransactionHomePage {

  @ViewChild('myTabs') tabRef: Tabs;

  AllTransactions = AllTransactionPage;
  IncomeTransactions = IncomeTransactionPage;
  //ExpenseTransactions = ExpenseTransactionPage;
  ExpenseTransactions = TransactionProductPage;
  
  //Calculator = CalculatorPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController,public sp: StorageProvider,
    public events: Events) {
    //this.getUserData();

    this.events.subscribe('cbUpdate:created',async (data) => {
      await this.getUserData();
    });
    
  }

  private firstLoaded: boolean = false;
async ionViewDidEnter() {
  console.log('ionViewDidLoad TransactionHomePage');

  this.delay(1000).then(()=>{
    this.getUserData();    })

}

async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
  userdata: any = {business_address: "",

  business_name: "",
  cash_balance: "",
  currency: "",
  created: "",
  language: "",
  owner: "", 
  owner_name: "",
  ph_no: "",
  businesstype: "",
  taxrate: 0.0,
  discount: 0.0,
 
}

async getUserData(){
  return new Promise((resolve, reject)=>{
    this.sp.storageReady().then(() => {
      this.sp.getUserDat().then((val) => {
       this.userdata=JSON.parse(val);
       console.log(this.userdata);
       resolve();
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
  })
 }

  openCalc(){
    //this.navCtrl.push(CalculatorPage);
    this.tabRef.select(3);
  }

  uploadbtn(){

    this.sp.backupStorage();
    this.toastCtrl.create({
  
      message: "အွန်လိုင်းအရန်သင့်သိမ်းဆည်းပြီးပါပြီ",
      duration: 2000
    }).present();
  }

  cashbtn(){
    this.toastCtrl.create({
      message: "ငွေလက်ကျန်: " + this.userdata.cash_balance,
      duration: 3000
    }).present();
  }

}   
