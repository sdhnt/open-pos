import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeTransactionPage } from './income-transaction';
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
  declarations: [
    IncomeTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeTransactionPage),
    TranslateModule.forChild(),
  ],
})
export class IncomeTransactionPageModule {}
