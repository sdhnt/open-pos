import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CoachBusinesstipsPage } from "./coach-businesstips";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CoachBusinesstipsPage],
  imports: [IonicPageModule.forChild(CoachBusinesstipsPage), TranslateModule.forChild()],
  exports: [CoachBusinesstipsPage],
})
export class CoachBusinesstipsPageModule {}
