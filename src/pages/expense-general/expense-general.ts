import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";


/**
 * Generated class for the ExpenseGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-expense-general",
  templateUrl: "expense-general.html",
})
export class ExpenseGeneralPage {
  expType: string[] = ["Transportation", "Salaries",  "Utilities", "Depreciation", "Miscellaneous"];
  listOfExpenses: Expense[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private translateConfigService: TranslateConfigService
  ) {
    this.listOfExpenses = [];
    this.listOfExpenses.push(new Expense());
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpenseGeneralPage");
  }

  addExpense(){
    this.listOfExpenses.push(new Expense());
  }

  removeExpense(index: number){
    this.listOfExpenses.splice(index, 1);
  }

  updateExpenses(){
    this.listOfExpenses.forEach((element) => {
      if(!element.isValid()){
        element.flag = false;
        return;
      }
      else{
        element.flag=true;
        //add all amounts to a final total amount
        //get current dateTime, geolocation
      }
    });
  }
}

class Expense {
  public name: String;
  public type: String;
  public amount: number;
  public notes: String;
  public flag: boolean;

  constructor(){
    this.flag=true;
  }

  isValid(){
    if(this.name==undefined || this.type==undefined || this.amount==undefined) return false;
    return true;
  }
}
