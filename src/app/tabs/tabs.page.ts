import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ToastController,
  AlertController,
  ModalController,
  PopoverController
} from '@ionic/angular';
// import { Events } from 'ionic-angular';
import * as firebase from 'firebase';
import { StorageProvider } from '../services/storage/storage';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import axios from 'axios';
import { Market } from '@ionic-native/market/ngx';
import { hasInternet } from '../../utilities/hasInternet';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpPage } from '../help/help.page';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { ContactUsPage } from '../contact-us/contact-us.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  // Calculator = CalculatorPage;
  userdata: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: this.translateConfigService.getCurrentLanguage(),
    logo_url: '',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };
  language;
  isBackEnable = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateConfigService: TranslateConfigService,
    public toastCtrl: ToastController,
    public sp: StorageProvider,
    private events: EventService,
    public alertCtrl: AlertController,
    private modal: ModalController,
    private appVersion: AppVersion,
    private market: Market,
    private popover: PopoverController,
    private change: ChangeDetectorRef
  ) {
    this.userdata.language = this.translateConfigService.getCurrentLanguage();
    // this.getUserData();
    // this.tutorial();
    this.route.queryParams.subscribe(params => {
      console.log('params ========================', params);
      if (params) {
        // const res = JSON.parse(params.res);
        if (params.lang) {
          this.language = params.lang;
        }
        if (params.data === 'newUser') {
          this.delay(500).then(() => {
            this.tutorial();
            this.getUserData();
          });
        }
      }
    });
    this.events.newUser.subscribe(data => {
      // this.events.unsubscribe("newUser");
      this.delay(500).then(() => {
        this.tutorial();
        this.getUserData();
      });
    });

    this.events.isback.subscribe(res => {
      console.log('isBack-------------------------->', res);
      this.isBackEnable = res;
      this.change.detectChanges();
    });

    this.events.cbUpdateCreated.subscribe(async data => {
      await this.getUserData();
    });
    const mg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Update available');
    const mg2: Observable<any> = this.translateConfigService.getTranslatedMessage('Update the app');
    const mg3: Observable<any> = this.translateConfigService.getTranslatedMessage('Not Now');
    const mg4: Observable<any> = this.translateConfigService.getTranslatedMessage('Update now');
    const url = 'https://us-central1-open-fintech.cloudfunctions.net/data/versionNumber';

    hasInternet().then(isThereInternet => {
      if (isThereInternet) {
        axios
          .get(url)
          .then(response => {
            console.log(response);
            const newestVersion = response.data.versionNumber;
            this.appVersion
              .getVersionNumber()
              .then(async version => {
                console.log(version);
                if (newestVersion > version) {
                  const alert = await this.alertCtrl
                    .create({
                      header: this.subscriber(mg1),
                      subHeader: this.subscriber(mg2),
                      buttons: [
                        {
                          text: this.subscriber(mg3),
                          role: 'cancel',
                        },
                        {
                          text: this.subscriber(mg4),
                          handler: () => {
                            // tslint:disable-next-line: max-line-length
                            // window.open("https://play.google.com/store/apps/details?id=com.openfintech.openpos", "_system", "location=yes");
                            market
                              .open('com.openfintech.openpos')
                              .then(() => {
                                console.log('Opened Google play');
                              })
                              .catch(error => {
                                console.log(error);
                              });
                          },
                        },
                      ],
                    });
                  alert.present();
                } else {
                  console.log('Version same');
                }
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

  async ngOnInit() {
    console.log('ionViewDidLoad TransactionHomePage');
    // const userSnapshot = await firebase
    //   .firestore()
    //   .collection('users')
    //   .get();
    // const dataSet = [];
    // userSnapshot.forEach(async doc => {
    //   const user = doc.data();
    //   await dataSet.push({ id: doc.id, user });
    // });
    if (
      this.language !== this.userdata.language &&
      this.language !== null &&
      this.language !== undefined
    ) {
      this.userdata.language = this.language;
    }
    this.delay(500).then(() => {
      this.getUserData();
    });
    this.isBackEnable = false;
  }

  async ionViewDidEnter() {

  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }

  async getUserData() {
    return new Promise((resolve, reject) => {
      this.sp.storageReady().then(() => {
        this.sp
          .getUserDat()
          .then(async val => {
            if (val) {
              this.userdata = JSON.parse(val);
              console.log(this.userdata);
              this.setUsrLang();
              resolve();
            } else {
              await this.getUserData();
            }
          })
          .catch(err => {
            alert('Error: ' + err);
          });
      });
    });
  }

  // openCalc() {
  //   //this.navCtrl.push(CalculatorPage);
  //   this.tabRef.select(3);
  // }

  async uploadbtn() {
    this.sp
      .backupStorage()
      .then()
      .catch();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Online backup ready');

    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Backup Online');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('backupdescrip');

    const alert = await this.alertCtrl
      .create({
        header: this.subscriber(message1),
        subHeader: this.subscriber(message2),
        buttons: [{ text: 'OK', role: 'cancel' }],
      });
    alert.present();
    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(message),
        duration: 2000,
      });
    toast.present();
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  async cashbtn() {
    await this.getUserData();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Balance');
    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Edit');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('Enter Current Cash Balance');
    const message3: Observable<any> = this.translateConfigService.getTranslatedMessage('Update');
    const message4: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const message5: Observable<any> = this.translateConfigService.getTranslatedMessage('OK');
    const ms: Observable<any> = this.translateConfigService.getTranslatedMessage('Cash Balance');
    const ms1: Observable<any> = this.translateConfigService.getTranslatedMessage('cashbalancedescrip');

    const a = await this.alertCtrl
      .create({
        header: this.subscriber(ms),
        subHeader: this.subscriber(ms1),
        message: this.subscriber(message) + ': ' + this.userdata.cash_balance,

        buttons: [
          {
            text: this.subscriber(message1),
            handler: async (data) => {
              const alert = await this.alertCtrl
                .create({
                  inputs: [
                    { name: 'cb', placeholder: this.subscriber(message2) },
                  ],
                  buttons: [
                    {
                      text: this.subscriber(message4),
                      role: 'cancel',
                    },
                    {
                      text: this.subscriber(message3),
                      handler: data1 => {
                        if (data1.cb != null && data1.cb !== '' && data1.cb !== undefined) {
                          // console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                  ],
                });
              alert.present();
            },
          }, // end Edit Button
          {
            // translate these buttons
            text: this.subscriber(message5),
            role: 'Cancel',
          }, // end OK Button
        ], // end button
      });
    a.present();
  }

  setUsrLang() {
    console.log(this.userdata.language);
    this.translateConfigService.setLanguage(this.userdata.language);
  }

  async tutorial() {
    const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Create New Sales');
    const passedData = {
      // youtube link, required text
      page: this.subscriber(msg),
    };
    const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Help Button');
    const msg2: Observable<any> = this.translateConfigService.getTranslatedMessage(
      'For any queries about a page, click the ? icon in the top right for more information',
    );
    const msg3: Observable<any> = this.translateConfigService.getTranslatedMessage(
      'For further queries, you can reach us through the Contact Us page',
    );
    const msg4: Observable<any> = this.translateConfigService.getTranslatedMessage('Contact Us');
    const msg5: Observable<any> = this.translateConfigService.getTranslatedMessage('Okay');

    const helpAlert = await this.alertCtrl.create({
      header: this.subscriber(msg1),
      subHeader: this.subscriber(msg2),
      message: this.subscriber(msg3),
      buttons: [
        {
          text: this.subscriber(msg4),
          handler: () => {
            // this.navCtrl.push(ContactUsPage);
            this.router.navigate(['/home/contact-us']);
          },
        },
        {
          text: this.subscriber(msg5),
          role: 'cancel',
        },
      ],
    });
    helpAlert.present();
  }

  async help() {
    // const msg = this.translateConfigService.getTranslatedMessage("Create New Sales");
    // const temptxt = [];
    // let tempvid = [];

    // firebase
    //   .firestore()
    //   .collection("tutorial")
    //   .get()
    //   .then(doc => {
    //     //console.log(doc)
    //     doc.docs.forEach(element => {
    //       console.log(element);
    //       if (element.id == this.userdata.language) {
    //         element.data().text.forEach(element1 => {
    //           if (element1.page == "Sale") {
    //             temptxt.push(element1);
    //           }
    //         });

    //         element.data().video.forEach(element2 => {
    //           if (element2.page == "Sale") {
    //             tempvid.push(element2);
    //           }
    //         });
    //         tempvid = element.data().video;
    //       }
    //     });
    //   });

    // const passedData = {
    //   //youtube link, required text
    //   //@ts-ignore
    //   page: msg.value,
    //   text: temptxt,
    //   video: tempvid,
    // };
    const helpModal = await this.modal.create({
      component: HelpPage
    });
    helpModal.present();
  }

  async contactpg() {
    // this.router.navigate(['/home/contact-us']);
    const helpModal = await this.modal.create({
      component: ContactUsPage
    });
    helpModal.present();
  }

  async openPopover(event) {
    const popover = await this.popover.create({
      // tslint:disable-next-line: no-use-before-declare
      component: PopOverComponent,
      event,
      translucent: true
    });
    popover.present();
  }
}

@Component({
  template: `<ion-list>
  <ion-item button (click)="uploadbtn()">
      <ion-icon class="mr-1" name="cloud-upload"></ion-icon>
      <ion-label>Upload</ion-label>
  </ion-item>
  <ion-item button (click)="cashbtn()">
      <ion-icon class="mr-1" name="logo-usd"></ion-icon>
      <ion-label>Cask Balance</ion-label>
  </ion-item>
  <ion-item button (click)="help()">
      <ion-icon class="mr-1" name="help-circle"></ion-icon>
      <ion-label>Help</ion-label>
  </ion-item>
  <ion-item button (click)="contactpg()">
      <ion-icon class="mr-1" name="call"></ion-icon>
      <ion-label>Contact us</ion-label>
  </ion-item>
</ion-list>`,
  styleUrls: ['tabs.page.scss']
})
export class PopOverComponent implements OnInit {
  userdata: any = {
    autosave: 0,
    business_address: '',
    business_name: '',
    cash_balance: '',
    currency: '',
    created: '',
    language: this.translateConfigService.getCurrentLanguage(),
    logo_url: '',
    owner: '',
    owner_name: '',
    ph_no: '',
    businesstype: '',
    taxrate: 0.0,
    discount: 0.0,
  };
  constructor(
    private sp: StorageProvider,
    private translateConfigService: TranslateConfigService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modal: ModalController,
    private modal1: ModalController
  ) {

  }
  ngOnInit() {

  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  setUsrLang() {
    console.log(this.userdata.language);
    this.translateConfigService.setLanguage(this.userdata.language);
  }

  async getUserData() {
    return new Promise((resolve, reject) => {
      this.sp.storageReady().then(() => {
        this.sp
          .getUserDat()
          .then(async val => {
            if (val) {
              this.userdata = JSON.parse(val);
              console.log(this.userdata);
              this.setUsrLang();
              resolve();
            } else {
              await this.getUserData();
            }
          })
          .catch(err => {
            alert('Error: ' + err);
          });
      });
    });
  }

  async uploadbtn() {
    // await this.modal1.dismiss();
    this.sp
      .backupStorage()
      .then()
      .catch();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Online backup ready');

    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Backup Online');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('backupdescrip');

    const alert = await this.alertCtrl
      .create({
        header: this.subscriber(message1),
        subHeader: this.subscriber(message2),
        buttons: [{ text: 'OK', role: 'cancel' }],
      });
    alert.present();
    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(message),
        duration: 2000,
      });
    toast.present();
  }

  async cashbtn() {
    // await this.modal1.dismiss();
    await this.getUserData();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Balance');
    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Edit');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('Enter Current Cash Balance');
    const message3: Observable<any> = this.translateConfigService.getTranslatedMessage('Update');
    const message4: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const message5: Observable<any> = this.translateConfigService.getTranslatedMessage('OK');
    const ms: Observable<any> = this.translateConfigService.getTranslatedMessage('Cash Balance');
    const ms1: Observable<any> = this.translateConfigService.getTranslatedMessage('cashbalancedescrip');

    const a = await this.alertCtrl
      .create({
        header: this.subscriber(ms),
        subHeader: this.subscriber(ms1),
        message: this.subscriber(message) + ': ' + this.userdata.cash_balance,

        buttons: [
          {
            text: this.subscriber(message1),
            handler: async (data) => {
              const alert = await this.alertCtrl
                .create({
                  inputs: [
                    { name: 'cb', placeholder: this.subscriber(message2) },
                  ],
                  buttons: [
                    {
                      text: this.subscriber(message4),
                      role: 'cancel',
                    },
                    {
                      text: this.subscriber(message3),
                      handler: data1 => {
                        if (data1.cb != null && data1.cb !== '' && data1.cb !== undefined) {
                          // console.log("Update CB to :"+data1.cb)
                          this.getUserData();
                          this.userdata.cash_balance = parseFloat(data1.cb).toString();
                          this.sp.setUserDat(this.userdata);
                        }
                      },
                    },
                  ],
                });
              alert.present();
            },
          }, // end Edit Button
          {
            // translate these buttons
            text: this.subscriber(message5),
            role: 'Cancel',
          }, // end OK Button
        ], // end button
      });
    a.present();
  }

  async help() {
    // await this.modal1.dismiss();
    // const msg = this.translateConfigService.getTranslatedMessage("Create New Sales");
    // const temptxt = [];
    // let tempvid = [];

    // firebase
    //   .firestore()
    //   .collection("tutorial")
    //   .get()
    //   .then(doc => {
    //     //console.log(doc)
    //     doc.docs.forEach(element => {
    //       console.log(element);
    //       if (element.id == this.userdata.language) {
    //         element.data().text.forEach(element1 => {
    //           if (element1.page == "Sale") {
    //             temptxt.push(element1);
    //           }
    //         });

    //         element.data().video.forEach(element2 => {
    //           if (element2.page == "Sale") {
    //             tempvid.push(element2);
    //           }
    //         });
    //         tempvid = element.data().video;
    //       }
    //     });
    //   });

    // const passedData = {
    //   //youtube link, required text
    //   //@ts-ignore
    //   page: msg.value,
    //   text: temptxt,
    //   video: tempvid,
    // };
    const helpModal = await this.modal.create({
      component: HelpPage
    });
    helpModal.present();
  }

  async contactpg() {
    // await this.modal1.dismiss();
    // this.router.navigate(['/home/contact-us']);
    const helpModal = await this.modal.create({
      component: ContactUsPage
    });
    helpModal.present();
  }
}
