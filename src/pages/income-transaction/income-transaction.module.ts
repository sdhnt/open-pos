import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeTransactionPage } from './income-transaction';

@NgModule({
  declarations: [
    IncomeTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeTransactionPage),
  ],
})
export class IncomeTransactionPageModule {}
