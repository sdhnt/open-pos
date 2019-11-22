import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ToastController, Events } from 'ionic-angular';
import firebase from 'firebase';
import { AddProductPage } from '../addproduct/addproduct';
import { AllTransactionPage } from '../all-transaction/all-transaction'
import { IncomeTransactionPage } from '../income-transaction/income-transaction';
import { ExpenseTransactionPage } from '../expense-transaction/expense-transaction';
import { TransactionProductPage } from '../transaction-product/transaction-product';
import { StorageProvider } from '../../providers/storage/storage';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private translateConfigService: TranslateConfigService,
    public toastCtrl: ToastController,public sp: StorageProvider,
    public events: Events) {
    //this.getUserData();

    this.events.subscribe('cbUpdate:created',async (data) => {
      await this.getUserData();
    });
    
  }

async ionViewDidEnter() {
  console.log('ionViewDidLoad TransactionHomePage');

  this.delay(3000).then(()=>{
    this.getUserData();})
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
       this.setUsrLang();
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
    this.getUserData();
    this.toastCtrl.create({
      message: "ငွေလက်ကျန်: " + this.userdata.cash_balance,
      duration: 3000
    }).present();
  }

  setUsrLang(){
    this.translateConfigService.setLanguage(this.userdata.language);
    console.log(this.userdata.language)
  }

}   
