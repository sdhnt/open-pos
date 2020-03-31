import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { StorageProvider } from '../services/storage/storage';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionHomePage } from '../transaction-home/transaction-home.page';
import { cloneDeep, isEqual } from 'lodash';
import * as firebase from 'firebase';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelpPage } from '../help/help.page';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  temptimes: any;
  tempuser: any;
  user: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: 'en',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };
  oldUser: any = {
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: 'en',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };
  formUser: FormGroup;
  submitButton: boolean;
  listOfBType: string[] = [];
  listOfCurrency: string[] = [];
  listOfLang: string[] = [];
  toggleSaver = true;

  constructor(
    private sp: StorageProvider,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private translateConfigService: TranslateConfigService,
    public alertCtrl: AlertController,
    private modal: ModalController,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private event: EventService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params.res) {
        const res = JSON.parse(params.res);
        this.temptimes = res.timestamp;
        this.tempuser = res.user;
      }
    });
    console.log(this.temptimes + ' ' + this.tempuser);
    this.user = {
      business_address: '',
      business_name: '',
      cash_balance: '',
      currency: '',
      created: '',
      language: 'en',
      owner: '',
      owner_name: '',
      ph_no: '',
      businesstype: '',
      taxrate: 0.0,
      discount: 0.0,
    };
    this.oldUser = {
      business_address: '',
      business_name: '',
      cash_balance: '',
      currency: '',
      created: '',
      language: 'en',
      owner: '',
      owner_name: '',
      ph_no: '',
      businesstype: '',
      taxrate: 0.0,
      discount: 0.0,
    };

    this.submitButton = false;
    // this.loadDropDowns();
    this.formUser = this.formBuilder.group({
      autosave: new FormControl(0, Validators.required),
      business_name: new FormControl('', Validators.required),
      business_address: new FormControl('', Validators.required),
      owner_name: new FormControl('', Validators.required),
      businesstype: new FormControl('', Validators.required),
      ph_no: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      cash_balance: new FormControl(0, Validators.required),
      discount: new FormControl(0, Validators.required),
      taxrate: new FormControl(0, Validators.required),
      language: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    console.log('ionViewDidLoad UserProfilePage');
    this.getUser().then();
    this.oldUser = cloneDeep(this.user);
    this.event.emitIsBack(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad()');
  }

  ionViewDidEnter() {
    this.event.emitIsBack(true);
    console.log('ionViewDidLoad UserDataPage');
  }

  ionViewWillLeave() {
    this.event.emitIsBack(false);
  }

  // loadDropDowns() {
  //   firebase
  //     .firestore()
  //     .collection("sign-up")
  //     .get()
  //     .then(doc => {
  //       doc.docs[0].data().businessType.forEach(b => {
  //         this.listOfBType.push(b);
  //       });
  //       doc.docs[0].data().currency.forEach(c => {
  //         this.listOfCurrency.push(c);
  //       });
  //       doc.docs[0].data().language.forEach(l => {
  //         this.listOfLang.push(l);
  //       });
  //     });
  // }

  goBack() {
    this.location.back();
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async getUser() {
    const user = JSON.parse(await this.sp.getUserDat());
    if (user === null || !user.id) {
      console.log('user profile page: user is null');
    } else {
      this.user = user;
    }
  }

  async setUser() {
    if (!this.formUser.valid) {
      console.log('invalid user update');
      const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Incomplete');
      const toast = await this.toastCtrl
        .create({
          message: this.subscriber(message),
          duration: 1000,
        });
      toast.present();
    } else {
      console.log(this.user.language);
      await this.translateConfigService.setLanguage(this.user.language);
      this.sp.storageReady().then(() => {
        this.sp
          .setUserDat(this.user)
          .then(() => {
            console.log('new user data saved in storage');
            this.router.navigate(['/home/income-transaction']);
            // this.navCtrl.setRoot(TransactionHomePage);
          })
          .catch(error => {
            console.error(error);
          });
      });
      const message: Observable<any> = await this.translateConfigService.getTranslatedMessage('Update profile successful');
      const toast = await this.toastCtrl
        .create({
          message: this.subscriber(message),
          duration: 2000,
        });
      toast.present();
    }
  }

  onChange() {
    this.submitButton = !isEqual(this.user, this.oldUser);
  }

  toggleButton() {
    if (this.toggleSaver && this.user.autosave === 1) {
      this.toggleSaver = false;
      return;
    }
    this.toggleSaver = false;
    if (this.user.autosave === 1) {
      this.user.autosave = -1;
    } else { this.user.autosave = 1; }
    console.log(this.user.autosave);
    this.onChange();
  }

  async help() {
    const passedData = {
      // youtube link, required text
      page: 'Profile Page',
    };
    const helpModal = await this.modal.create({
      component: HelpPage,
      componentProps: {
        data: passedData
      }
    });
    helpModal.present();
  }
}
