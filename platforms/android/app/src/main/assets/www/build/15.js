webpackJsonp([15],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCateringPageModule", function() { return AddCateringPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_catering__ = __webpack_require__(743);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCateringPageModule = (function () {
    function AddCateringPageModule() {
    }
    AddCateringPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_catering__["a" /* AddCateringPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_catering__["a" /* AddCateringPage */]),
            ],
        })
    ], AddCateringPageModule);
    return AddCateringPageModule;
}());

//# sourceMappingURL=add-catering.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCateringPage; });
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
 * Generated class for the AddCateringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCateringPage = (function () {
    function AddCateringPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cateringData = {};
    }
    AddCateringPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCateringPage');
    };
    AddCateringPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-catering',template:/*ion-inline-start:"G:\ionic\backup app\02102018\src\pages\add-catering\add-catering.html"*/'<!--\n  Generated template for the AddCateringPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title class="text-center">Add Catering</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-list class="m-t-50">\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="First Name" [(ngModel)]="cateringData.firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-person-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Last Name" [(ngModel)]="cateringData.lastname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-mail-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="E-mail Id" [(ngModel)]="cateringData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-call-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Phone Number" [(ngModel)]="cateringData.phone"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="ios-lock-outline" item-start></ion-icon>\n        <ion-input type="text" placeholder="Password" [(ngModel)]="cateringData.password"></ion-input>\n    </ion-item>\n</ion-list>\n\n<div padding text-center>\n<button ion-button  color="secondary" (click)="addcatering(cateringData)">\n<ion-icon name="ios-unlock-outline" class="padding-right5" float-left margin-right></ion-icon>\nSave\n</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\backup app\02102018\src\pages\add-catering\add-catering.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AddCateringPage);
    return AddCateringPage;
}());

//# sourceMappingURL=add-catering.js.map

/***/ })

});
//# sourceMappingURL=15.js.map