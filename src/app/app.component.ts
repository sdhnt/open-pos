import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, ToastController, App, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";

import * as firebase from "firebase";
import { TransactionHomePage } from "../pages/transaction-home/transaction-home";
import { StorageProvider } from "../providers/storage/storage";
import { UserDataPage } from "../pages/user-data/user-data";
import { TranslateConfigService } from "../providers/translation/translate-config.service";
import { TranslateService } from "@ngx-translate/core";
import { FcmService } from "../providers/firebase-cloud-messaging/fcm.service";
import { hasInternet } from "../utilities/hasInternet";
import { initializeFirebase } from "../utilities/initializeFirebase";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  //2rootPage: any = AddProdSignupPage;

  language: "en";
  pages: Array<{ title: string; component: any }> = [{ title: "Home", component: TransactionHomePage }];
  userLang: string;

  constructor(
    public app: App,
    public platform: Platform,
    public statusBar: StatusBar,
    private translateService: TranslateService,
    private translateConfigService: TranslateConfigService,
    public splashScreen: SplashScreen,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private fcm: FcmService,
  ) {
    this.initializeApp();
    this.backButtonEvent();

    this.sp.getUserDat().then(user => {
      if (user == null) {
        this.userLang = "en";
      } else {
        const _user = JSON.parse(user);
        this.userLang = _user.language;
      }
    });
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

  async logout() {
    //this.sp.backupStorageLogout().then();
    if (await hasInternet())
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
    else {
      console.log("no internet, logout is not allowed");
    }
  }

  resetBackButton: any;

  ionViewDidEnter() {}

  initializeApp() {
    this.platform.ready().then(async () => {
      // initialise firebase app
      const isThereFirebase = await initializeFirebase();
      if (!isThereFirebase) console.log("no firebase");

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.translateService.addLangs(["en", "pt"]);
      this.translateService.setDefaultLang("en");
      this.translateService.use("en");
      // do not remove the next line of code, will fix FCM in due time
      // this.setupNotifications();

      // if device memory has user data, open transaction home page, else open login page
      // if no data exist, and no firebase app
      const dataExist = await this.sp.hasData();
      if (!isThereFirebase && !dataExist) {
        console.log("critical error: cannot work without internet nor data");

        const alert = this.alertCtrl.create({
          title: "No internet and not logged in.",
          subTitle: "Please connect to the internet, and restart this app.",
        });
        await alert.present();

        return;
      }
       this.rootPage = dataExist ? TransactionHomePage : LoginPage;
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openUserProfilePage() {
    this.openPage({ component: UserDataPage });
  }

  userdata: any;
  onLangChange() {
    this.translateConfigService.setLanguage(this.userLang);
    this.getUserData();

    this.nav.setRoot(TransactionHomePage, { lang: this.userLang });
  }
  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
          this.userdata.language = this.userLang;
          this.sp.storageReady().then(() => {
            this.sp.setUserDat(this.userdata).then(() => {
              console.log(this.userdata);
              //this.sp.setMem();
            });
          });
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }
}
