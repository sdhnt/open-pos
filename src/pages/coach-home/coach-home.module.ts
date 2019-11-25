import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachHomePage } from './coach-home';
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
  declarations: [
    CoachHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CoachHomePage),
    TranslateModule.forChild(),
  ],
  exports: [CoachHomePage]
})
export class CoachHomePageModule {}
