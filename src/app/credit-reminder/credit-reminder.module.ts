import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditReminderPageRoutingModule } from './credit-reminder-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { CreditReminderPage } from './credit-reminder.page';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CreditReminderPageRoutingModule
  ],
  declarations: [CreditReminderPage],
  providers: [DatePipe]
})
export class CreditReminderPageModule {}
