import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { AlertController, IonicApp, IonicErrorHandler, IonicModule, ToastController } from "ionic-angular";
import { ReactiveFormsModule } from "@angular/forms";

import { MyApp } from "./app.component";
import { LoginPage } from "../pages/login/login";
import { TransactionHomePage } from "../pages/transaction-home/transaction-home";
import { AddProductPage } from "../pages/addproduct/addproduct";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { StorageProvider } from "../providers/storage/storage";
import { IonicStorageModule } from "@ionic/storage";
import { GettersetterProvider } from "../providers/gettersetter/gettersetter";
import { Camera } from "@ionic-native/camera";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateConfigService } from "../providers/translation/translate-config.service";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { PrinterProvider } from "./../providers/printer/printer";
import { Geolocation } from "@ionic-native/geolocation";
import { GeolocationService } from "../providers/geolocation/geolocation.service";
import { FcmService } from "../providers/firebase-cloud-messaging/fcm.service";
import { AppVersion } from "@ionic-native/app-version";
import { Market } from "@ionic-native/market";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";
import { PhotoLibrary } from "@ionic-native/photo-library";
import { Facebook } from "@ionic-native/facebook";
import { Contacts } from "@ionic-native/contacts";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { SMS } from "@ionic-native/sms";
import { AndroidPermissions } from '@ionic-native/android-permissions'

import { LoginPageModule } from "../pages/login/login.module";
import { TransactionHomePageModule } from "../pages/transaction-home/transaction-home.module";
import { AddProductPageModule } from "../pages/addproduct/addproduct.module";
import { SingleProductPage } from "../pages/singleproduct/singleproduct";
import { SingleProductPageModule } from "../pages/singleproduct/singleproduct.module";
import { TransactionProductPageModule } from "../pages/transaction-product/transaction-product.module";
import { TransactionProductPage } from "../pages/transaction-product/transaction-product";
import { AddProductCategoryPageModule } from "../pages/add-product-category/add-product-category.module";
import { AddProductCategoryPage } from "../pages/add-product-category/add-product-category";
import { AddProdSignupPageModule } from "../pages/add-prod-signup/add-prod-signup.module";
import { AddProdSignupPage } from "../pages/add-prod-signup/add-prod-signup";
import { UserDataPageModule } from "../pages/user-data/user-data.module";
import { ContactsPageModule } from "../pages/contacts/contacts.module";
import { ContactsPage } from "../pages/contacts/contacts";
import { IndividualContactPage } from "../pages/individual-contact/individual-contact";
import { IndividualContactPageModule } from "../pages/individual-contact/individual-contact.module";
import { CreditReminderPage } from "../pages/credit-reminder/credit-reminder";
import { CreditReminderPageModule } from "../pages/credit-reminder/credit-reminder.module";

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
    TransactionHomePageModule,
    TransactionProductPageModule,
    AddProductPageModule,
    SingleProductPageModule,
    AddProductCategoryPageModule,
    AddProdSignupPageModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserDataPageModule,
    ContactsPageModule,
    IndividualContactPageModule,
    CreditReminderPageModule,
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
    TransactionHomePage,
    TransactionProductPage,
    AddProdSignupPage,
    SingleProductPage,
    AddProductPage,
    AddProductCategoryPage,
    ContactsPage,
    IndividualContactPage,
    CreditReminderPage,
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
    AppVersion,
    Market,
    CallNumber,
    EmailComposer,
    SocialSharing,
    Base64ToGallery,
    //File,
    PhotoLibrary,
    Facebook,
    Contacts,
    LocalNotifications,
    SMS,
    AndroidPermissions,
  ],
})
export class AppModule {}
