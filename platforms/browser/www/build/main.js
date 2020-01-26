webpackJsonp([20],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettersetterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GettersetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GettersetterProvider = /** @class */ (function () {
    function GettersetterProvider() {
        this.total = 0;
        this.count = 0;
        this.vat = 0;
    }
    GettersetterProvider.prototype.getTotal = function () {
        return this.total;
    };
    GettersetterProvider.prototype.setTotal = function (total) {
        this.total = total;
    };
    GettersetterProvider.prototype.getCount = function () {
        return this.count;
    };
    GettersetterProvider.prototype.setCount = function (count) {
        this.count = count;
    };
    GettersetterProvider.prototype.getVat = function () {
        return this.vat;
    };
    GettersetterProvider.prototype.setVat = function (vat) {
        this.vat = vat;
    };
    GettersetterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GettersetterProvider);
    return GettersetterProvider;
}());

//# sourceMappingURL=gettersetter.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_bluetooth_serial__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrinterProvider = /** @class */ (function () {
    function PrinterProvider(bluetoothSerial) {
        this.bluetoothSerial = bluetoothSerial;
    }
    PrinterProvider.prototype.enableBluetooth = function () {
        return this.bluetoothSerial.enable();
    };
    PrinterProvider.prototype.searchBluetooth = function () {
        return this.bluetoothSerial.list();
    };
    PrinterProvider.prototype.connectBluetooth = function (address) {
        return this.bluetoothSerial.connect(address);
    };
    PrinterProvider.prototype.printData = function (data) {
        return this.bluetoothSerial.write(data);
    };
    PrinterProvider.prototype.disconnectBluetooth = function () {
        return this.bluetoothSerial.disconnect();
    };
    PrinterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], PrinterProvider);
    return PrinterProvider;
}());

//# sourceMappingURL=printer.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, zone, navParams, toastCtrl, sp, alertCtrl, translateConfigService, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.alertCtrl = alertCtrl;
        this.translateConfigService = translateConfigService;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.email = "";
        this.password = "";
        this.listOfLang = [];
        this.datet = new Date();
        this.loadDropDowns();
        this.getInfo();
        this.country_code = "95";
        var loading = this.loadingCtrl.create({
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>",
        });
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!user) return [3 /*break*/, 2];
                            //console.log(user);
                            loading.present();
                            return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                    .firestore()
                                    .collection("users")
                                    .where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                                    .get()
                                    .then(function (querySnapshot) {
                                    if (querySnapshot.size == 0) {
                                        // console.log("Not permitted - this account has not filled their data (Fb Login) or no internet");
                                        // navCtrl.setRoot(UserProfilePage, {
                                        //   uid: firebase.auth().currentUser.uid,
                                        //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                        //});
                                        console.log("No Internet");
                                        // console.log(firebase.auth().currentUser.uid);
                                        //MOVE SIGN UP OPTIONS RIGHT HERE AND CREATE A DOCUMENT
                                        //zone.run(() => {
                                        //console.log("firing from constructor");
                                        loading.dismiss();
                                        //navCtrl.setRoot(TransactionHomePage);
                                        //});
                                        var msg = this.translateConfigService.getTranslatedMessage("Internet Unavailable");
                                        this.toastCtrl
                                            .create({
                                            // @ts-ignore
                                            message: msg.value,
                                            duration: 2000,
                                        })
                                            .present();
                                    }
                                    else {
                                        sp.setMem().then(function () {
                                            zone.run(function () {
                                                console.log("firing from constructor");
                                                loading.dismiss();
                                                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
                                            });
                                        });
                                    }
                                })
                                    .catch(function (error) {
                                    // this.toastCtrl.create({
                                    //   message: error,
                                    //   duration: 2000,
                                    // });
                                })];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            // No user is signed in.
                            console.log("no-user is previously signed in");
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        });
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    LoginPage.prototype.getInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .firestore()
            .collection("contact-us")
            .get()
            .then(function (doc) {
            _this.contactphone = doc.docs[0].data().phone;
        });
    };
    LoginPage.prototype.loadDropDowns = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .firestore()
            .collection("sign-up")
            .get()
            .then(function (doc) {
            doc.docs[0].data().language.forEach(function (l) {
                _this.listOfLang.push(l);
                //console.log(this.listOfLang);
            });
        })
            .catch(function (error) {
            _this.toastCtrl.create({
                message: error,
                duration: 2000,
            });
        });
    };
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
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().useDeviceLanguage();
        this.applicationVerifier = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.RecaptchaVerifier("recaptcha-container", {
            size: "invisible",
            callback: function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.signInPhone();
            },
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .auth()
            .setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.Auth.Persistence.LOCAL)
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                .auth()
                .signInWithEmailAndPassword(_this.email, _this.password)
                .then(function (user) {
                _this.loginProcedure();
            })
                .catch(function (err) {
                console.log(err);
                _this.toastCtrl
                    .create({
                    message: err.message,
                    duration: 3000,
                })
                    .present();
            });
        });
        //console.log(user)
    };
    LoginPage.prototype.loginAction = function () {
        var message = this.translateConfigService.getTranslatedMessage("This feature will open shortly");
        this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        })
            .present();
    };
    LoginPage.prototype.gotoSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.loginProcedure = function () {
        var _this = this;
        this.zone.run(function () {
            console.log("firing from login proc");
            // this.sp.clearMem();
            _this.sp.setMem().then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
            });
        });
    };
    LoginPage.prototype.languageChanged = function () {
        console.log("selected language: " + this.selectedLanguage);
        this.translateConfigService.setLanguage(this.selectedLanguage);
    };
    LoginPage.prototype.signIn = function () {
        // add a local variable to store navCtrl object
        var thatNavCtrl = this.navCtrl;
        //Step 1 — Pass the mobile number for verification
        var tell = "+" + this.country_code + this.phone;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .auth()
            .signInWithPhoneNumber(tell, this.applicationVerifier)
            .then(function (confirmationResult) {
            var verificationCode = window.prompt("Please enter the verification code that was sent to your mobile device.");
            return confirmationResult.confirm(verificationCode);
        })
            .catch(function (error) {
            // Handle Errors here.
        });
    };
    LoginPage.prototype.createAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                            .firestore()
                            .collection("users")
                            .add({
                            created: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp(),
                            owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                            owner_name: this.newaccOwnName,
                            business_name: this.newaccBName,
                            businesstype: this.newaccBType,
                            business_address: "Sample Address",
                            email: this.newaccemail,
                            ph_no: "+" + this.country_code + this.phone,
                            language: this.translateConfigService.getCurrentLanguage(),
                            currency: "USD",
                            cash_balance: 0,
                            discount: 0,
                            taxrate: 0,
                            categories: [{ name: "Example" }],
                            products: [
                                {
                                    cat: "Example",
                                    code: "0000",
                                    cost: " 0",
                                    name: "Example Product",
                                    price: "0",
                                    stock_qty: "0",
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
                            .then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                            var title, message;
                            var _this = this;
                            return __generator(this, function (_a) {
                                console.log(doc);
                                title = this.translateConfigService.getTranslatedMessage("Account Created");
                                message = this.translateConfigService.getTranslatedMessage("Your account has been created successfully");
                                this.alertCtrl
                                    .create({
                                    // @ts-ignore
                                    title: title.value,
                                    // @ts-ignore
                                    message: message.value,
                                    buttons: [
                                        {
                                            text: "OK",
                                            handler: function () {
                                                //this.sp.clearMem();
                                                _this.sp.setMem();
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */], { data: "newUser" }); //navigate to feeds page
                                                _this.events.publish("newUser");
                                            },
                                        },
                                    ],
                                })
                                    .present();
                                return [2 /*return*/];
                            });
                        }); })
                            .catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        console.log("Done");
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.checkifexist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var flag, msg, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flag = 0;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                .firestore()
                                .collection("users")
                                .where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                                .get()
                                .then(function (querySnapshot) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (querySnapshot.size == 0) {
                                            console.log("Bun");
                                            flag = 1;
                                        }
                                        else {
                                            console.log("loggin you in");
                                            flag = 0;
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                            })];
                    case 1:
                        _a.sent();
                        if (flag == 1) {
                            msg = this.translateConfigService.getTranslatedMessage("Sign Up");
                            msg1 = this.translateConfigService.getTranslatedMessage("Please enter your details to create an account");
                            msg2 = this.translateConfigService.getTranslatedMessage("Your Name");
                            msg3 = this.translateConfigService.getTranslatedMessage("Phone Number");
                            msg4 = this.translateConfigService.getTranslatedMessage("Business Name");
                            msg5 = this.translateConfigService.getTranslatedMessage("Business Type");
                            msg6 = this.translateConfigService.getTranslatedMessage("CANCEL");
                            msg7 = this.translateConfigService.getTranslatedMessage("SUBMIT");
                            msg8 = this.translateConfigService.getTranslatedMessage("Email: example@abc.com");
                            msg9_1 = this.translateConfigService.getTranslatedMessage("Incomplete. Try Again.");
                            this.alertCtrl
                                .create({
                                //@ts-ignore
                                title: msg.value,
                                //enableBackdropDismiss: false, // <- Here! :)
                                //@ts-ignore
                                message: msg1.value,
                                inputs: [
                                    //@ts-ignore
                                    { name: "UserName", placeholder: msg2.value },
                                    //@ts-ignore
                                    { name: "PhoneNumber", placeholder: msg3.value, value: "+" + this.country_code + this.phone },
                                    //@ts-ignore
                                    { name: "BusinessName", placeholder: msg4.value },
                                    //@ts-ignore
                                    { name: "BusinessType", placeholder: msg5.value },
                                    //@ts-ignore
                                    { name: "Email", placeholder: msg8.value },
                                ],
                                buttons: [
                                    {
                                        // @ts-ignore
                                        text: msg6.value,
                                        handler: function (data) {
                                            console.log("Cancel clicked");
                                        },
                                    },
                                    {
                                        //@ts-ignore
                                        text: msg7.value,
                                        handler: function (data) {
                                            if (data.UserName == null ||
                                                data.UserName == "" ||
                                                data.UserName == undefined ||
                                                data.BusinessName == null ||
                                                data.BusinessName == "" ||
                                                data.BusinessName == undefined ||
                                                data.BusinessType == null ||
                                                data.BusinessType == "" ||
                                                data.BusinessType == undefined ||
                                                data.Email == null ||
                                                data.Email == "" ||
                                                data.Email == undefined) {
                                                _this.toastCtrl
                                                    .create({
                                                    //@ts-ignore
                                                    message: msg9_1.value,
                                                    duration: 5000,
                                                })
                                                    .present();
                                            }
                                            else {
                                                _this.newaccOwnName = data.UserName;
                                                _this.newaccBName = data.BusinessName;
                                                _this.newaccBType = data.BusinessType;
                                                _this.newaccemail = data.Email;
                                                _this.createAccount();
                                            }
                                        },
                                    },
                                ],
                            })
                                .present();
                        }
                        else {
                            console.log("flag!=1");
                            this.loginProcedure();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signInPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var msg, msg1, phoneNumber, appVerifier, flag_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.phone == null || this.country_code == null)) return [3 /*break*/, 1];
                        console.log("hi");
                        msg = this.translateConfigService.getTranslatedMessage("No Phone Number Entered");
                        msg1 = this.translateConfigService.getTranslatedMessage("CANCEL");
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
                        return [3 /*break*/, 3];
                    case 1:
                        phoneNumber = "+" + this.country_code + this.phone;
                        appVerifier = this.applicationVerifier;
                        flag_1 = 0;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                .auth()
                                .signInWithPhoneNumber(phoneNumber, appVerifier)
                                .then(function (confirmationResult) {
                                // SMS sent. Prompt user to type the code from the message, then sign the
                                // user in with confirmationResult.confirm(code).
                                var msg = _this.translateConfigService.getTranslatedMessage("Enter the Confirmation code");
                                var msg1 = _this.translateConfigService.getTranslatedMessage("A 6 Digit Code");
                                var msg2 = _this.translateConfigService.getTranslatedMessage("SEND");
                                var msg3 = _this.translateConfigService.getTranslatedMessage("CANCEL");
                                var prompt = _this.alertCtrl.create({
                                    //@ts-ignore
                                    title: msg.value,
                                    message: 
                                    //@ts-ignore
                                    msg1.value,
                                    inputs: [{ name: "confirmationCode", placeholder: "Confirmation Code" }],
                                    buttons: [
                                        {
                                            //@ts-ignore
                                            text: msg3.value,
                                            handler: function (data) {
                                                console.log("Cancel clicked");
                                            },
                                        },
                                        {
                                            //@ts-ignore
                                            text: msg2.value,
                                            handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, confirmationResult
                                                                .confirm(data.confirmationCode)
                                                                .then(function (result) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_a) {
                                                                        // User signed in successfully.
                                                                        console.log(result.user);
                                                                        flag_1 = 1;
                                                                        return [2 /*return*/];
                                                                    });
                                                                });
                                                            })
                                                                .catch(function (error) {
                                                                // User couldn't sign in (bad verification code?)
                                                                // ...
                                                                console.log(error);
                                                                this.toastCtrl
                                                                    .create({
                                                                    message: error,
                                                                    duration: 2000,
                                                                })
                                                                    .present();
                                                            })
                                                                .finally(function () {
                                                                if (flag_1 == 1) {
                                                                    _this.checkifexist();
                                                                }
                                                            })];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                        },
                                    ],
                                });
                                prompt.present();
                                console.log(confirmationResult);
                            })
                                .catch(function (error) {
                                // Error; SMS not sent
                                // ...
                                _this.toastCtrl
                                    .create({
                                    message: error,
                                    duration: 2000,
                                })
                                    .present();
                                console.log("SMS Not Sent: " + error);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-row>\n\n      <ion-col col-8>\n\n          <ion-select interface="popover" [(ngModel)]="selectedLanguage" (ionChange)="languageChanged()" style="min-width: 50%;">\n\n            <ion-option value="en">🇬🇧 English</ion-option>\n\n            <ion-option value="my">🇲🇲 ဗမာ</ion-option>\n\n            <ion-option value="fil">🇵🇭 wikang filipino</ion-option>\n\n            <ion-option value="hi">🇮🇳 हिंदी</ion-option>\n\n            </ion-select>\n\n      </ion-col>\n\n      <ion-col col-4></ion-col>\n\n  </ion-row>\n\n\n\n         \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n\n\n  \n\n  <!-- <countryflag country="mm"></countryflag>  -->\n\n  <!-- <span class="flag-icon flag-icon-gr flag-icon-squared"></span> -->\n\n\n\n  <button ion-button block clear color="light" class="nametop"><b>Open</b></button>\n\n\n\n  <button ion-button block clear color="light" style="margin-top: 10px;" >{{"Enter your Phone Number"|translate}}</button>\n\n\n\n<!-- \n\n  <ion-grid style="width: 75%;">\n\n    \n\n    <ion-row class="row-style">\n\n      \n\n      <ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n\n      <ion-input type="email" placeholder="{{ \'email\' | translate }}" [(ngModel)]="email"></ion-input>\n\n    </ion-row>\n\n    <ion-row class="row-style">\n\n      <ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n\n      <ion-input type="password" placeholder="{{ \'password\' | translate }}" [(ngModel)]="password" ></ion-input>\n\n    </ion-row>\n\n    <ion-row>\n\n      <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">{{"Sign in"|translate}}</button>\n\n    </ion-row>\n\n  \n\n  </ion-grid> \n\n\n\n\n\n  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="gotoSignUp()">{{"Don\'t have an account?"|translate}}</button>\n\n\n\n-->\n\n\n\n\n\n  <div id="PhoneLogin">\n\n  <div id="recaptcha-container"></div>\n\n\n\n  <ion-grid  style="width: 75%;">\n\n    <ion-row class="row-style">\n\n\n\n      <ion-select [(ngModel)]="country_code">\n\n        <ion-option value="95" selected>🇲🇲 +95 </ion-option>\n\n        <ion-option value="63">🇵🇭 +63 </ion-option>\n\n        <ion-option value="852">🇭🇰 +852 </ion-option>\n\n        <ion-option value="91">🇮🇳 +91 </ion-option>\n\n        \n\n      </ion-select>\n\n      <ion-input type=”text” placeholder="9964758505" [(ngModel)]="phone"></ion-input>\n\n      </ion-row>\n\n      <button ion-button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signInPhone()">{{"Login with Phone Number"|translate}}</button>\n\n      <ion-row padding></ion-row>\n\n      <!-- <div class="btn_container">\n\n        <button ion-button full (click)="loginWithFB();">{{"Login with Facebook"|translate}}</button>\n\n      </div> -->\n\n    \n\n      \n\n     \n\n  </ion-grid>\n\n  \n\n</div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding *ngIf="contactphone!=null">\n\n  {{"Helpline"|translate}}: {{contactphone}}\n\n</ion-footer>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__["a" /* TranslateConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__["a" /* TranslateConfigService */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" ? _j : Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_home_transaction_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, toastCtrl, sp, translateConfigService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.translateConfigService = translateConfigService;
        this.alertCtrl = alertCtrl;
        this.listOfBType = [];
        this.disabled = false;
        this.name = "";
        this.email = "";
        this.password = "";
        this.businessname = "";
        this.businessaddress = "";
        this.businesstype = "";
        this.phno = "";
        this.language = "";
        this.currency = "";
        this.datet = new Date();
        this.loadDropDowns();
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignUpPage");
        this.cb = 0;
        this.discount = 0;
        this.taxrate = 0;
        this.language = this.translateConfigService.getCurrentLanguage();
    };
    SignUpPage.prototype.loadDropDowns = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .firestore()
            .collection("sign-up")
            .get()
            .then(function (doc) {
            doc.docs[0].data().businessType.forEach(function (b) {
                _this.listOfBType.push(b);
            });
        });
    };
    SignUpPage.prototype.signup = function () {
        var _this = this;
        if (this.name == "" ||
            this.email == "" ||
            this.password == "" ||
            this.businessname == "" ||
            this.businesstype == "" ||
            this.phno == "") {
            var message = this.translateConfigService.getTranslatedMessage("Incomplete");
            this.toastCtrl
                .create({
                //@ts-ignore
                message: message.value,
                duration: 2000,
            })
                .present();
        }
        else {
            this.disabled = true;
            var message = this.translateConfigService.getTranslatedMessage("Please wait while creating your profile ...");
            this.toastCtrl
                .create({
                // @ts-ignore
                message: message.value,
                duration: 3000,
            })
                .present();
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(function (data) {
                var newUser = data.user;
                newUser
                    .updateProfile({
                    displayName: _this.name,
                })
                    .then(function (res) {
                    console.log("Profile Updated");
                    console.log(_this.datet);
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                        .firestore()
                        .collection("users")
                        .add({
                        // file_name: this.text,
                        created: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp(),
                        owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                        owner_name: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                        business_name: _this.businessname,
                        businesstype: _this.businesstype,
                        business_address: _this.businessaddress,
                        ph_no: _this.phno,
                        language: _this.translateConfigService.getCurrentLanguage(),
                        currency: _this.currency,
                        cash_balance: _this.cb,
                        discount: _this.discount,
                        taxrate: _this.taxrate,
                        categories: [{ name: "Example" }],
                        products: [
                            {
                                cat: "Example",
                                code: "0000",
                                cost: "0",
                                name: "Example Product",
                                price: "0",
                                stock_qty: "0",
                                url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
                                wholesale_price: "0",
                            },
                        ],
                        transactions: [
                            {
                                datetime: new Date(_this.datet).getTime(),
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
                        .then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                        var title, message;
                        var _this = this;
                        return __generator(this, function (_a) {
                            console.log(doc);
                            title = this.translateConfigService.getTranslatedMessage("Account Created");
                            message = this.translateConfigService.getTranslatedMessage("Your account has been created successfully");
                            this.alertCtrl
                                .create({
                                // @ts-ignore
                                title: title.value,
                                // @ts-ignore
                                message: message.value,
                                buttons: [
                                    {
                                        text: "OK",
                                        handler: function () {
                                            //this.sp.clearMem();
                                            _this.sp.setMem();
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__transaction_home_transaction_home__["a" /* TransactionHomePage */]); //navigate to feeds page
                                        },
                                    },
                                ],
                            })
                                .present();
                            return [2 /*return*/];
                        });
                    }); })
                        .catch(function (err) {
                        console.log(err);
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.toastCtrl
                        .create({
                        message: err.message,
                        duration: 3000,
                    })
                        .present();
                });
            })
                .catch(function (error) {
                _this.alertCtrl
                    .create({
                    message: error.message,
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                        },
                    ],
                })
                    .present();
            });
        }
    };
    SignUpPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-sign-up",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n		<ion-navbar transparent>\n\n		</ion-navbar>\n\n	  </ion-header>\n\n	  <ion-content padding>\n\n		  \n\n			  <button ion-button block clear color="light" class="nametop"><b>Open</b></button> \n\n	  \n\n	  <ion-grid style="width: 75%;">\n\n			<ion-row class="row-style1" justify-content-center align-items-center style="height: 100%">{{"Register a business"|translate}}</ion-row>\n\n			<ion-row class="row-style">\n\n				<ion-icon name="person" color="semi-light" class="icon"></ion-icon>\n\n				<ion-input type="text" placeholder="{{\'Name\'|translate}}" [(ngModel)]="name"></ion-input>\n\n			</ion-row>\n\n			<ion-row class="row-style">\n\n				<ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n\n				<ion-input type="email" placeholder="{{ \'email\' | translate }}" [(ngModel)]="email"> </ion-input>\n\n			</ion-row>\n\n			<ion-row class="row-style">\n\n				<ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n\n				<ion-input type="password" placeholder="{{\'password\'|translate}}"  [(ngModel)]="password"></ion-input>\n\n			</ion-row>\n\n			<ion-row class="row-style">\n\n				<ion-icon name="home" color="semi-light" class="icon"></ion-icon>\n\n				<ion-input type="text" placeholder="{{\'Business Name\'|translate}} "  [(ngModel)]="businessname"></ion-input>\n\n			</ion-row>\n\n			<ion-row class="row-style">\n\n				<ion-icon name="globe" color="semi-light" class="icon"></ion-icon>\n\n				<ion-label>{{"Business Type"|translate}}</ion-label>\n\n				<ion-select [(ngModel)]="businesstype">\n\n					<ion-option *ngFor="let b of listOfBType" value="{{ b }}">{{ b }}</ion-option>\n\n				</ion-select>\n\n			</ion-row>\n\n			<ion-row class="row-style">\n\n				<ion-icon name="call" color="semi-light" class="icon"></ion-icon>\n\n				<ion-input type="text" placeholder="{{\'Phone Number\'|translate}}"  [(ngModel)]="phno"></ion-input>\n\n			</ion-row>\n\n			<ion-row>\n\n				<button ion-button block round outline [disabled]="disabled" color="light" style="margin-top: 20px;" (click)="signup()">{{"Sign Up"|translate}}</button>\n\n			</ion-row>\n\n	  </ion-grid>\n\n	  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="goBack()">{{"Already have an account? Log-in"|translate}}</button>\n\n	  </ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddProductCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProductCategoryPage = /** @class */ (function () {
    function AddProductCategoryPage(navCtrl, translateConfigService, navParams, sp, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.newprodCat = "";
    }
    AddProductCategoryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddProductCategoryPage");
        this.getCategories();
    };
    AddProductCategoryPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and " + this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                //console.log("val = " + val);
                _this.listCat = JSON.parse(val);
                //console.log(this.listCat);
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    AddProductCategoryPage.prototype.addCategory = function () {
        var _this = this;
        //console.log(this.listCat + " and " + this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                name: this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage("Finish");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000,
                    });
                    _this.newprodCat = "";
                    _this.sp.backupStorage();
                    //this.navCtrl.push(ProductListPage);
                    //this.events.publish('prodAdd:created',0);
                    // (this.navCtrl.parent as Tabs).select(0);
                    toast.present();
                }, 1000);
            });
        }
    };
    AddProductCategoryPage.prototype.delCat = function (element) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.deleteCategory(element);
            _this.sp.backupStorage();
            setTimeout(function () {
                var message = _this.translateConfigService.getTranslatedMessage("Finish");
                var toast = _this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 3000,
                });
                _this.getCategories();
                //this.navCtrl.push(ProductListPage);
                //this.events.publish('prodAdd:created',0);
                // (this.navCtrl.parent as Tabs).select(0);
                toast.present();
            }, 1000);
        });
    };
    AddProductCategoryPage.prototype.goBack = function () {
        this.events.publish("productUpdate:created");
        this.navCtrl.pop();
    };
    AddProductCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-add-product-category",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\add-product-category\add-product-category.html"*/'<ion-content padding>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="goBack()">Done</button>\n\n  </ion-buttons>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Enter Category Here" [(ngModel)]=\'newprodCat\'></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button full color="dark" (click)="addCategory()"> {{\'Add Category\' | translate}}</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n  <ion-item>\n\n    <h2> <b>{{\'View/Delete Category\' | translate}} </b> </h2>\n\n  </ion-item>\n\n\n\n  <ion-list *ngFor="let element of listCat">\n\n\n\n    <ion-item>\n\n      {{element.name}}\n\n      <ion-icon item-end name="close-circle" (click)="delCat(element)" color="danger"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\add-product-category\add-product-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AddProductCategoryPage);
    return AddProductCategoryPage;
}());

//# sourceMappingURL=add-product-category.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummarySummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_home_summary_home__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summary_accounts_summary_accounts__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_graphs_summary_graphs__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SummarySummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummarySummaryPage = /** @class */ (function () {
    function SummarySummaryPage(navCtrl, navParams, events, alertCtrl, modal, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.app = app;
        //ViewList = ProductListPage;
        //AddProd = AddProductPage;
        this.SumChart = __WEBPACK_IMPORTED_MODULE_4__summary_graphs_summary_graphs__["a" /* SummaryGraphsPage */];
        this.SumAcc = __WEBPACK_IMPORTED_MODULE_3__summary_accounts_summary_accounts__["a" /* SummaryAccountsPage */];
        this.SumRec = __WEBPACK_IMPORTED_MODULE_2__summary_home_summary_home__["a" /* SummaryHomePage */];
        // this.events.subscribe("ViewRecs", (data)=> {
        //   (this.navCtrl.parent as Tabs).select(2);
        //   console.log("ViewRecs Event")
        // });
    }
    SummarySummaryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SummarySummaryPage");
        if (this.navParams.get("item") == "ViewRecs") {
            console.log("Yo000");
            //change tab
            this.tabRef.select(2);
            //this.app.getRootNav().getActiveChildNav().select(2)
        }
    };
    SummarySummaryPage.prototype.help = function () {
        var passedData = {
            //youtube link, required text
            page: "Business Summary Page",
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
    ], SummarySummaryPage.prototype, "tabRef", void 0);
    SummarySummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-summary-summary",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-summary\summary-summary.html"*/'<!--\n\n  Generated template for the SummarySummaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"Products"|translate}}</ion-title> -->\n\n    <!-- <ion-buttons end><button ion-button (click)="uploadbtn()" style="border: solid grey">{{"Backup Online"|translate}}<ion-icon name="cloud-upload" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()" style="border: solid grey"> {{"Cash Balance"|translate}} <ion-icon name="logo-usd" style="align-self: center; color: white; " padding></ion-icon></button></ion-buttons>\n\n  -->\n\n  <ion-title>\n\n    {{"Business Performance"|translate}}\n\n  </ion-title>\n\n  <!-- <ion-buttons end><button ion-button (click)="help()"><ion-icon name="help-circle" style="font-size: 30px;"></ion-icon></button></ion-buttons> -->\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content>\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="SumChart" tabTitle="{{\'Analysis\'|translate}}" tabIcon="list-box"></ion-tab>\n\n        <ion-tab [root]="SumAcc" tabTitle="{{\'Accounts\'|translate}}" tabIcon="pricetag"></ion-tab>\n\n        <ion-tab [root]="SumRec" tabTitle="{{\'Receipts\'|translate}}" tabIcon="albums"></ion-tab>\n\n       </ion-tabs>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-summary\summary-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], SummarySummaryPage);
    return SummarySummaryPage;
}());

//# sourceMappingURL=summary-summary.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-product-category/add-product-category.module": [
		512,
		19
	],
	"../pages/all-transaction/all-transaction.module": [
		188
	],
	"../pages/coach-businesstips/coach-businesstips.module": [
		513,
		18
	],
	"../pages/coach-coach/coach-coach.module": [
		517,
		17
	],
	"../pages/coach-goals/coach-goals.module": [
		514,
		16
	],
	"../pages/coach-home/coach-home.module": [
		515,
		15
	],
	"../pages/contact-us/contact-us.module": [
		516,
		14
	],
	"../pages/expense-general/expense-general.module": [
		518,
		13
	],
	"../pages/expense-transaction/expense-transaction.module": [
		519,
		12
	],
	"../pages/expenses-home/expenses-home.module": [
		520,
		11
	],
	"../pages/help/help.module": [
		521,
		1
	],
	"../pages/income-transaction/income-transaction.module": [
		522,
		10
	],
	"../pages/loan-home/loan-home.module": [
		523,
		9
	],
	"../pages/login/login.module": [
		325
	],
	"../pages/product-list/product-list.module": [
		524,
		8
	],
	"../pages/sign-up/sign-up.module": [
		326
	],
	"../pages/summary-accounts/summary-accounts.module": [
		525,
		7
	],
	"../pages/summary-graphs/summary-graphs.module": [
		526,
		6
	],
	"../pages/summary-home/summary-home.module": [
		527,
		5
	],
	"../pages/summary-summary/summary-summary.module": [
		528,
		4
	],
	"../pages/transaction-home/transaction-home.module": [
		327
	],
	"../pages/transaction-product/transaction-product.module": [
		529,
		3
	],
	"../pages/update-stock/update-stock.module": [
		530,
		0
	],
	"../pages/user-profile/user-profile.module": [
		531,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionPageModule", function() { return AllTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_transaction__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AllTransactionPageModule = /** @class */ (function () {
    function AllTransactionPageModule() {
    }
    AllTransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__all_transaction__["a" /* AllTransactionPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_transaction__["a" /* AllTransactionPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__all_transaction__["a" /* AllTransactionPage */]],
        })
    ], AllTransactionPageModule);
    return AllTransactionPageModule;
}());

//# sourceMappingURL=all-transaction.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commands; });
//commands based on https://github.com/humbertopiaia/escpos-commands-js/blob/master/src/commands.js
//all the commands below may vary by printer, check the manual
var commands = {
    LF: [0x0a],
    ESC: [0x1b],
    FS: [0x1c],
    GS: [0x1d],
    US: [0x1f],
    FF: [0x0c],
    DLE: [0x10],
    DC1: [0x11],
    DC4: [0x14],
    EOT: [0x04],
    NUL: [0x00],
    //EOL: [\n],
    HORIZONTAL_LINE: {
        HR_58MM: "================================",
        HR2_58MM: "********************************",
    },
    FEED_CONTROL_SEQUENCES: {
        CTL_LF: [0x0a],
        CTL_FF: [0x0c],
        CTL_CR: [0x0d],
        CTL_HT: [0x09],
        CTL_VT: [0x0b],
        RST_HT: [0x1b, 0x44, 0x00],
        SET_HT: [0x1b, 0x44, 0x10, 0x0f, 0x0f, 0x00],
    },
    LINE_SPACING: {
        LS_DEFAULT: [0x1b, 0x32],
        LS_SET: [0x1b, 0x33],
    },
    HARDWARE: {
        HW_INIT: [0x1b, 0x40],
        HW_SELECT: [0x1b, 0x3d, 0x01],
        HW_RESET: [0x1b, 0x3f, 0x0a, 0x00],
    },
    CASH_DRAWER: {
        CD_KICK_2: [0x1b, 0x70, 0x00],
        CD_KICK_5: [0x1b, 0x70, 0x01],
    },
    MARGINS: {
        BOTTOM: [0x1b, 0x4f],
        LEFT: [0x1b, 0x6c],
        RIGHT: [0x1b, 0x51],
    },
    PAPER: {
        PAPER_FULL_CUT: [0x1d, 0x56, 0x00],
        PAPER_PART_CUT: [0x1d, 0x56, 0x01],
        PAPER_CUT_A: [0x1d, 0x56, 0x41],
        PAPER_CUT_B: [0x1d, 0x56, 0x42],
    },
    TEXT_FORMAT: {
        TXT_NORMAL: [0x1b, 0x21, 0x00],
        TXT_2HEIGHT: [0x1b, 0x21, 0x10],
        TXT_2WIDTH: [0x1b, 0x21, 0x20],
        TXT_4SQUARE: [0x1b, 0x21, 0x30],
        TXT_CUSTOM_SIZE: function (width, height) {
            // other sizes
            var widthDec = (width - 1) * 16;
            var heightDec = height - 1;
            var sizeDec = widthDec + heightDec;
            return [0x1d, 0x21, String.fromCharCode(sizeDec)];
        },
        TXT_HEIGHT: {
            1: [0x00],
            2: [0x01],
            3: [0x02],
            4: [0x03],
            5: [0x04],
            6: [0x05],
            7: [0x06],
            8: [0x07],
        },
        TXT_WIDTH: {
            1: [0x00],
            2: [0x10],
            3: [0x20],
            4: [0x30],
            5: [0x40],
            6: [0x50],
            7: [0x60],
            8: [0x70],
        },
        TXT_UNDERL_OFF: [0x1b, 0x2d, 0x00],
        TXT_UNDERL_ON: [0x1b, 0x2d, 0x01],
        TXT_UNDERL2_ON: [0x1b, 0x2d, 0x02],
        TXT_BOLD_OFF: [0x1b, 0x45, 0x00],
        TXT_BOLD_ON: [0x1b, 0x45, 0x01],
        TXT_ITALIC_OFF: [0x1b, 0x35],
        TXT_ITALIC_ON: [0x1b, 0x34],
        TXT_FONT_A: [0x1b, 0x4d, 0x00],
        TXT_FONT_B: [0x1b, 0x4d, 0x01],
        TXT_FONT_C: [0x1b, 0x4d, 0x02],
        TXT_ALIGN_LT: [0x1b, 0x61, 0x00],
        TXT_ALIGN_CT: [0x1b, 0x61, 0x01],
        TXT_ALIGN_RT: [0x1b, 0x61, 0x02],
    },
};
//# sourceMappingURL=printer-commands.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHomePageModule", function() { return TransactionHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionHomePageModule = /** @class */ (function () {
    function TransactionHomePageModule() {
    }
    TransactionHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_home__["a" /* TransactionHomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_home__["a" /* TransactionHomePage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__transaction_home__["a" /* TransactionHomePage */]],
        })
    ], TransactionHomePageModule);
    return TransactionHomePageModule;
}());

//# sourceMappingURL=transaction-home.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FcmService = /** @class */ (function () {
    function FcmService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    FcmService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messaging;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messaging = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["messaging"]();
                        return [4 /*yield*/, messaging.getToken().then(function (token) {
                                console.log("latest device token: " + token);
                                _this.saveToken(token);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FcmService.prototype.saveToken = function (token) {
        if (!token)
            return;
        var devicesRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("devices");
        var data = {
            token: token,
            userId: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid || "userId",
        };
        return devicesRef.doc(token).set(data);
    };
    FcmService.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FcmService.prototype.onNotifications = function () {
        var _this = this;
        var messaging = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["messaging"]();
        messaging.onMessage(function (payload) {
            console.log("payload: " + payload);
            _this.presentToast(payload.notification.body);
        });
    };
    FcmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], FcmService);
    return FcmService;
}());

//# sourceMappingURL=fcm.service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CoachHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachHomePage = /** @class */ (function () {
    function CoachHomePage(navCtrl, translateConfigService, navParams, alertCtrl, modal) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.Goals = __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__["a" /* CoachGoalsPage */];
        this.Coach = __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__["a" /* CoachCoachPage */];
        this.Tips = __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */];
    }
    CoachHomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CoachHomePage");
    };
    CoachHomePage.prototype.contactpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    CoachHomePage.prototype.help = function () {
        var passedData = {
            //youtube link, required text
            page: "Coach Page",
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    CoachHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-coach-home",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-home\coach-home.html"*/'<!--\n\n  Generated template for the CoachHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{"Coach"|translate}}</ion-title>\n\n      <ion-buttons end><button ion-button (click)="contactpg()" style="align-self: right; background-color:#222"><ion-icon name="contact" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n\n\n<ion-content padding>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="Goals" tabTitle="{{\'Tutorials\'|translate }}" tabIcon="paper-plane"></ion-tab>\n\n        <ion-tab [root]="Coach" tabTitle="{{\'Advice\'|translate}}" tabIcon="school"></ion-tab>\n\n        <!-- <ion-tab [root]="Tips" tabTitle="စီးပွားရေးသိကောင်းစရာများ" tabIcon="cash"></ion-tab>\n\n         -->\n\n       </ion-tabs>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-home\coach-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], CoachHomePage);
    return CoachHomePage;
}());

//# sourceMappingURL=coach-home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expenses_home_expenses_home__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_general_expense_general__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the ExpenseTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpenseTransactionPage = /** @class */ (function () {
    function ExpenseTransactionPage(navCtrl, translateConfigService, navParams, alertCtrl, sp, toastCtrl, events, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modal = modal;
        this.ViewList = __WEBPACK_IMPORTED_MODULE_3__expenses_home_expenses_home__["a" /* ExpensesHomePage */];
        this.AddProd = __WEBPACK_IMPORTED_MODULE_4__expense_general_expense_general__["a" /* ExpenseGeneralPage */];
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.events.subscribe("cbUpdate:created", function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    ExpenseTransactionPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ExpenseTransactionPage");
        if (this.navParams.get("data") == "ViewExp") {
            console.log("Yo000");
            //change tab
            this.tabRef.select(1);
        }
    };
    ExpenseTransactionPage.prototype.uploadbtn = function () {
        this.sp.backupStorage();
        var message = this.translateConfigService.getTranslatedMessage("Online backup ready");
        this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        })
            .present();
    };
    ExpenseTransactionPage.prototype.cashbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, message1, message2, message3, message4, message5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        message = this.translateConfigService.getTranslatedMessage("Balance");
                        message1 = this.translateConfigService.getTranslatedMessage("Edit");
                        message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
                        message3 = this.translateConfigService.getTranslatedMessage("Update");
                        message4 = this.translateConfigService.getTranslatedMessage("Cancel");
                        message5 = this.translateConfigService.getTranslatedMessage("OK");
                        this.alertCtrl
                            .create({
                            //@ts-ignore
                            message: message.value + ": " + this.userdata.cash_balance,
                            buttons: [
                                {
                                    //@ts-ignore
                                    text: message1.value,
                                    handler: function (data) {
                                        _this.alertCtrl
                                            .create({
                                            inputs: [
                                                //@ts-ignore
                                                { name: "cb", placeholder: message2.value },
                                            ],
                                            buttons: [
                                                {
                                                    //@ts-ignore
                                                    text: message4.value,
                                                    role: "cancel",
                                                },
                                                {
                                                    //@ts-ignore
                                                    text: message3.value,
                                                    handler: function (data1) {
                                                        if (data1.cb != null && data1.cb != "" && data1.cb != undefined) {
                                                            //console.log("Update CB to :"+data1.cb)
                                                            _this.getUserData();
                                                            _this.userdata.cash_balance = parseFloat(data1.cb).toString();
                                                            _this.sp.setUserDat(_this.userdata);
                                                        }
                                                    },
                                                },
                                            ],
                                        })
                                            .present();
                                    },
                                },
                                {
                                    //translate these buttons
                                    //@ts-ignore
                                    text: message5.value,
                                    role: "Cancel",
                                },
                            ],
                        })
                            .present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpenseTransactionPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.sp.storageReady().then(function () {
                            _this.sp
                                .getUserDat()
                                .then(function (val) {
                                _this.userdata = JSON.parse(val);
                                console.log(_this.userdata);
                                _this.setUsrLang();
                                resolve();
                            })
                                .catch(function (err) {
                                alert("Error: " + err);
                            });
                        });
                    })];
            });
        });
    };
    ExpenseTransactionPage.prototype.setUsrLang = function () {
        this.translateConfigService.setLanguage(this.userdata.language);
        console.log(this.userdata.language);
    };
    ExpenseTransactionPage.prototype.help = function () {
        var passedData = {
            //youtube link, required text
            page: "Expenses Page",
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
    ], ExpenseTransactionPage.prototype, "tabRef", void 0);
    ExpenseTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-expense-transaction",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\expense-transaction\expense-transaction.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"Products"|translate}}</ion-title> -->\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()" style="border: solid grey">{{"Backup"|translate}}<ion-icon name="cloud-upload" style="align-self: center; color: white; padding-left: 10px;"></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()" style="border: solid grey"> {{"Cash Balance"|translate}} <ion-icon name="logo-usd" style="align-self: center; color: white; padding-left: 10px;"></ion-icon></button></ion-buttons>\n\n    <!-- <ion-buttons end><button ion-button (click)="help()"><ion-icon name="help-circle" style="font-size: 30px;"></ion-icon></button></ion-buttons> -->\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="ViewList" tabTitle="{{\'Stock\'|translate}}" tabIcon="list-box"></ion-tab>\n\n        <ion-tab [root]="AddProd" tabTitle="{{\'Add Expense\'|translate}}" tabIcon="pricetag"></ion-tab>\n\n       </ion-tabs>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\expense-transaction\expense-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ExpenseTransactionPage);
    return ExpenseTransactionPage;
}());

//# sourceMappingURL=expense-transaction.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_geolocation_geolocation_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the ExpensesHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpensesHomePage = /** @class */ (function () {
    function ExpensesHomePage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl, barcodeScanner, gps, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.gps = gps;
        this.app = app;
        this.prodName = "";
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
        this.expirydate = new Date().toISOString();
        this.currtime = new Date();
        this.listProducts = [];
        this.filteredList = [];
        this.searchterm = "";
        this.selectedCat = [];
        this.totalamt = 0.0;
        this.hideButton = true;
        this.getUserData();
        this.gps
            .getCoordinates()
            .then(function (coordinates) {
            _this.geolocation = coordinates;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ExpensesHomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ExpensesHomePage");
        console.log(this.currtime);
        this.getProducts();
        this.getCategories();
        this.getUserData();
    };
    ExpensesHomePage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ExpensesHomePage.prototype.updatebalance = function (edited) {
        if (this.prodcostitem != null && this.prodqty != null && (edited == "prodcostitem" || edited == "prodqty")) {
            this.prodcost = this.prodqty * this.prodcostitem;
        }
        else if (this.prodcost != null && this.prodqty != null && (edited == "prodcost" || edited == "prodqty")) {
            this.prodcostitem = this.prodcost / this.prodqty;
        }
    };
    ExpensesHomePage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ExpensesHomePage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp
                .getProducts()
                .then(function (val) {
                _this.listProducts = JSON.parse(val);
                if (_this.listProducts != null) {
                    _this.filteredProduct();
                }
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ExpensesHomePage.prototype.filteredProduct = function () {
        var _this = this;
        this.filteredList = this.listProducts.filter(function (item) {
            //console.log(this.searchterm);
            console.log(item);
            if (item.name.toLowerCase().includes(_this.searchterm.toLowerCase())) {
                if (_this.selectedCat.length > 0) {
                    for (var i = 0; i < _this.selectedCat.length; i++) {
                        if (_this.selectedCat == null || item.cat.includes(_this.selectedCat[i])) {
                            return true;
                        }
                    }
                }
                else {
                    return true;
                }
            }
        });
        //console.log("FilteredProd: "+this.filteredList)
    };
    ExpensesHomePage.prototype.addinventoryexpense = function () {
        return __awaiter(this, void 0, void 0, function () {
            var itemslist, prodidlist, pnllist, discountlist, dataexp, data1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemslist = [];
                        prodidlist = [];
                        pnllist = [];
                        discountlist = [];
                        itemslist.push(this.product);
                        prodidlist.push(this.expirydate);
                        dataexp = {
                            itemslist: itemslist,
                            totalsum: this.prodcost * -1,
                            prodidlist: prodidlist,
                            pnllist: pnllist,
                            datetime: this.currtime,
                            taxrate: 0,
                            discountlist: discountlist,
                            discount: 0,
                            totaldisc: this.prodcost * -1,
                            totalatax: this.prodcost * -1,
                            geolocation: this.geolocation,
                        };
                        data1 = {
                            code: this.product.code,
                            name: this.product.name,
                            price: this.product.price,
                            wholesale_price: this.product.wholesale_price,
                            cost: Math.round(((parseInt(this.product.cost) * parseInt(this.product.stock_qty) + parseInt(this.prodcost)) /
                                (parseInt(this.prodqty) + parseInt(this.product.stock_qty))) *
                                100) / 100,
                            cat: this.product.cat,
                            url: this.product.url,
                            stock_qty: parseInt(this.product.stock_qty) + parseInt(this.prodqty),
                        };
                        return [4 /*yield*/, this.sp.updateProduct(data1, this.product.code).then(function () { })];
                    case 1:
                        _a.sent();
                        this.sp.storageReady().then(function () {
                            console.log(dataexp);
                            _this.sp.addTransactions(dataexp);
                            _this.updateCb(_this.prodcost).then(function () {
                                _this.events.publish("cbUpdate:created", 0);
                                console.log("update");
                            });
                            var message = _this.translateConfigService.getTranslatedMessage("Finish");
                            var toast = _this.toastCtrl.create({
                                // @ts-ignore
                                message: message.value,
                                duration: 3000,
                            });
                            _this.prodqty = null;
                            _this.prodcost = null;
                            _this.prodName = "";
                            _this.expirydate = new Date().toISOString();
                            _this.currtime = new Date();
                            _this.searchterm = "";
                            _this.selectedCat = [];
                            _this.totalamt = 0.0;
                            _this.product = null;
                            _this.sp.backupStorage();
                            toast.present();
                            //this.navCtrl.setRoot(DashboardPage);
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpensesHomePage.prototype.updateCb = function (negtransacsum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getUserData();
                this.userdata.cash_balance = (parseInt(this.userdata.cash_balance) - parseInt(negtransacsum)).toString();
                this.sp.setUserDat(this.userdata);
                return [2 /*return*/];
            });
        });
    };
    ExpensesHomePage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    var message = _this.translateConfigService.getTranslatedMessage("Found Product");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value + " " + val[0].name,
                        duration: 2000,
                    });
                    toast.present();
                    _this.chooseProd(val[0]);
                }
                else {
                    var message = _this.translateConfigService.getTranslatedMessage("Not found!");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000,
                    });
                    toast.present();
                }
            });
        })
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    ExpensesHomePage.prototype.chooseProd = function (product) {
        this.prodName = product.name;
        console.log(this.prodName);
        this.product = product;
        this.hideButton = false;
    };
    ExpensesHomePage.prototype.clearProduct = function () {
        this.hideButton = true;
        this.prodName = "";
        this.product = null;
        this.prodqty = "";
        this.prodcost = "";
        this.prodcostitem = "";
    };
    ExpensesHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-expenses-home",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\expenses-home\expenses-home.html"*/'<!--\n\n  Generated template for the ExpensesHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title> {{"Update Stock"|translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n  <ion-item>\n\n      <b>{{\'Update Inventory for existing products:\'|translate}}</b> \n\n  </ion-item>\n\n\n\n<ion-list inset>\n\n  \n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-8> \n\n            <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n            <button ion-button block color="primary" (click)="scanQR()"  color="dark">{{"Scan Barcode"|translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-item>\n\n      <ion-label>{{"Select category"| translate}}</ion-label>\n\n      <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-list inset  *ngFor="let product of filteredList">\n\n  <ion-card>\n\n      <ion-grid> \n\n        <ion-row>\n\n        <ion-col col-2>\n\n          <ion-row> \n\n            <ion-avatar>\n\n                <img [src]="product.url">\n\n              </ion-avatar>\n\n            </ion-row>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    {{product.name}}\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  {{"Stock"|translate}}: {{product.stock_qty}}\n\n                </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col style="color: grey; font-size: 10px;"> {{"Retail Price"|translate}} : {{product.price}} </ion-col>\n\n                    \n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-col style="color: grey; font-size: 10px; text-align: left;"> {{"Wholesale Price"|translate}} : {{product.wholesale_price}} </ion-col>\n\n                  </ion-row>  \n\n                  <ion-row>\n\n                      <ion-col style="color: grey; font-size: 10px; text-align: left;">  {{"Category"|translate}} : {{product.cat}} </ion-col>\n\n                    \n\n                  </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12> <button ion-button full end color="dark" (click)="chooseProd(product)">{{"Update Stock"|translate}}</button> </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </ion-card> \n\n \n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer style="border-top-color:black; border-top: 10px;" *ngIf=\'prodName!=""\'> \n\n  <ion-list>\n\n    <ion-item>\n\n      {{"Product Name"|translate}}: {{prodName}}\n\n      <button ion-button style="float: right; color:white; background-color: red;" [hidden]="hideButton" (click)="clearProduct()">\n\n        {{"Clear"|translate}}\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="{{\'Product Qty\'|translate}}" type="number" [(ngModel)]=\'prodqty\' (ionChange)="updatebalance(\'prodqty\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input placeholder="{{\'Purchase Price per Item\'|translate}}" type="number" [(ngModel)]=\'prodcostitem\' (ionChange)="updatebalance(\'prodcostitem\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-input type="number" placeholder="{{\'Total Expenditure\'|translate}}" [(ngModel)]=\'prodcost\' (ionChange)="updatebalance(\'prodcost\')"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label>{{"Batch Expiry Date:"|translate}}</ion-label>\n\n      <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]=\'expirydate\' [min]="minDate" [max]="maxDate"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n  <button ion-button block color="primary" (click)="addinventoryexpense()"  color="dark">{{"Add Stock"|translate}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\expenses-home\expenses-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_6__providers_geolocation_geolocation_service__["a" /* GeolocationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ExpensesHomePage);
    return ExpensesHomePage;
}());

//# sourceMappingURL=expenses-home.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.searchterm = "";
        this.selectedCat = [];
        this.listArray = [];
        this.events.subscribe("prodAdd:created", function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            _this.getProducts();
        });
        this.ionViewDidLoad();
        this.getCategories();
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        this.getProducts();
    };
    ProductListPage.prototype.addprocat = function () {
        var _this = this;
        var message = this.translateConfigService.getTranslatedMessage("Add Category");
        var message1 = this.translateConfigService.getTranslatedMessage("Add Product");
        var message2 = this.translateConfigService.getTranslatedMessage("Add");
        var message3 = this.translateConfigService.getTranslatedMessage("Cancel");
        this.alertCtrl
            .create({
            // @ts-ignore
            title: message2.value,
            buttons: [
                {
                    // @ts-ignore
                    text: message1.value,
                    handler: function (data) {
                        _this.navCtrl.parent.select(1);
                    },
                },
                {
                    // @ts-ignore
                    text: message.value,
                    handler: function (data) {
                        _this.navCtrl.parent.select(2);
                    },
                },
                {
                    // @ts-ignore
                    text: message3.value,
                    role: "Cancel",
                },
            ],
        })
            .present();
    };
    ProductListPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ProductListPage.prototype.backBtn = function () {
        //Hide back btn if src is tab
        this.navCtrl.pop();
    };
    ProductListPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp
                .getProducts()
                .then(function (val) {
                _this.listProducts = JSON.parse(val);
                if (_this.listProducts != null) {
                    _this.filteredProduct();
                }
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ProductListPage.prototype.singleProduct = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__["a" /* SingleProductPage */], { data: data });
    };
    ProductListPage.prototype.filteredProduct = function () {
        var _this = this;
        this.filteredList = this.listProducts.filter(function (item) {
            //console.log(this.searchterm);
            console.log(item);
            if (item.name.toLowerCase().includes(_this.searchterm.toLowerCase())) {
                if (_this.selectedCat.length > 0) {
                    for (var i = 0; i < _this.selectedCat.length; i++) {
                        if (_this.selectedCat == null || item.cat.includes(_this.selectedCat[i])) {
                            return true;
                        }
                    }
                }
                else {
                    return true;
                }
            }
        });
        this.filteredListRev = this.filteredList.reverse();
        //console.log("FilteredProd: "+this.filteredList)
    };
    ProductListPage.prototype.swapUp = function (prodCodeOld) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.swapProductUp(prodCodeOld).then(function () {
                _this.getProducts();
            });
        });
    };
    ProductListPage.prototype.swapDown = function (prodCodeOld) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.swapProductDown(prodCodeOld).then(function () {
                _this.getProducts();
            });
        });
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-product-list",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\product-list\product-list.html"*/'<!--\n\n  Generated template for the ProductListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>product-list</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n<ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n  <ion-item>\n\n    <ion-label>{{"Select category"|translate}}</ion-label>\n\n    <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n        <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n<!-- <ion-card>\n\n    <ion-grid line>\n\n      <ion-row>\n\n      <ion-col col-2>\n\n        <ion-row>\n\n          <ion-avatar>\n\n              <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n\n            </ion-avatar>\n\n          </ion-row>\n\n      </ion-col>\n\n      <ion-col col-10>\n\n          <ion-row>\n\n              <ion-col col-7>\n\n                Shan Noodle\n\n              </ion-col>\n\n              <ion-col col-3>\n\n                568 - N/A?\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                    <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                    <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 </ion-col>\n\n              <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6></ion-col>\n\n              <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n\n            </ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-card>  -->\n\n\n\n\n\n\n\n  <ion-list inset  *ngFor="let product of filteredListRev">\n\n\n\n\n\n            <ion-card>\n\n                <ion-grid> \n\n                  <ion-row>\n\n                  <ion-col col-2>\n\n                    <ion-row> \n\n                      <ion-avatar>\n\n                          <img [src]="product.url">\n\n                        </ion-avatar>\n\n                      </ion-row>\n\n                  </ion-col>\n\n\n\n\n\n                  <ion-col col-8>\n\n\n\n\n\n                      <ion-row>\n\n                          <ion-col>\n\n                              {{product.name}}\n\n                          </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                        <ion-col >\n\n                            {{"Stock"|translate}}: {{product.stock_qty}}\n\n                          </ion-col>\n\n                        </ion-row>\n\n\n\n\n\n                        <ion-row>\n\n                          <ion-col style="color: grey; font-size: 10px;"> {{"Retail Price"|translate}} : {{product.price}} </ion-col>\n\n                          \n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col style="color: grey; font-size: 10px; text-align: left;"> {{"Wholesale Price"|translate}} : {{product.wholesale_price}} </ion-col>\n\n                        </ion-row>  \n\n                        <ion-row>\n\n                            <ion-col style="color: grey; font-size: 10px; text-align: left;">  {{"Category"|translate}} : {{product.cat}} </ion-col>\n\n                          \n\n                        </ion-row>\n\n                        \n\n                  </ion-col>\n\n                  <ion-col col-2 style="font-size: 2rem; vertical-align:middle;">\n\n                      <ion-row>\n\n                          <ion-icon name="arrow-dropup-circle" style=" color: green" (click)="swapDown(product.code)" padding></ion-icon>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="swapUp(product.code)" padding></ion-icon>\n\n                      </ion-row>\n\n                  </ion-col>\n\n                 \n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">{{"View / Edit"|translate}}</button> </ion-col>\n\n                </ion-row>\n\n                </ion-grid>\n\n              </ion-card> \n\n   \n\n \n\n     \n\n    </ion-list>\n\n    <ion-fab right bottom>\n\n      <button ion-fab (click)=addprocat() ><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseGeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ExpenseGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpenseGeneralPage = /** @class */ (function () {
    function ExpenseGeneralPage(navCtrl, navParams, translateConfigService, sp, events, toastCtrl, gps, view) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateConfigService = translateConfigService;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.gps = gps;
        this.view = view;
        this.expType = ["Transportation", "Salaries", "Utilities", "Depreciation", "Miscellaneous"];
        this.currtime = new Date();
        this.expType1 = [];
        this.getUserData();
        this.listOfExpenses = [];
        this.listOfExpenses.push(new Expense());
        this.gps
            .getCoordinates()
            .then(function (coordinates) {
            _this.geolocation = coordinates;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ExpenseGeneralPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad ExpenseGeneralPage");
        this.expType.forEach(function (element) {
            console.log(element);
            //@ts-ignore
            console.log(_this.translateConfigService.getTranslatedMessage(element).value);
            //@ts-ignore
            _this.expType1.push(_this.translateConfigService.getTranslatedMessage(element).value);
        });
    };
    ExpenseGeneralPage.prototype.addExpense = function () {
        this.listOfExpenses.push(new Expense());
    };
    ExpenseGeneralPage.prototype.removeExpense = function (index) {
        this.listOfExpenses.splice(index, 1);
    };
    ExpenseGeneralPage.prototype.updateExpenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var itemslist, totalsum, dataexp;
            var _this = this;
            return __generator(this, function (_a) {
                itemslist = [];
                totalsum = 0;
                this.listOfExpenses.forEach(function (element) {
                    if (!element.isValid()) {
                        element.flag = false;
                        return;
                    }
                    else {
                        element.flag = true;
                        totalsum -= element.amount;
                        var prodOfExpense = {
                            cat: element.type,
                            code: "EXPENSE",
                            discount: 0,
                            name: element.name,
                            price: element.amount * -1,
                            qty: 1,
                            stock_qty: 0,
                        };
                        itemslist.push(prodOfExpense);
                    }
                });
                console.log(totalsum);
                console.log(itemslist);
                dataexp = {
                    itemslist: itemslist,
                    totalsum: totalsum,
                    prodidlist: [],
                    pnllist: [],
                    datetime: this.currtime,
                    taxrate: 0,
                    discountlist: [],
                    discount: 0,
                    totaldisc: totalsum,
                    totalatax: totalsum,
                    geolocation: this.geolocation,
                };
                console.log(dataexp);
                this.sp.storageReady().then(function () {
                    _this.sp.addTransactions(dataexp);
                    _this.updateCb(Math.abs(totalsum)).then(function () {
                        _this.events.publish("cbUpdate:created", 0);
                    });
                    var message = _this.translateConfigService.getTranslatedMessage("Finish");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000,
                    });
                    toast.present();
                    _this.currtime = new Date();
                    _this.listOfExpenses = [];
                    _this.listOfExpenses.push(new Expense());
                    _this.sp.backupStorage();
                    _this.view.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    ExpenseGeneralPage.prototype.close = function () {
        this.view.dismiss();
    };
    ExpenseGeneralPage.prototype.updateCb = function (negtransacsum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getUserData();
                this.userdata.cash_balance = (parseInt(this.userdata.cash_balance) - parseInt(negtransacsum)).toString();
                this.sp.setUserDat(this.userdata);
                return [2 /*return*/];
            });
        });
    };
    ExpenseGeneralPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ExpenseGeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-expense-general",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\expense-general\expense-general.html"*/'<!--\n\n  Generated template for the ExpenseGeneralPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>expense-general</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<div class="modal">\n\n  <ion-header style="background-color: black;">\n\n    <ion-navbar >\n\n      <h4 style="padding-left: 10px;">Expenses</h4>\n\n      <ion-buttons end>\n\n        <button ion-button style="background-color: red; color: white" (click)="close()">{{"Close"|translate}}</button>\n\n      </ion-buttons>\n\n    </ion-navbar>  \n\n  </ion-header>\n\n\n\n<ion-content>\n\n  <ion-item>\n\n      <b>{{"Add non-inventory expense"|translate}}:</b> \n\n  </ion-item>\n\n\n\n  <ion-list inset>\n\n    <ion-card *ngFor="let item of listOfExpenses; let i = index">\n\n      <ion-grid>\n\n        <ion-row [hidden] = "item.flag">\n\n          <ion-col col-12>\n\n            <ion-label style="color: red;">\n\n              {{"Invalid! Some required fields are empty"|translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-label style="font-size: 16px;">\n\n              <b>{{"Expense"|translate}} #{{ i + 1 }}</b>\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-input placeholder="{{\'Expense name\'|translate}}" [(ngModel)]="item.name"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-row>\n\n            <ion-select placeholder="{{\'Expense Type\'|translate}}" [(ngModel)]="item.type">\n\n              <ion-option *ngFor="let itemType of expType1" value="{{itemType}}">{{itemType}}</ion-option>\n\n            </ion-select>\n\n            </ion-row> \n\n          </ion-col>\n\n          <ion-col col-6 align-self-end>\n\n            <ion-item>\n\n              <ion-input placeholder="{{\'Amount\'|translate}}" type="number" [(ngModel)]="item.amount"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <br>\n\n        <!--<ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-textarea autogrow placeholder="Additional notes\n(optional)" [(ngModel)]="item.notes"></ion-textarea>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <br>-->\n\n        <ion-row justify-content-end>\n\n          <button ion-button style="background-color: red; color: whitesmoke; float: right;" (click)="removeExpense(i)" *ngIf="listOfExpenses.length!=1">\n\n            {{"Delete Expense"|translate}}\n\n          </button>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n    <button ion-button style="float: right;" (click)="addExpense()">{{"Add another expense"|translate}}</button>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer style="background-color: #ffffff">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n          <button ion-button full style="background-color: #FFA500" (click)="updateExpenses()">{{"Update Expense"|translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n</div>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\expense-general\expense-general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_geolocation_geolocation_service__["a" /* GeolocationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ExpenseGeneralPage);
    return ExpenseGeneralPage;
}());

var Expense = /** @class */ (function () {
    function Expense() {
        this.flag = true;
    }
    Expense.prototype.isValid = function () {
        if (this.name == undefined || this.type == undefined || this.amount == undefined)
            return false;
        return true;
    };
    return Expense;
}());
//# sourceMappingURL=expense-general.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachBusinesstipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CoachBusinesstipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachBusinesstipsPage = /** @class */ (function () {
    function CoachBusinesstipsPage(navCtrl, navParams, translateConfigService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateConfigService = translateConfigService;
    }
    CoachBusinesstipsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CoachBusinesstipsPage");
    };
    CoachBusinesstipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-coach-businesstips",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-businesstips\coach-businesstips.html"*/'<ion-content padding>\n\n\n\n  \n\n  <ion-card>\n\n    <ion-grid line>\n\n        <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n          <ion-col col-10 style="color: grey; font-size: 10px;"> Wed, 10th October 2018 </ion-col>\n\n          <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n        </ion-row>\n\n        <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n          <ion-col><h2><b>You\'ve got a winner!</b></h2></ion-col>\n\n        </ion-row>\n\n\n\n      <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n        Your item XYZ sells 50% higher than any other product in its category. Item ABC sells only 2% the volume of XYZ. You should stock more XYZ and less ABC.\n\n      </ion-row>\n\n      <ion-row  style="background-color: #f0f0f0">\n\n        <ion-col col-6 style="text-align: center ">\n\n            <ion-icon name="thumbs-up" ></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center ">\n\n            <ion-icon name="thumbs-down"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card> \n\n\n\n  \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-businesstips\coach-businesstips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */]])
    ], CoachBusinesstipsPage);
    return CoachBusinesstipsPage;
}());

//# sourceMappingURL=coach-businesstips.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachGoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the CoachGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachGoalsPage = /** @class */ (function () {
    function CoachGoalsPage(navCtrl, translateConfigService, navParams, dom, sp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.dom = dom;
        this.sp = sp;
        this.vidlist = [];
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: this.translateConfigService.getCurrentLanguage(),
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.openVid = -1;
        this.userlang = this.translateConfigService.getCurrentLanguage();
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
            .firestore()
            .collection("contact-us")
            .get()
            .then(function (doc) {
            _this.videoLinks = doc.docs[1].data().video;
            _this.videoLinks.forEach(function (element) {
                element.date = _this.getDateTime(parseInt(element.date));
                //var date1=new Date(parseInt(element.date));
                console.log(element.date);
            });
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
            .firestore()
            .collection("tutorial")
            .get()
            .then(function (doc) {
            //console.log(doc)
            doc.docs.forEach(function (element) {
                console.log(element.id + " " + _this.userdata.language);
                if (element.id == _this.userdata.language) {
                    element.data().video.forEach(function (element2) {
                        _this.vidlist.push(element2);
                    });
                    _this.vidlist = element.data().video;
                }
            });
        });
        console.log(this.userlang);
    }
    CoachGoalsPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CoachGoalsPage.prototype.open = function (i) {
        if (i == this.openVid) {
            this.openVid = -1;
        }
        else {
            this.openVid = i;
        }
    };
    CoachGoalsPage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        //console.log(temp);
        //const temp1 = temp;
        var t = temp.getDate().toString() +
            "/" +
            (temp.getMonth() + 1).toString() +
            "/" +
            temp.getFullYear().toString() +
            " " +
            this.getHours(temp) +
            ":" +
            this.getMinutes(temp);
        return t;
        //if any hours or mins <0 then need to add 0 4 use cases
    };
    CoachGoalsPage.prototype.getHours = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getHours();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    CoachGoalsPage.prototype.getMinutes = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMinutes();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    CoachGoalsPage.prototype.playVid = function () { };
    //  player;
    //     onYouTubeIframeAPIReady() {
    //       this.player = new YT.Player('player', {
    //         height: '390',
    //         width: '640',
    //         videoId: 'M7lc1UVf-VE',
    //       });
    //     }
    CoachGoalsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CoachGoalsPage");
    };
    CoachGoalsPage.prototype.linkValue = function (val) {
        return this.dom.bypassSecurityTrustResourceUrl(val);
    };
    CoachGoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-coach-goals",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-goals\coach-goals.html"*/'\n\n<ion-content padding>\n\n\n\n    <!-- <ion-card *ngFor="let item of videoLinks">\n\n      <div *ngIf="item.lang==userlang">\n\n      <ion-grid line>\n\n   \n\n          <ion-row style="padding-left: 10px;">\n\n            <ion-col col-10 style="color: grey; font-size: 10px;"> {{item.date}} </ion-col>\n\n            <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n   \n\n        </ion-row>\n\n        <ion-row style="padding-left: 10px;">\n\n          <ion-col><h2><b> {{item.title}}</b></h2></ion-col>\n\n        </ion-row>\n\n\n\n      <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n          {{item.descrip}}              \n\n      </ion-row>\n\n      <ion-row>\n\n        <iframe width="100%" [height]="item.height" id="player" [src]="linkValue(item.link)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  \n\n    </ion-card> -->\n\n\n\n    <ion-card *ngFor="let item of vidlist; let i = index">\n\n     \n\n      <ion-grid line>\n\n        <ion-row style="padding-left: 10px;" (click)="open(i)">\n\n          <ion-col col-10><h2><b> {{item.heading}}</b></h2></ion-col>\n\n          <ion-col col-2>\n\n              <ion-icon name="arrow-dropdown" *ngIf="i!=openVid"></ion-icon>\n\n              <ion-icon name="arrow-dropup" *ngIf="i==openVid"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      <ion-row style="padding-left: 15px; padding-bottom: 10px;" [hidden]="i!=openVid">\n\n          {{item.content}}              \n\n      </ion-row>\n\n      <ion-row [hidden]="i!=openVid">\n\n        <iframe width="100%" [height]="315" id="player" [src]="linkValue(item.url)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n      </ion-row>\n\n      </ion-grid>\n\n\n\n  \n\n    </ion-card>\n\n<!--       \n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>Goal: Bulk Transaction</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Record 15 transactions and get the ability to add miltiple products in one transaction entry!              \n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                <b>Go</b>\n\n            </ion-col>\n\n \n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card>  -->\n\n\n\n      <!--<ion-card>\n\n          <ion-grid line>\n\n              <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n                <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n                <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n              </ion-row>\n\n              <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n                <ion-col><h2><b>Goal: Record Discounts</b></h2></ion-col>\n\n              </ion-row>\n\n      \n\n            <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n                Record 25 transactions to add discounts to sales & expenses              \n\n            </ion-row>\n\n            <ion-row  style="background-color: #f0f0f0">\n\n              <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                  <b>Go</b>\n\n              </ion-col>\n\n   \n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-goals\coach-goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]])
    ], CoachGoalsPage);
    return CoachGoalsPage;
}());

//# sourceMappingURL=coach-goals.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachCoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the CoachCoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachCoachPage = /** @class */ (function () {
    function CoachCoachPage(navCtrl, translateConfigService, navParams, sp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.notifList = [];
        this.userlang = this.translateConfigService.getCurrentLanguage();
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: this.translateConfigService.getCurrentLanguage(),
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
            .firestore()
            .collection("notifications")
            .get()
            .then(function (doc) {
            doc.docs.forEach(function (element) {
                var temp = element.data();
                temp.date = _this.getDateTime(parseInt(temp.date));
                _this.notifList.push(temp);
            });
            console.log(_this.notifList);
        });
    }
    CoachCoachPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CoachCoachPage");
    };
    CoachCoachPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CoachCoachPage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        //console.log(temp);
        //const temp1 = temp;
        var t = temp.getDate().toString() +
            "/" +
            (temp.getMonth() + 1).toString() +
            "/" +
            temp.getFullYear().toString() +
            " " +
            this.getHours(temp) +
            ":" +
            this.getMinutes(temp);
        return t;
        //if any hours or mins <0 then need to add 0 4 use cases
    };
    CoachCoachPage.prototype.getHours = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getHours();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    CoachCoachPage.prototype.getMinutes = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMinutes();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    CoachCoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-coach-coach",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-coach\coach-coach.html"*/'<!--\n\n  Generated template for the CoachCoachPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-coach</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngFor="let item of notifList">\n\n      <div *ngIf="item.lang==userlang">\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> {{item.date}} </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>{{ item.title }}</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              {{ item.text }}\n\n          </ion-row>\n\n          <!-- <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-up" ></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n            </ion-col>\n\n          </ion-row> -->\n\n          <ion-row style="padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px;">\n\n            <ion-img [src]="item.optionalImage" *ngIf="item.optionalImage"></ion-img>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n      </ion-card> \n\n\n\n      \n\n    <!-- <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Let your customers know that you are listening. Tell them, "I hear what you are saying" and ask "Tell me more about that". This way you indicate that you are paying attention without agreeing or disagreeing with them.\n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-up" ></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card>  -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\coach-coach\coach-coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]])
    ], CoachCoachPage);
    return CoachCoachPage;
}());

//# sourceMappingURL=coach-coach.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geolocation_geolocation_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__summary_summary_summary_summary__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











/**
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomeTransactionPage = /** @class */ (function () {
    function IncomeTransactionPage(navCtrl, navParams, events, sp, toastCtrl, translateConfigService, barcodeScanner, printer, alertCtrl, loadCtrl, gps, app, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.translateConfigService = translateConfigService;
        this.barcodeScanner = barcodeScanner;
        this.printer = printer;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.gps = gps;
        this.app = app;
        this.modal = modal;
        this.taxbtn = 0;
        this.showrec = false;
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.discount = 0.0;
        this.lastsumdisc = 0.0;
        this.taxrate = 0.0;
        this.discbtn = 0;
        this.result = "";
        this.displayManual = 0;
        this.datastore = { itemslist: [] };
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastsumAfterIndividualDiscount = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        this.newItemName = "";
        this.newUnitPrice = null;
        this.newUnitQty = 1;
        this.newItemCat = "";
        this.newItemDiscount = null;
        this.listArray = [];
        this.prodidlist = [];
        this.pnllist = [];
        this.datetime = Date.now();
        this.tax_vat = [];
        this.discountlist = [];
        this.inputData = {};
        this.isReady = false;
        var nav = app._appRoot._getActivePortal() || app.getActiveNav();
        var activeView = nav.getActive();
        if (activeView != null) {
            if (activeView.isOverlay) {
                console.log("Alert Prev");
                activeView.dismiss();
            }
        }
        //console.log("Recieved -1" + this.navParams.get('itemslist'));
        this.getUserData();
        this.gps
            .getCoordinates()
            .then(function (coordinates) {
            _this.geolocation = coordinates;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    IncomeTransactionPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomeTransactionPage.prototype.printOldRec = function (transac) {
        console.log(transac);
        var encoder = new __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic___default.a();
        var result = encoder.initialize();
        result
            .codepage("cp936")
            .align("center")
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .line(this.userdata.business_name)
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_NORMAL)
            .line(this.userdata.business_address)
            .line(this.userdata.businesstype)
            .line(this.userdata.ph_no)
            .align("left")
            .newline()
            .line(this.getDateTime(transac.datetime))
            .align("center")
            .text(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].HORIZONTAL_LINE.HR_58MM)
            .newline();
        transac.itemslist.forEach(function (element) {
            element.qty = element.qty.toString();
            element.price = element.price.toString();
            //autotab system
            if (element.name.length < 20) {
                for (var i = element.name.length; i < 20; i++) {
                    element.name += " ";
                }
            }
            else {
                element.name = element.name.substring(0, 20);
            }
            if (element.qty < 10000) {
                for (var i = element.qty.length; i < 4; i++) {
                    element.qty += " ";
                }
            }
            else {
                element.qty.substring(0, 4);
            }
            if (element.price < 10000000) {
                for (var i = element.price.length; i < 8; i++) {
                    element.price += " ";
                }
            }
            else {
                element.price.substring(0, 8);
            }
            result
                .text(element.name) //19 + space
                //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
                .text(element.qty) //4+ space
                //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
                .text(element.price) //7+space
                .newline();
            if (parseFloat(element.discount) != 0) {
                result
                    .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ", 30)
                    .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text("")
                    .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
                    .newline();
            }
        });
        result.newline();
        result.align("right").line("Total: " + transac.totalsum);
        if (transac.totalsum != transac.totaldisc) {
            result.line(" After Discount (" + Math.round(transac.discount * 100) / 100 + "%): " + transac.totaldisc);
        }
        if (transac.totalsum != transac.totalatax) {
            result.line("After Tax (" + Math.round(transac.taxrate * 100) / 100 + "%): " + transac.totalatax);
        }
        result
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .newline()
            .line("")
            .newline()
            .line("")
            .newline()
            .cut("full");
        this.mountAlertBt(result.encode());
    };
    IncomeTransactionPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    IncomeTransactionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad IncomeTransactionPage");
        this.getCategories();
        this.getUserData();
        this.events.subscribe("genRec:created", function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            _this.datastore = JSON.parse(data);
            _this.showrec = true;
            //Here if 2 items have same code then coagulate/merge - price is always full price, merge discounts accordingly
            _this.datastore.itemslist.forEach(function (item, index) {
                _this.datastore.itemslist.forEach(function (item1, index1) {
                    if (index1 != index) {
                        if (item.code == item1.code && item.price == item1.price && item.name == item1.name) {
                            //ALL the 0000 might get combined
                            var totaldiscsumx = (item.price * (item.discount * item.qty + item1.discount * item1.qty)) / 100;
                            console.log("Total Disc Sum " + totaldiscsumx);
                            item.qty = item.qty + item1.qty;
                            item.discount = (totaldiscsumx / (item.price * item.qty)) * 100; //new qty
                            var rem = _this.datastore.itemslist.splice(index1, 1);
                            //remove item1, merge qty and manage discount as avg
                        }
                    }
                });
            });
            _this.updateRec();
        });
        this.getLastTransaction();
    };
    IncomeTransactionPage.prototype.getLastTransaction = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getTransactions().then(function (val) {
                var listOfTransactions = JSON.parse(val);
                listOfTransactions = listOfTransactions.reverse();
                _this.lastTransaction = listOfTransactions[0];
                _this.isReady = true;
            });
        });
    };
    IncomeTransactionPage.prototype.addNewItembtn = function () {
        var _this = this;
        var message1 = this.translateConfigService.getTranslatedMessage("CANCEL ");
        var message2 = this.translateConfigService.getTranslatedMessage("Add from Calculator");
        var message3 = this.translateConfigService.getTranslatedMessage("Scan Barcode");
        var message4 = this.translateConfigService.getTranslatedMessage("Add from Product List");
        var message5 = this.translateConfigService.getTranslatedMessage("Add Additional Charges");
        var alert = this.alertCtrl
            .create({
            // @ts-ignore
            title: "Add From",
            // @ts-ignore
            enableBackdropDismiss: true,
            buttons: [
                {
                    // @ts-ignore
                    text: message2.value,
                    handler: function () {
                        _this.addCalc();
                    },
                },
                {
                    // @ts-ignore
                    text: message3.value,
                    handler: function () {
                        _this.qrscan();
                    },
                },
                {
                    // @ts-ignore
                    text: message4.value,
                    handler: function () {
                        _this.addProdList();
                    },
                },
                {
                    // @ts-ignore
                    text: message5.value,
                    handler: function () {
                        _this.dispM();
                    },
                },
                {
                    // @ts-ignore
                    text: message1.value,
                    role: "cancel",
                },
            ],
        })
            .present();
    };
    IncomeTransactionPage.prototype.addNewExp = function () {
        this.modal.create("ExpenseGeneralPage").present();
    };
    IncomeTransactionPage.prototype.updateRec = function () {
        var _this = this;
        this.lastsum = 0;
        var totalDiscount = 0, totalIndividualDiscount = 0;
        this.datastore.itemslist.forEach(function (item) {
            if (item.discount != 0) {
                totalIndividualDiscount += ((item.price * parseFloat(item.discount)) / 100) * item.qty;
                console.log(((parseFloat(item.price) * parseFloat(item.discount)) / 100) * item.qty);
            }
            _this.lastsum += item.price * item.qty;
        });
        totalDiscount += totalIndividualDiscount;
        console.log(this.lastsum + " " + totalDiscount);
        this.lastsumAfterIndividualDiscount = Math.round((this.lastsum - totalIndividualDiscount) * 100) / 100;
        console.log(this.lastsum + " " + this.lastsumAfterIndividualDiscount);
        this.lastsumdisc = Math.round((this.lastsum - totalDiscount) * ((100 - this.discount) / 100) * 100) / 100;
        this.lastsumtax = Math.round(this.lastsumdisc * (1.0 + this.taxrate / 100) * 100) / 100;
    };
    IncomeTransactionPage.prototype.editRecTop = function () {
        var _this = this;
        var message = this.translateConfigService.getTranslatedMessage("Cancel");
        var message1 = this.translateConfigService.getTranslatedMessage("Save");
        var message2 = this.translateConfigService.getTranslatedMessage("Edit Receipt Details");
        var message3 = this.translateConfigService.getTranslatedMessage("Enter Information");
        this.alertCtrl
            .create({
            //@ts-ignore
            title: message2.value,
            inputs: [
                //@ts-ignore
                { name: "Line1", placeholder: message3.value, value: this.userdata.business_name },
                //@ts-ignore
                { name: "Line2", placeholder: message3.value, value: this.userdata.business_address },
                //@ts-ignore
                { name: "Line3", placeholder: message3.value, value: this.userdata.businesstype },
                //@ts-ignore
                { name: "Line4", placeholder: message3.value, value: this.userdata.ph_no },
            ],
            buttons: [
                //@ts-ignore
                { text: message.value, role: "cancel" },
                {
                    //@ts-ignore
                    text: message1.value,
                    handler: function (data) {
                        _this.userdata.business_name = data.Line1;
                        _this.userdata.business_address = data.Line2;
                        _this.userdata.businesstype = data.Line3;
                        _this.userdata.ph_no = data.Line4;
                        _this.sp.setUserDat(_this.userdata);
                    },
                },
            ],
        })
            .present();
    };
    IncomeTransactionPage.prototype.setTax = function () {
        this.taxrate = this.userdata.taxrate;
        this.taxbtn = 1;
        this.updateRec();
    };
    IncomeTransactionPage.prototype.remTax = function () {
        this.taxbtn = 0;
        this.taxrate = 0.0;
        this.updateRec();
    };
    IncomeTransactionPage.prototype.setDisc = function () {
        this.discount = this.userdata.discount;
        this.discbtn = 1;
        this.updateRec();
    };
    IncomeTransactionPage.prototype.remDisc = function () {
        this.discount = 0.0;
        this.discbtn = 0;
        this.updateRec();
    };
    IncomeTransactionPage.prototype.qrscan = function () {
        var _this = this;
        var curprod;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    curprod = val[0];
                    var message = _this.translateConfigService.getTranslatedMessage("Found Product");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value + " " + val[0].name,
                        duration: 2000,
                    });
                    toast.present();
                    curprod.qty = 1;
                    _this.temp = curprod;
                    // addQty(index){
                    //   //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
                    //   this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;
                    //   this.lastsum=0;
                    //   for(let i = 0; i < this.datastore.itemslist.length; i++){
                    //     this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
                    //   }
                    // }
                    curprod.discount = 0;
                    _this.datastore.itemslist.push(curprod);
                    _this.showrec = true;
                    //this.lastsum=this.lastsum+curprod.price;
                    _this.updateRec();
                }
                else {
                    var message = _this.translateConfigService.getTranslatedMessage("No Product!!!");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000,
                    });
                    toast.present();
                }
            });
        })
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    IncomeTransactionPage.prototype.dispM = function () {
        console.log("DisM = " + this.displayManual);
        if (this.displayManual == 0) {
            this.displayManual = 1;
        }
        else {
            this.displayManual = 0;
        }
    };
    IncomeTransactionPage.prototype.ngOnInit = function () {
        //this.itemsprice=JSON.parse(this.dataparm);
    };
    IncomeTransactionPage.prototype.createRec = function () {
        //Nav to Rec Page
        //Build Expand Feature on REC Page
    };
    IncomeTransactionPage.prototype.removeItem = function (index) {
        //this.lastsum=this.lastsum-(this.datastore.itemslist[index].price*this.datastore.itemslist[index].qty);
        var rem = this.datastore.itemslist.splice(index, 1);
        if (this.datastore.itemslist.length == 0) {
            this.cancelRec();
        }
        this.updateRec();
        console.log("I: " + index);
        console.log(this.datastore.itemslist[index]);
    };
    IncomeTransactionPage.prototype.addQty = function (index) {
        //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
        this.datastore.itemslist[index].qty = parseInt(this.datastore.itemslist[index].qty) + 1;
        this.updateRec();
    };
    IncomeTransactionPage.prototype.removeQty = function (index) {
        //this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
        this.datastore.itemslist[index].qty = this.datastore.itemslist[index].qty - 1;
        if (this.datastore.itemslist[index].qty == 0) {
            this.removeItem(index);
        }
        this.updateRec();
    };
    IncomeTransactionPage.prototype.addNewItem = function () {
        if (this.newItemName != "" && this.newUnitPrice != null && this.newUnitQty != null) {
            var newitem = {
                code: "000000",
                name: this.newItemName,
                price: this.newUnitPrice,
                qty: this.newUnitQty,
                discount: this.newItemDiscount ? this.newItemDiscount : 0,
            };
            this.datastore.itemslist.push(newitem);
            this.newItemCat = "";
            this.newItemName = "";
            this.newUnitPrice = null;
            this.newUnitQty = 1;
            this.newItemDiscount = 0;
            this.showrec = true;
            this.displayManual = 0;
            this.updateRec();
        }
    };
    IncomeTransactionPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    IncomeTransactionPage.prototype.cancelRec = function () {
        this.showrec = false;
        this.datastore.itemslist = [];
        this.lastsum = 0;
        this.lastsumdisc = 0;
        this.lastsumtax = 0;
        this.discount = 0;
        this.taxrate = 0;
        this.taxbtn = 0;
        this.displayManual = 0;
        this.discbtn = 0;
        this.updateRec();
        var message = this.translateConfigService.getTranslatedMessage("Receipt was cancelled");
        this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        })
            .present();
    };
    IncomeTransactionPage.prototype.updateProduct = function () { };
    IncomeTransactionPage.prototype.updateCb = function (postransacsum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getUserData();
                        this.userdata.cash_balance = (parseFloat(this.userdata.cash_balance) + parseFloat(postransacsum)).toString();
                        return [4 /*yield*/, this.sp.setUserDat(this.userdata)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomeTransactionPage.prototype.saveRec = function () {
        var _this = this;
        this.datetime = Date.now();
        if (this.datastore.itemslist.length == 0) {
        }
        else {
            var data_1 = {
                itemslist: this.datastore.itemslist,
                totalsum: this.lastsum,
                prodidlist: this.prodidlist,
                pnllist: this.pnllist,
                datetime: this.datetime,
                taxrate: this.taxrate,
                discountlist: [],
                discount: this.discount,
                totaldisc: this.lastsumdisc,
                totalatax: this.lastsumtax,
                geolocation: this.geolocation,
            };
            this.datastore.itemslist.forEach(function (product) { return __awaiter(_this, void 0, void 0, function () {
                var data1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(product.code != "000000")) return [3 /*break*/, 2];
                            data1 = {
                                code: product.code,
                                name: product.name,
                                price: product.price,
                                wholesale_price: product.wholesale_price,
                                cost: product.cost,
                                cat: product.cat,
                                url: product.url,
                                stock_qty: product.stock_qty - product.qty,
                            };
                            return [4 /*yield*/, this.sp.updateProduct(data1, product.code)];
                        case 1:
                            _a.sent();
                            data_1.discountlist.push(product.discount);
                            this.discountlist.push(product.discount);
                            console.log(this.discountlist);
                            return [3 /*break*/, 3];
                        case 2:
                            data_1.discountlist.push(product.discount);
                            this.discountlist.push(product.discount);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            this.sp.storageReady().then(function () { return __awaiter(_this, void 0, void 0, function () {
                var message, toast;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // for(var i=0;i<160;i++){
                            console.log(data_1);
                            return [4 /*yield*/, this.sp.addTransactions(data_1)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.updateCb(this.lastsum).then(function () {
                                    _this.events.publish("cbUpdate:created", 0);
                                })];
                        case 2:
                            _a.sent();
                            message = this.translateConfigService.getTranslatedMessage("Finish");
                            toast = this.toastCtrl.create({
                                // @ts-ignore
                                message: message.value,
                                duration: 3000,
                            });
                            //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well
                            this.lastTransaction = data_1;
                            console.log(this.lastTransaction);
                            this.datastore.itemslist = [];
                            this.lastsum = 0;
                            this.lastsumtax = 0;
                            this.lastsumdisc = 0;
                            this.discount = 0;
                            this.taxrate = 0;
                            this.taxbtn = 0;
                            this.discbtn = 0;
                            this.sp.backupStorage();
                            toast.present();
                            this.showrec = false;
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        //this.getLastTransaction();
        this.navCtrl.parent.select(0);
    };
    IncomeTransactionPage.prototype.addCalc = function () {
        var _this = this;
        //(this.navCtrl.parent as Tabs).select(0);
        var helpModal = this.modal.create("AllTransactionPage");
        helpModal.present();
        this.delay(300).then(function (any) {
            _this.events.publish("addRecCalc:created", JSON.stringify(_this.datastore.itemslist)); //SEND ITEMS PRICE
            console.log("Sent: 1332 ");
            //your task after delay.
        });
    };
    IncomeTransactionPage.prototype.addSingleProd = function (item, index) {
        var _this = this;
        this.navCtrl.parent.select(0);
        this.delay(300).then(function (any) {
            _this.events.publish("addSingleProd:created", JSON.stringify(item), JSON.stringify(index), JSON.stringify(_this.datastore.itemslist));
            console.log("Sent: 1330 ");
            //your task after delay.
        });
    };
    IncomeTransactionPage.prototype.addProdList = function () {
        var _this = this;
        this.navCtrl.parent.select(0);
        this.delay(300).then(function (any) {
            _this.events.publish("addRecProd:created", JSON.stringify(_this.datastore.itemslist));
            console.log("Sent: 1331 ");
            //your task after delay.
        });
    };
    // printOldRec(data){
    //   this.datastore.itemslist=data.itemslist;
    //   this.lastsum=data.totalsum,
    //   prodidlist: this.prodidlist,
    //   pnllist: this.pnllist,
    //   datetime: this.datetime,
    //   taxrate: this.taxrate,
    //   discountlist: this.discountlist,
    //   discount: this.discount,
    //   totaldisc: this.lastsumdisc,
    //   totalatax: this.lastsumtax,
    // }
    IncomeTransactionPage.prototype.printRec = function () {
        var _this = this;
        this.datetime = Date.now();
        if (this.datastore.itemslist.length == 0) {
        }
        else {
            var data_2 = {
                itemslist: this.datastore.itemslist,
                totalsum: this.lastsum,
                prodidlist: this.prodidlist,
                pnllist: this.pnllist,
                datetime: this.datetime,
                taxrate: this.taxrate,
                discountlist: this.discountlist,
                discount: this.discount,
                totaldisc: this.lastsumdisc,
                totalatax: this.lastsumtax,
            };
            this.datastore.itemslist.forEach(function (product) {
                if (product.code != "000000") {
                    var data1 = {
                        code: product.code,
                        name: product.name,
                        price: product.price,
                        wholesale_price: product.wholesale_price,
                        cost: product.cost,
                        cat: product.cat,
                        url: product.url,
                        stock_qty: product.stock_qty - product.qty,
                    };
                    _this.sp.updateProduct(data1, product.code).then(function () { });
                }
            });
            this.sp.storageReady().then(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(data_2);
                            this.sp.addTransactions(data_2);
                            return [4 /*yield*/, this.updateCb(this.lastsum).then(function () {
                                    _this.events.publish("cbUpdate:created", 0);
                                })];
                        case 1:
                            _a.sent();
                            this.sp.backupStorage();
                            this.lastTransaction = data_2;
                            console.log(this.lastTransaction);
                            this.prepareToPrint();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    IncomeTransactionPage.prototype.showToast = function (data) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            message: data,
            position: "bottom",
        });
        toast.present();
    };
    IncomeTransactionPage.prototype.print = function (device, data) {
        var _this = this;
        console.log("Device mac: ", device);
        console.log("Data: ", JSON.stringify(data));
        this.datastore.itemslist = [];
        this.lastsum = 0;
        this.lastsumtax = 0;
        this.lastsumdisc = 0;
        this.discount = 0;
        this.taxrate = 0;
        this.taxbtn = 0;
        this.discbtn = 0;
        var msg1 = this.translateConfigService.getTranslatedMessage("Printing...");
        var msg2 = this.translateConfigService.getTranslatedMessage("Successful print!");
        var msg3 = this.translateConfigService.getTranslatedMessage("Ok");
        var msg4 = this.translateConfigService.getTranslatedMessage("There was an error printing, please try again!");
        var load = this.loadCtrl.create({
            // @ts-ignore
            content: msg1.value,
            enableBackdropDismiss: true,
        });
        load.present();
        this.printer.connectBluetooth(device).subscribe(function (status) {
            console.log(status);
            _this.printer
                .printData(data)
                .then(function (printStatus) {
                console.log(printStatus);
                var alert = _this.alertCtrl.create({
                    //@ts-ignore
                    title: msg2.value,
                    buttons: [
                        {
                            //@ts-ignore
                            text: msg3.value,
                            handler: function () {
                                load.dismiss();
                                _this.printer.disconnectBluetooth();
                            },
                        },
                    ],
                });
                _this.datastore.itemslist = [];
                _this.lastsum = 0;
                _this.lastsumtax = 0;
                _this.lastsumdisc = 0;
                _this.discount = 0;
                _this.taxrate = 0;
                _this.taxbtn = 0;
                _this.discbtn = 0;
                alert.present();
                _this.navCtrl.parent.select(0);
            })
                .catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    //@ts-ignore
                    title: msg4.value,
                    buttons: [
                        {
                            //@ts-ignore
                            text: msg3.value,
                            handler: function () {
                                load.dismiss();
                                //this.printer.disconnectBluetooth();
                            },
                        },
                    ],
                });
                _this.datastore.itemslist = [];
                _this.lastsum = 0;
                _this.lastsumtax = 0;
                _this.lastsumdisc = 0;
                _this.discount = 0;
                _this.taxrate = 0;
                _this.taxbtn = 0;
                _this.discbtn = 0;
                alert.present();
                _this.navCtrl.parent.select(0);
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "There was an error connecting to the printer, please try again!",
                buttons: [
                    {
                        text: "Ok",
                        handler: function () {
                            load.dismiss();
                            //this.printer.disconnectBluetooth();
                        },
                    },
                ],
            });
            alert.present();
        });
    };
    IncomeTransactionPage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate().toString() +
            "/" +
            (temp.getMonth() + 1).toString() +
            "/" +
            temp.getFullYear().toString() +
            " " +
            this.getHours(temp) +
            ":" +
            this.getMinutes(temp);
        return t;
        //if any hours or mins <0 then need to add 0 4 use cases
    };
    IncomeTransactionPage.prototype.getHours = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getHours();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    IncomeTransactionPage.prototype.getMinutes = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMinutes();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    IncomeTransactionPage.prototype.showOldRec = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__summary_summary_summary_summary__["a" /* SummarySummaryPage */], { item: "ViewRecs" });
        //this.events.publish("ViewRecs", 0);
        console.log("View Recs Called");
    };
    IncomeTransactionPage.prototype.printLogo = function () {
        var _this = this;
        var encoder = new __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic___default.a();
        var result = encoder.initialize();
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = "https://firebasestorage.googleapis.com/v0/b/open-fintech.appspot.com/o/prodImages%2Finstagram-logos-png-images-free-download-2.png?alt=media&token=db996d23-f99d-4243-b97e-f5757574751e";
        img.onload = function () {
            result
                .align("center")
                .image(img, 256, 256, "atkinson", 128)
                .newline()
                .newline();
            _this.mountAlertBt(result.encode());
        };
    };
    IncomeTransactionPage.prototype.prepareToPrint = function () {
        this.showrec = false;
        /*
            let receipt = '';
            receipt += commands.HARDWARE.HW_INIT;
            receipt += commands.TEXT_FORMAT.TXT_4SQUARE;
            receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
            receipt += data.title.toUpperCase();
            receipt += commands.EOL;
            receipt += commands.TEXT_FORMAT.TXT_NORMAL;
            receipt += commands.HORIZONTAL_LINE.HR_58MM;
            receipt += commands.EOL;
            receipt += commands.HORIZONTAL_LINE.HR2_58MM;
            receipt += commands.EOL;
            receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
            receipt += data.text;
            //secure space on footer
            receipt += commands.EOL;
            receipt += commands.EOL;
            receipt += commands.EOL;*/
        //this.receipt = receipt;
        var encoder = new __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic___default.a();
        var result = encoder.initialize();
        result
            .codepage("cp936")
            .align("center")
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .line(this.userdata.business_name)
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_NORMAL)
            .line(this.userdata.business_address)
            .line(this.userdata.businesstype)
            .line(this.userdata.ph_no)
            .align("left")
            .newline()
            .line(this.getDateTime(this.datetime))
            .align("center")
            .text(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].HORIZONTAL_LINE.HR_58MM)
            .newline();
        if (this.datastore != null) {
            result
                .align("left")
                //.raw(commands.FEED_CONTROL_SEQUENCES.RST_HT)
                //.raw(commands.FEED_CONTROL_SEQUENCES.SET_HT)
                .text("Item Name           ") //10 char + 10 char
                .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                .text("Qty ") //4 char
                .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                .text("  Price") //8 char
                .newline()
                .newline();
            this.datastore.itemslist.forEach(function (element, index) {
                element.qty = element.qty.toString();
                element.price = element.price.toString();
                //autotab system
                if (element.name.length < 20) {
                    for (var i = element.name.length; i < 20; i++) {
                        element.name += " ";
                    }
                }
                else {
                    element.name = element.name.substring(0, 20);
                }
                if (element.qty < 10000) {
                    for (var i = element.qty.length; i < 4; i++) {
                        element.qty += " ";
                    }
                }
                else {
                    element.qty.substring(0, 4);
                }
                if (element.price < 10000000) {
                    for (var i = element.price.length; i < 8; i++) {
                        element.price += " ";
                    }
                }
                else {
                    element.price.substring(0, 8);
                }
                result
                    .text(element.name) //19 + space
                    //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text(element.qty) //4+ space
                    //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text(element.price) //7+space
                    .newline();
                if (parseFloat(element.discount) != 0) {
                    result
                        .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ", 30)
                        .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                        .text("")
                        .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                        .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
                        .newline();
                }
            });
            result.newline();
            result.align("right").line("Total: " + this.lastsumAfterIndividualDiscount);
            if (this.lastsumAfterIndividualDiscount != this.lastsumdisc) {
                result.line(" After Discount (" + Math.round(this.discount * 100) / 100 + "%): " + this.lastsumdisc);
            }
            if (this.lastsumAfterIndividualDiscount != this.lastsumtax) {
                result.line("After Tax (" + Math.round(this.taxrate * 100) / 100 + "%): " + this.lastsumtax);
            }
        }
        result
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .newline()
            .line("")
            .newline()
            .line("")
            .newline()
            .cut("full");
        this.mountAlertBt(result.encode());
    };
    IncomeTransactionPage.prototype.mountAlertBt = function (data) {
        var _this = this;
        this.receipt = data;
        console.log(this.receipt);
        var msg1 = this.translateConfigService.getTranslatedMessage("Select your printer");
        var msg2 = this.translateConfigService.getTranslatedMessage("Cancel");
        var msg3 = this.translateConfigService.getTranslatedMessage("Select printer");
        var msg4 = this.translateConfigService.getTranslatedMessage("Select a printer!");
        var msg5 = this.translateConfigService.getTranslatedMessage("There was an error connecting the printer, please try again!");
        var msg6 = this.translateConfigService.getTranslatedMessage("Error activating bluetooth, please try again!");
        var alert = this.alertCtrl.create({
            //TRANSLATE THIS
            // @ts-ignore
            title: msg1.value,
            buttons: [
                {
                    // @ts-ignore
                    text: msg2.value,
                    role: "cancel",
                },
                {
                    // @ts-ignore
                    text: msg3.value,
                    handler: function (device) {
                        if (!device) {
                            // @ts-ignore
                            _this.showToast(msg4.value);
                            return false;
                        }
                        console.log(device);
                        _this.print(device, _this.receipt);
                    },
                },
            ],
        });
        this.printer
            .enableBluetooth()
            .then(function () {
            _this.printer
                .searchBluetooth()
                .then(function (devices) {
                devices.forEach(function (device) {
                    //console.log("Devices: ", JSON.stringify(device));
                    alert.addInput({
                        name: "printer",
                        value: device.address,
                        label: device.name,
                        type: "radio",
                    });
                });
                alert.present();
            })
                .catch(function (error) {
                console.log(error);
                // @ts-ignore
                _this.showToast(msg5.value);
                _this.mountAlertBt(_this.receipt);
            });
        })
            .catch(function (error) {
            console.log(error);
            // @ts-ignore
            _this.showToast(msg6.value);
            _this.mountAlertBt(_this.receipt);
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    IncomeTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-income-transaction",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\income-transaction\income-transaction.html"*/'<!--\n\n  Generated template for the IncomeTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <button full ion-button style="font-size: 1.2rem;" (click)="printLogo()" style="background-color: green; color: white;" round> Print Logo</button>\n\n\n\n  <div *ngIf="showrec==false">\n\n    <ion-row>\n\n\n\n      <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n        (click)="addNewItembtn()" style="background-color: green; color: white;" round> {{"Add New Sale"|translate}}</button></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n\n\n      <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n        (click)="addNewExp()" style="background-color: red; color: white;" round> {{"Add New Expense"|translate}}</button></ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <ion-card *ngIf="showrec==true">\n\n\n\n    <ion-grid>\n\n      <div *ngIf="showrec==true">\n\n\n\n        <ion-row>\n\n          <ion-col style="text-align: center; padding-top: 5px;"> {{userdata?userdata.business_name:null}} </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-12 style="color: grey;  text-align: center"> {{userdata?userdata.business_address:null}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12 style="color: grey;  text-align: center"> {{userdata?userdata.businesstype:null}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12 style="color: grey; text-align: center"> {{userdata?userdata.ph_no:null}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col style="text-align: center; padding-top: 5px;"></ion-col>\n\n         <button ion-button full small (click)="editRecTop()">{{"Edit Receipt Heading"|translate}}</button>\n\n        </ion-row>\n\n\n\n        <ion-row style="padding-top: 5px;">\n\n          <ion-col col-4 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Name" | translate}}</b>\n\n          </ion-col>\n\n          <ion-col col-2 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Price"| translate}}</b>\n\n          </ion-col>\n\n          <ion-col col-2 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Qty"| translate}}</b>\n\n          </ion-col>\n\n          <ion-col col-3 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Subtotal"| translate}}</b>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n        <ion-list *ngFor="let item of datastore.itemslist; let i = index">\n\n          <div style="border: solid 1px grey;">\n\n            <ion-row>\n\n              <ion-col col-9></ion-col>\n\n              <ion-col col-1 style="color: black;  font-size: large; text-align: center;">\n\n                <ion-icon name="add" style=" color: green" (click)="addQty(i)"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-1 style="color: black;  font-size: large;  text-align: center;">\n\n                <ion-icon name="remove" style=" color: red" (click)="removeQty(i)"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-1 style="color: black;  font-size: large;  text-align: center;">\n\n                <ion-icon name="close" style=" color: red" (click)="removeItem(i)"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-4 style="color: black; text-align: center;">\n\n                <div *ngIf="item.name.includes(\'Item\'); else itemexist">\n\n                  <button ion-button small (click)="addSingleProd(item,i)">{{"Choose"|translate}}</button>\n\n                </div>\n\n                <ng-template #itemexist>{{item.name}}</ng-template>\n\n              </ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">{{item.price}}</ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">{{item.qty}}</ion-col>\n\n              <ion-col col-3 style="color: black; text-align: center">{{(item.price*item.qty)| number:0}}\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-4 style="color: grey; text-align: center;">{{ \'Discount\' | translate }} %</ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">\n\n                <ion-input type="number" [(ngModel)]="item.discount" (ionChange)="updateRec()" min="0" max="100">\n\n                </ion-input>\n\n              </ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">\n\n                {{(item.qty*item.price*(item.discount)/100)| number:0}}\n\n              </ion-col>\n\n              <ion-col col-3 style="color: black;   text-align: center;">\n\n                  <b>{{(item.price*((100-item.discount))/100*item.qty)| number:0}}</b>\n\n              </ion-col>\n\n            </ion-row>\n\n            <!-- <ion-row>\n\n          <ion-col col-12 style="text-align: center"><ion-icon name="cut" style=" color: maroon"></ion-icon></ion-col>\n\n          </ion-row> -->\n\n          </div>\n\n        </ion-list>\n\n\n\n      </div>\n\n\n\n      <ion-card padding *ngIf="displayManual==1;">\n\n          <!-- <ion-item>\n\n                <span style="vertical-align: middle; display: inline-block; color: black; font-size: 1.0rem;" item-start>\n\n                    <button ion-button (click)="dispM()">{{"Add Additional Charges"|translate}}</button>\n\n                    \n\n                  </span>\n\n                   <ion-toggle color="dark" style="vertical-align: middle; display: inline-block" item-end (ionChange)="dispM()"></ion-toggle>\n\n                   \n\n              </ion-item>\n\n                 -->\n\n          <div *ngIf="displayManual==1;">\n\n  \n\n            <ion-item>\n\n              <ion-label style="font-size: 1.0rem;">{{"Name"|translate}}</ion-label>\n\n              <ion-input type="text" placeholder="{{\'Enter Product Name\'|translate}}" [(ngModel)]="newItemName"\n\n                ngDefaultControl></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label style="font-size: 1.0rem;">{{"Price"|translate}}</ion-label>\n\n              <ion-input type="number" placeholder="{{\'Enter Price\'|translate}}" [(ngModel)]="newUnitPrice"\n\n                ngDefaultControl></ion-input>\n\n            </ion-item>\n\n            <button ion-button style="font-size: 1.0rem;" full (click)="addNewItem()"> {{"Add Charges"|translate}}\n\n            </button>\n\n          </div>\n\n        </ion-card>\n\n\n\n\n\n\n\n\n\n      <div *ngIf="showrec==true">\n\n        <ion-row>\n\n          <ion-col col-4 style="text-align: center; font-size: 1.5rem; "><b>{{"Grand total:"|translate}}</b> </ion-col>\n\n          <ion-col col-4></ion-col>\n\n          <ion-col col-4 style="text-align: center; ">{{lastsumAfterIndividualDiscount}} </ion-col>\n\n\n\n        </ion-row>\n\n\n\n        \n\n      <ion-row>\n\n\n\n        <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n          (click)="addNewItembtn()"> {{"Add New Item"|translate}}</button></ion-col>\n\n      </ion-row>\n\n    \n\n      </div>\n\n\n\n\n\n      <!-- <ion-row>\n\n\n\n        <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n            (click)="addCalc()"> {{"Add from Calculator"|translate}}</button></ion-col>\n\n        <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n            (click)="qrscan()"> {{"Scan Barcode"|translate}}</button></ion-col>\n\n\n\n        <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n            (click)="addProdList()"> {{"Add from Product List"|translate}}</button></ion-col>\n\n        <ion-col col-12 style="text-align: center;"> <button full ion-button style="font-size: 1.2rem;"\n\n            (click)="dispM()"> {{"Add Additional Charges"|translate}}</button></ion-col>\n\n\n\n      </ion-row> -->\n\n\n\n      <div *ngIf="showrec==true">\n\n        <ion-row *ngIf="discbtn==0">\n\n          <button ion-button small (click)="setDisc()">{{"Add Discount"|translate}}</button>\n\n        </ion-row>\n\n        <ion-row *ngIf="discbtn==1">\n\n          <ion-col col-5>\n\n            <ion-label style="font-size: 1.0rem;">{{"Discount Rate %:"|translate}}</ion-label>\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="discount" style="font-size: 1.3rem; "\n\n              (input)="updateRec()" ngDefaultControl min="0" max="100">\n\n            </ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="discount!=0">\n\n          <ion-col col-5 style="text-align: left; font-size: 1.0rem; ">{{"Discounted Total:"|translate}}</ion-col>\n\n          <ion-col col-7 style="text-align: left; ">{{lastsumdisc}}</ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="discbtn==1">\n\n          <button ion-button small (click)="remDisc()">{{"Remove Discount"|translate}}</button>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="taxbtn==0">\n\n          <button ion-button small (click)="setTax()">{{"Add Tax"|translate}}</button>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="taxbtn==1">\n\n          <ion-col col-5>\n\n            <ion-label style="font-size: 1.0rem;">{{"Tax Rate %:"|translate}}</ion-label>\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="taxrate" style="font-size: 1.3rem;"\n\n              (input)="updateRec()" ngDefaultControl min="0" max="100">\n\n            </ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="taxrate!=0">\n\n          <ion-col col-5 style="text-align: left;font-size: 1.0rem; ">{{"Total after tax:"|translate}}</ion-col>\n\n          <ion-col col-7 style="text-align: left; ">{{lastsumtax}}</ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="taxbtn==1">\n\n          <button ion-button small (click)="remTax()">{{"Remove Tax"|translate}}</button>\n\n        </ion-row>\n\n      </div>\n\n\n\n    </ion-grid>\n\n  </ion-card>\n\n  <!-- Dynamically Generate All expense from backend - see feed from prev -->\n\n  <ion-card *ngIf="showrec==false && isReady==true" padding class="last-rec-card">\n\n    <h2 style="text-align: center;">\n\n      <b>{{"Last Receipt"|translate}}</b>\n\n    </h2>\n\n    <ion-row style="padding-top: 5px;">\n\n      <ion-col col-4 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Name" | translate}}</b>\n\n      </ion-col>\n\n      <ion-col col-2 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Price"| translate}}</b>\n\n      </ion-col>\n\n      <ion-col col-2 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Qty"| translate}}</b>\n\n      </ion-col>\n\n      <ion-col col-3 style="color: black; font-size: 1.0rem; text-align: center"><b>{{"Subtotal"| translate}}</b>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-list *ngFor="let item of lastTransaction.itemslist">\n\n      <ion-row>\n\n        <ion-col col-4 style="color: black; text-align: center;">\n\n        {{item.name}}\n\n        </ion-col>\n\n        <ion-col col-2 style="color: black;   text-align: center;">{{item.price}}</ion-col>\n\n        <ion-col col-2 style="color: black;   text-align: center;">{{item.qty}}</ion-col>\n\n        <ion-col col-3 style="color: black; text-align: center">{{(item.price*item.qty)| number:0}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-row>\n\n      <ion-col col-4 style="color: black; text-align: center;">\n\n        <b>{{"Total"|translate}}</b>\n\n      </ion-col>\n\n      <ion-col col-2 style="color: black;   text-align: center;"></ion-col>\n\n      <ion-col col-2 style="color: black;   text-align: center;"></ion-col>\n\n      <ion-col col-3 style="color: black; text-align: center">{{ lastTransaction.totalsum }}\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-row>\n\n      <ion-col col-8>\n\n        <b>{{"Total"|translate}}</b>\n\n      </ion-col>\n\n      <ion-col col-4 style="text-align: end;">\n\n        {{ lastTransaction.totalsum }}\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row *ngIf="lastTransaction.totaldisc!=lastTransaction.totalsum" style="padding: 0px;text-align: left; ">\n\n      <ion-col col-4 style="color: black; text-align: center;">\n\n        {{"Discounted Total:"|translate}} ({{lastTransaction.discount}}%)\n\n      </ion-col>\n\n      <ion-col col-2 style="color: black;   text-align: center;"></ion-col>\n\n      <ion-col col-2 style="color: black;   text-align: center;"></ion-col>\n\n      <ion-col col-3 style="color: black; text-align: center">\n\n        {{lastTransaction.totaldisc}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="lastTransaction.totalsum!=lastTransaction.totalatax" style="padding: 0px; text-align: left;">\n\n      <ion-col col-4 style="color: black; text-align: center;">\n\n        {{"Total after tax:"|translate}} ({{lastTransaction.taxrate}}%)\n\n      </ion-col>\n\n      <ion-col col-2 style="color: black;   text-align: center;"></ion-col>\n\n      <ion-col col-2 style="color: black;   text-align: center;"></ion-col>\n\n      <ion-col col-3 style="color: black; text-align: center">\n\n        {{lastTransaction.totalatax}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <br>\n\n    <ion-row style="padding: 7px;">\n\n      <button ion-button full style="background-color:green" (click)="printOldRec(lastTransaction)" round>\n\n        {{\'PRINT \'|translate}} &nbsp;<ion-icon name="print"></ion-icon>\n\n      </button>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row *ngIf="showrec==true">\n\n      <ion-col col-4>\n\n        <button ion-button full style="background-color:#FFAF00" (click)="saveRec()"> {{\'SAVE \'|translate}} <br>\n\n          <ion-icon name="checkmark"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button full style="background-color:#FFAF00" (click)="printRec()"> {{\'PRINT \'|translate}} <br>\n\n          <ion-icon name="print"></ion-icon> &nbsp;+ &nbsp;\n\n          <ion-icon name="checkmark"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button full style="background-color:#FFAF00" (click)="cancelRec()"> {{\'CANCEL \'|translate}} <br>\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-row *ngIf="showrec!=true">\n\n        <ion-col col-12>\n\n            <button ion-button full (click)="showOldRec()"> {{\'SHOW PREVIOUS RECEIPTS \'|translate}} <br>\n\n              <ion-icon name="list-box"></ion-icon>\n\n            </button>\n\n          </ion-col>     \n\n    </ion-row> -->\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\income-transaction\income-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__["a" /* TranslateConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__["a" /* TranslateConfigService */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer__["a" /* PrinterProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer__["a" /* PrinterProvider */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__providers_geolocation_geolocation_service__["a" /* GeolocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_geolocation_geolocation_service__["a" /* GeolocationService */]) === "function" ? _l : Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" ? _m : Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" ? _o : Object])
    ], IncomeTransactionPage);
    return IncomeTransactionPage;
}());

//# sourceMappingURL=income-transaction.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_esc_pos_encoder_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_esc_pos_encoder_ionic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_esc_pos_encoder_ionic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_printer_printer__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the SummaryHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryHomePage = /** @class */ (function () {
    function SummaryHomePage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl, zone, alertCtrl, printer, loadCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.printer = printer;
        this.loadCtrl = loadCtrl;
        this.expanded = true;
        this.tstoday = 0;
        this.tsmonth = 0;
        this.ts30 = 0;
        this.usrchoice = "today";
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.currentdatetime = new Date();
        this.totalsaletoday = 0;
        //@ts-ignore
        this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
        this.events.subscribe("ViewRecs", function (data) {
            _this.navCtrl.parent.select(2);
            console.log("ViewRecs Event");
        });
        this.getUserData();
    }
    SummaryHomePage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SummaryHomePage.prototype.toggleExpanded = function () {
        console.log("changing: " + this.expanded);
        if (this.expanded == true) {
            this.expanded = false;
            // this.zone.run(()=>{
            //   //@ts-ignore
            //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
            // })
        }
        else if (this.expanded == false) {
            this.expanded = true;
            //   this.zone.run(()=>{
            //   //@ts-ignore
            //   this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
            // });
        }
        console.log("changed: " + this.expandedvar);
    };
    SummaryHomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SummaryHomePage");
        this.tstoday = 0;
        this.tsmonth = 0;
        this.ts30 = 0;
        this.usrchoice = "today";
        this.getUserData();
        //@ts-ignore
        //this.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
        this.getTransac();
        this.getUserData();
    };
    SummaryHomePage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        //console.log(temp);
        var temp1 = temp;
        var t = temp.getDate().toString() +
            "/" +
            (temp.getMonth() + 1).toString() +
            "/" +
            temp.getFullYear().toString() +
            " " +
            this.getHours(temp) +
            ":" +
            this.getMinutes(temp) +
            ":" +
            this.getSeconds(temp);
        //console.log(t)
        return t;
        //if any hours or mins <0 then need to add 0 4 use cases
    };
    SummaryHomePage.prototype.getHours = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getHours();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryHomePage.prototype.getSeconds = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getSeconds();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryHomePage.prototype.getMinutes = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMinutes();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryHomePage.prototype.expandTransac = function (transac) {
        if (transac.expanded == true) {
            transac.expanded = false;
            //@ts-ignore
            transac.expandedvar = this.translateConfigService.getTranslatedMessage("Close").value;
        }
        else {
            transac.expanded = true;
            //@ts-ignore
            transac.expandedvar = this.translateConfigService.getTranslatedMessage("Expand").value;
        }
    };
    SummaryHomePage.prototype.getTransac = function () {
        var _this = this;
        this.tstoday = 0;
        this.tsmonth = 0;
        this.ts30 = 0;
        this.sp.storageReady().then(function () {
            _this.sp
                .getTransactions()
                .then(function (val) {
                _this.listtransac = JSON.parse(val);
                _this.listtransac.forEach(function (element) {
                    element.datetime1 = _this.getDateTime(element.datetime);
                    element.expanded = true;
                    //@ts-ignore
                    element.expandedvar = _this.translateConfigService.getTranslatedMessage("Expand").value;
                });
                _this.listtransacrev = _this.listtransac.reverse();
                console.log(_this.listtransac);
                _this.listtransacrev.forEach(function (element) {
                    if (_this.getDate(element.datetime) == _this.getDate(_this.currentdatetime)) {
                        _this.tstoday += parseInt(element.totaldisc);
                    }
                    if (_this.getDate(element.datetime) > _this.getDate(_this.currentdatetime) - 30) {
                        _this.ts30 += parseInt(element.totaldisc);
                    }
                    if (_this.getMonth(element.datetime) == _this.getMonth(_this.currentdatetime)) {
                        _this.tsmonth += parseInt(element.totaldisc);
                    }
                });
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    // getDateTime(datetime) {
    //   //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    //   const temp = new Date(datetime);
    //   const temp1 = temp;
    //   const t =
    //     temp.getDate() +
    //     "/" +
    //     (temp.getMonth() + 1) +
    //     "/" +
    //     temp.getFullYear() +
    //     " " +
    //     temp.getHours() +
    //     ":" +
    //     temp.getMinutes();
    //   return t;
    // }
    SummaryHomePage.prototype.getDate = function (datetime) {
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate();
        return t;
    };
    SummaryHomePage.prototype.getMonth = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMonth();
        return t;
    };
    SummaryHomePage.prototype.delTransac = function (transac) {
        var _this = this;
        this.sp.storageReady().then(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sp.deleteTransactions(transac)];
                    case 1:
                        _a.sent();
                        this.sp.backupStorage();
                        setTimeout(function () {
                            var message = _this.translateConfigService.getTranslatedMessage("Finish");
                            var toast = _this.toastCtrl.create({
                                // @ts-ignore
                                message: message.value,
                                duration: 3000,
                            });
                            _this.getTransac();
                            toast.present();
                        }, 1000);
                        this.ionViewDidLoad();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SummaryHomePage.prototype.printRec = function (transac) {
        console.log(transac);
        var encoder = new __WEBPACK_IMPORTED_MODULE_4_esc_pos_encoder_ionic___default.a();
        var result = encoder.initialize();
        result
            .codepage("cp936")
            .align("center")
            .raw(__WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .line(this.userdata.business_name)
            .raw(__WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_NORMAL)
            .line(this.userdata.business_address)
            .line(this.userdata.businesstype)
            .line(this.userdata.ph_no)
            .align("left")
            .newline()
            .line(this.getDateTime(transac.datetime))
            .align("center")
            .text(__WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__["a" /* commands */].HORIZONTAL_LINE.HR_58MM)
            .newline();
        transac.itemslist.forEach(function (element) {
            element.qty = element.qty.toString();
            element.price = element.price.toString();
            //autotab system
            if (element.name.length < 20) {
                for (var i = element.name.length; i < 20; i++) {
                    element.name += " ";
                }
            }
            else {
                element.name = element.name.substring(0, 20);
            }
            if (element.qty < 10000) {
                for (var i = element.qty.length; i < 4; i++) {
                    element.qty += " ";
                }
            }
            else {
                element.qty.substring(0, 4);
            }
            if (element.price < 10000000) {
                for (var i = element.price.length; i < 8; i++) {
                    element.price += " ";
                }
            }
            else {
                element.price.substring(0, 8);
            }
            result
                .text(element.name) //19 + space
                //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
                .text(element.qty) //4+ space
                //.raw(commands.FEED_CONTROL_SEQUENCES.CTL_HT)
                .text(element.price) //7+space
                .newline();
            if (parseFloat(element.discount) != 0) {
                result
                    .text("Discount (" + Math.round(parseFloat(element.discount) * 100) / 100 + "%) : ", 30)
                    .raw(__WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text("")
                    .raw(__WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text("-" + Math.round((element.price * element.discount * element.qty) / 100))
                    .newline();
            }
        });
        result.newline();
        result.align("right").line("Total: " + transac.totalsum);
        if (transac.totalsum != transac.totaldisc) {
            result.line(" After Discount (" + Math.round(transac.discount * 100) / 100 + "%): " + transac.totaldisc);
        }
        if (transac.totalsum != transac.totalatax) {
            result.line("After Tax (" + Math.round(transac.taxrate * 100) / 100 + "%): " + transac.totalatax);
        }
        result
            .raw(__WEBPACK_IMPORTED_MODULE_5__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .newline()
            .line("")
            .newline()
            .line("")
            .newline()
            .cut("full");
        this.mountAlertBt(result.encode());
    };
    SummaryHomePage.prototype.showToast = function (data) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            message: data,
            position: "bottom",
        });
        toast.present();
    };
    SummaryHomePage.prototype.mountAlertBt = function (data) {
        var _this = this;
        this.receipt = data;
        console.log(this.receipt);
        var msg1 = this.translateConfigService.getTranslatedMessage("Select your printer");
        var msg2 = this.translateConfigService.getTranslatedMessage("Cancel");
        var msg3 = this.translateConfigService.getTranslatedMessage("Select printer");
        var msg4 = this.translateConfigService.getTranslatedMessage("Select a printer!");
        var msg5 = this.translateConfigService.getTranslatedMessage("There was an error connecting the printer, please try again!");
        var msg6 = this.translateConfigService.getTranslatedMessage("Error activating bluetooth, please try again!");
        var alert = this.alertCtrl.create({
            //TRANSLATE THIS
            // @ts-ignore
            title: msg1.value,
            buttons: [
                {
                    // @ts-ignore
                    text: msg2.value,
                    role: "cancel",
                },
                {
                    // @ts-ignore
                    text: msg3.value,
                    handler: function (device) {
                        if (!device) {
                            // @ts-ignore
                            _this.showToast(msg4.value);
                            return false;
                        }
                        console.log(device);
                        _this.print(device, _this.receipt);
                    },
                },
            ],
        });
        this.printer
            .enableBluetooth()
            .then(function () {
            _this.printer
                .searchBluetooth()
                .then(function (devices) {
                devices.forEach(function (device) {
                    //console.log("Devices: ", JSON.stringify(device));
                    alert.addInput({
                        name: "printer",
                        value: device.address,
                        label: device.name,
                        type: "radio",
                    });
                });
                alert.present();
            })
                .catch(function (error) {
                console.log(error);
                // @ts-ignore
                _this.showToast(msg5.value);
                _this.mountAlertBt(_this.receipt);
            });
        })
            .catch(function (error) {
            console.log(error);
            // @ts-ignore
            _this.showToast(msg6.value);
            _this.mountAlertBt(_this.receipt);
        });
    };
    SummaryHomePage.prototype.print = function (device, data) {
        var _this = this;
        console.log("Device mac: ", device);
        console.log("Data: ", JSON.stringify(data));
        var msg1 = this.translateConfigService.getTranslatedMessage("Printing...");
        var msg2 = this.translateConfigService.getTranslatedMessage("Successful print!");
        var msg3 = this.translateConfigService.getTranslatedMessage("Ok");
        var msg4 = this.translateConfigService.getTranslatedMessage("There was an error printing, please try again!");
        var load = this.loadCtrl.create({
            // @ts-ignore
            content: msg1.value,
            enableBackdropDismiss: true,
        });
        load.present();
        this.printer.connectBluetooth(device).subscribe(function (status) {
            console.log(status);
            _this.printer
                .printData(data)
                .then(function (printStatus) {
                console.log(printStatus);
                var alert = _this.alertCtrl.create({
                    //@ts-ignore
                    title: msg2.value,
                    buttons: [
                        {
                            //@ts-ignore
                            text: msg3.value,
                            handler: function () {
                                load.dismiss();
                                _this.printer.disconnectBluetooth();
                            },
                        },
                    ],
                });
                alert.present();
                _this.navCtrl.parent.select(0);
            })
                .catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    //@ts-ignore
                    title: msg4.value,
                    buttons: [
                        {
                            //@ts-ignore
                            text: msg3.value,
                            handler: function () {
                                load.dismiss();
                                //this.printer.disconnectBluetooth();
                            },
                        },
                    ],
                });
                alert.present();
                _this.navCtrl.parent.select(0);
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "There was an error connecting to the printer, please try again!",
                buttons: [
                    {
                        text: "Ok",
                        handler: function () {
                            load.dismiss();
                            //this.printer.disconnectBluetooth();
                        },
                    },
                ],
            });
            alert.present();
        });
    };
    SummaryHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-summary-home",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-home\summary-home.html"*/'<ion-content>\n\n  <ion-select style="background-color: silver;max-width: 100%;" [(ngModel)]="usrchoice">\n\n    <ion-option value="today" selected>{{"Today"|translate}}</ion-option>\n\n    <ion-option value="last100">{{"Last 100"|translate}}</ion-option>\n\n  </ion-select>\n\n  <ion-list *ngFor="let transac of listtransacrev">\n\n    <ion-card *ngIf="(usrchoice==\'today\'&& getDate(transac.datetime) == getDate(currentdatetime)) || usrchoice==\'last100\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6 style="text-align: left; color: gray;">{{transac.datetime1}}</ion-col>\n\n          <ion-col col-6 style="text-align: end;"><b>{{transac.totalatax}}</b></ion-col>\n\n        </ion-row>\n\n        <ion-list *ngFor="let item of transac.itemslist" [hidden]="transac.expanded">\n\n          <ion-row style="padding: 0px;">\n\n            <ion-col col-8 style="text-align: left;">{{item.name}}</ion-col>\n\n            <ion-col col-2 style="text-align: center;">{{item.qty}}</ion-col>\n\n            <ion-col col-2 style="text-align: end;">{{item.price}}</ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n        <ion-row *ngIf="transac.totaldisc!=transac.totalsum" style="padding: 0px;text-align: left; "\n\n          [hidden]="transac.expanded">\n\n          <ion-col col-8>\n\n            {{"Discounted total:"|translate}} ({{transac.discount}}%)\n\n          </ion-col>\n\n          <ion-col col-4 style="text-align: end;">\n\n            {{transac.totaldisc}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="transac.totalsum!=transac.totalatax" style="padding: 0px; text-align: left;"\n\n          [hidden]="transac.expanded">\n\n          <ion-col col-8>\n\n            {{"Total after tax:"|translate}} ({{transac.taxrate}}%)\n\n          </ion-col>\n\n          <ion-col col-4 style="text-align: end;">\n\n            {{transac.totalatax}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 *ngIf="getDate(transac.datetime) == getDate(currentdatetime)"><button ion-button small full style="background-color: gray; color: white"\n\n              (click)="delTransac(transac)">{{"Delete Transaction"|translate}}</button></ion-col>\n\n          <ion-col col-6><button ion-button small full style="background-color: gray; color: white"\n\n              (click)="expandTransac(transac)">{{transac.expandedvar}}</button></ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button ion-button full style="background-color:#FFAF00" (click)="printRec(transac)"> {{\'PRINT \'|translate}} <br>\n\n              <ion-icon name="print"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid line>\n\n      </ion-grid>\n\n\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-home\summary-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_printer_printer__["a" /* PrinterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SummaryHomePage);
    return SummaryHomePage;
}());

//# sourceMappingURL=summary-home.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryAccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the SummaryAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryAccountsPage = /** @class */ (function () {
    function SummaryAccountsPage(navCtrl, navParams, sp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.listtransac = [];
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.currentdatetime = Date.now();
        this.netcashtoday = 0;
        this.netcashweek = 0;
        this.netcashmonth = 0;
        this.netcashlast30 = 0;
        this.summary = [];
    }
    SummaryAccountsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SummaryAccountsPage");
        this.getTransac();
        this.getUserData();
        this.netcashtoday = 0;
        this.netcashweek = 0;
        this.netcashmonth = 0;
        this.netcashlast30 = 0;
    };
    SummaryAccountsPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SummaryAccountsPage.prototype.getTransac = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp
                .getTransactions()
                .then(function (val) {
                _this.listtransac = JSON.parse(val);
                _this.listtransac.forEach(function (element) {
                    element.datetime1 = _this.getDateTime(element.datetime);
                    //element.expanded = true;
                });
                console.log(_this.listtransac);
                //this.setvalues();
                // this.listtransac.forEach(element => {
                //   if (this.getDate(element.datetime) == this.getDate(this.currentdatetime)) {
                //     if (element.totalatax >= 0) {
                //       //this.rev += parseInt(element.totalatax);
                //       //console.log(element.totalatax)
                //       //CALCULATE PROFIT BASED ON EACH ITEM
                //     } else {
                //       //this.exp = parseInt(element.totalatax);
                //     }
                //   }
                // });
                _this.getSummary();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SummaryAccountsPage.prototype.getDate = function (datetime) {
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate();
        return t;
    };
    SummaryAccountsPage.prototype.getSummary = function () {
        var _this = this;
        this.netcashtoday = 0;
        this.netcashweek = 0;
        this.netcashmonth = 0;
        this.netcashlast30 = 0;
        this.sp.storageReady().then(function () {
            _this.sp.getSummary().then(function (val) {
                _this.summary = JSON.parse(val);
                console.log(_this.summary);
                _this.listtransac.forEach(function (element) {
                    if (_this.getDate(element.datetime) == _this.getDate(_this.currentdatetime)) {
                        _this.netcashtoday += element.totalatax;
                    }
                });
                _this.netcashweek = _this.netcashtoday;
                _this.netcashmonth = _this.netcashtoday;
                _this.netcashlast30 = _this.netcashtoday;
                for (var i = 29; i > 23; i--) {
                    _this.netcashweek += _this.summary[i].revenue - _this.summary[i].expenses;
                }
                for (var i = 29; i >= 0; i--) {
                    _this.netcashlast30 += _this.summary[i].revenue - _this.summary[i].expenses;
                }
                var currday = _this.getDate(_this.currentdatetime);
                console.log(currday);
                for (var i = 29; i > 29 - currday && i > -1; i--) {
                    _this.netcashmonth += _this.summary[i].revenue - _this.summary[i].expenses;
                }
                //this.getTransac();
            });
        });
    };
    SummaryAccountsPage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        //console.log(temp);
        var temp1 = temp;
        var t = temp.getDate().toString() +
            "/" +
            (temp.getMonth() + 1).toString() +
            //temp.getFullYear().toString() +
            " " +
            this.getHours(temp) +
            ":" +
            this.getMinutes(temp);
        // this.getSeconds(temp);
        //console.log(t)
        return t;
        //if any hours or mins <0 then need to add 0 4 use cases
    };
    SummaryAccountsPage.prototype.getHours = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getHours();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryAccountsPage.prototype.getSeconds = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getSeconds();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryAccountsPage.prototype.getMinutes = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMinutes();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryAccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-summary-accounts",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-accounts\summary-accounts.html"*/'<ion-content padding>\n\n<ion-grid>\n\n  <ion-row style="border: solid 1px black;">\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: left;" col-8><b>{{"Current Cash Balance"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black ;color: white; text-align: end;" col-4><b>\n\n      <div *ngIf="userdata.cash_balance>=0" style="background-color: green;">\n\n        {{userdata.cash_balance}}\n\n      </div>\n\n      <div *ngIf="!(userdata.cash_balance>=0)" style="background-color: red;">\n\n        {{userdata.cash_balance}}\n\n      </div>   \n\n    </b></ion-col>\n\n  </ion-row>\n\n\n\n\n\n  <ion-row style="border: solid 1px black;">\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: left;" col-8><b>{{"Net Cashflow today"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black;color: white; text-align: end;" col-4><b> \n\n      <div *ngIf="netcashtoday>=0" style="background-color: green;">\n\n        {{netcashtoday}}\n\n      </div>\n\n      <div *ngIf="!(netcashtoday>=0)" style="background-color: red;">\n\n        {{netcashtoday}}\n\n      </div>\n\n    </b></ion-col>\n\n  </ion-row>\n\n\n\n\n\n  <ion-row style="border: solid 1px black;">\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: left;" col-8><b>{{"Net Cashflow 7 days"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black; color: white; text-align: end;" col-4><b>\n\n      <div *ngIf="netcashweek>=0" style="background-color: green;">\n\n        {{netcashweek}}\n\n      </div>\n\n      <div *ngIf="!(netcashweek>=0)" style="background-color: red;">\n\n        {{netcashweek}}\n\n      </div> </b></ion-col>\n\n  </ion-row>\n\n  <ion-row style="border: solid 1px black;">\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: left;" col-8><b>{{"Net Cashflow 30 days"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black;color:white; text-align: end;" col-4><b>\n\n      <div *ngIf="netcashlast30>=0" style="background-color: green;">\n\n        {{netcashlast30}}\n\n      </div>\n\n      <div *ngIf="!(netcashlast30>=0)" style="background-color: red;">\n\n        {{netcashlast30}}\n\n      </div></b></ion-col>\n\n  </ion-row>\n\n  <ion-row style="border: solid 1px black;">\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: left;" col-8><b>{{"Net Cashflow this month"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black; color: white; text-align: end;" col-4><b>\n\n      <div *ngIf="netcashmonth>=0" style="background-color: green;">\n\n        {{netcashmonth}}\n\n      </div>\n\n      <div *ngIf="!(netcashmonth>=0)" style="background-color: red;">\n\n        {{netcashmonth}}\n\n      </div>\n\n      </b></ion-col> \n\n  </ion-row>\n\n  <ion-row style="border: solid 1px black;">\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: center;"><b>{{"Date"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: center;"><b>{{"Item"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: center;"><b>{{"Amount"|translate}}</b></ion-col>\n\n    <ion-col style="border: solid 1px black; background-color: black;color: white; text-align: center;"><b>{{"Type"|translate}}</b></ion-col>\n\n  </ion-row>\n\n  <ion-row style="border: solid 1px black;"  *ngFor="let transac of listtransac; let i = index">\n\n    <ion-col style="border: solid 1px black;  text-align: center;">{{transac.datetime1}}</ion-col>\n\n    <ion-col style="border: solid 1px black;  text-align: center;">\n\n      <div *ngIf="transac.totalatax>=0">\n\n        {{transac.itemslist[0].name}} ..\n\n      </div>\n\n      <div *ngIf="!(transac.totalatax>=0)">\n\n        {{transac.itemslist[0].name}}\n\n      </div>   \n\n    </ion-col>\n\n    <ion-col style="border: solid 1px black;  text-align: center;">\n\n      <div *ngIf="transac.totalatax>=0">\n\n      Income\n\n    </div>\n\n    <div *ngIf="!(transac.totalatax>=0)">\n\n      Expense\n\n    </div>   \n\n    </ion-col>\n\n    <ion-col style="border: solid 1px black; color:white; text-align: center;">\n\n      <div *ngIf="transac.totalatax>=0" style="background-color: green">     {{transac.totalatax}}  </div>\n\n      <div *ngIf="!(transac.totalatax>=0)" style="background-color: red">       {{transac.totalatax}}</div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  \n\n  \n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-accounts\summary-accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], SummaryAccountsPage);
    return SummaryAccountsPage;
}());

//# sourceMappingURL=summary-accounts.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryGraphsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SummaryGraphsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryGraphsPage = /** @class */ (function () {
    function SummaryGraphsPage(navCtrl, navParams, sp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.rev = 0;
        this.exp = 0;
        this.pro = 0;
        this.summary = [];
        this.group = "today";
        this.listtransac = [];
        this.currentdatetime = Date.now();
        this.isgraph = 1;
        this.netcash = 0;
        this.getSummary();
        //this.setvalues();
    }
    SummaryGraphsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SummaryGraphsPage");
        this.rev = 0;
        this.exp = 0;
        this.pro = 0;
        this.group = "today";
        this.isgraph = 1;
        this.getSummary();
        //this.setvalues()
    };
    SummaryGraphsPage.prototype.toggleGL = function () {
        if (this.isgraph == 1)
            this.isgraph = 0;
        else
            this.isgraph = 1;
    };
    SummaryGraphsPage.prototype.getSummary = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getSummary().then(function (val) {
                _this.summary = JSON.parse(val);
                console.log(_this.summary);
                _this.getTransac();
            });
        });
    };
    SummaryGraphsPage.prototype.setvalues = function () {
        var _this = this;
        this.rev = 0;
        this.exp = 0;
        this.pro = 0;
        //  if(this.group=="today"){
        this.listtransac.forEach(function (element) {
            if (_this.getDate(element.datetime) == _this.getDate(_this.currentdatetime)) {
                if (element.totalatax >= 0) {
                    _this.rev += parseInt(element.totalatax);
                    element.itemslist.forEach(function (product, index) {
                        if (product.code != "000000") {
                            _this.pro =
                                _this.pro +
                                    ((parseFloat(product.price) * (100 - parseFloat(product.discount))) / 100 - parseFloat(product.cost)) *
                                        parseFloat(product.qty);
                            console.log(product);
                        }
                    });
                    //console.log(element.totalatax)
                    //CALCULATE PROFIT BASED ON EACH ITEM
                }
                else {
                    console.log(element.totalatax);
                    _this.exp += parseInt(element.totalatax);
                }
            }
        });
        //}
        if (this.group == "last7") {
            console.log("1");
            for (var i = 29; i > 22; i--) {
                this.rev += this.summary[i].revenue;
                this.exp += this.summary[i].expenses;
                this.pro += this.summary[i].profit;
            }
        }
        if (this.group == "last30") {
            for (var i = 29; i >= 0; i--) {
                this.rev += this.summary[i].revenue;
                this.exp += this.summary[i].expenses;
                this.pro += this.summary[i].profit;
            }
        }
        if (this.group == "month") {
            var currday = this.getDate(this.currentdatetime);
            console.log(currday);
            for (var i = 29; i > 29 - currday && i > -1; i--) {
                this.rev += this.summary[i].revenue;
                this.exp += this.summary[i].expenses;
                this.pro += this.summary[i].profit;
            }
        }
        this.generateGraphs();
    };
    SummaryGraphsPage.prototype.getTransac = function () {
        var _this = this;
        this.rev = 0;
        this.exp = 0;
        this.pro = 0;
        this.sp.storageReady().then(function () {
            _this.sp
                .getTransactions()
                .then(function (val) {
                _this.listtransac = JSON.parse(val);
                //console.log(this.listtransac);
                _this.setvalues();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SummaryGraphsPage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        //console.log(temp);
        var temp1 = temp;
        var t = temp.getDate().toString() + "/" + (temp.getMonth() + 1).toString();
        return t;
        //if any hours or mins <0 then need to add 0 4 use cases
    };
    SummaryGraphsPage.prototype.getTime = function (datetime) {
        var temp = new Date(datetime);
        var t = this.getHours(temp) + ":" + this.getMinutes(temp) + ":" + this.getSeconds(temp);
        return t;
    };
    SummaryGraphsPage.prototype.getDate = function (datetime) {
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate();
        return t;
    };
    SummaryGraphsPage.prototype.getMonth = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMonth();
        return t;
    };
    SummaryGraphsPage.prototype.getHours = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getHours();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryGraphsPage.prototype.getSeconds = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getSeconds();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryGraphsPage.prototype.getMinutes = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMinutes();
        if (t > 9) {
            return t.toString();
        }
        else {
            return "0" + t.toString();
        }
    };
    SummaryGraphsPage.prototype.ngOnInit = function () {
        this.generateGraphs();
    };
    SummaryGraphsPage.prototype.generateGraphs = function () {
        var _this = this;
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: ["Revenue", "Expenses", "Profit"],
                datasets: [
                    {
                        label: "Amount",
                        data: [this.rev, -this.exp, this.pro],
                        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
                        borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
        var temprev = 0;
        var tempexp = 0;
        var temppro = 0;
        var labels = [];
        var datarev = [];
        var dataexp = [];
        var datapro = [];
        var k = 0;
        this.listtransac.forEach(function (element) {
            if (_this.getDate(element.datetime) == _this.getDate(_this.currentdatetime)) {
                if (element.totalatax >= 0) {
                    temprev += parseInt(element.totalatax);
                    if (_this.group == "today") {
                        datarev.push(element.totalatax);
                        dataexp.push(0);
                        datapro.push(0);
                        labels.push(_this.getTime(element.datetime));
                    }
                }
                else {
                    tempexp = -parseInt(element.totalatax);
                    if (_this.group == "today") {
                        datarev.push(0);
                        dataexp.push(-element.totalatax);
                        datapro.push(0);
                        labels.push(_this.getTime(element.datetime));
                    }
                }
            }
        });
        if (this.group != "today" || this.listtransac.length == 0) {
            datarev.push(temprev);
            dataexp.push(tempexp);
            datapro.push(temppro);
            labels.push(this.getDateTime(this.currentdatetime));
        }
        if (this.group == "last7") {
            var d = new Date();
            for (var i = 29; i > 23; i--) {
                d.setDate(d.getDate() - 1);
                datarev.push(this.summary[i].revenue);
                dataexp.push(-this.summary[i].expenses);
                datapro.push(this.summary[i].profit);
                labels.push(this.getDateTime(d));
            }
        }
        if (this.group == "month") {
            var currday = this.getDate(this.currentdatetime);
            var d = new Date();
            for (var i = 30; i > 30 - currday && i > -1; i--) {
                d.setDate(d.getDate() - 1);
                datarev.push(this.summary[i].revenue);
                dataexp.push(-this.summary[i].expenses);
                datapro.push(this.summary[i].profit);
                labels.push(this.getDateTime(d));
            }
        }
        if (this.group == "last30") {
            var d = new Date();
            for (var i = 30; i >= 0; i--) {
                d.setDate(d.getDate() - 1);
                datarev.push(this.summary[i].revenue);
                dataexp.push(-this.summary[i].expenses);
                datapro.push(this.summary[i].profit);
                labels.push(this.getDateTime(d));
            }
        }
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: "line",
            data: {
                labels: labels.reverse(),
                datasets: [
                    {
                        label: "Revenue",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: datarev.reverse(),
                        spanGaps: false,
                    },
                    {
                        label: "Expenses",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(54, 162, 235, 0.4)",
                        borderColor: "rgba(54, 162, 235, 11)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(54, 162, 235, 1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataexp.reverse(),
                        spanGaps: false,
                    },
                    {
                        label: "Profit",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255, 206, 86, 0.4)",
                        borderColor: "rgba(255, 206, 86, 1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(255, 206, 86, 1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: datapro.reverse(),
                        spanGaps: false,
                    },
                ],
            },
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("barCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SummaryGraphsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("lineCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SummaryGraphsPage.prototype, "lineCanvas", void 0);
    SummaryGraphsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-summary-graphs",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-graphs\summary-graphs.html"*/'<!--\n\n  Generated template for the SummaryGraphsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>summary-graphs</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n<ion-select style="background-color: silver;max-width: 100%;" [(ngModel)]="group"  (ionChange)="setvalues()">\n\n  <ion-option value="today">{{"Today"|translate}}</ion-option>\n\n  <!-- <ion-option value="week">This Week</ion-option> -->\n\n  <ion-option value="last7">{{"Last 7 days"|translate}}</ion-option>\n\n  <ion-option value="month">{{"This Month"|translate}}</ion-option>\n\n  <ion-option value="last30">{{"Last 30 days"|translate}}</ion-option>\n\n</ion-select>\n\n<ion-item>\n\n  <ion-row>\n\n    <ion-col col-6 style="text-align: left;">{{"Revenue"|translate}}:</ion-col>\n\n    <ion-col col-6 style="text-align: end;">{{rev}}</ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6 style="text-align: left;">{{"Expenditure"|translate}}:</ion-col>\n\n    <ion-col col-6 style="text-align: end;">{{exp}}</ion-col>\n\n  </ion-row> <ion-row>\n\n    <ion-col col-6 style="text-align: left;">{{"Profit"|translate}}:</ion-col>\n\n    <ion-col col-6 style="text-align: end;">{{pro}}</ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6 style="text-align: left;">{{"Net Cashflow"|translate}}:</ion-col>\n\n    <ion-col col-6 style="text-align: end;">{{netcash}}</ion-col>\n\n  </ion-row>\n\n</ion-item>\n\n<button ion-button full round style="background-color: black; color: white;" (click)="toggleGL()" *ngIf="isgraph==1">View as List</button>\n\n<button ion-button full round style="background-color: black; color: white;" (click)="toggleGL()" *ngIf="isgraph==0">View as Graph</button>\n\n\n\n\n\n<div class="ion-padding" >\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{"Bar Chart"|translate}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{"Line Chart"|translate}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\summary-graphs\summary-graphs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
    ], SummaryGraphsPage);
    return SummaryGraphsPage;
}());

//# sourceMappingURL=summary-graphs.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the LoanHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoanHomePage = /** @class */ (function () {
    function LoanHomePage(navCtrl, navParams, translateConfigService, barcodeScanner, alertCtrl, sp, getset, toastCtrl, events, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateConfigService = translateConfigService;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.getset = getset;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modal = modal;
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.showloan = 0;
        this.loanvar = [];
        //@ts-ignore
        this.loanq1 = this.translateConfigService.getTranslatedMessage("1. How urgently do you need a loan?").value;
        //@ts-ignore
        this.loanq2 = this.translateConfigService.getTranslatedMessage("2. When would you like to get this loan?").value;
        //@ts-ignore
        this.loanq3 = this.translateConfigService.getTranslatedMessage("3. How much would you like to borrow?").value;
        //@ts-ignore
        this.loanq4 = this.translateConfigService.getTranslatedMessage("4. How long will you need to pay it back?").value;
        //@ts-ignore
        this.loanq5 = this.translateConfigService.getTranslatedMessage("5. What do you need the loan for?").value;
        //@ts-ignore
        this.loanq6 = this.translateConfigService.getTranslatedMessage("6. What's the best way to contact you?").value;
        //@ts-ignore
        this.randovar = this.translateConfigService.getTranslatedMessage("Close");
        this.getUserData();
        this.events.subscribe("cbUpdate:created", function (data) {
            _this.getUserData();
        });
    }
    LoanHomePage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    LoanHomePage.prototype.ionViewDidLoad = function () {
        this.showloan = 0;
        this.loanvar = [];
    };
    LoanHomePage.prototype.uploadbtn = function () {
        this.sp.backupStorage();
        var message = this.translateConfigService.getTranslatedMessage("Online backup ready");
        this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        })
            .present();
    };
    LoanHomePage.prototype.showloanform = function () {
        this.showloan = 1;
    };
    LoanHomePage.prototype.submitloanform = function () {
        var _this = this;
        this.loanvar.push({
            q: this.loanq1,
            a: this.loan1,
        });
        this.loanvar.push({
            q: this.loanq2,
            a: this.loan2,
        });
        this.loanvar.push({
            q: this.loanq3,
            a: this.loan3,
        });
        this.loanvar.push({
            q: this.loanq4,
            a: this.loan4,
        });
        this.loanvar.push({
            q: this.loanq5,
            a: this.loan5,
        });
        this.loanvar.push({
            q: this.loanq6,
            a: this.loan6,
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a
            .firestore()
            .collection("loan_apps")
            .add({
            user: this.userdata,
            loan_details: this.loanvar,
        })
            .then(function (doc) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); })
            .catch(function (err) {
            console.log(err);
        });
        this.loanvar = [];
        this.showloan = 0;
        var msg = this.translateConfigService.getTranslatedMessage("Submitted!");
        this.toastCtrl
            .create({
            //@ts-ignore
            message: msg.value,
            duration: 3000,
        })
            .present();
    };
    LoanHomePage.prototype.cashbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, message1, message2, message3, message4, message5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        message = this.translateConfigService.getTranslatedMessage("Balance");
                        message1 = this.translateConfigService.getTranslatedMessage("Edit");
                        message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
                        message3 = this.translateConfigService.getTranslatedMessage("Update");
                        message4 = this.translateConfigService.getTranslatedMessage("Cancel");
                        message5 = this.translateConfigService.getTranslatedMessage("OK");
                        this.alertCtrl
                            .create({
                            //@ts-ignore
                            message: message.value + ": " + this.userdata.cash_balance,
                            buttons: [
                                {
                                    //@ts-ignore
                                    text: message1.value,
                                    handler: function (data) {
                                        _this.alertCtrl
                                            .create({
                                            inputs: [
                                                //@ts-ignore
                                                { name: "cb", placeholder: message2.value },
                                            ],
                                            buttons: [
                                                {
                                                    //@ts-ignore
                                                    text: message3.value,
                                                    handler: function (data1) {
                                                        if (data1.cb != null) {
                                                            //console.log("Update CB to :"+data1.cb)
                                                            _this.getUserData();
                                                            _this.userdata.cash_balance = parseFloat(data1.cb).toString();
                                                            _this.sp.setUserDat(_this.userdata);
                                                        }
                                                    },
                                                },
                                                {
                                                    //@ts-ignore
                                                    text: message4.value,
                                                    role: "cancel",
                                                },
                                            ],
                                        })
                                            .present();
                                    },
                                },
                                {
                                    //translate these buttons
                                    //@ts-ignore
                                    text: message5.value,
                                    role: "Cancel",
                                },
                            ],
                        })
                            .present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanHomePage.prototype.help = function () {
        var passedData = {
            //youtube link, required text
            page: "Loan Page",
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    LoanHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-loan-home",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\loan-home\loan-home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"Products"|translate}}</ion-title> -->\n\n    <ion-title>{{"Apply for Loan"|translate}}!</ion-title>\n\n    <!-- <ion-buttons end><button ion-button (click)="help()"><ion-icon name="help-circle" style="font-size: 30px;"></ion-icon></button></ion-buttons> -->\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col style="text-align: center; align-items: center;">\n\n        <h1>{{"Apply for Loan"|translate}}!</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- \n\n      Apply for Loan!\n\n      Long Application\n\n      Slow Approval\n\n      High Interest\n\n      Low Borrow Amount\n\n      Quick Application\n\n      Fast Approval\n\n      Lower Interest\n\n      High Borrow Amount\n\n\n\n     -->\n\n     <ion-row style="padding-left: 10px; padding-right: 10px;">\n\n      {{"loan descrip"|translate}}\n\n     </ion-row>\n\n\n\n    <ion-row padding>\n\n      <ion-col style="text-align: left; align-items: left;">\n\n      <div style="color: gray;" padding>{{"Traditional"|translate}}</div>\n\n      <li>{{"Long Application"|translate}}</li>\n\n      <li>{{"Slow Approval"|translate}}</li>\n\n      <li>{{"High Interest"|translate}}</li>\n\n      <li>{{"Low Borrow Amount"|translate}}</li>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div style="font-family: \'Megrim\'; color: orange;" padding>OPEN</div>\n\n        <li>{{"Quick Application"|translate}}</li>\n\n      <li>{{"Fast Approval"|translate}}</li>\n\n      <li>{{"Lower Interest"|translate}}</li>\n\n      <li>{{"High Borrow Amount"|translate}}</li>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <button ion-button style="background-color: orange;" (click)="showloanform()"> {{"Interested in Applying for Loan"|translate}}</button>\n\n\n\n    <ion-card *ngIf="showloan==1" padding>\n\n      {{loanq1}}\n\n      <ion-input style="background-color: #d8d7d7;" placeholder="{{\'Enter Details Here\'|translate}}"  [(ngModel)]="loan1"></ion-input>\n\n     {{loanq2}}\n\n      <ion-input style="background-color: #d8d7d7;"  placeholder="{{\'Enter Details Here\'|translate}}" [(ngModel)]="loan2"></ion-input>{{loanq3}}\n\n     \n\n      <ion-input style="background-color: #d8d7d7;"  placeholder="{{\'Enter Details Here\'|translate}}" [(ngModel)]="loan3"></ion-input>{{loanq4}}\n\n      \n\n      <ion-input style="background-color: #d8d7d7;"  placeholder="{{\'Enter Details Here\'|translate}}" [(ngModel)]="loan4"></ion-input>{{loanq5}}\n\n     \n\n      <ion-input style="background-color: #d8d7d7;"  placeholder="{{\'Enter Details Here\'|translate}}" [(ngModel)]="loan5"></ion-input>{{loanq6}}\n\n      \n\n      <ion-input style="background-color: #d8d7d7;"  placeholder="{{\'Enter Details Here\'|translate}}" [(ngModel)]="loan6"></ion-input>\n\n      <button ion-button style="background-color: orange;" (click)="submitloanform()">{{"Send Details"|translate}}</button>\n\n    </ion-card>\n\n\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\loan-home\loan-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], LoanHomePage);
    return LoanHomePage;
}());

//# sourceMappingURL=loan-home.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleproduct_singleproduct__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addproduct_addproduct__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_product_category_add_product_category__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the TransactionProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionProductPage = /** @class */ (function () {
    function TransactionProductPage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl, alertCtrl, platform, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.app = app;
        this.updateOrCreate = "Create Receipt";
        this.itname = "";
        this.calcitems = [];
        this.recitemslist = [];
        this.event = false;
        this.event1 = false;
        this.searchterm = "";
        this.selectedCat = [];
        this.filteredList = [];
        this.listArray = [];
        this.tempprodlist = [{}];
        this.singleitemname = "";
        this.showmanual = 0;
        this.datlist = [];
        this.event = false;
        this.showmanual = 0;
        this.itname = "";
        this.events.subscribe("productUpdate:created", function (data) {
            _this.ionViewDidLoad();
        });
        this.events.subscribe("addRecProd:created", function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            _this.updateOrCreate = "Update Receipt";
            var tempdat = JSON.parse(data);
            _this.getProducts();
            console.log(tempdat);
            tempdat.forEach(function (element) {
                _this.event = true;
                // this.itemsname.push(element.name)
                // this.itemsprice.push(element.price);
                // this.itemsqty.push(element.qty)
                if (_this.listProducts.length != 0) {
                    _this.listProducts.forEach(function (element1) {
                        if (element1.name == element.name) {
                            element1.qty = element.qty;
                            element1.discount = element.discount;
                        }
                    });
                }
                if (element.code == "000000") {
                    _this.calcitems.push(element);
                }
            });
            console.log(_this.calcitems);
        });
        this.events.subscribe("addSingleProd:created", function (data, index, fulldat) { return __awaiter(_this, void 0, void 0, function () {
            var tempdat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ENTERED!");
                        console.log("Received 1 " + data + index);
                        this.recitemslist = JSON.parse(fulldat);
                        this.index = parseInt(index);
                        tempdat = JSON.parse(data);
                        this.event1 = true;
                        return [4 /*yield*/, this.getProducts()];
                    case 1:
                        _a.sent();
                        this.price = tempdat.price;
                        this.filteredProductPrice(tempdat.price);
                        return [2 /*return*/];
                }
            });
        }); });
    }
    TransactionProductPage.prototype.doRefresh = function (refresher) {
        this.ionViewDidLoad();
        refresher.complete();
    };
    TransactionProductPage.prototype.navAdd = function (num) {
        if (num == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addproduct_addproduct__["a" /* AddProductPage */]);
        }
        else if (num == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_product_category_add_product_category__["a" /* AddProductCategoryPage */]);
        }
    };
    TransactionProductPage.prototype.updateName = function () {
        if (this.itname == "") {
            this.event1 = false;
            this.event = false;
            this.showmanual = 0;
            this.itname = "";
            this.ionViewDidLoad();
            this.navCtrl.parent.select(1);
        }
        else {
            console.log("Create Rec");
            var data1 = {
                code: "000000",
                cat: "NIL",
                stock_qty: 0,
                name: this.itname,
                price: this.price,
                qty: this.recitemslist[this.index].qty,
                discount: this.recitemslist[this.index].discount,
            };
            this.singleProduct(data1);
        }
    };
    TransactionProductPage.prototype.ionViewDidLeave = function () {
        this.updateOrCreate = "Create Receipt";
    };
    TransactionProductPage.prototype.reset = function () {
        this.event1 = false;
        this.event = false;
        this.showmanual = 0;
        this.itname = "";
        this.ionViewDidLoad();
        this.navCtrl.parent.select(1);
    };
    TransactionProductPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TransactionProductPage");
        this.getProducts();
        this.getCategories();
    };
    TransactionProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    TransactionProductPage.prototype.addUp = function (index) {
        this.listProducts[index].qty++;
    };
    TransactionProductPage.prototype.addDown = function (index) {
        if (this.listProducts[index].qty > 0) {
            this.listProducts[index].qty--;
        }
    };
    TransactionProductPage.prototype.sellProd = function (product) {
        product.qty = 1;
    };
    TransactionProductPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp
                .getProducts()
                .then(function (val) {
                if (_this.event != true) {
                    _this.listProducts = JSON.parse(val);
                    console.log(_this.listProducts + "yo");
                    if (_this.listProducts != null) {
                        _this.listProducts.forEach(function (element) {
                            element.qty = 0;
                        });
                    }
                }
                if (_this.event1 != true) {
                    if (_this.listProducts != null) {
                        _this.filteredProduct();
                    }
                }
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    TransactionProductPage.prototype.filteredProduct = function () {
        var _this = this;
        this.filteredList = this.listProducts.filter(function (item) {
            //console.log(this.searchterm);
            //console.log(item);
            if (item.name.toLowerCase().includes(_this.searchterm.toLowerCase())) {
                if (_this.selectedCat.length > 0) {
                    for (var i = 0; i < _this.selectedCat.length; i++) {
                        if (_this.selectedCat == null || item.cat.includes(_this.selectedCat[i])) {
                            return true;
                        }
                    }
                }
                else {
                    return true;
                }
            }
        });
    };
    TransactionProductPage.prototype.addwholesaledisc = function (val, product) {
        //product.discount = ((product.price - product.wholesale_price) / product.price) * 100;
        if (val == "r") {
            product.discount = null;
        }
        else {
            product.discount = ((product.price - product.wholesale_price) / product.price) * 100;
        }
    };
    TransactionProductPage.prototype.remwholesaledisc = function (product) {
        product.discount = null;
    };
    TransactionProductPage.prototype.singleProduct = function (product) {
        var _this = this;
        var tempqty = this.recitemslist[this.index].qty;
        var tempdisc = this.recitemslist[this.index].discount;
        if (this.price == product.price) {
            //console.log("Discount == Regular");
            tempdisc = this.recitemslist[this.index].discount;
        }
        else if (this.price == product.wholesale_price) {
            //console.log("discount==wholesale");
            var wholesaledisc = ((product.price - product.wholesale_price) / product.price) * 100;
            tempdisc = this.recitemslist[this.index].discount + wholesaledisc;
        }
        //const tempdsc = this.recitemslist[this.index].disc;
        //check if search w wholesale or retail price
        this.recitemslist[this.index] = product;
        this.recitemslist[this.index].qty = tempqty;
        this.recitemslist[this.index].discount = tempdisc;
        var tempJSON = { itemslist: this.recitemslist };
        var myObjStr = JSON.stringify(tempJSON);
        this.showmanual = 0;
        this.itname = "";
        this.ionViewDidLoad();
        this.navCtrl.parent.select(1);
        this.delay(300).then(function (any) {
            _this.events.publish("genRec:created", myObjStr);
            console.log("Sent: " + myObjStr);
            _this.getProducts();
            _this.event = false;
            _this.event1 = false;
        });
        this.getProducts();
    };
    TransactionProductPage.prototype.setfilter = function (price) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.listProducts.filter(function (item) {
                                console.log(item.price + " and " + price);
                                if (item.price == price || item.wholesale_price == price) {
                                    return true;
                                }
                                else {
                                    false;
                                }
                            })];
                    case 1:
                        _a.filteredList = _b.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    TransactionProductPage.prototype.filteredProductPrice = function (price) {
        var _this = this;
        this.setfilter(price).then(function () {
            if (_this.filteredList.length == 0) {
                _this.showmanual = 1;
                console.log("No Items");
                // create event and send back
                //at other end if event received,
                //   const message1 = this.translateConfigService.getTranslatedMessage("Alert!");
                //   const message20 = this.translateConfigService.getTranslatedMessage("There is no item with ");
                //   const message21 = this.translateConfigService.getTranslatedMessage(
                //     " price in database. Please type the item name:",
                //   );
                //   const message3 = this.translateConfigService.getTranslatedMessage("Enter Name Here");
                //   const message4 = this.translateConfigService.getTranslatedMessage("Cancel");
                //   const message5 = this.translateConfigService.getTranslatedMessage("Update Receipt");
                //   const alert = this.alertCtrl
                //     .create({
                //       // @ts-ignore
                //       title: message1.value, //translate this
                //       // @ts-ignore
                //       message: message20.value + price + message21.value,
                //       enableBackdropDismiss: true,
                //       inputs: [
                //         {
                //           name: "singleitemname",
                //           // @ts-ignore
                //           placeholder: message3.value,
                //         },
                //       ],
                //       buttons: [
                //         {
                //           // @ts-ignore
                //           text: message4.value,
                //           role: "cancel",
                //           handler: data => {
                //         this.event1 = false;
                //         this.event = false;
                //        //(this.navCtrl.parent as Tabs).select(2).catch(err=>{
                //        //  console.log("ERRORZONE"+ err)
                //       // });
                //           },
                //         },
                //         {
                //           // @ts-ignore
                //           text: message5.value,
                //           handler: data => {
                //   if (data.singleitemname == "") {
                //     this.event1 = false;
                //     this.event = false;
                //    //(this.navCtrl.parent as Tabs).select(2);
                //   } else {
                //     console.log("Create Rec");
                //     const data1 = {
                //       code: "000000",
                //       cat: "NIL",
                //       stock_qty: 0,
                //       name: data.singleitemname,
                //       price: price,
                //       qty: this.recitemslist[this.index].qty,
                //       discount: this.recitemslist[this.index].discount,
                //     };
                //     this.singleProduct(data1);
                //   }
                // },
                //         },
                //       ],
                //     })
                //     .present()
            }
        });
    };
    TransactionProductPage.prototype.createRec = function () {
        //console.log("bangin");
        var _this = this;
        var tempJSON = { itemslist: [] };
        this.listProducts.forEach(function (element) {
            if (element.qty > 0) {
                tempJSON.itemslist.push(element);
                console.log("pushed" + element);
            }
        });
        if (this.calcitems.length > 0) {
            console.log(this.calcitems);
            console.log(this.calcitems.length);
            this.calcitems.forEach(function (element) {
                tempJSON.itemslist.push(element);
            });
        }
        tempJSON.itemslist.forEach(function (element) {
            if (element.discount) {
            }
            else {
                element.discount = 0;
            }
        });
        this.listProducts = [];
        this.calcitems = [];
        this.listArray = [];
        this.recitemslist = [];
        console.log(this.datlist);
        var myObjStr = JSON.stringify(tempJSON);
        this.navCtrl.parent.select(1);
        this.delay(300).then(function (any) {
            _this.events.publish("genRec:created", myObjStr);
            console.log("Sent: " + myObjStr);
            _this.getProducts();
            _this.event = false;
            _this.event1 = false;
            //this.listProducts=
            //your task after delay.
        });
        this.getProducts();
    };
    TransactionProductPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionProductPage.prototype.viewEditProduct = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__singleproduct_singleproduct__["a" /* SingleProductPage */], { data: data });
    };
    TransactionProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-transaction-product",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\transaction-product\transaction-product.html"*/'<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n <ion-fab left bottom>\n\n   <button ion-fab style="background-color: green;"><ion-icon name="add"></ion-icon></button>\n\n   <ion-fab-list side="top">\n\n     <button ion-button style="background-color:green;" (click)="navAdd(1)">{{ "Add Product" | translate }}</button>\n\n     <button ion-button style="background-color: green;" (click)="navAdd(2)">{{ "Add Category" | translate }}</button>\n\n   </ion-fab-list>\n\n </ion-fab>\n\n <div *ngIf="showmanual==0">\n\n  <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n\n\n  <ion-item>\n\n    <ion-label>{{"Select category"|translate}}</ion-label>\n\n    <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n      <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n</div>\n\n\n\n\n\n  <!-- <ion-card>\n\n      <ion-grid line>\n\n        <ion-row>\n\n        <ion-col col-2>\n\n          <ion-row>\n\n            <ion-avatar>\n\n                <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n\n              </ion-avatar>\n\n            </ion-row>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                  Shan Noodle\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  568 - N/A?\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                      <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                      <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n\n                  </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 </ion-col>\n\n                <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6></ion-col>\n\n                <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n\n              </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </ion-card>  -->\n\n\n\n    <ion-card *ngIf="showmanual==1" padding>\n\n     <h2> {{"There is no item with "|translate}} {{price}} {{" price in database. Please type the item name:"|translate}} </h2>\n\n      <ion-input autofocus="true" type="text" [(ngModel)]="itname" placeholder="{{\'Enter Name Here\'|translate}}"></ion-input>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button full (click)="updateName()"> {{"CANCEL"|translate}}</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button full (click)="updateName()"> {{"Update Receipt"|translate}}</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n     \n\n     \n\n      \n\n    </ion-card>\n\n  \n\n\n\n\n\n\n\n  <ion-list inset *ngFor="let product of filteredList; let i=index">\n\n\n\n    <ion-card style="border: solid 1px gray;">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                {{product.name}}\n\n              </ion-col>\n\n              <ion-col col-6 *ngIf="product.qty==0">\n\n                <ion-buttons end>\n\n                  <button ion-button (click)="sellProd(product)">Sell</button>\n\n                </ion-buttons>\n\n              </ion-col>\n\n              <ion-col col-2 style="border: solid silver; text-align: center;" *ngIf="event1==false&&product.qty>0">\n\n                <ion-icon name="add" style=" color: green" (click)="addUp(i)"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-2 style="border: solid silver; text-align: center;" *ngIf="event1==false&&product.qty>0">\n\n                {{product.qty}}\n\n              </ion-col>\n\n              <ion-col col-2 style="border: solid silver; text-align: center;" *ngIf="event1==false&&product.qty>0">\n\n                <ion-icon name="remove" style=" color: red" (click)="addDown(i)"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-col>\n\n        </ion-row>\n\n            <!-- <div *ngIf="event1==false">\n\n            <ion-row *ngIf="product.qty>0">\n\n              <ion-col *ngIf="product.discount==null || product.discount==0">\n\n                <button full ion-button style="font-size: 0.9rem;" (click)="addwholesaledisc(product)">{{"Add Wholesale Discount"|translate}}</button>\n\n              </ion-col>\n\n              <ion-col *ngIf="product.discount==(((product.price - product.wholesale_price) / product.price) * 100)">\n\n                  <button full ion-button style="font-size: 0.9rem;" (click)="remwholesaledisc(product)">{{"Remove Wholesale Discount"|translate}}</button>\n\n                </ion-col>\n\n            </ion-row>\n\n          </div> -->\n\n\n\n<!-- \n\n            <ion-row>\n\n              <ion-col col-4 style="color: grey; font-size: 10px;"> {{"Retail Price"|translate}} {{product.price}}\n\n              </ion-col>\n\n              <ion-col col-4 style="color: grey; font-size: 10px; text-align: center;"> {{"Wholesale Price"|translate}}\n\n                {{product.wholesale_price}} </ion-col>\n\n              <ion-col col-4 style="color: grey; font-size: 10px; text-align: end;"> {{"Category"|translate}}\n\n                {{product.cat}} </ion-col>\n\n            </ion-row> -->\n\n\n\n            <!-- <div *ngIf="product.qty==0"> -->\n\n              <ion-row>\n\n                <ion-col col-8>\n\n                  <div radio-group (ionChange) = "addwholesaledisc($event, product)">\n\n        \n\n                       \n\n                   \n\n                      <ion-label style="color: grey; font-size: 12px;"> <ion-radio value="r" item-left checked *ngIf="product.qty>0"></ion-radio> &nbsp; {{"Retail Price"|translate}} : {{product.price}}</ion-label>\n\n                  \n\n\n\n                      \n\n                      <ion-label style="color: grey; font-size: 12px;"><ion-radio value="w" item-left *ngIf="product.qty>0"></ion-radio> &nbsp; {{"Wholesale Price"|translate}} : {{product.wholesale_price}}</ion-label>\n\n                      <ion-label style="color: grey; font-size: 12px;">{{"Category"|translate}} : {{product.cat}}</ion-label>\n\n                      <ion-label>{{"Stock"|translate}}: {{product.stock_qty}}</ion-label>\n\n                   \n\n                  </div>\n\n                </ion-col>\n\n\n\n                <ion-col col-4>\n\n                  <ion-row>\n\n                    <ion-avatar>\n\n                      <img [src]="product.url">\n\n                    </ion-avatar>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <!-- <ion-col col-6 style="color: grey; font-size: 10px;">{{"Retail Price"|translate}} : {{product.price}} </ion-col>    -->\n\n \n\n              </ion-row> \n\n              <!-- <ion-row>\n\n                  <ion-col style="color: grey; font-size: 10px; text-align: left;">  {{"Category"|translate}} : {{product.cat}} </ion-col>  \n\n              </ion-row> -->\n\n            <!-- </div>\n\n            <div *ngIf="product.qty!=0 && product.discount!=(((product.price - product.wholesale_price) / product.price) * 100)">\n\n                <ion-row>\n\n                    <ion-col col-6 style="color: grey; font-size: 10px;"><b>{{"Retail Price"|translate}} : {{product.price}} </b> </ion-col>   \n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-col col-6 style="color: grey; font-size: 10px; text-align: left;"> {{"Wholesale Price"|translate}} : {{product.wholesale_price}} </ion-col>\n\n                    </ion-row>  \n\n                  <ion-row>\n\n                      <ion-col style="color: grey; font-size: 10px; text-align: left;">  {{"Category"|translate}} : {{product.cat}} </ion-col>  \n\n                  </ion-row>\n\n                </div>\n\n                <div *ngIf="product.qty!=0 && product.discount==(((product.price - product.wholesale_price) / product.price) * 100)">\n\n                    <ion-row>\n\n                        <ion-col col-6 style="color: grey; font-size: 10px;">{{"Retail Price"|translate}} : {{product.price}}  </ion-col>   \n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <ion-col col-6 style="color: grey; font-size: 10px; text-align: left;"> <b>{{"Wholesale Price"|translate}} : {{product.wholesale_price}} </b></ion-col>\n\n                        </ion-row>  \n\n                      <ion-row>\n\n                          <ion-col style="color: grey; font-size: 10px; text-align: left;">  {{"Category"|translate}} : {{product.cat}} </ion-col>  \n\n                      </ion-row>\n\n                </div> -->\n\n            \n\n        <ion-row>\n\n          <ion-col col-12> \n\n            <button ion-button full end color="dark" (click)="viewEditProduct(product)">{{"View / Edit"|translate}}</button> \n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row>\n\n          <ion-col col-12><button ion-button full end color="dark">{{ "Update Stock" | translate }}</button></ion-col>\n\n        </ion-row> -->\n\n        <ion-row *ngIf="event1==true">\n\n          <ion-col col-12> <button ion-button full end color="dark"\n\n              (click)="singleProduct(product)">{{"Add"|translate}}</button> </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n  <ion-grid>\n\n    <ion-row *ngIf="event1==false">\n\n      <ion-col>\n\n        <button ion-button (click)="createRec()" full\n\n          style="background-color: #222">{{updateOrCreate|translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="event1==true">\n\n      <ion-col> \n\n        <button ion-button (click)="reset()" full style="background-color: #222">{{"CANCEL"|translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-footer>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\transaction-product\transaction-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TransactionProductPage);
    return TransactionProductPage;
}());

//# sourceMappingURL=transaction-product.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, sp, formBuilder, toastCtrl, translateConfigService, alertCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.translateConfigService = translateConfigService;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.user = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.oldUser = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.listOfBType = [];
        this.listOfCurrency = [];
        this.listOfLang = [];
        (this.temptimes = this.navParams.get("timestamp")),
            (this.tempuser = this.navParams.get("user")),
            console.log(this.temptimes + " " + this.tempuser),
            (this.user = {
                business_address: "",
                business_name: "",
                cash_balance: "",
                currency: "",
                created: "",
                language: "en",
                owner: "",
                owner_name: "",
                ph_no: "",
                businesstype: "",
                taxrate: 0.0,
                discount: 0.0,
            });
        this.oldUser = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.submitButton = false;
        this.loadDropDowns();
        this.formUser = this.formBuilder.group({
            business_name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            business_address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            owner_name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            businesstype: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            ph_no: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            currency: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            cash_balance: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            discount: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            taxrate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            language: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
        });
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserProfilePage");
        this.getUser();
        this.oldUser = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"])(this.user);
    };
    UserProfilePage.prototype.loadDropDowns = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
            .firestore()
            .collection("sign-up")
            .get()
            .then(function (doc) {
            doc.docs[0].data().businessType.forEach(function (b) {
                _this.listOfBType.push(b);
            });
            doc.docs[0].data().currency.forEach(function (c) {
                _this.listOfCurrency.push(c);
            });
            doc.docs[0].data().language.forEach(function (l) {
                _this.listOfLang.push(l);
            });
        });
    };
    UserProfilePage.prototype.getUser = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getUserDat().then(function (user) {
                if (user == null) {
                    //create user doc in docs
                    __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
                        .firestore()
                        .collection("users")
                        .add({
                        // file_name: this.text,
                        created: _this.navParams.get("timestamp"),
                        owner: _this.navParams.get("uid"),
                        owner_name: __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.displayName,
                        business_name: "",
                        businesstype: "",
                        business_address: "",
                        ph_no: "",
                        language: "en",
                        currency: "USD",
                        discount: 0.0,
                        taxrate: 0.0,
                        cash_balance: "",
                        categories: [{ name: "Example" }],
                        products: [
                            {
                                cat: "Example",
                                code: "0000",
                                cost: "0",
                                name: "Example Product",
                                price: "0",
                                stock_qty: "0",
                                url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
                                wholesale_price: "0",
                            },
                        ],
                        transactions: [
                            {
                                datetime: new Date(),
                                discount: 0,
                                discountlist: [],
                                itemslist: [
                                    { cat: "Example", code: "0000", cost: "0", name: "Example Product", price: "0", stock_qty: "0" },
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
                        .then(function () {
                        _this.sp.setMem();
                        _this.user.owner = _this.navParams.get("uid");
                        _this.user.created = _this.navParams.get("timestamp");
                        _this.oldUser.owner = _this.navParams.get("uid");
                        _this.user.created = _this.navParams.get("timestamp");
                    });
                }
                else {
                    _this.user = JSON.parse(user);
                }
            });
        });
    };
    UserProfilePage.prototype.setUser = function () {
        var _this = this;
        if (!this.formUser.valid) {
            console.log("invalid user update");
            var message = this.translateConfigService.getTranslatedMessage("Incomplete");
            this.toastCtrl
                .create({
                // @ts-ignore
                message: message.value,
                duration: 1000,
            })
                .present();
        }
        else {
            this.translateConfigService.setLanguage(this.user.language);
            this.sp.storageReady().then(function () {
                _this.sp
                    .setUserDat(_this.user)
                    .then(function () {
                    console.log("new user data saved in storage");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
                })
                    .catch(function (error) {
                    console.error(error);
                });
            });
            var message = this.translateConfigService.getTranslatedMessage("Update profile successful");
            this.toastCtrl
                .create({
                // @ts-ignore
                message: message.value,
                duration: 2000,
            })
                .present();
        }
    };
    UserProfilePage.prototype.onChange = function () {
        this.submitButton = !Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["isEqual"])(this.user, this.oldUser);
    };
    UserProfilePage.prototype.help = function () {
        var passedData = {
            //youtube link, required text
            page: "Profile Page",
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-user-profile",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\user-profile\user-profile.html"*/'<!--\n\n  Generated template for the UserProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'User Profile\' | translate }}</ion-title>\n\n    <ion-buttons end><button ion-button (click)="help()"><ion-icon name="help-circle" style="font-size: 30px;"></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="formUser">\n\n    <ion-list inset>\n\n      <ion-item>\n\n        <ion-label>{{ \'Business Name\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="business_name" [(ngModel)]="user.business_name" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Full Business Address\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="business_address" [(ngModel)]="user.business_address" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Owner\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="owner_name" [(ngModel)]="user.owner_name" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="globe" color="semi-light" class="icon"></ion-icon>\n\n        <ion-label>{{"Business Type"|translate}}</ion-label>\n\n        <ion-select formControlName="businesstype" [(ngModel)]="user.businesstype" (ionChange)="onChange()">\n\n          <ion-option *ngFor="let b of listOfBType" value="{{ b }}">{{ b }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Phone Number\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="ph_no" [(ngModel)]="user.ph_no" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="logo-usd" color="semi-light" class="icon"></ion-icon>\n\n        <ion-label>{{"Currency"|translate}}</ion-label>\n\n        <ion-select formControlName="currency" [(ngModel)]="user.currency" (ionChange)="onChange()">\n\n          <ion-option *ngFor="let c of listOfCurrency" value = "{{ c }}">{{ c }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Balance\' | translate }}</ion-label>\n\n        <ion-input type="number" formControlName="cash_balance" [(ngModel)]="user.cash_balance" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Usual Discount %\' | translate }}</ion-label>\n\n        <ion-input type="number" formControlName="discount" [(ngModel)]="user.discount" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Tax Rate %:\' | translate }}</ion-label>\n\n        <ion-input type="number" formControlName="taxrate" [(ngModel)]="user.taxrate" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"Language"|translate}}</ion-label>\n\n        <ion-select formControlName="language" [(ngModel)]="user.language" (ionChange)="onChange()">\n\n          <ion-option *ngFor="let l of listOfLang" value="{{ l }}">{{ l }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button *ngIf="submitButton" ion-button block color="primary" (click)="setUser()"  color="dark">{{\'Update Profile\'| translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addproduct_addproduct__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_bluetooth_serial__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_printer_printer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_geolocation_geolocation_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_firebase_cloud_messaging_fcm_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_firebase_app__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_login_login_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_sign_up_sign_up_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_transaction_home_transaction_home_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_dashboard_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_addproduct_addproduct_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_singleproduct_singleproduct__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_singleproduct_singleproduct_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_all_transaction_all_transaction__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_all_transaction_all_transaction_module__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var config = {
    apiKey: "AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A",
    authDomain: "open-fintech.firebaseapp.com",
    databaseURL: "https://open-fintech.firebaseio.com",
    projectId: "open-fintech",
    storageBucket: "open-fintech.appspot.com",
    messagingSenderId: "1001643033524",
    measurementId: "G-CECMRG504L",
};
__WEBPACK_IMPORTED_MODULE_26_firebase_app__["initializeApp"](config);
// language translation service
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "../assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { preloadModules: true }, {
                    links: [
                        { loadChildren: '../pages/add-product-category/add-product-category.module#AddProductCategoryPageModule', name: 'AddProductCategoryPage', segment: 'add-product-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-transaction/all-transaction.module#AllTransactionPageModule', name: 'AllTransactionPage', segment: 'all-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-businesstips/coach-businesstips.module#CoachBusinesstipsPageModule', name: 'CoachBusinesstipsPage', segment: 'coach-businesstips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-goals/coach-goals.module#CoachGoalsPageModule', name: 'CoachGoalsPage', segment: 'coach-goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-home/coach-home.module#CoachHomePageModule', name: 'CoachHomePage', segment: 'coach-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-coach/coach-coach.module#CoachCoachPageModule', name: 'CoachCoachPage', segment: 'coach-coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense-general/expense-general.module#ExpenseGeneralPageModule', name: 'ExpenseGeneralPage', segment: 'expense-general', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense-transaction/expense-transaction.module#ExpenseTransactionPageModule', name: 'ExpenseTransactionPage', segment: 'expense-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expenses-home/expenses-home.module#ExpensesHomePageModule', name: 'ExpensesHomePage', segment: 'expenses-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income-transaction/income-transaction.module#IncomeTransactionPageModule', name: 'IncomeTransactionPage', segment: 'income-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loan-home/loan-home.module#LoanHomePageModule', name: 'LoanHomePage', segment: 'loan-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-accounts/summary-accounts.module#SummaryAccountsPageModule', name: 'SummaryAccountsPage', segment: 'summary-accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-graphs/summary-graphs.module#SummaryGraphsPageModule', name: 'SummaryGraphsPage', segment: 'summary-graphs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-home/summary-home.module#SummaryHomePageModule', name: 'SummaryHomePage', segment: 'summary-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-summary/summary-summary.module#SummarySummaryPageModule', name: 'SummarySummaryPage', segment: 'summary-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-product/transaction-product.module#TransactionProductPageModule', name: 'TransactionProductPage', segment: 'transaction-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-home/transaction-home.module#TransactionHomePageModule', name: 'TransactionHomePage', segment: 'transaction-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-stock/update-stock.module#UpdateStockPageModule', name: 'UpdateStockPage', segment: 'update-stock', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_sign_up_sign_up_module__["SignUpPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_transaction_home_transaction_home_module__["TransactionHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_all_transaction_all_transaction_module__["AllTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_dashboard_module__["a" /* DashboardPageModule */],
                __WEBPACK_IMPORTED_MODULE_31__pages_addproduct_addproduct_module__["a" /* AddProductPageModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_singleproduct_singleproduct_module__["a" /* SingleProductPageModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClient */]],
                    },
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_all_transaction_all_transaction__["a" /* AllTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
                __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_20__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_22__providers_printer_printer__["a" /* PrinterProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__providers_geolocation_geolocation_service__["a" /* GeolocationService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_firebase_cloud_messaging_fcm_service__["a" /* FcmService */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_product_transaction_product__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_us_contact_us__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the TransactionHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionHomePage = /** @class */ (function () {
    //Calculator = CalculatorPage;
    function TransactionHomePage(navCtrl, navParams, translateConfigService, toastCtrl, sp, events, alertCtrl, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateConfigService = translateConfigService;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.AllTransactions = __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__["a" /* AllTransactionPage */];
        this.IncomeTransactions = __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__["a" /* IncomeTransactionPage */];
        //ExpenseTransactions = ExpenseTransactionPage;
        this.ExpenseTransactions = __WEBPACK_IMPORTED_MODULE_5__transaction_product_transaction_product__["a" /* TransactionProductPage */];
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        //this.getUserData();
        //this.tutorial();
        if (this.navParams.get("data") == "newUser") {
            this.tutorial();
        }
        this.events.subscribe("newUser", function (data) {
            //this.events.unsubscribe("newUser");
            _this.tutorial();
        });
        this.events.subscribe("cbUpdate:created", function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    TransactionHomePage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("ionViewDidLoad TransactionHomePage");
                // document.addEventListener("backbutton",function(e) {
                //   console.log("disable back button")
                // }, false);
                if (this.navParams.get("lang") != this.userdata.language) {
                    this.userdata.language = this.navParams.get("lang");
                }
                this.delay(3000).then(function () {
                    _this.getUserData();
                });
                return [2 /*return*/];
            });
        });
    };
    TransactionHomePage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionHomePage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.sp.storageReady().then(function () {
                            _this.sp
                                .getUserDat()
                                .then(function (val) {
                                _this.userdata = JSON.parse(val);
                                console.log(_this.userdata);
                                _this.setUsrLang();
                                resolve();
                            })
                                .catch(function (err) {
                                alert("Error: " + err);
                            });
                        });
                    })];
            });
        });
    };
    TransactionHomePage.prototype.openCalc = function () {
        //this.navCtrl.push(CalculatorPage);
        this.tabRef.select(3);
    };
    TransactionHomePage.prototype.uploadbtn = function () {
        this.sp.backupStorage();
        var message = this.translateConfigService.getTranslatedMessage("Online backup ready");
        this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        })
            .present();
    };
    TransactionHomePage.prototype.cashbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, message1, message2, message3, message4, message5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        message = this.translateConfigService.getTranslatedMessage("Balance");
                        message1 = this.translateConfigService.getTranslatedMessage("Edit");
                        message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
                        message3 = this.translateConfigService.getTranslatedMessage("Update");
                        message4 = this.translateConfigService.getTranslatedMessage("Cancel");
                        message5 = this.translateConfigService.getTranslatedMessage("OK");
                        this.alertCtrl
                            .create({
                            //@ts-ignore
                            message: message.value + ": " + this.userdata.cash_balance,
                            buttons: [
                                {
                                    //@ts-ignore
                                    text: message1.value,
                                    handler: function (data) {
                                        _this.alertCtrl
                                            .create({
                                            inputs: [
                                                //@ts-ignore
                                                { name: "cb", placeholder: message2.value },
                                            ],
                                            buttons: [
                                                {
                                                    //@ts-ignore
                                                    text: message4.value,
                                                    role: "cancel",
                                                },
                                                {
                                                    //@ts-ignore
                                                    text: message3.value,
                                                    handler: function (data1) {
                                                        if (data1.cb != null && data1.cb != "" && data1.cb != undefined) {
                                                            //console.log("Update CB to :"+data1.cb)
                                                            _this.getUserData();
                                                            _this.userdata.cash_balance = parseFloat(data1.cb).toString();
                                                            _this.sp.setUserDat(_this.userdata);
                                                        }
                                                    },
                                                },
                                            ],
                                        })
                                            .present();
                                    },
                                },
                                {
                                    //translate these buttons
                                    //@ts-ignore
                                    text: message5.value,
                                    role: "Cancel",
                                },
                            ],
                        })
                            .present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionHomePage.prototype.setUsrLang = function () {
        this.translateConfigService.setLanguage(this.userdata.language);
        console.log(this.userdata.language);
    };
    TransactionHomePage.prototype.tutorial = function () {
        var _this = this;
        var msg = this.translateConfigService.getTranslatedMessage("Create New Sales");
        var passedData = {
            //youtube link, required text
            //@ts-ignore
            page: msg.value,
        };
        var msg1 = this.translateConfigService.getTranslatedMessage("Help Button");
        var msg2 = this.translateConfigService.getTranslatedMessage("For any queries about a page, click the ? icon in the top right for more information");
        var msg3 = this.translateConfigService.getTranslatedMessage("For further queries, you can reach us through the Contact Us page");
        var msg4 = this.translateConfigService.getTranslatedMessage("Contact Us");
        var msg5 = this.translateConfigService.getTranslatedMessage("Okay");
        var tutorialModal = this.modal.create("HelpPage", { data: passedData });
        tutorialModal.present();
        tutorialModal.onDidDismiss(function () {
            var helpAlert = _this.alertCtrl.create({
                //@ts-ignore
                title: msg1.value,
                //@ts-ignore
                subTitle: msg2.value,
                //@ts-ignore
                message: msg3.value,
                buttons: [
                    {
                        //@ts-ignore
                        text: msg4.value,
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__contact_us_contact_us__["a" /* ContactUsPage */]);
                        },
                    },
                    {
                        //@ts-ignore
                        text: msg5.value,
                        role: "cancel",
                    },
                ],
            });
            helpAlert.present();
        });
    };
    TransactionHomePage.prototype.help = function () {
        var _this = this;
        var msg = this.translateConfigService.getTranslatedMessage("Create New Sales");
        var temptxt = [];
        var tempvid = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .firestore()
            .collection("tutorial")
            .get()
            .then(function (doc) {
            //console.log(doc)
            doc.docs.forEach(function (element) {
                console.log(element);
                if (element.id == _this.userdata.language) {
                    element.data().text.forEach(function (element1) {
                        if (element1.page == "Sale") {
                            temptxt.push(element1);
                        }
                    });
                    element.data().video.forEach(function (element2) {
                        if (element2.page == "Sale") {
                            tempvid.push(element2);
                        }
                    });
                    tempvid = element.data().video;
                }
            });
        });
        var passedData = {
            //youtube link, required text
            //@ts-ignore
            page: msg.value,
            text: temptxt,
            video: tempvid,
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    TransactionHomePage.prototype.contactpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
    ], TransactionHomePage.prototype, "tabRef", void 0);
    TransactionHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-transaction-home",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\transaction-home\transaction-home.html"*/'<!--\n\n  Generated template for the TransactionHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"Sales"|translate}}</ion-title> -->\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()" style="border: solid grey">{{"Backup Online"|translate}}<ion-icon name="cloud-upload" style="align-self: center; color: white; padding-left: 10px;"></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()" style="border: solid grey"> {{"Cash Balance"|translate}} <ion-icon name="logo-usd" style="align-self: center; color: white; padding-left: 10px;"></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="help()"><ion-icon name="help-circle" style="font-size: 30px;"></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="contactpg()" style="align-self: right; background-color:#222"><ion-icon name="contact" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n \n\n  \n\n<ion-content padding>\n\n  \n\n  <ion-tabs tabsPlacement="top" #myTabs>\n\n    <!-- <ion-tab [root]="AllTransactions" tabTitle="{{\'Calculator\'|translate}}" tabIcon="calculator"></ion-tab> -->\n\n    <ion-tab [root]="ExpenseTransactions" tabTitle="{{\'Shopping Cart\'|translate}}" tabIcon="apps"></ion-tab>\n\n    <ion-tab [root]="IncomeTransactions" tabTitle="{{\'Receipt\'|translate}}" tabIcon="list-box"></ion-tab>\n\n   \n\n\n\n   </ion-tabs>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\transaction-home\transaction-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], TransactionHomePage);
    return TransactionHomePage;
}());

//# sourceMappingURL=transaction-home.js.map

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bm": 209,
	"./bm.js": 209,
	"./bn": 210,
	"./bn.js": 210,
	"./bo": 211,
	"./bo.js": 211,
	"./br": 212,
	"./br.js": 212,
	"./bs": 213,
	"./bs.js": 213,
	"./ca": 214,
	"./ca.js": 214,
	"./cs": 215,
	"./cs.js": 215,
	"./cv": 216,
	"./cv.js": 216,
	"./cy": 217,
	"./cy.js": 217,
	"./da": 218,
	"./da.js": 218,
	"./de": 219,
	"./de-at": 220,
	"./de-at.js": 220,
	"./de-ch": 221,
	"./de-ch.js": 221,
	"./de.js": 219,
	"./dv": 222,
	"./dv.js": 222,
	"./el": 223,
	"./el.js": 223,
	"./en-SG": 224,
	"./en-SG.js": 224,
	"./en-au": 225,
	"./en-au.js": 225,
	"./en-ca": 226,
	"./en-ca.js": 226,
	"./en-gb": 227,
	"./en-gb.js": 227,
	"./en-ie": 228,
	"./en-ie.js": 228,
	"./en-il": 229,
	"./en-il.js": 229,
	"./en-nz": 230,
	"./en-nz.js": 230,
	"./eo": 231,
	"./eo.js": 231,
	"./es": 232,
	"./es-do": 233,
	"./es-do.js": 233,
	"./es-us": 234,
	"./es-us.js": 234,
	"./es.js": 232,
	"./et": 235,
	"./et.js": 235,
	"./eu": 236,
	"./eu.js": 236,
	"./fa": 237,
	"./fa.js": 237,
	"./fi": 238,
	"./fi.js": 238,
	"./fo": 239,
	"./fo.js": 239,
	"./fr": 240,
	"./fr-ca": 241,
	"./fr-ca.js": 241,
	"./fr-ch": 242,
	"./fr-ch.js": 242,
	"./fr.js": 240,
	"./fy": 243,
	"./fy.js": 243,
	"./ga": 244,
	"./ga.js": 244,
	"./gd": 245,
	"./gd.js": 245,
	"./gl": 246,
	"./gl.js": 246,
	"./gom-latn": 247,
	"./gom-latn.js": 247,
	"./gu": 248,
	"./gu.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it-ch": 257,
	"./it-ch.js": 257,
	"./it.js": 256,
	"./ja": 258,
	"./ja.js": 258,
	"./jv": 259,
	"./jv.js": 259,
	"./ka": 260,
	"./ka.js": 260,
	"./kk": 261,
	"./kk.js": 261,
	"./km": 262,
	"./km.js": 262,
	"./kn": 263,
	"./kn.js": 263,
	"./ko": 264,
	"./ko.js": 264,
	"./ku": 265,
	"./ku.js": 265,
	"./ky": 266,
	"./ky.js": 266,
	"./lb": 267,
	"./lb.js": 267,
	"./lo": 268,
	"./lo.js": 268,
	"./lt": 269,
	"./lt.js": 269,
	"./lv": 270,
	"./lv.js": 270,
	"./me": 271,
	"./me.js": 271,
	"./mi": 272,
	"./mi.js": 272,
	"./mk": 273,
	"./mk.js": 273,
	"./ml": 274,
	"./ml.js": 274,
	"./mn": 275,
	"./mn.js": 275,
	"./mr": 276,
	"./mr.js": 276,
	"./ms": 277,
	"./ms-my": 278,
	"./ms-my.js": 278,
	"./ms.js": 277,
	"./mt": 279,
	"./mt.js": 279,
	"./my": 280,
	"./my.js": 280,
	"./nb": 281,
	"./nb.js": 281,
	"./ne": 282,
	"./ne.js": 282,
	"./nl": 283,
	"./nl-be": 284,
	"./nl-be.js": 284,
	"./nl.js": 283,
	"./nn": 285,
	"./nn.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 288,
	"./pt-br": 289,
	"./pt-br.js": 289,
	"./pt.js": 288,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 298,
	"./sr-cyrl": 299,
	"./sr-cyrl.js": 299,
	"./sr.js": 298,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./tg": 306,
	"./tg.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./ug-cn": 314,
	"./ug-cn.js": 314,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 482;

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_transaction_home_transaction_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_coach_home_coach_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_profile_user_profile__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_loan_home_loan_home__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_firebase_cloud_messaging_fcm_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_summary_summary_summary_summary__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var MyApp = /** @class */ (function () {
    function MyApp(app, platform, statusBar, translateService, translateConfigService, splashScreen, toastCtrl, sp, fcm) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.translateService = translateService;
        this.translateConfigService = translateConfigService;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: "Create New Sales", component: __WEBPACK_IMPORTED_MODULE_6__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */] },
            //  { title: "View/Edit Products", component: DashboardPage },
            // { title: "Update Stock/Expenses", component: ExpenseTransactionPage },
            { title: "Business Performance", component: __WEBPACK_IMPORTED_MODULE_15__pages_summary_summary_summary_summary__["a" /* SummarySummaryPage */] },
            { title: "Coach", component: __WEBPACK_IMPORTED_MODULE_7__pages_coach_home_coach_home__["a" /* CoachHomePage */] },
            { title: "Apply for Loan", component: __WEBPACK_IMPORTED_MODULE_13__pages_loan_home_loan_home__["a" /* LoanHomePage */] },
            { title: "Contact Us", component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__["a" /* ContactUsPage */] },
        ];
        this.backButtonEvent();
        this.sp.getUserDat().then(function (user) {
            if (user == null) {
                _this.userLang = "en";
            }
            else {
                var _user = JSON.parse(user);
                _this.userLang = _user.language;
            }
        });
    }
    MyApp.prototype.backButtonEvent = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("yoyo");
                navigator.Backbutton.goHome();
                return [2 /*return*/];
            });
        }); });
        this.platform.registerBackButtonAction(function () {
            console.log("yo1");
        });
        document.addEventListener("backbutton", onBackKeyDown, false);
        function onBackKeyDown() {
            console.log("y03");
            // navigator.Backbutton.goHome(function() {
            //     console.log('success')
            // }, function() {
            //     console.log('fail')
            // });
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        //this.sp.backupStorageLogout().then();
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]()
            .signOut()
            .then(function () {
            _this.toastCtrl
                .create({
                message: "Logged out!",
                duration: 3000,
            })
                .present();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MyApp.prototype.setupNotifications = function () {
        console.log("setting up notifications");
        this.fcm.getToken();
        this.fcm.onNotifications();
    };
    MyApp.prototype.ionViewDidEnter = function () { };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translateService.addLangs(["en", "pt"]);
            _this.translateService.setDefaultLang("en");
            _this.translateService.use("en");
            _this.setupNotifications();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openUserProfilePage = function () {
        this.openPage({ component: __WEBPACK_IMPORTED_MODULE_10__pages_user_profile_user_profile__["a" /* UserProfilePage */] });
    };
    MyApp.prototype.onLangChange = function () {
        this.translateConfigService.setLanguage(this.userLang);
        this.getUserData();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */], { lang: this.userLang });
    };
    MyApp.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                        _this.userdata.language = _this.userLang;
                        _this.sp.storageReady().then(function () {
                            _this.sp.setUserDat(_this.userdata).then(function () {
                                console.log(_this.userdata);
                            });
                        });
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" ? _a : Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <!-- <ion-row>\n\n        <button ion-button block medium></button>{{\'Menu\' | translate}}</button> \n\n      </ion-row> -->\n\n      <ion-row>\n\n        <ion-select [(ngModel)]="userLang" (ionChange) = "onLangChange()" interface="popover" style="min-width: 100%; text-align: center;" padding>\n\n          <ion-option value="en">🇬🇧 English</ion-option>\n\n          <ion-option value="my">🇲🇲 ဗမာ</ion-option>\n\n          <ion-option value="fil">🇵🇭 wikang filipino</ion-option>\n\n          <ion-option value="hi">🇮🇳 हिंदी</ion-option>\n\n        </ion-select>\n\n      </ion-row>\n\n      <ion-row>\n\n          <button ion-button block large outline color="dark" (click)="openUserProfilePage()" menuClose>\n\n              {{\'Settings\' | translate}} <br> \n\n            <ion-icon name="settings"></ion-icon> \n\n        </button>\n\n      </ion-row>\n\n      \n\n\n\n\n\n      \n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title | translate}}\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()" >\n\n        {{\'Logout\'| translate}}\n\n      </button>\n\n      \n\n       \n\n      \n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__providers_translation_translate_config_service__["a" /* TranslateConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_translation_translate_config_service__["a" /* TranslateConfigService */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__["a" /* StorageProvider */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_14__providers_firebase_cloud_messaging_fcm_service__["a" /* FcmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__providers_firebase_cloud_messaging_fcm_service__["a" /* FcmService */]) === "function" ? _k : Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addproduct__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddProductPageModule = /** @class */ (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__addproduct__["a" /* AddProductPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addproduct__["a" /* AddProductPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__addproduct__["a" /* AddProductPage */]],
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());

//# sourceMappingURL=addproduct.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singleproduct__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SingleProductPageModule = /** @class */ (function () {
    function SingleProductPageModule() {
    }
    SingleProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__singleproduct__["a" /* SingleProductPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__singleproduct__["a" /* SingleProductPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_2__singleproduct__["a" /* SingleProductPage */]],
        })
    ], SingleProductPageModule);
    return SingleProductPageModule;
}());

//# sourceMappingURL=singleproduct.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @ts-ignore
var GeolocationService = /** @class */ (function () {
    function GeolocationService(geolocation) {
        this.geolocation = geolocation;
    }
    GeolocationService.prototype.getCoordinates = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geolocation
                .getCurrentPosition()
                .then(function (position) {
                console.log("geolocation -> latitude: " + position.coords.latitude + ", longitude: " + position.coords.longitude);
                resolve(position.coords);
            })
                .catch(reject);
        });
    };
    GeolocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GeolocationService);
    return GeolocationService;
}());

//# sourceMappingURL=geolocation.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gettersetter_gettersetter__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_list_product_list__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_product_category_add_product_category__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, translateConfigService, barcodeScanner, alertCtrl, sp, getset, toastCtrl, events, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.getset = getset;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modal = modal;
        this.ViewList = __WEBPACK_IMPORTED_MODULE_7__product_list_product_list__["a" /* ProductListPage */];
        this.AddProd = __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */];
        this.AddCat = __WEBPACK_IMPORTED_MODULE_8__add_product_category_add_product_category__["a" /* AddProductCategoryPage */];
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.getUserData();
        this.events.subscribe("cbUpdate:created", function (data) {
            _this.getUserData();
        });
    }
    DashboardPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.total = this.getset.getTotal();
        this.count = this.getset.getCount();
        this.vat = this.getset.getVat();
    };
    DashboardPage.prototype.uploadbtn = function () {
        this.sp.backupStorage();
        var message = this.translateConfigService.getTranslatedMessage("Online backup ready");
        this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        })
            .present();
    };
    DashboardPage.prototype.cashbtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, message1, message2, message3, message4, message5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        message = this.translateConfigService.getTranslatedMessage("Balance");
                        message1 = this.translateConfigService.getTranslatedMessage("Edit");
                        message2 = this.translateConfigService.getTranslatedMessage("Enter Current Cash Balance");
                        message3 = this.translateConfigService.getTranslatedMessage("Update");
                        message4 = this.translateConfigService.getTranslatedMessage("Cancel");
                        message5 = this.translateConfigService.getTranslatedMessage("OK");
                        this.alertCtrl
                            .create({
                            //@ts-ignore
                            message: message.value + ": " + this.userdata.cash_balance,
                            buttons: [
                                {
                                    //@ts-ignore
                                    text: message1.value,
                                    handler: function (data) {
                                        _this.alertCtrl
                                            .create({
                                            inputs: [
                                                //@ts-ignore
                                                { name: "cb", placeholder: message2.value },
                                            ],
                                            buttons: [
                                                {
                                                    //@ts-ignore
                                                    text: message4.value,
                                                    role: "cancel",
                                                },
                                                {
                                                    //@ts-ignore
                                                    text: message3.value,
                                                    handler: function (data1) {
                                                        if (data1.cb != null && data1.cb != "" && data1.cb != undefined) {
                                                            //console.log("Update CB to :"+data1.cb)
                                                            _this.getUserData();
                                                            _this.userdata.cash_balance = parseFloat(data1.cb).toString();
                                                            _this.sp.setUserDat(_this.userdata);
                                                        }
                                                    },
                                                },
                                            ],
                                        })
                                            .present();
                                    },
                                },
                                {
                                    //translate these buttons
                                    //@ts-ignore
                                    text: message5.value,
                                    role: "Cancel",
                                },
                            ],
                        })
                            .present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.qrscan = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    var message = _this.translateConfigService.getTranslatedMessage("Found Product");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value + " " + val[0].name,
                        duration: 2000,
                    });
                    toast.present();
                    _this.count++;
                    _this.total += parseFloat(val[0].price);
                    _this.vat += parseFloat(val[0].price) * 0.05;
                    _this.getset.setTotal(_this.total);
                    _this.getset.setCount(_this.count);
                    _this.getset.setVat(_this.vat);
                }
                else {
                    var message = _this.translateConfigService.getTranslatedMessage("Get Product!!!");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000,
                    });
                    toast.present();
                }
            });
        })
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    DashboardPage.prototype.addproduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */]);
    };
    DashboardPage.prototype.manual = function () {
        var _this = this;
        var alertPop = this.alertCtrl.create({
            title: "Product",
            inputs: [
                {
                    name: "code",
                    placeholder: "Product Code",
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                },
                {
                    text: "Search",
                    handler: function (data) {
                        _this.sp.searchProduct(data.code).then(function (val) {
                            if (val[0] != null) {
                                var message = _this.translateConfigService.getTranslatedMessage("Found Product");
                                var toast = _this.toastCtrl.create({
                                    // @ts-ignore
                                    message: message.value + " " + val[0].name,
                                    duration: 2000,
                                });
                                toast.present();
                                _this.count++;
                                _this.total += parseFloat(val[0].price);
                                _this.vat += parseFloat(val[0].price) * 0.05;
                                _this.getset.setTotal(_this.total);
                                _this.getset.setCount(_this.count);
                                _this.getset.setVat(_this.vat);
                            }
                            else {
                                var message = _this.translateConfigService.getTranslatedMessage("Get Product!!!");
                                var toast = _this.toastCtrl.create({
                                    // @ts-ignore
                                    message: message.value,
                                    duration: 2000,
                                });
                                toast.present();
                            }
                        });
                    },
                },
            ],
        });
        alertPop.present();
    };
    DashboardPage.prototype.reset = function () {
        this.getset.setTotal(0);
        this.getset.setCount(0);
        this.getset.setVat(0);
        this.total = 0;
        this.count = 0;
        this.vat = 0;
        var message = this.translateConfigService.getTranslatedMessage("POS reset to Zero");
        var toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        });
        toast.present();
    };
    DashboardPage.prototype.help = function () {
        var _this = this;
        var msg = this.translateConfigService.getTranslatedMessage("View/Edit Products");
        var temptxt = [];
        var tempvid = [];
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
            .firestore()
            .collection("tutorial")
            .get()
            .then(function (doc) {
            //console.log(doc)
            doc.docs.forEach(function (element) {
                console.log(element.id + " " + _this.userdata.language);
                if (element.id == _this.userdata.language) {
                    element.data().text.forEach(function (element1) {
                        if (element1.page == "Product") {
                            temptxt.push(element1);
                        }
                    });
                    element.data().video.forEach(function (element2) {
                        if (element2.page == "Product") {
                            tempvid.push(element2);
                        }
                    });
                    tempvid = element.data().video;
                }
            });
        });
        var passedData = {
            //youtube link, required text
            //@ts-ignore
            page: msg.value,
            text: temptxt,
            video: tempvid,
        };
        var helpModal = this.modal.create("HelpPage", { data: passedData });
        helpModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
    ], DashboardPage.prototype, "tabRef", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>{{"Products"|translate}}</ion-title> -->\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()" style="border: solid grey">{{"Backup Online"|translate}}<ion-icon name="cloud-upload" style="align-self: center; color: white; padding-left: 10px;"></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()" style="border: solid grey"> {{"Cash Balance"|translate}} <ion-icon name="logo-usd" style="align-self: center; color: white; padding-left: 10px;"></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="help()"><ion-icon name="help-circle" style="font-size: 30px;"></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="ViewList" tabTitle="{{\'Stock\'|translate}}" tabIcon="list-box"></ion-tab>\n\n        <ion-tab [root]="AddProd" tabTitle="{{\'Add Product\'|translate}}" tabIcon="pricetag"></ion-tab>\n\n        <ion-tab [root]="AddCat" tabTitle="{{\'Add Category\'|translate}}" tabIcon="albums"></ion-tab>\n\n  \n\n    \n\n       </ion-tabs>\n\n</ion-content>\n\n<!-- <ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Total</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{total}} USD</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Items</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{count}} Pcs</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>VAT</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{vat}} USD</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="primary" (click)="manual()">Manual Entry</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="primary" (click)="qrscan()">Sales QR Scan</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="secondary" (click)="addproduct()">Add Products</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="secondary" (click)="showproduct()">Show Products</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button round block color="secondary" (click)="reset()">Reset</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n -->\n\n\n\n\n\n  \n\n\n\n\n\n<!-- \n\n  <ion-tabs tabsPlacement="top">\n\n    <ion-tab [root]="ListRoot" tabTitle="List" tabIcon="chat"></ion-tab>\n\n    <ion-tab [root]="AddRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n\n   </ion-tabs> -->\n\n<!-- \n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-title>Track💰2Make💰</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer> -->\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AddProductPage = /** @class */ (function () {
    function AddProductPage(navCtrl, barcodeScanner, translateConfigService, navParams, sp, toastCtrl, events, camera, formBuilder) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = null;
        this.prodWholesalePrice = null;
        this.prodCost = null;
        this.prodCat = "";
        this.newprodCat = "";
        this.image = "";
        this.temp = "na";
        this.produrl = "";
        this.disabled = false;
        this.isProdCode000000 = false;
        this.prodCode = this.navParams.get("code");
        this.getUserData();
        this.formProduct = this.formBuilder.group({
            prodName: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodPrice: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodWholesalePrice: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodCost: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            currstock: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodCat: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            newprodCat: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([])),
        });
    }
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddProductCategoryPage");
        this.getCategories();
        this.disabled = false;
    };
    AddProductPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        _this.uid = _this.userdata.id;
                        console.log(_this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AddProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    AddProductPage.prototype.launchCamera = function () {
        var _this = this;
        var options = {
            quality: 20,
            //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 300,
            targetWidth: 300,
            allowEdit: false,
        };
        this.camera
            .getPicture(options)
            .then(function (base64Image) {
            _this.image = "data:image/png;base64," + base64Image;
            // console.log(base64Image)
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AddProductPage.prototype.upload_new = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.temp = "prodImages/" + _this.uid + _this.prodCode + name;
            //LET REF be tied to a particular product- we save the url in the products db
            var ref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref("prodImages/" + _this.uid + _this.prodCode + name);
            var uploadTask = ref.putString(_this.image.split(",")[1], "base64");
            _this.temp = "UPTask";
            uploadTask.then(function (snap) {
                snap.ref.getDownloadURL().then(function (url) {
                    // do something with url here
                    _this.produrl = url;
                    _this.temp = url;
                    resolve();
                });
            });
        });
    };
    AddProductPage.prototype.addCategory = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                name: this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage("Finish");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000,
                    });
                    _this.newprodCat = "";
                    //this.navCtrl.push(ProductListPage);
                    //this.events.publish('prodAdd:created',0);
                    // (this.navCtrl.parent as Tabs).select(0);
                    toast.present();
                }, 1000);
            });
        }
    };
    AddProductPage.prototype.clearFields = function () {
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = null;
        this.prodWholesalePrice = null;
        this.prodCost = null;
        this.prodCat = "";
        this.navCtrl.pop();
    };
    AddProductPage.prototype.addProdPic = function () { };
    AddProductPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            _this.prodCode = barcodeData.text;
        })
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    AddProductPage.prototype.addproduct = function () {
        var _this = this;
        if (this.prodCode == "000000") {
            var msg = this.translateConfigService.getTranslatedMessage("Code not permitted. Please use a different code");
            var toast = this.toastCtrl
                .create({
                //@ts-ignore
                message: msg.value,
                duration: 3000,
            })
                .present();
            this.isProdCode000000 = true;
            return;
        }
        else {
            this.isProdCode000000 = false;
        }
        this.disabled = true;
        if (!this.formProduct.valid || (this.prodCat == "New" && this.newprodCat == "")) {
            var message = this.translateConfigService.getTranslatedMessage("Incomplete");
            this.toastCtrl
                .create({
                // @ts-ignore
                message: message.value,
                duration: 1000,
            })
                .present();
            this.disabled = false;
        }
        else {
            //old
            if (this.prodCode == "" || this.prodCode == null || this.prodCode == undefined) {
                this.prodCode = Math.round(Math.random() * 10000000000).toString();
                console.log("No Code ::" + this.prodCode);
            }
            if (this.newprodCat != "") {
                this.addCategory();
                this.prodCat = this.newprodCat;
            }
            if (this.image == "") {
                var message = this.translateConfigService.getTranslatedMessage("Creating item, please wait a moment");
                this.toastCtrl
                    .create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000,
                })
                    .present();
                var data_2 = {
                    code: this.prodCode,
                    name: this.prodName,
                    price: this.prodPrice,
                    wholesale_price: this.prodWholesalePrice,
                    cost: this.prodCost,
                    cat: this.prodCat,
                    url: this.produrl,
                    stock_qty: this.currstock,
                };
                console.log(data_2);
                this.temp = JSON.stringify(data_2);
                this.sp.storageReady().then(function () {
                    _this.sp.addProduct(data_2);
                    setTimeout(function () {
                        var message = _this.translateConfigService.getTranslatedMessage("Finish");
                        var toast = _this.toastCtrl.create({
                            // @ts-ignore
                            message: message.value,
                            duration: 2000,
                        });
                        _this.prodCode = "";
                        _this.prodName = "";
                        _this.prodPrice = null;
                        _this.prodWholesalePrice = null;
                        _this.prodCat = "";
                        _this.prodCost = null;
                        _this.produrl = "";
                        _this.currstock = null;
                        _this.image = "";
                        _this.disabled = false;
                        _this.sp.backupStorage();
                        //this.navCtrl.push(ProductListPage);
                        _this.events.publish("prodAdd:created", 0);
                        toast.present();
                        toast.onDidDismiss(function () {
                            var msg = _this.translateConfigService.getTranslatedMessage("Refresh page to see changes");
                            _this.toastCtrl
                                .create({
                                //@ts-ignore
                                message: msg.value,
                                duration: 1500,
                            })
                                .present();
                        });
                    }, 1000);
                });
            }
            else {
                this.temp = this.prodName;
                var message = this.translateConfigService.getTranslatedMessage("Creating item, please wait a moment");
                this.toastCtrl
                    .create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000,
                })
                    .present();
                this.upload_new(this.prodName).then(function () {
                    var data = {
                        code: _this.prodCode,
                        name: _this.prodName,
                        price: _this.prodPrice,
                        wholesale_price: _this.prodWholesalePrice,
                        cost: _this.prodCost,
                        cat: _this.prodCat,
                        url: _this.produrl,
                        stock_qty: _this.currstock,
                    };
                    console.log(data);
                    _this.temp = JSON.stringify(data);
                    _this.sp.storageReady().then(function () {
                        _this.sp.addProduct(data);
                        setTimeout(function () {
                            var message = _this.translateConfigService.getTranslatedMessage("Finish");
                            var toast = _this.toastCtrl.create({
                                // @ts-ignore
                                message: message.value,
                                duration: 2000,
                            });
                            _this.prodCode = "";
                            _this.prodName = "";
                            _this.prodPrice = 0;
                            _this.prodWholesalePrice = 0;
                            _this.prodCat = "";
                            _this.prodCost = 0;
                            _this.produrl = "";
                            _this.image = "";
                            _this.disabled = false;
                            _this.sp.backupStorage();
                            //this.navCtrl.push(ProductListPage);
                            _this.events.publish("prodAdd:created", 0);
                            toast.present();
                            toast.onDidDismiss(function () {
                                var msg = _this.translateConfigService.getTranslatedMessage("Refresh page to see changes");
                                _this.toastCtrl
                                    .create({
                                    //@ts-ignore
                                    message: msg.value,
                                    duration: 1500,
                                })
                                    .present();
                            });
                        }, 1000);
                    });
                });
            }
            this.events.publish("productUpdate:created");
            this.navCtrl.pop();
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-add-product",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\addproduct\addproduct.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Add Product</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="clearFields()" style="background-color: red;">{{"Cancel"|translate}}</button>\n\n  </ion-buttons>\n\n  <ion-item>\n\n    <b>{{"Enter Information:" | translate}}</b>\n\n\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <button ion-button block color="primary" (click)="launchCamera()">{{\'Take Picture\' | translate}}</button>\n\n    <img *ngIf="image!=null" [src]="image" style="width: 100px;">\n\n  </ion-item>\n\n  <ion-list inset>\n\n    <button ion-button block color="primary" (click)="scanQR()" color="dark">{{\'Scan Barcode\'| translate}}</button>\n\n    <ion-item>\n\n      <ion-label>{{\'Product Code:\'| translate}}</ion-label>\n\n      <ion-label style="color: red; font-size: 25px;" *ngIf="isProdCode000000"><b>!</b></ion-label>\n\n      <ion-input type="text" [(ngModel)]=\'prodCode\'></ion-input>\n\n    </ion-item>\n\n  <form [formGroup]="formProduct">\n\n    \n\n      <!-- <button ion-button full color="dark" (click)="getProdPic()">Upload Picture</button> -->\n\n     \n\n      <ion-item>\n\n        <ion-label>{{\'Product Name:\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="prodName" [(ngModel)]=\'prodName\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Retail Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodPrice" [(ngModel)]=\'prodPrice\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Wholesale Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodWholesalePrice" [(ngModel)]=\'prodWholesalePrice\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Buying Cost:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodCost" [(ngModel)]=\'prodCost\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Current Stock Qty:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="currstock" [(ngModel)]=\'currstock\'></ion-input>\n\n      </ion-item>\n\n      <!-- OPTIONAL EXPIRY/Shelf Life in time -->\n\n\n\n      <ion-item>\n\n\n\n        <ion-label>{{\'Product Category\' | translate}}</ion-label>\n\n        <ion-select multiple="false" formControlName="prodCat" [(ngModel)]=\'prodCat\'>\n\n\n\n          <!-- <ion-option>New</ion-option> -->\n\n          <ion-option value="New"> {{\'Add New Category\'| translate}}</ion-option>\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n\n\n\n        </ion-select>\n\n\n\n        <!-- <ion-label>Select Category</ion-label>\n\n        <ion-select multiple="false" [(ngModel)]=\'prodCat\'>\n\n              <ion-option>New</ion-option>\n\n              <ion-option>Snacks</ion-option>\n\n              <ion-option>Drinks</ion-option>\n\n              <ion-option>Noodles</ion-option>\n\n        </ion-select> -->\n\n      </ion-item>\n\n\n\n\n\n\n\n\n\n      <ion-item *ngIf="prodCat==\'New\'">\n\n        <ion-label>{{\'Enter New Category Name\' | translate}}</ion-label>\n\n        <ion-input type="text" placeholder="{{\'Enter Category Here\' | translate}}" formControlName="newprodCat"\n\n          [(ngModel)]=\'newprodCat\'></ion-input>\n\n      </ion-item>\n\n\n\n    \n\n  </form>\n\n</ion-list>\n\n  <button ion-button block color="primary" [disabled]="disabled" (click)="addproduct()"\n\n    color="dark">{{\'Add Product\'| translate}}</button>\n\n  <button ion-button block style="background-color: red; color: white;"\n\n    (click)="clearFields()">{{"Clear Fields"|translate}}</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\addproduct\addproduct.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" ? _j : Object])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SingleProductPage = /** @class */ (function () {
    function SingleProductPage(navCtrl, translateConfigService, barcodeScanner, navParams, sp, toastCtrl, camera, formBuilder, modal, events) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.events = events;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = 0;
        this.prodWholesalePrice = 0;
        this.prodCost = 0;
        this.prodCat = "";
        this.isProdCode000000 = false;
        this.orgData = {
            prodCode: "",
            prodName: "",
            prodPrice: 0,
            prodWholesalePrice: 0,
            prodCost: 0,
            stock: 0,
            prodCat: "",
            image: "",
        };
        this.newprodCat = "";
        this.image = "";
        this.temp = "na";
        this.disabled = false;
        this.produrl = "";
        this.product = this.navParams.get("data");
        this.prodCodeOld = this.product.code;
        this.image = this.product.url;
        this.orgData["image"] = this.image;
        this.orgData["prodCode"] = this.product.code;
        this.orgData["prodName"] = this.product.name;
        this.orgData["prodPrice"] = this.product.price;
        this.orgData["prodWholesalePrice"] = this.product.wholesale_price;
        this.orgData["prodCost"] = this.product.cost;
        this.orgData["stock"] = this.product.stock_qty;
        this.orgData["prodCat"] = this.product.cat;
        this.getUserData();
        this.formProduct = this.formBuilder.group({
            prodCode: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodName: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodPrice: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodWholesalePrice: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodCost: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            currstock: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodCat: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
        });
    }
    SingleProductPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddProductCategoryPage");
        this.getCategories();
        this.disabled = false;
    };
    SingleProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp
                .getCategories()
                .then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            })
                .catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SingleProductPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                        _this.uid = _this.userdata.uid;
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SingleProductPage.prototype.launchCamera = function () {
        var _this = this;
        var options = {
            quality: 20,
            //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 300,
            targetWidth: 300,
            allowEdit: false,
        };
        this.camera
            .getPicture(options)
            .then(function (base64Image) {
            _this.image = "data:image/png;base64," + base64Image;
            _this.upload_new(_this.product.name);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SingleProductPage.prototype.upload_new = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var message = _this.translateConfigService.getTranslatedMessage("Please wait - Uploading new image");
            _this.toastCtrl
                .create({
                // @ts-ignore
                message: message.value,
                duration: 1000,
            })
                .present();
            _this.temp = "prodImages/" + _this.uid + _this.prodCode + name;
            //LET REF be tied to a particular product- we save the url in the products db
            var ref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref("prodImages/" + _this.uid + _this.prodCode + name);
            var uploadTask = ref.putString(_this.image.split(",")[1], "base64");
            _this.temp = "UPTask";
            uploadTask.then(function (snap) {
                snap.ref.getDownloadURL().then(function (url) {
                    // do something with url here
                    _this.product.url = url;
                    _this.temp = url;
                    var message = _this.translateConfigService.getTranslatedMessage("Done uploading");
                    _this.toastCtrl
                        .create({
                        // @ts-ignore
                        message: message.value,
                        duration: 1000,
                    })
                        .present();
                    resolve();
                });
            });
        });
    };
    SingleProductPage.prototype.addCategory = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                name: this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage("Finish");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000,
                    });
                    _this.newprodCat = "";
                    //this.navCtrl.push(ProductListPage);
                    //this.events.publish('prodAdd:created',0);
                    // (this.navCtrl.parent as Tabs).select(0);
                    toast.present();
                }, 1000);
            });
        }
    };
    SingleProductPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            //this.prodCode = barcodeData.text;
            //this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
            _this.prodCode = barcodeData.text;
            _this.product.code = barcodeData.text;
        })
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    SingleProductPage.prototype.updateProduct = function () {
        var _this = this;
        if (this.product.code == "000000") {
            var msg = this.translateConfigService.getTranslatedMessage("Code not permitted. Please use a different code");
            var toast = this.toastCtrl.create({
                //@ts-ignore
                message: msg.value,
                duration: 3000,
            });
            toast.present();
            this.isProdCode000000 = true;
            return;
        }
        else {
            this.isProdCode000000 = false;
        }
        this.disabled = true;
        if (!this.formProduct.valid) {
            console.log("invalid product with missing fields");
            var message = this.translateConfigService.getTranslatedMessage("Please fill all the information!");
            var toast = this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 2000,
            });
            toast.present();
            this.disabled = false;
        }
        else {
            if (this.newprodCat != "") {
                this.addCategory();
                this.product.cat = this.newprodCat;
            }
            var message = this.translateConfigService.getTranslatedMessage("Modifying item, please wait a moment");
            var toast = this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 2000,
            });
            toast.present();
            var data = {
                code: this.product.code,
                name: this.product.name,
                price: this.product.price,
                wholesale_price: this.product.wholesale_price,
                cost: this.product.cost,
                cat: this.product.cat,
                url: this.product.url,
                stock_qty: this.product.stock_qty,
            };
            this.sp.updateProduct(data, this.prodCodeOld).then(function () {
                _this.sp.backupStorage();
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage("Finish");
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000,
                    });
                    toast.present();
                    _this.disabled = false;
                    _this.events.publish("productUpdate:created");
                    _this.navCtrl.pop();
                }, 1000);
                _this.prodCode = "";
            });
        }
    };
    SingleProductPage.prototype.deleteproduct = function (data) {
        var _this = this;
        this.disabled = true;
        var message = this.translateConfigService.getTranslatedMessage("Deleting item, please wait a moment");
        var toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        });
        toast.present();
        this.disabled = false;
        this.sp
            .storageReady()
            .then(function () {
            _this.sp.deleteProduct(data);
            setTimeout(function () {
                var message = _this.translateConfigService.getTranslatedMessage("Finish");
                var toast = _this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000,
                });
                toast.present();
                _this.sp.backupStorage();
                _this.events.publish("productUpdate:created");
                _this.navCtrl.pop();
            }, 1000);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SingleProductPage.prototype.discardChange = function () {
        var message = this.translateConfigService.getTranslatedMessage("Changes discarded");
        this.image = this.orgData["image"];
        this.product.code = this.orgData["prodCode"];
        this.product.name = this.orgData["prodName"];
        this.product.price = this.orgData["prodPrice"];
        this.product.wholesale_price = this.orgData["prodWholesalePrice"];
        this.product.cost = this.orgData["prodCost"];
        this.product.stock_qty = this.orgData["stock"];
        this.product.cat = this.orgData["prodCat"];
        var toast = this.toastCtrl
            .create({
            // @ts-ignore
            message: message.value,
            duration: 2500,
        })
            .present();
        this.navCtrl.pop();
    };
    SingleProductPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SingleProductPage.prototype.goToUpdateStock = function () {
        var _this = this;
        var m = this.modal.create("UpdateStockPage", { data: this.product });
        m.present();
        m.onDidDismiss(function (data) {
            if (data == "cancel") {
            }
            else {
                var message = _this.translateConfigService.getTranslatedMessage("Finish");
                var toast = _this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000,
                });
                toast.present();
                toast.onDidDismiss(function () {
                    _this.events.publish("productUpdate:created");
                    _this.navCtrl.pop();
                });
            }
        });
    };
    SingleProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-single-product",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\singleproduct\singleproduct.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Update Product</ion-title>\n\n  </ion-navbar> \n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-buttons start style="display: flex;">\n\n        <button ion-button color="dark" (click)="goToUpdateStock()">{{ "Update Stock" | translate }}</button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n    <ion-col col-3></ion-col>\n\n    <ion-col col-3>\n\n      <ion-buttons end>\n\n        <button ion-button style="background-color: red;" (click)="goBack()">{{ "Cancel" | translate}}</button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n  </ion-row>\n\n  <form [formGroup]="formProduct">\n\n    <ion-list inset>\n\n\n\n      <!-- <ion-item>\n\n        <ion-label>Photo</ion-label>\n\n            <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n\n        </ion-item> -->\n\n        \n\n      <ion-item>\n\n        <button ion-button (click)="launchCamera()">{{\'Take Picture\' | translate}}</button>\n\n        <img *ngIf="image!=null" [src]="image" style="width: 100px;">\n\n      </ion-item>\n\n      <button ion-button block color="primary" (click)="scanQR()">{{\'Scan Barcode\'| translate}}</button>\n\n\n\n      <ion-item>\n\n        <ion-label>{{\'Product Code:\'| translate}}</ion-label>\n\n        <ion-label style="color: red; font-size: 25px;" *ngIf="isProdCode000000"><b>!</b></ion-label>\n\n        <ion-input type="text" formControlName="prodCode" [(ngModel)]=\'product.code\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Name:\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="prodName" [(ngModel)]=\'product.name\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Retail Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodPrice" [(ngModel)]=\'product.price\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Wholesale Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodWholesalePrice" [(ngModel)]=\'product.wholesale_price\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Average Buying Cost:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodCost" [(ngModel)]=\'product.cost\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Current Stock Qty:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="currstock" [(ngModel)]=\'product.stock_qty\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Category\' | translate}}</ion-label>\n\n        <ion-select multiple="false" formControlName="prodCat" [(ngModel)]=\'product.cat\'>\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n\n\n\n\n    </ion-list>\n\n  </form>\n\n  <button ion-button block color="primary" [disabled]="disabled" (click)="updateProduct()">{{\'Update Product\'| translate}}</button>\n\n  <button ion-button block style="color: whitesmoke; background-color: gray;" (click)="discardChange()">{{"Discard Changes"|translate}}</button>\n\n  <button ion-button block color="danger" [disabled]="disabled" (click)="deleteproduct(product)">{{\'Delete Product\'| translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\singleproduct\singleproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SingleProductPage);
    return SingleProductPage;
}());

//# sourceMappingURL=singleproduct.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, translateConfigService, navParams) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.email = "Loading...";
        this.phone = "Loading...";
        this.chatbot = "";
        this.getInfo();
    }
    ContactUsPage.prototype.getInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
            .firestore()
            .collection("contact-us")
            .get()
            .then(function (doc) {
            _this.email = doc.docs[0].data().email;
            _this.phone = doc.docs[0].data().phone;
            _this.chatbot = doc.docs[0].data().chatbot;
        });
    };
    ContactUsPage.prototype.navFB = function () {
        window.open(this.chatbot, "_system", "location=no");
    };
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ContactUsPage");
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-contact-us",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\contact-us\contact-us.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{"Contact Us"| translate}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n<h1>{{"Contact the OPEN Helpline"| translate}}</h1>\n\n{{"Contact us msg"| translate}}\n\n\n\n<br><br>\n\n\n\n<ion-grid>\n\n\n\n  \n\n\n\n\n\n    <ion-row  style="background-color: #f0f0f0">\n\n        <ion-col col-12>\n\n\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n              {{ phone }}\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred; text-transform:lowercase">\n\n              {{ email }}\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n          <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred; text-transform: unset;" (click)="navFB()">\n\n            {{"Reach us on Facebook"|translate}}!\n\n          </button>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//translate-config.service.ts


// @ts-ignore
var TranslateConfigService = /** @class */ (function () {
    function TranslateConfigService(translate) {
        this.translate = translate;
    }
    TranslateConfigService.prototype.getDefaultLanguage = function () {
        var language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        console.log("device default language: " + language);
        return language;
    };
    TranslateConfigService.prototype.setLanguage = function (setLang) {
        this.translate.use(setLang);
    };
    TranslateConfigService.prototype.getTranslatedMessage = function (message) {
        return this.translate.get(message);
    };
    TranslateConfigService.prototype.getCurrentLanguage = function () {
        return this.translate.currentLang;
    };
    TranslateConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TranslateConfigService);
    return TranslateConfigService;
}());

//# sourceMappingURL=translate-config.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage, toastCtrl, navCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        //
        this.products = [];
        this.categories = [];
        this.transactions = [];
        this.user = [];
        this.summary = [];
    }
    Object.defineProperty(StorageProvider, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]]];
        },
        enumerable: true,
        configurable: true
    });
    StorageProvider.prototype.clearMem = function () {
        this.storage.clear();
    };
    StorageProvider.prototype.saveinMem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        //console.log("Hey"+this.tempcat)
                        _this.storage.get("categories").then(function (valNullcat) {
                            _this.storage.get("products").then(function (valNullprod) {
                                _this.storage.get("transactions").then(function (valNulltransac) {
                                    _this.storage.get("user").then(function (valNulluser) {
                                        _this.storage.get("summary").then(function (valNullSummary) {
                                            // console.log("b4set");
                                            // console.log(JSON.stringify(this.tempcat));
                                            // console.log(JSON.stringify(this.tempprod));
                                            // console.log(JSON.stringify(this.temptransac))  ;
                                            _this.storage.set("categories", "[]").then(function () {
                                                _this.storage.set("categories", JSON.stringify(_this.tempcat));
                                            });
                                            _this.storage.set("products", "[]").then(function () {
                                                _this.storage.set("products", JSON.stringify(_this.tempprod));
                                            });
                                            _this.storage.set("transactions", "[]").then(function () {
                                                _this.storage.set("transactions", JSON.stringify(_this.temptransac));
                                            });
                                            _this.storage.set("user", "[]").then(function () {
                                                _this.storage.set("user", JSON.stringify(_this.tempuser));
                                            });
                                            _this.storage.set("summary", "[]").then(function () {
                                                _this.storage.set("summary", JSON.stringify(_this.tempsummary));
                                                console.log(JSON.stringify(_this.tempsummary));
                                            });
                                            resolve();
                                        });
                                    });
                                });
                            });
                        });
                    })];
            });
        });
    };
    StorageProvider.prototype.setMem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tempprod, tempcat, temptransac, uid, tempuser, tempsummary;
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                    .firestore()
                                    .collection("users")
                                    .where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                                    .get()
                                    .then(function (querySnapshot) {
                                    querySnapshot.forEach(function (doc) {
                                        uid = doc.id;
                                        var usdat = doc.data();
                                        tempprod = usdat.products;
                                        temptransac = usdat.transactions;
                                        //.slice(Math.max(usdat.transactions.length - 10, 0))
                                        tempcat = usdat.categories;
                                        tempsummary = usdat.businessPerformance;
                                        tempuser = {
                                            business_address: usdat.business_address,
                                            business_name: usdat.business_name,
                                            businesstype: usdat.businesstype,
                                            cash_balance: usdat.cash_balance,
                                            created: usdat.created,
                                            currency: usdat.currency,
                                            discount: usdat.discount,
                                            language: usdat.language,
                                            owner: usdat.owner,
                                            owner_name: usdat.owner_name,
                                            ph_no: usdat.ph_no,
                                            taxrate: usdat.taxrate,
                                            id: doc.id,
                                        };
                                    });
                                })
                                    .catch(function (error) {
                                    console.log("Error getting documents: ", error);
                                })];
                            case 1:
                                _a.sent();
                                this.tempcat = tempcat;
                                this.tempprod = tempprod;
                                this.temptransac = temptransac;
                                this.uid = uid;
                                this.tempuser = tempuser;
                                this.tempsummary = tempsummary;
                                // console.log("setglobal");
                                // console.log(JSON.stringify(tempcat));
                                // console.log(JSON.stringify(tempprod));
                                // console.log(JSON.stringify(temptransac))  ;
                                return [4 /*yield*/, this.saveinMem()];
                            case 2:
                                // console.log("setglobal");
                                // console.log(JSON.stringify(tempcat));
                                // console.log(JSON.stringify(tempprod));
                                // console.log(JSON.stringify(temptransac))  ;
                                _a.sent();
                                return [4 /*yield*/, (this.uid != null)];
                            case 3: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    StorageProvider.prototype.backupStorage = function () {
        var _this = this;
        var uid;
        var parseprod;
        var parsetransac;
        var parsecat;
        this.storage.ready().then(function () {
            _this.storage
                .get("products")
                .then(function (val) {
                parseprod = JSON.parse(val);
                _this.storage
                    .get("transactions")
                    .then(function (val) {
                    parsetransac = JSON.parse(val);
                    _this.storage
                        .get("categories")
                        .then(function (val) {
                        parsecat = JSON.parse(val);
                        if (parseprod != null && parsetransac != null && parsecat != null) {
                            var snapshot = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                .firestore()
                                .collection("users")
                                .where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                                .get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    var _this = this;
                                    uid = doc.id;
                                    console.log(uid);
                                    // let existingTransactions = doc.data().transactions;
                                    // existingTransactions = existingTransactions.slice(Math.max(existingTransactions - 10, 0));
                                    // const updatedTransactions = existingTransactions.concat(parsetransac);
                                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                        .firestore()
                                        .collection("users")
                                        .doc(uid)
                                        .update({
                                        products: parseprod,
                                        transactions: parsetransac,
                                        categories: parsecat,
                                    })
                                        .then(function (doc) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    }); }); })
                                        .catch(function (err) {
                                        console.log(err);
                                    });
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            });
                        }
                    })
                        .catch(function (err) {
                        alert(err);
                    });
                })
                    .catch(function (err) {
                    alert(err);
                });
            })
                .catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.setUserDat = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.tempuser = data;
                this.storage.get("user").then(function (valNulluser) { return __awaiter(_this, void 0, void 0, function () {
                    var ud, snapshot;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.storage.set("user", "[]").then(function () {
                                    _this.storage.set("user", JSON.stringify(_this.tempuser));
                                });
                                console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                        .firestore()
                                        .collection("users")
                                        .where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid)
                                        .get()
                                        .then(function (querySnapshot) {
                                        querySnapshot.forEach(function (doc) {
                                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                                                .firestore()
                                                .collection("users")
                                                .doc(doc.id)
                                                .update({
                                                cash_balance: data.cash_balance,
                                                business_address: data.business_address,
                                                business_name: data.business_name,
                                                businesstype: data.businesstype,
                                                created: data.created,
                                                currency: data.currency,
                                                discount: data.discount,
                                                language: data.language,
                                                owner: data.owner,
                                                owner_name: data.owner_name,
                                                ph_no: data.ph_no,
                                                taxrate: data.taxrate,
                                                id: doc.id,
                                            });
                                        });
                                    })
                                        .catch(function (error) {
                                        console.log("Error getting documents: ", error);
                                    })];
                            case 1:
                                snapshot = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    StorageProvider.prototype.getUserDat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("user")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //   updateUserDat(data) {
    //     return new Promise((resolve, reject) => {
    //       this.storage.get('').then(async (val) => {
    //         if (val != null) {
    //           this.user = data;//update temp variable
    //           this.storage.set('user', JSON.stringify(this.user));
    // /////////////////////////
    // //update firebase userdat here
    // ////////////////////////////
    //           resolve();
    //         }
    //       })
    //     })
    //   }
    StorageProvider.prototype.addCategory = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage
                .get("categories")
                .then(function (val) {
                if (val === null || val == "null") {
                    _this.storage.set("categories", "[]").then(function () {
                        _this.storage.get("categories").then(function (valNull) {
                            _this.categories = JSON.parse(valNull);
                            _this.categories.push(data);
                            _this.storage.set("categories", JSON.stringify(_this.categories));
                        });
                    });
                }
                else {
                    _this.categories = JSON.parse(val);
                    _this.categories.push(data);
                    _this.storage.set("categories", JSON.stringify(_this.categories));
                }
                //this.products = JSON.stringify(this.products)
            })
                .catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getCategories = function () {
        return this.storage.get("categories");
    };
    StorageProvider.prototype.deleteCategory = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage
                .get("categories")
                .then(function (val) {
                _this.categories = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.categories;
                arr2 = arr.filter(function (val) {
                    return val.name != data.name;
                });
                _this.storage.set("categories", JSON.stringify(arr2));
            })
                .catch(function (err) {
                alert(err + 1);
            });
        });
    };
    StorageProvider.prototype.getSummary = function () {
        return this.storage.get("summary");
    };
    StorageProvider.prototype.addProduct = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage
                .get("products")
                .then(function (val) {
                if (val === null) {
                    _this.storage.set("products", "[]").then(function () {
                        _this.storage.get("products").then(function (valNull) {
                            _this.products = JSON.parse(valNull);
                            _this.products.push(data);
                            _this.storage.set("products", JSON.stringify(_this.products));
                        });
                    });
                }
                else {
                    _this.products = JSON.parse(val);
                    _this.products.push(data);
                    _this.storage.set("products", JSON.stringify(_this.products));
                }
                //this.products = JSON.stringify(this.products)
            })
                .catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getProducts = function () {
        return this.storage.get("products");
    };
    StorageProvider.prototype.addTransactions = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage
                .get("transactions")
                .then(function (val) {
                //console.log(val);
                if (val === null) {
                    _this.storage.set("transactions", "[]").then(function () {
                        _this.storage.get("transactions").then(function (valNull) {
                            _this.transactions = JSON.parse(valNull);
                            console.log("val " + valNull);
                            _this.transactions.push(data);
                            _this.storage.set("transactions", JSON.stringify(_this.transactions));
                        });
                    });
                }
                else {
                    _this.transactions = JSON.parse(val);
                    console.log("val yada");
                    _this.transactions.push(data);
                    _this.storage.set("transactions", JSON.stringify(_this.transactions));
                }
                //this.products = JSON.stringify(this.products)
            })
                .catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getTransactions = function () {
        return this.storage.get("transactions");
    };
    StorageProvider.prototype.deleteTransactions = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage
                .get("transactions")
                .then(function (val) {
                _this.transactions = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.transactions;
                arr2 = arr.filter(function (val) {
                    return val.datetime != data.datetime;
                });
                console.log(arr2);
                _this.storage.set("transactions", JSON.stringify(arr2));
            })
                .catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.searchProduct = function (barcode) {
        var _this = this;
        var needle = null;
        return new Promise(function (resolve, reject) {
            _this.storage.ready().then(function () {
                _this.storage
                    .get("products")
                    .then(function (val) {
                    if (val != null) {
                        _this.products = JSON.parse(val);
                        needle = _this.products.filter(function (product) {
                            return product.code === barcode;
                        });
                    }
                    resolve(needle);
                })
                    .catch(function (err) {
                    alert(err + 1);
                });
            });
        });
    };
    StorageProvider.prototype.updateProduct = function (data, old_code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("products").then(function (val) { return __awaiter(_this, void 0, void 0, function () {
                var newProdudcts_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(val != null)) return [3 /*break*/, 2];
                            this.products = JSON.parse(val);
                            newProdudcts_1 = [];
                            this.products.forEach(function (product) {
                                var newProduct = product.code == old_code ? data : product;
                                newProdudcts_1.push(newProduct);
                            });
                            return [4 /*yield*/, this.storage.set("products", JSON.stringify(newProdudcts_1))];
                        case 1:
                            _a.sent();
                            resolve();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    StorageProvider.prototype.swapProductUp = function (old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get("products").then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    for (var i = 0; i < _this.products.length; i++) {
                        if (_this.products[i].code == old_code && i != 0) {
                            var temp = _this.products[i];
                            _this.products[i] = _this.products[i - 1];
                            _this.products[i - 1] = temp;
                        }
                    }
                    //except.push(data);
                    _this.storage.set("products", JSON.stringify(_this.products));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.swapProductDown = function (old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get("products").then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    for (var i = 0; i < _this.products.length; i++) {
                        if (_this.products[i].code == old_code && i < _this.products.length - 1) {
                            var temp = _this.products[i];
                            _this.products[i] = _this.products[i + 1];
                            _this.products[i + 1] = temp;
                        }
                    }
                    //except.push(data);
                    _this.storage.set("products", JSON.stringify(_this.products));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.deleteProduct = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage
                .get("products")
                .then(function (val) {
                _this.products = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.products;
                arr2 = arr.filter(function (val) {
                    return val.code != data.code && val.name != data.name;
                });
                _this.storage.set("products", JSON.stringify(arr2));
            })
                .catch(function (err) {
                alert(err + 1);
            });
        });
    };
    StorageProvider.prototype.storageReady = function () {
        return this.storage.ready();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
    ], StorageProvider.prototype, "nav", void 0);
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_transaction_expense_transaction__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





//import { threadId } from 'worker_threads';
/**
 * Generated class for the AllTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllTransactionPage = /** @class */ (function () {
    function AllTransactionPage(navCtrl, translateConfigService, navParams, events, sp, view, tstCtrl, alertCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.events = events;
        this.sp = sp;
        this.view = view;
        this.tstCtrl = tstCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.updateOrCreate = "Create Receipt";
        this.itemsname = [];
        this.loitems = [];
        this.buttonColor = "#ffa100";
        this.buttonColor1 = "#ff0300";
        this.result = "";
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.itemsqty = [];
        this.itemsDiscount = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        this.userdata = {
            business_address: "",
            business_name: "",
            cash_balance: "",
            currency: "",
            created: "",
            language: "en",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
        this.flag = false;
        this.getUserData();
        this.events.subscribe("addRecCalc:created", function (data) {
            _this.updateOrCreate = "Update Receipt";
            //console.log("ENTERED!");
            console.log("Received 0 " + data);
            //SET itemsprice here? - make new addgen - diff button calls diff event that pushes rather than replaces
            //Same for Product Transaction Page
            //console.log(this.showSampleRec);
            var tempdat = JSON.parse(data);
            _this.showSampleRec = true;
            // this.itemsname=null;
            // this.itemsprice=null;
            // this.itemsqty=null;
            tempdat.forEach(function (element) {
                _this.itemsname.push(element.name);
                _this.itemsprice.push(element.price);
                _this.itemsqty.push(element.qty);
                _this.loitems.push(element);
                _this.itemsDiscount.push(element.discount);
            });
            //console.log(this.itemsprice);
        });
    }
    AllTransactionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log("ionViewDidLoad AllTransactionPage");
        //console.log("Size of array: " + this.itemsprice.length);
        if (this.itemsprice.length > 0) {
            this.showSampleRec = false;
            this.flag_mode = 1;
        }
        this.showSampleRec = false;
        this.delay(3000).then(function () {
            _this.getUserData();
        });
    };
    AllTransactionPage.prototype.ionViewWillLeave = function () {
        this.updateOrCreate = "Create Receipt";
    };
    AllTransactionPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllTransactionPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp
                        .getUserDat()
                        .then(function (val) {
                        _this.userdata = JSON.parse(val);
                        //console.log(this.userdata);
                    })
                        .catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AllTransactionPage.prototype.close = function () {
        this.view.dismiss();
    };
    AllTransactionPage.prototype.createRec = function () {
        var _this = this;
        var tempJSON = { itemslist: [] };
        this.showSampleRec = false;
        this.itemsprice.forEach(function (element, index) {
            if (_this.itemsname.length > 0 && index < _this.itemsname.length) {
                tempJSON.itemslist.push(_this.loitems[index]);
            }
            else {
                tempJSON.itemslist.push({
                    code: "000000",
                    cat: "NIL",
                    stock_qty: 0,
                    name: "Item " + index,
                    price: parseInt(element),
                    qty: _this.itemsqty[index],
                    discount: _this.itemsDiscount[index],
                });
            }
        });
        //var sampledat={ 'itemslist': myJsonString,};
        var myObjStr = JSON.stringify(tempJSON);
        //(this.navCtrl.parent as Tabs).select(2);
        this.view.dismiss();
        this.delay(300).then(function (any) {
            _this.events.publish("genRec:created", myObjStr);
            console.log("Sent: " + myObjStr);
            //your task after delay.
        });
        this.result = "";
        this.itemsname = [];
        this.itemsprice = [];
        this.lastsum = 0;
        this.itemsqty = [];
        this.itemsDiscount = [];
        this.loitems = [];
    };
    AllTransactionPage.prototype.btnClicked = function (btn) {
        var _this = this;
        this.getUserData();
        if (this.flag) {
            this.flag = false;
            this.btnClicked("C");
        }
        try {
            //console.log("CalculatorPage::btnClicked = " + btn);
            if (btn == "C") {
                this.result = "";
                this.itemsprice = [];
                this.lastsum = 0;
                this.itemsqty = [];
                this.itemsDiscount = [];
                this.showSampleRec = false;
            }
            else if (btn == "=") {
                this.showSampleRec = true;
                if (this.buttonColor == "#ffa100") {
                    this.buttonColor = "#ff0300";
                    this.buttonColor1 = "#ffa100";
                }
                else {
                    this.buttonColor = "#ffa100";
                    this.buttonColor1 = "#ff0300";
                }
                //IF LAST = character then remove that character
                while (this.result.includes("%")) {
                    if (!this.result.includes("*"))
                        throw Error;
                    var index1 = this.result.indexOf("%");
                    var index2 = this.result.substring(0, index1).lastIndexOf("*");
                    var num = parseFloat(this.result.substring(index2 + 1, index1)) / 100;
                    this.result = this.result.substring(0, index2 + 1) + num + this.result.substring(index1 + 1);
                }
                var answ_1 = this.result.split("+");
                // if(this.result.includes('-')){
                //   answ=this.result.split('+').join('-').split('-');
                // }
                var temp_1;
                answ_1.forEach(function (element, index) {
                    var discAmt;
                    if (!element.includes("-"))
                        discAmt = 0;
                    else {
                        discAmt = parseFloat(element.substring(element.indexOf("-") + 1));
                        answ_1[index] = element.substring(0, element.indexOf("-"));
                        element = answ_1[index];
                    }
                    if (element.includes("*")) {
                        console.log(_this.discEval(element));
                        var l = _this.discEval(element).split("/");
                        _this.itemsqty.push(parseInt(l[1]));
                        _this.itemsprice.push(l[0]);
                        discAmt += parseFloat(l[2]);
                    }
                    else if (element.includes("/")) {
                        answ_1[index] = element.substring(0, element.indexOf("/"));
                        _this.itemsprice.push(answ_1[index]);
                        temp_1 = Math.round((1 / parseInt(element.substring(element.indexOf("/") + 1))) * 100) / 100;
                        //console.log(temp);
                        _this.itemsqty.push(temp_1);
                    }
                    else {
                        if (element != "") {
                            _this.itemsprice.push(element);
                            _this.itemsqty.push(parseInt("1"));
                            temp_1 = 1;
                        }
                    }
                    //console.log("ItemsPrice[index]: " + answ[index] + " Qty: " + temp);
                    _this.itemsDiscount.push((discAmt * 100) / (parseFloat(_this.itemsprice[index]) * _this.itemsqty[index]));
                    //console.log("Element: "+element+" DiscAmt: "+discAmt+" Discount: "+(discAmt * 100) / (parseFloat(this.itemsprice[index]) * this.itemsqty[index]))
                    // this.itemsprice.push(
                    //   {'name': "Blank_Item",
                    //   'price': parseInt(element),
                    //   'qty': 0,
                    //   })
                });
                //flag_mode=0 means normal (sample reciept is generated)
                //if(flag_mode==1) then go to reciept page directly - call createRec()
                //if(flag_mode=2) then just use as calc - no reciept is generated
                console.log(this.itemsprice);
                console.log(this.itemsqty);
                this.result = eval(this.result) + "";
                this.lastsum = 0;
                //this.lastsum=parseInt(this.result);
                for (var i = 0; i < this.itemsprice.length; i++) {
                    this.lastsum = this.lastsum + parseInt(this.itemsprice[i]) * this.itemsqty[i];
                    console.log(this.lastsum);
                }
                this.createRec();
            }
            else if (btn == "b") {
                this.result = this.result.substring(0, this.result.length - 1);
                this.lastchar = this.result.charAt(this.result.length - 1);
            }
            else if (btn == "squareroot") {
                this.result = Math.sqrt(eval(this.result)) + "";
            }
            else if (btn == "square") {
                this.result = eval("(" + this.result + ") * ( " + this.result + ")");
            }
            else if (btn == "reciproc") {
                this.result = eval(1 + "/ (" + this.result + ")");
            }
            else {
                if (parseInt(this.result) == this.lastsum) {
                    this.result = this.result.substring(0, 0);
                }
                console.log("Lastchar: " + this.lastchar + " Result: " + this.result);
                if ((btn == "+" || btn == "-" || btn == "*" || btn == "/" || btn == "%") &&
                    (this.lastchar == "+" || this.lastchar == "-" || this.lastchar == "*" || this.lastchar == "/")) {
                    this.result = this.result = this.result.substring(0, this.result.length - 1);
                }
                if (this.lastchar == "%" && btn != "+" && btn != "-") {
                    this.result = this.result = this.result.substring(0, this.result.length - 1);
                }
                this.lastchar = btn;
                this.result += btn;
            }
        }
        catch (err) {
            this.result = "Input Error!";
            this.itemsprice = [];
            this.lastsum = 0;
            this.itemsqty = [];
            this.itemsDiscount = [];
            this.loitems = [];
            this.flag = true;
        }
        finally {
        }
    };
    AllTransactionPage.prototype.discEval = function (expression) {
        var l = expression.split("*");
        var s = "";
        if (l.length == 3) {
            if (l[2] > 1) {
                console.log("Discount amount exceeds 1");
                throw Error;
            }
            else {
                l[2] = (1 - parseFloat(l[2])) * parseFloat(l[1]) * l[0];
                s = l.join("/");
            }
        }
        else if (l.length == 2) {
            if (parseFloat(l[1]) <= 1) {
                l[1] = (1 - parseFloat(l[1])) * parseFloat(l[0]);
                s = l[0] + "/1/" + l[1];
            }
            else {
                s = l[0] + "/" + l[1] + "/0";
            }
        }
        else {
            console.log(l.length + " is length of temp list");
        }
        return s;
    };
    AllTransactionPage.prototype.addSalesExp = function () {
        var _this = this;
        var msg = this.translateConfigService.getTranslatedMessage("Add");
        var msg1 = this.translateConfigService.getTranslatedMessage("Sales");
        var msg2 = this.translateConfigService.getTranslatedMessage("Expense");
        var msg3 = this.translateConfigService.getTranslatedMessage("CANCEL");
        var alert = this.alertCtrl.create({
            //@ts-ignore
            title: msg.value,
            buttons: [
                {
                    //@ts-ignore
                    text: msg1.value,
                    handler: function () {
                        _this.navCtrl.parent.select(1);
                    },
                },
                {
                    //@ts-ignore
                    text: msg2.value,
                    handler: function () {
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__expense_transaction_expense_transaction__["a" /* ExpenseTransactionPage */], { data: "ViewExp" });
                    },
                },
                {
                    //@ts-ignore
                    text: msg3.value,
                    role: "cancel",
                },
            ],
        });
        alert.present();
    };
    AllTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-all-transaction",template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\all-transaction\all-transaction.html"*/'<!--\n\n  Generated template for the AllTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<div class="modal">\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <h4 style="padding-left: 10px;">Calculator</h4>\n\n      <ion-buttons end>\n\n        <button ion-button style="background-color: red; color: white" (click)="close()">{{"Close"|translate}}</button>\n\n      </ion-buttons>\n\n    </ion-navbar>  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <!-- <ion-fab bottom right>\n\n        <button ion-fab color="primary" item-right><ion-icon name="calculator"></ion-icon></button>\n\n      </ion-fab> -->\n\n      <!-- <ion-card *ngIf="showSampleRec==false">\n\n        ကျေးဇူးပြုပြီးပစ္စည်းအတွက်ပမာဏကိုမြှောက်ပါ၊ ရှိပြီးသားငွေတောင်းခံလွှာကိုထည့်ရန်တူညီသောစာလုံးကိုနှိပ်ပါ။\n\n\n\n        အလွတ်ပစ္စည်းပေါင်းများစွာကိုထည့်သွင်းလိုပါက * qty တစ်ခုချင်းစီကိုရိုက်ထည့်ပြီးနောက်တစ်ခုကိုရိုက်ထည့်ရန် + သင်္ကေတကိုနှိပ်ပါ\n\n      </ion-card>\n\n       -->\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-12 col-md-6>\n\n\n\n          <div class="calculator">\n\n            <div class="header">\n\n              <div class="window"></div>\n\n              <div class="input">\n\n                <!-- <ion-row>\n\n                  \n\n                  <ion-input type="text" placeholder="0" name="display" [(ngModel)]="result">\n\n                  </ion-input>\n\n                  \n\n                 \n\n                  <ion-icon name="backspace" (click)="btnClicked(\'b\')"></ion-icon>\n\n                  \n\n                </ion-row>  -->\n\n                <ion-row>\n\n                    <ion-col col-10>\n\n                      <div style="text-align: left; overflow-y: scroll; height: 80px;">\n\n                      {{result}}\n\n                  </div>\n\n                  </ion-col>\n\n\n\n                   <!-- <ion-col col-10>\n\n                      <ion-scroll scrollX="true" style="  white-space: nowrap; height: 80px;">\n\n                        <div style="text-align: right;">\n\n                          {{result}}\n\n                        </div>\n\n                      </ion-scroll>\n\n                  </ion-col> -->\n\n\n\n    \n\n                \n\n                  \n\n                  <ion-col col-2> <ion-icon name="backspace" (click)="btnClicked(\'b\')"></ion-icon>\n\n                  </ion-col>\n\n                  \n\n                </ion-row>\n\n               \n\n                    \n\n                \n\n              </div>\n\n             \n\n              \n\n            </div>\n\n            <div class="keys">\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'7\')">7</span>\n\n                  <span (click)="btnClicked(\'8\')">8</span>\n\n                  <span (click)="btnClicked(\'9\')">9</span>\n\n                </div>\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'*\')">×</span>\n\n\n\n                </div>\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'4\')">4</span>\n\n                  <span (click)="btnClicked(\'5\')">5</span>\n\n                  <span (click)="btnClicked(\'6\')">6</span>\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'+\')">+</span>\n\n           </div>\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'1\')">1</span>\n\n                  <span (click)="btnClicked(\'2\')">2</span>\n\n                  <span (click)="btnClicked(\'3\')">3</span>\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'/\')">÷</span>\n\n                </div>\n\n\n\n\n\n              </div>\n\n\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                    \n\n                    <span (click)="btnClicked(\'.\')">.</span>\n\n                  <span (click)="btnClicked(\'0\')">0</span>\n\n                  <span (click)="btnClicked(\'%\')">%</span>\n\n                  \n\n\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                    <span (click)="btnClicked(\'-\')">-</span>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <div class="lastrow">\n\n                <span (click)="btnClicked(\'C\')">{{"Clear"|translate}}</span>\n\n                </div>\n\n                \n\n                </div>\n\n                <div class="symbol action">\n\n                    <span (click)="btnClicked(\'=\')">=</span>\n\n                  </div>\n\n              </div>\n\n\n\n\n\n            </div>\n\n          </div>\n\n\n\n    \n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-6>\n\n\n\n<!-- \n\n        <ion-card *ngIf="showSampleRec==true"> \n\n\n\n                <ion-grid>\n\n          \n\n                  <ion-row> <ion-col style="text-align: center; padding-top: 5px;">{{userdata? userdata.business_name: null}} </ion-col> </ion-row>\n\n          \n\n                  <ion-row>\n\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata?userdata.business_address:null}}</ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata?userdata.ph_no:null}}</ion-col>\n\n                  </ion-row>          \n\n                  <ion-row style="padding-top: 5px;">\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><b>{{"Sl" | translate}}</b></ion-col>\n\n                      <ion-col col-5 style="color: black; font-size: 10px; text-align: center"><b>{{"Name" | translate}}</b></ion-col>\n\n                      <ion-col col-3 style="color: black; font-size: 10px; text-align: center"><b>{{"Price"| translate}}</b></ion-col>\n\n                      <ion-col col-3 style="color: black; font-size: 10px; text-align: center"><b>{{"Qty"| translate}}</b></ion-col>\n\n                 </ion-row>\n\n          \n\n                 \n\n          \n\n                  <ion-list *ngFor="let item of itemsprice; let i = index" no-lines>\n\n          \n\n              \n\n                    <ion-row>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center">{{i+1}}.</ion-col>\n\n                        <ion-col col-5 style="color: black; font-size: 10px; text-align: center">\n\n                         Item {{i+1}}</ion-col>   \n\n                        <ion-col col-3 style="color: black; font-size: 10px; text-align: center">{{item}}</ion-col>\n\n                        <ion-col col-3 style="color: black; font-size: 10px; text-align: center">{{itemsqty[i]}}</ion-col>\n\n\n\n                    </ion-row>\n\n                \n\n          \n\n                  </ion-list>\n\n          \n\n                  <ion-row padding>\n\n                      <ion-col col-1></ion-col>  \n\n                    <ion-col col-4 style="text-align: center;font-size: 10px;"><b>{{"Total"| translate}}</b> </ion-col>\n\n                      <ion-col col-2 style="text-align: center;font-size: 10px;"><b>{{lastsum}}</b> </ion-col>\n\n                      <ion-col col-5></ion-col>\n\n                    </ion-row>\n\n          \n\n          \n\n                   \n\n          \n\n          \n\n                </ion-grid>\n\n          \n\n          \n\n          \n\n\n\n        </ion-card> -->\n\n\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <!-- Dynamically Generate All transactions from backend - see feed from prev -->\n\n\n\n</ion-content>\n\n<!-- \n\n<ion-footer style="background-color: #ffffff">\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n            <button ion-button (click)="createRec()" full style="background-color: #FFA500" *ngIf="showSampleRec==true">\n\n              {{updateOrCreate|translate}}\n\n          </button>\n\n          <button ion-button (click)="addSalesExp()" full style="background-color: #FFA500" *ngIf="showSampleRec==false">\n\n              {{"Add Sales/Expenses" |translate}}\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n   \n\n</ion-footer> -->\n\n</div>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech-december\open-pos\src\pages\all-transaction\all-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AllTransactionPage);
    return AllTransactionPage;
}());

//# sourceMappingURL=all-transaction.js.map

/***/ })

},[386]);
//# sourceMappingURL=main.js.map