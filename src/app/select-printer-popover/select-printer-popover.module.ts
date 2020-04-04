import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPrinterPopoverPageRoutingModule } from './select-printer-popover-routing.module';

import { SelectPrinterPopoverPage } from './select-printer-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPrinterPopoverPageRoutingModule
  ],
  declarations: [SelectPrinterPopoverPage]
})
export class SelectPrinterPopoverPageModule {}
