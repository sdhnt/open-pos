import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { IndividualContactPage } from "./individual-contact";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [IndividualContactPage],
  imports: [IonicPageModule.forChild(IndividualContactPage), TranslateModule.forChild()],
  exports: [IndividualContactPage]
})
export class IndividualContactPageModule {}
