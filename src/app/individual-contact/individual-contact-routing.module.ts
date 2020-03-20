import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualContactPage } from './individual-contact.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualContactPageRoutingModule {}
