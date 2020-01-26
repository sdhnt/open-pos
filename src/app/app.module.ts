import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { AlertController, IonicApp, IonicErrorHandler, IonicModule, ToastController } from "ionic-angular";
import { ReactiveFormsModule } from "@angular/forms";

import { MyApp } from "./app.component";
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { TransactionHomePage } from "../pages/transaction-home/transaction-home";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { AddProductPage } from "../pages/addproduct/addproduct";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { StorageProvider } from "../providers/storage/storage";
import { IonicStorageModule } from "@ionic/storage";
import { GettersetterProvider } from "../providers/gettersetter/gettersetter";
import { Camera } from "@ionic-native/camera";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateConfigService } from "../providers/translation/translate-config.service";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { PrinterProvider } from "./../providers/printer/printer";
import { Geolocation } from "@ionic-native/geolocation";
import { GeolocationService } from "../providers/geolocation/geolocation.service";
import { FcmService } from "../providers/firebase-cloud-messaging/fcm.service";

import * as firebase from "firebase/app";
import { LoginPageModule } from "../pages/login/login.module";
import { SignUpPageModule } from "../pages/sign-up/sign-up.module";
import { TransactionHomePageModule } from "../pages/transaction-home/transaction-home.module";
import { DashboardPageModule } from "../pages/dashboard/dashboard.module";
import { AddProductPageModule } from "../pages/addproduct/addproduct.module";
import { SingleProductPage } from "../pages/singleproduct/singleproduct";
import { SingleProductPageModule } from "../pages/singleproduct/singleproduct.module";
import { AllTransactionPage } from "../pages/all-transaction/all-transaction";
import { AllTransactionPageModule } from "../pages/all-transaction/all-transaction.module";

const config = {
  apiKey: "AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A",
  authDomain: "open-fintech.firebaseapp.com",
  databaseURL: "https://open-fintech.firebaseio.com",
  projectId: "open-fintech",
  storageBucket: "open-fintech.appspot.com",
  messagingSenderId: "1001643033524",
  measurementId: "G-CECMRG504L",
};

firebase.initializeApp(config);

// language translation service
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { preloadModules: true }),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    SignUpPageModule,
    TransactionHomePageModule,
    AllTransactionPageModule,
    DashboardPageModule,
    AddProductPageModule,
    SingleProductPageModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUpPage,
    TransactionHomePage,
    AllTransactionPage,
    DashboardPage,
    AddProductPage,
    SingleProductPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StorageProvider,
    BarcodeScanner,
    IonicStorageModule,
    ToastController,
    AlertController,
    GettersetterProvider,
    Camera,

    TranslateConfigService,
    BluetoothSerial,
    PrinterProvider,
    Geolocation,
    GeolocationService,
    FcmService,
  ],
})
export class AppModule {}
