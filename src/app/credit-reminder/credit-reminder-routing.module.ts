import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditReminderPage } from './credit-reminder.page';

const routes: Routes = [
  {
    path: '',
    component: CreditReminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditReminderPageRoutingModule {}
