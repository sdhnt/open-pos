import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStockPageRoutingModule } from './update-stock-routing.module';

import { UpdateStockPage } from './update-stock.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStockPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [UpdateStockPage]
})
export class UpdateStockPageModule {}
