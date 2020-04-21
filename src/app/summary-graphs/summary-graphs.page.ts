import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import {
  ToastController,
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { Chart } from 'chart.js';
import { StorageProvider } from '../services/storage/storage';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { commands } from './../services/printer/printer-commands';
import { PrinterProvider } from '../services/printer/printer';
import { LoanHomePage } from '../loan-home/loan-home.page';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-summary-graphs',
  templateUrl: './summary-graphs.page.html',
  styleUrls: ['./summary-graphs.page.scss'],
})
export class SummaryGraphsPage implements OnInit {

  constructor(
    public modal: ModalController,
    public sp: StorageProvider,
    public events: EventService,
    private translateConfigService: TranslateConfigService,
    public toastCtrl: ToastController,
    public zone: NgZone,
    private alertCtrl: AlertController,
    private printer: PrinterProvider,
    private loadCtrl: LoadingController,
    private router: Router
  ) {
    // this.getSummary();
    this.events.viewRecs.subscribe(data => {
      this.router.navigate(['/home/income-transaction']);
      console.log('ViewRecs Event');
    });
    this.getUserData();
    this.events.cbUpdateCreated.subscribe(async data => {
      console.log('should update');
      this.ngOnInit();
    });
    this.events.productUpdateCreated.subscribe(async data => {
      this.ngOnInit();
    });
  }
  @ViewChild('barCanvas', { static: false }) barCanvas: ElementRef;
  @ViewChild('lineCanvas', { static: false }) lineCanvas: ElementRef;

  private barChart: Chart;
  private lineChart: Chart;

  expanded = true;
  usrchoice = 'today';

  userdata: any = {
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
    logo_url: '',
    taxrate: 0.0,
    discount: 0.0,
  };

  currentdatetime = Date.now();
  netcashtoday = 0;
  netcashweek = 0;
  netcashmonth = 0;
  netcashlast30 = 0;
  expandedvar = this.subscriber(this.translateConfigService.getTranslatedMessage('More'));

  rev = 0;
  exp = 0;
  pro = 0;
  group = 'today';

  listtransac: any = [];
  listtransacrev: any;
  totalsaletoday = 0;

  todayDate;
  toDate;
  fromDate;

  receipt: any;

  isgraph = 1;
  islist = 1;
  netcash = 0;
  selectedOne = 'graph';
  doRefresh(refresher) {
    this.ngOnInit();
    refresher.target.complete();
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
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log('this.userdata ************',this.userdata);
        })
        .catch(err => {
          alert('Error: ' + err);
        });
    });
  }

  toggleExpanded() {
    // console.log("changing: " + this.expanded);
    if (this.expanded === true) {
      this.expanded = false;

      // this.zone.run(()=>{
      //   //@ts-ignore
      //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
      // })
    } else if (this.expanded === false) {
      this.expanded = true;
      //   this.zone.run(()=>{
      //   //@ts-ignore
      //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
      // });
    }

    // console.log("changed: " + this.expandedvar);
  }

  async applyLoan() {
    const modal = await this.modal.create({ component: LoanHomePage });
    modal.present();
  }

  ionViewDidEnter() {
    this.selectedOne = 'graph';
  }

  expandTransac(transac) {
    if (transac.expanded === true) {
      transac.expanded = false;
      transac.expandedvar = this.subscriber(this.translateConfigService.getTranslatedMessage('Close'));
    } else {
      transac.expanded = true;

      transac.expandedvar = this.subscriber(this.translateConfigService.getTranslatedMessage('More'));
    }
  }

  getTransac(options?: { start?: Date; end?: Date }) {
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    this.sp.storageReady().then(() => {
      this.sp
        .getTransactions(options)
        .then(async val => {
          this.listtransac = JSON.parse(val);
          console.log('this.listtransac',this.listtransac)

          if(this.userdata.isSubUser == false){

            await this.findSubUserTransactions().then((result: any) => {
              
              console.log("RESULT ****************", result)
              console.log("RESULT ****************", this.listtransac)
              this.listtransac = this.listtransac.concat(result)
            })
          }
          console.log("RESULT FINAL ****************", this.listtransac)
          // console.log(this.listtransac)
          this.listtransac = this.listtransac.filter(transac => {
            return !transac.isDisabled;
          });
          this.listtransac.forEach(element => {
            element.datetime1 = this.getDateTime(element.datetime);
            element.expanded = true;
            element.expandedvar = this.subscriber(this.translateConfigService.getTranslatedMessage('More'));
          });
          this.listtransacrev = this.listtransac.reverse();
        })
        .then(() => {
          this.setvalues(); // set pro, rev & exp for whatever time period
        })
        .catch(err => {
          alert('Error: ' + err);
        });
    });
  }

  async findSubUserTransactions() {
    console.log("USER DATA INSIDE THE FIND SUB USER Transactions ****************", this.userdata)
    return new Promise((resolve, reject) => {
      var findSubUsersList = firebase.firestore().collection('users').where('mainUser.owner', '==', this.userdata.owner);
      findSubUsersList.get().then(async (querySnapshot) => {
        if (querySnapshot.size == 0) {
        } else {
          let transactions = [];
          querySnapshot.forEach(async function (doc) {
            console.log('SUB USERS ****************', doc.data())
            var singleUserProduct = await firebase.firestore().collection('users/' + doc.id + '/transactions')
            await singleUserProduct.get().then(async (querySnapshot) => {
              querySnapshot.forEach(async function (doc) {
                transactions.push(doc.data())
                console.log("PRODUCT DOC ****************", transactions)
              })
            })
            console.log("****************", transactions)
            resolve(transactions);
          })
        }
      });
    })
  }
  dateChange() {
    let start = new Date(this.fromDate); // subtract one day
    start = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
    const end = new Date(this.toDate);
    this.getTransac({ start, end });
  }

  setPgValues(group) {
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    const datestart = new Date();
    if (group === 'today') {
      datestart.setDate(datestart.getDate() - 1);
      console.log(datestart);
      this.getTransac({ start: datestart });
    } else if (group === 'last7') {
      datestart.setDate(datestart.getDate() - 8);
      this.getTransac({ start: datestart });
    } else if (group === 'month') {
      datestart.setDate(datestart.getDate() - (datestart.getDay() + 1));
      this.getTransac({ start: datestart });
    } else if (group === 'last30') {
      datestart.setDate(datestart.getDate() - 31);
      console.log(datestart);
      this.getTransac({ start: datestart });
    }
  }

  setvalues() {
    this.listtransac.forEach(element => {
      if (element.totalatax >= 0) {
        this.rev += Number(element.totalatax);

        element.itemslist.forEach((product, index) => {
          if (product.code !== '000000') {
            this.pro =
              this.pro +
              ((parseFloat(product.price) * (100 - parseFloat(product.discount))) / 100 - parseFloat(product.cost)) *
              parseFloat(product.qty);
          }
        });
      } else {
        this.exp += Number(element.totalatax);
      }
    });
    this.generateGraphs();
  }

  async updateCb(transacsum) {
    this.getUserData();
    this.userdata.cash_balance = (parseFloat(this.userdata.cash_balance) - parseFloat(transacsum)).toString();
    this.sp.setUserDat(this.userdata);
  }

  delTransac(transac) {
    this.sp.storageReady().then(async () => {
      // transac.itemslist.forEach(async product => {
      //   if (product.code !== "000000") {

      //     const data1 = {
      //       code: product.code,
      //       name: product.name,
      //       price: product.price,
      //       wholesale_price: product.wholesale_price,
      //       cost: product.cost,
      //       cat: product.cat,
      //       url: product.url,
      //       stock_qty: product.stock_qty + (product.qty-1),//need to be current stock qty
      //     };
      //   await this.sp.updateProduct(data1, product.code);
      //   }
      // });
      await this.sp.deleteTransactions(transac);
      await this.updateCb(transac.totalatax);

      setTimeout(async () => {
        const message = this.subscriber(this.translateConfigService.getTranslatedMessage('Finish'));
        const toast = await this.toastCtrl.create({
          message,
          duration: 3000,
        });
        this.getTransac();
        toast.present();
      }, 1000);
      this.ngOnInit();
    });
  }

  printRec(transac) {
    // console.log(transac);
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .codepage('cp936')
      .align('center')
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .line(this.userdata.business_name)
      .raw(commands.TEXT_FORMAT.TXT_NORMAL)
      .line(this.userdata.business_address)
      .line(this.userdata.businesstype)
      .line(this.userdata.ph_no)
      .align('left')
      .newline()
      .line(this.getDateTime(transac.datetime))
      .align('center')
      .text(commands.HORIZONTAL_LINE.HR_58MM)
      .newline();

    transac.itemslist.forEach(element => {
      element.qty = element.qty.toString();
      element.price = element.price.toString();
      // autotab system
      if (element.name.length < 20) {
        for (let i = element.name.length; i < 20; i++) {
          element.name += ' ';
        }
      } else {
        element.name = element.name.substring(0, 20);
      }

      if (element.qty < 10000) {
        for (let i = element.qty.length; i < 4; i++) {
          element.qty += ' ';
        }
      } else {
        element.qty.substring(0, 4);
      }

      if (element.price < 10000000) {
        for (let i = element.price.length; i < 8; i++) {
          element.price += ' ';
        }
      } else {
        element.price.substring(0, 8);
      }
      result

        .text(element.name) // 19 + space
        // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.qty) // 4+ space
        // .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.price) // 7+space

        .newline();
      if (parseFloat(element.discount) !== 0) {
        result
          .text('Discount (' + Math.round(parseFloat(element.discount) * 100) / 100 + '%) : ', 30)
          .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text('')
          .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text('-' + Math.round((element.price * element.discount * element.qty) / 100))
          .newline();
      }
    });
    result.newline();
    result.align('right').line('Total: ' + transac.totalsum);
    if (transac.totalsum !== transac.totaldisc) {
      result.line(' After Discount (' + Math.round(transac.discount * 100) / 100 + '%): ' + transac.totaldisc);
    }
    if (transac.totalsum !== transac.totalatax) {
      result.line('After Tax (' + Math.round(transac.taxrate * 100) / 100 + '%): ' + transac.totalatax);
    }
    result
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .newline()
      .line('')
      .newline()
      .line('')
      .newline()
      .cut('full');

    this.mountAlertBt(result.encode());
  }

  async showToast(data) {
    const toast = await this.toastCtrl.create({
      duration: 3000,
      message: data,
      position: 'bottom',
    });
    toast.present();
  }

  async mountAlertBt(data) {
    this.receipt = data;
    // console.log(this.receipt);
    const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Select your printer');
    const msg2: Observable<any> = this.translateConfigService.getTranslatedMessage('Cancel');
    const msg3: Observable<any> = this.translateConfigService.getTranslatedMessage('Select printer');
    const msg4: Observable<any> = this.translateConfigService.getTranslatedMessage('Select a printer!');
    const msg5: Observable<any> = this.translateConfigService.getTranslatedMessage(
      'There was an error connecting the printer, please try again!',
    );
    const msg6: Observable<any> = this.translateConfigService.getTranslatedMessage('Error activating bluetooth, please try again!');
    const alertInput = [];
    const alert = await this.alertCtrl.create({
      // TRANSLATE THIS
      header: this.subscriber(msg1),
      buttons: [
        {
          text: this.subscriber(msg2),
          role: 'cancel',
        },
        {
          text: this.subscriber(msg3),
          handler: device => {
            if (!device) {
              this.showToast(this.subscriber(msg4));
              return false;
            }
            // console.log(device);
            this.print(device, this.receipt);
          },
        },
      ],
      inputs: alertInput
    });

    this.printer
      .enableBluetooth()
      .then(() => {
        this.printer
          .searchBluetooth()
          .then(devices => {
            devices.forEach(async device => {
              // console.log("Devices: ", JSON.stringify(device));
              await alertInput.push({
                name: 'printer',
                value: device.address,
                label: device.name,
                type: 'radio',
              });
            });
            alert.present();
          })
          .catch(error => {
            console.log(error);
            this.showToast(this.subscriber(msg5));
            this.mountAlertBt(this.receipt);
          });
      })
      .catch(error => {
        console.log(error);
        this.showToast(this.subscriber(msg6));
        this.mountAlertBt(this.receipt);
      });
  }

  async print(device, data) {
    // console.log("Device mac: ", device);
    // console.log("Data: ", JSON.stringify(data));

    const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('Printing...');
    const msg2: Observable<any> = this.translateConfigService.getTranslatedMessage('Successful print!');
    const msg3: Observable<any> = this.translateConfigService.getTranslatedMessage('Ok');
    const msg4: Observable<any> = this.translateConfigService.getTranslatedMessage('There was an error printing, please try again!');
    const load = await this.loadCtrl.create({
      message: this.subscriber(msg1),
      backdropDismiss: true,
    });
    load.present();
    this.printer.connectBluetooth(device).subscribe(
      status => {
        // console.log(status);
        this.printer
          .printData(data)
          .then(async printStatus => {
            // console.log(printStatus);
            const alert = await this.alertCtrl.create({
              header: this.subscriber(msg2),
              buttons: [
                {
                  text: this.subscriber(msg3),
                  handler: () => {
                    load.dismiss();
                    this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            alert.present();
            this.router.navigate(['/home/income-transaction']);
          })
          .catch(async error => {
            console.log(error);
            const alert = await this.alertCtrl.create({
              header: this.subscriber(msg4),
              buttons: [
                {
                  text: this.subscriber(msg3),
                  handler: () => {
                    load.dismiss();
                    // this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            alert.present();
            this.router.navigate(['/home/income-transaction']);
          });
      }, async error => {
        console.log(error);
        const alert = await this.alertCtrl.create({
          header: 'There was an error connecting to the printer, please try again!',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                load.dismiss();
                // this.printer.disconnectBluetooth();
              },
            },
          ],
        });
        alert.present();
      },
    );
  }

  toggleGL() {
    this.isgraph=1;
    if(this.islist==1){
      this.islist = 0;
    }
    else if(this.islist==0){
      this.islist=1;
    }
  }
  toggleList() {
    this.islist=1;
    if(this.isgraph==1){
      this.isgraph = 0;
    }
    else if(this.isgraph==0){
      this.isgraph=1;
    }
    
    // if (this.islist === 1) {
    //   this.isgraph = 1;
    //   this.islist = 0;
    // } else {
    //   this.islist = 1;
    //   this.isgraph = 0;
    // }
  }

  getDateTime(datetime) {
    // return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    // console.log(temp);
    const temp1 = temp;

    const t = temp.getDate().toString() + '/' + (temp.getMonth() + 1).toString() + ' ' + this.getTime(temp).toString();
    return t;
    // if any hours or mins <0 then need to add 0 4 use cases
  }

  getTime(datetime) {
    const temp = new Date(datetime);
    const t = this.getHours(temp) + ':' + this.getMinutes(temp); // + ":" + this.getSeconds(temp);
    return t;
  }

  getDate(datetime) {
    const temp = new Date(datetime);
    const temp1 = temp;
    const t = temp.getDate();
    return t;
  }

  getMonth(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMonth();
    return t;
  }

  getHours(datetime) {
    const temp = new Date(datetime);
    const t = temp.getHours();
    if (t > 9) {
      return t.toString();
    } else {
      return '0' + t.toString();
    }
  }

  getSeconds(datetime) {
    const temp = new Date(datetime);
    const t = temp.getSeconds();
    if (t > 9) {
      return t.toString();
    } else {
      return '0' + t.toString();
    }
  }

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return '0' + t.toString();
    }
  }

  ngOnInit() {
    console.log('ionViewDidLoad SummaryHomePage');
    console.log('ionViewDidLoad SummaryGraphsPage');
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    this.netcashtoday = 0;
    this.netcashweek = 0;
    this.netcashmonth = 0;
    this.netcashlast30 = 0;
    this.group = 'today';
    this.isgraph = 1;
    this.islist = 1;
    this.usrchoice = 'today';
    this.todayDate = new Date().toISOString();
    this.toDate = new Date().toISOString();
    this.fromDate = new Date().toISOString();
    this.getUserData();
    // this.setPgValues("today");
    this.dateChange();
  }

  generateGraphs() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Revenue', 'Expenses', 'Profit'],
        datasets: [
          {
            label: 'Amount',
            data: [this.rev, -this.exp, this.pro],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    let temprev = 0;
    let tempexp = 0;
    const temppro = 0;
    const labels = [];
    const datarev = [];
    const dataexp = [];
    const datapro = [];
    const k = 0;

    if (this.listtransac.length === 0) {
      datarev.push(temprev);
      dataexp.push(tempexp);
      datapro.push(temppro);
      labels.push(this.currentdatetime);
    }

    this.listtransac.forEach(element => {
      if (element.totalatax >= 0) {
        temprev += Number(element.totalatax);
        datarev.push(element.totalatax);
        dataexp.push(0);
        // tslint:disable-next-line: no-shadowed-variable
        let temppro = 0;
        element.itemslist.forEach((product, index) => {
          if (product.code !== '000000') {
            temppro =
              temppro +
              ((parseFloat(product.price) * (100 - parseFloat(product.discount))) / 100 - parseFloat(product.cost)) *
              parseFloat(product.qty);
          }
        });
        datapro.push(temppro);
        labels.push(this.getDateTime(element.datetime));
      } else {
        tempexp = -Number(element.totalatax);
        datarev.push(0);
        dataexp.push(-element.totalatax);
        datapro.push(0);
        labels.push(this.getDateTime(element.datetime));
      }
    });
    // if (this.group === "last7") {
    //   const d = new Date();
    //   for (let i = 29; i > 23; i--) {
    //     d.setDate(d.getDate() - 1);
    //     datarev.push(this.summary[i].revenue);
    //     dataexp.push(-this.summary[i].expenses);
    //     datapro.push(this.summary[i].profit);
    //     labels.push(this.getDateTime(d));
    //   }
    // }

    // if (this.group === "month") {
    //   const currday = this.getDate(this.currentdatetime);
    //   const d = new Date();
    //   for (let i = 30; i > 30 - currday && i > -1; i--) {
    //     d.setDate(d.getDate() - 1);
    //     datarev.push(this.summary[i].revenue);
    //     dataexp.push(-this.summary[i].expenses);
    //     datapro.push(this.summary[i].profit);
    //     labels.push(this.getDateTime(d));
    //   }
    // }
    // if (this.group === "last30") {
    //   const d = new Date();
    //   for (let i = 30; i >= 0; i--) {
    //     d.setDate(d.getDate() - 1);
    //     datarev.push(this.summary[i].revenue);
    //     dataexp.push(-this.summary[i].expenses);
    //     datapro.push(this.summary[i].profit);
    //     labels.push(this.getDateTime(d));
    //   }
    // }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: labels.reverse(),
        datasets: [
          {
            label: 'Revenue',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: datarev.reverse(),
            spanGaps: false,
          },
          {
            label: 'Expenses',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 11)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataexp.reverse(),
            spanGaps: false,
          },
          {
            label: 'Profit',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: datapro.reverse(),
            spanGaps: false,
          },
        ],
      },
    });
  }
}
