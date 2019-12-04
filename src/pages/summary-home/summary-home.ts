import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import Moment from 'moment';
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

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

  constructor(public navCtrl: NavController, private translateConfigService: TranslateConfigService,public navParams: NavParams,public sp: StorageProvider, public events: Events, 
    public toastCtrl: ToastController) {

      
    
  }

  expanded: boolean = true;
  tstoday=0;
  tsmonth=0;
  ts30=0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryHomePage');
    this.tstoday=0;
    this.tsmonth=0;
    this.ts30=0;
    this.getTransac();
  }

  listtransac: any;
  currentdatetime = new Date();
  listtransacrev: any;
  totalsaletoday: number =0;
  getTransac(){
    this.sp.storageReady().then(() => {
      this.sp.getTransactions().then((val) => {
       this.listtransac = JSON.parse(val);
       this.listtransacrev=this.listtransac.reverse();
       console.log(this.listtransac);

       this.listtransacrev.forEach(element => {
         if(this.getDate(element.datetime)==this.getDate(this.currentdatetime)){
          this.tstoday+=parseInt(element.totaldisc);
         }
         if(this.getDate(element.datetime)>this.getDate(this.currentdatetime)-30){
           this.ts30+=parseInt(element.totaldisc);
         }
         if(this.getMonth(element.datetime)==this.getMonth(this.currentdatetime)){
          this.tsmonth+=parseInt(element.totaldisc);
        }
        
       });
      }).catch(err => {
        alert("Error: "+ err);
      })
    }) 
  }

  getDateTime(datetime){
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    var temp= new Date(datetime);
    var temp1=temp;
    var t=temp.getDate()+"/"+(temp.getMonth()+1)+ "/"+temp.getFullYear()+" "+temp.getHours()+":"+temp.getMinutes();
    return (t);

  }

  getDate(datetime){
    var temp= new Date(datetime);
    var temp1=temp;
    var t=temp.getDate();
    return (t);
  }

  getMonth(datetime){
    var temp= new Date(datetime);
    var t=temp.getMonth();
    return (t);
  }

}
