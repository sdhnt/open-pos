import { Component, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Events,
  Tabs,
  AlertController,
  LoadingController,
} from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import Moment from "moment";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import EscPosEncoder from "esc-pos-encoder-ionic";
import { commands } from "./../../providers/printer/printer-commands";
import { PrinterProvider } from "../../providers/printer/printer";

/**
 * Generated class for the SummaryHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-summary-home",
  templateUrl: "summary-home.html",
})
export class SummaryHomePage {
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public sp: StorageProvider,
    public events: Events,
    public toastCtrl: ToastController,
    public zone: NgZone,
    private alertCtrl: AlertController,
    private printer: PrinterProvider,
    private loadCtrl: LoadingController,
  ) {
    this.events.subscribe("ViewRecs", data => {
      (this.navCtrl.parent as Tabs).select(2);
      console.log("ViewRecs Event");
    });
    this.getUserData();
  }

  expanded = true;
  tstoday = 0;
  tsmonth = 0;
  ts30 = 0;
  usrchoice = "today";

  userdata: any = {
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
          console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  toggleExpanded() {
    console.log("changing: " + this.expanded);
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

    console.log("changed: " + this.expandedvar);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SummaryHomePage");
    this.tstoday = 0;
    this.tsmonth = 0;
    this.ts30 = 0;
    this.usrchoice = "today";
    this.getUserData();
    //@ts-ignore
    //this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
    this.getTransac();
    this.getUserData();
  }

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    //console.log(temp);
    const temp1 = temp;

    const t =
      temp.getDate().toString() +
      "/" +
      (temp.getMonth() + 1).toString() +
      "/" +
      temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp) +
      ":" +
      this.getSeconds(temp);
    //console.log(t)
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
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

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  expandTransac(transac) {
    if (transac.expanded == true) {
      transac.expanded = false;
      //@ts-ignore
      transac.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
    } else {
      transac.expanded = true;
      //@ts-ignore

      transac.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
    }
  }

  listtransac: any;
  currentdatetime = new Date();
  listtransacrev: any;
  totalsaletoday = 0;
  getTransac() {
    this.tstoday = 0;
    this.tsmonth = 0;
    this.ts30 = 0;
    this.sp.storageReady().then(() => {
      this.sp
        .getTransactions()
        .then(val => {
          this.listtransac = JSON.parse(val);
          this.listtransac.forEach(element => {
            element.datetime1 = this.getDateTime(element.datetime);
            element.expanded = true;
            //@ts-ignore
            element.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
          });
          this.listtransacrev = this.listtransac.reverse();
          console.log(this.listtransac);

          this.listtransacrev.forEach(element => {
            if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
              this.tstoday += parseInt(element.totaldisc);
            }
            if (this.getDate(element.datetime) > this.getDate(this.currentdatetime) - 30) {
              this.ts30 += parseInt(element.totaldisc);
            }
            if (this.getMonth(element.datetime) == this.getMonth(this.currentdatetime)) {
              this.tsmonth += parseInt(element.totaldisc);
            }
          });
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }
  //@ts-ignore
  expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;

  // getDateTime(datetime) {
  //   //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
  //   const temp = new Date(datetime);
  //   const temp1 = temp;
  //   const t =
  //     temp.getDate() +
  //     "/" +
  //     (temp.getMonth() + 1) +
  //     "/" +
  //     temp.getFullYear() +
  //     " " +
  //     temp.getHours() +
  //     ":" +
  //     temp.getMinutes();
  //   return t;
  // }

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

  delTransac(transac) {
    this.sp.storageReady().then(async () => {
      await this.sp.deleteTransactions(transac);
      this.sp.backupStorage();
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
    console.log(transac);
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
    console.log(this.receipt);
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
            console.log(device);
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
    console.log("Device mac: ", device);
    console.log("Data: ", JSON.stringify(data));

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
        console.log(status);
        this.printer
          .printData(data)
          .then(printStatus => {
            console.log(printStatus);
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
}
