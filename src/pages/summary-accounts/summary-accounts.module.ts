import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SummaryAccountsPage } from "./summary-accounts";

@NgModule({
  declarations: [SummaryAccountsPage],
  imports: [IonicPageModule.forChild(SummaryAccountsPage)],
})
export class SummaryAccountsPageModule {}
