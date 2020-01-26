import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";

/**
 * Generated class for the SummaryAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-summary-accounts",
  templateUrl: "summary-accounts.html",
})
export class SummaryAccountsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public sp: StorageProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SummaryAccountsPage");
    this.getTransac();
    this.getUserData();
    this.netcashtoday = 0;
    this.netcashweek = 0;
    this.netcashmonth = 0;
    this.netcashlast30 = 0;
  }

  listtransac: any = [];
  userdata: any = {
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "",
    owner: "",
    owner_name: "",
    logo_url: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  getTransac() {
    this.sp.storageReady().then(() => {
      this.sp
        .getTransactions()
        .then(val => {
          this.listtransac = JSON.parse(val);
          this.listtransac.forEach(element => {
            element.datetime1 = this.getDateTime(element.datetime);
            //element.expanded = true;
          });
          console.log(this.listtransac);
          //this.setvalues();
          // this.listtransac.forEach(element => {
          //   if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
          //     if (element.totalatax >= 0) {
          //       //this.rev += parseInt(element.totalatax);
          //       //console.log(element.totalatax)
          //       //CALCULATE PROFIT BASED ON EACH ITEM
          //     } else {
          //       //this.exp = parseInt(element.totalatax);
          //     }
          //   }
          // });
          this.getSummary();
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  getDate(datetime) {
    const temp = new Date(datetime);
    const temp1 = temp;
    const t = temp.getDate();
    return t;
  }
  currentdatetime = Date.now();
  netcashtoday = 0;
  netcashweek = 0;
  netcashmonth = 0;
  netcashlast30 = 0;
  summary: any = [];

  getSummary() {
    this.netcashtoday = 0;
    this.netcashweek = 0;
    this.netcashmonth = 0;
    this.netcashlast30 = 0;
    this.sp.storageReady().then(() => {
      this.sp.getSummary().then(val => {
        this.summary = JSON.parse(val);
        console.log(this.summary);

        this.listtransac.forEach(element => {
          if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
            this.netcashtoday += element.totalatax;
          }
        });

        this.netcashweek = this.netcashtoday;
        this.netcashmonth = this.netcashtoday;
        this.netcashlast30 = this.netcashtoday;
        for (let i = 29; i > 23; i--) {
          this.netcashweek += this.summary[i].revenue - this.summary[i].expenses;
        }
        for (let i = 29; i >= 0; i--) {
          this.netcashlast30 += this.summary[i].revenue - this.summary[i].expenses;
        }

        const currday = this.getDate(this.currentdatetime);
        console.log(currday);
        for (let i = 29; i > 29 - currday && i > -1; i--) {
          this.netcashmonth += this.summary[i].revenue - this.summary[i].expenses;
        }
        //this.getTransac();
      });
    });
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
      //temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp);
    // this.getSeconds(temp);
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
}
