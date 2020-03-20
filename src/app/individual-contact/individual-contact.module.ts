import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualContactPageRoutingModule } from './individual-contact-routing.module';

import { IndividualContactPage } from './individual-contact.page';
import { TranslateModule } from '@ngx-translate/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualContactPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [IndividualContactPage],
  providers: [LocalNotifications]
})
export class IndividualContactPageModule {}
