import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductSignupPageRoutingModule } from './add-product-signup-routing.module';

import { AddProductSignupPage } from './add-product-signup.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductSignupPageRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [AddProductSignupPage]
})
export class AddProductSignupPageModule {}
