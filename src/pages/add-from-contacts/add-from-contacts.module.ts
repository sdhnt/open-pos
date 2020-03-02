import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AddFromContactsPage } from "./add-from-contacts";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AddFromContactsPage],
  imports: [IonicPageModule.forChild(AddFromContactsPage), TranslateModule.forChild()],
  exports: [AddFromContactsPage],
})
export class AddFromContactsPageModule {}
