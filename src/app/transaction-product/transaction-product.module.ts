import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionProductPageRoutingModule } from './transaction-product-routing.module';

import { TransactionProductPage } from './transaction-product.page';
import { TranslateModule } from '@ngx-translate/core';
import { BottomSheetModule, BottomSheetComponent } from 'ionic-custom-bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionProductPageRoutingModule,
    TranslateModule.forChild(),
    BottomSheetModule
  ],
  entryComponents: [BottomSheetComponent],
  declarations: [TransactionProductPage]
})
export class TransactionProductPageModule { }
