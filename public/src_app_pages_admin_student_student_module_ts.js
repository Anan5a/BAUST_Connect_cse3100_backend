"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_student_student_module_ts"],{

/***/ 7463:
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/student/student-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPageRoutingModule": () => (/* binding */ StudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.page */ 7995);




const routes = [
    {
        path: '',
        component: _student_page__WEBPACK_IMPORTED_MODULE_0__.StudentPage
    }
];
let StudentPageRoutingModule = class StudentPageRoutingModule {
};
StudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentPageRoutingModule);



/***/ }),

/***/ 6483:
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/student/student.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPageModule": () => (/* binding */ StudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-routing.module */ 7463);
/* harmony import */ var _student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.page */ 7995);







let StudentPageModule = class StudentPageModule {
};
StudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentPageRoutingModule
        ],
        declarations: [_student_page__WEBPACK_IMPORTED_MODULE_1__.StudentPage]
    })
], StudentPageModule);



/***/ }),

/***/ 7995:
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/student/student.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPage": () => (/* binding */ StudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.page.html?ngResource */ 1448);
/* harmony import */ var _student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.page.scss?ngResource */ 6182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StudentPage = class StudentPage {
    constructor() { }
    ngOnInit() {
    }
};
StudentPage.ctorParameters = () => [];
StudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-student',
        template: _student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StudentPage);



/***/ }),

/***/ 6182:
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/student/student.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1448:
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/student/student.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>student</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_student_student_module_ts.js.map