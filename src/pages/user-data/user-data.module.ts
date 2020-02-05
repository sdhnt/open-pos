import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDataPage } from './user-data';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    UserDataPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDataPage),
    TranslateModule.forChild(),
  ],
})
export class UserDataPageModule {}
