import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionHomePage } from './transaction-home';
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
  declarations: [
    TransactionHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionHomePage),
    TranslateModule.forChild(),
  ],
})
export class TransactionHomePageModule {}
