import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanHomePage } from './loan-home.page';

const routes: Routes = [
  {
    path: '',
    component: LoanHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanHomePageRoutingModule {}
