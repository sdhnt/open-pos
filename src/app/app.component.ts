import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Platform, ToastController, AlertController, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';
import { TranslateConfigService } from './services/translation/translate-config.service';
import { StorageProvider } from './services/storage/storage';
import { hasInternet } from '../utilities/hasInternet';
import { initializeFirebase } from '../utilities/initializeFirebase';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [{ title: 'Home', url: '/home' }];
  public labels = ['Home'];
  language: 'en';
  pages: Array<{ title: string; url: any }> = [{ title: 'Home', url: '/home' }];
  userLang: string;

  resetBackButton: any;

  userdata: any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    public platform: Platform,
    public statusBar: StatusBar,
    private translateService: TranslateService,
    private translateConfigService: TranslateConfigService,
    public splashScreen: SplashScreen,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public sp: StorageProvider,
    private menu: MenuController,
    private appMinimize: AppMinimize
  ) {
    this.initializeApp();
    this.backButtonEvent();

    this.sp.getUserDat().then(user => {
      if (user == null) {
        this.userLang = 'en';
      } else {
        const userFromStorage = JSON.parse(user);
        this.userLang = userFromStorage.language;
      }
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(() => {
      // this.platform.exitApp();

      // or if that doesn't work, try
      // tslint:disable-next-line: no-string-literal
      // navigator['app'].exitApp();
      this.appMinimize.minimize();
    });

    document.addEventListener('backbutton', onBackKeyDown, false);
    function onBackKeyDown() {
      console.log('y03');
      // navigator.Backbutton.goHome(function() {
      //     console.log('success')
      // }, function() {
      //     console.log('fail')
      // });
    }
  }

  async logout() {
    // this.sp.backupStorageLogout().then();
    if (await hasInternet()) {
      firebase
        .auth()
        .signOut()
        .then(async () => {
          const toast = await this.toastCtrl
            .create({
              message: 'Logged out!',
              duration: 3000,
            });
          toast.present();
          this.sp.clearMem();
          this.navCtrl.navigateRoot(['/login']);
        });
    } else {
      console.log('no internet, logout is not allowed');
    }
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      console.log('App Initialization');
      this.statusBar.styleDefault();
      const isThereFirebase = await initializeFirebase();
      if (!isThereFirebase) { console.log('no firebase'); }

      console.log(firebase.auth().currentUser);
      this.translateService.addLangs(['en', 'my']);
      this.translateService.setDefaultLang('en');
      this.userLang ? this.translateService.use(this.userLang) : this.translateService.use('en');
      // do not remove the next line of code, will fix FCM in due time
      // this.setupNotifications();

      // if device memory has user data, open transaction home page, else open login page
      // if no data exist, and no firebase app
      const dataExist = await this.sp.hasData();
      if (!isThereFirebase && !dataExist) {
        console.log('critical error: cannot work without internet nor data');

        const alert = await this.alertCtrl.create({
          header: 'No internet and not logged in.',
          subHeader: 'Please connect to the internet, and restart this app.',
        });
        await alert.present();
        return;
      }
      const navigationExtras: NavigationExtras = {
        queryParams: {
          lang: this.userLang
        }
      };
      dataExist ? this.router.navigate(['/home/income-transaction'], navigationExtras) : this.router.navigate(['/login']);
      this.splashScreen.hide();
    });
  }

  closeMenu() {
    this.menu.close();
  }

  ngOnInit() {

  }

  openUserProfilePage() {
    this.router.navigate(['/home/user-data']);
    // this.openPage({ component: UserDataPage });
  }

  onLangChange() {
    this.translateConfigService.setLanguage(this.userLang);
    this.getUserData();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        lang: this.userLang
      }
    };
    this.router.navigate(['/home/income-transaction'], navigationExtras);
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
              // this.sp.setMem();
            });
          });
        })
        .catch(err => {
          alert('Error: ' + err);
        });
    });
  }
}
