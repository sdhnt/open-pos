import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { config } from '../utilities/initializeFirebase';
import * as firebase from 'firebase';
import { SMS } from '@ionic-native/sms/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NgOtpInputModule } from 'ng-otp-input';
import { BottomSheetComponent, BottomSheetModule } from 'ionic-custom-bottom-sheet';
import { ContactsPage } from './contacts/contacts.page';
import { TransactionProductPage } from './transaction-product/transaction-product.page';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

firebase.initializeApp(config);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
    }),
    NgOtpInputModule,
    BottomSheetModule
  ],
  entryComponents: [BottomSheetComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Camera,
    Geolocation,
    AppVersion,
    Market,
    CallNumber,
    ContactsPage,
    EmailComposer,
    SocialSharing,
    Base64ToGallery,
    PhotoLibrary,
    Facebook,
    // tslint:disable-next-line: deprecation
    Contacts,
    FirebaseAuthentication,
    BluetoothSerial,
    TransactionProductPage,
    SMS,
    AppMinimize,
    WebView,
    Base64
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
