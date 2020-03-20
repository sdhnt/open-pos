import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeTransactionPageRoutingModule } from './income-transaction-routing.module';

import { IncomeTransactionPage } from './income-transaction.page';
import { TranslateModule } from '@ngx-translate/core';
import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import { ContactsPage } from '../contacts/contacts.page';
import { ExpenseGeneralPage } from '../expense-general/expense-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeTransactionPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [IncomeTransactionPage],
})
export class IncomeTransactionPageModule {}
