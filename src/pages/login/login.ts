import { Component, NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, AlertController } from "ionic-angular";
import firebase, { auth } from "firebase";
import { SignUpPage } from "../sign-up/sign-up";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { StorageProvider } from "../../providers/storage/storage";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { UserProfilePage } from "../user-profile/user-profile";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  email = "";
  password = "";
  selectedLanguage: string;

  listOfLang: string[] = [];

  constructor(
    public navCtrl: NavController,
    public zone: NgZone,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public facebook: Facebook,
    public sp: StorageProvider,
    public alertCtrl: AlertController,
    private translateConfigService: TranslateConfigService,
  ) {
    this.loadDropDowns();

    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        await firebase
          .firestore()
          .collection("users")
          .where("owner", "==", firebase.auth().currentUser.uid)
          .get()
          .then(function(querySnapshot) {
            if (querySnapshot.size == 0) {
              // console.log("Not permitted - this account has not filled their data (Fb Login) or no internet");
              // navCtrl.setRoot(UserProfilePage, {
              //   uid: firebase.auth().currentUser.uid,
              //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              //});
              console.log("No Internet");
              this.toastCtrl
                .create({
                  message: "Check your connection",
                  duration: 2000,
                })
                .present();
            } else {
              sp.setMem().then(() => {
                zone.run(() => {
                  console.log("firing from constructor");
                  navCtrl.setRoot(TransactionHomePage);
                });
              });
            }
          })
          .catch(error => {
            this.toastCtrl.create({
              message: error,
              duration: 2000,
            });
          });
      } else {
        // No user is signed in.
        console.log("no-user is previously signed in");
      }
    });

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  language;

  loadDropDowns() {
    firebase
      .firestore()
      .collection("sign-up")
      .get()
      .then(doc => {
        doc.docs[0].data().language.forEach(l => {
          this.listOfLang.push(l);
          //console.log(this.listOfLang);
        });
      })
      .catch(error => {
        this.toastCtrl.create({
          message: error,
          duration: 2000,
        });
      });
  }

  loginWithFB() {
    this.facebook
      .login(["email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Logged into Facebook!", res);

        firebase
          .auth()
          .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
          .then(async success => {
            console.log("Firebase success", success);
            const temp = success;
            await firebase
              .firestore()
              .collection("users")
              .where("owner", "==", firebase.auth().currentUser.uid)
              .get()
              .then(function(querySnapshot) {
                if (querySnapshot.size == 0) {
                  console.log("Not permitted - no sign up");
                  this.navCtrl.setRoot(UserProfilePage, {
                    uid: firebase.auth().currentUser.uid,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  });
                } else {
                  this.loginProcedure();
                }
              });
          })
          .catch(err => {
            console.log("Firebase error", err);
          });
      })
      .catch(e => console.log("Error logging into Facebook", e));
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.loginProcedure();
          })
          .catch(err => {
            console.log(err);
            this.toastCtrl
              .create({
                message: err.message,
                duration: 3000,
              })
              .present();
          });
      });
    //console.log(user)
  }

  loginAction() {
    const message = this.translateConfigService.getTranslatedMessage("This feature will open shortly");
    this.toastCtrl
      .create({
        // @ts-ignore
        message: message.value,
        duration: 2000,
      })
      .present();
  }

  gotoSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  loginProcedure() {
    this.zone.run(() => {
      console.log("firing from login proc");
      // this.sp.clearMem();

      this.sp.setMem().then(() => {
        this.navCtrl.setRoot(TransactionHomePage);
      });
    });
  }

  languageChanged() {
    console.log(`selected language: ${this.selectedLanguage}`);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
