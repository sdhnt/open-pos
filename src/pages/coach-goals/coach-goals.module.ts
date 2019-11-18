import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachGoalsPage } from './coach-goals';

@NgModule({
  declarations: [
    CoachGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachGoalsPage),
  ],
})
export class CoachGoalsPageModule {}
