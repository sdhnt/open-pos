import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateConfigService } from '../services/translation/translate-config.service'
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

  constructor(private translateConfigService: TranslateConfigService) { }

  async ngOnInit() {
    const message1: Observable<any> = await this.translateConfigService.getTranslatedMessage('CANCEL ');
    const message2: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Calculator');
    const message3: Observable<any> = await this.translateConfigService.getTranslatedMessage('Scan Barcode');
    const message4: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add from Product List');
    const message5: Observable<any> = await this.translateConfigService.getTranslatedMessage('Add Additional Charges');

    this.newMessage1 = this.subscriber(message1)
    this.newMessage2 = this.subscriber(message2)
    this.newMessage3 = this.subscriber(message3)
    this.newMessage4 = this.subscriber(message4)
    this.newMessage5 = this.subscriber(message5)
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