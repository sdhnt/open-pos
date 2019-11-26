import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummaryHomePage } from './summary-home';
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
  declarations: [
    SummaryHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SummaryHomePage),
    TranslateModule.forChild(),
  ],
  exports: [SummaryHomePage]
})
export class SummaryHomePageModule {}
