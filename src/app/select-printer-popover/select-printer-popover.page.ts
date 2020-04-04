import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular'
@Component({
  selector: 'app-select-printer-popover',
  templateUrl: './select-printer-popover.page.html',
  styleUrls: ['./select-printer-popover.page.scss'],
})
export class SelectPrinterPopoverPage implements OnInit {
  printerList = [];
  constructor(
    public popoverCtrl: PopoverController,
    public navParams: NavParams
  ) {
  }

  ionViewWillEnter() {
    if (this.navParams.data['popover']) {
      delete this.navParams.data['popover']
    }

    for (var o in this.navParams.data) {
      this.printerList.push(this.navParams.data[o]);
    }
    console.log('printer list', this.printerList)
  }

  ngOnInit() {
  }

  goBack(){
    this.popoverCtrl.dismiss();
  }
  selectDevice(device){
    this.popoverCtrl.dismiss(device);
  }
}
