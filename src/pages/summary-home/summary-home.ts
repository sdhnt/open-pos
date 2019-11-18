import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import Moment from 'moment';
/**
 * Generated class for the SummaryHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary-home',
  templateUrl: 'summary-home.html',
})
export class SummaryHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public sp: StorageProvider, public events: Events, 
    public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryHomePage');
    this.getTransac();
  }

  listtransac: any;
  getTransac(){
    this.sp.storageReady().then(() => {
      this.sp.getTransactions().then((val) => {
       this.listtransac = JSON.parse(val);
       console.log(this.listtransac);
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
    
  }

  getDateTime(datetime){
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    var temp= new Date(datetime);
    var temp1=temp;
    var t=temp.getDate()+"/"+temp.getMonth()+ "/"+temp.getFullYear()+" "+temp.getHours()+":"+temp.getMinutes();
    return (t);

  }

}
