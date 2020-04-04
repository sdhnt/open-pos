import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { Observable } from 'rxjs';
import { StorageProvider } from '../services/storage/storage';
import { PopoverController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cash-popover',
  templateUrl: './cash-popover.page.html',
  styleUrls: ['./cash-popover.page.scss'],
})
export class CashPopoverPage implements OnInit {
  newMessage: string;
  newMessage1: string;
  newMessage2: string;
  newMessage3: string;
  newMessage4: string;
  newMessage5: string;
  newMs: string;
  userdata: any;
  newMs1: string;
  constructor(public alertCtrl: AlertController, private popoverController: PopoverController, public sp: StorageProvider, private translateConfigService: TranslateConfigService) { }

  ngOnInit() {
    this.getUserData();
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Balance');
    const message1: Observable<any> = this.translateConfigService.getTranslatedMessage('Edit');
    const message2: Observable<any> = this.translateConfigService.getTranslatedMessage('Enter Current Cash Balance');
    const message3: Observable<any> = this.translateConfigService.getTranslatedMessage('Update');
    const message4: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const message5: Observable<any> = this.translateConfigService.getTranslatedMessage('OK');
    const ms: Observable<any> = this.translateConfigService.getTranslatedMessage('Cash Balance');
    const ms1: Observable<any> = this.translateConfigService.getTranslatedMessage('cashbalancedescrip');

    this.newMessage = this.subscriber(message);
    this.newMessage1 = this.subscriber(message1);
    this.newMessage2 = this.subscriber(message2);
    this.newMessage3 = this.subscriber(message3);
    this.newMessage4 = this.subscriber(message4);
    this.newMessage5 = this.subscriber(message5);
    this.newMs = this.subscriber(ms);
    this.newMs1 = this.subscriber(ms1);
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
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

  setUsrLang() {
    console.log(this.userdata.language);
    this.translateConfigService.setLanguage(this.userdata.language);
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

  async edit() {
    const alert = await this.alertCtrl
      .create({
        inputs: [
          { name: 'cb', placeholder: this.newMessage2 },
        ],
        buttons: [
          {
            text: this.newMessage4,
            role: 'cancel',
          },
          {
            text: this.newMessage3,
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
  }
}

