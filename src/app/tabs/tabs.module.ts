import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AllTransactionPage } from '../all-transaction/all-transaction.page';
import { ContactsPage } from '../contacts/contacts.page';
import { ExpenseGeneralPage } from '../expense-general/expense-general.page';
import { HelpPage } from '../help/help.page';
import { AllTransactionPageModule } from '../all-transaction/all-transaction.module';
import { ContactsPageModule } from '../contacts/contacts.module';
import { ExpenseGeneralPageModule } from '../expense-general/expense-general.module';
import { HelpPageModule } from '../help/help.module';
import { LoanHomePageModule } from '../loan-home/loan-home.module';
import { LoanHomePage } from '../loan-home/loan-home.page';
import { BusinessCardPageModule } from '../business-card/business-card.module';
import { BusinessCardPage } from '../business-card/business-card.page';
import { ContactUsPageModule } from '../contact-us/contact-us.module';
import { ContactUsPage } from '../contact-us/contact-us.page';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { UpdateStockPage } from '../update-stock/update-stock.page';
import { UpdateStockPageModule } from '../update-stock/update-stock.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AllTransactionPageModule,
    ContactsPageModule,
    ExpenseGeneralPageModule,
    HelpPageModule,
    LoanHomePageModule,
    BusinessCardPageModule,
    ContactUsPageModule,
    UpdateStockPageModule
  ],
  entryComponents: [
    AllTransactionPage,
    ContactsPage,
    ExpenseGeneralPage,
    HelpPage,
    LoanHomePage,
    BusinessCardPage,
    ContactUsPage,
    UpdateStockPage
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
