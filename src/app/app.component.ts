import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';

import * as firebase from 'firebase';
import { TransactionHomePage } from '../pages/transaction-home/transaction-home';
import { SummaryHomePage } from '../pages/summary-home/summary-home';
import { CoachHomePage } from '../pages/coach-home/coach-home';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { StorageProvider } from '../providers/storage/storage';
import { ExpensesHomePage } from '../pages/expenses-home/expenses-home';
import { TranslateConfigService } from '../providers/translation/translate-config.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, private translateConfigService: TranslateConfigService,
    public splashScreen: SplashScreen, public toastCtrl: ToastController) {

    this.initializeApp();
    this.pages = [
      { title: 'Sales', component: TransactionHomePage },
      { title: 'Products', component: DashboardPage },
      { title: 'Expense', component: ExpensesHomePage },
      { title: 'Business', component: SummaryHomePage },
     // { title: 'Coach', component: CoachHomePage },
      { title: 'Contact Us', component: ContactUsPage },
    ];
  }

 
  
  logout(){
    //this.sp.backupStorageLogout().then();
    firebase.auth().signOut().then(()=>{
      this.toastCtrl.create({
        message:"Logged out!",
        duration: 3000
      }).present()
      this.nav.setRoot(LoginPage);
  });
}
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}