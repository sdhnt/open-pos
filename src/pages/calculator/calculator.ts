import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }


  result = "";

	ngOnInit() {
	}

	btnClicked(btn) {
		console.log('CalculatorPage::btnClicked = ' + btn);
		if (btn == "C") {
			this.result = "";
		} else if (btn == "=") {
			this.result = eval(this.result);
		} else if (btn == "squareroot") {
			this.result = Math.sqrt(eval(this.result)) + "";
		} else if (btn == "square") {
			this.result = eval("(" + this.result + ") * ( " + this.result + ")");
		} else if (btn == "reciproc") {
			this.result = eval(1 + "/ (" + this.result + ")");
		} else {
			this.result += btn;
		}
	}



}

