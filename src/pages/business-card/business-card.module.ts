import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessCardPage } from './business-card';

@NgModule({
  declarations: [
    BusinessCardPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessCardPage),
  ],
})
export class BusinessCardPageModule {}
