import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoanHomePage } from "./loan-home";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [LoanHomePage],
  imports: [IonicPageModule.forChild(LoanHomePage), TranslateModule.forChild()],
  exports: [LoanHomePage],
})
export class LoanHomePageModule {}
