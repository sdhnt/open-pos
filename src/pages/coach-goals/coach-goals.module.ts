import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CoachGoalsPage } from "./coach-goals";
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
  declarations: [CoachGoalsPage],
  imports: [IonicPageModule.forChild(CoachGoalsPage), TranslateModule.forChild()],
  exports: [CoachGoalsPage],
})
export class CoachGoalsPageModule {}
