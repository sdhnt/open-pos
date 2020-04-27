import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import {
  ToastController,
  AlertController,
  LoadingController,
  MenuController,
  NavController
} from '@ionic/angular';
import * as firebase from 'firebase';
import { StorageProvider } from '../services/storage/storage';

import { TranslateConfigService } from '../services/translation/translate-config.service';
import { Facebook } from '@ionic-native/facebook/ngx';
import { createAccountDocument } from '../../utilities/createAccountDocument';
import { config } from '../../utilities/initializeFirebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare const SMSReceive: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  selectedLanguage: string;

  listOfLang: string[] = [];
  countryCode: any;
  fb = false;
  dis = 0;

  contactphone = 'loading...';

  timer = 30;

  language;

  applicationVerifier;

  phone;
  countryCodeMainUser = '+95';
  newaccOwnName;
  newaccBName;
  newaccBArea;
  roleSelect;
  mainUserMobile;
  newaccemail; //
  newaccBType;
  usersList = [];
  signup = 0;
  otpmode = 0;
  lang = 1;
  otpnum: any;

  timer2 = 0;

  ngOtpConfig = {
    length: 6,
    allowNumbersOnly: true
  };

  confirmres: any;
  mainUserMobileInput = false;
  mainUserUniqueId: void;
  currentUser: any;
  constructor(
    public zone: NgZone,
    public toastCtrl: ToastController,
    private navCtrl: NavController,
    public sp: StorageProvider,
    public alertCtrl: AlertController,
    private translateConfigService: TranslateConfigService,
    private loadingCtrl: LoadingController,
    private facebook: Facebook,
    private firebaseAuth: FirebaseAuthentication,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    // this.firebaseAuth.onAuthStateChanged().subscribe(user => {

    //   if (user) {
    //     console.log(user)

    //     console.log("success")
    //     // OTP verifired. Do success operation
    //   }
    //   else {
    //     console.log("state not changed")
    //     // wrong otp
    //   }
    // })

    // this.loadDropDowns();
    // this.getInfo();
    this.countryCode = '95';
    this.dis = 0;
    // firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(async user => {
      const loading = await this.loadingCtrl.create({
        message: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`,
      });
      console.log(user);
      if (user) {
        console.log(user);
        loading.present();

        await firebase
          .firestore()
          .collection('users')
          .where('owner', '==', firebase.auth().currentUser.uid)
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              // console.log("Not permitted - this account has not filled their data (Fb Login) or no internet");
              // navCtrl.setRoot(UserProfilePage, {
              //   uid: firebase.auth().currentUser.uid,
              //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              // });
              console.log('No Internet or New Account Required');
              // console.log(firebase.auth().currentUser.uid);
              // MOVE SIGN UP OPTIONS RIGHT HERE AND CREATE A DOCUMENT
              // zone.run(() => {
              // console.log("firing from constructor");
              loading.dismiss();
              // navCtrl.setRoot(TransactionHomePage);
              // });

              // const msg = this.translateConfigService.getTranslatedMessage("Internet Unavailable");

              // this.toastCtrl
              //   .create({

              //     message: msg.value,
              //     duration: 2000,
              //   })
              //   .present();
            } else {
              console.log(firebase.auth().currentUser);
              this.sp.setMem().then(() => {
                zone.run(() => {
                  console.log('firing from constructor');
                  loading.dismiss();
                  router.navigate(['/home/income-transaction']);
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
        console.log('no-user is previously signed in');
      }
    });

    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  onOtpChange(event) {
    console.log(typeof event);
    this.otpnum = event;
    console.log(this.otpnum);
  }

  async ionViewWillEnter() {
    await firebase.firestore().collection('users').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.usersList.push(doc.data());
        });
      });
  }
  async ngOnInit() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.swipeGesture(false);
    this.signup = 0;
  }


  // signIn() {
  //   // add a local variable to store navCtrl object
  //   const thatNavCtrl = this.navCtrl;
  //   //Step 1 — Pass the mobile number for verification
  //   const tell = "+" + this.countryCode + this.phone;

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

  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }

  goBack() {
    console.log(this.lang,
      this.signup,
      this.otpmode);
    if (this.lang === 0 && this.otpmode === 0 && this.signup === 0) {
      this.lang = 1;
      this.signup = 0;
      this.otpmode = 0;
    } else if (this.signup === 1) {
      this.lang = 0;
      this.signup = 0;
      this.otpmode = 1;
    } else if (this.otpmode === 1) {
      this.lang = 0;
      this.signup = 1;
      this.otpmode = 0;
      this.timer2 = 0;
    }
  }

  getInfo() {
    const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('Helpline');

    firebase
      .firestore()
      .collection('contact-us')
      .get()
      .then(async doc => {
        this.contactphone = doc.docs[0].data().phone;
        const abc = await this.alertCtrl
          .create({
            header: this.subscriber(msg),
            subHeader: this.contactphone,
          });
        abc.present();
      });
  }
  startTimer() {
    this.zone.run(() => {
      const interval = setInterval(() => {
        this.timer--;
        if (this.timer === 0) { clearInterval(interval); }
      }, 1000);
    });
  }

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
  async ionViewDidLoad() {

  }

  async ionViewDidEnter() {
    firebase.auth().useDeviceLanguage();
    // this.firebaseAuth.onAuthStateChanged().subscribe((user: firebase.User) => {
    //   console.log(user);
    //   if (user) {
    //     this.lang = 0;
    //     this.signup = 1;
    //     this.checkifexist(user);
    //   }
    // }, err => {
    //   console.log(err);
    // });
    // this.applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    //   size: 'invisible',
    //   callback: response => {
    //     // reCAPTCHA solved, allow signInWithPhoneNumber.
    //     // this.signInPhone();
    //   },
    // });
  }

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

  async loginAction() {
    const message: Observable<any> = this.translateConfigService.getTranslatedMessage('This feature will open shortly');
    const toast = await this.toastCtrl
      .create({
        message: this.subscriber(message),
        duration: 2000,
      });
    toast.present();
  }

  // gotoSignUp() {
  //   this.navCtrl.push(SignUpPage);
  // }

  loginProcedure() {
    this.zone.run(() => {
      console.log('firing from login proc');
      // this.sp.clearMem();

      this.sp.setMem().then(() => {
        this.navCtrl.navigateRoot(['/home/income-transaction']);
        // this.router.navigate(['/home/income-transaction']);
      });
    });
  }

  languageChanged() {
    console.log(`selected language: ${this.selectedLanguage}`);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  async createAccount() {
    if (this.newaccBArea && this.newaccBName && this.newaccOwnName && this.newaccBType && this.phone) {
      this.toastCtrl.create({
        message: 'Please wait while account is created. This may take a few minutes',
        duration: 3000,
      });
      this.dis = 1;

      if (this.roleSelect === 'sub') {
        console.log('SUB USER HERE');
        console.log('MAIN USER MOBILE', this.countryCodeMainUser + this.mainUserMobile);
        this.findMainUserId().then(async (result: any) => {
          if (result) {
            console.log('GOT THE MAIN USER ID ============', result);
            try {
              const user = {
                owner: this.currentUser.uid,
                owner_name: this.newaccOwnName,
                business_name: this.newaccBName,
                businesstype: this.newaccBType,
                business_address: this.newaccBArea,
                isSubUser: true,
                mainUser: result,
                email: this.newaccemail ? this.newaccemail : 'sample@sample.com',
                ph_no: `+${this.countryCode}${this.phone}`,
                language: this.translateConfigService.getCurrentLanguage(),
              };
              if (!user.owner) { throw new Error('firebase authentication uid missing'); }
              await createAccountDocument(user);

              const title: Observable<any> = this.translateConfigService.getTranslatedMessage('Account Created');
              const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Your account has been created successfully');
              const aletr = await this.alertCtrl
                .create({
                  header: this.subscriber(title),
                  message: this.subscriber(message),
                  buttons: [
                    {
                      text: 'OK',
                      handler: () => {
                        this.sp.setMem({ force: true }).then(() => {
                          this.navCtrl.navigateForward(['/add-product-signup']);
                          // this.router.navigate(['/add-product-signup']);
                        });
                      },
                    },
                  ],
                });
              aletr.present();
            } catch (error) {
              console.log(error);
            }
          } else {
            this.dis = 0;
          }
        });
      } else {
        try {
          const user = {
            owner: firebase.auth().currentUser.uid,
            owner_name: this.newaccOwnName,
            business_name: this.newaccBName,
            businesstype: this.newaccBType,
            business_address: this.newaccBArea,
            email: this.newaccemail ? this.newaccemail : 'sample@sample.com',
            ph_no: `+${this.countryCode}${this.phone}`,
            language: this.translateConfigService.getCurrentLanguage(),
          };
          if (!user.owner) { throw new Error('firebase authentication uid missing'); }
          await createAccountDocument(user);

          const title: Observable<any> = this.translateConfigService.getTranslatedMessage('Account Created');
          const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Your account has been created successfully');
          const aletr = await this.alertCtrl
            .create({
              header: this.subscriber(title),
              message: this.subscriber(message),
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.sp.setMem({ force: true }).then(() => {
                      this.router.navigate(['/add-product-signup']);
                    });
                  },
                },
              ],
            });
          aletr.present();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      const toast = await this.toastCtrl
        .create({
          message: 'Incomplete',
          duration: 3000,
        });
      toast.present();
    }
  }

  async findMainUserId() {
    return new Promise((resolve, reject) => {
      console.log('this.newaccOwnName', this.newaccOwnName, this.countryCodeMainUser + this.mainUserMobile, typeof this.countryCodeMainUser, typeof this.mainUserMobile);
      const findMainUser = firebase.firestore().collection('users').where('ph_no', '==', this.countryCodeMainUser + this.mainUserMobile);
      findMainUser.get().then(async (querySnapshot) => {
        console.log('querySnapshot.size()', querySnapshot);
        if (querySnapshot.size === 0) {
          const toast = await this.toastCtrl.create({ message: 'No main user found', duration: 3000 });
          toast.present();
          this.dis = 0;
        } else {
          querySnapshot.forEach((doc) => {
            console.log('MAIN USERRR======================', doc.data().owner);
            resolve(doc.data());
          });
        }
      });
    });
  }
  selectLang(lang: string) {
    this.lang = 0;
    this.selectedLanguage = lang;
    this.translateConfigService.setLanguage(lang);
  }

  backToLang() {
    this.lang = 1;
    this.selectedLanguage = 'en';
  }

  async checkifexist(user?) {
    let flag = 0;
    const currentUser: any = user ? user : firebase.auth().currentUser;
    return await firebase
      .firestore()
      .collection('users')
      .where('owner', '==', currentUser.uid)
      .get()
      .then(async querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('Bun');
          this.currentUser = currentUser;
          // await firebase.auth().updateCurrentUser(this.currentUser);
          // this.phone = this.currentUser.phoneNumber;
          flag = 1;
          this.otpmode = 0;
          this.signup = 1;
          return false;
        } else {
          console.log('loggin you in');
          flag = 0;
          this.otpmode = 0;
          this.signup = 0;
          this.loginProcedure();
          return true;
        }
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }

  submitSignUp() {
    // if all are filled
    // this.newaccetcetc then this.createAccount();
  }

  backToLogin() {
    this.otpmode = 0;
    this.signup = 0;
  }
  startTimer2() {
    this.zone.run(() => {
      this.timer2 = 5;
      const interval = setInterval(() => {
        this.timer2--;
        if (this.timer2 === 0) { clearInterval(interval); }
      }, 1000);
    });
  }

  async otpFn() {
    this.startTimer2();
    // try {
    //   SMSReceive.stopWatch(
    //     () => { console.log('watch stopped'); },
    //     () => { console.log('watch stop failed'); },
    //   );
    // } catch (e) {
    //   console.log('Error with SMSReceive Stop:');
    //   console.log(e);
    // }
    const confirmationResult = this.confirmres;
    console.log('otp**********', this.otpnum);
    console.log('confirmationResult**********', confirmationResult);
    const flag = 0;
    const signCredential = await firebase.auth.PhoneAuthProvider.credential(confirmationResult, this.otpnum);
    console.log('signCredential', signCredential);
    // this.firebaseAuth.signInWithVerificationId(confirmationResult, this.otpnum).then(user => {
    //   if (user) {
    //     console.log('user', user);
    //   } else {
    //     console.log('no user');
    //   }
    // });
    firebase.auth().signInWithCredential(signCredential).then(async (info) => {
      console.log('USER INFO', info);
      this.checkifexist();
    }).catch(async (error) => {
      const toast = await this.toastCtrl
        .create({
          message: error,
          duration: 2000,
        });
      toast.present();
      const a = await this.alertCtrl.create({
        header: 'Incorrect OTP',
        subHeader: 'OTP entered is incorrect. Request new OTP or retry',
        buttons: [
          {
            text: 'Retry',
            role: 'cancel',
            handler: () => {
              this.otpnum = '';
            },
          },
          {
            text: 'New OTP',
            handler: () => {
              this.otpmode = 0;
              this.otpnum = '';
            },
          },
        ],
      });
      a.present();
      console.log('USER INFO ERR', error);
    });
    // await this.firebaseAuth.signInWithVerificationId(confirmationResult,this.otpnum).then((res: any) => {
    //   if(res == 'OK'){
    //     this.checkifexist();
    //     console.log(res);
    //   }
    // })



    // await confirmationResult
    // .confirm(this.otpnum)
    // .then(async result => {
    //     // User signed in successfully.
    //     console.log(result.user);
    //     flag = 1;
    //     // ...
    //   })
    //   .catch(async (error) => {
    //     // User couldn't sign in (bad verification code?)
    //     // ...
    //     console.log(error);
    //     const toast = await this.toastCtrl
    //       .create({
    //         message: error,
    //         duration: 2000,
    //       });
    //     toast.present();
    //     const a = await this.alertCtrl.create({
    //       header: 'Incorrect OTP',
    //       subHeader: 'OTP entered is incorrect. Request new OTP or retry',
    //       buttons: [
    //         {
    //           text: 'Retry',
    //           role: 'cancel',
    //           handler: () => {
    //             this.otpnum = '';
    //           },
    //         },
    //         {
    //           text: 'New OTP',
    //           handler: () => {
    //             this.otpmode = 0;
    //             this.otpnum = '';
    //           },
    //         },
    //       ],
    //     });
    //     a.present();
    //   })
    //   .finally(() => {
    //     if (flag === 1) {
    //       const temp = this.checkifexist();
    //     }
    //   });
  }
  async signInPhone() {
    if (this.phone == null || this.countryCode == null) {
      console.log('hi');
      const msg: Observable<any> = this.translateConfigService.getTranslatedMessage('No Phone Number Entered');
      const msg1: Observable<any> = this.translateConfigService.getTranslatedMessage('CANCEL');

      const a = await this.alertCtrl
        .create({
          message: this.subscriber(msg),
          buttons: [
            {
              text: this.subscriber(msg1),
              role: 'cancel',
            },
          ],
        });
      a.present();
    } else {
      const message: Observable<any> = this.translateConfigService.getTranslatedMessage('Please Wait...');
      const toast = await this.toastCtrl
        .create({
          message: this.subscriber(message),
          duration: 2000,
        });
      toast.present();

      const phoneNumber = '+' + this.countryCode + this.phone;
      const appVerifier = this.applicationVerifier;

      const flag = 0;
      console.log('phone number', phoneNumber);
      // try {
      //   SMSReceive.startWatch(() => {
      //     console.log('watch started');
      //     document.addEventListener('onSMSArrive', (e: any) => {
      //       const incomingSMS = e.data;
      //       // tslint:disable-next-line: no-shadowed-variable
      //       const message: string = incomingSMS.body;
      //       if (message) {
      //         for (let i = 0; i < 6; i++) {
      //           if (!(message[i] <= '9' && message[i] >= '0')) {
      //             return;
      //           }
      //         }
      //         this.otpnum = message.slice(0, 6);
      //         // this.otpInput.setValue(this.otpnum);
      //         this.otpFn();
      //       }
      //     });
      //   },
      //     () => { console.log('watch start failed'); }
      //   );
      // } catch (e) {
      //   console.log('Error with SMSReceive Start');
      //   alert('line 749' + e);
      // }
      this.firebaseAuth.verifyPhoneNumber(phoneNumber, 0).then(async (verificationId) => {
        console.log(verificationId);
        this.confirmres = verificationId;
        this.otpmode = 1;
        this.timer = 30;
        this.startTimer();
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

        const msg = this.translateConfigService.getTranslatedMessage('Enter the Confirmation code');
        const msg1 = this.translateConfigService.getTranslatedMessage('A 6 Digit Code');
        const msg2 = this.translateConfigService.getTranslatedMessage('SEND');
        const msg3 = this.translateConfigService.getTranslatedMessage('CANCEL');
      }).catch(e => console.log(e));
      console.log('appVerifier', appVerifier);
      // await firebase
      //   .auth()
      //   .signInWithPhoneNumber(phoneNumber, appVerifier)
      //   .then(confirmationResult => {
      //     this.otpmode = 1;
      //     this.confirmres = confirmationResult;
      //     this.timer = 30;
      //     this.startTimer();
      //     // SMS sent. Prompt user to type the code from the message, then sign the
      //     // user in with confirmationResult.confirm(code).

      //     const msg = this.translateConfigService.getTranslatedMessage('Enter the Confirmation code');
      //     const msg1 = this.translateConfigService.getTranslatedMessage('A 6 Digit Code');
      //     const msg2 = this.translateConfigService.getTranslatedMessage('SEND');
      //     const msg3 = this.translateConfigService.getTranslatedMessage('CANCEL');

      //     console.log('confirmationResult',confirmationResult);
      //   })
      //   .catch(async (error) => {
      //     // Error; SMS not sent
      //     // ...
      //     const alert = await this.alertCtrl
      //       .create({
      //         message: 'SMS not sent: ' + error,
      //       });
      //     alert.present();
      //     console.log('SMS Not Sent: ' + error);
      //   });

      // if(flag==1){
      //   console.log("yeahh")
      //   this.createAccount();
      // }
    }
  }

  async fbLogin() {
    this.facebook
      .login(['email', 'public_profile'])
      .then(loginResponse => {
        const credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(async info => {
            console.log(info);
            // alert(JSON.stringify(info));
            const accountExist = await this.checkifexist();
            if (!accountExist) {
              console.log('inside new acc');
              this.facebook.api('me?fields=id,name,email', []).then(profile => {
                console.log(profile);
                this.newaccOwnName = profile.name;
                this.newaccemail = profile.email;
                this.zone.run(() => {
                  this.fb = true;
                  console.log('FB IS TRUE');
                });
              });
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  roleSelection(e) {
    console.log(this.roleSelect);
    console.log(e.target.value);
    if (e.target.value === 'root') {
      this.mainUserMobileInput = false;
    } else {
      this.mainUserMobileInput = true;
    }
  }
}
