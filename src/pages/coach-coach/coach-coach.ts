import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import firebase from "firebase";
import { StorageProvider } from "../../providers/storage/storage";

/**
 * Generated class for the CoachCoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-coach-coach",
  templateUrl: "coach-coach.html",
})
export class CoachCoachPage {
  notifList = [];
  userlang = this.translateConfigService.getCurrentLanguage();
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public sp: StorageProvider,
  ) {
    firebase
      .firestore()
      .collection("notifications")
      .get()
      .then(doc => {
        doc.docs.forEach(element => {
          const temp = element.data();
          temp.date = this.getDateTime(parseInt(temp.date));
          this.notifList.push(temp);
        });
        console.log(this.notifList);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachCoachPage");
  }
  userdata: any = {
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: this.translateConfigService.getCurrentLanguage(),
    logo_url:"",
    owner: "",
    owner_name: "",
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

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    //console.log(temp);
    //const temp1 = temp;

    const t =
      temp.getDate().toString() +
      "/" +
      (temp.getMonth() + 1).toString() +
      "/" +
      temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp);
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
