import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductSignupPage } from './add-product-signup.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductSignupPageRoutingModule {}
