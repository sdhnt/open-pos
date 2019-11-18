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
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { StorageProvider } from '../providers/storage/storage';
import { ExpensesHomePage } from '../pages/expenses-home/expenses-home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public sp: StorageProvider, public toastCtrl: ToastController) {

    this.initializeApp();
    this.pages = [
      { title: 'ဝင်ငွေ', component: TransactionHomePage },
      { title: 'ထုတ်ကုန်များ', component: DashboardPage },
      { title: 'စစရိတ်', component: ExpensesHomePage },
      { title: 'စီးပွားရေး', component: SummaryHomePage },
      { title: 'ဆရာ', component: CoachHomePage },
      { title: 'ကူညီပါ', component: ContactUsPage },
    ];
  }

 
  
  logout(){

    //this.sp.backupStorageLogout().then();

    firebase.auth().signOut().then(()=>{
      this.toastCtrl.create({
        message: "ဆိုင်းအောက်",
        duration: 3000
      }).present()
      this.nav.setRoot(LoginPage);
  });
}
ngAfterViewInit(){
  console.log("yolo1");
  //this.nav.setRoot(LoginPage);
}
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)// User is signed in.
          
          
          this.nav.setRoot(TransactionHomePage);
        } else {
          // No user is signed in.
          //this.nav.setRoot(LoginPage);
        }
      });
    
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}