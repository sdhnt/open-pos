import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BusinessCardPage } from "./business-card";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [BusinessCardPage],
  imports: [IonicPageModule.forChild(BusinessCardPage), TranslateModule.forChild()],
})
export class BusinessCardPageModule {}
