"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_department_department_module_ts"],{

/***/ 5554:
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/department/add-department.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDepartmentPage": () => (/* binding */ AddDepartmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_department_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-department.page.html?ngResource */ 2357);
/* harmony import */ var _department_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.page.scss?ngResource */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AddDepartmentPage = class AddDepartmentPage {
    constructor() { }
    ngOnInit() {
    }
    createDepartment() {
    }
};
AddDepartmentPage.ctorParameters = () => [];
AddDepartmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-department',
        template: _add_department_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_department_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddDepartmentPage);



/***/ }),

/***/ 7277:
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/department/department-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentPageRoutingModule": () => (/* binding */ DepartmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _department_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department.page */ 170);
/* harmony import */ var _add_department_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-department.page */ 5554);
/* harmony import */ var _edit_department_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-department.page */ 1829);






const routes = [
    {
        path: '',
        component: _department_page__WEBPACK_IMPORTED_MODULE_0__.DepartmentPage,
        children: [
            {
                path: 'add',
                component: _add_department_page__WEBPACK_IMPORTED_MODULE_1__.AddDepartmentPage
            },
            {
                path: 'edit/:id',
                component: _edit_department_page__WEBPACK_IMPORTED_MODULE_2__.EditDepartmentPage
            }
        ]
    }
];
let DepartmentPageRoutingModule = class DepartmentPageRoutingModule {
};
DepartmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], DepartmentPageRoutingModule);



/***/ }),

/***/ 3983:
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/department/department.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentPageModule": () => (/* binding */ DepartmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department-routing.module */ 7277);
/* harmony import */ var _department_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.page */ 170);
/* harmony import */ var _add_department_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-department.page */ 5554);
/* harmony import */ var _edit_department_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-department.page */ 1829);









let DepartmentPageModule = class DepartmentPageModule {
};
DepartmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _department_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartmentPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [
            _department_page__WEBPACK_IMPORTED_MODULE_1__.DepartmentPage,
            _add_department_page__WEBPACK_IMPORTED_MODULE_2__.AddDepartmentPage,
            _edit_department_page__WEBPACK_IMPORTED_MODULE_3__.EditDepartmentPage
        ]
    })
], DepartmentPageModule);



/***/ }),

/***/ 170:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/department/department.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentPage": () => (/* binding */ DepartmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _department_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department.page.html?ngResource */ 8967);
/* harmony import */ var _department_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.page.scss?ngResource */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/department.service */ 5148);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/loader.service */ 8555);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);







let DepartmentPage = class DepartmentPage {
    constructor(router, departmentService, loaderService) {
        this.router = router;
        this.departmentService = departmentService;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        //load departments
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
DepartmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
DepartmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-department',
        template: _department_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_department_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DepartmentPage);



/***/ }),

/***/ 1829:
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/department/edit-department.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDepartmentPage": () => (/* binding */ EditDepartmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_department_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-department.page.html?ngResource */ 686);
/* harmony import */ var _department_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.page.scss?ngResource */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EditDepartmentPage = class EditDepartmentPage {
    constructor() { }
    ngOnInit() {
    }
    loadDepartment(id) {
    }
    updateDepartment() {
    }
};
EditDepartmentPage.ctorParameters = () => [];
EditDepartmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-department',
        template: _edit_department_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_department_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditDepartmentPage);



/***/ }),

/***/ 9022:
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/department/department.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2357:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/department/add-department.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>admin>add departments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"4\"></ion-col>\n      <ion-col class=\"\">\n        <h1 ion-text class=\"white\">Add department</h1>\n        <p ion-text class=\"white\">Create new department</p>\n        <form (ngSubmit)=\"createDepartment()\" [formGroup]=\"credentials\">\n          <div class=\"input-group\">\n            <!-- student id -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Student ID\" formControlName=\"student_id\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(student_id.dirty || student_id.touched) && student_id.errors\" class=\"errors\">\n              <span *ngIf=\"student_id.errors?.required\">Enter your full student ID</span>\n              <span *ngIf=\"student_id.errors?.student_id\">The input is invalid</span>\n            </div>\n\n            <!-- Full name -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Full Name\" formControlName=\"full_name\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(full_name.dirty || full_name.touched) && full_name.errors\" class=\"errors\">\n              <span *ngIf=\"full_name.errors?.required\">Enter your full name</span>\n              <span *ngIf=\"full_name.errors?.full_name\">The input is invalid</span>\n            </div>\n            <!-- batch -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Batch\" formControlName=\"batch\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(batch.dirty || batch.touched) && batch.errors\" class=\"errors\">\n              <span *ngIf=\"batch.errors?.required\">Type your batch number</span>\n              <span *ngIf=\"batch.errors?.batch\">The input is invalid</span>\n            </div>\n\n            <!-- department -->\n            <ion-item (click)=\"load_departments()\">\n              <ion-label>Department</ion-label>\n              <ion-select name=\"department\" formControlName=\"department_id\">\n                <ion-select-option *ngFor=\"let department of departments\" [value]=\"department.id\">{{department.name_short}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <!--\n<div *ngIf=\"(emailorid.dirty || emailorid.touched) && emailorid.errors\" class=\"errors\">\n<span *ngIf=\"emailorid.errors?.required\">This field is required</span>\n<span *ngIf=\"emailorid.errors?.emailorid\">The input is invalid</span>\n</div>\n-->\n            <!-- email -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n              <span *ngIf=\"email.errors?.required\">Email address is required</span>\n              <span *ngIf=\"email.errors?.email\">The email is invalid</span>\n            </div>\n            <!-- password -->\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n              <span *ngIf=\"password.errors?.required\">Password is required</span>\n              <span *ngIf=\"password.errors?.minlength\">Password needs to be 8 characters</span>\n            </div>\n            <!-- confirm password -->\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"c_password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(c_password.dirty || c_password.touched) && c_password.errors\" class=\"errors\">\n              <span *ngIf=\"c_password.errors?.required\">Confirm Password is required</span>\n              <br>\n              <span *ngIf=\"credentials.hasError('notSame')\">Confirm password doesn't match</span>\n            </div>\n          </div>\n\n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Signup</ion-button>\n          <!-- TODO: add captcha -->\n          <ion-text color=\"light\">Not yet a member? Contact your department. </ion-text>\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 8967:
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/department/department.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>admin>departments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let department of departments\" size-sm=\"4\" size-xl=\"4\" size-md=\"6\" size-lg=\"4\" size-xs=\"12\">\n        <ion-card [button]=\"true\">\n          <ion-card-header>\n            <img [src]=\"department.backdrop\" alt=\"dept image {{ department.name }}\">\n            <ion-card-title>{{department.name}} ({{department.name_short}})</ion-card-title>\n            <ion-card-subtitle>Since: {{department.birth_date}} </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            {{department.description}}\n            <ion-list>\n              <ion-item>\n                <ion-button (click)=\"router.navigateByUrl('/admin/department/edit/'+department.id)\" color=\"primary\">\n                  <ion-icon name=\"create-sharp\" ios=\"create-outline\" md=\"create-sharp\"></ion-icon> Edit\n                </ion-button>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 686:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/department/edit-department.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>admin>edit departments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"4\"></ion-col>\n      <ion-col class=\"\">\n        <h1 ion-text class=\"white\">Signup</h1>\n        <p ion-text class=\"white\">Create new account</p>\n        <form (ngSubmit)=\"true\" [formGroup]=\"credentials\">\n          <div class=\"input-group\">\n            <!-- student id -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Student ID\" formControlName=\"student_id\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(student_id.dirty || student_id.touched) && student_id.errors\" class=\"errors\">\n              <span *ngIf=\"student_id.errors?.required\">Enter your full student ID</span>\n              <span *ngIf=\"student_id.errors?.student_id\">The input is invalid</span>\n            </div>\n\n            <!-- Full name -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Full Name\" formControlName=\"full_name\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(full_name.dirty || full_name.touched) && full_name.errors\" class=\"errors\">\n              <span *ngIf=\"full_name.errors?.required\">Enter your full name</span>\n              <span *ngIf=\"full_name.errors?.full_name\">The input is invalid</span>\n            </div>\n            <!-- batch -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Batch\" formControlName=\"batch\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(batch.dirty || batch.touched) && batch.errors\" class=\"errors\">\n              <span *ngIf=\"batch.errors?.required\">Type your batch number</span>\n              <span *ngIf=\"batch.errors?.batch\">The input is invalid</span>\n            </div>\n\n            <!-- department -->\n            <ion-item (click)=\"load_departments()\">\n              <ion-label>Department</ion-label>\n              <ion-select name=\"department\" formControlName=\"department_id\">\n                <ion-select-option *ngFor=\"let department of departments\" [value]=\"department.id\">{{department.name_short}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <!--\n<div *ngIf=\"(emailorid.dirty || emailorid.touched) && emailorid.errors\" class=\"errors\">\n<span *ngIf=\"emailorid.errors?.required\">This field is required</span>\n<span *ngIf=\"emailorid.errors?.emailorid\">The input is invalid</span>\n</div>\n-->\n            <!-- email -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n              <span *ngIf=\"email.errors?.required\">Email address is required</span>\n              <span *ngIf=\"email.errors?.email\">The email is invalid</span>\n            </div>\n            <!-- password -->\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n              <span *ngIf=\"password.errors?.required\">Password is required</span>\n              <span *ngIf=\"password.errors?.minlength\">Password needs to be 8 characters</span>\n            </div>\n            <!-- confirm password -->\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"c_password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(c_password.dirty || c_password.touched) && c_password.errors\" class=\"errors\">\n              <span *ngIf=\"c_password.errors?.required\">Confirm Password is required</span>\n              <br>\n              <span *ngIf=\"credentials.hasError('notSame')\">Confirm password doesn't match</span>\n            </div>\n          </div>\n\n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Signup</ion-button>\n          <!-- TODO: add captcha -->\n          <ion-text color=\"light\">Not yet a member? Contact your department. </ion-text>\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_department_department_module_ts.js.map