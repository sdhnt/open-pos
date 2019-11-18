import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTransactionPage } from './all-transaction';

@NgModule({
  declarations: [
    AllTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTransactionPage),
  ],
})
export class AllTransactionPageModule {}
