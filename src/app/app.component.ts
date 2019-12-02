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
  ) {
    this.initializeApp();
    this.pages = [
      { title: "Sales", component: TransactionHomePage },
      { title: "Products", component: DashboardPage },
      { title: "Stock", component: ExpensesHomePage },
      { title: "Business", component: SummaryHomePage },
      // { title: 'Coach', component: CoachHomePage },
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
    function onBackKeyDown() {}
  }

  logout() {
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

  ionViewDidEnter() {}
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.translateService.addLangs(["en", "pt"]);
      this.translateService.setDefaultLang("en");
      this.translateService.use("en");
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openUserProfilePage() {
    this.openPage({ component: UserProfilePage });
  }
}
