import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTransactionPage } from './all-transaction';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    AllTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTransactionPage),
    TranslateModule.forChild(),
  ],
})
export class AllTransactionPageModule {}
