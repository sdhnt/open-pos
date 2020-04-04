import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeTransactionPageRoutingModule } from './income-transaction-routing.module';

import { IncomeTransactionPage, AdditionalChargePage } from './income-transaction.page';
import { TranslateModule } from '@ngx-translate/core';
import { BottomSheetModule, BottomSheetComponent } from 'ionic-custom-bottom-sheet';
import {AddItemPopoverPage} from '../add-item-popover/add-item-popover.page'
import {AddItemPopoverPageModule} from '../add-item-popover/add-item-popover.module'
import { SelectPrinterPopoverPage } from '../select-printer-popover/select-printer-popover.page';
import { SelectPrinterPopoverPageModule } from '../select-printer-popover/select-printer-popover.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeTransactionPageRoutingModule,
    TranslateModule.forChild(),
    BottomSheetModule,
    AddItemPopoverPageModule,
    SelectPrinterPopoverPageModule
  ],
  entryComponents: [SelectPrinterPopoverPage,BottomSheetComponent, AdditionalChargePage,AddItemPopoverPage],
  declarations: [IncomeTransactionPage, AdditionalChargePage],
})
export class IncomeTransactionPageModule {}
