import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseGeneralPage } from './expense-general.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseGeneralPageRoutingModule {}
