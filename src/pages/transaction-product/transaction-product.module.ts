import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionProductPage } from './transaction-product';

@NgModule({
  declarations: [
    TransactionProductPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionProductPage),
  ],
})
export class TransactionProductPageModule {}
