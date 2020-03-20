import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTransactionPageRoutingModule } from './all-transaction-routing.module';

import { AllTransactionPage } from './all-transaction.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTransactionPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AllTransactionPage]
})
export class AllTransactionPageModule {}
