import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditReminderPageRoutingModule } from './credit-reminder-routing.module';

import { CreditReminderPage } from './credit-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditReminderPageRoutingModule
  ],
  declarations: [CreditReminderPage]
})
export class CreditReminderPageModule {}
