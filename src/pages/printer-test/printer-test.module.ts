import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrinterTestPage } from './printer-test';

@NgModule({
  declarations: [
    PrinterTestPage,
  ],
  imports: [
    IonicPageModule.forChild(PrinterTestPage),
  ],
})
export class PrinterTestPageModule {}
