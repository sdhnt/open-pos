import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseTransactionPage } from './expense-transaction';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ExpenseTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseTransactionPage),
    TranslateModule.forChild(),
  ],
})
export class ExpenseTransactionPageModule {}
