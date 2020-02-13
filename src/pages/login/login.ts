import { Component, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Events,
} from "ionic-angular";
import firebase, { auth } from "firebase";
import { TransactionHomePage } from "../transaction-home/transaction-home";
import { StorageProvider } from "../../providers/storage/storage";

import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import { UserProfilePage } from "../user-profile/user-profile";
import { Message, Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { AddProdSignupPage } from "../add-prod-signup/add-prod-signup";

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
  country_code: any;

  constructor(
    public navCtrl: NavController,
    public zone: NgZone,
    public navParams: NavParams,
    public toastCtrl: ToastController,

    public sp: StorageProvider,
    public alertCtrl: AlertController,
    private translateConfigService: TranslateConfigService,
    private loadingCtrl: LoadingController,
    public events: Events,
  ) {
    //this.loadDropDowns();
    //this.getInfo();
    this.country_code = "95";
    this.dis = 0;
    const loading = this.loadingCtrl.create({
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
    });

    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        //console.log(user);
        loading.present();

        await firebase
          .firestore()
          .collection("users")
          .where("owner", "==", firebase.auth().currentUser.uid)
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size == 0) {
              // console.log("Not permitted - this account has not filled their data (Fb Login) or no internet");
              // navCtrl.setRoot(UserProfilePage, {
              //   uid: firebase.auth().currentUser.uid,
              //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              //});
              console.log("No Internet or New Account Required");
              // console.log(firebase.auth().currentUser.uid);
              //MOVE SIGN UP OPTIONS RIGHT HERE AND CREATE A DOCUMENT
              //zone.run(() => {
              //console.log("firing from constructor");
              loading.dismiss();
              //navCtrl.setRoot(TransactionHomePage);
              //});

              const msg = this.translateConfigService.getTranslatedMessage("Internet Unavailable");

              this.toastCtrl
                .create({
                  // @ts-ignore
                  message: msg.value,
                  duration: 2000,
                })
                .present();
            } else {
              sp.setMem().then(() => {
                zone.run(() => {
                  console.log("firing from constructor");
                  loading.dismiss();
                  navCtrl.setRoot(TransactionHomePage);
                });
              });
            }
          })
          .catch(error => {
            // this.toastCtrl.create({
            //   message: error,
            //   duration: 2000,
            // });
          });
      } else {
        // No user is signed in.
        console.log("no-user is previously signed in");
      }
    });

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  dis = 0;

  contactphone = "loading...";
  getInfo() {
    const msg = this.translateConfigService.getTranslatedMessage("Helpline");

    firebase
      .firestore()
      .collection("contact-us")
      .get()
      .then(doc => {
        this.contactphone = doc.docs[0].data().phone;
        const abc = this.alertCtrl
          .create({
            //@ts-ignore
            title: msg.value,
            subTitle: this.contactphone,
          })
          .present();
      });
  }

  timer = 30;
  startTimer() {
    this.zone.run(() => {
      const interval = setInterval(() => {
        this.timer--;
        if (this.timer == 0) clearInterval(interval);
      }, 1000);
    });
  }

  language;

  // loadDropDowns() {
  //   firebase
  //     .firestore()
  //     .collection("sign-up")
  //     .get()
  //     .then(doc => {
  //       doc.docs[0].data().language.forEach(l => {
  //         this.listOfLang.push(l);
  //         //console.log(this.listOfLang);
  //       });
  //     })
  //     .catch(error => {
  //       this.toastCtrl.create({
  //         message: error,
  //         duration: 2000,
  //       });
  //     });
  // }

  // loginWithFB() {
  //   this.facebook
  //     .login(["email"])
  //     .then((res: FacebookLoginResponse) => {
  //       console.log("Logged into Facebook!", res);

  //       firebase
  //         .auth()
  //         .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
  //         .then(async success => {
  //           this.checkifexist();

  //           console.log("Firebase success", success);
  //           // const temp = success;
  //           // await firebase
  //           //   .firestore()
  //           //   .collection("users")
  //           //   .where("owner", "==", firebase.auth().currentUser.uid)
  //           //   .get()
  //           //   .then(function (querySnapshot) {
  //           //     if (querySnapshot.size == 0) {
  //           //       console.log("Not permitted - no sign up");
  //           //       this.navCtrl.setRoot(UserProfilePage, {
  //           //         uid: firebase.auth().currentUser.uid,
  //           //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //           //       });
  //           //     } else {
  //           //       this.loginProcedure();
  //           //     }
  //           //   });
  //         })
  //         .catch(err => {
  //           console.log("Firebase error", err);
  //         });
  //     })
  //     .catch(e => console.log("Error logging into Facebook", e));
  // }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
    this.signup = 0;
  }

  ionViewDidEnter() {
    firebase.auth().useDeviceLanguage();
    this.applicationVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //this.signInPhone();
      },
    });
  }

  applicationVerifier;

  // login() {
  //   firebase
  //     .auth()
  //     .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //     .then(() => {
  //       firebase
  //         .auth()
  //         .signInWithEmailAndPassword(this.email, this.password)
  //         .then(user => {
  //           this.loginProcedure();
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           this.toastCtrl
  //             .create({
  //               message: err.message,
  //               duration: 3000,
  //             })
  //             .present();
  //         });
  //     });
  //   //console.log(user)
  // }

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

  // gotoSignUp() {
  //   this.navCtrl.push(SignUpPage);
  // }

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

  phone;
  // signIn() {
  //   // add a local variable to store navCtrl object
  //   const thatNavCtrl = this.navCtrl;
  //   //Step 1 — Pass the mobile number for verification
  //   const tell = "+" + this.country_code + this.phone;

  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(tell, this.applicationVerifier)
  //     .then((confirmationResult)=> {
  //       const verificationCode = window.prompt(
  //         "Please enter the verification code that was sent to your mobile device.",
  //       );
  //       return confirmationResult.confirm(verificationCode);
  //     })
  //     .catch((error)=> {
  //       // Handle Errors here.
  //       this.toastCtrl.create({
  //         message: error,
  //         duration: 2000,
  //       }).present();
  //     });
  // }

  datet = new Date();

  newaccOwnName;
  newaccBName;
  newaccBArea;
  newaccemail; //
  newaccBType;

  async createAccount() {
    if (
      this.newaccBArea != null &&
      this.newaccBArea != undefined &&
      this.newaccBName != null &&
      this.newaccBName != undefined &&
      this.newaccOwnName != null &&
      this.newaccOwnName != undefined &&
      this.newaccBType != null &&
      this.newaccBType != undefined
    ) {
      this.toastCtrl.create({
        message: "Please wait while account is created. This may take a few minutes",
        duration: 3000,
      });
      this.dis = 1;

      const subCollections = [
        {
          name: "products",
          documents: [
            {
              index: 0,
              products: [
                {
                  cat: "Example",
                  code: "0000",
                  cost: "100",
                  name: "Example Product",
                  price: "0",
                  stock_qty: "10",
                  url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
                  wholesale_price: "0",
                  updatedAt: new Date(),
                },
              ],
            },
          ],
        },
      ];

      await firebase
        .firestore()
        .collection("users")
        .add({
          created: firebase.firestore.FieldValue.serverTimestamp(),
          owner: firebase.auth().currentUser.uid,
          owner_name: this.newaccOwnName,
          autosave: 0,
          business_name: this.newaccBName,
          businesstype: this.newaccBType,
          business_address: this.newaccBArea,
          email: "sample@sample.com",
          ph_no: "+" + this.country_code + this.phone,
          language: this.translateConfigService.getCurrentLanguage(),
          currency: "USD",
          cash_balance: 0,
          discount: 0,
          taxrate: 0,
          logo_url: "",
          categories: [{ name: "Example" }],
          products: [
            {
              cat: "Example",
              code: "0000",
              cost: "100",
              name: "Example Product",
              price: "0",
              stock_qty: "10",
              url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
              wholesale_price: "0",
            },
          ],

          transactions: [
            {
              datetime: new Date(this.datet).getTime(),
              discount: 0,
              discountlist: [],
              itemslist: [
                {
                  cat: "Example",
                  code: "0000",
                  cost: "0",
                  name: "Example Product",
                  price: "0",
                  stock_qty: "0",
                  qty: 1,
                  discount: 0,
                },
              ],
              pnllist: [],
              prodidlist: [],
              taxrate: 0,
              totalatax: 0,
              totaldisc: 0,
              totalsum: 0,
            },
          ],
        })
        .then(async doc => {
          await firebase
            .firestore()
            .collection("users")
            .where("owner", "==", firebase.auth().currentUser.uid)
            .get()
            .then(function(querySnapshot) {
              querySnapshot.forEach(async doc => {
                const uid = doc.id;
                console.log(uid);
                subCollections.forEach(collection => {
                  collection.documents.forEach(async document => {
                    await firebase
                      .firestore()
                      .collection("users")
                      .doc(uid)
                      .collection(collection.name)
                      .add(document);
                  });
                });
              });
            });
          console.log(doc);

          const title = this.translateConfigService.getTranslatedMessage("Account Created");
          const message = this.translateConfigService.getTranslatedMessage(
            "Your account has been created successfully",
          );
          this.alertCtrl
            .create({
              // @ts-ignore
              title: title.value,
              // @ts-ignore
              message: message.value,
              buttons: [
                {
                  text: "OK",
                  handler: () => {
                    //this.sp.clearMem();
                    this.sp.setMem().then(() => {
                      // this.navCtrl.setRoot(TransactionHomePage, {
                      //   data: "newUser",
                      //   lang: this.translateConfigService.getCurrentLanguage(),
                      // }); //navigate to feeds page
                      // this.events.publish("newUser");
                      this.navCtrl.push(AddProdSignupPage);
                    });
                  }, //end handler
                },
              ], //end button
            })
            .present();
        })
        .catch(err => {
          console.log(err);
        });

      console.log("Done");
    } else {
      this.toastCtrl
        .create({
          message: "Incomplete",
          duration: 3000,
        })
        .present();
    }
  }

  signup = 0;
  otpmode = 0;

  async checkifexist() {
    let flag = 0;

    await firebase
      .firestore()
      .collection("users")
      .where("owner", "==", firebase.auth().currentUser.uid)
      .get()
      .then(async querySnapshot => {
        if (querySnapshot.size == 0) {
          console.log("Bun");
          flag = 1;
          this.otpmode = 0;
          this.signup = 1;
          // this.alertCtrl.create({
          //   message:"Looks like you need to create an account!"
          // }).present();
          // const msg = this.translateConfigService.getTranslatedMessage("Sign Up");
          // const msg1 = this.translateConfigService.getTranslatedMessage("Please enter your details to create an account");
          // const msg2 = this.translateConfigService.getTranslatedMessage("Your Name");
          // const msg3 = this.translateConfigService.getTranslatedMessage("Phone Number");
          // const msg4 = this.translateConfigService.getTranslatedMessage("Business Name");
          // const msg5 = this.translateConfigService.getTranslatedMessage("Business Type");
          // const msg6 = this.translateConfigService.getTranslatedMessage("CANCEL");
          // const msg7 = this.translateConfigService.getTranslatedMessage("SUBMIT");
          // const msg8 = this.translateConfigService.getTranslatedMessage("Email: example@abc.com");
          // const msg9 = this.translateConfigService.getTranslatedMessage("Incomplete. Try Again.");
        } else {
          console.log("loggin you in");
          flag = 0;
          this.otpmode = 0;
          this.signup = 0;
          this.loginProcedure();
        }
      })
      .catch(error => {
        console.log(error);
      });

    // if (flag == 1) {

    // this.alertCtrl
    //   .create({
    //     //@ts-ignore
    //     title: msg.value,
    //     //enableBackdropDismiss: false, // <- Here! :)
    //     //@ts-ignore
    //     message: msg1.value,
    //     inputs: [
    //       //@ts-ignore
    //       { name: "UserName", placeholder: msg2.value },
    //       //@ts-ignore
    //       { name: "PhoneNumber", placeholder: msg3.value, value: "+" + this.country_code + this.phone },
    //       //@ts-ignore
    //       { name: "BusinessName", placeholder: msg4.value },
    //       //@ts-ignore
    //       { name: "BusinessType", placeholder: msg5.value },
    //       //@ts-ignore
    //       { name: "Email", placeholder: msg8.value },
    //     ],
    //     buttons: [
    //       {
    //         // @ts-ignore
    //         text: msg6.value,
    //         handler: data => {
    //           console.log("Cancel clicked");
    //         },
    //       },
    //       {
    //         //@ts-ignore
    //         text: msg7.value,
    //         handler: data => {
    //           if (
    //             data.UserName == null ||
    //             data.UserName == "" ||
    //             data.UserName == undefined ||
    //             data.BusinessName == null ||
    //             data.BusinessName == "" ||
    //             data.BusinessName == undefined ||
    //             data.BusinessType == null ||
    //             data.BusinessType == "" ||
    //             data.BusinessType == undefined ||
    //             data.Email == null ||
    //             data.Email == "" ||
    //             data.Email == undefined
    //           ) {
    //             this.toastCtrl
    //               .create({
    //                 //@ts-ignore
    //                 message: msg9.value,
    //                 duration: 5000,
    //               })
    //               .present();
    //           } else {
    //             this.newaccOwnName = data.UserName;
    //             this.newaccBName = data.BusinessName;
    //             this.newaccBType = data.BusinessType;
    //             this.newaccemail = data.Email;
    //             this.createAccount();
    //           }
    //         },
    //       },
    //     ],
    //   })
    //   .present();
    // } else {
    //   console.log("flag!=1");

    // }
  }

  submitSignUp() {
    //if all are filled
    //this.newaccetcetc then this.createAccount();
  }
  otpnum: any;

  backToLogin() {
    this.otpmode = 0;
    this.signup = 0;
  }

  async otpFn() {
    const confirmationResult = this.confirmres;
    let flag = 0;
    await confirmationResult
      .confirm(this.otpnum)
      .then(async result => {
        // User signed in successfully.
        console.log(result.user);
        flag = 1;
        // ...
      })
      .catch(error => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
        this.toastCtrl
          .create({
            message: error,
            duration: 2000,
          })
          .present();
        const a = this.alertCtrl.create({
          title: "Incorrect OTP",
          subTitle: "OTP entered is incorrect. Request new OTP or retry",
          buttons: [
            {
              text: "Retry",
              role: "cancel",
              handler: () => {
                this.otpnum = "";
              },
            },
            {
              text: "New OTP",
              handler: () => {
                this.otpmode = 0;
                this.otpnum = "";
              },
            },
          ],
        });
        a.present();
      })
      .finally(() => {
        if (flag == 1) {
          this.checkifexist();
        }
      });
  }

  confirmres: any;
  async signInPhone() {
    if (this.phone == null || this.country_code == null) {
      console.log("hi");
      const msg = this.translateConfigService.getTranslatedMessage("No Phone Number Entered");
      const msg1 = this.translateConfigService.getTranslatedMessage("CANCEL");

      this.alertCtrl
        .create({
          // @ts-ignore
          message: msg.value,
          buttons: [
            {
              //@ts-ignore
              text: msg1.value,
              role: "cancel",
            },
          ],
        })
        .present();
    } else {
      this.toastCtrl
        .create({
          //@ts-ignore
          message: this.translateConfigService.getTranslatedMessage("Please Wait...").value,
          duration: 2000,
        })
        .present();

      const phoneNumber = "+" + this.country_code + this.phone;
      const appVerifier = this.applicationVerifier;

      const flag = 0;
      await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmationResult => {
          this.otpmode = 1;
          this.confirmres = confirmationResult;
          this.timer = 30;
          this.startTimer();
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).

          const msg = this.translateConfigService.getTranslatedMessage("Enter the Confirmation code");
          const msg1 = this.translateConfigService.getTranslatedMessage("A 6 Digit Code");
          const msg2 = this.translateConfigService.getTranslatedMessage("SEND");
          const msg3 = this.translateConfigService.getTranslatedMessage("CANCEL");

          // const prompt = this.alertCtrl.create({
          //   //@ts-ignore
          //   title: msg.value,
          //   message:
          //     //@ts-ignore
          //     msg1.value,
          //   inputs: [{ name: "confirmationCode", placeholder: "Confirmation Code" }],
          //   buttons: [
          //     {
          //       //@ts-ignore
          //       text: msg3.value,
          //       handler: data => {
          //         console.log("Cancel clicked");
          //       },
          //     },
          //     {
          //       //@ts-ignore
          //       text: msg2.value,
          //       handler: async data => {
          //         await confirmationResult
          //           .confirm(data.confirmationCode)
          //           .then(async result => {
          //             // User signed in successfully.
          //             console.log(result.user);
          //             flag = 1;
          //             // ...
          //           })
          //           .catch(error => {
          //             // User couldn't sign in (bad verification code?)
          //             // ...
          //             console.log(error);
          //             this.toastCtrl
          //               .create({
          //                 message: error,
          //                 duration: 2000,
          //               })
          //               .present();
          //           })
          //           .finally(() => {
          //             if (flag == 1) {
          //               this.checkifexist();
          //             }
          //           });
          //       },
          //     },
          //   ],
          // });
          // prompt.present();
          console.log(confirmationResult);
        })
        .catch(error => {
          // Error; SMS not sent
          // ...
          this.alertCtrl
            .create({
              message: "SMS not sent: " + error,
            })
            .present();
          console.log("SMS Not Sent: " + error);
        });

      // if(flag==1){
      //   console.log("yeahh")
      //   this.createAccount();
      // }
    }
  }
}
