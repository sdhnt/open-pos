import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SummaryGraphsPage } from "./summary-graphs";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SummaryGraphsPage],
  imports: [IonicPageModule.forChild(SummaryGraphsPage), TranslateModule.forChild()],
  exports: [SummaryGraphsPage],
})
export class SummaryGraphsPageModule {}
