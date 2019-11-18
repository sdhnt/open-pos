import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachHomePage } from './coach-home';

@NgModule({
  declarations: [
    CoachHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CoachHomePage),
  ],
})
export class CoachHomePageModule {}
