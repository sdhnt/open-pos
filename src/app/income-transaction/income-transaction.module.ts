import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeTransactionPageRoutingModule } from './income-transaction-routing.module';

import { IncomeTransactionPage } from './income-transaction.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeTransactionPageRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [IncomeTransactionPage],
})
export class IncomeTransactionPageModule {}
