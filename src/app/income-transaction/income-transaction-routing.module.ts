import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeTransactionPage } from './income-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeTransactionPageRoutingModule {}
