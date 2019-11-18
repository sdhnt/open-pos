import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesHomePage } from './expenses-home';

@NgModule({
  declarations: [
    ExpensesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesHomePage),
  ],
})
export class ExpensesHomePageModule {}
