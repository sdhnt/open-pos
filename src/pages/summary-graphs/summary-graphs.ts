import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  ToastController,
  AlertController,
  LoadingController,
  Tabs,
  ModalController,
} from "ionic-angular";
import { Chart } from "chart.js";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import EscPosEncoder from "esc-pos-encoder-ionic";
import { commands } from "./../../providers/printer/printer-commands";
import { PrinterProvider } from "../../providers/printer/printer";

/**
 * Generated class for the SummaryGraphsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-summary-graphs",
  templateUrl: "summary-graphs.html",
})
export class SummaryGraphsPage {
  @ViewChild("barCanvas") barCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  private barChart: Chart;
  private lineChart: Chart;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public sp: StorageProvider,
    public events: Events,
    private translateConfigService: TranslateConfigService,
    public toastCtrl: ToastController,
    public zone: NgZone,
    private alertCtrl: AlertController,
    private printer: PrinterProvider,
    private loadCtrl: LoadingController,
  ) {
    //this.getSummary();
    this.events.subscribe("ViewRecs", data => {
      (this.navCtrl.parent as Tabs).select(0);
      console.log("ViewRecs Event");
    });
    this.getUserData();
    this.events.subscribe("cbUpdate:created", async data => {
      console.log("should update");
      this.ionViewDidLoad();
    });
    this.events.subscribe("productUpdate:created", async data => {
      this.ionViewDidLoad();
    });
  }

  doRefresh(refresher) {
    this.ionViewDidLoad();
    refresher.complete();
  }

  expanded = true;
  usrchoice = "today";

  userdata: any = {
    autosave: 0,
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: "en",
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    logo_url: "",
    taxrate: 0.0,
    discount: 0.0,
  };

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          //console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  toggleExpanded() {
    //console.log("changing: " + this.expanded);
    if (this.expanded == true) {
      this.expanded = false;

      // this.zone.run(()=>{
      //   //@ts-ignore
      //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
      // })
    } else if (this.expanded == false) {
      this.expanded = true;
      //   this.zone.run(()=>{
      //   //@ts-ignore
      //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
      // });
    }

    //console.log("changed: " + this.expandedvar);
  }

  applyLoan() {
    this.modal.create("LoanHomePage").present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SummaryHomePage");
    console.log("ionViewDidLoad SummaryGraphsPage");
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    this.netcashtoday = 0;
    this.netcashweek = 0;
    this.netcashmonth = 0;
    this.netcashlast30 = 0;
    this.group = "today";
    this.isgraph = 0;
    this.islist = 1;
    this.usrchoice = "today";
    this.getUserData();
    this.setPgValues("today");
  }

  currentdatetime = Date.now();
  netcashtoday = 0;
  netcashweek = 0;
  netcashmonth = 0;
  netcashlast30 = 0;
  //@ts-ignore
  expandedvar = this.translateConfigService.getTranslatedMessage("More").value;

  rev = 0;
  exp = 0;
  pro = 0;
  group = "today";

  expandTransac(transac) {
    if (transac.expanded == true) {
      transac.expanded = false;
      //@ts-ignore
      transac.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
    } else {
      transac.expanded = true;
      //@ts-ignore

      transac.expandedvar = this.translateConfigService.getTranslatedMessage("More").value;
    }
  }

  listtransac: any = [];
  listtransacrev: any;
  totalsaletoday = 0;

  getTransac(options?: { start?: Date; end?: Date }) {
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    this.sp.storageReady().then(() => {
      this.sp
        .getTransactions(options)
        .then(async val => {
          this.listtransac = JSON.parse(val);
          //console.log(this.listtransac)
          this.listtransac = this.listtransac.filter(transac => {
            return !transac.isDisabled;
          });
          this.listtransac.forEach(element => {
            element.datetime1 = this.getDateTime(element.datetime);
            element.expanded = true;
            //@ts-ignore
            element.expandedvar = this.translateConfigService.getTranslatedMessage("More").value;
          });
          this.listtransacrev = this.listtransac.reverse();
        })
        .then(() => {
          this.setvalues(); //set pro, rev & exp for whatever time period
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  setPgValues(group) {
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    const datestart = new Date();
    if (group == "today") {
      datestart.setDate(datestart.getDate() - 1);
      console.log(datestart);
      this.getTransac({ start: datestart });
    } else if (group == "last7") {
      datestart.setDate(datestart.getDate() - 8);
      this.getTransac({ start: datestart });
    } else if (group == "month") {
      datestart.setDate(datestart.getDate() - (datestart.getDay() + 1));
      this.getTransac({ start: datestart });
    } else if (group == "last30") {
      datestart.setDate(datestart.getDate() - 31);
      console.log(datestart);
      this.getTransac({ start: datestart });
    }
  }

  setvalues() {
    this.listtransac.forEach(element => {
      if (element.totalatax >= 0) {
        this.rev += parseInt(element.totalatax);

        element.itemslist.forEach((product, index) => {
          if (product.code != "000000") {
            this.pro =
              this.pro +
              ((parseFloat(product.price) * (100 - parseFloat(product.discount))) / 100 - parseFloat(product.cost)) *
                parseFloat(product.qty);
          }
        });
      } else {
        this.exp += parseInt(element.totalatax);
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
      //   if (product.code != "000000") {

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

      setTimeout(() => {
        const message = this.translateConfigService.getTranslatedMessage("Finish");
        const toast = this.toastCtrl.create({
          // @ts-ignore
          message: message.value,
          duration: 3000,
        });
        this.getTransac();
        toast.present();
      }, 1000);
      this.ionViewDidLoad();
    });
  }

  printRec(transac) {
    //console.log(transac);
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .codepage("cp936")
      .align("center")
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .line(this.userdata.business_name)
      .raw(commands.TEXT_FORMAT.TXT_NORMAL)
      .line(this.userdata.business_address)
      .line(this.userdata.businesstype)
      .line(this.userdata.ph_no)
      .align("left")
      .newline()
      .line(this.getDateTime(transac.datetime))
      .align("center")
      .text(commands.HORIZONTAL_LINE.HR_58MM)
      .newline();

    transac.itemslist.forEach(element => {
      element.qty = element.qty.toString();
      element.price = element.price.toString();
      //autotab system
      if (element.name.length < 20) {
        for (let i = element.name.length; i < 20; i++) {
          element.name += " ";
        }
      } else {
        element.name = element.name.substring(0, 20);
      }

      if (element.qty < 10000) {
        for (let i = element.qty.length; i < 4; i++) {
          element.qty += " ";
        }
      } else {
        element.qty.substring(0, 4);
      }

      if (element.price < 10000000) {
        for (let i = element.price.length; i < 8; i++) {
          element.price += " ";
        }
      } else {
        element.price.substring(0, 8);
      }
      result

        .text(element.name) //19 + space
        //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.qty) //4+ space
        //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
        .text(element.price) //7+space

        .newline();
      if (parseFloat(element.discount) != 0) {
        result
          .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ", 30)
          .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text("")
          .raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
          .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
          .newline();
      }
    });
    result.newline();
    result.align("right").line("Total: " + transac.totalsum);
    if (transac.totalsum != transac.totaldisc) {
      result.line(" After Discount (" + Math.round(transac.discount * 100) / 100 + "%): " + transac.totaldisc);
    }
    if (transac.totalsum != transac.totalatax) {
      result.line("After Tax (" + Math.round(transac.taxrate * 100) / 100 + "%): " + transac.totalatax);
    }
    result
      .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
      .newline()
      .line("")
      .newline()
      .line("")
      .newline()
      .cut("full");

    this.mountAlertBt(result.encode());
  }

  showToast(data) {
    const toast = this.toastCtrl.create({
      duration: 3000,
      message: data,
      position: "bottom",
    });
    toast.present();
  }

  receipt: any;

  mountAlertBt(data) {
    this.receipt = data;
    //console.log(this.receipt);
    const msg1 = this.translateConfigService.getTranslatedMessage("Select your printer");
    const msg2 = this.translateConfigService.getTranslatedMessage("Cancel");
    const msg3 = this.translateConfigService.getTranslatedMessage("Select printer");
    const msg4 = this.translateConfigService.getTranslatedMessage("Select a printer!");
    const msg5 = this.translateConfigService.getTranslatedMessage(
      "There was an error connecting the printer, please try again!",
    );
    const msg6 = this.translateConfigService.getTranslatedMessage("Error activating bluetooth, please try again!");

    const alert = this.alertCtrl.create({
      //TRANSLATE THIS
      // @ts-ignore
      title: msg1.value,
      buttons: [
        {
          // @ts-ignore
          text: msg2.value,
          role: "cancel",
        },
        {
          // @ts-ignore
          text: msg3.value,
          handler: device => {
            if (!device) {
              // @ts-ignore
              this.showToast(msg4.value);
              return false;
            }
            //console.log(device);
            this.print(device, this.receipt);
          },
        },
      ],
    });

    this.printer
      .enableBluetooth()
      .then(() => {
        this.printer
          .searchBluetooth()
          .then(devices => {
            devices.forEach(device => {
              //console.log("Devices: ", JSON.stringify(device));
              alert.addInput({
                name: "printer",
                value: device.address,
                label: device.name,
                type: "radio",
              });
            });
            alert.present();
          })
          .catch(error => {
            console.log(error);
            // @ts-ignore
            this.showToast(msg5.value);
            this.mountAlertBt(this.receipt);
          });
      })
      .catch(error => {
        console.log(error);
        // @ts-ignore
        this.showToast(msg6.value);
        this.mountAlertBt(this.receipt);
      });
  }

  print(device, data) {
    //console.log("Device mac: ", device);
    //console.log("Data: ", JSON.stringify(data));

    const msg1 = this.translateConfigService.getTranslatedMessage("Printing...");
    const msg2 = this.translateConfigService.getTranslatedMessage("Successful print!");
    const msg3 = this.translateConfigService.getTranslatedMessage("Ok");
    const msg4 = this.translateConfigService.getTranslatedMessage("There was an error printing, please try again!");
    const load = this.loadCtrl.create({
      // @ts-ignore
      content: msg1.value,
      enableBackdropDismiss: true,
    });
    load.present();
    this.printer.connectBluetooth(device).subscribe(
      status => {
        //console.log(status);
        this.printer
          .printData(data)
          .then(printStatus => {
            //console.log(printStatus);
            const alert = this.alertCtrl.create({
              //@ts-ignore
              title: msg2.value,
              buttons: [
                {
                  //@ts-ignore
                  text: msg3.value,
                  handler: () => {
                    load.dismiss();
                    this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            alert.present();
            (this.navCtrl.parent as Tabs).select(0);
          })
          .catch(error => {
            console.log(error);
            const alert = this.alertCtrl.create({
              //@ts-ignore
              title: msg4.value,
              buttons: [
                {
                  //@ts-ignore
                  text: msg3.value,
                  handler: () => {
                    load.dismiss();
                    //this.printer.disconnectBluetooth();
                  },
                },
              ],
            });
            alert.present();
            (this.navCtrl.parent as Tabs).select(0);
          });
      },
      error => {
        console.log(error);
        const alert = this.alertCtrl.create({
          title: "There was an error connecting to the printer, please try again!",
          buttons: [
            {
              text: "Ok",
              handler: () => {
                load.dismiss();
                //this.printer.disconnectBluetooth();
              },
            },
          ],
        });
        alert.present();
      },
    );
  }

  toggleGL() {
    if (this.isgraph == 1) {
      this.isgraph = 0;
      this.islist = 1;
    } else {
      this.isgraph = 1;
      this.islist = 1;
    }
  }
  toggleList() {
    if (this.islist == 1) {
      this.isgraph = 1;
      this.islist = 0;
    } else {
      this.islist = 1;
      this.isgraph = 0;
    }
  }

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    //console.log(temp);
    const temp1 = temp;

    const t = temp.getDate().toString() + "/" + (temp.getMonth() + 1).toString() + " " + this.getTime(temp).toString();
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
  }

  getTime(datetime) {
    const temp = new Date(datetime);
    const t = this.getHours(temp) + ":" + this.getMinutes(temp) ; //+ ":" + this.getSeconds(temp);
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
      return "0" + t.toString();
    }
  }

  getSeconds(datetime) {
    const temp = new Date(datetime);
    const t = temp.getSeconds();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  isgraph = 0;
  islist = 0;

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  ngOnInit() {}
  netcash = 0;

  generateGraphs() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Revenue", "Expenses", "Profit"],
        datasets: [
          {
            label: "Amount",
            data: [this.rev, -this.exp, this.pro],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
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

    if (this.listtransac.length == 0) {
      datarev.push(temprev);
      dataexp.push(tempexp);
      datapro.push(temppro);
      labels.push(this.currentdatetime);
    }

    this.listtransac.forEach(element => {
      if (element.totalatax >= 0) {
        temprev += parseInt(element.totalatax);
        datarev.push(element.totalatax);
        dataexp.push(0);
        let temppro = 0;
        element.itemslist.forEach((product, index) => {
          if (product.code != "000000") {
            temppro =
              temppro +
              ((parseFloat(product.price) * (100 - parseFloat(product.discount))) / 100 - parseFloat(product.cost)) *
                parseFloat(product.qty);
          }
        });
        datapro.push(temppro);
        labels.push(this.getDateTime(element.datetime));
      } else {
        tempexp = -parseInt(element.totalatax);
        datarev.push(0);
        dataexp.push(-element.totalatax);
        datapro.push(0);
        labels.push(this.getDateTime(element.datetime));
      }
    });
    // if (this.group == "last7") {
    //   const d = new Date();
    //   for (let i = 29; i > 23; i--) {
    //     d.setDate(d.getDate() - 1);
    //     datarev.push(this.summary[i].revenue);
    //     dataexp.push(-this.summary[i].expenses);
    //     datapro.push(this.summary[i].profit);
    //     labels.push(this.getDateTime(d));
    //   }
    // }

    // if (this.group == "month") {
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
    // if (this.group == "last30") {
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
      type: "line",
      data: {
        labels: labels.reverse(),
        datasets: [
          {
            label: "Revenue",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: datarev.reverse(),
            spanGaps: false,
          },
          {
            label: "Expenses",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(54, 162, 235, 0.4)",
            borderColor: "rgba(54, 162, 235, 11)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(54, 162, 235, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataexp.reverse(),
            spanGaps: false,
          },
          {
            label: "Profit",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 206, 86, 0.4)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(255, 206, 86, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
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
