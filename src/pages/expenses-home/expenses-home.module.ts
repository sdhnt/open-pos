import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesHomePage } from './expenses-home';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ExpensesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesHomePage),
    TranslateModule.forChild(),
  ],
})
export class ExpensesHomePageModule {}
