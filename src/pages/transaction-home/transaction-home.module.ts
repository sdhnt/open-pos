import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionHomePage } from './transaction-home';

@NgModule({
  declarations: [
    TransactionHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionHomePage),
  ],
})
export class TransactionHomePageModule {}
