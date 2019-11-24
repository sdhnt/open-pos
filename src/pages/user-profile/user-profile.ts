import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { StorageProvider } from "../../providers/storage/storage";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TransactionHomePage } from '../transaction-home/transaction-home';
import { cloneDeep, isEqual } from 'lodash';
import firebase from "firebase";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})

export class UserProfilePage {
  user: any;
  oldUser: any;
  formUser: FormGroup;
  submitButton: boolean;
  listOfBType: String[] = [];
  listOfCurrency: String[] = [];
  listOfLang: String[] = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private sp: StorageProvider,
      private formBuilder: FormBuilder,
      private toastCtrl: ToastController,
      private translateConfigService: TranslateConfigService,
  ) {
    this.user = {};
    this.oldUser = {};
    this.submitButton = false;
    this.loadDropDowns();
    this.formUser = this.formBuilder.group({
      business_name: new FormControl('', Validators.required),
      business_address: new FormControl('', Validators.required),
      owner_name: new FormControl('', Validators.required),
      businesstype: new FormControl('', Validators.required),
      ph_no: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      cash_balance: new FormControl(0, Validators.required),
      discount: new FormControl(0, Validators.required),
      taxrate: new FormControl(0, Validators.required),
      language: new FormControl('', Validators.required),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
    this.getUser();
    this.oldUser = cloneDeep(this.user);
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

  getUser() {
    this.sp.storageReady().then(() => {
      this.sp.getUserDat().then(user => {
        this.user = JSON.parse(user);
      })
    });
  }

  setUser() {
    if (!this.formUser.valid) {
      console.log('invalid user update');
      const message = this.translateConfigService.getTranslatedMessage('Incomplete');
      this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 1000,
      }).present();
    } else {
      this.sp.storageReady().then(() => {
        this.sp.setUserDat(this.user).then(() => {
          console.log('new user data saved in storage');
          this.navCtrl.setRoot(TransactionHomePage)
        }).catch(error => {
          console.error(error);
        });
      })
      const message = this.translateConfigService.getTranslatedMessage('Update profile successful');
      this.toastCtrl.create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      }).present();
    }
  }

  onChange() {
    this.submitButton = !isEqual(this.user, this.oldUser);
  }

}
