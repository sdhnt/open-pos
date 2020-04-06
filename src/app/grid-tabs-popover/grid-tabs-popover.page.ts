import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageProvider } from '../services/storage/storage';
@Component({
  selector: 'app-grid-tabs-popover',
  templateUrl: './grid-tabs-popover.page.html',
  styleUrls: ['./grid-tabs-popover.page.scss'],
})
export class GridTabsPopoverPage implements OnInit {
  userLang: string;

  constructor(public sp: StorageProvider, public popover: PopoverController, public router: Router) { }

  ngOnInit() {
    this.userData();
  }

  userData() {
    this.sp.getUserDat().then(user => {
      if (user == null) {
        this.userLang = 'en';
      } else {
        const userFromStorage = JSON.parse(user);
        this.userLang = userFromStorage.language;
      }
    });
  }

  navigateTo(page) {
    if (page == 'home/income-transaction') {
      this.router.navigateByUrl(page + '?lang=' + this.userLang);
    } else {
      this.router.navigateByUrl(page);
    }
    this.popover.dismiss();
  }
}
