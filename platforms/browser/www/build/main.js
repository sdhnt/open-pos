webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
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
    function SingleProductPage(navCtrl, barcodeScanner, navParams, sp, toastCtrl, camera) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = 0;
        this.prodCost = 0;
        this.prodCat = "";
        this.newprodCat = "";
        this.image = "";
        this.temp = "na";
        this.produrl = "";
        this.product = this.navParams.get("data");
        this.prodCodeOld = this.product.code;
        this.image = this.product.url;
        this.getUserData();
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
            var ud, uu, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    uu = doc.id;
                                    ud = doc.data();
                                    //this.userdata=doc.data();       
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        this.uid = uu;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
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
            allowEdit: true,
        };
        this.camera.getPicture(options).then(function (base64Image) {
            _this.image = "data:image/png;base64," + base64Image;
            _this.upload_new(_this.product.name);
        }).catch(function (err) { console.log(err); });
    };
    SingleProductPage.prototype.upload_new = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.toastCtrl.create({
                message: "Please wait - Uploading New Image",
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
                    _this.toastCtrl.create({
                        message: "Done Uploading",
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
                    var toast = _this.toastCtrl.create({
                        message: 'ပြီးပြီ',
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
        if (this.newprodCat != "") {
            this.addCategory();
            this.product.cat = this.newprodCat;
        }
        var data = {
            "code": this.product.code,
            "name": this.product.name,
            "price": this.product.price,
            "cost": this.product.cost,
            "cat": this.product.cat,
            "url": this.product.url,
            "stock_qty": this.product.stock_qty,
        };
        this.sp.updateProduct(data, this.prodCodeOld).then(function () {
            _this.sp.backupStorage();
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: "ပြီးပြီ",
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */]);
            }, 1000);
            _this.prodCode = "";
        });
    };
    SingleProductPage.prototype.deleteproduct = function (data) {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.deleteProduct(data);
            setTimeout(function () {
                var toast = _this.toastCtrl.create({
                    message: "ပြီးပြီ",
                    duration: 2000
                });
                toast.present();
                _this.sp.backupStorage();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__product_list_product_list__["a" /* ProductListPage */]);
            }, 1000);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SingleProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\singleproduct\singleproduct.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Update Product</ion-title>\n\n  </ion-navbar> \n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <ion-list inset>\n\n\n\n    <!-- <ion-item>\n\n      <ion-label>Photo</ion-label>  \n\n          <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n\n      </ion-item> -->\n\n \n\n      <ion-item>\n\n          <button ion-button (click)="launchCamera()">Take Picture</button>\n\n          <img *ngIf="image!=null" [src]="image" style="width: 100px;">  \n\n      </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label>ထုတ်ကုန်ကုဒ်</ion-label>\n\n      <ion-input type="text" [(ngModel)]=\'product.code\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>နာမည်</ion-label>\n\n      <ion-input type="text" [(ngModel)]=\'product.name\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>စျေးနှုန်း</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'product.price\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>ကုန်ကျစရိတ်</ion-label>\n\n        <ion-input type="number" [(ngModel)]=\'product.cost\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>QTY</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'product.stock_qty\'></ion-input>\n\n  </ion-item>\n\n      <ion-item>\n\n          <ion-label>အမျိုးအစားရွေးပါ</ion-label>\n\n          <ion-select multiple="false" [(ngModel)]=\'product.cat\'>\n\n              <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n          </ion-select>\n\n      </ion-item>\n\n    \n\n    \n\n\n\n  \n\n  </ion-list>\n\n  <button ion-button block color="primary" (click)="updateProduct()">နောက်ဆုံးသတင်း</button>\n\n  <button ion-button block color="primary" (click)="scanQR()">Scan Code ကို</button>\n\n  <button ion-button block color="danger" (click)="deleteproduct(product)">ဖျက်ပါ</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\singleproduct\singleproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], SingleProductPage);
    return SingleProductPage;
}());

//# sourceMappingURL=singleproduct.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
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
    function SummaryHomePage(navCtrl, navParams, sp, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
    }
    SummaryHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SummaryHomePage');
        this.getTransac();
    };
    SummaryHomePage.prototype.getTransac = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getTransactions().then(function (val) {
                _this.listtransac = JSON.parse(val);
                console.log(_this.listtransac);
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    SummaryHomePage.prototype.getDateTime = function (datetime) {
        //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
        var temp = new Date(datetime);
        var temp1 = temp;
        var t = temp.getDate() + "/" + temp.getMonth() + "/" + temp.getFullYear() + " " + temp.getHours() + ":" + temp.getMinutes();
        return (t);
    };
    SummaryHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\summary-home\summary-home.html"*/'<!--\n\n  Generated template for the SummaryHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title> ငွေပေးငွေယူအကျဉ်းချုပ် </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n<!-- \n\n  <ion-content padding>\n\n    <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n      <ion-item>\n\n        <ion-label>Select Category</ion-label>\n\n        <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n            <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n        </ion-select>\n\n      </ion-item>\n\n     -->\n\n      <ion-list inset  *ngFor="let transac of listtransac?.reverse()">\n\n\n\n        \n\n\n\n          <ion-card>\n\n              <ion-grid line>\n\n                  <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n                    <ion-col col-10 style="color: grey; font-size: 10px;"> {{getDateTime(transac.datetime)}} </ion-col>\n\n                    <ion-col col-2 style="text-align: center "><ion-icon name="cash" style="color: green"></ion-icon> </ion-col>\n\n                  </ion-row>\n\n                  <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n                    <ion-col><h2><b>စုစုပေါင်း: {{transac.totalsum}}</b></h2></ion-col>\n\n                  </ion-row>\n\n\n\n                  <ion-list *ngFor="let item of transac.itemslist">\n\n                      <ion-item>\n\n                          <ion-row  style="background-color: #f0f0f0">\n\n                              <ion-col col-8 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                                {{item.name}}\n\n                              </ion-col>\n\n                              <ion-col col-2 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                                  {{item.price}}\n\n                              </ion-col>\n\n                              <ion-col col-2 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                                  {{item.qty}}\n\n                              </ion-col>\n\n                   \n\n                            </ion-row>\n\n                      </ion-item>\n\n                  </ion-list>  \n\n               \n\n              </ion-grid>\n\n            </ion-card>   \n\n        </ion-list>\n\n      \n\n    \n\n      \n\n    \n\n    \n\n    \n\n    \n\n    </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\summary-home\summary-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SummaryHomePage);
    return SummaryHomePage;
}());

//# sourceMappingURL=summary-home.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
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
        this.login = [];
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
        var _this = this;
        console.log("Hey" + this.tempcat);
        this.storage.get('categories').then(function (valNullcat) {
            _this.storage.get('products').then(function (valNullprod) {
                _this.storage.get('transactions').then(function (valNulltransac) {
                    console.log("b4set");
                    console.log(JSON.stringify(_this.tempcat));
                    console.log(JSON.stringify(_this.tempprod));
                    console.log(JSON.stringify(_this.temptransac));
                    _this.storage.set('categories', "[]").then(function () { _this.storage.set('categories', JSON.stringify(_this.tempcat)); });
                    _this.storage.set('products', "[]").then(function () { _this.storage.set('products', JSON.stringify(_this.tempprod)); });
                    _this.storage.set('transactions', "[]").then(function () { _this.storage.set('transactions', JSON.stringify(_this.temptransac)); });
                });
            });
        });
    };
    StorageProvider.prototype.setMem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tempprod, tempcat, temptransac, uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                            .then(function (querySnapshot) {
                                            querySnapshot.forEach(function (doc) {
                                                uid = doc.id;
                                                var usdat = doc.data();
                                                console.log(doc.data());
                                                tempprod = usdat.products;
                                                temptransac = usdat.transactions;
                                                tempcat = usdat.categories;
                                                console.log("superin");
                                                console.log(JSON.stringify(tempcat));
                                                console.log(JSON.stringify(tempprod));
                                                console.log(JSON.stringify(temptransac));
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
                                        console.log("setglobal");
                                        console.log(JSON.stringify(tempcat));
                                        console.log(JSON.stringify(tempprod));
                                        console.log(JSON.stringify(temptransac));
                                        this.saveinMem();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, (this.uid != null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
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
    StorageProvider.prototype.backupStorageLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var uid, parseprod, parsetransac, parsecat;
            return __generator(this, function (_a) {
                this.storage.ready().then(function () {
                    _this.storage.get('products').then(function (val) {
                        parseprod = JSON.parse(val);
                        _this.storage.get('transactions').then(function (val) {
                            parsetransac = JSON.parse(val);
                            _this.storage.get('categories').then(function (val) {
                                parsecat = JSON.parse(val);
                                var snapshot = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                    .then(function (querySnapshot) {
                                    querySnapshot.forEach(function (doc) {
                                        uid = doc.id;
                                        console.log(uid);
                                        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(uid).update({
                                            "products": parseprod,
                                            "transactions": parsetransac,
                                            "categories": parsecat,
                                        }).then(function () { }).catch(function (err) {
                                            console.log(err);
                                        });
                                    });
                                })
                                    .catch(function (error) {
                                    console.log("Error getting documents: ", error);
                                });
                            }).catch(function (err) {
                                alert("lol  " + err);
                            });
                        }).catch(function (err) {
                            alert("lmao!");
                        });
                    }).catch(function (err) {
                        alert("dickk");
                    });
                });
                return [2 /*return*/];
            });
        });
    };
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
                console.log(val);
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
    StorageProvider.prototype.getCategories = function () {
        return this.storage.get('categories');
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
    StorageProvider.prototype.storageReady = function () {
        return this.storage.ready();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */])
    ], StorageProvider.prototype, "nav", void 0);
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-product-category/add-product-category.module": [
		174
	],
	"../pages/all-transaction/all-transaction.module": [
		178
	],
	"../pages/calculator/calculator.module": [
		181
	],
	"../pages/coach-businesstips/coach-businesstips.module": [
		179
	],
	"../pages/coach-coach/coach-coach.module": [
		180
	],
	"../pages/coach-goals/coach-goals.module": [
		183
	],
	"../pages/coach-home/coach-home.module": [
		184
	],
	"../pages/contact-us/contact-us.module": [
		185
	],
	"../pages/expense-transaction/expense-transaction.module": [
		187
	],
	"../pages/expenses-home/expenses-home.module": [
		186
	],
	"../pages/income-transaction/income-transaction.module": [
		189
	],
	"../pages/login/login.module": [
		191
	],
	"../pages/product-list/product-list.module": [
		194
	],
	"../pages/sign-up/sign-up.module": [
		193
	],
	"../pages/summary-home/summary-home.module": [
		195
	],
	"../pages/transaction-home/transaction-home.module": [
		196
	],
	"../pages/transaction-product/transaction-product.module": [
		197
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductCategoryPageModule", function() { return AddProductCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_category__ = __webpack_require__(88);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product_category__["a" /* AddProductCategoryPage */]),
            ],
        })
    ], AddProductCategoryPageModule);
    return AddProductCategoryPageModule;
}());

//# sourceMappingURL=add-product-category.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionPageModule", function() { return AllTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_transaction__ = __webpack_require__(89);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_transaction__["a" /* AllTransactionPage */]),
            ],
        })
    ], AllTransactionPageModule);
    return AllTransactionPageModule;
}());

//# sourceMappingURL=all-transaction.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachBusinesstipsPageModule", function() { return CoachBusinesstipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_businesstips__ = __webpack_require__(90);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_businesstips__["a" /* CoachBusinesstipsPage */]),
            ],
        })
    ], CoachBusinesstipsPageModule);
    return CoachBusinesstipsPageModule;
}());

//# sourceMappingURL=coach-businesstips.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachCoachPageModule", function() { return CoachCoachPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_coach__ = __webpack_require__(91);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_coach__["a" /* CoachCoachPage */]),
            ],
        })
    ], CoachCoachPageModule);
    return CoachCoachPageModule;
}());

//# sourceMappingURL=coach-coach.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalculatorPageModule = /** @class */ (function () {
    function CalculatorPageModule() {
    }
    CalculatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calculator__["a" /* CalculatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calculator__["a" /* CalculatorPage */]),
            ],
        })
    ], CalculatorPageModule);
    return CalculatorPageModule;
}());

//# sourceMappingURL=calculator.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalculatorPage = /** @class */ (function () {
    function CalculatorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.result = "";
    }
    CalculatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalculatorPage');
    };
    CalculatorPage.prototype.ngOnInit = function () {
    };
    CalculatorPage.prototype.btnClicked = function (btn) {
        console.log('CalculatorPage::btnClicked = ' + btn);
        if (btn == "C") {
            this.result = "";
        }
        else if (btn == "=") {
            this.result = eval(this.result);
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
            this.result += btn;
        }
    };
    CalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculator',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\calculator\calculator.html"*/'<!--\n\n  Generated template for the CalculatorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>calculator-page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n\n\n -->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n\n\n    <ion-buttons slot="start">\n\n    </ion-buttons>\n\n    <ion-title>Calculator</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="calculator">\n\n    <div class="header">\n\n      <div class="window"></div>\n\n      <div class="input"><span>\n\n          <ion-input type="text" placeholder="0" name="display"\n\n                     [(ngModel)]="result">\n\n          </ion-input>\n\n        </span></div>\n\n    </div>\n\n    <div class="keys">\n\n      <div class="row">\n\n        <div class="number">\n\n          <span (click)="btnClicked(\'7\')">7</span>\n\n          <span (click)="btnClicked(\'8\')">8</span>\n\n          <span (click)="btnClicked(\'9\')">9</span>\n\n        </div>\n\n        <div class="symbol">\n\n          <span (click)="btnClicked(\'*\')">×</span>\n\n          \n\n      </div>\n\n      </div>\n\n\n\n      <div class="row">\n\n        <div class="number">\n\n          <span (click)="btnClicked(\'4\')">4</span>\n\n          <span (click)="btnClicked(\'5\')">5</span>\n\n          <span (click)="btnClicked(\'6\')">6</span>\n\n        </div>\n\n\n\n        <div class="symbol">\n\n        <span (click)="btnClicked(\'+\')">+</span>\n\n        <span (click)="btnClicked(\'-\')">-</span></div>\n\n      </div>\n\n\n\n      <div class="row">\n\n        <div class="number">\n\n          <span (click)="btnClicked(\'1\')">1</span>\n\n          <span (click)="btnClicked(\'2\')">2</span>\n\n          <span (click)="btnClicked(\'3\')">3</span>\n\n        </div>\n\n\n\n        <div class="symbol">\n\n            <span (click)="btnClicked(\'/\')">÷</span>\n\n          <span (click)="btnClicked(\'squareroot\')">√x</span>\n\n        </div>\n\n\n\n        \n\n      </div>\n\n\n\n      \n\n      <div class="row">\n\n        <div class="number">\n\n          <span class=dull (click)="btnClicked(\'C\')">C</span>\n\n          <span (click)="btnClicked(\'0\')">0</span>\n\n          <span (click)="btnClicked(\'-\')">-</span>\n\n\n\n\n\n          \n\n        </div>\n\n               \n\n        <div class="symbol action">\n\n            <span (click)="btnClicked(\'=\')">=</span>\n\n        </div>\n\n      \n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\calculator\calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CalculatorPage);
    return CalculatorPage;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachGoalsPageModule", function() { return CoachGoalsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_goals__ = __webpack_require__(92);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_goals__["a" /* CoachGoalsPage */]),
            ],
        })
    ], CoachGoalsPageModule);
    return CoachGoalsPageModule;
}());

//# sourceMappingURL=coach-goals.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachHomePageModule", function() { return CoachHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_home__ = __webpack_require__(93);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coach_home__["a" /* CoachHomePage */]),
            ],
        })
    ], CoachHomePageModule);
    return CoachHomePageModule;
}());

//# sourceMappingURL=coach-home.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(55);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
            ],
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesHomePageModule", function() { return ExpensesHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expenses_home__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expenses_home__["a" /* ExpensesHomePage */]),
            ],
        })
    ], ExpensesHomePageModule);
    return ExpensesHomePageModule;
}());

//# sourceMappingURL=expenses-home.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseTransactionPageModule", function() { return ExpenseTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_transaction__ = __webpack_require__(188);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense_transaction__["a" /* ExpenseTransactionPage */]),
            ],
        })
    ], ExpenseTransactionPageModule);
    return ExpenseTransactionPageModule;
}());

//# sourceMappingURL=expense-transaction.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function ExpenseTransactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExpenseTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpenseTransactionPage');
    };
    ExpenseTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expense-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\expense-transaction\expense-transaction.html"*/'<!--\n\n  Generated template for the ExpenseTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n Product List\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\expense-transaction\expense-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ExpenseTransactionPage);
    return ExpenseTransactionPage;
}());

//# sourceMappingURL=expense-transaction.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTransactionPageModule", function() { return IncomeTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_transaction__ = __webpack_require__(95);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__income_transaction__["a" /* IncomeTransactionPage */]),
            ],
        })
    ], IncomeTransactionPageModule);
    return IncomeTransactionPageModule;
}());

//# sourceMappingURL=income-transaction.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(97);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(98);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(56);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
            ],
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryHomePageModule", function() { return SummaryHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_home__ = __webpack_require__(102);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary_home__["a" /* SummaryHomePage */]),
            ],
        })
    ], SummaryHomePageModule);
    return SummaryHomePageModule;
}());

//# sourceMappingURL=summary-home.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHomePageModule", function() { return TransactionHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_home__ = __webpack_require__(47);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_home__["a" /* TransactionHomePage */]),
            ],
        })
    ], TransactionHomePageModule);
    return TransactionHomePageModule;
}());

//# sourceMappingURL=transaction-home.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionProductPageModule", function() { return TransactionProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_product__ = __webpack_require__(99);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_product__["a" /* TransactionProductPage */]),
            ],
        })
    ], TransactionProductPageModule);
    return TransactionProductPageModule;
}());

//# sourceMappingURL=transaction-product.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_list_product_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_product_category_add_product_category__ = __webpack_require__(88);
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
    function DashboardPage(navCtrl, barcodeScanner, alertCtrl, sp, getset, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.sp = sp;
        this.getset = getset;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.ViewList = __WEBPACK_IMPORTED_MODULE_8__product_list_product_list__["a" /* ProductListPage */];
        this.AddProd = __WEBPACK_IMPORTED_MODULE_2__addproduct_addproduct__["a" /* AddProductPage */];
        this.AddCat = __WEBPACK_IMPORTED_MODULE_9__add_product_category_add_product_category__["a" /* AddProductCategoryPage */];
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
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
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
        this.toastCtrl.create({
            message: "အွန်လိုင်းအရန်သင့်သိမ်းဆည်းပြီးပါပြီ",
            duration: 2000
        }).present();
    };
    DashboardPage.prototype.cashbtn = function () {
        this.toastCtrl.create({
            message: "ငွေလက်ကျန်: " + this.userdata.cash_balance,
            duration: 3000
        }).present();
    };
    DashboardPage.prototype.qrscan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.sp.searchProduct(barcodeData.text).then(function (val) {
                if (val[0] != null) {
                    var toast = _this.toastCtrl.create({
                        message: "Found Product " + val[0].name,
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
                    var toast = _this.toastCtrl.create({
                        message: "ကုန်ပစ္စည်းမရှိပါ!!!",
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
    DashboardPage.prototype.showproduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
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
                                var toast = _this.toastCtrl.create({
                                    message: "Found Product " + val[0].name,
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
                                var toast = _this.toastCtrl.create({
                                    message: "ကုန်ပစ္စည်းမရှိပါ!!!",
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
        var toast = this.toastCtrl.create({
            message: "POS reset to Zero",
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */])
    ], DashboardPage.prototype, "tabRef", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>ထုတ်ကုန်</ion-title>\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()"><ion-icon name="cloud-upload" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()"><ion-icon name="logo-usd" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n  \n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="ViewList" tabTitle="ထုတ်ကုန်များစာရင်း" tabIcon="list-box"></ion-tab>\n\n        <ion-tab [root]="AddProd" tabTitle="ထုတ်ကုန်ထည့်ပါ" tabIcon="pricetag"></ion-tab>\n\n        <ion-tab [root]="AddCat" tabTitle="အမျိုးအစား" tabIcon="albums"></ion-tab>\n\n  \n\n    \n\n       </ion-tabs>\n\n\n\n<!-- <ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Total</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{total}} USD</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>Items</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{count}} Pcs</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label>VAT</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{vat}} USD</ion-label>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="primary" (click)="manual()">Manual Entry</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="primary" (click)="qrscan()">Sales QR Scan</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="secondary" (click)="addproduct()">Add Products</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="secondary" (click)="showproduct()">Show Products</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button round block color="secondary" (click)="reset()">Reset</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n -->\n\n\n\n\n\n  \n\n\n\n\n\n<!-- \n\n  <ion-tabs tabsPlacement="top">\n\n    <ion-tab [root]="ListRoot" tabTitle="List" tabIcon="chat"></ion-tab>\n\n    <ion-tab [root]="AddRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n\n   </ion-tabs> -->\n\n<!-- \n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-title>Track💰2Make💰</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer> -->\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function AddProductPage(navCtrl, barcodeScanner, navParams, sp, toastCtrl, events, camera) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.camera = camera;
        this.prodCode = "";
        this.prodName = "";
        this.prodPrice = null;
        this.prodCost = null;
        this.prodCat = "";
        this.newprodCat = "";
        this.image = "";
        this.temp = "na";
        this.produrl = "";
        this.prodCode = this.navParams.get("code");
        this.getUserData();
    }
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductCategoryPage');
        this.getCategories();
    };
    AddProductPage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ud, uu, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    uu = doc.id;
                                    ud = doc.data();
                                    //this.userdata=doc.data();       
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        this.uid = uu;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
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
            allowEdit: true,
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
                    var toast = _this.toastCtrl.create({
                        message: 'ပြီးပြီ',
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
    AddProductPage.prototype.addProdPic = function () {
    };
    AddProductPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            //this.prodCode = barcodeData.text;
            //this.navCtrl.setRoot(AddProductPage,{code: barcodeData.text})
            _this.prodCode = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AddProductPage.prototype.addproduct = function () {
        var _this = this;
        if (this.newprodCat != "") {
            this.addCategory();
            this.prodCat = this.newprodCat;
        }
        if (this.image == "") {
            this.toastCtrl.create({
                message: "ပစ္စည်းဖန်တီးလျက်ရှိသည်။ ကျေးဇူးပြုပြီးခဏစောင့်ပါ။",
                duration: 2000,
            });
            var data_2 = {
                "code": this.prodCode,
                "name": this.prodName,
                "price": this.prodPrice,
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
                    var toast = _this.toastCtrl.create({
                        message: 'ပြီးပြီ',
                        duration: 3000
                    });
                    _this.prodCode = "";
                    _this.prodName = "";
                    _this.prodPrice = 0;
                    _this.prodCat = "";
                    _this.prodCost = 0;
                    _this.produrl = "";
                    _this.currstock = 0;
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
            this.toastCtrl.create({
                message: "ပစ္စည်းဖန်တီးလျက်ရှိသည်။ ကျေးဇူးပြုပြီးခဏစောင့်ပါ။",
                duration: 2000,
            });
            this.upload_new(this.prodName).then(function () {
                var data = {
                    "code": _this.prodCode,
                    "name": _this.prodName,
                    "price": _this.prodPrice,
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
                        var toast = _this.toastCtrl.create({
                            message: 'ပြီးပြီ',
                            duration: 3000
                        });
                        _this.prodCode = "";
                        _this.prodName = "";
                        _this.prodPrice = 0;
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
    };
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\addproduct\addproduct.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Add Product</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <b>အချက်အလက်ထည့်ပါ:</b>\n\n    \n\n    </ion-item>\n\n  \n\n  <ion-list inset>\n\n      <!-- <button ion-button full color="dark" (click)="getProdPic()">Upload Picture</button> -->\n\n      <ion-item>\n\n          <button ion-button (click)="launchCamera()">Take Picture</button>\n\n          <img *ngIf="image!=null" [src]="image" style="width: 100px;">  \n\n      </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>ထုတ်ကုန်ကုဒ်:</ion-label>\n\n      <ion-input type="text" [(ngModel)]=\'prodCode\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>နာမည်:</ion-label>\n\n      <ion-input type="text" [(ngModel)]=\'prodName\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>ရောင်းစျေး:</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'prodPrice\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>ကုန်ကျစရိတ်: </ion-label>\n\n        <ion-input type="number" [(ngModel)]=\'prodCost\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>လက်ရှိစတော့ရှယ်ယာ: </ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'currstock\'></ion-input>\n\n  </ion-item>\n\n    <!-- OPTIONAL EXPIRY/Shelf Life in time -->\n\n\n\n    <ion-item>\n\n\n\n        <ion-label>အမျိုးအစားကိုရွေးပါ</ion-label>\n\n        <ion-select multiple="false" [(ngModel)]=\'prodCat\'>\n\n\n\n            <!-- <ion-option>New</ion-option> -->\n\n            <ion-option>New</ion-option>\n\n            <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>\n\n          \n\n      </ion-select>\n\n\n\n      <!-- <ion-label>Select Category</ion-label>\n\n      <ion-select multiple="false" [(ngModel)]=\'prodCat\'>\n\n            <ion-option>New</ion-option>\n\n            <ion-option>Snacks</ion-option>\n\n            <ion-option>Drinks</ion-option>\n\n            <ion-option>Noodles</ion-option>\n\n      </ion-select> -->\n\n    </ion-item>\n\n\n\n    \n\n\n\n\n\n        <ion-item *ngIf="prodCat==\'New\'">\n\n          <ion-label >အမျိုးအစားအသစ်ထည့်ပါ: </ion-label>\n\n          <ion-input type="text" placeholder="Enter Category Here"  [(ngModel)]=\'newprodCat\'></ion-input>\n\n        </ion-item>\n\n        \n\n  \n\n    <!-- <ion-item>\n\n      \n\n        <ion-label>Category</ion-label>\n\n        <ion-input type="text" [(ngModel)]=\'prodCat\'></ion-input>\n\n        \n\n      </ion-item> -->\n\n    \n\n  \n\n  </ion-list>\n\n  <button ion-button block color="primary" (click)="addproduct()"  color="dark">ထုတ်ကုန်ထည့်ပါ</button>\n\n  <button ion-button block color="primary" (click)="scanQR()"  color="dark">ကုဒ် scan ကို</button>\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\addproduct\addproduct.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, sp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.ionViewDidLoad();
    }
    ListPage.prototype.ionViewDidLoad = function () {
        this.getProducts();
    };
    ListPage.prototype.backBtn = function () {
        //Hide back btn if src is tab
        this.navCtrl.pop();
    };
    ListPage.prototype.getProducts = function () {
        var _this = this;
        this.sp.storageReady().then(function () {
            _this.sp.getProducts().then(function (val) {
                //alert(val);
                _this.listProducts = JSON.parse(val);
            }).catch(function (err) {
                alert("Error: " + err);
            });
        });
    };
    ListPage.prototype.singleProduct = function (data) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__["a" /* SingleProductPage */], { 'data': data });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\list\list.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Product List</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let product of listProducts">\n\n      <h2>{{product.name}}</h2>\n\n      <p>Price: {{product.price}} USD</p>\n\n      <button ion-button clear item-end (click)="singleProduct(product)">View</button>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button clear item-end (click)="backBtn()">Back</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 242:
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_transaction_home_transaction_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_all_transaction_all_transaction__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_expense_transaction_expense_transaction__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_income_transaction_income_transaction__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_calculator_calculator__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_summary_home_summary_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_coach_home_coach_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_coach_goals_coach_goals__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_coach_coach_coach_coach__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_coach_businesstips_coach_businesstips__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_contact_us_contact_us__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_transaction_product_transaction_product__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_product_list_product_list__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_add_product_category_add_product_category__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_expenses_home_expenses_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_add_product_category_add_product_category_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_all_transaction_all_transaction_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_calculator_calculator_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_coach_businesstips_coach_businesstips_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_coach_home_coach_home_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_coach_goals_coach_goals_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_coach_coach_coach_coach_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_contact_us_contact_us_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_login_login_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_sign_up_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_transaction_home_transaction_home_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_expense_transaction_expense_transaction_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_income_transaction_income_transaction_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_summary_home_summary_home_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_transaction_product_transaction_product_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_product_list_product_list_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_expenses_home_expenses_home_module__ = __webpack_require__(186);
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
__WEBPACK_IMPORTED_MODULE_18_firebase__["initializeApp"](config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                //CalculatorPage,
                //CoachBusinesstipsPage,
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-product-category/add-product-category.module#AddProductCategoryPageModule', name: 'AddProductCategoryPage', segment: 'add-product-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-transaction/all-transaction.module#AllTransactionPageModule', name: 'AllTransactionPage', segment: 'all-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-businesstips/coach-businesstips.module#CoachBusinesstipsPageModule', name: 'CoachBusinesstipsPage', segment: 'coach-businesstips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-coach/coach-coach.module#CoachCoachPageModule', name: 'CoachCoachPage', segment: 'coach-coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculator/calculator.module#CalculatorPageModule', name: 'CalculatorPage', segment: 'calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-goals/coach-goals.module#CoachGoalsPageModule', name: 'CoachGoalsPage', segment: 'coach-goals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach-home/coach-home.module#CoachHomePageModule', name: 'CoachHomePage', segment: 'coach-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expenses-home/expenses-home.module#ExpensesHomePageModule', name: 'ExpensesHomePage', segment: 'expenses-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense-transaction/expense-transaction.module#ExpenseTransactionPageModule', name: 'ExpenseTransactionPage', segment: 'expense-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income-transaction/income-transaction.module#IncomeTransactionPageModule', name: 'IncomeTransactionPage', segment: 'income-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary-home/summary-home.module#SummaryHomePageModule', name: 'SummaryHomePage', segment: 'summary-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-home/transaction-home.module#TransactionHomePageModule', name: 'TransactionHomePage', segment: 'transaction-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-product/transaction-product.module#TransactionProductPageModule', name: 'TransactionProductPage', segment: 'transaction-product', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34__pages_add_product_category_add_product_category_module__["AddProductCategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_all_transaction_all_transaction_module__["AllTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_calculator_calculator_module__["CalculatorPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_coach_businesstips_coach_businesstips_module__["CoachBusinesstipsPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_coach_home_coach_home_module__["CoachHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_coach_goals_coach_goals_module__["CoachGoalsPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_coach_coach_coach_coach_module__["CoachCoachPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_contact_us_contact_us_module__["ContactUsPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_sign_up_module__["SignUpPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_transaction_home_transaction_home_module__["TransactionHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_expense_transaction_expense_transaction_module__["ExpenseTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_income_transaction_income_transaction_module__["IncomeTransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_summary_home_summary_home_module__["SummaryHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_transaction_product_transaction_product_module__["TransactionProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_product_list_product_list_module__["ProductListPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_expenses_home_expenses_home_module__["ExpensesHomePageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_addproduct_addproduct__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_singleproduct_singleproduct__["a" /* SingleProductPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_expense_transaction_expense_transaction__["a" /* ExpenseTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_income_transaction_income_transaction__["a" /* IncomeTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_all_transaction_all_transaction__["a" /* AllTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coach_home_coach_home__["a" /* CoachHomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_summary_home_summary_home__["a" /* SummaryHomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_coach_goals_coach_goals__["a" /* CoachGoalsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_coach_coach_coach_coach__["a" /* CoachCoachPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_coach_businesstips_coach_businesstips__["a" /* CoachBusinesstipsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_transaction_product_transaction_product__["a" /* TransactionProductPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_add_product_category_add_product_category__["a" /* AddProductCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_expenses_home_expenses_home__["a" /* ExpensesHomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_15__providers_gettersetter_gettersetter__["a" /* GettersetterProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_summary_home_summary_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_coach_home_coach_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_expenses_home_expenses_home__ = __webpack_require__(94);
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
    function MyApp(platform, statusBar, splashScreen, sp, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'ဝင်ငွေ', component: __WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */] },
            { title: 'ထုတ်ကုန်များ', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'စစရိတ်', component: __WEBPACK_IMPORTED_MODULE_12__pages_expenses_home_expenses_home__["a" /* ExpensesHomePage */] },
            { title: 'စီးပွားရေး', component: __WEBPACK_IMPORTED_MODULE_8__pages_summary_home_summary_home__["a" /* SummaryHomePage */] },
            { title: 'ဆရာ', component: __WEBPACK_IMPORTED_MODULE_9__pages_coach_home_coach_home__["a" /* CoachHomePage */] },
            { title: 'ကူညီပါ', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__["a" /* ContactUsPage */] },
        ];
    }
    MyApp.prototype.logout = function () {
        //this.sp.backupStorageLogout().then();
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut().then(function () {
            _this.toastCtrl.create({
                message: "ဆိုင်းအောက်",
                duration: 3000
            }).present();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MyApp.prototype.ngAfterViewInit = function () {
        console.log("yolo1");
        //this.nav.setRoot(LoginPage);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    console.log(user); // User is signed in.
                    this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_transaction_home_transaction_home__["a" /* TransactionHomePage */]);
                }
                else {
                    // No user is signed in.
                    //this.nav.setRoot(LoginPage);
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>မီနူး</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()" >\n\n        ဒီအကောင့်မှထွက်ပါ\n\n      </button>\n\n      \n\n       \n\n      \n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_product_transaction_product__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(14);
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
    //@ViewChild('transactionTabs') tabRef: Tabs;
    function TransactionHomePage(navCtrl, navParams, toastCtrl, sp, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.sp = sp;
        this.events = events;
        this.AllTransactions = __WEBPACK_IMPORTED_MODULE_3__all_transaction_all_transaction__["a" /* AllTransactionPage */];
        this.IncomeTransactions = __WEBPACK_IMPORTED_MODULE_4__income_transaction_income_transaction__["a" /* IncomeTransactionPage */];
        //ExpenseTransactions = ExpenseTransactionPage;
        this.ExpenseTransactions = __WEBPACK_IMPORTED_MODULE_5__transaction_product_transaction_product__["a" /* TransactionProductPage */];
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
    TransactionHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionHomePage');
    };
    TransactionHomePage.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionHomePage.prototype.openCalc = function () {
        //this.navCtrl.push(CalculatorPage);
        this.tabRef.select(3);
    };
    TransactionHomePage.prototype.uploadbtn = function () {
        this.sp.backupStorage();
        this.toastCtrl.create({
            message: "အွန်လိုင်းအရန်သင့်သိမ်းဆည်းပြီးပါပြီ",
            duration: 2000
        }).present();
    };
    TransactionHomePage.prototype.cashbtn = function () {
        this.toastCtrl.create({
            message: "ငွေလက်ကျန်: " + this.userdata.cash_balance,
            duration: 3000
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */])
    ], TransactionHomePage.prototype, "tabRef", void 0);
    TransactionHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\transaction-home\transaction-home.html"*/'<!--\n\n  Generated template for the TransactionHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>ဝင်ငွေ</ion-title>\n\n    <ion-buttons end><button ion-button (click)="uploadbtn()"><ion-icon name="cloud-upload" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n    <ion-buttons end><button ion-button (click)="cashbtn()"><ion-icon name="logo-usd" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n \n\n  \n\n<ion-content padding>\n\n  \n\n  <ion-tabs tabsPlacement="top" #myTabs>\n\n    <ion-tab [root]="AllTransactions" tabTitle="ဂဏန်းတွက်စက်" tabIcon="calculator"></ion-tab>\n\n    <ion-tab [root]="ExpenseTransactions" tabTitle="ထုတ်ကုန်များ" tabIcon="apps"></ion-tab>\n\n    <ion-tab [root]="IncomeTransactions" tabTitle="ငွေလက်ခံဖြတ်ပိုင်း" tabIcon="list-box"></ion-tab>\n\n\n\n   </ion-tabs>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\transaction-home\transaction-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], TransactionHomePage);
    return TransactionHomePage;
}());

//# sourceMappingURL=transaction-home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function ContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\contact-us\contact-us.html"*/'<!--\n\n  Generated template for the ContactUsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Contact Us</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n<h1>OPEN လေ့ကျင့်ပေးသူနှင့်ဆက်သွယ်မည်</h1>\n\nဒီဆော့ဖ်ဝဲလ်အသုံးပြုနည်းနှင့်ပတ်သက်ပြီး မေးမြန်းလိုပါသလား။\n\nစီးပွားရေးဆိုင်ရာအချက်အလက်များအကြောင်း ဆွေးနွေးလိုပါသလား။\n\nOPEN လေ့ကျင့်ပေးသူနှင့်ဆက်သွယ်ပါ။\n\n‌‌မေးမြန်းစရာရှိပါက Whatsapp/ Messanger တို့မှစာတိုပေးပို့ပြီး မေးမြန်းနိုင်ပြီး ကျွန်တော်တို့မှမြန်နိုင်သမျှမြန်မြန် ဖြေကြားပေးပါမည်။\n\n<br><br>\n\n\n\n<ion-grid>\n\n\n\n  \n\n\n\n\n\n    <ion-row  style="background-color: #f0f0f0">\n\n        <ion-col col-12>\n\n\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n              +65 8871648904\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <button ion-button full style="text-align: center ; background-color: indigo; color: palevioletred; text-transform:lowercase">\n\n              sdhnt@connect.hku.hk\n\n            </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__ = __webpack_require__(100);
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
    function ProductListPage(navCtrl, navParams, sp, events, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__singleproduct_singleproduct__["a" /* SingleProductPage */], { 'data': data });
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
            selector: 'page-product-list',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\product-list\product-list.html"*/'<!--\n\n  Generated template for the ProductListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>product-list</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n<ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n  <ion-item>\n\n    <ion-label>အမျိုးအစားကိုရွေးပါ</ion-label>\n\n    <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n        <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n<!-- <ion-card>\n\n    <ion-grid line>\n\n      <ion-row>\n\n      <ion-col col-2>\n\n        <ion-row>\n\n          <ion-avatar>\n\n              <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n\n            </ion-avatar>\n\n          </ion-row>\n\n      </ion-col>\n\n      <ion-col col-10>\n\n          <ion-row>\n\n              <ion-col col-7>\n\n                Shan Noodle\n\n              </ion-col>\n\n              <ion-col col-3>\n\n                568 - N/A?\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                    <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                    <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 MMK </ion-col>\n\n              <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6></ion-col>\n\n              <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n\n            </ion-row>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-card>  -->\n\n\n\n\n\n\n\n  <ion-list inset  *ngFor="let product of filteredList">\n\n    \n\n      <ion-card>\n\n          <ion-grid> \n\n            <ion-row>\n\n            <ion-col col-2>\n\n              <ion-row> \n\n                <ion-avatar>\n\n                    <img [src]="product.url">\n\n                  </ion-avatar>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        {{product.name}}\n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                      Stock: {{product.stock_qty}}\n\n                    </ion-col>\n\n                      <ion-col col-1>\n\n                          <ion-icon name="arrow-dropup-circle" style=" color: green" (click)="swapUp(product.code)"></ion-icon>\n\n                      </ion-col>\n\n                      <ion-col col-1>\n\n                          <ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="swapDown(product.code)"></ion-icon>\n\n                      </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-6 style="color: grey; font-size: 10px;"> စျေးနှုန်း {{product.price}} MMK </ion-col>\n\n                    <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> အမျိုးအစား: {{product.cat}} </ion-col>\n\n                  </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">ကြည့်ရှု / တည်းဖြတ်</button> </ion-col>\n\n          </ion-row>\n\n          </ion-grid>\n\n        </ion-card> \n\n     \n\n    </ion-list>\n\n  \n\n\n\n  \n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
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
    function AddProductCategoryPage(navCtrl, navParams, sp, toastCtrl) {
        this.navCtrl = navCtrl;
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
                    var toast = _this.toastCtrl.create({
                        message: 'ပြီးပြီ',
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
                var toast = _this.toastCtrl.create({
                    message: 'ပြီးပြီ',
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
            selector: 'page-add-product-category',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\add-product-category\add-product-category.html"*/'<!--\n\n  Generated template for the AddProductCategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>add-product-category</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n          <ion-item>\n\n              <ion-input type="text" placeholder="Enter Category Here"  [(ngModel)]=\'newprodCat\'></ion-input>\n\n          </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n          <button ion-button full color="dark" (click)="addCategory()"> အမျိုးအစားထည့်ပါ</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n   \n\n    \n\n\n\n  <ion-item>\n\n     <h2> <b>အမျိုးအစားကိုကြည့် / ဖယ်ရှားပါ: </b> </h2>\n\n  </ion-item>\n\n \n\n  <ion-list  *ngFor="let element of listCat">\n\n\n\n      <ion-item>\n\n          {{element.name}}\n\n          <ion-icon item-end name="close-circle" (click)="delCat(element)" color="danger"></ion-icon> \n\n      </ion-item>\n\n  </ion-list>\n\n \n\n\n\n\n\n  \n\n\n\n \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\add-product-category\add-product-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddProductCategoryPage);
    return AddProductCategoryPage;
}());

//# sourceMappingURL=add-product-category.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
    function AllTransactionPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
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
            language: "",
            owner: "",
            owner_name: "",
            ph_no: "",
            businesstype: "",
            taxrate: 0.0,
            discount: 0.0,
        };
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
        this.getUserData();
    }
    AllTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllTransactionPage');
        console.log("Size of array: " + this.itemsprice.length);
        if (this.itemsprice.length > 0) {
            this.showSampleRec = false;
            this.flag_mode = 1;
        }
    };
    AllTransactionPage.prototype.ngOnInit = function () {
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
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();       
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
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
                var temp;
                answ.forEach(function (element, index) {
                    if (element.includes("*")) {
                        answ[index] = element.substring(0, element.indexOf("*"));
                        _this.itemsprice.push(answ[index]);
                        temp = parseInt(element.substring(element.indexOf("*") + 1));
                        console.log(element.substring(element.indexOf("*") + 1));
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
            selector: 'page-all-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\all-transaction\all-transaction.html"*/'<!--\n\n  Generated template for the AllTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding>\n\n    <!-- <ion-fab bottom right>\n\n        <button ion-fab color="primary" item-right><ion-icon name="calculator"></ion-icon></button>\n\n      </ion-fab> -->\n\n      <ion-card *ngIf="showSampleRec==false">\n\n        ကျေးဇူးပြုပြီးပစ္စည်းအတွက်ပမာဏကိုမြှောက်ပါ၊ ရှိပြီးသားငွေတောင်းခံလွှာကိုထည့်ရန်တူညီသောစာလုံးကိုနှိပ်ပါ။\n\n\n\n        အလွတ်ပစ္စည်းပေါင်းများစွာကိုထည့်သွင်းလိုပါက * qty တစ်ခုချင်းစီကိုရိုက်ထည့်ပြီးနောက်တစ်ခုကိုရိုက်ထည့်ရန် + သင်္ကေတကိုနှိပ်ပါ\n\n      </ion-card>\n\n      \n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-12 col-md-6>\n\n\n\n          <div class="calculator">\n\n            <div class="header">\n\n              <div class="window"></div>\n\n              <div class="input">\n\n                <ion-row>\n\n                  <ion-input type="text" placeholder="0" name="display" [(ngModel)]="result">\n\n                  </ion-input>\n\n                  <ion-icon name="backspace" (click)="btnClicked(\'b\')"></ion-icon>\n\n                  \n\n                </ion-row> \n\n               \n\n                    \n\n                \n\n              </div>\n\n             \n\n              \n\n            </div>\n\n            <div class="keys">\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'7\')">7</span>\n\n                  <span (click)="btnClicked(\'8\')">8</span>\n\n                  <span (click)="btnClicked(\'9\')">9</span>\n\n                </div>\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'*\')">×</span>\n\n\n\n                </div>\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'4\')">4</span>\n\n                  <span (click)="btnClicked(\'5\')">5</span>\n\n                  <span (click)="btnClicked(\'6\')">6</span>\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'+\')">+</span>\n\n           </div>\n\n              </div>\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span (click)="btnClicked(\'1\')">1</span>\n\n                  <span (click)="btnClicked(\'2\')">2</span>\n\n                  <span (click)="btnClicked(\'3\')">3</span>\n\n                </div>\n\n\n\n                <div class="symbol">\n\n                  <span (click)="btnClicked(\'/\')">÷</span>\n\n                  <span (click)="btnClicked(\'squareroot\')">√x</span>\n\n                </div>\n\n\n\n\n\n              </div>\n\n\n\n\n\n              <div class="row">\n\n                <div class="number">\n\n                  <span class=dull (click)="btnClicked(\'C\')">C</span>\n\n                  <span (click)="btnClicked(\'0\')">0</span>\n\n                  <span (click)="btnClicked(\'-\')">-</span>\n\n\n\n\n\n\n\n                </div>\n\n\n\n                <div class="symbol action">\n\n                  <span (click)="btnClicked(\'=\')">=</span>\n\n                </div>\n\n\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n    \n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-6>\n\n\n\n\n\n        <ion-card *ngIf="showSampleRec==true"> \n\n\n\n                <ion-grid>\n\n          \n\n                  <ion-row> <ion-col style="text-align: center; padding-top: 5px;">{{userdata.business_name}} </ion-col> </ion-row>\n\n          \n\n                  <ion-row>\n\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> {{userdata.business_address}}</ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                      <ion-col col-12 style="color: grey; font-size: 10px; text-align: center"> Ph: {{userdata.ph_no}}</ion-col>\n\n                  </ion-row>\n\n          \n\n                  <ion-row style="padding-top: 5px;">\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><b>Sl</b></ion-col>\n\n                      <ion-col col-4 style="color: black; font-size: 10px; text-align: center"><b>ပစ္စည်း</b></ion-col>\n\n                      <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>စျေးနှုန်း</b></ion-col>\n\n                      <ion-col col-2 style="color: black; font-size: 10px; text-align: center"><b>ပမာဏ</b></ion-col>\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n\n                      <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n\n                  </ion-row>\n\n          \n\n                 \n\n          \n\n                  <ion-list *ngFor="let item of itemsprice; let i = index" no-lines>\n\n          \n\n              \n\n                    <ion-row>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center">{{i+1}}.</ion-col>\n\n                        <ion-col col-4 style="color: black; font-size: 10px; text-align: center">\n\n                         Item {{i+1}}</ion-col>   \n\n                        <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{item}}</ion-col>\n\n                        <ion-col col-2 style="color: black; font-size: 10px; text-align: center">{{itemsqty[i]}}</ion-col>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n\n                        <ion-col col-1 style="color: black; font-size: 10px; text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n\n                    </ion-row>\n\n                \n\n          \n\n                  </ion-list>\n\n          \n\n                  <ion-row padding>\n\n                      <ion-col col-1></ion-col>  \n\n                    <ion-col col-4 style="text-align: center;font-size: 10px;"><b>စုစုပေါင်း</b> </ion-col>\n\n                      <ion-col col-2 style="text-align: center;font-size: 10px;"><b>{{lastsum}}</b> </ion-col>\n\n                      <ion-col col-5></ion-col>\n\n                    </ion-row>\n\n          \n\n          \n\n                   \n\n          \n\n          \n\n                </ion-grid>\n\n          \n\n          \n\n          \n\n\n\n        </ion-card>\n\n\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <!-- Dynamically Generate All transactions from backend - see feed from prev -->\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n            <button ion-button (click)="createRec()" full style="background-color: #222">ငွေလက်ခံဖြတ်ပိုင်းကိုဖန်တီးပါ</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n   \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\all-transaction\all-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AllTransactionPage);
    return AllTransactionPage;
}());

//# sourceMappingURL=all-transaction.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachBusinesstipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function CoachBusinesstipsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachBusinesstipsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachBusinesstipsPage');
    };
    CoachBusinesstipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-businesstips',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-businesstips\coach-businesstips.html"*/'<!--\n\n  Generated template for the CoachBusinesstipsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-businesstips</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <ion-card>\n\n    <ion-grid line>\n\n        <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n          <ion-col col-10 style="color: grey; font-size: 10px;"> Wed, 10th October 2018 </ion-col>\n\n          <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n        </ion-row>\n\n        <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n          <ion-col><h2><b>You\'ve got a winner!</b></h2></ion-col>\n\n        </ion-row>\n\n\n\n      <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n        Your item XYZ sells 50% higher than any other product in its category. Item ABC sells only 2% the volume of XYZ. You should stock more XYZ and less ABC.\n\n      </ion-row>\n\n      <ion-row  style="background-color: #f0f0f0">\n\n        <ion-col col-6 style="text-align: center ">\n\n            <ion-icon name="thumbs-up" ></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-6 style="text-align: center ">\n\n            <ion-icon name="thumbs-down"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card> \n\n\n\n  \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-businesstips\coach-businesstips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachBusinesstipsPage);
    return CoachBusinesstipsPage;
}());

//# sourceMappingURL=coach-businesstips.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachCoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function CoachCoachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachCoachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachCoachPage');
    };
    CoachCoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-coach',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-coach\coach-coach.html"*/'<!--\n\n  Generated template for the CoachCoachPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-coach</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Want to look professional? Provide your customers a receipt with their purchases.\n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-up" ></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card> \n\n\n\n      \n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>EC Coach Tip</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Let your customers know that you are listening. Tell them, "I hear what you are saying" and ask "Tell me more about that". This way you indicate that you are paying attention without agreeing or disagreeing with them.\n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-up" ></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 style="text-align: center ">\n\n                <ion-icon name="thumbs-down"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-coach\coach-coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachCoachPage);
    return CoachCoachPage;
}());

//# sourceMappingURL=coach-coach.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachGoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function CoachGoalsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachGoalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachGoalsPage');
    };
    CoachGoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach-goals',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-goals\coach-goals.html"*/'<!--\n\n  Generated template for the CoachGoalsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>coach-goals</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n      \n\n    <ion-card>\n\n        <ion-grid line>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n              <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n              <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n              <ion-col><h2><b>Goal: Bulk Transaction</b></h2></ion-col>\n\n            </ion-row>\n\n    \n\n          <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n              Record 15 transactions and get the ability to add miltiple products in one transaction entry!              \n\n          </ion-row>\n\n          <ion-row  style="background-color: #f0f0f0">\n\n            <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                <b>Go</b>\n\n            </ion-col>\n\n \n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card> \n\n\n\n      <ion-card>\n\n          <ion-grid line>\n\n              <ion-row style="padding-left: 10px; padding-bottom: 5px; ">\n\n                <ion-col col-10 style="color: grey; font-size: 10px;"> Thus, 12th October 2018 </ion-col>\n\n                <ion-col col-2 style="text-align: center "><ion-icon name="bulb" style="color: green"></ion-icon> </ion-col>\n\n              </ion-row>\n\n              <ion-row style="padding-left: 10px; padding-bottom: 10px;">\n\n                <ion-col><h2><b>Goal: Record Discounts</b></h2></ion-col>\n\n              </ion-row>\n\n      \n\n            <ion-row style="padding-left: 15px; padding-bottom: 10px;">\n\n                Record 25 transactions to add discounts to sales & expenses              \n\n            </ion-row>\n\n            <ion-row  style="background-color: #f0f0f0">\n\n              <ion-col col-12 style="text-align: center ; background-color: indigo; color: palevioletred;">\n\n                  <b>Go</b>\n\n              </ion-col>\n\n   \n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-goals\coach-goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachGoalsPage);
    return CoachGoalsPage;
}());

//# sourceMappingURL=coach-goals.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_goals_coach_goals__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coach_coach_coach_coach__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coach_businesstips_coach_businesstips__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us__ = __webpack_require__(55);
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
    function CoachHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
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
            selector: 'page-coach-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-home\coach-home.html"*/'<!--\n\n  Generated template for the CoachHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>ဆရာ</ion-title>\n\n      <ion-buttons end><button ion-button (click)="contactpg()" style="align-self: right; background-color:#222"><ion-icon name="contact" style="align-self: center; color: white;" padding></ion-icon></button></ion-buttons>\n\n          </ion-navbar>\n\n  </ion-header>\n\n   \n\n\n\n<ion-content padding>\n\n\n\n    <ion-tabs tabsPlacement="top" #myTabs>\n\n        <ion-tab [root]="Goals" tabTitle="ပန်းတိုင်များ" tabIcon="paper-plane"></ion-tab>\n\n        <ion-tab [root]="Coach" tabTitle="ဆရာ" tabIcon="school"></ion-tab>\n\n        <ion-tab [root]="Tips" tabTitle="စီးပွားရေးသိကောင်းစရာများ" tabIcon="cash"></ion-tab>\n\n        \n\n       </ion-tabs>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\coach-home\coach-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoachHomePage);
    return CoachHomePage;
}());

//# sourceMappingURL=coach-home.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    function ExpensesHomePage(navCtrl, navParams, sp, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.prodName = "";
        this.expirydate = new Date();
        this.currtime = new Date();
        this.listProducts = [];
        this.filteredList = [];
        this.searchterm = "";
        this.selectedCat = [];
        this.totalamt = 0.0;
    }
    ExpensesHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpensesHomePage');
        console.log(this.currtime);
        this.getProducts();
        this.getCategories();
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
            "totalsum": this.prodcost,
            "prodidlist": prodidlist,
            "pnllist": pnllist,
            "datetime": this.currtime,
            "taxrate": 0,
            "discountlist": discountlist,
            "discount": 0,
            "totaldisc": this.prodcost,
            "totalatax": this.prodcost,
        };
        var data1 = {
            "code": this.product.code,
            "name": this.product.name,
            "price": this.product.price,
            "cost": (((parseInt(this.product.cost) * parseInt(this.product.stock_qty)) + (parseInt(this.prodcost))) / (parseInt(this.prodqty) + parseInt(this.product.stock_qty))),
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
            var toast = _this.toastCtrl.create({
                message: 'ပြီးပြီ',
                duration: 3000
            });
            _this.prodqty = null;
            _this.prodcost = null;
            _this.prodName = "";
            _this.expirydate = new Date();
            _this.currtime = new Date();
            _this.searchterm = "";
            _this.selectedCat = [];
            _this.totalamt = 0.0;
            _this.product = null;
            _this.sp.backupStorage();
            toast.present();
        });
        //REFLECT CHANGE ON CASH BALANCE HERE & Reflect change in inventory here as well 
    };
    ExpensesHomePage.prototype.updateCb = function (negtransacsum) {
        return __awaiter(this, void 0, void 0, function () {
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();    
                                    console.log(ud.cash_balance + " " + negtransacsum);
                                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore().collection("users").doc(doc.id).update({ cash_balance: (parseInt(ud.cash_balance) - parseInt(negtransacsum)).toString() });
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
        });
    };
    ExpensesHomePage.prototype.scanQR = function () {
    };
    ExpensesHomePage.prototype.chooseProd = function (product) {
        this.prodName = product.name;
        console.log(this.prodName);
        this.product = product;
    };
    ExpensesHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expenses-home',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\expenses-home\expenses-home.html"*/'<!--\n\n  Generated template for the ExpensesHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title> စရိတ် </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n      <b>Enter Inventory Expenditure Detail:</b> \n\n  </ion-item>\n\n\n\n<ion-list inset>\n\n  \n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-8> \n\n            <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n            <button ion-button block color="primary" (click)="scanQR()"  color="dark">ကုဒ် scan ကို</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-item>\n\n      <ion-label>အမျိုးအစားကိုရွေးပါ</ion-label>\n\n      <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-list inset  *ngFor="let product of filteredList">\n\n  <ion-card>\n\n      <ion-grid> \n\n        <ion-row>\n\n        <ion-col col-2>\n\n          <ion-row> \n\n            <ion-avatar>\n\n                <img [src]="product.url">\n\n              </ion-avatar>\n\n            </ion-row>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    {{product.name}}\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  Stock: {{product.stock_qty}}\n\n                </ion-col>\n\n                </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6 style="color: grey; font-size: 10px;"> စျေးနှုန်း {{product.price}} MMK </ion-col>\n\n                <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> အမျိုးအစား: {{product.cat}} </ion-col>\n\n              </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12> <button ion-button full end color="dark" (click)="chooseProd(product)">Choose</button> </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </ion-card> \n\n \n\n</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer style="border-top-color:black; border-top: 10px;">\n\n  <ion-list>\n\n      <ion-item>\n\n        Prod Name: {{prodName}}\n\n        </ion-item>\n\n    <ion-item>\n\n      <ion-label>Prod qty</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'prodqty\'></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Total Expenditure</ion-label>\n\n        <ion-input type="number" [(ngModel)]=\'prodcost\'></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label>Batch Expiry Date:</ion-label>\n\n      <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]=\'expirydate\'></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n  <button ion-button block color="primary" (click)="addinventoryexpense()"  color="dark">ထုတ်ကုန်ထည့်ပါ</button>\n\n  \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\expenses-home\expenses-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ExpensesHomePage);
    return ExpensesHomePage;
}());

//# sourceMappingURL=expenses-home.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(45);
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
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomeTransactionPage = /** @class */ (function () {
    function IncomeTransactionPage(navCtrl, navParams, events, sp, toastCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.sp = sp;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.taxbtn = 0;
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
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();       
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomeTransactionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IncomeTransactionPage');
        this.getCategories();
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
                    var toast = _this.toastCtrl.create({
                        message: "Found Product " + val[0].name,
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
                    var toast = _this.toastCtrl.create({
                        message: "ကုန်ပစ္စည်းမရှိပါ!!!",
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
    IncomeTransactionPage.prototype.updateCb = function (positivetransacsum) {
        return __awaiter(this, void 0, void 0, function () {
            var ud, snapshot;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection('users').where("owner", "==", __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).get()
                                .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    //console.log(doc.id, " => ", doc.data());
                                    ud = doc.data();
                                    //this.userdata=doc.data();     
                                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("users").doc(doc.id).update({ cash_balance: (parseInt(ud.cash_balance) + positivetransacsum).toString() });
                                });
                            })
                                .catch(function (error) {
                                console.log("Error getting documents: ", error);
                            })];
                    case 1:
                        snapshot = _a.sent();
                        this.userdata = ud;
                        console.log(this.userdata);
                        return [2 /*return*/];
                }
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
                var toast = _this.toastCtrl.create({
                    message: 'ပြီးပြီ',
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
        this.toastCtrl.create({
            message: "ဒီအင်္ဂါရပ်မကြာမီဖွင့်ပါလိမ့်မည်",
            duration: 2000,
        }).present();
    };
    IncomeTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-income-transaction',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\income-transaction\income-transaction.html"*/'<!--\n\n  Generated template for the IncomeTransactionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  {{temp}}\n\n\n\n\n\n    <ion-card >\n\n\n\n      <ion-grid>\n\n\n\n        <ion-row> <ion-col style="text-align: center; padding-top: 5px;"> {{userdata.business_name}}  </ion-col> </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-12 style="color: grey;  text-align: center"> {{userdata.business_address}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12 style="color: grey; text-align: center">  Ph: {{userdata.ph_no}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row style="padding-top: 5px;">\n\n          <ion-col col-1 style="color: black;   text-align: center"><b>Sl</b></ion-col>\n\n          <ion-col col-4 style="color: black;   text-align: left"><b>ပစ္စည်း</b></ion-col>\n\n          <ion-col col-2 style="color: black;   text-align: center"><b>စျေးနှုန်း</b></ion-col>\n\n          <ion-col col-2 style="color: black;   text-align: center"><b>ပမာဏ</b></ion-col>\n\n            <ion-col col-1 style="color: black;   text-align: center"><ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon></ion-col>\n\n            <ion-col col-1 style="color: black;   text-align: center"><ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon></ion-col>\n\n            <ion-col col-1 style="color: black;   text-align: center"><ion-icon name="close" style=" color: red"></ion-icon></ion-col>\n\n        </ion-row>\n\n       \n\n\n\n        <ion-list *ngFor="let item of datastore.itemslist; let i = index" no-lines>\n\n\n\n    \n\n          <ion-row>\n\n              <ion-col col-1 style="color: black; text-align: center;">{{i+1}}.</ion-col>\n\n              <ion-col col-4 style="color: black; text-align: center;">\n\n                <div *ngIf="item.name==\'ထုတ်ကုန်\'; else itemexist">\n\n                  <button ion-button full (click)="addSingleProd(item,i)">ရွေးချယ်ပါ</button>\n\n                </div>\n\n                <ng-template #itemexist>{{item.name}}</ng-template>\n\n              </ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">{{item.price}}</ion-col>\n\n              <ion-col col-2 style="color: black;   text-align: center;">{{item.qty}}</ion-col>\n\n              <ion-col col-1 style="color: black;   text-align: center;"><ion-icon name="arrow-dropup-circle" style=" color: green" (click)="addQty(i)"></ion-icon></ion-col>\n\n              <ion-col col-1 style="color: black;   text-align: center;"><ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="removeQty(i)"></ion-icon></ion-col>\n\n              <ion-col col-1 style="color: black;   text-align: center;"><ion-icon name="close" style=" color: red" (click)="removeItem(i)"></ion-icon></ion-col>\n\n          </ion-row>\n\n          <!-- <ion-row>\n\n          <ion-col col-12 style="text-align: center"><ion-icon name="cut" style=" color: maroon"></ion-icon></ion-col>\n\n          </ion-row> -->\n\n        </ion-list>\n\n        <ion-row padding>\n\n            <ion-col col-1></ion-col>  \n\n          <ion-col col-4 style="text-align: center; font-size: 1.0rem; "><b>စုစုပေါင်း:</b> </ion-col>\n\n            <ion-col col-2 style="text-align: center; ">{{lastsum}} </ion-col>\n\n            <ion-col col-5></ion-col>\n\n          </ion-row>\n\n\n\n\n\n          <ion-row *ngIf="discbtn==0">\n\n              <button ion-button (click)="setDisc()">Add Discount</button>\n\n            </ion-row>\n\n          <ion-row *ngIf="discbtn==1">\n\n            <ion-col col-5>   <ion-label style="font-size: 1.0rem;">Discount Rate %:</ion-label></ion-col>\n\n            <ion-col col-7>\n\n                <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="discount" style="font-size: 1.3rem; background-color: silver ;" (input)="updateRec()" ngDefaultControl>\n\n                  </ion-input>\n\n            </ion-col>       \n\n          </ion-row>\n\n          <ion-row *ngIf="discount!=0">\n\n            <ion-col col-5 style="text-align: left; font-size: 1.0rem; ">လျှော့စျေးပြီးနောက်စုစုပေါင်း: </ion-col>\n\n              <ion-col col-7 style="text-align: left; ">{{lastsumdisc}}</ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="discbtn==1">\n\n                <button ion-button (click)="remDisc()">Remove Discount</button>\n\n              </ion-row>\n\n\n\n\n\n\n\n\n\n            <ion-row *ngIf="taxbtn==0">\n\n              <button ion-button (click)="setTax()">Add Tax</button>\n\n            </ion-row>\n\n\n\n            <ion-row *ngIf="taxbtn==1">\n\n                <ion-col col-5>   <ion-label style="font-size: 1.0rem;">Tax Rate %:</ion-label></ion-col>\n\n                <ion-col col-7>\n\n                    <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="taxrate" style="font-size: 1.3rem; background-color: silver ;" (input)="updateRec()" ngDefaultControl>\n\n                      </ion-input>\n\n                </ion-col>       \n\n              </ion-row>\n\n          <ion-row *ngIf="taxrate!=0">\n\n            <ion-col col-5 style="text-align: left;font-size: 1.0rem; ">အခွန်ပြီးနောက်စုစုပေါင်း:</ion-col>\n\n              <ion-col col-7 style="text-align: left; ">{{lastsumtax}}</ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="taxbtn==1">\n\n                <button ion-button (click)="remTax()">Remove Tax</button>\n\n              </ion-row>\n\n      </ion-grid>\n\n      </ion-card>\n\n  <!-- Dynamically Generate All expense from backend - see feed from prev -->\n\n\n\n  <ion-card padding>\n\n   \n\n          <ion-item>\n\n          <span style="vertical-align: middle; display: inline-block; color: black; font-size: 1.0rem;" item-start>\n\n            ယာယီပစ္စည်းထည့်ပါ\n\n            </span>\n\n             <ion-toggle color="dark" style="vertical-align: middle; display: inline-block" item-end (ionChange)="dispM()"></ion-toggle>\n\n          \n\n        </ion-item>\n\n          \n\n\n\n     \n\n     \n\n       <div *ngIf="displayManual==1;">\n\n     \n\n        <ion-item>\n\n            <ion-label style="font-size: 1.0rem;">နာမည်</ion-label>\n\n            <ion-input type="text" placeholder="ထုတ်ကုန်အမည်ရိုက်ထည့်ပါ" [(ngModel)]="newItemName" ngDefaultControl></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label style="font-size: 1.0rem;">စျေးနှုန်း</ion-label>\n\n              <ion-input  type="number" placeholder="အမျိုးအစားအလိုက်စျေးနှုန်း" [(ngModel)]="newUnitPrice" ngDefaultControl></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label style="font-size: 1.0rem;">ပမာဏ</ion-label>\n\n                <ion-input type="number" placeholder="အရေအတွက်" [(ngModel)]="newUnitQty" ngDefaultControl></ion-input>\n\n              </ion-item>\n\n              <!-- <ion-item>\n\n                  <ion-label style="font-size: 1.0rem;" >Select Category</ion-label>\n\n                  <ion-select multiple="false" [(ngModel)]=\'newItemCat\'>\n\n                      <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n                  </ion-select>\n\n                </ion-item> -->\n\n                <button ion-button style="font-size: 1.0rem;" full (click)="addNewItem()"> ထုတ်ကုန်အသစ်ထည့်ပါ </button>\n\n              </div>\n\n  </ion-card>\n\n  <ion-grid>\n\n      <ion-row>\n\n          <ion-col col-6 style="text-align: center;"> <button ion-button style="font-size: 1.0rem;" (click)="addCalc()"> ဂဏန်းတွက်စက်ကနေထည့်ပါ</button></ion-col>\n\n          <ion-col col-6 style="text-align: center;"> <button ion-button style="font-size: 1.0rem;" (click)="addProdList()"> ထုတ်ကုန်စာရင်းမှထည့်ပါ</button></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n          <ion-col col-12 style="text-align: center;"> <button ion-button style="font-size: 1.0rem;" (click)="qrscan()"> Scan QR Code</button></ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button full color="dark" (click)="saveRec()"> <ion-icon name="checkmark"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button full color="dark"> <ion-icon name="print"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n              <button ion-button full color="dark" (click)="cancelRec()">  <ion-icon name="close"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\income-transaction\income-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], IncomeTransactionPage);
    return IncomeTransactionPage;
}());

//# sourceMappingURL=income-transaction.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(192);
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
    function LoginPage(navCtrl, navParams, toastCtrl, facebook, sp, alertCtrl) {
        //IF email+password or FB exists then login auto
        //this.loginWithFB();
        //Get email&passfromstorageandcalllogin
        //onlogin-saveemailandpassto"userdat"&tologinarray in memory
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.sp = sp;
        this.alertCtrl = alertCtrl;
        this.email = "";
        this.password = "";
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user); // User is signed in.
                alertCtrl.create({
                    subTitle: "ကြိုဆိုပါတယ် " + user.displayName,
                    buttons: [
                        {
                            text: 'Okay!',
                            role: 'cancel',
                        }
                    ],
                }).present();
                sp.clearMem();
                sp.setMem();
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
            }
            else {
                // No user is signed in.
                console.log("no-wenis");
            }
        });
    }
    LoginPage.prototype.ngAfterViewInit = function () {
        console.log("yolo");
    };
    LoginPage.prototype.facebookLogin = function () {
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { console.log(error); });
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
                _this.alertCtrl.create({
                    subTitle: "ကြိုဆိုပါတယ် " + temp.additionalUserInfo.profile['first_name'],
                    buttons: [
                        {
                            text: 'Okay!',
                            role: 'cancel',
                        }
                    ],
                }).present();
                _this.sp.clearMem();
                _this.sp.setMem();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
            })
                .catch(function (err) {
                console.log("Firebase error", err);
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        // this.facebook.login(['email'])
        // .then((res: FacebookLoginResponse) => {
        //   console.log('Logged into Facebook!', res);
        //   firebase.auth().signInWithCredential(
        //     firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
        //     .then( success => {
        //       console.log("Firebase success" , success);
        //       resolve(true);
        //     })
        //     .catch(err => {
        //       console.log("Firebase error", err);
        //       reject(false);
        //     });
        // })
        // .catch(err => {
        //   console.log('Error logging into Facebook',err);
        //   reject(false);
        // });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.Auth.Persistence.LOCAL).then(function () {
            console.log("yeahh");
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(_this.email, _this.password)
                .then(function (user) {
                _this.alertCtrl.create({
                    subTitle: "ကြိုဆိုပါတယ် " + user.user.displayName,
                    buttons: [
                        {
                            text: 'Okay!',
                            role: 'cancel',
                        }
                    ],
                }).present();
                _this.sp.clearMem();
                _this.sp.setMem();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__transaction_home_transaction_home__["a" /* TransactionHomePage */]);
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
        this.toastCtrl.create({
            message: "အင်္ဂါရပ်မကြာမီဖွင့်ပါလိမ့်မည်",
            duration: 2000,
        }).present();
    };
    LoginPage.prototype.gotoSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\login\login.html"*/'\n\n<ion-content padding>\n\n\n\n\n\n\n\n  <button ion-button block clear color="light" class="nametop"><b>Open</b></button> \n\n\n\n\n\n\n\n  <ion-grid style="width: 75%;">\n\n\n\n    \n\n    <ion-row class="row-style">\n\n      \n\n      <ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n\n      <ion-input type="email" placeholder="အီးမေးလ်" [(ngModel)]="email" ></ion-input>\n\n    </ion-row>\n\n    <ion-row class="row-style">\n\n      <ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n\n      <ion-input type="password" placeholder="စကားဝှက်" [(ngModel)]="password" ></ion-input>\n\n    </ion-row>\n\n    <ion-row>\n\n      <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">ဆိုင်းအင်လုပ်ခြင်း</button>\n\n    </ion-row>\n\n    <div class="btn_container">\n\n      <button ion-button full (click)="loginWithFB();">Facebook ဖြင့်ဝင်ပါ</button>\n\n  </div>\n\n  \n\n  </ion-grid>\n\n\n\n\n\n  <button ion-button block clear color="light" style="margin-top: 10px;" (click)="gotoSignUp()">အကောင့်မရှိဘူးလား</button> \n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_home_transaction_home__ = __webpack_require__(47);
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
    function SignUpPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
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
    SignUpPage.prototype.signup = function () {
        var _this = this;
        this.toastCtrl.create({
            message: "သင်၏ပရိုဖိုင်းကိုဖန်တီးနေစဉ်ခဏစောင့်ပါ...",
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
                }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log(doc);
                        this.alertCtrl.create({
                            title: "Account Created",
                            message: "သင်၏အကောင့်ကိုအောင်မြင်စွာဖန်တီးလိုက်ပြီ.",
                            buttons: [{
                                    text: "OK",
                                    handler: function () {
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
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n  <ion-navbar transparent>\n\n   <!--  <ion-title>\n\n     AdMonkey\n\n    </ion-title> -->\n\n \n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	\n\n		<button ion-button block clear color="light" class="nametop"><b>Open</b></button> \n\n\n\n<ion-grid style="width: 75%;">\n\n\n\n	<div *ngIf="nextbtn!=1">\n\n	<ion-row class="row-style1" justify-content-center align-items-center style="height: 100%">စီးပွားရေးလုပ်ငန်းတစ်ခုမှတ်ပုံတင်ပါ</ion-row>\n\n	<ion-row class="row-style"> \n\n		<ion-icon name="person" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="text" placeholder="နာမည်" [(ngModel)]="name"></ion-input>\n\n	</ion-row>\n\n	<ion-row class="row-style">\n\n		<ion-icon name="mail" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="email" placeholder="အီးမေးလ်" [(ngModel)]="email"> </ion-input>\n\n	</ion-row>\n\n	<ion-row class="row-style">\n\n		<ion-icon name="key" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="password" placeholder="စကားဝှက်"  [(ngModel)]="password"></ion-input>\n\n	</ion-row>\n\n	<ion-row class="row-style">\n\n		<ion-icon name="home" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="text" placeholder="စီးပွားရေးအမည် "  [(ngModel)]="businessname"></ion-input>\n\n	</ion-row>\n\n	<ion-row class="row-style">\n\n		<ion-icon name="pin" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="text" placeholder="စီးပွားရေးလိပ်စာ"  [(ngModel)]="businessaddress"></ion-input>\n\n	</ion-row>\n\n	<ion-row class="row-style">\n\n		<ion-icon name="call" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="text" placeholder="ဖုန်းနံပါတ်"  [(ngModel)]="phno"></ion-input>\n\n	</ion-row>\n\n<button ion-button block round outline color="light" style="margin-top: 10px;" (click)="nextPg()">နောက်တစ်ခု</button>\n\n</div>\n\n<div *ngIf="nextbtn==1">\n\n		<button ion-button block round outline color="light" style="margin-bottom: 10px;" (click)="prevPg()">ယခင်</button>\n\n	<ion-row class="row-style">\n\n			<ion-icon name="globe" color="semi-light" class="icon"></ion-icon>\n\n			<ion-label>လုပ်ငန်းအမျိုးအစား</ion-label>\n\n			<ion-select [(ngModel)]="businesstype">\n\n					<ion-option>Pharmaceuticals</ion-option>\n\n					<ion-option>Tailor</ion-option>\n\n					<ion-option>KTV</ion-option>\n\n					<ion-option>Fashion</ion-option>\n\n					<ion-option>Retail</ion-option>\n\n					<ion-option>Wholesale</ion-option>\n\n					<ion-option>Food</ion-option>\n\n			</ion-select>\n\n			<!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n\n   </ion-row>\n\n\n\n\n\n	<ion-row class="row-style">\n\n		<ion-icon name="chatboxes" color="semi-light" class="icon"></ion-icon>\n\n		<ion-label>ဘာသာစကား</ion-label>\n\n		<ion-select [(ngModel)]="language">\n\n				<ion-option>English</ion-option>\n\n				<ion-option>Filipino</ion-option>\n\n				<ion-option>ဗမာ</ion-option>\n\n		</ion-select>\n\n		<!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n\n	</ion-row>\n\n\n\n	<ion-row class="row-style">\n\n			<ion-icon name="logo-usd" color="semi-light" class="icon"></ion-icon>\n\n			<ion-label>ငွေကြေး</ion-label>\n\n			<ion-select [(ngModel)]="currency">\n\n					<ion-option>USD</ion-option>\n\n					<ion-option>PHP</ion-option>\n\n					<ion-option>MMK</ion-option>\n\n			</ion-select>\n\n			<!-- <ion-input type="text" placeholder="Language"  [(ngModel)]="businessname"></ion-input> -->\n\n		</ion-row>\n\n\n\n\n\n	<ion-row class="row-style">\n\n		<ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n\n		<ion-input type="number" placeholder="ငွေလက်ကျန်"  [(ngModel)]="cb"></ion-input>\n\n	</ion-row>\n\n\n\n	<ion-row class="row-style">\n\n			<ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n\n			<ion-input type="number" placeholder="လျှော့စျေးနှုန်း %"  [(ngModel)]="discount"></ion-input>\n\n		</ion-row>\n\n\n\n		<ion-row class="row-style">\n\n				<ion-icon name="cash" color="semi-light" class="icon"></ion-icon>\n\n				<ion-input type="number" placeholder="အခွန်နှုန်း %"  [(ngModel)]="taxrate"></ion-input>\n\n			</ion-row>\n\n	<ion-row>\n\n		<button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signup()">ဆိုင်းအပ်</button>\n\n	</ion-row>\n\n</div>\n\n</ion-grid>\n\n<button ion-button block clear color="light" style="margin-top: 10px;" (click)="goBack()">အကောင့်ရှိပြီးသားလား? လော့ဂ်အင်</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
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
    function TransactionProductPage(navCtrl, navParams, sp, events, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sp = sp;
        this.events = events;
        this.toastCtrl = toastCtrl;
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
            });
            //console.log(this.listProducts)
        });
        this.events.subscribe('addSingleProd:created', function (data, index, fulldat) {
            console.log("ENTERED!");
            console.log("Received 0 " + data + index);
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
    // singleProduct(data){
    //   this.navCtrl.setRoot(SingleProductPage, {'data': data});
    // }
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
            }
        });
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
            selector: 'page-transaction-product',template:/*ion-inline-start:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\transaction-product\transaction-product.html"*/'<!--\n\n  Generated template for the TransactionProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>transaction-product</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <ion-searchbar showCancelButton="always" [(ngModel)]="searchterm" (ionChange)="filteredProduct()"></ion-searchbar>\n\n  \n\n  <!-- <ion-item>\n\n      <ion-label>Categories</ion-label>\n\n      <ion-select [(ngModel)]="cat" multiple="true">\n\n        <ion-option>Noodle</ion-option>\n\n        <ion-option>Snack</ion-option>\n\n        <ion-option>Main Course</ion-option>\n\n        <ion-option>Dessert</ion-option>\n\n        <ion-option>Drinks</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n  \n\n    <ion-item>\n\n      <ion-label>အမျိုးအစားရွေးပါ</ion-label>\n\n      <ion-select multiple="true" [(ngModel)]=\'selectedCat\' (ionChange)="filteredProduct()">\n\n          <ion-option *ngFor="let element of listCat" value="{{element.name}}">{{element.name}}</ion-option>    \n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n  \n\n  <!-- <ion-card>\n\n      <ion-grid line>\n\n        <ion-row>\n\n        <ion-col col-2>\n\n          <ion-row>\n\n            <ion-avatar>\n\n                <img src="https://i0.wp.com/mainlymiles.com/wp-content/uploads/2019/04/Yew-Mee.jpg?w=256&h=256&crop=1&ssl=1">\n\n              </ion-avatar>\n\n            </ion-row>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                  Shan Noodle\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  568 - N/A?\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                      <ion-icon name="arrow-dropup-circle" style=" color: green"></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                      <ion-icon name="arrow-dropdown-circle" style=" color: red"></ion-icon>\n\n                  </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6 style="color: grey; font-size: 10px;"> Price 3500 MMK </ion-col>\n\n                <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> Category: Noodle </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6></ion-col>\n\n                <ion-col col-6> <button ion-button full end color="dark">View/Edit</button> </ion-col>\n\n              </ion-row>\n\n  \n\n        </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n    </ion-card>  -->\n\n  \n\n  \n\n  \n\n    <ion-list inset  *ngFor="let product of filteredList; let i=index">\n\n      \n\n        <ion-card>\n\n            <ion-grid> \n\n              <ion-row>\n\n              <ion-col col-2>\n\n                <ion-row> \n\n                  <ion-avatar>\n\n                      <img [src]="product.url">\n\n                    </ion-avatar>\n\n                  </ion-row>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                  <ion-row>\n\n                      <ion-col col-6>\n\n                          {{product.name}} \n\n                      </ion-col>\n\n                      <ion-col col-2>\n\n                        {{product.qty}}\n\n                      </ion-col>\n\n                        <ion-col col-2>\n\n                            <ion-icon name="arrow-dropup-circle" style=" color: green" (click)="addUp(i)"></ion-icon>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <ion-icon name="arrow-dropdown-circle" style=" color: red" (click)="addDown(i)"></ion-icon>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                      <ion-col col-6 style="color: grey; font-size: 10px;"> စျေးနှုန်း {{product.price}} MMK </ion-col>\n\n                      <ion-col col-6 style="color: grey; font-size: 10px; text-align: end;"> အမျိုးအစား: {{product.cat}} </ion-col>\n\n                    </ion-row>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="event1==true">\n\n              <ion-col col-12> <button ion-button full end color="dark" (click)="singleProduct(product)">ထည့်ပါ</button> </ion-col>\n\n            </ion-row>\n\n            </ion-grid>\n\n          </ion-card> \n\n       \n\n      </ion-list>\n\n    \n\n  \n\n    \n\n  \n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  \n\n  \n\n<ion-footer>\n\n\n\n    <ion-grid>\n\n      <ion-row *ngIf="event1==false">\n\n        <ion-col>\n\n            <button ion-button (click)="createRec()" full style="background-color: #222">လက်ခံဖြတ်ပိုင်းဖန်တီးပါ</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="event1==true">\n\n        <ion-col>\n\n            <button ion-button (click)="reset()" full style="background-color: #222">ပြန်လည်စတင်</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n   \n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\supre\Downloads\Coding\easycredit\open-fintech\burmesepos\src\pages\transaction-product\transaction-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TransactionProductPage);
    return TransactionProductPage;
}());

//# sourceMappingURL=transaction-product.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.js.map