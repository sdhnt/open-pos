import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {SignUpPage} from '../sign-up/sign-up';
import { TransactionHomePage } from '../transaction-home/transaction-home';
import { StorageProvider } from '../../providers/storage/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string="";
  password: string="";
  selectedLanguage: string;

  listOfLang: String[] = [];

  constructor(public navCtrl: NavController, public zone: NgZone, 
    public navParams: NavParams, public toastCtrl: ToastController, public facebook: Facebook, 
    public sp: StorageProvider, public alertCtrl: AlertController, private translateConfigService: TranslateConfigService) {

      this.loadDropDowns();

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //console.log(user)// User is signed in.
          // alertCtrl.create({
  
          //   subTitle:"ကြိုဆိုပါတယ် " + user.displayName,
          //   buttons: [
          //     {
          //       text: 'Okay!',
          //       role: 'cancel',
          //     }
          //     ],
          // }).present();
    
          sp.clearMem();
          sp.setMem().then(()=>{
                   zone.run(() => {
            navCtrl.setRoot(TransactionHomePage);
        });
          
          }
            
          ); 

   
          
        } else {
          // No user is signed in.
          console.log("no-user is signed in")
        }
      });

      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    
    }

    language;


    loadDropDowns(){
      firebase.firestore().collection("sign-up").get()
      .then((doc) => {
        doc.docs[0].data().language.forEach((l)=>{
          this.listOfLang.push(l);
          console.log(this.listOfLang)
        })
      })
    }
  

  

loginWithFB(){

  this.facebook.login(['email'])
  .then((res: FacebookLoginResponse) =>{
     console.log('Logged into Facebook!', res)

     firebase.auth().signInWithCredential(
          firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
          .then( success => {
            console.log("Firebase success" , success);
            var temp=success;
            // this.alertCtrl.create({
  
            //   subTitle:"ကြိုဆိုပါတယ် " + temp.additionalUserInfo.profile['first_name'],
            //   buttons: [
            //     {
            //       text: 'Okay!',
            //       role: 'cancel',
            //     }
            //     ],
            // }).present();
        
            this.loginProcedure();
          })
          .catch(err => {
            console.log("Firebase error", err);
          });

    })
  .catch(e => console.log('Error logging into Facebook', e));

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  
  login(){      
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
      
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then( (user) => {
        
      // this.alertCtrl.create({
  
      //   subTitle:"ကြိုဆိုပါတယ် " + user.user.displayName,
      //   buttons: [
      //     {
      //       text: 'Okay!',
      //       role: 'cancel',
      //     }
      //     ],
      // }).present();
      this.loginProcedure();
    
    
      }).catch( (err) => {console.log(err)
        this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).present();
    
    
    
    
      })
        
      
      
      
      });
      //console.log(user)
 
    }

    loginAction(){
      this.toastCtrl.create({
        message: "အင်္ဂါရပ်မကြာမီဖွင့်ပါလိမ့်မည်",
        duration: 2000,
      }).present();
    }
    
    gotoSignUp(){
  
    this.navCtrl.push(SignUpPage)
  
    }

    loginProcedure(){
    
        this.zone.run(() => {

          this.sp.clearMem();

          this.sp.setMem().then(()=>{ this.navCtrl.setRoot(TransactionHomePage); })
        
        });
  
    }

    languageChanged(){
        console.log(`selected language: ${this.selectedLanguage}`);
        this.translateConfigService.setLanguage(this.selectedLanguage);
    }
  

}
