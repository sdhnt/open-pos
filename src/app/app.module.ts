import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
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
import { ToastController } from "ionic-angular";
import { GettersetterProvider } from "../providers/gettersetter/gettersetter";
import { Camera } from "@ionic-native/camera";
import { Facebook } from "@ionic-native/facebook";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateConfigService } from "../providers/translation/translate-config.service";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { PrinterProvider } from "./../providers/printer/printer";
import { Geolocation } from "@ionic-native/geolocation";
import { GeolocationService } from "../providers/geolocation/geolocation.service";

import * as firebase from "firebase";
import { LoginPageModule } from "../pages/login/login.module";
import { SignUpPageModule } from "../pages/sign-up/sign-up.module";
import { TransactionHomePageModule } from "../pages/transaction-home/transaction-home.module";
import { DashboardPageModule } from "../pages/dashboard/dashboard.module";
import { AddProductPageModule } from "../pages/addproduct/addproduct.module";
import { SingleProductPage } from "../pages/singleproduct/singleproduct";
import { SingleProductPageModule } from "../pages/singleproduct/singleproduct.module";
import { GlobalProvider } from "../providers/global/global";

// var config = {
//   apiKey: "AIzaSyADjIbI3_GRS4eRHGVGFsT2hrkKvH9K06M",
//   authDomain: "trialapp-1cb3d.firebaseapp.com",
//   databaseURL: "https://trialapp-1cb3d.firebaseio.com",
//   projectId: "trialapp-1cb3d",
//   storageBucket: "trialapp-1cb3d.appspot.com",
//   messagingSenderId: "591467524421"
// };
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
    GettersetterProvider,
    Camera,
    Facebook,
    TranslateConfigService,
    BluetoothSerial,
    PrinterProvider,
    GlobalProvider,
    Geolocation,
    GeolocationService,
  ],
})
export class AppModule {}
