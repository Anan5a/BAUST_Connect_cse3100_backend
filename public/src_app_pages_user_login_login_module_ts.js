"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user_login_login_module_ts"],{

/***/ 9293:
/*!**********************************************************!*\
  !*** ./src/app/pages/user/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 2413);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    }, {
        path: 'logout',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 6887:
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 9293);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 2413);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 2413:
/*!************************************************!*\
  !*** ./src/app/pages/user/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 516);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 9345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/storage.service */ 1188);
/* harmony import */ var _services_global_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/global-events.service */ 6231);









let LoginPage = class LoginPage {
    constructor(fb, authService, router, storageService, events) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.storageService = storageService;
        this.events = events;
        this.credentials = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    }
    ngOnInit() {
        const isLoggedIn = this.authService.isLoggedIn();
        isLoggedIn.then((n) => {
            if (n === 'true')
                this.router.navigateByUrl('/profile', { replaceUrl: true });
        });
        /**
         * logout module
         */
        if (this.router.url.match(/\/logout/)) {
            this.authService.logout();
            this.events.publishEvent({ 'update_menu': true });
            this.router.navigateByUrl('/', { replaceUrl: true });
        }
        this.credentials = this.fb.group({
            emailorid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(9)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.login(this.credentials.value).subscribe((f) => {
                if (f) {
                    this.storageService.set('loggedIn', 'true');
                    this.router.navigateByUrl('/profile', { replaceUrl: true });
                    this.events.publishEvent({ 'update_menu': true });
                }
            });
        });
    }
    // Easy access for form fields
    get emailorid() {
        return this.credentials.get('emailorid');
    }
    get password() {
        return this.credentials.get('password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _services_global_events_service__WEBPACK_IMPORTED_MODULE_4__.GlobalEventsService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9345:
/*!*************************************************************!*\
  !*** ./src/app/pages/user/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 10%;\n  --background: url(\"https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80\") 0 0/100% 100% no-repeat;\n}\n\nform {\n  max-width: 400px;\n  align-items: center;\n}\n\n.input-group {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBR0EsbUxBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxMCU7XG4gIC8vLS1wYWRkaW5nLXN0YXJ0OiAxMCU7XG4gIC8vLS1wYWRkaW5nLWVuZDogMTAlO1xuICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzY0MzEzMTE3MTktMzk4YjY3MDRkNGNjP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMjM0JnE9ODAnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcblxufVxuZm9ybXtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbnB1dC1ncm91cCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5lcnJvcnMge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi53aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */";

/***/ }),

/***/ 516:
/*!*************************************************************!*\
  !*** ./src/app/pages/user/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-md=\"3\" size-lg=\"4\"></ion-col>\n      <ion-col class=\"\">\n        <h1 ion-text class=\"white\">Login</h1>\n        <p ion-text class=\"white\">Login to your account</p>\n        <form (ngSubmit)=\"login()\" [formGroup]=\"credentials\">\n          <div class=\"input-group\">\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Student ID\" formControlName=\"emailorid\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(emailorid?.dirty || emailorid?.touched) && emailorid?.errors\" class=\"errors\">\n              <span *ngIf=\"emailorid?.errors?.required\">This field is required</span>\n              <span *ngIf=\"emailorid?.errors?.emailorid\">The input is invalid</span>\n            </div>\n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"(password?.dirty || password?.touched) && password.errors\" class=\"errors\">\n              <span *ngIf=\"password?.errors?.required\">Password is required</span>\n              <span *ngIf=\"password?.errors?.minlength\">Password needs to be 8 characters</span>\n            </div>\n          </div>\n          <!-- TODO: Add captcha -->\n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Log in</ion-button>\n\n          <ion-text color=\"light\">Not yet a member? Contact your department.\n          </ion-text>\n\n        </form>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_login_login_module_ts.js.map