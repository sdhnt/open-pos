import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashPopoverPageRoutingModule } from './cash-popover-routing.module';

import { CashPopoverPage } from './cash-popover.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashPopoverPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [CashPopoverPage]
})
export class CashPopoverPageModule {}
