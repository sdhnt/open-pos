import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridTabsPopoverPage } from './grid-tabs-popover.page';

const routes: Routes = [
  {
    path: '',
    component: GridTabsPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridTabsPopoverPageRoutingModule {}
