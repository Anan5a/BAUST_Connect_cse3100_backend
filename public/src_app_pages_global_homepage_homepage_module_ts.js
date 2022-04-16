"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_global_homepage_homepage_module_ts"],{

/***/ 1464:
/*!******************************************************************!*\
  !*** ./src/app/pages/global/homepage/homepage-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePageRoutingModule": () => (/* binding */ HomepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.page */ 2394);




const routes = [
    {
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_0__.HomepagePage
    }
];
let HomepagePageRoutingModule = class HomepagePageRoutingModule {
};
HomepagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomepagePageRoutingModule);



/***/ }),

/***/ 2813:
/*!**********************************************************!*\
  !*** ./src/app/pages/global/homepage/homepage.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePageModule": () => (/* binding */ HomepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-routing.module */ 1464);
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.page */ 2394);







let HomepagePageModule = class HomepagePageModule {
};
HomepagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepagePageRoutingModule
        ],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_1__.HomepagePage]
    })
], HomepagePageModule);



/***/ }),

/***/ 2394:
/*!********************************************************!*\
  !*** ./src/app/pages/global/homepage/homepage.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePage": () => (/* binding */ HomepagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _homepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.page.html?ngResource */ 9546);
/* harmony import */ var _homepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.page.scss?ngResource */ 8052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomepagePage = class HomepagePage {
    constructor() {
    }
    ngOnInit() {
    }
};
HomepagePage.ctorParameters = () => [];
HomepagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-homepage',
        template: _homepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_homepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomepagePage);



/***/ }),

/***/ 8052:
/*!*********************************************************************!*\
  !*** ./src/app/pages/global/homepage/homepage.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9546:
/*!*********************************************************************!*\
  !*** ./src/app/pages/global/homepage/homepage.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>homepage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_global_homepage_homepage_module_ts.js.map