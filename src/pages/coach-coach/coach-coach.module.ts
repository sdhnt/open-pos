import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachCoachPage } from './coach-coach';
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
  declarations: [
    CoachCoachPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachCoachPage),
    TranslateModule.forChild(),
  ],
  exports: [CoachCoachPage]
})
export class CoachCoachPageModule {}
