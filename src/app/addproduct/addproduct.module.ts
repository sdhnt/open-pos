import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproductPageRoutingModule } from './addproduct-routing.module';

import { AddproductPage, CameraPreviewPage } from './addproduct.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddproductPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AddproductPage, CameraPreviewPage],
  entryComponents: [CameraPreviewPage]
})
export class AddproductPageModule { }
