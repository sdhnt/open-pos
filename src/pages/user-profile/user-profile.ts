import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/storage/storage";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private sp: StorageProvider) {
    this.user = {};
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

}
