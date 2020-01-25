import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, Events } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";

/**
 * Generated class for the AddProductCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-product-category",
  templateUrl: "add-product-category.html",
})
export class AddProductCategoryPage {
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: Events
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddProductCategoryPage");
    this.getCategories();
  }

  newprodCat: any = "";
  listCat: any;
  getCategories() {
    //console.log(this.listCat + " and " + this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp
        .getCategories()
        .then(val => {
          //console.log("val = " + val);
          this.listCat = JSON.parse(val);

          //console.log(this.listCat);
          this.getCategories();
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  addCategory() {
    //console.log(this.listCat + " and " + this.newprodCat);
    if (this.newprodCat != "") {
      const data = {
        name: this.newprodCat,
      };
      this.sp.storageReady().then(() => {
        this.sp.addCategory(data);
        setTimeout(() => {
          const message = this.translateConfigService.getTranslatedMessage("Finish");
          const toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 3000,
          });
          this.newprodCat = "";
          this.sp.backupStorage();

          //this.navCtrl.push(ProductListPage);
          //this.events.publish('prodAdd:created',0);
          // (this.navCtrl.parent as Tabs).select(0);
          toast.present();
        }, 1000);
      });
    }
  }

  delCat(element) {
    this.sp.storageReady().then(() => {
      this.sp.deleteCategory(element);
      this.sp.backupStorage();
      setTimeout(() => {
        const message = this.translateConfigService.getTranslatedMessage("Finish");
        const toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 3000,
        });
        this.getCategories();

        //this.navCtrl.push(ProductListPage);
        //this.events.publish('prodAdd:created',0);
        // (this.navCtrl.parent as Tabs).select(0);
        toast.present();
      }, 1000);
    });
  }

  goBack(){
    this.events.publish("productUpdate:created");
    this.navCtrl.pop();
  }
}
