import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { UserProfilePage } from "../user-profile/user-profile";
import { StorageProvider } from "../../providers/storage/storage";
import { BusinessCardPage } from "../business-card/business-card";

/**
 * Generated class for the UserDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-user-data",
  templateUrl: "user-data.html",
})
export class UserDataPage {
  user: any = {
    autosave: 0,
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "en",
    logo_url: "",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private sp: StorageProvider,
    private modalCtrl: ModalController) {}

  language: string;

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserDataPage");
    this.getUser();
  }

  goBack() {
    this.navCtrl.setRoot(TransactionHomePage);
  }

  editProfile() {
    this.navCtrl.push(UserProfilePage);
  }

  getUser() {
    this.sp.storageReady().then(() => {
      this.sp.getUserDat().then(user => {
        if (user == null) {
          this.editProfile();
        } else {
          this.user = JSON.parse(user);
          console.log(this.user.language);
          if (this.user.language == "en") {
            this.language = "🇬🇧 English";
          } else if (this.user.language == "my") {
            this.language = "🇲🇲 ဗမာ";
          } else {
            this.language = "No language selected";
          }
        }
      });
    });
  }

  bCard(){
    let m = this.modalCtrl.create(BusinessCardPage);
    m.present();
  }
}
