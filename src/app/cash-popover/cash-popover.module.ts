import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashPopoverPageRoutingModule } from './cash-popover-routing.module';

import { CashPopoverPage } from './cash-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashPopoverPageRoutingModule
  ],
  declarations: [CashPopoverPage]
})
export class CashPopoverPageModule {}
