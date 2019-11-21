import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { ReactiveFormsModule } from "@angular/forms";

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';
import { AddProductPage } from '../pages/addproduct/addproduct';
import { SingleProductPage } from '../pages/singleproduct/singleproduct';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { GettersetterProvider } from '../providers/gettersetter/gettersetter';
import { Camera } from '@ionic-native/camera'; 
import { Facebook } from '@ionic-native/facebook';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from '../providers/translation/translate-config.service';

import * as firebase from 'firebase';
import { TransactionHomePage } from '../pages/transaction-home/transaction-home';
import { AllTransactionPage } from '../pages/all-transaction/all-transaction';
import { ExpenseTransactionPage } from '../pages/expense-transaction/expense-transaction';
import { IncomeTransactionPage } from '../pages/income-transaction/income-transaction';
import { CalculatorPage } from '../pages/calculator/calculator';
import { SummaryHomePage } from '../pages/summary-home/summary-home';
import { CoachHomePage } from '../pages/coach-home/coach-home';
import { CoachGoalsPage } from '../pages/coach-goals/coach-goals';
import { CoachCoachPage } from '../pages/coach-coach/coach-coach';
import { CoachBusinesstipsPage } from '../pages/coach-businesstips/coach-businesstips';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { TransactionProductPage } from '../pages/transaction-product/transaction-product';
import { ProductListPage } from '../pages/product-list/product-list';
import { AddProductCategoryPage } from '../pages/add-product-category/add-product-category';
import { ExpensesHomePage } from '../pages/expenses-home/expenses-home';
import { AddProductCategoryPageModule } from '../pages/add-product-category/add-product-category.module';
import { AllTransactionPageModule } from '../pages/all-transaction/all-transaction.module';
import { CalculatorPageModule } from '../pages/calculator/calculator.module';
import { CoachBusinesstipsPageModule } from '../pages/coach-businesstips/coach-businesstips.module';
import { CoachHomePageModule } from '../pages/coach-home/coach-home.module';
import { CoachGoalsPageModule } from '../pages/coach-goals/coach-goals.module';
import { CoachCoachPageModule } from '../pages/coach-coach/coach-coach.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { TransactionHomePageModule } from '../pages/transaction-home/transaction-home.module';
import { ExpenseTransactionPageModule } from '../pages/expense-transaction/expense-transaction.module';
import { IncomeTransactionPageModule } from '../pages/income-transaction/income-transaction.module';
import { SummaryHomePageModule } from '../pages/summary-home/summary-home.module';
import { TransactionProductPageModule } from '../pages/transaction-product/transaction-product.module';
import { ProductListPageModule } from '../pages/product-list/product-list.module';
import { ExpensesHomePageModule } from '../pages/expenses-home/expenses-home.module';



// var config = {
//   apiKey: "AIzaSyADjIbI3_GRS4eRHGVGFsT2hrkKvH9K06M",
//   authDomain: "trialapp-1cb3d.firebaseapp.com",
//   databaseURL: "https://trialapp-1cb3d.firebaseio.com",
//   projectId: "trialapp-1cb3d",
//   storageBucket: "trialapp-1cb3d.appspot.com",
//   messagingSenderId: "591467524421"
// };
var config = {
  apiKey: "AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A",
  authDomain: "open-fintech.firebaseapp.com",
  databaseURL: "https://open-fintech.firebaseio.com",
  projectId: "open-fintech",
  storageBucket: "open-fintech.appspot.com",
  messagingSenderId: "1001643033524",
  measurementId: "G-CECMRG504L"
};

firebase.initializeApp(config);

// language translation service
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,

    DashboardPage,
    ListPage,
    AddProductPage,
    SingleProductPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AddProductCategoryPageModule,
    AllTransactionPageModule,
    CalculatorPageModule,
    CoachBusinesstipsPageModule,
    CoachHomePageModule,
    CoachGoalsPageModule,
    CoachCoachPageModule,
    ContactUsPageModule,
    LoginPageModule,
    SignUpPageModule,
    TransactionHomePageModule,
    ExpenseTransactionPageModule,
    IncomeTransactionPageModule,
    SummaryHomePageModule,
    TransactionProductPageModule,
    ProductListPageModule,
    ExpensesHomePageModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ListPage,
    AddProductPage,
    SingleProductPage,
    LoginPage,
    SignUpPage,
    TransactionHomePage,
    ExpenseTransactionPage,
    IncomeTransactionPage,
    AllTransactionPage,
    CalculatorPage,
    CoachHomePage,
    SummaryHomePage,
    CoachGoalsPage,
    CoachCoachPage,
    CoachBusinesstipsPage,
    ContactUsPage,
    TransactionProductPage,
    ProductListPage,
    AddProductCategoryPage,
    ExpensesHomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    BarcodeScanner,
    IonicStorageModule,
    ToastController,
    GettersetterProvider,
    Camera,
    Facebook,
    TranslateConfigService,
  ]
})
export class AppModule {}
