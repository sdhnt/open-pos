import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionProductPageRoutingModule } from './transaction-product-routing.module';

import { TransactionProductPage } from './transaction-product.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionProductPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [TransactionProductPage]
})
export class TransactionProductPageModule {}
