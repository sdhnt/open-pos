import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleProductPage } from './singleproduct';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        SingleProductPage,
    ],
    imports: [
        IonicPageModule.forChild(SingleProductPage),
        TranslateModule.forChild()
    ],
    exports: [SingleProductPage]
})
export class SingleProductPageModule {}
