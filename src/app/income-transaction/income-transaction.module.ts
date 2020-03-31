import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeTransactionPageRoutingModule } from './income-transaction-routing.module';

import { IncomeTransactionPage, AdditionalChargePage } from './income-transaction.page';
import { TranslateModule } from '@ngx-translate/core';
import { BottomSheetModule, BottomSheetComponent } from 'ionic-custom-bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeTransactionPageRoutingModule,
    TranslateModule.forChild(),
    BottomSheetModule
  ],
  entryComponents: [BottomSheetComponent, AdditionalChargePage],
  declarations: [IncomeTransactionPage, AdditionalChargePage],
})
export class IncomeTransactionPageModule {}
