import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionProductPage } from './transaction-product';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    TransactionProductPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionProductPage),
    TranslateModule.forChild(),
  ],
})
export class TransactionProductPageModule {}
