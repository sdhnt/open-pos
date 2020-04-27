import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../services/storage/storage';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { BusinessCardPage } from '../business-card/business-card.page';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  constructor(
    private sp: StorageProvider, private router: Router, private modalCtrl: ModalController,
    private event: EventService, private popover: PopoverController) {

  }
  user: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: 'en',
    logo_url: '',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };

  language: string;

  ngOnInit() {
    console.log('ionViewDidLoad UserDataPage');
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.getUser();
    this.event.emitIsBack(true);
    this.event.emitBackRoute('/home/income-transaction');
    console.log('ionViewDidLoad UserDataPage');
  }

  ionViewWillLeave() {
    this.event.emitIsBack(false);
    this.event.emitBackRoute('');
  }

  goBack() {
    this.router.navigate(['/home/income-transaction']);
    // this.navCtrl.setRoot(TransactionHomePage);
  }

  editProfile() {
    this.router.navigate(['/home/user-profile']);
    // this.navCtrl.push(UserProfilePage);
  }

  getUser() {
    this.sp.storageReady().then(() => {
      this.sp.getUserDat().then(user => {
        if (user === null) {
          this.editProfile();
        } else {
          this.user = JSON.parse(user);
          console.log(this.user);
          if (this.user.language === 'en') {
            this.language = '🇬🇧 English';
          } else if (this.user.language === 'my') {
            this.language = '🇲🇲 ဗမာ';
          } else {
            this.language = 'No language selected';
          }
        }
      });
    });
  }

  async bCard() {
    const m = await this.popover.create({
      component: BusinessCardPage,
      componentProps: {
        userdata: this.user
      },
      cssClass: 'contact-popover'
    });
    m.present();
  }
}
