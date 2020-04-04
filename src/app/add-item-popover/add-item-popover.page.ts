import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateConfigService } from '../services/translation/translate-config.service'
import { PopoverController, ToastController } from '@ionic/angular'
import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import { EventService } from '../services/event.service';
import { Router, NavigationExtras } from '@angular/router';
import { AdditionalChargePage } from '../income-transaction/income-transaction.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageProvider } from '../services/storage/storage';

@Component({
  selector: 'app-add-item-popover',
  templateUrl: './add-item-popover.page.html',
  styleUrls: ['./add-item-popover.page.scss'],
})
export class AddItemPopoverPage implements OnInit {
  newMessage1: any;
  newMessage2: any;
  newMessage3: any;
  newMessage4: any;
  newMessage5: any;
  datastore: any;
  showrec: boolean = true;
  lastsum: number;
  lastsumAfterIndividualDiscount: number;
  lastsumdisc: number;
  discount: number;
  lastsumtax: number;
  taxrate: number;
  displayManual = 0;
  newItemName = '';
  newUnitPrice: number = null;
  temp: any;

  constructor(private translateConfigService: TranslateConfigService, private popover: PopoverController) { }

  async ngOnInit() {
    const message1: Observable<any> = await this.translateConfigService.getTranslatedMessage('CANCEL ');
    const message2: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Calculator');
    const message3: Observable<any> = await this.translateConfigService.getTranslatedMessage('Scan Barcode');
    const message4: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Product List');
    const message5: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add Additional Charges');

    this.newMessage1 = this.subscriber(message1);
    this.newMessage2 = this.subscriber(message2);
    this.newMessage3 = this.subscriber(message3);
    this.newMessage4 = this.subscriber(message4);
    this.newMessage5 = this.subscriber(message5);
    console.log(
      this.newMessage1,
      this.newMessage2,
      this.newMessage3,
      this.newMessage4,
      this.newMessage5
    );
  }

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  selectOption(option) {
    this.popover.dismiss(option);
  }

  close() {
    this.popover.dismiss();
  }
}


// const message1: Observable<any> = await this.translateConfigService.getTranslatedMessage('CANCEL ');
    // const message2: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Calculator');
    // const message3: Observable<any> = await this.translateConfigService.getTranslatedMessage('Scan Barcode');
    // const message4: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Product List');
    // const message5: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add Additional Charges');
    // console.log({
    //   message1,
    //   message2,
    //   message3,
    //   message4,
    //   message5
    // });

    // const subscriber = (message: Observable<any>) => {
    //   let msg;
    //   message.subscribe(res => {
    //     msg = res;
    //   });
    //   return msg;
    // };
    // const alert = await this.alertCtrl
    //   .create({
    //     header: 'Add From', // translate this
    //     backdropDismiss: true,
    //     cssClass: 'addItemAlert',
    //     buttons: [
    //       {
    //         text: subscriber(message2),
    //         handler: () => {
    //           this.addCalc();
    //         },
    //       },
    //       {
    //         text: subscriber(message3),
    //         handler: () => {
    //           this.qrscan();
    //         },
    //       },
    //       {
    //         text: subscriber(message4),
    //         handler: () => {
    //           this.addProdList();
    //         },
    //       },
    //       {
    //         text: subscriber(message5),
    //         handler: () => {
    //           this.dispM();
    //         },
    //       },
    //       {
    //         text: subscriber(message1),
    //         role: 'cancel',
    //       },
    //     ],
    //   });
    // alert.present();
