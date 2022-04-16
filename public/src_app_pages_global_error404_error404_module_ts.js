"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_global_error404_error404_module_ts"],{

/***/ 1941:
/*!******************************************************************!*\
  !*** ./src/app/pages/global/error404/error404-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404PageRoutingModule": () => (/* binding */ Error404PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _error404_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404.page */ 2708);




const routes = [
    {
        path: '',
        component: _error404_page__WEBPACK_IMPORTED_MODULE_0__.Error404Page
    }
];
let Error404PageRoutingModule = class Error404PageRoutingModule {
};
Error404PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Error404PageRoutingModule);



/***/ }),

/***/ 2987:
/*!**********************************************************!*\
  !*** ./src/app/pages/global/error404/error404.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404PageModule": () => (/* binding */ Error404PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _error404_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404-routing.module */ 1941);
/* harmony import */ var _error404_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404.page */ 2708);







let Error404PageModule = class Error404PageModule {
};
Error404PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _error404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Error404PageRoutingModule
        ],
        declarations: [_error404_page__WEBPACK_IMPORTED_MODULE_1__.Error404Page]
    })
], Error404PageModule);



/***/ }),

/***/ 2708:
/*!********************************************************!*\
  !*** ./src/app/pages/global/error404/error404.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Page": () => (/* binding */ Error404Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _error404_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404.page.html?ngResource */ 5411);
/* harmony import */ var _error404_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404.page.scss?ngResource */ 6375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Error404Page = class Error404Page {
    constructor() { }
    ngOnInit() {
    }
};
Error404Page.ctorParameters = () => [];
Error404Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error404',
        template: _error404_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error404_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Error404Page);



/***/ }),

/***/ 6375:
/*!*********************************************************************!*\
  !*** ./src/app/pages/global/error404/error404.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5411:
/*!*********************************************************************!*\
  !*** ./src/app/pages/global/error404/error404.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>whoops</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"4\"></ion-col>\n      <ion-col>\n        <ion-title>\n          <ion-icon name=\"bowling-ball-outline\" ios=\"bowling-ball-outline\" md=\"bowling-ball-outline\"></ion-icon>\n          Are you lost perhaps?\n        </ion-title>\n        <ion-button [routerLink]=\"'/'\">Go back to homepage</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_global_error404_error404_module_ts.js.map