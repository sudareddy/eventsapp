webpackJsonp([28],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_vendor_admin_vendor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_componentService__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intro_intro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_auth__ = __webpack_require__(142);
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
 * Generated class for the SignIn page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignIn = (function () {
    function SignIn(navCtrl, compService, events, menuCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.compService = compService;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.authProvider = authProvider;
        this.menuCtrl.swipeEnable(false);
    }
    SignIn.prototype.addPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__admin_vendor_admin_vendor__["a" /* AdminVendorPage */]);
    };
    SignIn.prototype.goTo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPassword */]);
    };
    SignIn.prototype.login = function () {
        //console.log(this.username+" : "+this.password);
        //this.authProvider.login(this.username, this.password).then(success => {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        //});
    };
    SignIn.prototype.ngOnInit = function () {
    };
    SignIn.prototype.goBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__intro_intro__["a" /* Intro */]);
        //this.navCtrl.popToRoot();
    };
    SignIn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignIn page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n        <ion-navbar color="primary">\n                <ion-buttons left>\n                        <button ion-button (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon></button>\n                    </ion-buttons>\n            <ion-title text-center>Sign In-----------</ion-title>\n            \n        </ion-navbar>\n      \n    </ion-header>\n\n\n<ion-content  class="bg-trans LoginCon BodyCon">\n\n	<form novalidate (ngSubmit)="login()">\n		<div  class="bg-white">\n			<ion-list padding class="m-t-30 padding-bottom0">\n                <ion-item text-center>\n                   \n                </ion-item>\n				<ion-item>\n					<ion-icon name="ios-person-outline" item-start></ion-icon>\n					<ion-input type="number" placeholder="Mobile Number" value=""  [(ngModel)]="username" name="username" class="removeBorder"></ion-input>\n				</ion-item>\n\n				<ion-item>\n					<ion-icon name="ios-lock-outline" item-start></ion-icon>\n					<ion-input type="password" placeholder="Password"  [(ngModel)]="password" name="password"></ion-input>\n				</ion-item>\n\n                <div  padding text-center>\n                    <button ion-button  color="secondary">\n                        <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n                        Sign In\n                    </button>\n                </div>\n			</ion-list>\n		</div>\n	</form>\n    <!--<div text-center>\n        <button ion-button clear color="danger"  text-capitalize (click)="goTo()">Forgot Password?</button>\n    </div>-->\n\n    <ion-toolbar class="bg-white">\n        <div text-center>\n            <span class="fnt-black">Don\'t have an account?</span>\n            <a  color="primary" (click)="addPage()"  text-capitalize>Sign Up</a>\n        </div>\n    </ion-toolbar>\n\n</ion-content>\n\n<!--<ion-footer class="m-b-25">-->\n\n<!--</ion-footer>-->\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__service_componentService__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_7__service_auth__["a" /* AuthProvider */]])
    ], SignIn);
    return SignIn;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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
 * Created by admin on 12/26/2017.
 */



var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
    }
    HttpClient.prototype.post = function (url, data) {
        console.log(url);
        var token_header = window.localStorage.getItem('session');
        console.log();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'x-access-token': token_header });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options).map(function (response) {
            console.log('returning from interceptor');
            return response;
        });
    };
    HttpClient.prototype.put = function (url, data) {
        console.log(url);
        var token_header = window.localStorage.getItem('session');
        console.log();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'x-access-token': token_header });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(url, data, options).map(function (response) {
            console.log('returning from interceptor');
            return response;
        });
    };
    HttpClient.prototype.get = function (url) {
        var token_header = window.localStorage.getItem('session');
        console.log('from local storage');
        console.log(token_header);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'x-access-token': token_header });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(url);
        return this.http.get(url, options).map(function (Response) {
            console.log('returning from interceptor');
            return Response;
        });
    };
    HttpClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], HttpClient);
    return HttpClient;
}());

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MY_CONFIG_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var AppConfig = {
    // Url: "http://192.168.1.16:8000/",
    //Url: "http://ec2-34-212-87-251.us-west-2.compute.amazonaws.com:8002/",
    Url: "http://localhost:8000/",
};
var MY_CONFIG_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('config');
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.login = function (name, pw) {
        var _this = this;
        console.log("name : " + name + " : pw : " + pw);
        return new Promise(function (resolve, reject) {
            if (name === '123' && pw === '123') {
                console.log("hi in if");
                _this.currentUser = {
                    name: name,
                    role: 0
                };
                resolve(true);
            }
            else if (name === '456' && pw === '465') {
                console.log("hi in else");
                _this.currentUser = {
                    name: name,
                    role: 1
                };
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.currentUser != null;
    };
    AuthProvider.prototype.isAdmin = function () {
        console.log("hi in line no : 42");
        if (this.currentUser != undefined) {
            console.log("hi in line no 44");
            return this.currentUser.role === 0;
        }
    };
    AuthProvider.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the CustomerprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerprofilePage = (function () {
    function CustomerprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomerprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerprofilePage');
    };
    CustomerprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customerprofile',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\customerprofile\customerprofile.html"*/'<!--\n  Generated template for the CustomerprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title class="text-center">My Customer Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\customerprofile\customerprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CustomerprofilePage);
    return CustomerprofilePage;
}());

//# sourceMappingURL=customerprofile.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbouteventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details_event_details__ = __webpack_require__(89);
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
 * Generated class for the AbouteventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbouteventPage = (function () {
    function AbouteventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpData = {};
    }
    AbouteventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbouteventPage');
    };
    AbouteventPage.prototype.goBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__event_details_event_details__["a" /* EventDetailsPage */]);
        //this.navCtrl.popToRoot();
    };
    AbouteventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutevent',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\aboutevent\aboutevent.html"*/'<!--\n  Generated template for the AbouteventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon></button>\n      </ion-buttons>\n    <ion-title text-center>About Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="event-list no-btm-border">\n        <div class="event-img">\n           <img src="img/event-banner.jpg">  \n           <div class="shadow">&nbsp;</div>\n        </div>\n        \n        <div class="event-title top100">\n          <p>WEDDING AND BRIDAL</p>\n        </div>\n\n        <div class="profile">\n          \n            <ion-list>\n\n              <ion-item>\n\n                  <h4 class="txt-pink"><span class="grey-txt font-size13 padng-rgt5">Hosted by</span>Clara Winston</h4>\n\n              </ion-item>\n\n           </ion-list>\n\n        </div>  \n\n        <div class="About-Event" padding>\n          <h4 class="heading-txt">About Event : </h4>\n         \n         <p>\n           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n         </p>\n         </div>\n\n        <div class="event-details">\n          \n          <ion-list>\n\n           \n\n             <ion-item>\n              \n                <ion-icon name="ios-pin-outline" item-left></ion-icon>\n               Address\n                \n            </ion-item>\n             <ion-item>\n                       \n                <ion-item>\n                  <ion-icon name="ios-person-outline" item-start></ion-icon>\n                  <ion-input type="text" placeholder="Enter Time(10.00 AM - 12.00PM)" [(ngModel)]="signUpData.firstname"></ion-input>\n              </ion-item>\n            </ion-item>\n\n             <ion-item>\n              \n              <ion-item>\n                <ion-icon name="ios-person-outline" item-start></ion-icon>\n                <ion-input type="text" placeholder="Enter Attendants" [(ngModel)]="signUpData.firstname"></ion-input>\n            </ion-item>\n\n            </ion-item>\n\n           </ion-list>\n           <div padding text-center>\n            <button ion-button  color="secondary" (click)="signUp(signUpData)">\n            <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n            Submit\n            </button>\n            </div>\n        </div>\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\aboutevent\aboutevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AbouteventPage);
    return AbouteventPage;
}());

//# sourceMappingURL=aboutevent.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogincustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_invite_new_invite__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_componentService__ = __webpack_require__(44);
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
 * Generated class for the LogincustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogincustomerPage = (function () {
    function LogincustomerPage(navCtrl, compService, events, menuCtrl) {
        this.navCtrl = navCtrl;
        this.compService = compService;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.swipeEnable(false);
    }
    LogincustomerPage.prototype.goTo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_invite_new_invite__["a" /* NewInvite */]);
    };
    LogincustomerPage.prototype.login = function (username, password) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LogincustomerPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["Validators"].required]),
            password: new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["Validators"].required])
        });
    };
    LogincustomerPage.prototype.goBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__new_invite_new_invite__["a" /* NewInvite */]);
        //this.navCtrl.popToRoot();
    };
    LogincustomerPage.prototype.addPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__new_invite_new_invite__["a" /* NewInvite */]);
    };
    LogincustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logincustomer',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\logincustomer\logincustomer.html"*/'<!--\n  Generated template for the LogincustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="primary">\n          <ion-buttons left>\n                  <button ion-button (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon></button>\n              </ion-buttons>\n      <ion-title text-center>Login As Customer</ion-title>\n      \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  class="bg-trans LoginCon BodyCon">\n\n	<form novalidate (ngSubmit)="login(user)" [formGroup]="user">\n		<div  class="bg-white">\n			<ion-list padding class="m-t-30 padding-bottom0">\n                <ion-item text-center>\n                   \n                </ion-item>\n				<ion-item>\n					<ion-icon name="ios-person-outline" item-start></ion-icon>\n					<ion-input type="number" placeholder="Mobile Number" value="" formControlName="name" [(ngModel)]="username" class="removeBorder"></ion-input>\n				</ion-item>\n                <ion-item *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched">\n                    <span style="color: red" >Please enter phone no..</span>\n                </ion-item>\n				<ion-item>\n					<ion-icon name="ios-lock-outline" item-start></ion-icon>\n					<ion-input type="password" placeholder="Password" formControlName="password" [(ngModel)]="password"></ion-input>\n				</ion-item>\n                <ion-item *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched">\n                    <span style="color: red" >Please enter Password..</span>\n                </ion-item>\n                <div  padding text-center>\n                    <button ion-button  color="secondary" [disabled]="user.invalid"  >\n                        <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n                        Sign In\n                    </button>\n                </div>\n			</ion-list>\n		</div>\n	</form>\n    <!--<div text-center>\n        <button ion-button clear color="danger"  text-capitalize (click)="goTo()">Forgot Password?</button>\n    </div>-->\n\n    <ion-toolbar class="bg-white">\n        <div text-center>\n            <span class="fnt-black">Don\'t have an account?</span>\n            <a  color="primary" (click)="addPage()"  text-capitalize>Sign Up</a>\n        </div>\n    </ion-toolbar>\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\logincustomer\logincustomer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__service_componentService__["a" /* ComponentService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], LogincustomerPage);
    return LogincustomerPage;
}());

//# sourceMappingURL=logincustomer.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveeventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customerevents_customerevents__ = __webpack_require__(327);
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
 * Generated class for the ActiveeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActiveeventsPage = (function () {
    function ActiveeventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActiveeventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActiveeventsPage');
    };
    ActiveeventsPage.prototype.createEvent = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__customerevents_customerevents__["a" /* CustomereventsPage */]);
    };
    ActiveeventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-activeevents',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\activeevents\activeevents.html"*/'<!--\n  Generated template for the ActiveeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title class="text-center">My Active Events</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div padding text-center>\n    <button ion-button  color="secondary" (click)="createEvent()">\n    <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n    Create new event\n    </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\activeevents\activeevents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ActiveeventsPage);
    return ActiveeventsPage;
}());

//# sourceMappingURL=activeevents.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyeventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the MyeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyeventsPage = (function () {
    function MyeventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
    }
    MyeventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyeventsPage');
    };
    MyeventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myevents',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\myevents\myevents.html"*/'<!--\n  Generated template for the MyeventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title class="text-center">My Events</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list class="m-t-50">\n            <ion-item-divider class="toolbar-title-md">\n                    Event Details\n                  </ion-item-divider>\n        <ion-item> \n            <ion-icon name="ios-person-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Name" [(ngModel)]="event.eventname"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-person-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Title" [(ngModel)]="event.title"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-mail-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Gender" [(ngModel)]="event.gender"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Age Group" [(ngModel)]="event.ageGroup"></ion-input>\n        </ion-item>\n        </ion-list>\n\n  <ion-list>\n    <ion-item-divider class="toolbar-title-md">\n            Event Price\n          </ion-item-divider>\n\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Quantity Start" [(ngModel)]="event.qtystart"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Quantity End" [(ngModel)]="event.qtyend"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-mail-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Unit of Measurment" [(ngModel)]="event.unitmeasur"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-call-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Price" [(ngModel)]="event.price"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Range" [(ngModel)]="event.range"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Start Date" [(ngModel)]="event.startDate"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-mail-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="End Date" [(ngModel)]="event.endDate"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding text-center>\n      <button ion-button color="secondary" (click)="addaccomm(accommData)">\n        <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n        Save\n      </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\myevents\myevents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyeventsPage);
    return MyeventsPage;
}());

//# sourceMappingURL=myevents.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = (function () {
    function MyprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
    }
    MyprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyprofilePage');
    };
    /*goBack(){
      this.navCtrl.goToRoot();
    }*/
    MyprofilePage.prototype.changeListener = function (event) {
        this.file = event.target.files[0];
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\myprofile\myprofile.html"*/'<!--\n  Generated template for the MyprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title class="text-center">My Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list class="m-t-50">\n    <ion-item>\n      <ion-icon name="ios-person-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="Enter Name" [(ngModel)]="profile.name"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-camera-outline" item-start></ion-icon>\n        <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-globe-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="Address 1" [(ngModel)]="profile.address1"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-globe-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="Address 2" [(ngModel)]="profile.address2"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-globe-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="City" [(ngModel)]="profile.city"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-globe-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="State" [(ngModel)]="profile.state"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-globe-outline" item-start></ion-icon>\n      <ion-input type="number" placeholder="Zip Code" [(ngModel)]="profile.zipcode"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-mail-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="Owner Email Id" [(ngModel)]="profile.ownerEmailId"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-mail-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="Primary Contact EmailId" [(ngModel)]="profile.primaryContactEmail"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="ios-mail-outline" item-start></ion-icon>\n      <ion-input type="text" placeholder="Escalation  EmailId" [(ngModel)]="profile.escalationEmailId"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-mail-outline" item-start></ion-icon>\n      <ion-input type="number" placeholder="Notification Email Range" [(ngModel)]="profile.notificationEmailRange"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding text-center>\n    <button ion-button color="secondary" (click)="addaccomm(accommData)">\n      <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n      Save\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MysettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the MysettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MysettingsPage = (function () {
    function MysettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MysettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MysettingsPage');
    };
    MysettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mysettings',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\mysettings\mysettings.html"*/'<!--\n  Generated template for the MysettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mysettings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\mysettings\mysettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MysettingsPage);
    return MysettingsPage;
}());

//# sourceMappingURL=mysettings.js.map

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutevent/aboutevent.module": [
		713,
		27
	],
	"../pages/activeevents/activeevents.module": [
		716,
		26
	],
	"../pages/add-accommodation/add-accommodation.module": [
		715,
		18
	],
	"../pages/add-activities/add-activities.module": [
		714,
		17
	],
	"../pages/add-birthday/add-birthday.module": [
		718,
		16
	],
	"../pages/add-catering/add-catering.module": [
		717,
		15
	],
	"../pages/add-decorators/add-decorators.module": [
		719,
		14
	],
	"../pages/add-gettogethers/add-gettogethers.module": [
		722,
		13
	],
	"../pages/add-givingbirth/add-givingbirth.module": [
		720,
		12
	],
	"../pages/add-hotels/add-hotels.module": [
		721,
		11
	],
	"../pages/add-magicians/add-magicians.module": [
		723,
		10
	],
	"../pages/add-mothersday/add-mothersday.module": [
		726,
		9
	],
	"../pages/add-musician/add-musician.module": [
		724,
		8
	],
	"../pages/add-party/add-party.module": [
		725,
		7
	],
	"../pages/add-retirement/add-retirement.module": [
		727,
		6
	],
	"../pages/add-singers/add-singers.module": [
		728,
		5
	],
	"../pages/add-spa/add-spa.module": [
		729,
		4
	],
	"../pages/add-thanksgiving/add-thanksgiving.module": [
		730,
		3
	],
	"../pages/add-wedding/add-wedding.module": [
		731,
		2
	],
	"../pages/admin-vendor/admin-vendor.module": [
		734,
		25
	],
	"../pages/customerprofile/customerprofile.module": [
		732,
		24
	],
	"../pages/event-details/event-details.module": [
		733,
		23
	],
	"../pages/logincustomer/logincustomer.module": [
		738,
		22
	],
	"../pages/menu/menu.module": [
		735,
		1
	],
	"../pages/myevents/myevents.module": [
		736,
		21
	],
	"../pages/myprofile/myprofile.module": [
		737,
		20
	],
	"../pages/mysettings/mysettings.module": [
		739,
		19
	],
	"../pages/splash/splash.module": [
		740,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interceptor_HttpClient__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PushService = (function () {
    function PushService(http, config) {
        this.http = http;
        this.config = config;
    }
    PushService.prototype.pushSubscription = function (userDetails) {
        return this.http.post(this.config.Url + 'api/push/subscribe', userDetails).map(function (response) {
            return response.json();
        });
    };
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__app_config__["b" /* MY_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Interceptor_HttpClient__["a" /* HttpClient */], Object])
    ], PushService);
    return PushService;
}());

//# sourceMappingURL=pushService.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPassword = (function () {
    function ForgotPassword(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\forgot-password\forgot-password.html"*/'<ion-header no-border>\n  <ion-navbar transparent text-center>\n    <ion-title class="white" text-center>Forgot Password</ion-title>\n      <ion-buttons right>\n        <button ion-button clear></button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="bg-trans InputCon">\n    <div padding class="m-t-35 blue-clr" text-center>\n        <img src="assets/imgs/forgot.gif" class="w-50">\n        <h2 class="fnt-white">Forgot Your Password?</h2>\n        <p class="fnt-white">Enter Your E-mail below to receive your Password Reset Instructions</p>\n        <ion-list padding>\n            <ion-item class="blue-clr color-white">\n                <ion-icon name="ios-mail-outline" item-start class="color-white"></ion-icon>\n                <ion-input type="email" placeholder="E-mail Address" value="" class="color-white"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button color="light">\n            RESET\n        </button>\n\n        \n    </div>\n</ion-content>\n      \n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\forgot-password\forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ForgotPassword);
    return ForgotPassword;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomereventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the CustomereventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomereventsPage = (function () {
    function CustomereventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
    }
    CustomereventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomereventsPage');
    };
    CustomereventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customerevents',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\customerevents\customerevents.html"*/'<!--\n  Generated template for the CustomereventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title class="text-center">My Events</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list class="m-t-50">\n        <ion-item-divider class="toolbar-title-md">\n            Event Details\n          </ion-item-divider>\n        <ion-item> \n            <ion-icon name="ios-person-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Title" [(ngModel)]="event.title"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-person-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Name" [(ngModel)]="event.name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-mail-outline" item-start></ion-icon>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="event.date"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Event Time" [(ngModel)]="event.time"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Address 1" [(ngModel)]="event.address1"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Address 2" [(ngModel)]="event.address2"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Zipcode" [(ngModel)]="event.zipcode"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="state" [(ngModel)]="event.state"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-call-outline" item-start></ion-icon>\n            <ion-input type="text" placeholder="Country" [(ngModel)]="event.country"></ion-input>\n        </ion-item>\n        </ion-list>\n\n  <ion-list>\n    <ion-item-divider class="toolbar-title-md">\n            Event Info\n          </ion-item-divider>\n\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Gender" [(ngModel)]="event.gender"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Age" [(ngModel)]="event.age"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-mail-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Event Size" [(ngModel)]="event.size"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-call-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Adult Count" [(ngModel)]="event.adultcount"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Kids" [(ngModel)]="event.kids"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n      <ion-item-divider class="toolbar-title-md">\n              Event Host Details\n            </ion-item-divider>\n  \n      <ion-item>\n          <ion-icon name="ios-person-outline" item-start></ion-icon>\n          <ion-input type="text" placeholder="First Name" [(ngModel)]="event.firstname"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-icon name="ios-person-outline" item-start></ion-icon>\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="event.lastname"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-icon name="ios-mail-outline" item-start></ion-icon>\n          <ion-input type="text" placeholder="Phone Number" [(ngModel)]="event.phoneno"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-icon name="ios-call-outline" item-start></ion-icon>\n          <ion-input type="text" placeholder="Email Id" [(ngModel)]="event.emailid"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n          <ion-icon name="ios-person-outline" item-start></ion-icon>\n          <ion-input type="text" placeholder="Kids" [(ngModel)]="event.kids"></ion-input>\n      </ion-item>\n      <ion-item>\n            <ion-icon name="ios-person-outline" item-start></ion-icon>\n            <ion-select [(ngModel)]="event.eventReq">\n              <ion-option value="Decoration" selected>Decoration</ion-option>\n              <ion-option value="Kitchen">Kitchen</ion-option>\n            </ion-select>\n          </ion-item>\n    </ion-list>\n\n  <div padding text-center>\n      <button ion-button color="secondary" (click)="addaccomm(accommData)">\n        <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n        Save\n      </button>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\customerevents\customerevents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CustomereventsPage);
    return CustomereventsPage;
}());

//# sourceMappingURL=customerevents.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_customerprofile_customerprofile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_activeevents_activeevents__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_myevents_myevents__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_aboutevent_aboutevent__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_myprofile_myprofile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_service_componentService__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_service_pushService__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_new_invite_new_invite__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sign_in_sign_in__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sign_up_sign_up__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_Interceptor_HttpClient__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_service_app_config__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_service_authService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_img_viewer__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_unique_device_id__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_uid__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_admin_vendor_admin_vendor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic_select_searchable__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_event_details_event_details__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_logincustomer_logincustomer__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_service_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_mysettings_mysettings__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_customerevents_customerevents__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import{GooglePlacesAutocompleteComponentModule} from "ionic2-google-places-autocomplete";







// import {GoogleMaps} from "@ionic-native/google-maps";


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_new_invite_new_invite__["a" /* NewInvite */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sign_in_sign_in__["a" /* SignIn */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sign_up_sign_up__["a" /* SignUp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPassword */],
                __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__["a" /* Intro */],
                __WEBPACK_IMPORTED_MODULE_33__pages_admin_vendor_admin_vendor__["a" /* AdminVendorPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_aboutevent_aboutevent__["a" /* AbouteventPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_myevents_myevents__["a" /* MyeventsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_logincustomer_logincustomer__["a" /* LogincustomerPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_activeevents_activeevents__["a" /* ActiveeventsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_customerprofile_customerprofile__["a" /* CustomerprofilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_mysettings_mysettings__["a" /* MysettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_customerevents_customerevents__["a" /* CustomereventsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutevent/aboutevent.module#AbouteventPageModule', name: 'AbouteventPage', segment: 'aboutevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-activities/add-activities.module#AddActivitiesPageModule', name: 'AddActivitiesPage', segment: 'add-activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-accommodation/add-accommodation.module#AddAccommodationPageModule', name: 'AddAccommodationPage', segment: 'add-accommodation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activeevents/activeevents.module#ActiveeventsPageModule', name: 'ActiveeventsPage', segment: 'activeevents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-catering/add-catering.module#AddCateringPageModule', name: 'AddCateringPage', segment: 'add-catering', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-birthday/add-birthday.module#AddBirthdayPageModule', name: 'AddBirthdayPage', segment: 'add-birthday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-decorators/add-decorators.module#AddDecoratorsPageModule', name: 'AddDecoratorsPage', segment: 'add-decorators', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-givingbirth/add-givingbirth.module#AddGivingbirthPageModule', name: 'AddGivingbirthPage', segment: 'add-givingbirth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-hotels/add-hotels.module#AddHotelsPageModule', name: 'AddHotelsPage', segment: 'add-hotels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-gettogethers/add-gettogethers.module#AddGettogethersPageModule', name: 'AddGettogethersPage', segment: 'add-gettogethers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-magicians/add-magicians.module#AddMagiciansPageModule', name: 'AddMagiciansPage', segment: 'add-magicians', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-musician/add-musician.module#AddMusicianPageModule', name: 'AddMusicianPage', segment: 'add-musician', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-party/add-party.module#AddPartyPageModule', name: 'AddPartyPage', segment: 'add-party', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-mothersday/add-mothersday.module#AddMothersdayPageModule', name: 'AddMothersdayPage', segment: 'add-mothersday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-retirement/add-retirement.module#AddRetirementPageModule', name: 'AddRetirementPage', segment: 'add-retirement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-singers/add-singers.module#AddSingersPageModule', name: 'AddSingersPage', segment: 'add-singers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-spa/add-spa.module#AddSpaPageModule', name: 'AddSpaPage', segment: 'add-spa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-thanksgiving/add-thanksgiving.module#AddThanksgivingPageModule', name: 'AddThanksgivingPage', segment: 'add-thanksgiving', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-wedding/add-wedding.module#AddWeddingPageModule', name: 'AddWeddingPage', segment: 'add-wedding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customerprofile/customerprofile.module#CustomerprofilePageModule', name: 'CustomerprofilePage', segment: 'customerprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-vendor/admin-vendor.module#AdminVendorPageModule', name: 'AdminVendorPage', segment: 'admin-vendor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myevents/myevents.module#MyeventsPageModule', name: 'MyeventsPage', segment: 'myevents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logincustomer/logincustomer.module#LogincustomerPageModule', name: 'LogincustomerPage', segment: 'logincustomer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mysettings/mysettings.module#MysettingsPageModule', name: 'MysettingsPage', segment: 'mysettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_34_ionic_select_searchable__["SelectSearchableModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_new_invite_new_invite__["a" /* NewInvite */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sign_in_sign_in__["a" /* SignIn */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sign_up_sign_up__["a" /* SignUp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPassword */],
                __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__["a" /* Intro */],
                __WEBPACK_IMPORTED_MODULE_33__pages_admin_vendor_admin_vendor__["a" /* AdminVendorPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_aboutevent_aboutevent__["a" /* AbouteventPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_myevents_myevents__["a" /* MyeventsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_logincustomer_logincustomer__["a" /* LogincustomerPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_activeevents_activeevents__["a" /* ActiveeventsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_customerprofile_customerprofile__["a" /* CustomerprofilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_mysettings_mysettings__["a" /* MysettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_customerevents_customerevents__["a" /* CustomereventsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_37__pages_service_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__pages_service_authService__["a" /* authService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_Interceptor_HttpClient__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ToastController"],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_9__pages_service_componentService__["a" /* ComponentService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_14__pages_service_pushService__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_uid__["a" /* Uid */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_26__pages_service_app_config__["b" /* MY_CONFIG_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_26__pages_service_app_config__["a" /* AppConfig */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentService = (function () {
    function ComponentService(toast, alertCtrl, loadingCtrl) {
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    // Toast
    ComponentService.prototype.showToast = function (msg, align) {
        this.toast.show(msg, '3000', align).subscribe(function () {
        });
    };
    // Alert
    ComponentService.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    // Loader
    ComponentService.prototype.showLoader = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    ComponentService.prototype.closeLoader = function () {
        this.loader.dismiss();
    };
    ComponentService.prototype.closeAll = function () {
        this.loader.dismissAll();
    };
    ComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], ComponentService);
    return ComponentService;
}());

//# sourceMappingURL=componentService.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_details_event_details__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_vendor_admin_vendor__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_invite_new_invite__ = __webpack_require__(76);
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
 * Generated class for the Intro page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Intro = (function () {
    function Intro(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.query = '';
        this.countries = ["Accommodation", "Activities", "Birthday", "Catering", "Decorators", "Gettogethers",
            "Givingbirth", "Hotels", "Magicians", "Mothersday", "Musician",
            "Party", "Retirement", "Singers", "Spa", "Thanksgiving", "Wedding"];
        this.filteredList = [];
        this.menuCtrl.enable(true);
    }
    Intro.prototype.ngOnInit = function () {
    };
    Intro.prototype.searchEvent = function () {
        console.log("this.autocomplete.query ============>>>>>>>>>>" + this.query);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__event_details_event_details__["a" /* EventDetailsPage */]);
    };
    Intro.prototype.vendorLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__admin_vendor_admin_vendor__["a" /* AdminVendorPage */]);
    };
    Intro.prototype.createEvent = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__new_invite_new_invite__["a" /* NewInvite */]);
    };
    Intro.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Intro');
        if (window.localStorage.getItem('session')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else {
        }
    };
    Intro.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    Intro.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    Intro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-intro',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\intro\intro.html"*/'<ion-header>\n  <ion-navbar>\n  \n    <img src="assets/imgs/topbar.jpg" />\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  \n  <div padding class="m-t-35" text-center>\n      <!--<div class="input-field col s12">\n          <input id="country" type="text" class="validate filter-input" [(ngModel)]=query (keyup)=filter()>\n          <label for="country">Country</label>\n        </div>\n        <div class="suggestions" *ngIf="filteredList.length > 0">\n            <ul *ngFor="let item of filteredList">\n                <li >\n                    <a (click)="select(item)">{{item}}</a>\n                </li>\n            </ul>\n        </div>-->\n\n        <!--<ion-list padding>\n            <ion-item class="color-white">\n                <ion-icon name="ios-mail-outline" item-start class="color-white"></ion-icon>\n                <ion-input type="text" placeholder="Search for event" class="color-white" [(ngModel)]="country1"></ion-input>\n            </ion-item>\n        </ion-list>-->\n    <ion-searchbar \n    [(ngModel)]="query" \n    [showCancelButton]="true" \n    (ionInput)="filter()" \n    (ionCancel)="dismiss()"\n    placeholder="Start typing and select ...">\n    </ion-searchbar>\n        <ion-list>\n          <ion-item *ngFor="let item of filteredList" \n          (click)="select(item)">\n          {{ item }}\n          </ion-item>\n          </ion-list>\n    <button ion-button color="light" (click)="searchEvent()">\n        Search\n    </button>\n</div>\n\n  <button ion-button (click)="createEvent()">Create My Event</button>\n\n  <button ion-button (click)="vendorLogin()">Login as Vendor</button>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["MenuController"]])
    ], Intro);
    return Intro;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_invite_new_invite__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_componentService__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_pushService__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(deviceId, platform, navCtrl, menuCtrl, component, modalctrl, pushService, authService) {
        this.deviceId = deviceId;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.component = component;
        this.modalctrl = modalctrl;
        this.pushService = pushService;
        this.authService = authService;
        this.count = 0;
        this.menuCtrl.enable(true);
        this.pushObject = {};
        this.profile = {};
        this.uid = this.deviceId.uuid;
    }
    HomePage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_invite_new_invite__["a" /* NewInvite */]);
    };
    HomePage.prototype.ngOnInit = function () {
        //this.getProfile()
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n	  <button ion-button menuToggle>\n		  <ion-icon name="menu"></ion-icon>\n	  </button>\n        <ion-title class="white text-center">Welcome</ion-title>\n	  <!--<ion-buttons right class="bell">\n		  <button ion-button icon-only (click)="NotificationModal()">\n			  <ion-badge class="notify" color="danger">{{count}}</ion-badge>\n			  <ion-icon name="ios-notifications" class="pos-rel"></ion-icon>\n		  </button>\n	  </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="bg-trans content-bg" text-center>\n    <!--<img src="assets/imgs/banner.png" class="m-t-60 m-l-85 w-50">\n    <div padding text-center>\n    		<p class="fnt-black">You don\'t have any events yet.</p>\n	  		<button ion-button round color="secondary" (click)="addEvent()">\n				<ion-icon name="ios-add-outline" class="fnt-white fnt-35" float-left margin-right></ion-icon>\n	  			CREATE NEW INVITE\n	  		</button>\n    </div>-->\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_3__service_componentService__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4__service_pushService__["a" /* PushService */], __WEBPACK_IMPORTED_MODULE_5__service_authService__["a" /* authService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Interceptor_HttpClient__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by admin on 12/26/2017.
 */






var authService = (function () {
    function authService(http, https, loadingCtrl, config) {
        this.http = http;
        this.https = https;
        this.loadingCtrl = loadingCtrl;
        this.config = config;
    }
    authService.prototype.login = function (username, password) {
        var _this = this;
        return this.https.post(this.config.Url + 'login', { email: username, password: password }).map(function (response) {
            _this.isUserLoggedIn = true;
            return response;
        });
    };
    authService.prototype.signUp = function (signUpData) {
        return this.http.post(this.config.Url + 'signup', signUpData).map(function (response) {
            console.log(response);
            return response;
        });
    };
    // //save invite
    // createInvite(inviteData):Observable<any>{
    //     return this.http.post(this.config.Url+'api/invite/save',inviteData).map(
    //         response=>{
    //             console.log(response);
    //             return response;
    //         }
    //     )
    // }
    //save or update draft
    authService.prototype.saveInvite = function (inviteDate) {
        return this.http.post(this.config.Url + 'api/invite/saveDraft', inviteDate).map(function (response) {
            return response;
        });
    };
    authService.prototype.sendInvite = function (inviteDate) {
        return this.http.post(this.config.Url + 'api/invite/send', inviteDate).map(function (response) {
            return response;
        });
    };
    authService.prototype.getInvites = function () {
        return this.http.get(this.config.Url + 'api/invite/get/all').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.getCategories = function () {
        return this.http.get(this.config.Url + 'api/categories').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.getTypes = function (category) {
        return this.http.get(this.config.Url + 'api/types/' + category).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.getUpcomingInvites = function () {
        return this.http.get(this.config.Url + 'api/invite/get/upcoming').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.getReceivedInvites = function () {
        return this.http.get(this.config.Url + 'api/invite/get/received').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.getPastReceivedInvites = function () {
        return this.http.get(this.config.Url + 'api/invite/get/pastReceived').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.getPastInvites = function () {
        return this.http.get(this.config.Url + 'api/invite/get/past').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.googlePlaces = function () {
        return this.http.get("https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters").map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.respondInvite = function (resp, inviteId) {
        return this.http.post(this.config.Url + "api/invite/respondInvite", { response: resp, inviteId: inviteId }).map(function (response) {
            console.log(response);
            return response;
        });
    };
    authService.prototype.getProfile = function () {
        return this.http.get(this.config.Url + "api/profile").map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.updateProfile = function (payload) {
        return this.http.post(this.config.Url + "api/profile", payload).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.updateInvite = function (inviteDetails) {
        return this.http.post(this.config.Url + "api/invite/" + inviteDetails.id + "/update", inviteDetails).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    authService.prototype.cancelevent = function (id, reason) {
        var data = { reason: reason };
        return this.http.post(this.config.Url + 'api/invite/' + id + '/cancel', data).map(function (response) {
            return response.json();
        });
    };
    authService.prototype.viewInvite = function (id) {
        return this.http.get(this.config.Url + 'api/invite/' + id + '/view').map(function (response) {
            return response.json();
        });
    };
    authService.prototype.addContacts = function (id, contacts) {
        return this.http.post(this.config.Url + 'api/invite/' + id + '/addContacts', contacts).map(function (response) {
            return response.json();
        });
    };
    authService.prototype.getNotification = function () {
        return this.http.get(this.config.Url + 'api/notifications').map(function (response) {
            return response.json();
        });
    };
    authService.prototype.updateNotification = function (id, state) {
        return this.http.put(this.config.Url + 'api/update/' + id + '/' + state + '/notifications', "").map(function (response) {
            return response.json();
        });
    };
    authService.prototype.getAssociation = function () {
        return this.http.get(this.config.Url + 'api/push/getAssociation').map(function (response) {
            return response.json();
        });
    };
    authService.prototype.updateDeviceID = function (pushObject) {
        return this.http.post(this.config.Url + 'api/push/device/update', pushObject).map(function (response) {
            return response.json();
        });
    };
    authService.prototype.sendReminder = function (sendDetail) {
        return this.http.post(this.config.Url + 'api/sendReminder', sendDetail).map(function (response) {
            return response.json();
        });
    };
    authService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* MY_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Interceptor_HttpClient__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"], Object])
    ], authService);
    return authService;
}());

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_service_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_myevents_myevents__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_mysettings_mysettings__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myprofile_myprofile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_service_componentService__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_service_authService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_app_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_customerprofile_customerprofile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_activeevents_activeevents__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import{SweetAlert} from "sweetalert/typings/core";
// import{PhotoViewer} from "@ionic-native/photo-viewer";







var MyApp = (function () {
    function MyApp(menuCtrl, deviceId, platform, events, statusBar, modalCtrl, splashScreen, toastCtrl, toast, compService, oneSignal, authService, app, authProvider) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.deviceId = deviceId;
        this.platform = platform;
        this.events = events;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.toast = toast;
        this.compService = compService;
        this.oneSignal = oneSignal;
        this.authService = authService;
        this.authProvider = authProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* Intro */];
        this.counter = 0;
        this.profile = [];
        this.initializeApp();
        this.pages = [
            { title: 'PROFILE', component: __WEBPACK_IMPORTED_MODULE_3__pages_myprofile_myprofile__["a" /* MyprofilePage */] },
            { title: 'SETTINGS', component: __WEBPACK_IMPORTED_MODULE_2__pages_mysettings_mysettings__["a" /* MysettingsPage */] },
            { title: 'EVENTS', component: __WEBPACK_IMPORTED_MODULE_1__pages_myevents_myevents__["a" /* MyeventsPage */] },
            { title: 'CUST PROFILE', component: __WEBPACK_IMPORTED_MODULE_15__pages_customerprofile_customerprofile__["a" /* CustomerprofilePage */] },
            { title: 'ACTIVE EVENTS', component: __WEBPACK_IMPORTED_MODULE_16__pages_activeevents_activeevents__["a" /* ActiveeventsPage */] }
        ];
        this.username = window.localStorage.getItem('userName');
        this.events.subscribe('userName', function (username) {
            _this.username = username;
        });
        this.firstName = window.localStorage.getItem('firstName');
        this.events.subscribe('firstName', function (firstName) {
            _this.firstName = firstName;
        });
    }
    // ionViewDidEnter() {
    //     console.log("hi entered into ion view did enter");
    //     console.log("this.authProvider.isAdmin() 123: "+this.authProvider.isAdmin());
    //     this.menuCtrl.enable(true, "menuId");
    // }
    MyApp.prototype.ionViewDidEnter = function () {
        //to disable menu, or
        this.menuCtrl.enable(false);
    };
    MyApp.prototype.ionViewWillLeave = function () {
        // to enable menu.
        console.log("this.authProvider.isAdmin() 123: " + this.authProvider.isAdmin());
        this.menuCtrl.enable(true, "menuId");
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('primary');
            _this.platform.registerBackButtonAction(function () {
                var view = _this.nav.getActive();
                console.log("Back button event");
                console.log(view);
                console.log(_this.nav.canGoBack());
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else if (_this.counter == 0) {
                    _this.counter++;
                    _this.presentToast();
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    // console.log("exitapp");
                    _this.platform.exitApp();
                }
            }, 0);
        });
    };
    MyApp.prototype.initOneSignal = function () {
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    };
    MyApp.prototype.presentToast = function () {
        this.compService.showToast('Press again to exit', 'center');
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenaria
        console.log(" page" + page);
        this.nav.setRoot(page);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* Intro */]);
        window.localStorage.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\app\app.html"*/'<ion-menu   [content]="content" side="left" class="tparent" >\n\n  <ion-content class="blue white SideMenuCon tparent">\n      <button menuClose ion-item (click)="userInfo()" class="bg-trans">\n          <ion-item class="Menuheader">\n              <ion-avatar>\n                  <img src="assets/imgs/profile.png" alt="" class="margin-auto EventCon bg-trans margin-top20" />\n              </ion-avatar>\n              \n              <div class="border-black border-btm">\n                  <p text-uppercase  text-center class="color-gray">Hi {{firstName}}</p>\n                  <!--<p text-uppercase text-center class="color-gray">{{profile.lastname}}</p>-->\n                  <!--<p text-uppercase  text-center class="color-gray">{{profile.phone}}</p>-->\n              </div>\n          </ion-item>\n          <!--<div layout="row"  layout-align="start center" class="border-black border-btm">-->\n              <!--<p text-uppercase class="font-clr p-l-0">{{firstName}}<ion-icon name="create" class="font-clr fnt-20 p-l-7" ></ion-icon></p>-->\n          <!--</div>-->\n      </button>\n      <!--<button menuClose ion-item class="bg-trans" (click)="openPage(user)">-->\n      <!--</button>-->\n    <ion-list class="p-l-10">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)" class="font-clr tparent">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logout()" class="font-clr tparent fnt-14">\n        LOGOUT\n    </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n\n\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_10__pages_service_componentService__["a" /* ComponentService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_13__pages_service_authService__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_14_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__pages_service_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_authService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_componentService__ = __webpack_require__(44);
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
 * Generated class for the SignUp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUp = (function () {
    function SignUp(navCtrl, authService, componentService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.componentService = componentService;
        this.menuCtrl = menuCtrl;
        this.signUpData = {};
        this.menuCtrl.swipeEnable(false);
    }
    SignUp.prototype.signUp = function (signUpData) {
        var _this = this;
        //this.navCtrl.setRoot(HomePage);
        if (signUpData.firstname) {
            if (signUpData.lastname) {
                if (signUpData.email) {
                    if (signUpData.phone) {
                        if (signUpData.password) {
                            signUpData.type = 'user';
                            console.log(signUpData);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                            this.authService.signUp(signUpData).subscribe(function (response) {
                                console.log("Response");
                                console.log(response);
                                _this.componentService.presentAlert('Signup successful', '');
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                            });
                        }
                        else {
                            this.componentService.presentAlert('Error', 'Please enter Password');
                        }
                    }
                    else {
                        this.componentService.presentAlert('Error', 'Please enter Phone');
                    }
                }
                else {
                    this.componentService.presentAlert('Error', 'Please enter email');
                }
            }
            else {
                this.componentService.presentAlert('Error', 'Please enter lastname');
            }
        }
        else {
            this.componentService.presentAlert('Error', 'Please enter firstname');
        }
    };
    SignUp.prototype.goTo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignIn */]);
    };
    SignUp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\sign-up\sign-up.html"*/'<!-- \n  Generated template for the SignUp page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n	<ion-navbar transparent>\n		<ion-title text-center>Sign Up</ion-title>\n	</ion-navbar>\n\n</ion-header>\n<ion-content class="bg-trans InputCon">\n            <ion-list class="m-t-50">\n                <ion-item>\n                    <ion-icon name="ios-person-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="First Name" [(ngModel)]="signUpData.firstname"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-person-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="Last Name" [(ngModel)]="signUpData.lastname"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-mail-outline" item-start></ion-icon>\n                    <ion-input type="email" placeholder="E-mail Id" [(ngModel)]="signUpData.email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-call-outline" item-start></ion-icon>\n                    <ion-input type="number" placeholder="Phone Number" [(ngModel)]="signUpData.phone"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-lock-outline" item-start></ion-icon>\n                    <ion-input type="Password" placeholder="Password" [(ngModel)]="signUpData.password"></ion-input>\n                </ion-item>\n            </ion-list>\n\n	<div padding text-center>\n        <button ion-button  color="secondary" (click)="signUp(signUpData)">\n            <ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\n            Sign Up\n        </button>\n	</div>\n    <ion-toolbar class="bg-white">\n        <div text-center>\n            <span class="fnt-black">Back To?</span>\n            <a  color="primary" (click)="goTo()"  text-lowercase>Sign In</a>\n        </div>\n    </ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__service_authService__["a" /* authService */], __WEBPACK_IMPORTED_MODULE_5__service_componentService__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], SignUp);
    return SignUp;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewInvite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_authService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_componentService__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logincustomer_logincustomer__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {GoogleMaps} from "@ionic-native/google-maps";
/**
 * Generated class for the NewInvite page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewInvite = (function () {
    function NewInvite(menuCtrl, navCtrl, events, modalctrl, authService, componentService, navParams) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalctrl = modalctrl;
        this.authService = authService;
        this.componentService = componentService;
        this.navParams = navParams;
        this.inviteData = {};
    }
    NewInvite.prototype.saveEvent = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
    };
    NewInvite.prototype.loginascustomer = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__logincustomer_logincustomer__["a" /* LogincustomerPage */]);
    };
    NewInvite.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
    };
    NewInvite.prototype.goBack = function () {
        //this.navCtrl.push(Intro);
        // console.log(this.viewCtrl.index);
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
        //this.navCtrl.popToRoot();
    };
    NewInvite = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-new-invite',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\new-invite\new-invite.html"*/'<!--\n  Generated template for the NewInvite page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.                              \n-->\n\n<ion-header no-border>\n\n        <ion-navbar color="primary">\n                <ion-buttons left>\n                        <button ion-button (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon></button>\n                    </ion-buttons>\n            <ion-title text-center>Create My Profile</ion-title>\n            \n        </ion-navbar>\n  \n  </ion-header>\n\n<ion-content>\n        <ion-list class="m-t-50">\n                <ion-item>\n                    <ion-icon name="ios-person-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="First Name" [(ngModel)]="inviteData.eventname"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-person-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="Last Name" [(ngModel)]="inviteData.eventtype"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-mail-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="E-mail Id" [(ngModel)]="inviteData.eventlocation"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-call-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="Phone Number" [(ngModel)]="inviteData.eventdate"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name="ios-lock-outline" item-start></ion-icon>\n                    <ion-input type="text" placeholder="Password" [(ngModel)]="inviteData.eventdescription"></ion-input>\n                </ion-item>\n                <ion-item>\n                        <ion-icon name="ios-lock-outline" item-start></ion-icon>\n                        <ion-input type="text" placeholder="Confirm Password" [(ngModel)]="inviteData.minage"></ion-input>\n                    </ion-item>\n            </ion-list>\n            \n            <div padding text-center>\n<button ion-button (click)="saveEvent(inviteData)" color="secondary">Save Event</button>\n        </div>\n        <ion-toolbar class="bg-white">\n            <div text-center>\n                <a  color="primary" (click)="loginascustomer()">Login as customer?</a>\n            </div>\n        </ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\new-invite\new-invite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3__service_authService__["a" /* authService */],
            __WEBPACK_IMPORTED_MODULE_4__service_componentService__["a" /* ComponentService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], NewInvite);
    return NewInvite;
}());

//# sourceMappingURL=new-invite.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aboutevent_aboutevent__ = __webpack_require__(167);
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
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailsPage = (function () {
    function EventDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailsPage');
        this.eventDetailsArray = [{
                "title": "WEDDING AND BRIDAL",
                "age": 20
            }, { "title": "WEDDING AND JAPAN",
                "age": 10 }, { "title": "WEDDING AND DUBAI",
                "age": 30 }];
    };
    EventDetailsPage.prototype.eventDetails = function (event) {
        console.log("event===========" + event);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__aboutevent_aboutevent__["a" /* AbouteventPage */]);
    };
    EventDetailsPage.prototype.goBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
        //this.navCtrl.popToRoot();
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-event-details',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\event-details\event-details.html"*/'<!--\n  Generated template for the EventDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon></button>\n      </ion-buttons>\n    <ion-title text-center>Event Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="event-list">        \n        <div class="event-details">\n          <ion-list>\n              <ion-item *ngFor="let item of eventDetailsArray; let i = index;">\n                  <ion-label stacked primary>{{item.title}}</ion-label>\n                    \n                  <ion-label stacked primary>{{item.age}}</ion-label>\n                  <button ion-button outline item-end (click)="eventDetails($event)">Event Details</button>\n              </ion-item>\n           </ion-list>\n           \n        </div>\n     </div>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\event-details\event-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminVendorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(120);
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
 * Generated class for the AdminVendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminVendorPage = (function () {
    function AdminVendorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpData = {};
    }
    AdminVendorPage.prototype.signUp = function (signUpData) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
    };
    AdminVendorPage.prototype.goTo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignIn */]);
    };
    AdminVendorPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
    };
    AdminVendorPage.prototype.goBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* Intro */]);
        //this.navCtrl.popToRoot();
    };
    AdminVendorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-admin-vendor',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\admin-vendor\admin-vendor.html"*/'<!--\n  Generated template for the AdminVendorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  \n      <!--<img src="assets/imgs/topbar.jpg" (click)="goToHome()"/>-->\n  \n\n  <ion-navbar color="primary">\n        <ion-buttons left>\n                <button ion-button (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon></button>\n            </ion-buttons>\n    <ion-title text-center>Admin Panel</ion-title>\n    \n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list class="m-t-50">\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="First Name" [(ngModel)]="signUpData.firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Last Name" [(ngModel)]="signUpData.lastname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-mail-outline" item-start></ion-icon>\n        <ion-input type="email" placeholder="E-mail Id" [(ngModel)]="signUpData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-call-outline" item-start></ion-icon>\n        <ion-input type="number" placeholder="Phone Number" [(ngModel)]="signUpData.phone"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-lock-outline" item-start></ion-icon>\n        <ion-input type="Password" placeholder="Password" [(ngModel)]="signUpData.password"></ion-input>\n    </ion-item>\n</ion-list>\n\n<div padding text-center>\n<button ion-button  color="secondary" (click)="signUp(signUpData)">\n<ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\nSign Up\n</button>\n</div>\n<ion-toolbar class="bg-white">\n<div text-center>\n<span class="fnt-black">Back To?</span>\n<a  color="primary" (click)="goTo()"  text-lowercase>Sign In</a>\n</div>\n</ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\admin-vendor\admin-vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], AdminVendorPage);
    return AdminVendorPage;
}());

//# sourceMappingURL=admin-vendor.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map