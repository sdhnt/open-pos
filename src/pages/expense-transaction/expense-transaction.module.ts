import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseTransactionPage } from './expense-transaction';

@NgModule({
  declarations: [
    ExpenseTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseTransactionPage),
  ],
})
export class ExpenseTransactionPageModule {}
