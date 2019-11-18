import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductCategoryPage } from './add-product-category';

@NgModule({
  declarations: [
    AddProductCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProductCategoryPage),
  ],
})
export class AddProductCategoryPageModule {}
