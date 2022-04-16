"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_global_departmentlist_departmentlist_module_ts"],{

/***/ 1597:
/*!******************************************************************************!*\
  !*** ./src/app/pages/global/departmentlist/departmentlist-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentlistPageRoutingModule": () => (/* binding */ DepartmentlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _departmentlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentlist.page */ 7527);




const routes = [
    {
        path: '',
        component: _departmentlist_page__WEBPACK_IMPORTED_MODULE_0__.DepartmentlistPage
    }
];
let DepartmentlistPageRoutingModule = class DepartmentlistPageRoutingModule {
};
DepartmentlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DepartmentlistPageRoutingModule);



/***/ }),

/***/ 2276:
/*!**********************************************************************!*\
  !*** ./src/app/pages/global/departmentlist/departmentlist.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentlistPageModule": () => (/* binding */ DepartmentlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _departmentlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentlist-routing.module */ 1597);
/* harmony import */ var _departmentlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departmentlist.page */ 7527);







let DepartmentlistPageModule = class DepartmentlistPageModule {
};
DepartmentlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _departmentlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartmentlistPageRoutingModule
        ],
        declarations: [_departmentlist_page__WEBPACK_IMPORTED_MODULE_1__.DepartmentlistPage]
    })
], DepartmentlistPageModule);



/***/ }),

/***/ 7527:
/*!********************************************************************!*\
  !*** ./src/app/pages/global/departmentlist/departmentlist.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentlistPage": () => (/* binding */ DepartmentlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _departmentlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentlist.page.html?ngResource */ 579);
/* harmony import */ var _departmentlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departmentlist.page.scss?ngResource */ 3214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/department.service */ 5148);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/loader.service */ 8555);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);








let DepartmentlistPage = class DepartmentlistPage {
    constructor(departmentService, loaderService, sanitizer, router) {
        this.departmentService = departmentService;
        this.loaderService = loaderService;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    ngOnInit() {
        this.loadDepartments();
    }
    loadDepartments() {
        this.departmentService.getDepartments().subscribe((succ) => {
            this.departments = succ;
        }, (err) => {
            this.loaderService.showToast('Failed to load departments', 'danger', 3000);
        });
    }
};
DepartmentlistPage.ctorParameters = () => [
    { type: _services_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DepartmentlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-departmentlist',
        template: _departmentlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_departmentlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DepartmentlistPage);



/***/ }),

/***/ 3214:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/global/departmentlist/departmentlist.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50bGlzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 579:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/global/departmentlist/departmentlist.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>department list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col *ngFor=\"let department of departments\" size-sm=\"4\" size-xl=\"4\" size-md=\"6\" size-lg=\"4\" size-xs=\"12\">\n        <ion-card [button]=\"true\" (click)=\"router.navigateByUrl('/departments/'+department.id+'/students')\">\n          <ion-card-header>\n            <img [src]=\"sanitizer.bypassSecurityTrustUrl(department.backdrop)\" alt=\"dept image {{ department.name }}\">\n            <ion-card-title>{{department.name}} ({{department.name_short}})</ion-card-title>\n            <ion-card-subtitle>Since: {{department.birth_date}} </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            {{department.description}}\n            <ion-list>\n              <ion-item>\n\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_global_departmentlist_departmentlist_module_ts.js.map