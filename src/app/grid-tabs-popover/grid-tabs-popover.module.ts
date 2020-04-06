import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridTabsPopoverPageRoutingModule } from './grid-tabs-popover-routing.module';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { GridTabsPopoverPage } from './grid-tabs-popover.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    GridTabsPopoverPageRoutingModule
  ],
  declarations: [GridTabsPopoverPage]
})
export class GridTabsPopoverPageModule {}
