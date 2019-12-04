import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events, Tabs, ToastController } from "ionic-angular";
import { IncomeTransactionPage } from "../income-transaction/income-transaction";
import firebase from "firebase";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
//import { threadId } from 'worker_threads';

/**
 * Generated class for the AllTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-all-transaction",
  templateUrl: "all-transaction.html",
})
export class AllTransactionPage {
  updateOrCreate: String = "Create Receipt";

  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    public events: Events,
    public sp: StorageProvider,
    public tstCtrl: ToastController,
  ) {
    this.getUserData();
    this.events.subscribe("addRecCalc:created", data => {
      this.updateOrCreate = "Update Receipt";
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      //SET itemsprice here? - make new addgen - diff button calls diff event that pushes rather than replaces
      //Same for Product Transaction Page
      //console.log(this.showSampleRec);
      var tempdat = JSON.parse(data);
      // this.itemsname=null;
      // this.itemsprice=null;
      // this.itemsqty=null;
      tempdat.forEach(element => {
        this.itemsname.push(element.name);
        this.itemsprice.push(element.price);
        this.itemsqty.push(element.qty);
        this.loitems.push(element);
        this.itemsDiscount.push(element.discount);
      });
      console.log(this.itemsprice);
    });
  }
  itemsname: string[] = [];
  loitems: any = [];

  ionViewDidLoad() {
    console.log("ionViewDidLoad AllTransactionPage");
    console.log("Size of array: " + this.itemsprice.length);
    if (this.itemsprice.length > 0) {
      this.showSampleRec = false;
      this.flag_mode = 1;
    }

    this.delay(3000).then(() => {
      this.getUserData();
    });
  }

  ionViewWillLeave() {
    this.updateOrCreate = "Create Receipt";
  }

  result = "";
  flag_mode = 0;
  showSampleRec = true;
  itemsprice: string[] = [];
  itemsqty: number[] = [];
  itemsDiscount: number[] = [];
  ctr = 0;
  lastsum = 0;
  lastchar = "NIL";
  lastdigit = 0;

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

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

  createRec() {
    var tempJSON = { itemslist: [] };

    this.itemsprice.forEach((element, index) => {
      if (this.itemsname.length > 0 && index < this.itemsname.length) {
        tempJSON.itemslist.push(this.loitems[index]);
      } else {
        tempJSON.itemslist.push({
          code: "000000",
          cat: "NIL",
          stock_qty: 0,
          name: "Item",
          price: parseInt(element),
          qty: this.itemsqty[index],
          discount: this.itemsDiscount[index],
        });
      }
    });

    //var sampledat={ 'itemslist': myJsonString,};

    const myObjStr = JSON.stringify(tempJSON);

    (this.navCtrl.parent as Tabs).select(2);
    this.delay(300).then(any => {
      this.events.publish("genRec:created", myObjStr);

      console.log("Sent: " + myObjStr);

      //your task after delay.
    });

    this.result = "";
    this.itemsname = [];
    this.itemsprice = [];
    this.lastsum = 0;
    this.itemsqty = [];
    this.itemsDiscount = [];
    this.loitems = [];
  }

  btnClicked(btn) {
    this.getUserData();

    try {
      console.log("CalculatorPage::btnClicked = " + btn);
      if (btn == "C") {
        this.result = "";
        this.itemsprice = [];
        this.lastsum = 0;
        this.itemsqty = [];
        this.itemsDiscount = [];
      } else if (btn == "=") {
        this.showSampleRec = true;

        //IF LAST = character then remove that character

        var answ = this.result.split("+");
        // if(this.result.includes('-')){
        //   answ=this.result.split('+').join('-').split('-');
        // }
        var temp;

        answ.forEach((element, index) => {
          var discAmt;
          if (!element.includes("-")) discAmt = 0;
          else {
            discAmt = parseInt(element.substring(element.indexOf("-") + 1));
            answ[index] = element.substring(0, element.indexOf("-"));
            element = answ[index];
          }

          if (element.includes("*")) {
            answ[index] = element.substring(0, element.indexOf("*"));
            this.itemsprice.push(answ[index]);
            temp = parseInt(element.substring(element.indexOf("*") + 1));
            console.log(element.substring(element.indexOf("*") + 1));
            this.itemsqty.push(temp);
          } else if (element.includes("/")) {
            answ[index] = element.substring(0, element.indexOf("/"));
            this.itemsprice.push(answ[index]);
            temp = Math.round((1 / parseInt(element.substring(element.indexOf("/") + 1))) * 100) / 100;
            console.log(temp);
            this.itemsqty.push(temp);
          } else {
            if (element != "") {
              this.itemsprice.push(element);
              this.itemsqty.push(parseInt("1"));
            }
          }

          this.itemsDiscount.push((discAmt * 100) / (parseInt(this.itemsprice[index]) * this.itemsqty[index]));

          // this.itemsprice.push(
          //   {'name': "Blank_Item",
          //   'price': parseInt(element),
          //   'qty': 0,
          //   })
        });
        //flag_mode=0 means normal (sample reciept is generated)
        //if(flag_mode==1) then go to reciept page directly - call createRec()
        //if(flag_mode=2) then just use as calc - no reciept is generated

        console.log(this.itemsprice);
        console.log(this.itemsqty);
        this.result = eval(this.result) + "";
        this.lastsum = 0;

        //this.lastsum=parseInt(this.result);
        for (let i = 0; i < this.itemsprice.length; i++) {
          this.lastsum = this.lastsum + parseInt(this.itemsprice[i]) * this.itemsqty[i];
          console.log(this.lastsum);
        }
      } else if (btn == "b") {
        this.result = this.result.substring(0, this.result.length - 1);
      } else if (btn == "squareroot") {
        this.result = Math.sqrt(eval(this.result)) + "";
      } else if (btn == "square") {
        this.result = eval("(" + this.result + ") * ( " + this.result + ")");
      } else if (btn == "reciproc") {
        this.result = eval(1 + "/ (" + this.result + ")");
      } else {
        if (parseInt(this.result) == this.lastsum) {
          this.result = this.result.substring(0, 0);
        }

        console.log("Lastchar: " + this.lastchar + " Result: " + this.result);

        if (
          (btn == "+" || btn == "-" || btn == "*" || btn == "/") &&
          (this.lastchar == "+" || this.lastchar == "-" || this.lastchar == "*" || this.lastchar == "/")
        ) {
          this.result = this.result = this.result.substring(0, this.result.length - 1);
        }
        this.lastchar = btn;
        this.result += btn;
      }
    } catch (err) {
      this.result = "Input Error!";
      this.itemsprice = [];
      this.lastsum = 0;
      this.itemsqty = [];
      this.itemsDiscount = [];
      this.loitems = [];
    } finally {
    }
  }
}
