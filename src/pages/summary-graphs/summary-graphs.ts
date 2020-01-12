import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Chart } from "chart.js";
import { StorageProvider } from "../../providers/storage/storage";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public sp: StorageProvider) {
    this.getSummary();
    //this.setvalues();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SummaryGraphsPage");
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    this.group = "today";

    this.getSummary();
    //this.setvalues()
  }

  rev = 0;
  exp = 0;
  pro = 0;
  summary: any = [];
  group = "today";
  listtransac: any = [];

  getSummary() {
    this.sp.storageReady().then(() => {
      this.sp.getSummary().then(val => {
        this.summary = JSON.parse(val);
        console.log(this.summary);
        this.getTransac();
      });
    });
  }
  setvalues() {
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    //  if(this.group=="today"){
    this.listtransac.forEach(element => {
      if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
        if (element.totalatax >= 0) {
          this.rev += parseInt(element.totalatax);

          element.itemslist.forEach((product, index) => {
            if (product.code != "000000") {
              this.pro =
                this.pro +
                (parseFloat(product.price) * (100 - parseFloat(product.discount))/100 - parseFloat(product.cost)) *
                  parseFloat(product.qty);
              console.log(product);
            }
          });
          //console.log(element.totalatax)
          //CALCULATE PROFIT BASED ON EACH ITEM
        } else {
          this.exp = parseInt(element.totalatax);
        }
      }
    });
    //}
    if (this.group == "last7") {
      console.log("1");
      for (let i = 29; i > 22; i--) {
        this.rev += this.summary[i].revenue;
        this.exp += this.summary[i].expenses;
        this.pro += this.summary[i].profit;
      }
    }
    if (this.group == "last30") {
      for (let i = 29; i >= 0; i--) {
        this.rev += this.summary[i].revenue;
        this.exp += this.summary[i].expenses;
        this.pro += this.summary[i].profit;
      }
    }
    if (this.group == "month") {
      const currday = this.getDate(this.currentdatetime);
      console.log(currday);
      for (let i = 29; i > 29 - currday && i > -1; i--) {
        this.rev += this.summary[i].revenue;
        this.exp += this.summary[i].expenses;
        this.pro += this.summary[i].profit;
      }
    }
    this.generateGraphs();
  }

  currentdatetime = Date.now();

  getTransac() {
    this.rev = 0;
    this.exp = 0;
    this.pro = 0;
    this.sp.storageReady().then(() => {
      this.sp
        .getTransactions()
        .then(val => {
          this.listtransac = JSON.parse(val);
          //console.log(this.listtransac);
          this.setvalues();
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    //console.log(temp);
    const temp1 = temp;

    const t = temp.getDate().toString() + "/" + (temp.getMonth() + 1).toString();
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
  }

  getTime(datetime) {
    const temp = new Date(datetime);
    const t = this.getHours(temp) + ":" + this.getMinutes(temp) + ":" + this.getSeconds(temp);
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

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  ngOnInit() {
    this.generateGraphs();
  }

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
    this.listtransac.forEach(element => {
      if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
        if (element.totalatax >= 0) {
          temprev += parseInt(element.totalatax);
          if (this.group == "today") {
            datarev.push(element.totalatax);
            dataexp.push(0);
            datapro.push(0);
            labels.push(this.getTime(element.datetime));
          }
        } else {
          tempexp = -parseInt(element.totalatax);
          if (this.group == "today") {
            datarev.push(0);
            dataexp.push(-element.totalatax);
            datapro.push(0);
            labels.push(this.getTime(element.datetime));
          }
        }
      }
    });
    if (this.group != "today" || this.listtransac.length == 0) {
      datarev.push(temprev);
      dataexp.push(tempexp);
      datapro.push(temppro);
      labels.push(this.getDateTime(this.currentdatetime));
    }

    if (this.group == "last7") {
      const d = new Date();
      for (let i = 29; i > 23; i--) {
        d.setDate(d.getDate() - 1);
        datarev.push(this.summary[i].revenue);
        dataexp.push(-this.summary[i].expenses);
        datapro.push(this.summary[i].profit);
        labels.push(this.getDateTime(d));
      }
    }
    if (this.group == "month") {
      const currday = this.getDate(this.currentdatetime);
      const d = new Date();
      for (let i = 30; i > 30 - currday && i > -1; i--) {
        d.setDate(d.getDate() - 1);
        datarev.push(this.summary[i].revenue);
        dataexp.push(-this.summary[i].expenses);
        datapro.push(this.summary[i].profit);
        labels.push(this.getDateTime(d));
      }
    }
    if (this.group == "last30") {
      const d = new Date();
      for (let i = 30; i >= 0; i--) {
        d.setDate(d.getDate() - 1);
        datarev.push(this.summary[i].revenue);
        dataexp.push(-this.summary[i].expenses);
        datapro.push(this.summary[i].profit);
        labels.push(this.getDateTime(d));
      }
    }

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
            label: "Revenue",
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
