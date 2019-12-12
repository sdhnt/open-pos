import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AddProductCategoryPage } from "./add-product-category";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AddProductCategoryPage],
  imports: [IonicPageModule.forChild(AddProductCategoryPage), TranslateModule.forChild()],
  exports: [AddProductCategoryPage],
})
export class AddProductCategoryPageModule { }
