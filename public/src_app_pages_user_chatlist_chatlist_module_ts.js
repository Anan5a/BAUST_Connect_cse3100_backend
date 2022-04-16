"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user_chatlist_chatlist_module_ts"],{

/***/ 1087:
/*!****************************************************************!*\
  !*** ./src/app/pages/user/chatlist/chatlist-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatlistPageRoutingModule": () => (/* binding */ ChatlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatlist.page */ 1085);




const routes = [
    {
        path: '',
        component: _chatlist_page__WEBPACK_IMPORTED_MODULE_0__.ChatlistPage
    }
];
let ChatlistPageRoutingModule = class ChatlistPageRoutingModule {
};
ChatlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatlistPageRoutingModule);



/***/ }),

/***/ 9497:
/*!********************************************************!*\
  !*** ./src/app/pages/user/chatlist/chatlist.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatlistPageModule": () => (/* binding */ ChatlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatlist-routing.module */ 1087);
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatlist.page */ 1085);







let ChatlistPageModule = class ChatlistPageModule {
};
ChatlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatlistPageRoutingModule
        ],
        declarations: [_chatlist_page__WEBPACK_IMPORTED_MODULE_1__.ChatlistPage]
    })
], ChatlistPageModule);



/***/ }),

/***/ 1085:
/*!******************************************************!*\
  !*** ./src/app/pages/user/chatlist/chatlist.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatlistPage": () => (/* binding */ ChatlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chatlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatlist.page.html?ngResource */ 6628);
/* harmony import */ var _chatlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatlist.page.scss?ngResource */ 8694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ChatlistPage = class ChatlistPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatlistPage.ctorParameters = () => [];
ChatlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chatlist',
        template: _chatlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chatlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatlistPage);



/***/ }),

/***/ 8694:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/chatlist/chatlist.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0bGlzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6628:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/chatlist/chatlist.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>message list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_chatlist_chatlist_module_ts.js.map