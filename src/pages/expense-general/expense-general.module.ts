import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ExpenseGeneralPage } from "./expense-general";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ExpenseGeneralPage],
  imports: [IonicPageModule.forChild(ExpenseGeneralPage), TranslateModule.forChild()],
  exports: [ExpenseGeneralPage],

})
export class ExpenseGeneralPageModule {}
