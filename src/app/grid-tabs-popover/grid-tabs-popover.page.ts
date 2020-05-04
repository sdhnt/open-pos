import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
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
    if (page === 'home/income-transaction') {

      const navigatoinExtra: NavigationExtras = {
        queryParams: {
          lang: this.userLang,
        }
      };
      this.router.navigate(['/home/income-transaction'], navigatoinExtra);

    } else {
      this.router.navigate([page]);
    }
    this.popover.dismiss();
  }
}
