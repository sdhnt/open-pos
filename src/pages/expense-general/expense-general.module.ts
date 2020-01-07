import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseGeneralPage } from './expense-general';

@NgModule({
  declarations: [
    ExpenseGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseGeneralPage),
  ],
})
export class ExpenseGeneralPageModule {}
