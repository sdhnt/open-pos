import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPrinterPopoverPage } from './select-printer-popover.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPrinterPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPrinterPopoverPageRoutingModule {}
