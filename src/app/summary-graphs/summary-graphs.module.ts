import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryGraphsPageRoutingModule } from './summary-graphs-routing.module';

import { SummaryGraphsPage } from './summary-graphs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryGraphsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SummaryGraphsPage]
})
export class SummaryGraphsPageModule {}
