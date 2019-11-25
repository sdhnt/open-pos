webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_home_transaction_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(13);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.listOfCurrency = [];
        this.listOfLang = [];
        this.name = "";
        this.email = "";
        this.password = "";
        this.businessname = "";
        this.businessaddress = "";
        this.businesstype = "";
        this.phno = "";
        this.language = "";
        this.currency = "";
        this.nextbtn = 0;
        this.nextbtn = 0;
        this.loadDropDowns();
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
        this.nextbtn = 0;
    };
    SignUpPage.prototype.nextPg = function () {
        this.nextbtn = 1;
    };
    SignUpPage.prototype.prevPg = function () {
        this.nextbtn = 0;
    };
    SignUpPage.prototype.loadDropDowns = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("sign-up").get()
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
    SignUpPage.prototype.signup = function () {
        var _this = this;
        var message = this.translateConfigService.getTranslatedMessage('Please wait while creating your profile ...');
        this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 3000
        }).present();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (data) {
            var newUser = data.user;
            newUser.updateProfile({
                displayName: _this.name,
            }).then(function (res) {
                console.log("Profile Updated");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").add({
                    // file_name: this.text,
                    created: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp(),
                    owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                    owner_name: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                    business_name: _this.businessname,
                    businesstype: _this.businesstype,
                    business_address: _this.businessaddress,
                    ph_no: _this.phno,
                    language: _this.language,
                    currency: _this.currency,
                    cash_balance: _this.cb,
                    discount: _this.discount,
                    taxrate: _this.taxrate,
                    categories: [{ name: "Example" }],
                    products: [{ cat: "Example", code: "0000", cost: "0", name: "Example Product", price: "0", stock_qty: "0", url: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", wholesale_price: "0", }],
                    transactions: [{ datetime: new Date(), discount: 0, discountlist: [], itemslist: [{ cat: "Example", code: "0000", cost: "0", name: "Example Product", price: "0", stock_qty: "0", }], pnllist: [], prodidlist: [], taxrate: 0, totalatax: 0, totaldisc: 0, totalsum: 0, }]
                }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var title, message;
                    return __generator(this, function (_a) {
                        console.log(doc);
                        title = this.translateConfigService.getTranslatedMessage('Account Created');
                        message = this.translateConfigService.getTranslatedMessage('Your account has been created successfully');
                        this.alertCtrl.create({
                            // @ts-ignore
                            title: title.value,
                            // @ts-ignore
                            message: message.value,
                            buttons: [{
                                    text: "OK",
                                    handler: function () {
                                        _this.sp.clearMem();
                                        _this.sp.setMem();
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__transaction_home_transaction_home__["a" /* TransactionHomePage */]); //navigate to feeds page
                                    } //end handler
                                }] //end button
                        }).present();
                        return [2 /*return*/];
                    });
                }); }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 3000
                }).present();
            });
        });
    };
    SignUpPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n		<ion-navbar transparent>\n\n		</ion-navbar>\n\n	  </ion-header>\n\n	  <ion-content padding>\n\n		  \n\n			  <button ion-button block clear color="light" class="nametop"><b>Open</b></button> \n\n	  \n\n	  <ion-grid style="width: 75%;">\n\n	  \n\n		  <div *ngIf="nextbtn!=1">\n\n		  <ion-row class="row-style1" justify-content-center align-items-center style="height: 100%">{{"Register a business"|translate}}</ion-row>\n\n		  <ion-row class="row-style"> \n\n			  <ion-icon name="person" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="text" placeholder="{{\'Name\'|translate}}" [(ngModel)]="name"></ion-input>\n\n		  </ion-row>\n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="email" placeholder="{{ \'email\' | translate }}" [(ngModel)]="email"> </ion-input>\n\n		  </ion-row>\n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="password" placeholder="\'password\'|translate"  [(ngModel)]="password"></ion-input>\n\n		  </ion-row>\n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="home" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="text" placeholder="{{\'Business Name\'|translate}} "  [(ngModel)]="businessname"></ion-input>\n\n		  </ion-row>\n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="pin" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="text" placeholder="{{\'Full Busines Address\'|translate}}"  [(ngModel)]="businessaddress"></ion-input>\n\n		  </ion-row>\n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="call" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="text" placeholder="{{\'Phone Number\'|translate}}"  [(ngModel)]="phno"></ion-input>\n\n		  </ion-row>\n\n	  <button ion-button block round outline color="light" style="margin-top: 10px;" (click)="nextPg()">{{\'Next Page\'|translate}}</button>\n\n	  </div>\n\n	  <div *ngIf="nextbtn==1">\n\n			  <button ion-button block round outline color="light" style="margin-bottom: 10px;" (click)="prevPg()">{{\'Back\'|translate}}</button>\n\n		  <ion-row class="row-style">\n\n				  <ion-icon name="globe" color="semi-light" class="icon"></ion-icon>\n\n				  <ion-label>{{"Business Type"|translate}}</ion-label>\n\n				  <ion-select [(ngModel)]="businesstype">\n\n					  <ion-option *ngFor="let b of listOfBType" value="{{ b }}">{{ b }}</ion-option>\n\n				  </ion-select>\n\n				  <!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n\n		 </ion-row>\n\n	  \n\n	  \n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="chatboxes" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-label>{{"Language"|translate}}</ion-label>\n\n			  <ion-select [(ngModel)]="language">\n\n				  <ion-option *ngFor="let l of listOfLang" value="{{ l }}">{{ l }}</ion-option>\n\n			  </ion-select>\n\n			  <!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n\n		  </ion-row>\n\n	  \n\n		  <ion-row class="row-style">\n\n				  <ion-icon name="logo-usd" color="semi-light" class="icon"></ion-icon>\n\n				  <ion-label>{{"Currency"|translate}}</ion-label>\n\n				  <ion-select [(ngModel)]="currency">\n\n					  <ion-option *ngFor="let c of listOfCurrency" value = "{{ c }}">{{ c }}</ion-option>\n\n				  </ion-select>\n\n				  <!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n\n			  </ion-row>\n\n	  \n\n	  \n\n		  <ion-row class="row-style">\n\n			  <ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n\n			  <ion-input type="number" placeholder="{{\'Starting Cash Balance\'|translate}}"  [(ngModel)]="cb"></ion-input>\n\n		  </ion-row>\n\n	  \n\n		  <ion-row class="row-style">\n\n				  <ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n\n				  <ion-input type="number" placeholder="{{\'Usual Discount %\'|translate}}"  [(ngModel)]="discount"></ion-input>\n\n			  </ion-row>\n\n	  \n\n			  <ion-row class="row-style">\n\n					  <ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n\n					  <ion-input type="number" placeholder="{{ \'Usual Tax %\' | translate }}"  [(ngModel)]="taxrate"></ion-input>\n\n				  </ion-row>\n\n		  <ion-row>\n\n			  <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signup()">{{"Sign Up"|translate}}</button>\n\n		  </ion-row>\n\n	  </div>\n\n	  </ion-grid>\n\n	  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="goBack()">{{"Already have an account? Log-in"|translate}}</button>\n\n	  </ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_esc_pos_encoder_ionic__);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





;




/**
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomeTransactionPage = /** @class */ (function () {
    function IncomeTransactionPage(navCtrl, navParams, events, sp, toastCtrl, translateConfigService, barcodeScanner, printer, alertCtrl, loadCtrl) {
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
        this.taxbtn = 0;
        this.userdata = { business_address: "",
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
        this.datastore = { 'itemslist': [] };
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        this.newItemName = "";
        this.newUnitPrice = null;
        this.newUnitQty = null;
        this.newItemCat = "";
        this.listArray = [];
        this.prodidlist = [];
        this.pnllist = [];
        this.datetime = Date.now();
        this.tax_vat = [];
        this.discountlist = [];
        this.inputData = {};
        //console.log("Recieved -1" + this.navParams.get('itemslist'));
        this.getUserData();
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
    IncomeTransactionPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp.getUserDat().then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    }).catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    IncomeTransactionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IncomeTransactionPage');
        this.getCategories();
        this.getUserData();
        this.events.subscribe('genRec:created', function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            var JSONitems = JSON.parse(data);
            _this.datastore = JSONitems;
            console.log(_this.datastore.itemslist);
            _this.lastsum = 0;
            for (var i = 0; i < _this.datastore.itemslist.length; i++) {
                _this.lastsum = _this.lastsum + (_this.datastore.itemslist[i].price * _this.datastore.itemslist[i].qty);
                console.log(_this.lastsum);
            }
            _this.lastsumdisc = _this.lastsum * (1.0 - (_this.discount / 100));
            _this.lastsumtax = _this.lastsumdisc * (1.0 + (_this.taxrate / 100));
        });
    };
    IncomeTransactionPage.prototype.updateRec = function () {
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
        this.lastsumdisc = this.lastsum * (1.0 - (this.discount / 100));
        this.lastsumtax = this.lastsumdisc * (1.0 + (this.taxrate / 100));
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
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    curprod = val[0];
                    var message = _this.translateConfigService.getTranslatedMessage('Found Product');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value + " " + val[0].name,
                        duration: 2000
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
                    _this.datastore.itemslist.push(curprod);
                    //this.lastsum=this.lastsum+curprod.price;
                    _this.lastsum = 0;
                    for (var i = 0; i < _this.datastore.itemslist.length; i++) {
                        _this.lastsum = _this.lastsum + (_this.datastore.itemslist[i].price * _this.datastore.itemslist[i].qty);
                    }
                    _this.lastsumdisc = _this.lastsum * (1.0 - (_this.discount / 100));
                    _this.lastsumtax = _this.lastsumdisc * (1.0 + (_this.taxrate / 100));
                }
                else {
                    var message = _this.translateConfigService.getTranslatedMessage('Get Product!!!');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000
                    });
                    toast.present();
                }
            });
        }).catch(function (err) {
            console.log('Error', err);
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
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
        this.lastsumdisc = this.lastsum * (1.0 - (this.discount / 100));
        this.lastsumtax = this.lastsumdisc * (1.0 - (this.taxrate / 100));
        console.log("I: " + index);
        console.log(this.datastore.itemslist[index]);
    };
    IncomeTransactionPage.prototype.addQty = function (index) {
        //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
        this.datastore.itemslist[index].qty = parseInt(this.datastore.itemslist[index].qty) + 1;
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
        this.lastsumdisc = this.lastsum * (1.0 - (this.discount / 100));
        this.lastsumtax = this.lastsumdisc * (1.0 - (this.taxrate / 100));
    };
    IncomeTransactionPage.prototype.removeQty = function (index) {
        //this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
        this.datastore.itemslist[index].qty = this.datastore.itemslist[index].qty - 1;
        if (this.datastore.itemslist[index].qty == 0) {
            this.removeItem(index);
        }
        this.lastsum = 0;
        for (var i = 0; i < this.datastore.itemslist.length; i++) {
            this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
        }
        this.lastsumdisc = this.lastsum * (1.0 - (this.discount / 100));
        this.lastsumtax = this.lastsumdisc * (1.0 - (this.taxrate / 100));
    };
    IncomeTransactionPage.prototype.addNewItem = function () {
        if (this.newItemName != "" && this.newUnitPrice != null && this.newUnitQty != null) {
            var newitem = {
                code: "000000",
                name: this.newItemName,
                price: this.newUnitPrice,
                qty: this.newUnitQty,
            };
            this.datastore.itemslist.push(newitem);
            this.newItemCat = "";
            this.newItemName = "";
            this.newUnitPrice = null;
            this.newUnitQty = null;
            this.lastsum = 0;
            for (var i = 0; i < this.datastore.itemslist.length; i++) {
                this.lastsum = this.lastsum + (this.datastore.itemslist[i].price * this.datastore.itemslist[i].qty);
            }
            this.lastsumdisc = this.lastsum * (1.0 - (this.discount / 100));
            this.lastsumtax = this.lastsumdisc * (1.0 - (this.taxrate / 100));
        }
    };
    IncomeTransactionPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    IncomeTransactionPage.prototype.cancelRec = function () {
        this.datastore.itemslist = [];
        this.lastsum = 0;
        this.lastsumdisc = 0;
        this.lastsumtax = 0;
        this.discount = 0;
        this.taxrate = 0;
        this.taxbtn = 0;
        this.discbtn = 0;
        this.toastCtrl.create({
            message: "ငွေလက်ခံဖြတ်ပိုင်းဖျက်သိမ်းခဲ့သည်",
            duration: 2000,
        }).present();
    };
    IncomeTransactionPage.prototype.updateProduct = function () {
    };
    IncomeTransactionPage.prototype.updateCb = function (postransacsum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getUserData();
                this.userdata.cash_balance = (parseInt(this.userdata.cash_balance) + parseInt(postransacsum)).toString();
                this.sp.setUserDat(this.userdata);
                return [2 /*return*/];
            });
        });
    };
    IncomeTransactionPage.prototype.saveRec = function () {
        var _this = this;
        if (this.datastore.itemslist.length == 0) {
        }
        else {
            var data_1 = {
                "itemslist": this.datastore.itemslist,
                "totalsum": this.lastsum,
                "prodidlist": this.prodidlist,
                "pnllist": this.pnllist,
                "datetime": this.datetime,
                "taxrate": this.taxrate,
                "discountlist": this.discountlist,
                "discount": this.discount,
                "totaldisc": this.lastsumdisc,
                "totalatax": this.lastsumtax,
            };
            this.datastore.itemslist.forEach(function (product) {
                if (product.code != "000000") {
                    var data1 = {
                        "code": product.code,
                        "name": product.name,
                        "price": product.price,
                        "cost": product.cost,
                        "cat": product.cat,
                        "url": product.url,
                        "stock_qty": (product.stock_qty - product.qty),
                    };
                    _this.sp.updateProduct(data1, product.code).then(function () {
                    });
                }
            });
            this.sp.storageReady().then(function () {
                console.log(data_1);
                _this.sp.addTransactions(data_1);
                _this.updateCb(_this.lastsum).then(function () { _this.events.publish('cbUpdate:created', 0); });
                var message = _this.translateConfigService.getTranslatedMessage('Finish');
                var toast = _this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 3000
                });
                //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well 
                _this.datastore.itemslist = [];
                _this.lastsum = 0;
                _this.lastsumtax = 0;
                _this.lastsumdisc = 0;
                _this.discount = 0;
                _this.taxrate = 0;
                _this.taxbtn = 0;
                _this.discbtn = 0;
                _this.sp.backupStorage();
                toast.present();
            });
        }
        this.navCtrl.parent.select(0);
    };
    IncomeTransactionPage.prototype.addCalc = function () {
        var _this = this;
        this.navCtrl.parent.select(0);
        this.delay(300).then(function (any) {
            _this.events.publish('addRecCalc:created', JSON.stringify(_this.datastore.itemslist)); //SEND ITEMS PRICE
            console.log("Sent: 1332 ");
            //your task after delay.
        });
    };
    IncomeTransactionPage.prototype.addSingleProd = function (item, index) {
        var _this = this;
        this.navCtrl.parent.select(1);
        this.delay(300).then(function (any) {
            _this.events.publish('addSingleProd:created', JSON.stringify(item), JSON.stringify(index), JSON.stringify(_this.datastore.itemslist));
            console.log("Sent: 1330 ");
            //your task after delay.
        });
    };
    IncomeTransactionPage.prototype.addProdList = function () {
        var _this = this;
        this.navCtrl.parent.select(1);
        this.delay(300).then(function (any) {
            _this.events.publish('addRecProd:created', JSON.stringify(_this.datastore.itemslist));
            console.log("Sent: 1331 ");
            //your task after delay.
        });
    };
    IncomeTransactionPage.prototype.printRec = function () {
        var _this = this;
        if (this.datastore.itemslist.length == 0) {
        }
        else {
            var data_2 = {
                "itemslist": this.datastore.itemslist,
                "totalsum": this.lastsum,
                "prodidlist": this.prodidlist,
                "pnllist": this.pnllist,
                "datetime": this.datetime,
                "taxrate": this.taxrate,
                "discountlist": this.discountlist,
                "discount": this.discount,
                "totaldisc": this.lastsumdisc,
                "totalatax": this.lastsumtax,
            };
            this.datastore.itemslist.forEach(function (product) {
                if (product.code != "000000") {
                    var data1 = {
                        "code": product.code,
                        "name": product.name,
                        "price": product.price,
                        "cost": product.cost,
                        "cat": product.cat,
                        "url": product.url,
                        "stock_qty": (product.stock_qty - product.qty),
                    };
                    _this.sp.updateProduct(data1, product.code).then(function () {
                    });
                }
            });
            this.sp.storageReady().then(function () {
                console.log(data_2);
                _this.sp.addTransactions(data_2);
                _this.updateCb(_this.lastsum).then(function () { _this.events.publish('cbUpdate:created', 0); });
                _this.sp.backupStorage();
                _this.prepareToPrint();
            });
        }
    };
    IncomeTransactionPage.prototype.showToast = function (data) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            message: data,
            position: 'bottom',
        });
        toast.present();
    };
    IncomeTransactionPage.prototype.print = function (device, data) {
        var _this = this;
        console.log('Device mac: ', device);
        console.log('Data: ', JSON.stringify(data));
        var load = this.loadCtrl.create({
            content: 'Printing...',
        });
        load.present();
        this.printer.connectBluetooth(device).subscribe(function (status) {
            console.log(status);
            _this.printer
                .printData(data)
                .then(function (printStatus) {
                console.log(printStatus);
                var alert = _this.alertCtrl.create({
                    title: 'Successful print!',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                load.dismiss();
                                _this.printer.disconnectBluetooth();
                            },
                        },],
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
                    title: 'There was an error printing, please try again!',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                load.dismiss();
                                //this.printer.disconnectBluetooth();
                            },
                        },],
                });
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'There was an error connecting to the printer, please try again!',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            load.dismiss();
                            //this.printer.disconnectBluetooth();
                        },
                    },],
            });
            alert.present();
        });
    };
    IncomeTransactionPage.prototype.prepareToPrint = function () {
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
            .codepage('cp936')
            .align('center')
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .line(this.userdata.business_name)
            .newline()
            .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_NORMAL)
            .line(this.userdata.business_address)
            .newline()
            .line(this.userdata.ph_no)
            .newline()
            .text(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].HORIZONTAL_LINE.HR_58MM)
            .newline();
        if (this.datastore != null) {
            result.align('left');
            this.datastore.itemslist.forEach(function (element) {
                result.text(element.name)
                    .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text(element.qty)
                    .raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].FEED_CONTROL_SEQUENCES.CTL_HT)
                    .text(element.price)
                    .line("Hello World!");
            });
            result.newline()
                .line("Total: " + this.lastsum);
        }
        result.raw(__WEBPACK_IMPORTED_MODULE_6__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE)
            .newline()
            .line("")
            .newline()
            .line("")
            .newline().cut('full');
        this.mountAlertBt(result.encode());
    };
    IncomeTransactionPage.prototype.mountAlertBt = function (data) {
        var _this = this;
        this.receipt = data;
        console.log(this.receipt);
        var alert = this.alertCtrl.create({
            title: 'Select your printer',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Select printer',
                    handler: function (device) {
                        if (!device) {
                            _this.showToast('Select a printer!');
                            return false;
                        }
                        console.log(device);
                        _this.print(device, _this.receipt);
                    },
                },
            ],
        });
        this.printer.enableBluetooth().then(function () {
            _this.printer
                .searchBluetooth()
                .then(function (devices) {
                devices.forEach(function (device) {
                    console.log('Devices: ', JSON.stringify(device));
                    alert.addInput({
                        name: 'printer',
                        value: device.address,
                        label: device.name,
                        type: 'radio',
                    });
                });
                alert.present();
            })
                .catch(function (error) {
                console.log(error);
                _this.showToast('There was an error connecting the printer, please try again!');
                _this.mountAlertBt(_this.receipt);
            });
        })
            .catch(function (error) {
            console.log(error);
            _this.showToast('Error activating bluetooth, please try again!');
            _this.mountAlertBt(_this.receipt);
        });
    };
    IncomeTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-income-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\income-transaction\income-transaction.html"*/'<!--\n\n  Generated template for the IncomeTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n \n\n\n\n    <ion-card >\n\n\n\n      <ion-grid>\n\n\n\n        <ion-row> <ion-col style="text-align: center; padding-top: 5px;"> {{userdata?userdata.business_name:null}}  </ion-col> </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-12 style="color: grey;  text-align: center"> {{userdata?userdata.business_address:null}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12 style="color: grey; text-align: center">  {{userdata?userdata.ph_no:null}}</ion-col>\n\n        </ion-row>\n\n\n\n            <ion-row style="padding-top: 5px;">\n\n            <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><b>{{"Sl" | translate}}</b></ion-col>\n\n            <ion-col col-4 style="color: black; font-size: 10px; text-align: center"><b>{{"Name" | translate}}</b></ion-col>\n\n            <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>{{"Price"| translate}}</b></ion-col>\n\n            <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>{{"Qty"| translate}}</b></ion-col>\n\n            <ion-col col-3></ion-col>\n\n             </ion-row>\n\n       \n\n\n\n        <ion-list *ngFor="let item of datastore.itemslist; let i = index" no-lines>\n\n\n\n    \n\n          <ion-row>\n\n              <ion-col col-1 style="color: black; text-align: center;">{{i+1}}.</ion-col>\n\n              <ion-col col-4 style="color: black; text-align: center;">\n\n                <div *ngIf="item.name==\'ထုတ်ကုန်\'; else itemexist">\n\n                  <button ion-button small (click)="addSingleProd(item,i)">{{"Choose"|translate}}</button>\n\n                </div>\n\n                <ng-template #itemexist>{{item.name}}</ng-template>\n\n              </ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">{{item.price}}</ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">{{item.qty}}</ion-col>\n\n              <ion-col col-1 style="color: black;   text-align: center;"><ion-icon name="add" style=" color: green" (click)="addQty(i)"></ion-icon></ion-col>\n\n              <ion-col col-1 style="color: black;   text-align: center;"><ion-icon name="remove" style=" color: red" (click)="removeQty(i)"></ion-icon></ion-col>\n\n              <ion-col col-1 style="color: black;   text-align: center;"><ion-icon name="close" style=" color: red" (click)="removeItem(i)"></ion-icon></ion-col>\n\n          </ion-row>\n\n          <!-- <ion-row>\n\n          <ion-col col-12 style="text-align: center"><ion-icon name="cut" style=" color: maroon"></ion-icon></ion-col>\n\n          </ion-row> -->\n\n        </ion-list>\n\n        <ion-row padding>\n\n            <ion-col col-1></ion-col>  \n\n          <ion-col col-4 style="text-align: center; font-size: 1.0rem; "><b>{{"Grand total:"|translate}}</b> </ion-col>\n\n            <ion-col col-2 style="text-align: center; ">{{lastsum}} </ion-col>\n\n            <ion-col col-5></ion-col>\n\n          </ion-row>\n\n\n\n\n\n          <ion-row *ngIf="discbtn==0">\n\n              <button ion-button small (click)="setDisc()">{{"Add Discount"|translate}}</button>\n\n            </ion-row>\n\n          <ion-row *ngIf="discbtn==1">\n\n            <ion-col col-5>   <ion-label style="font-size: 1.0rem;">{{"Discount Rate %:"|translate}}</ion-label></ion-col>\n\n            <ion-col col-7>\n\n                <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="discount" style="font-size: 1.3rem; " (input)="updateRec()" ngDefaultControl>\n\n                  </ion-input>\n\n            </ion-col>       \n\n          </ion-row>\n\n          <ion-row *ngIf="discount!=0">\n\n            <ion-col col-5 style="text-align: left; font-size: 1.0rem; ">{{"Discounted Total:"|translate}}</ion-col>\n\n              <ion-col col-7 style="text-align: left; ">{{lastsumdisc}}</ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="discbtn==1">\n\n                <button ion-button small (click)="remDisc()">{{"Remove Discount"|translate}}</button>\n\n              </ion-row>\n\n\n\n\n\n\n\n\n\n            <ion-row *ngIf="taxbtn==0">\n\n              <button ion-button small (click)="setTax()">{{"Add Tax"|translate}}</button>\n\n            </ion-row>\n\n\n\n            <ion-row *ngIf="taxbtn==1">\n\n                <ion-col col-5>   <ion-label style="font-size: 1.0rem;">{{"Tax Rate %:"|translate}}</ion-label></ion-col>\n\n                <ion-col col-7>\n\n                    <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="taxrate" style="font-size: 1.3rem;" (input)="updateRec()" ngDefaultControl>\n\n                      </ion-input>\n\n                </ion-col>       \n\n              </ion-row>\n\n          <ion-row *ngIf="taxrate!=0">\n\n            <ion-col col-5 style="text-align: left;font-size: 1.0rem; ">{{"Total after tax:"|translate}}</ion-col>\n\n              <ion-col col-7 style="text-align: left; ">{{lastsumtax}}</ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="taxbtn==1">\n\n                <button ion-button small (click)="remTax()">{{"Remove Tax"|translate}}</button>\n\n              </ion-row>\n\n      </ion-grid>\n\n      </ion-card>\n\n  <!-- Dynamically Generate All expense from backend - see feed from prev -->\n\n\n\n  <ion-card padding>\n\n   \n\n          <ion-item>\n\n          <span style="vertical-align: middle; display: inline-block; color: black; font-size: 1.0rem;" item-start>\n\n              {{"Add a temporary item"|translate}}\n\n            </span>\n\n             <ion-toggle color="dark" style="vertical-align: middle; display: inline-block" item-end (ionChange)="dispM()"></ion-toggle>\n\n          \n\n        </ion-item>\n\n          \n\n\n\n     \n\n     \n\n       <div *ngIf="displayManual==1;">\n\n     \n\n        <ion-item>\n\n            <ion-label style="font-size: 1.0rem;">{{"Name"|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="{{\'Enter Product Name\'|translate}}" [(ngModel)]="newItemName" ngDefaultControl></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label style="font-size: 1.0rem;">{{"Price"|translate}}</ion-label>\n\n              <ion-input  type="number" placeholder="{{\'Enter Price\'|translate}}" [(ngModel)]="newUnitPrice" ngDefaultControl></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label style="font-size: 1.0rem;">{{"Qty"|translate}}</ion-label>\n\n                <ion-input type="number" placeholder="{{\'Enter Qty\'|translate}}" [(ngModel)]="newUnitQty" ngDefaultControl></ion-input>\n\n              </ion-item>\n\n              <!-- <ion-item>\n\n                  <ion-label style="font-size: 1.0rem;" >Select Category</ion-label>\n\n                  <ion-select multiple="false" [(ngModel)]=\'newItemCat\'>\n\n                      <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n                  </ion-select>\n\n                </ion-item> -->\n\n                <button ion-button style="font-size: 1.0rem;" full (click)="addNewItem()"> {{"Add Product"|translate}} </button>\n\n              </div>\n\n  </ion-card>\n\n  <ion-grid>\n\n      <ion-row>\n\n          <ion-col col-6 style="text-align: center;"> <button ion-button style="font-size: 1.0rem;" (click)="addCalc()"> {{"Add from Calculator"|translate}}</button></ion-col>\n\n          <ion-col col-6 style="text-align: center;"> <button ion-button style="font-size: 1.0rem;" (click)="addProdList()"> {{"Add from Product List"|translate}}</button></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n          <ion-col col-12 style="text-align: center;"> <button ion-button style="font-size: 1.0rem;" (click)="qrscan()"> {{"Scan Barcode"|translate}}</button></ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button full color="dark" (click)="saveRec()"> <ion-icon name="checkmark"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button full color="dark" (click)="printRec()"> <ion-icon name="print"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n              <button ion-button full color="dark" (click)="cancelRec()">  <ion-icon name="close"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\income-transaction\income-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__["a" /* TranslateConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__["a" /* TranslateConfigService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer__["a" /* PrinterProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_printer_printer__["a" /* PrinterProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _k || Object])
    ], IncomeTransactionPage);
    return IncomeTransactionPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=income-transaction.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function TransactionProductPage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.calcitems = [];
        this.recitemslist = [];
        this.event = false;
        this.event1 = false;
        this.searchterm = "";
        this.selectedCat = [];
        this.listArray = [];
        // backBtn(){
        //     //Hide back btn if src is tab
        //     this.navCtrl.pop();
        // }
        this.tempprodlist = [{}];
        this.datlist = [];
        this.event = false;
        this.events.subscribe('addRecProd:created', function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
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
                        }
                    });
                }
                if (element.code == "000000") {
                    _this.calcitems.push(element);
                }
            });
            console.log(_this.calcitems);
        });
        this.events.subscribe('addSingleProd:created', function (data, index, fulldat) {
            console.log("ENTERED!");
            console.log("Received 1 " + data + index);
            _this.recitemslist = JSON.parse(fulldat);
            _this.index = parseInt(index);
            var tempdat = JSON.parse(data);
            _this.event1 = true;
            _this.getProducts();
            _this.filteredProductPrice(tempdat.price);
            //console.log(this.listProducts)
        });
    }
    TransactionProductPage.prototype.reset = function () {
        this.event1 = false;
        this.event = false;
        this.ionViewDidLoad();
    };
    TransactionProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionProductPage');
        this.getProducts();
        this.getCategories();
    };
    TransactionProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
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
    TransactionProductPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getProducts().then(function (val) {
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
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    TransactionProductPage.prototype.filteredProduct = function () {
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
    };
    TransactionProductPage.prototype.singleProduct = function (product) {
        var _this = this;
        var tempqty = this.recitemslist[this.index].qty;
        this.recitemslist[this.index] = product;
        this.recitemslist[this.index].qty = tempqty;
        var tempJSON = { "itemslist": this.recitemslist, };
        var myObjStr = JSON.stringify(tempJSON);
        this.navCtrl.parent.select(2);
        this.delay(300).then(function (any) {
            _this.events.publish('genRec:created', myObjStr);
            console.log("Sent: " + myObjStr);
            _this.getProducts();
            _this.event = false;
            _this.event1 = false;
        });
        this.getProducts();
    };
    TransactionProductPage.prototype.filteredProductPrice = function (price) {
        console.log(price);
        this.filteredList = this.listProducts.filter(function (item) {
            console.log(item.price + " and " + price);
            //console.log(this.searchterm);
            if (item.price == price) {
                console.log("HEAVY APRTY");
                return true;
            }
            else {
                false;
            }
        });
        // if(this.filteredList.length==0)
        // {
        //   this.filteredProduct();
        // }
    };
    TransactionProductPage.prototype.createRec = function () {
        //console.log("bangin");
        var _this = this;
        var tempJSON = { "itemslist": [], };
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
        this.listProducts = [];
        this.calcitems = [];
        this.listArray = [];
        this.recitemslist = [];
        console.log(this.datlist);
        var myObjStr = JSON.stringify(tempJSON);
        this.navCtrl.parent.select(2);
        this.delay(300).then(function (any) {
            _this.events.publish('genRec:created', myObjStr);
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
    TransactionProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\transaction-product\transaction-product.html"*/'<ion-content padding>\n\n  <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n  \n\n    <ion-item>\n\n      <ion-label>{{"Select category"|translate}}</ion-label>\n\n      <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n  \n\n  <!-- <ion-card>\n\n      <ion-grid line>\n\n        <ion-row>\n\n        <ion-col col-2>\n\n          <ion-row>\n\n            <ion-avatar>\n\n                <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n\n              </ion-avatar>\n\n            </ion-row>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                  Shan Noodle\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  568 - N/A?\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                      <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                      <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n\n                  </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 MMK </ion-col>\n\n                <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6></ion-col>\n\n                <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n\n              </ion-row>\n\n  \n\n        </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </ion-card>  -->\n\n  \n\n  \n\n  \n\n    <ion-list inset  *ngFor="let product of filteredList; let i=index">\n\n      \n\n        <ion-card>\n\n            <ion-grid> \n\n              <ion-row>\n\n              <ion-col col-2>\n\n                <ion-row> \n\n                  <ion-avatar>\n\n                      <img [src]="product.url">\n\n                    </ion-avatar>\n\n                  </ion-row>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                  <ion-row>\n\n                      <ion-col col-6>\n\n                          {{product.name}} \n\n                      </ion-col>\n\n                      <ion-col col-2>\n\n                        {{product.qty}}\n\n                      </ion-col>\n\n                        <ion-col col-2>\n\n                            <ion-icon name="add" style=" color: green" (click)="addUp(i)"></ion-icon>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <ion-icon name="remove" style=" color: red" (click)="addDown(i)"></ion-icon>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                      <ion-col col-4 style="color: grey; font-size: 10px;"> {{"Retail Price"|translate}} {{product.price}} MMK </ion-col>\n\n                      <ion-col col-4 style="color: grey; font-size: 10px; text-align: center;"> {{"Wholesale Price"|translate}} {{product.wholesale_price}} MMK </ion-col>\n\n                      <ion-col col-4 style="color: grey; font-size: 10px; text-align: end;"> {{"Category"|translate}} {{product.cat}} </ion-col>\n\n                    </ion-row>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="event1==true">\n\n              <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">{{"Add"|translate}}</button> </ion-col>\n\n            </ion-row>\n\n            </ion-grid>\n\n          </ion-card> \n\n       \n\n      </ion-list>\n\n    \n\n  \n\n    \n\n  \n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  \n\n  \n\n<ion-footer>\n\n\n\n    <ion-grid>\n\n      <ion-row *ngIf="event1==false">\n\n        <ion-col>\n\n            <button ion-button (click)="createRec()" full style="background-color: #222">{{"Create Receipt"|translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="event1==true">\n\n        <ion-col>\n\n            <button ion-button (click)="reset()" full style="background-color: #222">{{"Reset"|translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n   \n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\transaction-product\transaction-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], TransactionProductPage);
    return TransactionProductPage;
}());

//# sourceMappingURL=transaction-product.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(41);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function ExpensesHomePage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
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
    }
    ExpensesHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpensesHomePage');
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
                    _this.sp.getUserDat().then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    }).catch(function (err) {
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
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ExpensesHomePage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getProducts().then(function (val) {
                _this.listProducts = JSON.parse(val);
                if (_this.listProducts != null) {
                    _this.filteredProduct();
                }
            }).catch(function (err) {
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
        var _this = this;
        var itemslist = [];
        var prodidlist = [];
        var pnllist = [];
        var discountlist = [];
        itemslist.push(this.product);
        prodidlist.push(this.expirydate);
        var dataexp = {
            "itemslist": itemslist,
            "totalsum": (this.prodcost * -1),
            "prodidlist": prodidlist,
            "pnllist": pnllist,
            "datetime": this.currtime,
            "taxrate": 0,
            "discountlist": discountlist,
            "discount": 0,
            "totaldisc": (this.prodcost * -1),
            "totalatax": (this.prodcost * -1),
        };
        var data1 = {
            "code": this.product.code,
            "name": this.product.name,
            "price": this.product.price,
            "wholesale_price": this.product.wholesale_price,
            "cost": Math.round(((parseInt(this.product.cost) * parseInt(this.product.stock_qty)) + (parseInt(this.prodcost))) / (parseInt(this.prodqty) + parseInt(this.product.stock_qty)) * 100) / 100,
            "cat": this.product.cat,
            "url": this.product.url,
            "stock_qty": (parseInt(this.product.stock_qty) + parseInt(this.prodqty)),
        };
        this.sp.updateProduct(data1, this.product.code).then(function () {
        });
        this.sp.storageReady().then(function () {
            console.log(dataexp);
            _this.sp.addTransactions(dataexp);
            _this.updateCb(_this.prodcost).then(function () { _this.events.publish('cbUpdate:created', 0); console.log("update"); });
            var message = _this.translateConfigService.getTranslatedMessage('Finish');
            var toast = _this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 3000
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
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
        });
        //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well 
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
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    var message = _this.translateConfigService.getTranslatedMessage('Found Product');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value + " " + val[0].name,
                        duration: 2000
                    });
                    toast.present();
                    _this.chooseProd(val[0]);
                }
                else {
                    var message = _this.translateConfigService.getTranslatedMessage('Not found!');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000
                    });
                    toast.present();
                }
            });
        }).catch(function (err) {
            console.log('Error', err);
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
            selector: 'page-expenses-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\expenses-home\expenses-home.html"*/'<!--\n\n  Generated template for the ExpensesHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title> {{"Add New Stock"|translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n      <b>{{\'Enter Inventory Expenditure Detail:\'|translate}}</b> \n\n  </ion-item>\n\n\n\n<ion-list inset>\n\n  \n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-8> \n\n            <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n            <button ion-button small block color="primary" (click)="scanQR()"  color="dark">{{"Scan Barcode"|translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-item>\n\n      <ion-label>{{"Select category"| translate}}</ion-label>\n\n      <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-list inset  *ngFor="let product of filteredList">\n\n  <ion-card>\n\n      <ion-grid> \n\n        <ion-row>\n\n        <ion-col col-2>\n\n          <ion-row> \n\n            <ion-avatar>\n\n                <img [src]="product.url">\n\n              </ion-avatar>\n\n            </ion-row>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    {{product.name}}\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  {{"Stock"|translate}}: {{product.stock_qty}}\n\n                </ion-col>\n\n                </ion-row>\n\n              <ion-row>\n\n                <ion-col col-4 style="color: grey; font-size: 10px;"> {{"Retail Price"|translate}} {{product.price}} MMK </ion-col> \n\n                <!-- change currency units to those that are selected by user -Pranay -->\n\n                <ion-col col-4 style="color: grey; font-size: 10px; text-align: center;"> {{"Wholesale Price"|translate}} {{product.wholesale_price}} MMK </ion-col>\n\n                <ion-col col-4 style="color: grey; font-size: 10px; text-align: end;"> {{"Category"|translate}} {{product.cat}} </ion-col>\n\n              </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12> <button ion-button full end color="dark" (click)="chooseProd(product)">{{"Add New Stock"|translate}}</button> </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </ion-card> \n\n \n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer style="border-top-color:black; border-top: 10px;" *ngIf=\'prodName!=""\'> \n\n  <ion-list>\n\n    <ion-item>\n\n      {{"Product Name"|translate}}: {{prodName}}\n\n      <button ion-button style="float: right; color:white; background-color: red;" [hidden]="hideButton" (click)="clearProduct()">\n\n        {{"Clear"|translate}}\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{"Product Qty"|translate}}</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'prodqty\' (ionChange)="updatebalance(\'prodqty\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{"Purchase Price per Item"|translate}}</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'prodcostitem\' (ionChange)="updatebalance(\'prodcostitem\')"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>{{"Total Expenditure"|translate}}</ion-label>\n\n        <ion-input type="number" [(ngModel)]=\'prodcost\' (ionChange)="updatebalance(\'prodcost\')"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label>{{"Batch Expiry Date:"|translate}}</ion-label>\n\n      <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]=\'expirydate\' [min]="minDate" [max]="maxDate"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n  <button ion-button block color="primary" (click)="addinventoryexpense()"  color="dark">{{"Add Stock"|translate}}</button>\n\n  \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\expenses-home\expenses-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ExpensesHomePage);
    return ExpensesHomePage;
}());

//# sourceMappingURL=expenses-home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gettersetter_gettersetter__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_list_product_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_product_category_add_product_category__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_translation_translate_config_service__ = __webpack_require__(8);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function DashboardPage(navCtrl, translateConfigService, barcodeScanner, alertCtrl, sp, getset, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.getset = getset;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.ViewList = __WEBPACK_IMPORTED_MODULE_6__product_list_product_list__["a" /* ProductListPage */];
        this.AddProd = __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */];
        this.AddCat = __WEBPACK_IMPORTED_MODULE_7__add_product_category_add_product_category__["a" /* AddProductCategoryPage */];
        this.userdata = { business_address: "",
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
        this.events.subscribe('cbUpdate:created', function (data) {
            _this.getUserData();
        });
    }
    DashboardPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp.getUserDat().then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    }).catch(function (err) {
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
        var message = this.translateConfigService.getTranslatedMessage('Online backup ready');
        this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000
        }).present();
    };
    DashboardPage.prototype.cashbtn = function () {
        this.getUserData();
        var messsage = this.translateConfigService.getTranslatedMessage('Balance');
        this.toastCtrl.create({
            // @ts-ignore
            message: message.value + this.userdata.cash_balance,
            duration: 3000
        }).present();
    };
    DashboardPage.prototype.qrscan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    var message = _this.translateConfigService.getTranslatedMessage('Found Product');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value + " " + val[0].name,
                        duration: 2000
                    });
                    toast.present();
                    _this.count++;
                    _this.total += parseFloat(val[0].price);
                    _this.vat += (parseFloat(val[0].price) * 0.05);
                    _this.getset.setTotal(_this.total);
                    _this.getset.setCount(_this.count);
                    _this.getset.setVat(_this.vat);
                }
                else {
                    var message = _this.translateConfigService.getTranslatedMessage('Get Product!!!');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000
                    });
                    toast.present();
                }
            });
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    DashboardPage.prototype.addproduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */]);
    };
    DashboardPage.prototype.manual = function () {
        var _this = this;
        var alertPop = this.alertCtrl.create({
            title: 'Product',
            inputs: [
                {
                    name: 'code',
                    placeholder: 'Product Code'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Search',
                    handler: function (data) {
                        _this.sp.searchProduct(data.code).then(function (val) {
                            if (val[0] != null) {
                                var message = _this.translateConfigService.getTranslatedMessage('Found Product');
                                var toast = _this.toastCtrl.create({
                                    // @ts-ignore
                                    message: message.value + " " + val[0].name,
                                    duration: 2000
                                });
                                toast.present();
                                _this.count++;
                                _this.total += parseFloat(val[0].price);
                                _this.vat += (parseFloat(val[0].price) * 0.05);
                                _this.getset.setTotal(_this.total);
                                _this.getset.setCount(_this.count);
                                _this.getset.setVat(_this.vat);
                            }
                            else {
                                var message = _this.translateConfigService.getTranslatedMessage('Get Product!!!');
                                var toast = _this.toastCtrl.create({
                                    // @ts-ignore
                                    message: message.value,
                                    duration: 2000
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
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
        var message = this.translateConfigService.getTranslatedMessage('POS reset to Zero');
        var toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
    ], DashboardPage.prototype, "tabRef", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"Products"|translate}}</ion-title>\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()"><ion-icon name="cloud-upload" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()"><ion-icon name="logo-usd" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n  \n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="ViewList" tabTitle="{{\'Stock\'|translate}}" tabIcon="list-box"></ion-tab>\n\n        <ion-tab [root]="AddProd" tabTitle="{{\'Add Product\'|translate}}" tabIcon="pricetag"></ion-tab>\n\n        <ion-tab [root]="AddCat" tabTitle="{{\'Add Category\'|translate}}" tabIcon="albums"></ion-tab>\n\n  \n\n    \n\n       </ion-tabs>\n\n\n\n<!-- <ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Total</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{total}} USD</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Items</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{count}} Pcs</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>VAT</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{vat}} USD</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="primary" (click)="manual()">Manual Entry</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="primary" (click)="qrscan()">Sales QR Scan</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="secondary" (click)="addproduct()">Add Products</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="secondary" (click)="showproduct()">Show Products</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button round block color="secondary" (click)="reset()">Reset</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n -->\n\n\n\n\n\n  \n\n\n\n\n\n<!-- \n\n  <ion-tabs tabsPlacement="top">\n\n    <ion-tab [root]="ListRoot" tabTitle="List" tabIcon="chat"></ion-tab>\n\n    <ion-tab [root]="AddRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n\n   </ion-tabs> -->\n\n<!-- \n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-title>Track💰2Make💰</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer> -->\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
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
 * Generated class for the SummaryHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryHomePage = /** @class */ (function () {
    function SummaryHomePage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.expanded = true;
        this.tstoday = 0;
        this.tsmonth = 0;
        this.ts30 = 0;
        this.currentdatetime = new Date();
        this.totalsaletoday = 0;
    }
    SummaryHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SummaryHomePage');
        this.tstoday = 0;
        this.tsmonth = 0;
        this.ts30 = 0;
        this.getTransac();
    };
    SummaryHomePage.prototype.getTransac = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getTransactions().then(function (val) {
                _this.listtransac = JSON.parse(val);
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
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SummaryHomePage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate() + "/" + (temp.getMonth() + 1) + "/" + temp.getFullYear() + " " + temp.getHours() + ":" + temp.getMinutes();
        return (t);
    };
    SummaryHomePage.prototype.getDate = function (datetime) {
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate();
        return (t);
    };
    SummaryHomePage.prototype.getMonth = function (datetime) {
        var temp = new Date(datetime);
        var t = temp.getMonth();
        return (t);
    };
    SummaryHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\summary-home\summary-home.html"*/'<!--\n\n  Generated template for the SummaryHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title> {{"Business"|translate}} </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <ion-item>\n\n        <span style="vertical-align: middle; display: inline-block; color: black; font-size: 1.5rem;" item-start>\n\n          {{"Summarize"|translate}}:\n\n          </span>\n\n           <ion-toggle  color="dark" style="vertical-align: middle; display: inline-block" item-end [(ngModel)]="expanded"></ion-toggle>\n\n        \n\n      </ion-item>\n\n      <ion-item>\n\n          {{"Total sales today"|translate}}: {{tstoday}}\n\n          \n\n        </ion-item>\n\n        <ion-item>\n\n            {{"Total sales for this month"|translate}}: {{tsmonth}}\n\n        </ion-item>\n\n        <ion-item>\n\n            {{"Total sales for last 30 days"|translate}} : {{ts30}}\n\n        </ion-item>\n\n        \n\n\n\n      <ion-list inset  *ngFor="let transac of listtransacrev">\n\n        \n\n          <ion-card>\n\n              <ion-grid line>\n\n                  <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n                    <ion-col col-10 style="color: grey; font-size: 10px;"> {{getDateTime(transac.datetime)}} </ion-col>\n\n                    <ion-col col-2 style="text-align: center "><ion-icon name="cash" style="color: green"></ion-icon> </ion-col>\n\n                  </ion-row>\n\n\n\n                  <ion-list *ngFor="let item of transac.itemslist" [hidden]="expanded">\n\n                      \n\n                      <ion-row  style="padding: 0px;text-align: center ;  background-color: indigo; color: palevioletred;">\n\n                          <ion-col col-8>\n\n                            {{item.name}}\n\n                          </ion-col>\n\n                          <ion-col col-2 >\n\n                              {{item.price}}\n\n                          </ion-col>\n\n                          <ion-col col-2>\n\n                              {{item.qty}}\n\n                          </ion-col>\n\n                        </ion-row>\n\n                        <ion-row *ngIf="transac.totaldisc!=transac.totalsum" style="padding: 0px;text-align: center ;  background-color: silver; color: palevioletred;">\n\n                            <ion-col col-8>\n\n                               {{"Discounted total:"|translate}} ({{transac.discount}}%)\n\n                              </ion-col>\n\n                              <ion-col col-4 >\n\n                                  {{transac.totaldisc}}\n\n                              </ion-col>\n\n                        </ion-row>\n\n                        <ion-row *ngIf="transac.totalsum!=transac.totalatax" style="padding: 0px; text-align: center ;  background-color: silver; color: palevioletred;">\n\n                            <ion-col col-8>\n\n                                {{"Total after tax:"|translate}} ({{transac.taxrate}}%)\n\n                              </ion-col>\n\n                              <ion-col col-4 >\n\n                                  {{transac.totalatax}}\n\n                              </ion-col>\n\n                        </ion-row>\n\n              </ion-list> \n\n                  <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n                    <ion-col col-10><h2><b>{{"Grand Total:"|translate}} {{transac.totaldisc}}</b></h2></ion-col>\n\n                  </ion-row>\n\n\n\n               \n\n               \n\n              </ion-grid>\n\n            </ion-card>   \n\n        </ion-list>\n\n      \n\n    \n\n      \n\n    \n\n    \n\n    \n\n    \n\n    </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\summary-home\summary-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SummaryHomePage);
    return SummaryHomePage;
}());

//# sourceMappingURL=summary-home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(27);
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
    function UserProfilePage(navCtrl, navParams, sp, formBuilder, toastCtrl, translateConfigService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.translateConfigService = translateConfigService;
        this.listOfBType = [];
        this.listOfCurrency = [];
        this.listOfLang = [];
        this.user = {};
        this.oldUser = {};
        this.submitButton = false;
        this.loadDropDowns();
        this.formUser = this.formBuilder.group({
            business_name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            business_address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            owner_name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            businesstype: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            ph_no: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            currency: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            cash_balance: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            discount: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            taxrate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            language: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
        });
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfilePage');
        this.getUser();
        this.oldUser = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"])(this.user);
    };
    UserProfilePage.prototype.loadDropDowns = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.firestore().collection("sign-up").get()
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
                _this.user = JSON.parse(user);
            });
        });
    };
    UserProfilePage.prototype.setUser = function () {
        var _this = this;
        if (!this.formUser.valid) {
            console.log('invalid user update');
            var message = this.translateConfigService.getTranslatedMessage('Incomplete');
            this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 1000,
            }).present();
        }
        else {
            this.sp.storageReady().then(function () {
                _this.sp.setUserDat(_this.user).then(function () {
                    console.log('new user data saved in storage');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
                }).catch(function (error) {
                    console.error(error);
                });
            });
            var message = this.translateConfigService.getTranslatedMessage('Update profile successful');
            this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 2000,
            }).present();
        }
    };
    UserProfilePage.prototype.onChange = function () {
        this.submitButton = !Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["isEqual"])(this.user, this.oldUser);
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\user-profile\user-profile.html"*/'<!--\n\n  Generated template for the UserProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'User Profile\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="formUser">\n\n    <ion-list inset>\n\n      <ion-item>\n\n        <ion-label>{{ \'Business Name\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="business_name" [(ngModel)]="user.business_name" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Full Business Address\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="business_address" [(ngModel)]="user.business_address" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Owner\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="owner_name" [(ngModel)]="user.owner_name" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="globe" color="semi-light" class="icon"></ion-icon>\n\n        <ion-label>{{"Business Type"|translate}}</ion-label>\n\n        <ion-select formControlName="businesstype" [(ngModel)]="user.businesstype" (ionChange)="onChange()">\n\n          <ion-option *ngFor="let b of listOfBType" value="{{ b }}">{{ b }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Phone Number\' | translate }}</ion-label>\n\n        <ion-input type="text" formControlName="ph_no" [(ngModel)]="user.ph_no" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="logo-usd" color="semi-light" class="icon"></ion-icon>\n\n        <ion-label>{{"Currency"|translate}}</ion-label>\n\n        <ion-select formControlName="currency" [(ngModel)]="user.currency" (ionChange)="onChange()">\n\n          <ion-option *ngFor="let c of listOfCurrency" value = "{{ c }}">{{ c }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Balance\' | translate }}</ion-label>\n\n        <ion-input type="number" formControlName="cash_balance" [(ngModel)]="user.cash_balance" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Usual Discount %\' | translate }}</ion-label>\n\n        <ion-input type="number" formControlName="discount" [(ngModel)]="user.discount" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{ \'Tax Rate %:\' | translate }}</ion-label>\n\n        <ion-input type="number" formControlName="taxrate" [(ngModel)]="user.taxrate" (ionChange)="onChange()"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{"Language"|translate}}</ion-label>\n\n        <ion-select formControlName="language" [(ngModel)]="user.language" (ionChange)="onChange()">\n\n          <ion-option *ngFor="let l of listOfLang" value="{{ l }}">{{ l }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button *ngIf="submitButton" ion-button block color="primary" (click)="setUser()"  color="dark">{{\'Update Profile\'| translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
                        _this.storage.get('categories').then(function (valNullcat) {
                            _this.storage.get('products').then(function (valNullprod) {
                                _this.storage.get('transactions').then(function (valNulltransac) {
                                    _this.storage.get('user').then(function (valNulluser) {
                                        // console.log("b4set");
                                        // console.log(JSON.stringify(this.tempcat));
                                        // console.log(JSON.stringify(this.tempprod));
                                        // console.log(JSON.stringify(this.temptransac))  ;
                                        _this.storage.set('categories', "[]").then(function () { _this.storage.set('categories', JSON.stringify(_this.tempcat)); });
                                        _this.storage.set('products', "[]").then(function () { _this.storage.set('products', JSON.stringify(_this.tempprod)); });
                                        _this.storage.set('transactions', "[]").then(function () { _this.storage.set('transactions', JSON.stringify(_this.temptransac)); });
                                        _this.storage.set('user', '[]').then(function () { _this.storage.set('user', JSON.stringify(_this.tempuser)); });
                                        resolve();
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
            var _this = this;
            var tempprod, tempcat, temptransac, uid, tempuser;
            return __generator(this, function (_a) {
                this.storage.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                    .then(function (querySnapshot) {
                                    querySnapshot.forEach(function (doc) {
                                        uid = doc.id;
                                        var usdat = doc.data();
                                        tempprod = usdat.products;
                                        temptransac = usdat.transactions;
                                        tempcat = usdat.categories;
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
            _this.storage.get('products').then(function (val) {
                parseprod = JSON.parse(val);
                _this.storage.get('transactions').then(function (val) {
                    parsetransac = JSON.parse(val);
                    _this.storage.get('categories').then(function (val) {
                        parsecat = JSON.parse(val);
                        if (parseprod != null && parsetransac != null && parsecat != null) {
                            var snapshot = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    var _this = this;
                                    uid = doc.id;
                                    console.log(uid);
                                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(uid).update({
                                        "products": parseprod,
                                        "transactions": parsetransac,
                                        "categories": parsecat,
                                    }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/];
                                        });
                                    }); }).catch(function (err) {
                                        console.log(err);
                                    });
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            });
                        }
                    }).catch(function (err) {
                        alert(err);
                    });
                }).catch(function (err) {
                    alert(err);
                });
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.setUserDat = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.tempuser = data;
                this.storage.get('user').then(function (valNulluser) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var ud, snapshot;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.storage.set('user', '[]').then(function () { _this.storage.set('user', JSON.stringify(_this.tempuser)); });
                                console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                        .then(function (querySnapshot) {
                                        querySnapshot.forEach(function (doc) {
                                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(doc.id).update({
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
                    case 0: return [4 /*yield*/, this.storage.get('user')];
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
            _this.storage.get('categories').then(function (val) {
                if (val === null || val == "null") {
                    _this.storage.set('categories', "[]").then(function () {
                        _this.storage.get('categories').then(function (valNull) {
                            _this.categories = JSON.parse(valNull);
                            _this.categories.push(data);
                            _this.storage.set('categories', JSON.stringify(_this.categories));
                        });
                    });
                }
                else {
                    _this.categories = JSON.parse(val);
                    _this.categories.push(data);
                    _this.storage.set('categories', JSON.stringify(_this.categories));
                }
                //this.products = JSON.stringify(this.products)
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getCategories = function () {
        return this.storage.get('categories');
    };
    StorageProvider.prototype.deleteCategory = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('categories').then(function (val) {
                _this.categories = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.categories;
                arr2 = arr.filter(function (val) {
                    return (val.name != data.name);
                });
                _this.storage.set('categories', JSON.stringify(arr2));
            }).catch(function (err) {
                alert(err + 1);
            });
        });
    };
    StorageProvider.prototype.addProduct = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('products').then(function (val) {
                if (val === null) {
                    _this.storage.set('products', "[]").then(function () {
                        _this.storage.get('products').then(function (valNull) {
                            _this.products = JSON.parse(valNull);
                            _this.products.push(data);
                            _this.storage.set('products', JSON.stringify(_this.products));
                        });
                    });
                }
                else {
                    _this.products = JSON.parse(val);
                    _this.products.push(data);
                    _this.storage.set('products', JSON.stringify(_this.products));
                }
                //this.products = JSON.stringify(this.products)
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getProducts = function () {
        return this.storage.get('products');
    };
    StorageProvider.prototype.addTransactions = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('transactions').then(function (val) {
                //console.log(val);
                if (val === null) {
                    _this.storage.set('transactions', "[]").then(function () {
                        _this.storage.get('transactions').then(function (valNull) {
                            _this.transactions = JSON.parse(valNull);
                            console.log("val " + valNull);
                            _this.transactions.push(data);
                            _this.storage.set('transactions', JSON.stringify(_this.transactions));
                        });
                    });
                }
                else {
                    _this.transactions = JSON.parse(val);
                    console.log("val yada");
                    _this.transactions.push(data);
                    _this.storage.set('transactions', JSON.stringify(_this.transactions));
                }
                //this.products = JSON.stringify(this.products)
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    StorageProvider.prototype.getTransactions = function () {
        return this.storage.get('transactions');
    };
    StorageProvider.prototype.searchProduct = function (barcode) {
        var _this = this;
        var needle = null;
        return new Promise(function (resolve, reject) {
            _this.storage.ready().then(function () {
                _this.storage.get('products').then(function (val) {
                    if (val != null) {
                        _this.products = JSON.parse(val);
                        needle = _this.products.filter(function (product) {
                            return (product.code === barcode);
                        });
                    }
                    resolve(needle);
                }).catch(function (err) {
                    alert(err + 1);
                });
            });
        });
    };
    StorageProvider.prototype.updateProduct = function (data, old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get('products').then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    except = _this.products.filter(function (product) {
                        return (product.code != old_code);
                    });
                    except.push(data);
                    _this.storage.set('products', JSON.stringify(except));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.swapProductUp = function (old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get('products').then(function (val) {
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
                    _this.storage.set('products', JSON.stringify(_this.products));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.swapProductDown = function (old_code) {
        var _this = this;
        var except = null;
        return new Promise(function (resolve, reject) {
            _this.storage.get('products').then(function (val) {
                if (val != null) {
                    _this.products = JSON.parse(val);
                    for (var i = 0; i < _this.products.length; i++) {
                        if (_this.products[i].code == old_code && i < (_this.products.length - 1)) {
                            var temp = _this.products[i];
                            _this.products[i] = _this.products[i + 1];
                            _this.products[i + 1] = temp;
                        }
                    }
                    //except.push(data);
                    _this.storage.set('products', JSON.stringify(_this.products));
                    resolve();
                }
            });
        });
    };
    StorageProvider.prototype.deleteProduct = function (data) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('products').then(function (val) {
                _this.products = JSON.parse(val);
                var arr = [];
                var arr2 = [];
                arr = _this.products;
                arr2 = arr.filter(function (val) {
                    return (val.code != data.code && val.name != data.name);
                });
                _this.storage.set('products', JSON.stringify(arr2));
            }).catch(function (err) {
                alert(err + 1);
            });
        });
    };
    StorageProvider.prototype.storageReady = function () {
        return this.storage.ready();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */])
    ], StorageProvider.prototype, "nav", void 0);
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-product-category/add-product-category.module": [
		192
	],
	"../pages/all-transaction/all-transaction.module": [
		187
	],
	"../pages/coach-businesstips/coach-businesstips.module": [
		193
	],
	"../pages/coach-coach/coach-coach.module": [
		194
	],
	"../pages/coach-goals/coach-goals.module": [
		195
	],
	"../pages/coach-home/coach-home.module": [
		196
	],
	"../pages/contact-us/contact-us.module": [
		198
	],
	"../pages/expense-transaction/expense-transaction.module": [
		199
	],
	"../pages/expenses-home/expenses-home.module": [
		209
	],
	"../pages/income-transaction/income-transaction.module": [
		213
	],
	"../pages/login/login.module": [
		201
	],
	"../pages/product-list/product-list.module": [
		215
	],
	"../pages/sign-up/sign-up.module": [
		217
	],
	"../pages/summary-home/summary-home.module": [
		216
	],
	"../pages/transaction-home/transaction-home.module": [
		218
	],
	"../pages/transaction-product/transaction-product.module": [
		219
	],
	"../pages/user-profile/user-profile.module": [
		220
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
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionPageModule", function() { return AllTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_transaction__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_transaction__["a" /* AllTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_transaction__["a" /* AllTransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], AllTransactionPageModule);
    return AllTransactionPageModule;
}());

//# sourceMappingURL=all-transaction.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductCategoryPageModule", function() { return AddProductCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_category__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddProductCategoryPageModule = /** @class */ (function () {
    function AddProductCategoryPageModule() {
    }
    AddProductCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_product_category__["a" /* AddProductCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product_category__["a" /* AddProductCategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddProductCategoryPageModule);
    return AddProductCategoryPageModule;
}());

//# sourceMappingURL=add-product-category.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachBusinesstipsPageModule", function() { return CoachBusinesstipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_businesstips__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoachBusinesstipsPageModule = /** @class */ (function () {
    function CoachBusinesstipsPageModule() {
    }
    CoachBusinesstipsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coach_businesstips__["a" /* CoachBusinesstipsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_businesstips__["a" /* CoachBusinesstipsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], CoachBusinesstipsPageModule);
    return CoachBusinesstipsPageModule;
}());

//# sourceMappingURL=coach-businesstips.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachCoachPageModule", function() { return CoachCoachPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_coach__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoachCoachPageModule = /** @class */ (function () {
    function CoachCoachPageModule() {
    }
    CoachCoachPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coach_coach__["a" /* CoachCoachPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_coach__["a" /* CoachCoachPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], CoachCoachPageModule);
    return CoachCoachPageModule;
}());

//# sourceMappingURL=coach-coach.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachGoalsPageModule", function() { return CoachGoalsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_goals__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoachGoalsPageModule = /** @class */ (function () {
    function CoachGoalsPageModule() {
    }
    CoachGoalsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coach_goals__["a" /* CoachGoalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_goals__["a" /* CoachGoalsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], CoachGoalsPageModule);
    return CoachGoalsPageModule;
}());

//# sourceMappingURL=coach-goals.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachHomePageModule", function() { return CoachHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoachHomePageModule = /** @class */ (function () {
    function CoachHomePageModule() {
    }
    CoachHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coach_home__["a" /* CoachHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_home__["a" /* CoachHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], CoachHomePageModule);
    return CoachHomePageModule;
}());

//# sourceMappingURL=coach-home.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__ = __webpack_require__(62);
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
    function CoachHomePage(navCtrl, translateConfigService, navParams) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.Goals = __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__["a" /* CoachGoalsPage */];
        this.Coach = __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__["a" /* CoachCoachPage */];
        this.Tips = __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */];
    }
    CoachHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachHomePage');
    };
    CoachHomePage.prototype.contactpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    CoachHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-home\coach-home.html"*/'<!--\n\n  Generated template for the CoachHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>ဆရာ</ion-title>\n\n      <ion-buttons end><button ion-button (click)="contactpg()" style="align-self: right; background-color:#222"><ion-icon name="contact" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n          </ion-navbar>\n\n  </ion-header>\n\n   \n\n\n\n<ion-content padding>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="Goals" tabTitle="ပန်းတိုင်များ" tabIcon="paper-plane"></ion-tab>\n\n        <ion-tab [root]="Coach" tabTitle="ဆရာ" tabIcon="school"></ion-tab>\n\n        <ion-tab [root]="Tips" tabTitle="စီးပွားရေးသိကောင်းစရာများ" tabIcon="cash"></ion-tab>\n\n        \n\n       </ion-tabs>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-home\coach-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CoachHomePage);
    return CoachHomePage;
}());

//# sourceMappingURL=coach-home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseTransactionPageModule", function() { return ExpenseTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_transaction__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExpenseTransactionPageModule = /** @class */ (function () {
    function ExpenseTransactionPageModule() {
    }
    ExpenseTransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expense_transaction__["a" /* ExpenseTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense_transaction__["a" /* ExpenseTransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ExpenseTransactionPageModule);
    return ExpenseTransactionPageModule;
}());

//# sourceMappingURL=expense-transaction.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ExpenseTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpenseTransactionPage = /** @class */ (function () {
    function ExpenseTransactionPage(navCtrl, translateConfigService, navParams) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
    }
    ExpenseTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpenseTransactionPage');
    };
    ExpenseTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expense-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\expense-transaction\expense-transaction.html"*/'<!--\n\n  Generated template for the ExpenseTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n Product List\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\expense-transaction\expense-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ExpenseTransactionPage);
    return ExpenseTransactionPage;
}());

//# sourceMappingURL=expense-transaction.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_bluetooth_serial__ = __webpack_require__(204);
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesHomePageModule", function() { return ExpensesHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expenses_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExpensesHomePageModule = /** @class */ (function () {
    function ExpensesHomePageModule() {
    }
    ExpensesHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expenses_home__["a" /* ExpensesHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expenses_home__["a" /* ExpensesHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ExpensesHomePageModule);
    return ExpensesHomePageModule;
}());

//# sourceMappingURL=expenses-home.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(27);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.prodCode = this.navParams.get("code");
        this.getUserData();
        this.formProduct = this.formBuilder.group({
            prodCode: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodName: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodPrice: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodWholesalePrice: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodCost: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            currstock: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            prodCat: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required),
            newprodCat: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([]))
        });
    }
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    AddProductPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp.getUserDat().then(function (val) {
                        _this.userdata = JSON.parse(val);
                        _this.uid = _this.userdata.uid;
                        console.log(_this.userdata);
                    }).catch(function (err) {
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
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
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
        this.camera.getPicture(options).then(function (base64Image) {
            _this.image = "data:image/png;base64," + base64Image;
            // console.log(base64Image)
        }).catch(function (err) { console.log(err); });
    };
    AddProductPage.prototype.upload_new = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.temp = "prodImages/" + _this.uid + _this.prodCode + name;
            //LET REF be tied to a particular product- we save the url in the products db
            var ref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref("prodImages/" + _this.uid + _this.prodCode + name);
            var uploadTask = ref.putString(_this.image.split(',')[1], "base64");
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
                "name": this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage('Finish');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000
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
        this.navCtrl.parent.select(0);
    };
    AddProductPage.prototype.addProdPic = function () {
    };
    AddProductPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.prodCode = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AddProductPage.prototype.addproduct = function () {
        var _this = this;
        if (!this.formProduct.valid || (this.prodCat == "New" && this.newprodCat == "")) {
            var message = this.translateConfigService.getTranslatedMessage('Incomplete');
            this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 1000,
            }).present();
        }
        else {
            //old
            if (this.newprodCat != "") {
                this.addCategory();
                this.prodCat = this.newprodCat;
            }
            if (this.image == "") {
                var message = this.translateConfigService.getTranslatedMessage('Creating item, please wait a moment');
                this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000,
                });
                var data_2 = {
                    "code": this.prodCode,
                    "name": this.prodName,
                    "price": this.prodPrice,
                    "wholesale_price": this.prodWholesalePrice,
                    "cost": this.prodCost,
                    "cat": this.prodCat,
                    "url": this.produrl,
                    "stock_qty": this.currstock,
                };
                console.log(data_2);
                this.temp = JSON.stringify(data_2);
                this.sp.storageReady().then(function () {
                    _this.sp.addProduct(data_2);
                    setTimeout(function () {
                        var message = _this.translateConfigService.getTranslatedMessage('Finish');
                        var toast = _this.toastCtrl.create({
                            // @ts-ignore
                            message: message.value,
                            duration: 3000
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
                        _this.sp.backupStorage();
                        //this.navCtrl.push(ProductListPage);
                        _this.events.publish('prodAdd:created', 0);
                        _this.navCtrl.parent.select(0);
                        toast.present();
                    }, 1000);
                });
            }
            else {
                this.temp = this.prodName;
                var message = this.translateConfigService.getTranslatedMessage('Creating item, please wait a moment');
                this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000,
                });
                this.upload_new(this.prodName).then(function () {
                    var data = {
                        "code": _this.prodCode,
                        "name": _this.prodName,
                        "price": _this.prodPrice,
                        "wholesale_price": _this.prodWholesalePrice,
                        "cost": _this.prodCost,
                        "cat": _this.prodCat,
                        "url": _this.produrl,
                        "stock_qty": _this.currstock,
                    };
                    console.log(data);
                    _this.temp = JSON.stringify(data);
                    _this.sp.storageReady().then(function () {
                        _this.sp.addProduct(data);
                        setTimeout(function () {
                            var message = _this.translateConfigService.getTranslatedMessage('Finish');
                            var toast = _this.toastCtrl.create({
                                // @ts-ignore
                                message: message.value,
                                duration: 3000
                            });
                            _this.prodCode = "";
                            _this.prodName = "";
                            _this.prodPrice = 0;
                            _this.prodWholesalePrice = 0;
                            _this.prodCat = "";
                            _this.prodCost = 0;
                            _this.produrl = "";
                            _this.image = "";
                            _this.sp.backupStorage();
                            //this.navCtrl.push(ProductListPage);
                            _this.events.publish('prodAdd:created', 0);
                            _this.navCtrl.parent.select(0);
                            toast.present();
                        }, 1000);
                    });
                });
            }
        }
    };
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\addproduct\addproduct.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Add Product</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <b>{{"Enter Information:" | translate}}</b>\n\n    \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <button ion-button block color="primary" (click)="launchCamera()">{{\'Take Picture\' | translate}}</button>\n\n        <img *ngIf="image!=null" [src]="image" style="width: 100px;">\n\n      </ion-item>\n\n  \n\n  <form [formGroup]="formProduct">\n\n    <ion-list inset>\n\n      <!-- <button ion-button full color="dark" (click)="getProdPic()">Upload Picture</button> -->\n\n      <button ion-button block color="primary" (click)="scanQR()"  color="dark">{{\'Scan Barcode\'| translate}}</button>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Code:\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="prodCode" [(ngModel)]=\'prodCode\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Name:\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="prodName" [(ngModel)]=\'prodName\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Retail Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodPrice" [(ngModel)]=\'prodPrice\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Wholesale Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodWholesalePrice" [(ngModel)]=\'prodWholesalePrice\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Buying Cost:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodCost" [(ngModel)]=\'prodCost\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Current Stock Qty:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="currstock" [(ngModel)]=\'currstock\'></ion-input>\n\n      </ion-item>\n\n      <!-- OPTIONAL EXPIRY/Shelf Life in time -->\n\n\n\n      <ion-item>\n\n\n\n        <ion-label>{{\'Product Category\' | translate}}</ion-label>\n\n        <ion-select multiple="false" formControlName="prodCat" [(ngModel)]=\'prodCat\'>\n\n\n\n          <!-- <ion-option>New</ion-option> -->\n\n          <ion-option value="New"> {{\'Add New Category\'| translate}}</ion-option>\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n\n\n\n        </ion-select>\n\n\n\n        <!-- <ion-label>Select Category</ion-label>\n\n        <ion-select multiple="false" [(ngModel)]=\'prodCat\'>\n\n              <ion-option>New</ion-option>\n\n              <ion-option>Snacks</ion-option>\n\n              <ion-option>Drinks</ion-option>\n\n              <ion-option>Noodles</ion-option>\n\n        </ion-select> -->\n\n      </ion-item>\n\n\n\n\n\n\n\n\n\n      <ion-item *ngIf="prodCat==\'New\'">\n\n        <ion-label >{{\'Enter New Category Name\' | translate}}</ion-label>\n\n        <ion-input type="text" placeholder="Enter Category Here" formControlName="newprodCat" [(ngModel)]=\'newprodCat\'></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </form>\n\n  <button ion-button block color="primary" (click)="addproduct()"  color="dark">{{\'Add Product\'| translate}}</button>\n\n  <button ion-button block style="background-color: red; color: white;" (click)="clearFields()">Clear Fields</button>\n\n\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\addproduct\addproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 211:
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_translation_translate_config_service__ = __webpack_require__(8);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function SingleProductPage(navCtrl, translateConfigService, barcodeScanner, navParams, sp, toastCtrl, camera, formBuilder) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = 0;
        this.prodWholesalePrice = 0;
        this.prodCost = 0;
        this.prodCat = "";
        this.orgData = {
            prodCode: 0,
            prodName: "",
            prodPrice: 0,
            prodWholesalePrice: 0,
            prodCost: 0,
            stock: 0,
            prodCat: "",
            image: ""
        };
        this.newprodCat = "";
        this.image = "";
        this.temp = "na";
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
            prodCode: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            prodName: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            prodPrice: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            prodWholesalePrice: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            prodCost: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            currstock: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            prodCat: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
        });
    }
    SingleProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    SingleProductPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SingleProductPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sp.storageReady().then(function () {
                    _this.sp.getUserDat().then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                        _this.uid = _this.userdata.uid;
                    }).catch(function (err) {
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
        this.camera.getPicture(options).then(function (base64Image) {
            _this.image = "data:image/png;base64," + base64Image;
            _this.upload_new(_this.product.name);
        }).catch(function (err) { console.log(err); });
    };
    SingleProductPage.prototype.upload_new = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var message = _this.translateConfigService.getTranslatedMessage('Please wait - Uploading new image');
            _this.toastCtrl.create({
                // @ts-ignore
                message: message.value,
                duration: 1000,
            }).present();
            _this.temp = "prodImages/" + _this.uid + _this.prodCode + name;
            //LET REF be tied to a particular product- we save the url in the products db
            var ref = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref("prodImages/" + _this.uid + _this.prodCode + name);
            var uploadTask = ref.putString(_this.image.split(',')[1], "base64");
            _this.temp = "UPTask";
            uploadTask.then(function (snap) {
                snap.ref.getDownloadURL().then(function (url) {
                    // do something with url here
                    _this.product.url = url;
                    _this.temp = url;
                    var message = _this.translateConfigService.getTranslatedMessage('Done uploading');
                    _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 1000,
                    }).present();
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
                "name": this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage('Finish');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000
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
        this.barcodeScanner.scan().then(function (barcodeData) {
            //this.prodCode = barcodeData.text;
            //this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
            _this.prodCode = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    SingleProductPage.prototype.updateProduct = function () {
        var _this = this;
        if (!this.formProduct.valid) {
            console.log('invalid product with missing fields');
        }
        else {
            if (this.newprodCat != "") {
                this.addCategory();
                this.product.cat = this.newprodCat;
            }
            var data = {
                "code": this.product.code,
                "name": this.product.name,
                "price": this.product.price,
                "wholesale_price": this.product.wholesale_price,
                "cost": this.product.cost,
                "cat": this.product.cat,
                "url": this.product.url,
                "stock_qty": this.product.stock_qty,
            };
            this.sp.updateProduct(data, this.prodCodeOld).then(function () {
                _this.sp.backupStorage();
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage('Finish');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 2000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */]);
                }, 1000);
                _this.prodCode = "";
            });
        }
    };
    SingleProductPage.prototype.deleteproduct = function (data) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.deleteProduct(data);
            setTimeout(function () {
                var message = _this.translateConfigService.getTranslatedMessage('Finish');
                var toast = _this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 2000
                });
                toast.present();
                _this.sp.backupStorage();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */]);
            }, 1000);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SingleProductPage.prototype.discardChange = function () {
        var message = this.translateConfigService.getTranslatedMessage('Changes discarded');
        this.image = this.orgData["image"];
        this.product.code = this.orgData["prodCode"];
        this.product.name = this.orgData["prodName"];
        this.product.price = this.orgData["prodPrice"];
        this.product.wholesale_price = this.orgData["prodWholesalePrice"];
        this.product.cost = this.orgData["prodCost"];
        this.product.stock_qty = this.orgData["stock"];
        this.product.cat = this.orgData["prodCat"];
        var toast = this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2500
        }).present();
        this.navCtrl.parent.select(0);
    };
    SingleProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\singleproduct\singleproduct.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Update Product</ion-title>\n\n  </ion-navbar> \n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formProduct">\n\n    <ion-list inset>\n\n\n\n      <!-- <ion-item>\n\n        <ion-label>Photo</ion-label>\n\n            <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n\n        </ion-item> -->\n\n\n\n      <ion-item>\n\n        <button ion-button (click)="launchCamera()">{{\'Take Picture\' | translate}}</button>\n\n        <img *ngIf="image!=null" [src]="image" style="width: 100px;">\n\n      </ion-item>\n\n      <button ion-button block color="primary" (click)="scanQR()">{{\'Scan Barcode\'| translate}}</button>\n\n\n\n      <ion-item>\n\n        <ion-label>{{\'Product Code:\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="prodCode" [(ngModel)]=\'product.code\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Name:\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="prodName" [(ngModel)]=\'product.name\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Retail Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodPrice" [(ngModel)]=\'product.price\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Wholesale Price:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodWholesalePrice" [(ngModel)]=\'product.wholesale_price\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Buying Cost:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="prodCost" [(ngModel)]=\'product.cost\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Current Stock Qty:\'| translate}}</ion-label>\n\n        <ion-input type="number" formControlName="currstock" [(ngModel)]=\'product.stock_qty\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'Product Category\' | translate}}</ion-label>\n\n        <ion-select multiple="false" formControlName="prodCat" [(ngModel)]=\'product.cat\'>\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n\n\n\n\n    </ion-list>\n\n  </form>\n\n  <button ion-button block color="primary" (click)="updateProduct()">{{\'Update Product\'| translate}}</button>\n\n  <button ion-button block style="color: whitesmoke; background-color: gray;" (click)="discardChange()">Discard Changes</button>\n\n  <button ion-button block color="danger" (click)="deleteproduct(product)">{{\'Delete Product\'| translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\singleproduct\singleproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], SingleProductPage);
    return SingleProductPage;
}());

//# sourceMappingURL=singleproduct.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTransactionPageModule", function() { return IncomeTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_transaction__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IncomeTransactionPageModule = /** @class */ (function () {
    function IncomeTransactionPageModule() {
    }
    IncomeTransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__income_transaction__["a" /* IncomeTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__income_transaction__["a" /* IncomeTransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], IncomeTransactionPageModule);
    return IncomeTransactionPageModule;
}());

//# sourceMappingURL=income-transaction.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductListPageModule = /** @class */ (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryHomePageModule", function() { return SummaryHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SummaryHomePageModule = /** @class */ (function () {
    function SummaryHomePageModule() {
    }
    SummaryHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__summary_home__["a" /* SummaryHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary_home__["a" /* SummaryHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], SummaryHomePageModule);
    return SummaryHomePageModule;
}());

//# sourceMappingURL=summary-home.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHomePageModule", function() { return TransactionHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_home__["a" /* TransactionHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_home__["a" /* TransactionHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], TransactionHomePageModule);
    return TransactionHomePageModule;
}());

//# sourceMappingURL=transaction-home.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionProductPageModule", function() { return TransactionProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_product__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionProductPageModule = /** @class */ (function () {
    function TransactionProductPageModule() {
    }
    TransactionProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_product__["a" /* TransactionProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_product__["a" /* TransactionProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], TransactionProductPageModule);
    return TransactionProductPageModule;
}());

//# sourceMappingURL=transaction-product.module.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_bluetooth_serial__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_printer_printer__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_transaction_home_transaction_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_all_transaction_all_transaction__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_expense_transaction_expense_transaction__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_income_transaction_income_transaction__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_summary_home_summary_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_coach_home_coach_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_coach_goals_coach_goals__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_coach_coach_coach_coach__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_coach_businesstips_coach_businesstips__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_contact_us_contact_us__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_transaction_product_transaction_product__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_product_list_product_list__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_add_product_category_add_product_category__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_expenses_home_expenses_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_user_profile_user_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_add_product_category_add_product_category_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_all_transaction_all_transaction_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_coach_businesstips_coach_businesstips_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_coach_home_coach_home_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_coach_goals_coach_goals_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_coach_coach_coach_coach_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_contact_us_contact_us_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_login_login_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_sign_up_sign_up_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_transaction_home_transaction_home_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_expense_transaction_expense_transaction_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_income_transaction_income_transaction_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_summary_home_summary_home_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_transaction_product_transaction_product_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_product_list_product_list_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_expenses_home_expenses_home_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_user_profile_user_profile_module__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































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
__WEBPACK_IMPORTED_MODULE_24_firebase__["initializeApp"](config);
// language translation service
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '../assets/i18n/', '.json');
}
// export function initTranslation(translate: TranslateService) {
//   return () => {
//     translate.setDefaultLang('my');
//     translate.use('my');
//     return Promise.resolve();
//   };
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { navExitApp: false }, {
                    links: [
                        { loadChildren: '../pages/all-transaction/all-transaction.module#AllTransactionPageModule', name: 'AllTransactionPage', segment: 'all-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-product-category/add-product-category.module#AddProductCategoryPageModule', name: 'AddProductCategoryPage', segment: 'add-product-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-businesstips/coach-businesstips.module#CoachBusinesstipsPageModule', name: 'CoachBusinesstipsPage', segment: 'coach-businesstips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-coach/coach-coach.module#CoachCoachPageModule', name: 'CoachCoachPage', segment: 'coach-coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-goals/coach-goals.module#CoachGoalsPageModule', name: 'CoachGoalsPage', segment: 'coach-goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-home/coach-home.module#CoachHomePageModule', name: 'CoachHomePage', segment: 'coach-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense-transaction/expense-transaction.module#ExpenseTransactionPageModule', name: 'ExpenseTransactionPage', segment: 'expense-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expenses-home/expenses-home.module#ExpensesHomePageModule', name: 'ExpensesHomePage', segment: 'expenses-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income-transaction/income-transaction.module#IncomeTransactionPageModule', name: 'IncomeTransactionPage', segment: 'income-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-home/summary-home.module#SummaryHomePageModule', name: 'SummaryHomePage', segment: 'summary-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-home/transaction-home.module#TransactionHomePageModule', name: 'TransactionHomePage', segment: 'transaction-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-product/transaction-product.module#TransactionProductPageModule', name: 'TransactionProductPage', segment: 'transaction-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_40__pages_add_product_category_add_product_category_module__["AddProductCategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_all_transaction_all_transaction_module__["AllTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_coach_businesstips_coach_businesstips_module__["CoachBusinesstipsPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_coach_home_coach_home_module__["CoachHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_coach_goals_coach_goals_module__["CoachGoalsPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_coach_coach_coach_coach_module__["CoachCoachPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_contact_us_contact_us_module__["ContactUsPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_sign_up_sign_up_module__["SignUpPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_transaction_home_transaction_home_module__["TransactionHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_expense_transaction_expense_transaction_module__["ExpenseTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_income_transaction_income_transaction_module__["IncomeTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_summary_home_summary_home_module__["SummaryHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_transaction_product_transaction_product_module__["TransactionProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_product_list_product_list_module__["ProductListPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_expenses_home_expenses_home_module__["ExpensesHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_user_profile_user_profile_module__["UserProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_expense_transaction_expense_transaction__["a" /* ExpenseTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_income_transaction_income_transaction__["a" /* IncomeTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_all_transaction_all_transaction__["a" /* AllTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_coach_home_coach_home__["a" /* CoachHomePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_summary_home_summary_home__["a" /* SummaryHomePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_coach_goals_coach_goals__["a" /* CoachGoalsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_coach_coach_coach_coach__["a" /* CoachCoachPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_transaction_product_transaction_product__["a" /* TransactionProductPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_add_product_category_add_product_category__["a" /* AddProductCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_expenses_home_expenses_home__["a" /* ExpensesHomePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_user_profile_user_profile__["a" /* UserProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_23__providers_printer_printer__["a" /* PrinterProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 330:
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
        HR_58MM: '================================',
        HR2_58MM: '********************************'
    },
    FEED_CONTROL_SEQUENCES: {
        CTL_LF: [0x0a],
        CTL_FF: [0x0c],
        CTL_CR: [0x0d],
        CTL_HT: [0x09],
        CTL_VT: [0x0b],
    },
    LINE_SPACING: {
        LS_DEFAULT: [0x1b, 0x32],
        LS_SET: [0x1b, 0x33]
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
            8: [0x07]
        },
        TXT_WIDTH: {
            1: [0x00],
            2: [0x10],
            3: [0x20],
            4: [0x30],
            5: [0x40],
            6: [0x50],
            7: [0x60],
            8: [0x70]
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
    }
};
//# sourceMappingURL=printer-commands.js.map

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_summary_home_summary_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_expenses_home_expenses_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_profile_user_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_translation_translate_config_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = /** @class */ (function () {
    function MyApp(app, platform, statusBar, translateService, translateConfigService, splashScreen, toastCtrl, sp) {
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.translateService = translateService;
        this.translateConfigService = translateConfigService;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Sales', component: __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */] },
            { title: 'Products', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Stock', component: __WEBPACK_IMPORTED_MODULE_11__pages_expenses_home_expenses_home__["a" /* ExpensesHomePage */] },
            { title: 'Business', component: __WEBPACK_IMPORTED_MODULE_8__pages_summary_home_summary_home__["a" /* SummaryHomePage */] },
            // { title: 'Coach', component: CoachHomePage },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__["a" /* ContactUsPage */] },
        ];
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        //this.sp.backupStorageLogout().then();
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut().then(function () {
            _this.toastCtrl.create({
                message: "Logged out!",
                duration: 3000
            }).present();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MyApp.prototype.ionViewDidEnter = function () {
        document.addEventListener("backbutton", function (e) {
            console.log("disable back button");
        }, false);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translateService.addLangs(["en", "pt"]);
            _this.translateService.setDefaultLang('en');
            _this.translateService.use('en');
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openUserProfilePage = function () {
        this.openPage({ component: __WEBPACK_IMPORTED_MODULE_12__pages_user_profile_user_profile__["a" /* UserProfilePage */] });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-row>\n\n        <button ion-button block medium color="dark">{{\'Menu\' | translate}}</button> \n\n      </ion-row>\n\n\n\n      <ion-row>\n\n          <button ion-button block small outline color="dark" (click)="openUserProfilePage()" menuClose>{{\'View User Profile\' | translate}}</button>\n\n      </ion-row>\n\n      \n\n\n\n\n\n      \n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title | translate}}\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()" >\n\n        {{\'Logout\'| translate}}\n\n      </button>\n\n      \n\n       \n\n      \n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__providers_translation_translate_config_service__["a" /* TranslateConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__providers_translation_translate_config_service__["a" /* TranslateConfigService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _j || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_transaction_all_transaction__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__income_transaction_income_transaction__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_product_transaction_product__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(13);
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function TransactionHomePage(navCtrl, navParams, translateConfigService, toastCtrl, sp, events) {
        //this.getUserData();
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateConfigService = translateConfigService;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.events = events;
        this.AllTransactions = __WEBPACK_IMPORTED_MODULE_2__all_transaction_all_transaction__["a" /* AllTransactionPage */];
        this.IncomeTransactions = __WEBPACK_IMPORTED_MODULE_3__income_transaction_income_transaction__["a" /* IncomeTransactionPage */];
        //ExpenseTransactions = ExpenseTransactionPage;
        this.ExpenseTransactions = __WEBPACK_IMPORTED_MODULE_4__transaction_product_transaction_product__["a" /* TransactionProductPage */];
        this.userdata = { business_address: "",
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
        this.events.subscribe('cbUpdate:created', function (data) { return __awaiter(_this, void 0, void 0, function () {
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
                console.log('ionViewDidLoad TransactionHomePage');
                // document.addEventListener("backbutton",function(e) {
                //   console.log("disable back button")
                // }, false);
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
                            _this.sp.getUserDat().then(function (val) {
                                _this.userdata = JSON.parse(val);
                                console.log(_this.userdata);
                                _this.setUsrLang();
                                resolve();
                            }).catch(function (err) {
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
        var message = this.translateConfigService.getTranslatedMessage('Online backup ready');
        this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000
        }).present();
    };
    TransactionHomePage.prototype.cashbtn = function () {
        this.getUserData();
        var message = this.translateConfigService.getTranslatedMessage('Balance');
        this.toastCtrl.create({
            // @ts-ignore
            message: message.value + ": " + this.userdata.cash_balance,
            duration: 3000
        }).present();
    };
    TransactionHomePage.prototype.setUsrLang = function () {
        this.translateConfigService.setLanguage(this.userdata.language);
        console.log(this.userdata.language);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
    ], TransactionHomePage.prototype, "tabRef", void 0);
    TransactionHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\transaction-home\transaction-home.html"*/'<!--\n\n  Generated template for the TransactionHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"Sales"|translate}}</ion-title>\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()"><ion-icon name="cloud-upload" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()"><ion-icon name="logo-usd" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n \n\n  \n\n<ion-content padding>\n\n  \n\n  <ion-tabs tabsPlacement="top" #myTabs>\n\n    <ion-tab [root]="AllTransactions" tabTitle="{{\'Calculator\'|translate}}" tabIcon="calculator"></ion-tab>\n\n    <ion-tab [root]="ExpenseTransactions" tabTitle="{{\'Stock\'|translate}}" tabIcon="apps"></ion-tab>\n\n    <ion-tab [root]="IncomeTransactions" tabTitle="{{\'Receipt\'|translate}}" tabIcon="list-box"></ion-tab>\n\n\n\n   </ion-tabs>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\transaction-home\transaction-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], TransactionHomePage);
    return TransactionHomePage;
}());

//# sourceMappingURL=transaction-home.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(27);
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
        this.email = "";
        this.phone = "";
        this.getInfo();
    }
    ContactUsPage.prototype.getInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("contact-us").get()
            .then(function (doc) {
            _this.email = doc.docs[0].data().email;
            _this.phone = doc.docs[0].data().phone;
        });
    };
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\contact-us\contact-us.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{"Contact Us"| translate}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n<h1>{{"Contact the OPEN Helpline"| translate}}</h1>\n\n{{"Contact us msg"| translate}}\n\n\n\n<br><br>\n\n\n\n<ion-grid>\n\n\n\n  \n\n\n\n\n\n    <ion-row  style="background-color: #f0f0f0">\n\n        <ion-col col-12>\n\n\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n              {{ phone }}\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred; text-transform:lowercase">\n\n              {{ email }}\n\n            </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(212);
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
    function ProductListPage(navCtrl, translateConfigService, navParams, sp, events, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.searchterm = "";
        this.selectedCat = [];
        this.listArray = [];
        this.events.subscribe('prodAdd:created', function (data) {
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
    ProductListPage.prototype.getCategories = function () {
        var _this = this;
        //console.log(this.listCat + " and "+this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                _this.listCat = JSON.parse(val);
                //console.log("Addprodpg: "+this.listCat)
                _this.getCategories();
            }).catch(function (err) {
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
            _this.sp.getProducts().then(function (val) {
                _this.listProducts = JSON.parse(val);
                if (_this.listProducts != null) {
                    _this.filteredProduct();
                }
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ProductListPage.prototype.singleProduct = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__["a" /* SingleProductPage */], { 'data': data });
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
            selector: 'page-product-list',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\product-list\product-list.html"*/'<!--\n\n  Generated template for the ProductListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>product-list</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n<ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n  <ion-item>\n\n    <ion-label>{{"Select category"|translate}}</ion-label>\n\n    <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n        <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n<!-- <ion-card>\n\n    <ion-grid line>\n\n      <ion-row>\n\n      <ion-col col-2>\n\n        <ion-row>\n\n          <ion-avatar>\n\n              <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n\n            </ion-avatar>\n\n          </ion-row>\n\n      </ion-col>\n\n      <ion-col col-10>\n\n          <ion-row>\n\n              <ion-col col-7>\n\n                Shan Noodle\n\n              </ion-col>\n\n              <ion-col col-3>\n\n                568 - N/A?\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                    <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                    <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 MMK </ion-col>\n\n              <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6></ion-col>\n\n              <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n\n            </ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-card>  -->\n\n\n\n\n\n\n\n  <ion-list inset  *ngFor="let product of filteredList">\n\n    \n\n      <ion-card>\n\n          <ion-grid> \n\n            <ion-row>\n\n            <ion-col col-2>\n\n              <ion-row> \n\n                <ion-avatar>\n\n                    <img [src]="product.url">\n\n                  </ion-avatar>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        {{product.name}}\n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                      {{"Stock"|translate}}: {{product.stock_qty}}\n\n                    </ion-col>\n\n                      <ion-col col-1>\n\n                          <ion-icon name="arrow-dropup-circle" style=" color: green" (click)="swapUp(product.code)"></ion-icon>\n\n                      </ion-col>\n\n                      <ion-col col-1>\n\n                          <ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="swapDown(product.code)"></ion-icon>\n\n                      </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-4 style="color: grey; font-size: 10px;"> {{"Retail Price"|translate}} {{product.price}} MMK </ion-col>\n\n                    <ion-col col-4 style="color: grey; font-size: 10px; text-align: center;"> {{"Wholesale Price"|translate}} {{product.wholesale_price}} MMK </ion-col>\n\n                    <ion-col col-4 style="color: grey; font-size: 10px; text-align: end;">  {{"Category"|translate}} {{product.cat}} </ion-col>\n\n                  </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">{{"View / Edit"|translate}}</button> </ion-col>\n\n          </ion-row>\n\n          </ion-grid>\n\n        </ion-card> \n\n     \n\n    </ion-list>\n\n  \n\n\n\n  \n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(10);
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
    TranslateConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TranslateConfigService);
    return TranslateConfigService;
}());

//# sourceMappingURL=translate-config.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
 * Generated class for the AllTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllTransactionPage = /** @class */ (function () {
    function AllTransactionPage(navCtrl, translateConfigService, navParams, events, sp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.events = events;
        this.sp = sp;
        this.itemsname = [];
        this.result = "";
        this.flag_mode = 0;
        this.showSampleRec = true;
        this.itemsprice = [];
        this.itemsqty = [];
        this.ctr = 0;
        this.lastsum = 0;
        this.lastchar = "NIL";
        this.lastdigit = 0;
        this.userdata = { business_address: "",
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
        this.getUserData();
        this.events.subscribe('addRecCalc:created', function (data) {
            console.log("ENTERED!");
            console.log("Received 0 " + data);
            //SET itemsprice here? - make new addgen - diff button calls diff event that pushes rather than replaces
            //Same for Product Transaction Page
            //console.log(this.showSampleRec);
            var tempdat = JSON.parse(data);
            // this.itemsname=null;
            // this.itemsprice=null;
            // this.itemsqty=null;
            tempdat.forEach(function (element) {
                _this.itemsname.push(element.name);
                _this.itemsprice.push(element.price);
                _this.itemsqty.push(element.qty);
            });
            console.log(_this.itemsprice);
        });
    }
    AllTransactionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AllTransactionPage');
        console.log("Size of array: " + this.itemsprice.length);
        if (this.itemsprice.length > 0) {
            this.showSampleRec = false;
            this.flag_mode = 1;
        }
        this.delay(3000).then(function () {
            _this.getUserData();
        });
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
                    _this.sp.getUserDat().then(function (val) {
                        _this.userdata = JSON.parse(val);
                        console.log(_this.userdata);
                    }).catch(function (err) {
                        alert("Error: " + err);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AllTransactionPage.prototype.createRec = function () {
        var _this = this;
        var tempJSON = { "itemslist": [], };
        this.itemsprice.forEach(function (element, index) {
            if (_this.itemsname.length > 0 && index < _this.itemsname.length) {
                tempJSON.itemslist.push({ 'name': _this.itemsname[index],
                    'price': parseInt(element),
                    'qty': _this.itemsqty[index],
                });
            }
            else {
                tempJSON.itemslist.push({
                    'code': '000000',
                    'cat': 'NIL',
                    'stock_qty': 0,
                    'name': "ထုတ်ကုန်",
                    'price': parseInt(element),
                    'qty': _this.itemsqty[index],
                });
            }
        });
        //var sampledat={ 'itemslist': myJsonString,};
        var myObjStr = JSON.stringify(tempJSON);
        this.navCtrl.parent.select(2);
        this.delay(300).then(function (any) {
            _this.events.publish('genRec:created', myObjStr);
            console.log("Sent: " + myObjStr);
            //your task after delay.
        });
        this.result = "";
        this.itemsname = [];
        this.itemsprice = [];
        this.lastsum = 0;
        this.itemsqty = [];
    };
    AllTransactionPage.prototype.btnClicked = function (btn) {
        var _this = this;
        this.getUserData();
        try {
            console.log('CalculatorPage::btnClicked = ' + btn);
            if (btn == "C") {
                this.result = "";
                this.itemsprice = [];
                this.lastsum = 0;
                this.itemsqty = [];
            }
            else if (btn == "=") {
                this.showSampleRec = true;
                //IF LAST = character then remove that character 
                var answ = this.result.split('+');
                if (this.result.includes('-')) {
                    answ = this.result.split('+').join('-').split('-');
                }
                var temp;
                answ.forEach(function (element, index) {
                    if (element.includes("*")) {
                        answ[index] = element.substring(0, element.indexOf("*"));
                        _this.itemsprice.push(answ[index]);
                        temp = parseInt(element.substring(element.indexOf("*") + 1));
                        console.log(element.substring(element.indexOf("*") + 1));
                        _this.itemsqty.push(temp);
                    }
                    else if (element.includes("/")) {
                        answ[index] = element.substring(0, element.indexOf("/"));
                        _this.itemsprice.push(answ[index]);
                        temp = Math.round(1 / (parseInt((element.substring(element.indexOf("/") + 1)))) * 100) / 100;
                        console.log(temp);
                        _this.itemsqty.push(temp);
                    }
                    else {
                        if (element != "") {
                            _this.itemsprice.push(element);
                            _this.itemsqty.push(parseInt("1"));
                        }
                    }
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
                    this.lastsum = this.lastsum + (parseInt(this.itemsprice[i]) * this.itemsqty[i]);
                    console.log(this.lastsum);
                }
            }
            else if (btn == "b") {
                this.result = this.result.substring(0, this.result.length - 1);
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
                if ((btn == '+' || btn == '-' || btn == '*' || btn == '/') && (this.lastchar == '+' || this.lastchar == '-' || this.lastchar == '*' || this.lastchar == '/')) {
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
        }
        finally {
        }
    };
    AllTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\all-transaction\all-transaction.html"*/'<!--\n\n  Generated template for the AllTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding>\n\n    <!-- <ion-fab bottom right>\n\n        <button ion-fab color="primary" item-right><ion-icon name="calculator"></ion-icon></button>\n\n      </ion-fab> -->\n\n      <!-- <ion-card *ngIf="showSampleRec==false">\n\n        ကျေးဇူးပြုပြီးပစ္စည်းအတွက်ပမာဏကိုမြှောက်ပါ၊ ရှိပြီးသားငွေတောင်းခံလွှာကိုထည့်ရန်တူညီသောစာလုံးကိုနှိပ်ပါ။\n\n\n\n        အလွတ်ပစ္စည်းပေါင်းများစွာကိုထည့်သွင်းလိုပါက * qty တစ်ခုချင်းစီကိုရိုက်ထည့်ပြီးနောက်တစ်ခုကိုရိုက်ထည့်ရန် + သင်္ကေတကိုနှိပ်ပါ\n\n      </ion-card>\n\n       -->\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-12 col-md-6>\n\n\n\n          <div class="calculator">\n\n            <div class="header">\n\n              <div class="window"></div>\n\n              <div class="input">\n\n                <ion-row>\n\n                  <ion-input type="text" placeholder="0" name="display" [(ngModel)]="result">\n\n                  </ion-input>\n\n                  <ion-icon name="backspace" (click)="btnClicked(\'b\')"></ion-icon>\n\n                  \n\n                </ion-row> \n\n               \n\n                    \n\n                \n\n              </div>\n\n             \n\n              \n\n            </div>\n\n            <div class="keys">\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'7\')">7</span>\n\n                  <span (click)="btnClicked(\'8\')">8</span>\n\n                  <span (click)="btnClicked(\'9\')">9</span>\n\n                </div>\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'*\')">×</span>\n\n\n\n                </div>\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'4\')">4</span>\n\n                  <span (click)="btnClicked(\'5\')">5</span>\n\n                  <span (click)="btnClicked(\'6\')">6</span>\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'+\')">+</span>\n\n           </div>\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'1\')">1</span>\n\n                  <span (click)="btnClicked(\'2\')">2</span>\n\n                  <span (click)="btnClicked(\'3\')">3</span>\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'/\')">÷</span>\n\n                  <span (click)="btnClicked(\'squareroot\')">√x</span>\n\n                </div>\n\n\n\n\n\n              </div>\n\n\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'C\')">C</span>\n\n                  <span (click)="btnClicked(\'0\')">0</span>\n\n                  <span (click)="btnClicked(\'-\')">-</span>\n\n\n\n\n\n\n\n                </div>\n\n\n\n                <div class="symbol action">\n\n                  <span (click)="btnClicked(\'=\')">=</span>\n\n                </div>\n\n\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n    \n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-6>\n\n\n\n\n\n        <ion-card *ngIf="showSampleRec==true"> \n\n\n\n                <ion-grid>\n\n          \n\n                  <ion-row> <ion-col style="text-align: center; padding-top: 5px;">{{userdata? userdata.business_name: null}} </ion-col> </ion-row>\n\n          \n\n                  <ion-row>\n\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata?userdata.business_address:null}}</ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata?userdata.ph_no:null}}</ion-col>\n\n                  </ion-row>          \n\n                  <ion-row style="padding-top: 5px;">\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><b>{{"Sl" | translate}}</b></ion-col>\n\n                      <ion-col col-4 style="color: black; font-size: 10px; text-align: center"><b>{{"Name" | translate}}</b></ion-col>\n\n                      <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>{{"Price"| translate}}</b></ion-col>\n\n                      <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>{{"Qty"| translate}}</b></ion-col>\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n\n                  </ion-row>\n\n          \n\n                 \n\n          \n\n                  <ion-list *ngFor="let item of itemsprice; let i = index" no-lines>\n\n          \n\n              \n\n                    <ion-row>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center">{{i+1}}.</ion-col>\n\n                        <ion-col col-4 style="color: black; font-size: 10px; text-align: center">\n\n                         Item {{i+1}}</ion-col>   \n\n                        <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{item}}</ion-col>\n\n                        <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{itemsqty[i]}}</ion-col>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n\n                    </ion-row>\n\n                \n\n          \n\n                  </ion-list>\n\n          \n\n                  <ion-row padding>\n\n                      <ion-col col-1></ion-col>  \n\n                    <ion-col col-4 style="text-align: center;font-size: 10px;"><b>{{"Total"| translate}}</b> </ion-col>\n\n                      <ion-col col-2 style="text-align: center;font-size: 10px;"><b>{{lastsum}}</b> </ion-col>\n\n                      <ion-col col-5></ion-col>\n\n                    </ion-row>\n\n          \n\n          \n\n                   \n\n          \n\n          \n\n                </ion-grid>\n\n          \n\n          \n\n          \n\n\n\n        </ion-card>\n\n\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <!-- Dynamically Generate All transactions from backend - see feed from prev -->\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n            <button ion-button (click)="createRec()" full style="background-color: #222">{{"Create Receipt"|translate}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n   \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\all-transaction\all-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], AllTransactionPage);
    return AllTransactionPage;
}());

//# sourceMappingURL=all-transaction.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(13);
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
    function AddProductCategoryPage(navCtrl, translateConfigService, navParams, sp, toastCtrl) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.newprodCat = "";
    }
    AddProductCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    AddProductCategoryPage.prototype.getCategories = function () {
        var _this = this;
        console.log(this.listCat + " and " + this.newprodCat);
        this.sp.storageReady().then(function () {
            _this.sp.getCategories().then(function (val) {
                console.log("val = " + val);
                _this.listCat = JSON.parse(val);
                console.log(_this.listCat);
                _this.getCategories();
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    AddProductCategoryPage.prototype.addCategory = function () {
        var _this = this;
        console.log(this.listCat + " and " + this.newprodCat);
        if (this.newprodCat != "") {
            var data_1 = {
                "name": this.newprodCat,
            };
            this.sp.storageReady().then(function () {
                _this.sp.addCategory(data_1);
                setTimeout(function () {
                    var message = _this.translateConfigService.getTranslatedMessage('Finish');
                    var toast = _this.toastCtrl.create({
                        // @ts-ignore
                        message: message.value,
                        duration: 3000
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
                var message = _this.translateConfigService.getTranslatedMessage('Finish');
                var toast = _this.toastCtrl.create({
                    // @ts-ignore
                    message: message.value,
                    duration: 3000
                });
                _this.getCategories();
                //this.navCtrl.push(ProductListPage);
                //this.events.publish('prodAdd:created',0);
                // (this.navCtrl.parent as Tabs).select(0);
                toast.present();
            }, 1000);
        });
    };
    AddProductCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product-category',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\add-product-category\add-product-category.html"*/'<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n          <ion-item>\n\n              <ion-input type="text" placeholder="Enter Category Here"  [(ngModel)]=\'newprodCat\'></ion-input>\n\n          </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n          <button ion-button full color="dark" (click)="addCategory()"> {{\'Add Category\' | translate}}</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n   \n\n    \n\n\n\n  <ion-item>\n\n     <h2> <b>{{\'View/Delete Category\' | translate}} </b> </h2>\n\n  </ion-item>\n\n \n\n  <ion-list  *ngFor="let element of listCat">\n\n\n\n      <ion-item>\n\n          {{element.name}}\n\n          <ion-icon item-end name="close-circle" (click)="delCat(element)" color="danger"></ion-icon> \n\n      </ion-item>\n\n  </ion-list>\n\n \n\n\n\n\n\n  \n\n\n\n \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\add-product-category\add-product-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AddProductCategoryPage);
    return AddProductCategoryPage;
}());

//# sourceMappingURL=add-product-category.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachBusinesstipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        console.log('ionViewDidLoad CoachBusinesstipsPage');
    };
    CoachBusinesstipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-businesstips',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-businesstips\coach-businesstips.html"*/'<!--\n\n  Generated template for the CoachBusinesstipsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-businesstips</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <ion-card>\n\n    <ion-grid line>\n\n        <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n          <ion-col col-10 style="color: grey; font-size: 10px;"> Wed, 10th October 2018 </ion-col>\n\n          <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n        </ion-row>\n\n        <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n          <ion-col><h2><b>You\'ve got a winner!</b></h2></ion-col>\n\n        </ion-row>\n\n\n\n      <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n        Your item XYZ sells 50% higher than any other product in its category. Item ABC sells only 2% the volume of XYZ. You should stock more XYZ and less ABC.\n\n      </ion-row>\n\n      <ion-row  style="background-color: #f0f0f0">\n\n        <ion-col col-6 style="text-align: center ">\n\n            <ion-icon name="thumbs-up" ></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center ">\n\n            <ion-icon name="thumbs-down"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card> \n\n\n\n  \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-businesstips\coach-businesstips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */]])
    ], CoachBusinesstipsPage);
    return CoachBusinesstipsPage;
}());

//# sourceMappingURL=coach-businesstips.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachCoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the CoachCoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachCoachPage = /** @class */ (function () {
    function CoachCoachPage(navCtrl, translateConfigService, navParams) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
    }
    CoachCoachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachCoachPage');
    };
    CoachCoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-coach',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-coach\coach-coach.html"*/'<!--\n\n  Generated template for the CoachCoachPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-coach</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Want to look professional? Provide your customers a receipt with their purchases.\n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-up" ></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card> \n\n\n\n      \n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Let your customers know that you are listening. Tell them, "I hear what you are saying" and ask "Tell me more about that". This way you indicate that you are paying attention without agreeing or disagreeing with them.\n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-up" ></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-coach\coach-coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CoachCoachPage);
    return CoachCoachPage;
}());

//# sourceMappingURL=coach-coach.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachGoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the CoachGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachGoalsPage = /** @class */ (function () {
    function CoachGoalsPage(navCtrl, translateConfigService, navParams) {
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.navParams = navParams;
    }
    CoachGoalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachGoalsPage');
    };
    CoachGoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-goals',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-goals\coach-goals.html"*/'<!--\n\n  Generated template for the CoachGoalsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-goals</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n      \n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>Goal: Bulk Transaction</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Record 15 transactions and get the ability to add miltiple products in one transaction entry!              \n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                <b>Go</b>\n\n            </ion-col>\n\n \n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card> \n\n\n\n      <ion-card>\n\n          <ion-grid line>\n\n              <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n                <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n                <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n              </ion-row>\n\n              <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n                <ion-col><h2><b>Goal: Record Discounts</b></h2></ion-col>\n\n              </ion-row>\n\n      \n\n            <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n                Record 25 transactions to add discounts to sales & expenses              \n\n            </ion-row>\n\n            <ion-row  style="background-color: #f0f0f0">\n\n              <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                  <b>Go</b>\n\n              </ion-col>\n\n   \n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\coach-goals\coach-goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_translation_translate_config_service__["a" /* TranslateConfigService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CoachGoalsPage);
    return CoachGoalsPage;
}());

//# sourceMappingURL=coach-goals.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(208);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, zone, navParams, toastCtrl, facebook, sp, alertCtrl, translateConfigService) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.sp = sp;
        this.alertCtrl = alertCtrl;
        this.translateConfigService = translateConfigService;
        this.email = "";
        this.password = "";
        this.listOfLang = [];
        this.loadDropDowns();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                //sp.clearMem();
                sp.setMem().then(function () {
                    zone.run(function () {
                        navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
                    });
                });
            }
            else {
                // No user is signed in.
                console.log("no-user is signed in");
            }
        });
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    LoginPage.prototype.loadDropDowns = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("sign-up").get()
            .then(function (doc) {
            doc.docs[0].data().language.forEach(function (l) {
                _this.listOfLang.push(l);
                console.log(_this.listOfLang);
            });
        });
    };
    LoginPage.prototype.loginWithFB = function () {
        var _this = this;
        this.facebook.login(['email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
                .then(function (success) {
                console.log("Firebase success", success);
                var temp = success;
                _this.loginProcedure();
            })
                .catch(function (err) {
                console.log("Firebase error", err);
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.Auth.Persistence.LOCAL).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(_this.email, _this.password)
                .then(function (user) {
                _this.loginProcedure();
            }).catch(function (err) {
                console.log(err);
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 3000
                }).present();
            });
        });
        //console.log(user)
    };
    LoginPage.prototype.loginAction = function () {
        var message = this.translateConfigService.getTranslatedMessage('This feature will open shortly');
        this.toastCtrl.create({
            // @ts-ignore
            message: message.value,
            duration: 2000,
        }).present();
    };
    LoginPage.prototype.gotoSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.loginProcedure = function () {
        var _this = this;
        this.zone.run(function () {
            // this.sp.clearMem();
            _this.sp.setMem().then(function () { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]); });
        });
    };
    LoginPage.prototype.languageChanged = function () {
        console.log("selected language: " + this.selectedLanguage);
        this.translateConfigService.setLanguage(this.selectedLanguage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-row>\n\n      <ion-col col-4>\n\n          <ion-select multiple="false" [(ngModel)]="selectedLanguage" (ionChange)="languageChanged()">\n\n              <ion-option *ngFor="let l of listOfLang">{{ l }}</ion-option>\n\n            </ion-select>\n\n      </ion-col>\n\n      <ion-col col-8></ion-col>\n\n  </ion-row>\n\n\n\n         \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button block clear color="light" class="nametop"><b>Open</b></button>\n\n\n\n  <ion-grid style="width: 75%;">\n\n    \n\n    <ion-row class="row-style">\n\n      \n\n      <ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n\n      <ion-input type="email" placeholder="{{ \'email\' | translate }}" [(ngModel)]="email"></ion-input>\n\n    </ion-row>\n\n    <ion-row class="row-style">\n\n      <ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n\n      <ion-input type="password" placeholder="{{ \'password\' | translate }}" [(ngModel)]="password" ></ion-input>\n\n    </ion-row>\n\n    <ion-row>\n\n      <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">{{"Sign in"|translate}}</button>\n\n    </ion-row>\n\n    <!-- <div class="btn_container">\n\n      <button ion-button full (click)="loginWithFB();">Facebook ဖြင့်ဝင်ပါ</button>\n\n  </div> -->\n\n  \n\n  </ion-grid>\n\n\n\n\n\n  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="gotoSignUp()">{{"Don\'t have an account?"|translate}}</button>\n\n\n\n\n\n\n\n \n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\191119open-fintech\open-pos\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_translation_translate_config_service__["a" /* TranslateConfigService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map