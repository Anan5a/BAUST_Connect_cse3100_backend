"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_site-post_site-post_module_ts"],{

/***/ 2808:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/site-post/site-post-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitePostPageRoutingModule": () => (/* binding */ SitePostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _site_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-post.page */ 9386);




const routes = [
    {
        path: '',
        component: _site_post_page__WEBPACK_IMPORTED_MODULE_0__.SitePostPage
    }
];
let SitePostPageRoutingModule = class SitePostPageRoutingModule {
};
SitePostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SitePostPageRoutingModule);



/***/ }),

/***/ 8199:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/site-post/site-post.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitePostPageModule": () => (/* binding */ SitePostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _site_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-post-routing.module */ 2808);
/* harmony import */ var _site_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-post.page */ 9386);







let SitePostPageModule = class SitePostPageModule {
};
SitePostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _site_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.SitePostPageRoutingModule
        ],
        declarations: [_site_post_page__WEBPACK_IMPORTED_MODULE_1__.SitePostPage]
    })
], SitePostPageModule);



/***/ }),

/***/ 9386:
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/site-post/site-post.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitePostPage": () => (/* binding */ SitePostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _site_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-post.page.html?ngResource */ 3132);
/* harmony import */ var _site_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-post.page.scss?ngResource */ 5454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SitePostPage = class SitePostPage {
    constructor() { }
    ngOnInit() {
    }
};
SitePostPage.ctorParameters = () => [];
SitePostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-site-post',
        template: _site_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_site_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SitePostPage);



/***/ }),

/***/ 5454:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/site-post/site-post.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlLXBvc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3132:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/site-post/site-post.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>site-post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_site-post_site-post_module_ts.js.map