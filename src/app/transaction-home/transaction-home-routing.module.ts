import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionHomePage } from './transaction-home.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransectionHomePageRoutingModule {}
