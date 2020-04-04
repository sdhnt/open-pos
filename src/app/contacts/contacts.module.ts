import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { TranslateModule } from '@ngx-translate/core';
import { BottomSheetModule, BottomSheetComponent } from 'ionic-custom-bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
    TranslateModule.forChild(),
    BottomSheetModule
  ],
  entryComponents: [BottomSheetComponent],
  declarations: [ContactsPage]
})
export class ContactsPageModule { }
