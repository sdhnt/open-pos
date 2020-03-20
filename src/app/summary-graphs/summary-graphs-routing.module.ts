import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryGraphsPage } from './summary-graphs.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryGraphsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryGraphsPageRoutingModule {}
