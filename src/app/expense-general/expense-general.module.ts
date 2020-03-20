import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseGeneralPageRoutingModule } from './expense-general-routing.module';

import { ExpenseGeneralPage } from './expense-general.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseGeneralPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ExpenseGeneralPage]
})
export class ExpenseGeneralPageModule {}
