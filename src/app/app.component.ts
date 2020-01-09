import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, ToastController, App } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { DashboardPage } from "../pages/dashboard/dashboard";
import { LoginPage } from "../pages/login/login";

import * as firebase from "firebase";
import { TransactionHomePage } from "../pages/transaction-home/transaction-home";
import { SummaryHomePage } from "../pages/summary-home/summary-home";
import { CoachHomePage } from "../pages/coach-home/coach-home";
import { ContactUsPage } from "../pages/contact-us/contact-us";
import { StorageProvider } from "../providers/storage/storage";
import { ExpensesHomePage } from "../pages/expenses-home/expenses-home";
import { UserProfilePage } from "../pages/user-profile/user-profile";
import { TranslateConfigService } from "../providers/translation/translate-config.service";
import { TranslateService } from "@ngx-translate/core";
import { LoanHomePage } from "../pages/loan-home/loan-home";
import { FcmService } from "../providers/firebase-cloud-messaging/fcm.service";
import { SummarySummaryPage } from "../pages/summary-summary/summary-summary";
import { ExpenseTransactionPage } from "../pages/expense-transaction/expense-transaction";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  language: "en";
  pages: Array<{ title: string; component: any }>;

  constructor(
    public app: App,
    public platform: Platform,
    public statusBar: StatusBar,
    private translateService: TranslateService,
    private translateConfigService: TranslateConfigService,
    public splashScreen: SplashScreen,
    public toastCtrl: ToastController,
    public sp: StorageProvider,
    private fcm: FcmService,
  ) {
    this.initializeApp();
    this.pages = [
      { title: "Create New Sales", component: TransactionHomePage },
      { title: "View/Edit Products", component: DashboardPage },
      { title: "Update Stock", component: ExpenseTransactionPage },
      { title: "Business Performance", component: SummarySummaryPage },
      { title: "Coach", component: CoachHomePage },
      { title: "Apply for Loan", component: LoanHomePage },
      { title: "Contact Us", component: ContactUsPage },
    ];
    this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      console.log("yoyo");
      (navigator as any).Backbutton.goHome();
    });

    this.platform.registerBackButtonAction(() => {
      console.log("yo1");
    });

    document.addEventListener("backbutton", onBackKeyDown, false);
    function onBackKeyDown() {
      console.log("y03");
      // navigator.Backbutton.goHome(function() {
      //     console.log('success')
      // }, function() {
      //     console.log('fail')
      // });
    }
  }

  logout() {
    //this.sp.backupStorageLogout().then();
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.toastCtrl
          .create({
            message: "Logged out!",
            duration: 3000,
          })
          .present();
        this.nav.setRoot(LoginPage);
      });
  }

  resetBackButton: any;

  private setupNotifications() {
    console.log("setting up notifications");
    this.fcm.getToken();
    this.fcm.onNotifications();
  }

  ionViewDidEnter() {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.translateService.addLangs(["en", "pt"]);
      this.translateService.setDefaultLang("en");
      this.translateService.use("en");
      this.setupNotifications();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openUserProfilePage() {
    this.openPage({ component: UserProfilePage });
  }
}
