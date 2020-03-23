import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../services/storage/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BusinessCardPage } from '../business-card/business-card.page';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {

  constructor(private sp: StorageProvider, private router: Router, private modalCtrl: ModalController) { }
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
    this.getUser();
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.router.navigate(['/home']);
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
          console.log(this.user.language);
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
    const m = await this.modalCtrl.create({
      component: BusinessCardPage,
      componentProps: {
        userdata: this.user
      }
    });
    m.present();
  }
}
