import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductCategoryPageRoutingModule } from './add-product-category-routing.module';

import { AddProductCategoryPage } from './add-product-category.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductCategoryPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AddProductCategoryPage]
})
export class AddProductCategoryPageModule {}
