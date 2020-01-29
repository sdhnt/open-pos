import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AddProdSignupPage } from "./add-prod-signup";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AddProdSignupPage],
  imports: [IonicPageModule.forChild(AddProdSignupPage), TranslateModule.forChild()],
  exports: [AddProdSignupPage],
})
export class AddProdSignupPageModule {}
