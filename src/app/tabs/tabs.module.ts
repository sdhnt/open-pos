import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { TranslateModule } from '@ngx-translate/core';

import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import { ContactsPage } from '../contacts/contacts.page';
import { ExpenseGeneralPage } from '../expense-general/expense-general.page';
import { HelpPage } from '../help/help.page';
import { AllTransactionPageModule } from '../all-transaction/all-transaction.module';
import { ContactsPageModule } from '../contacts/contacts.module';
import { ExpenseGeneralPageModule } from '../expense-general/expense-general.module';
import { HelpPageModule } from '../help/help.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TranslateModule.forRoot(),
    AllTransactionPageModule,
    ContactsPageModule,
    ExpenseGeneralPageModule,
    HelpPageModule
  ],
  entryComponents: [
    AllTransactionPage,
    ContactsPage,
    ExpenseGeneralPage,
    HelpPage
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
