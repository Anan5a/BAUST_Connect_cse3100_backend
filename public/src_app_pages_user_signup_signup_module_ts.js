"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user_signup_signup_module_ts"],{

/***/ 390:
/*!************************************************************!*\
  !*** ./src/app/pages/user/signup/signup-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 6372);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 2743:
/*!****************************************************!*\
  !*** ./src/app/pages/user/signup/signup.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 390);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 6372);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 6372:
/*!**************************************************!*\
  !*** ./src/app/pages/user/signup/signup.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 9440);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 8292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/department.service */ 5148);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/loader.service */ 8555);










let SignupPage = class SignupPage {
    constructor(fb, authService, alertController, departmentService, router, loaderService) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.departmentService = departmentService;
        this.router = router;
        this.loaderService = loaderService;
        this.credentials = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.checkPasswords = (group) => {
            let pass = group.get('password').value;
            let confirmPass = group.get('c_password').value;
            return pass === confirmPass ? null : { notSame: true };
        };
    }
    ngOnInit() {
        const isLoggedIn = this.authService.isLoggedIn();
        isLoggedIn.then((n) => {
            if (n == true)
                this.router.navigateByUrl('/profile', { replaceUrl: true });
        });
        this.credentials = this.fb.group({
            student_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(9)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
            c_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
            full_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60)]],
            batch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2)]],
            department_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        }, {
            validators: this.checkPasswords
        });
    }
    load_departments() {
        console.log('loading departments');
        //load departments
        this.departmentService.getDepartments().subscribe((response) => {
            this.departments = response;
        });
    }
    signup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.signup(this.credentials.value).subscribe((response) => {
                this.loaderService.showToast("Account created successfully!", "success");
                this.router.navigateByUrl('/login', { replaceUrl: true });
            }, (error) => {
            });
        });
    }
    // Easy access for form fields
    get student_id() {
        return this.credentials.get('student_id');
    }
    get email() {
        return this.credentials.get('email');
    }
    get password() {
        return this.credentials.get('password');
    }
    get full_name() {
        return this.credentials.get('full_name');
    }
    get batch() {
        return this.credentials.get('batch');
    }
    get c_password() {
        return this.credentials.get('c_password');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 8292:
/*!***************************************************************!*\
  !*** ./src/app/pages/user/signup/signup.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 10%;\n  --background: url(\"https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80\") 0 0/100% 100% no-repeat;\n}\n\nform {\n  max-width: 400px;\n  align-items: center;\n}\n\n.input-group {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUdBLG1MQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDEwJTtcbiAgLy8tLXBhZGRpbmctc3RhcnQ6IDEwJTtcbiAgLy8tLXBhZGRpbmctZW5kOiAxMCU7XG4gIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNjQzMTMxMTcxOS0zOThiNjcwNGQ0Y2M/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMzQmcT04MCcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuXG59XG5mb3Jte1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlucHV0LWdyb3VwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmVycm9ycyB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ud2hpdGV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9440:
/*!***************************************************************!*\
  !*** ./src/app/pages/user/signup/signup.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"4\"></ion-col>\n      <ion-col class=\"\">\n        <h1 ion-text class=\"white\">Signup</h1>\n        <p ion-text class=\"white\">Create new account</p>\n        <form (ngSubmit)=\"signup()\" [formGroup]=\"credentials\">\n          <div class=\"input-group\">\n            <!-- student id -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Student ID\" formControlName=\"student_id\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(student_id.dirty || student_id.touched) && student_id.errors\" class=\"errors\">\n              <span *ngIf=\"student_id.errors?.required\">Enter your full student ID</span>\n              <span *ngIf=\"student_id.errors?.student_id\">The input is invalid</span>\n            </div>\n\n            <!-- Full name -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Full Name\" formControlName=\"full_name\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(full_name.dirty || full_name.touched) && full_name.errors\" class=\"errors\">\n              <span *ngIf=\"full_name.errors?.required\">Enter your full name</span>\n              <span *ngIf=\"full_name.errors?.full_name\">The input is invalid</span>\n            </div>\n            <!-- batch -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Batch\" formControlName=\"batch\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(batch.dirty || batch.touched) && batch.errors\" class=\"errors\">\n              <span *ngIf=\"batch.errors?.required\">Type your batch number</span>\n              <span *ngIf=\"batch.errors?.batch\">The input is invalid</span>\n            </div>\n\n            <!-- department -->\n            <ion-item (click)=\"load_departments()\">\n              <ion-label>Department</ion-label>\n              <ion-select name=\"department\" formControlName=\"department_id\">\n                <ion-select-option *ngFor=\"let department of departments\" [value]=\"department.id\">{{department.name_short}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <!--\n<div *ngIf=\"(emailorid.dirty || emailorid.touched) && emailorid.errors\" class=\"errors\">\n<span *ngIf=\"emailorid.errors?.required\">This field is required</span>\n<span *ngIf=\"emailorid.errors?.emailorid\">The input is invalid</span>\n</div>\n-->\n            <!-- email -->\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n              <span *ngIf=\"email.errors?.required\">Email address is required</span>\n              <span *ngIf=\"email.errors?.email\">The email is invalid</span>\n            </div>\n            <!-- password -->\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n              <span *ngIf=\"password.errors?.required\">Password is required</span>\n              <span *ngIf=\"password.errors?.minlength\">Password needs to be 8 characters</span>\n            </div>\n            <!-- confirm password -->\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"c_password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(c_password.dirty || c_password.touched) && c_password.errors\" class=\"errors\">\n              <span *ngIf=\"c_password.errors?.required\">Confirm Password is required</span>\n              <br>\n              <span *ngIf=\"credentials.hasError('notSame')\">Confirm password doesn't match</span>\n            </div>\n          </div>\n\n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Signup</ion-button>\n          <!-- TODO: add captcha -->\n          <ion-text color=\"light\">Not yet a member? Contact your department. </ion-text>\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_signup_signup_module_ts.js.map