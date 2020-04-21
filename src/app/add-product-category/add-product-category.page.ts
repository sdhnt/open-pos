import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageProvider } from '../services/storage/storage';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { EventService } from '../services/event.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.page.html',
  styleUrls: ['./add-product-category.page.scss'],
})
export class AddProductCategoryPage implements OnInit {
  constructor(
    private translateConfigService: TranslateConfigService,
    public sp: StorageProvider,
    public toastCtrl: ToastController,
    public events: EventService,
    private location: Location
  ) { }

  newprodCat: any = '';
  listCat: any;

  ngOnInit() {
    console.log('ionViewDidLoad AddProductCategoryPage');
    this.getCategories();
  }

  ionViewDidEnter() {
    this.events.emitIsBack(true);
    this.events.emitBackRoute('home/transaction-product')
  }

  ionViewWillLeave() {
    this.events.emitIsBack(false);
    this.events.emitBackRoute('')
  }

  ionViewDidLoad() {
  }
  getCategories() {
    this.sp.getCategories().then(value => {
      this.listCat = JSON.parse(value);
    });
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  addCategory() {
    // console.log(this.listCat + " and " + this.newprodCat);
    if (this.newprodCat !== '') {
      const data = {
        name: this.newprodCat,
      };
      this.sp.storageReady().then(() => {
        this.sp.addCategory(data).then(() => this.sp.getCategories().then(value => (this.listCat = JSON.parse(value))));
        setTimeout(async () => {
          const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Finish'));
          const toast = await this.toastCtrl.create({
            message,
            duration: 3000,
          });
          this.newprodCat = '';

          // this.navCtrl.push(ProductListPage);
          // this.events.publish('prodAdd:created',0);
          // (this.navCtrl.parent as Tabs).select(0);
          toast.present();
        }, 1000);
      });
    }
  }

  delCat(element) {
    this.sp.storageReady().then(() => {
      this.sp
        .deleteCategory(element)
        .then(() => this.sp.getCategories().then(value => (this.listCat = JSON.parse(value))));

      setTimeout(async () => {
        const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Finish'));
        const toast = await this.toastCtrl.create({
          message,
          duration: 3000,
        });
        this.getCategories();

        // this.navCtrl.push(ProductListPage);
        // this.events.publish('prodAdd:created',0);
        // (this.navCtrl.parent as Tabs).select(0);
        toast.present();
      }, 1000);
    });
  }

  goBack() {
    this.events.emitProductUpdateCreated();
    this.location.back();
  }
}
