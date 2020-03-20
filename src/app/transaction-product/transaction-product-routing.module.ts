import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionProductPage } from './transaction-product.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionProductPageRoutingModule {}
