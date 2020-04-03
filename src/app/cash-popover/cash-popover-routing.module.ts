import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashPopoverPage } from './cash-popover.page';

const routes: Routes = [
  {
    path: '',
    component: CashPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashPopoverPageRoutingModule {}
