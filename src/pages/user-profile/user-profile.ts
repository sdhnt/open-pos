import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/storage/storage";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import { TransactionHomePage } from '../transaction-home/transaction-home';

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
  formUser: FormGroup;
  showSubmitButton: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sp: StorageProvider, private formBuilder: FormBuilder) {
    this.user = {};
    this.showSubmitButton = false;
    this.formUser = this.formBuilder.group({
      business_name: new FormControl('', Validators.required),
      business_address: new FormControl('', Validators.required),
      owner_name: new FormControl('', Validators.required),
      businesstype: new FormControl('', Validators.required),
      ph_no: new FormControl('', Validators.required),
      taxrate: new FormControl(0, Validators.required),
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
    this.getUser();
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
    } else {
      this.sp.storageReady().then(() => {
        this.sp.setUserDat(this.user).then(() => {
          console.log('new user data saved in storage');
          this.navCtrl.setRoot(TransactionHomePage)
        }).catch(error => {
          console.error(error);
        });
      })
    }
  }

}
