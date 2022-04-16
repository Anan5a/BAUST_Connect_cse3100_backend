"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_global_student-list_student-list_module_ts"],{

/***/ 2700:
/*!**************************************************************************!*\
  !*** ./src/app/pages/global/student-list/student-list-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListPageRoutingModule": () => (/* binding */ StudentListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-list.page */ 3874);




const routes = [
    {
        path: '',
        component: _student_list_page__WEBPACK_IMPORTED_MODULE_0__.StudentListPage
    }
];
let StudentListPageRoutingModule = class StudentListPageRoutingModule {
};
StudentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentListPageRoutingModule);



/***/ }),

/***/ 3561:
/*!******************************************************************!*\
  !*** ./src/app/pages/global/student-list/student-list.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListPageModule": () => (/* binding */ StudentListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-list-routing.module */ 2700);
/* harmony import */ var _student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list.page */ 3874);







let StudentListPageModule = class StudentListPageModule {
};
StudentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentListPageRoutingModule
        ],
        declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_1__.StudentListPage]
    })
], StudentListPageModule);



/***/ }),

/***/ 3874:
/*!****************************************************************!*\
  !*** ./src/app/pages/global/student-list/student-list.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListPage": () => (/* binding */ StudentListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _student_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-list.page.html?ngResource */ 8074);
/* harmony import */ var _student_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list.page.scss?ngResource */ 1240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StudentListPage = class StudentListPage {
    constructor() { }
    ngOnInit() {
    }
};
StudentListPage.ctorParameters = () => [];
StudentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-student-list',
        template: _student_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_student_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StudentListPage);



/***/ }),

/***/ 1240:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/global/student-list/student-list.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWxpc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8074:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/global/student-list/student-list.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>student list of dept</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_global_student-list_student-list_module_ts.js.map