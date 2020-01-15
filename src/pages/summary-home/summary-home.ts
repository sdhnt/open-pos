import { Component, NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, Events, Tabs } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import Moment from "moment";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the SummaryHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-summary-home",
  templateUrl: "summary-home.html",
})
export class SummaryHomePage {
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public sp: StorageProvider,
    public events: Events,
    public toastCtrl: ToastController,
    public zone: NgZone,
  ) {
    this.events.subscribe("ViewRecs", data => {
      (this.navCtrl.parent as Tabs).select(2);
      console.log("ViewRecs Event");
    });
  }

  expanded = true;
  tstoday = 0;
  tsmonth = 0;
  ts30 = 0;
  usrchoice = "today";

  toggleExpanded() {
    console.log("changing: " + this.expanded);
    if (this.expanded == true) {
      this.expanded = false;
      
      // this.zone.run(()=>{
      //   //@ts-ignore
      //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
      // })
      
    } else if (this.expanded == false) {
      this.expanded = true;
    //   this.zone.run(()=>{
    //   //@ts-ignore
    //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
    // });
    }

    console.log("changed: " + this.expandedvar);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SummaryHomePage");
    this.tstoday = 0;
    this.tsmonth = 0;
    this.ts30 = 0;
    this.usrchoice = "today";
    //@ts-ignore
    //this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
    this.getTransac();
  }

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    //console.log(temp);
    const temp1 = temp;

    const t =
      temp.getDate().toString() +
      "/" +
      (temp.getMonth() + 1).toString() +
      "/" +
      temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp) +
      ":" +
      this.getSeconds(temp);
    //console.log(t)
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
  }

  getHours(datetime) {
    const temp = new Date(datetime);
    const t = temp.getHours();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  getSeconds(datetime) {
    const temp = new Date(datetime);
    const t = temp.getSeconds();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  expandTransac(transac) {
    if (transac.expanded == true) {
      transac.expanded = false;
      //@ts-ignore
      transac.expandedvar=this.translateConfigService.getTranslatedMessage("Expand").value
    } else {
      transac.expanded = true;
      //@ts-ignore
      transac.expandedvar=this.translateConfigService.getTranslatedMessage("Close").value
    }
  }

  listtransac: any;
  currentdatetime = new Date();
  listtransacrev: any;
  totalsaletoday = 0;
  getTransac() {
    this.tstoday = 0;
    this.tsmonth = 0;
    this.ts30 = 0;
    this.sp.storageReady().then(() => {
      this.sp
        .getTransactions()
        .then(val => {
          this.listtransac = JSON.parse(val);
          this.listtransac.forEach(element => {
            element.datetime1 = this.getDateTime(element.datetime);
            element.expanded = true;
            //@ts-ignore
            element.expandedvar=this.translateConfigService.getTranslatedMessage("Expand").value
          });
          this.listtransacrev = this.listtransac.reverse();
          console.log(this.listtransac);

          this.listtransacrev.forEach(element => {
            if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
              this.tstoday += parseInt(element.totaldisc);
            }
            if (this.getDate(element.datetime) > this.getDate(this.currentdatetime) - 30) {
              this.ts30 += parseInt(element.totaldisc);
            }
            if (this.getMonth(element.datetime) == this.getMonth(this.currentdatetime)) {
              this.tsmonth += parseInt(element.totaldisc);
            }
          });
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }
  //@ts-ignore  
  expandedvar=this.translateConfigService.getTranslatedMessage("Expand").value;

  // getDateTime(datetime) {
  //   //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
  //   const temp = new Date(datetime);
  //   const temp1 = temp;
  //   const t =
  //     temp.getDate() +
  //     "/" +
  //     (temp.getMonth() + 1) +
  //     "/" +
  //     temp.getFullYear() +
  //     " " +
  //     temp.getHours() +
  //     ":" +
  //     temp.getMinutes();
  //   return t;
  // }

  getDate(datetime) {
    const temp = new Date(datetime);
    const temp1 = temp;
    const t = temp.getDate();
    return t;
  }

  getMonth(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMonth();
    return t;
  }

  delTransac(transac) {
    this.sp.storageReady().then(async () => {
      await this.sp.deleteTransactions(transac);
      this.sp.backupStorage();
      setTimeout(() => {
        const message = this.translateConfigService.getTranslatedMessage("Finish");
        const toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 3000,
        });
        this.getTransac();
        toast.present();
      }, 1000);
      this.ionViewDidLoad();
    });
  }
}
