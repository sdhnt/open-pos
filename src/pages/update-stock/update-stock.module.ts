import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UpdateStockPage } from "./update-stock";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [UpdateStockPage],

  imports: [IonicPageModule.forChild(UpdateStockPage), TranslateModule.forChild()],
  exports: [UpdateStockPage],
})
export class UpdateStockPageModule {}
