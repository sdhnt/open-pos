import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../services/storage/storage';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { commands } from './../services/printer/printer-commands';

@Component({
  selector: 'app-select-printer-popover',
  templateUrl: './select-printer-popover.page.html',
  styleUrls: ['./select-printer-popover.page.scss'],
})
export class SelectPrinterPopoverPage implements OnInit {
  constructor(
    public sp: StorageProvider,
  ) { }

  ngOnInit() {
  }

}
