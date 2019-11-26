import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductPage } from './addproduct';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        AddProductPage,
    ],
    imports: [
        IonicPageModule.forChild(AddProductPage),
        TranslateModule.forChild()
    ],
    exports: [AddProductPage]
})
export class AddProductPageModule {}
