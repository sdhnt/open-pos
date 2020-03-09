import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BusinessCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-card',
  templateUrl: 'business-card.html',
})
export class BusinessCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessCardPage');
  }

  goBack(){
    this.view.dismiss();
  }
}
