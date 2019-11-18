import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummaryHomePage } from './summary-home';

@NgModule({
  declarations: [
    SummaryHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SummaryHomePage),
  ],
})
export class SummaryHomePageModule {}
