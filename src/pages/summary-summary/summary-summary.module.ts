import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SummarySummaryPage } from "./summary-summary";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SummarySummaryPage],
  imports: [IonicPageModule.forChild(SummarySummaryPage), TranslateModule.forChild()],
  exports: [SummarySummaryPage],
})
export class SummarySummaryPageModule {}
