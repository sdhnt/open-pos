import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanHomePageRoutingModule } from './loan-home-routing.module';

import { LoanHomePage } from './loan-home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanHomePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [LoanHomePage]
})
export class LoanHomePageModule {}
