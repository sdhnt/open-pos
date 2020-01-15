import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SummaryAccountsPage } from "./summary-accounts";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SummaryAccountsPage],
  imports: [IonicPageModule.forChild(SummaryAccountsPage), TranslateModule.forChild()],
  exports: [SummaryAccountsPage],

})
export class SummaryAccountsPageModule {}
