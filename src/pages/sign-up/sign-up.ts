import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { DashboardPage } from '../dashboard/dashboard';
import { AllTransactionPage } from '../all-transaction/all-transaction';
import { TransactionHomePage } from '../transaction-home/transaction-home';
import { StorageProvider } from '../../providers/storage/storage';



/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  listOfBType: String[] = [];
  listOfCurrency: String[] = [];
  listOfLang: String[] = [];

  
	name: string="";
	email: string="";
  password: string="";
  businessname: string="";
  businessaddress: string="";
  businesstype: string="";
  phno: string="";
  language: string="";
  currency: string="";
  cb: number;
  discount: number;
  taxrate: number;
  nextbtn=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public toastCtrl: ToastController, public sp: StorageProvider,
      public alertCtrl: AlertController) {
    this.nextbtn=0;
    this.loadDropDowns();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.nextbtn=0;
  }

  nextPg(){
    this.nextbtn=1;
  }
  prevPg(){
    this.nextbtn=0;
  }

  loadDropDowns(){
    firebase.firestore().collection("sign-up").get()
    .then((doc) => {
      doc.docs[0].data().businessType.forEach((b)=>{
        this.listOfBType.push(b);
      })
      doc.docs[0].data().currency.forEach((c)=>{
        this.listOfCurrency.push(c);
      })
      doc.docs[0].data().language.forEach((l)=>{
        this.listOfLang.push(l);
      })
    })
  }


  
  signup(){

    this.toastCtrl.create({
      message: "သင်၏ပရိုဖိုင်းကိုဖန်တီးနေစဉ်ခဏစောင့်ပါ...",
      duration: 3000
      
    }).present();
  	firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
  	(data) 	=> {

  		let newUser: firebase.User = data.user;
  		newUser.updateProfile({
  		displayName: this.name,
  		}).then( (res) =>{
      console.log("Profile Updated")

      firebase.firestore().collection("users").add({
        // file_name: this.text,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        owner: firebase.auth().currentUser.uid,
        owner_name: firebase.auth().currentUser.displayName,
        business_name: this.businessname,
        businesstype: this.businesstype,
        business_address: this.businessaddress,
        ph_no: this.phno,
        language: this.language,
        currency: this.currency,
        cash_balance: this.cb,
        discount: this.discount,
        taxrate: this.taxrate,
      }).then(async (doc) => {
        console.log(doc);
      this.alertCtrl.create({
      title: "Account Created",
      message: "သင်၏အကောင့်ကိုအောင်မြင်စွာဖန်တီးလိုက်ပြီ.",
      buttons:[{

      text: "OK",
      handler: () => {
        this.sp.clearMem();
        this.sp.setMem();        
        this.navCtrl.setRoot(TransactionHomePage)//navigate to feeds page
      }//end handler
      }]//end button

      }).present();
      
  		}).catch((err)=>{
  		console.log(err)});
  		
  	}).catch( (err) => {
  		console.log(err)
    this.toastCtrl.create({

    message: err.message,
    duration: 3000
  }).present();


  	});

  });
}
  goBack(){
  this.navCtrl.pop();
  }
}