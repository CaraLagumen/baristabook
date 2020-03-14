(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"forgot\">\n\n  <span class=\"forgot__title heading-big\">\n    Forgot password\n  </span>\n\n  <p\n    @fadeTrigger\n    *ngIf=\"state === 'email'\"\n    class=\"forgot__welcome greeting\"\n  >\n    Forgot your password? No biggie. Please enter your account's email address to receive an email with a unique link\n    for a password reset.\n  </p>\n\n  <p\n    @fadeTrigger\n    *ngIf=\"state === 'sent'\"\n    class=\"forgot__welcome greeting\"\n  >\n    Thanks! Email sent.\n  </p>\n\n  <form\n    (submit)=\"onForgot(forgotForm)\"\n    #forgotForm=\"ngForm\"\n    *ngIf=\"!isLoading && state !== 'sent'\"\n    class=\"forgot__form\"\n  >\n\n    <span class=\"forgot__form--label\">Email</span>\n    <input\n      type=\"email\"\n      required\n      ngModel\n      name=\"email\"\n      #emailInput=\"ngModel\"\n      class=\"forgot__form--input input-bar\"\n    >\n\n    <button\n      [disabled]=\"!forgotForm.valid\"\n      class=\"forgot__form--forgot cta-btn\"\n    >Send</button>\n\n  </form>\n\n  <span\n    *ngIf=\"isLoading && state !== 'sent'\"\n    class=\"loading\"\n  >Loading...</span>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n\n  <span class=\"login__title heading-big\">\n    Login\n  </span>\n\n  <p\n    @fadeTrigger\n    *ngIf=\"state === 'welcome'\"\n    class=\"login__welcome greeting\"\n  >\n    Welcome. Are you the people's barista champion yet?\n    If not, get started by signing up. Otherwise, go ahead and log in, champ!\n  </p>\n\n  <p\n    @fadeTrigger\n    *ngIf=\"state === 'star'\"\n    class=\"login__welcome greeting\"\n  >\n    Please log in to star drinks and have an easier access\n    to the ones you're currently having trouble with.\n    If you do not have an account, then please sign up.\n  </p>\n\n  <a\n    routerLink=\"/auth/signup\"\n    class=\"login__signup btn-small\"\n  >Join Baristabook</a>\n\n  <form\n    (submit)=\"onLogin(loginForm)\"\n    #loginForm=\"ngForm\"\n    *ngIf=\"!isLoading\"\n    class=\"login__form\"\n  >\n\n    <span class=\"login__form--label\">Email</span>\n    <input\n      type=\"email\"\n      required\n      ngModel\n      name=\"email\"\n      #emailInput=\"ngModel\"\n      class=\"login__form--input input-bar\"\n    >\n\n    <span class=\"login__form--label\">Password</span>\n    <input\n      type=\"password\"\n      required\n      minlength=\"8\"\n      ngModel\n      name=\"password\"\n      #passwordInput=\"ngModel\"\n      class=\"login__form--input input-bar\"\n    >\n\n    <a\n      routerLink=\"/auth/forgot/email\"\n      class=\"login__form--forgot\"\n    >Forgot password</a>\n\n    <button\n      [disabled]=\"!loginForm.valid\"\n      class=\"login__form--login cta-btn\"\n    >Login</button>\n\n  </form>\n\n  <span\n    *ngIf=\"isLoading\"\n    class=\"loading\"\n  >Loading...</span>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reset\">\n\n  <span class=\"reset__title heading-big\">\n    Reset password\n  </span>\n\n  <p class=\"reset__welcome greeting\">\n    Nice! Kudos to you for knowing your email and its password. Please enter a new password to be logged in\n    automatically.\n  </p>\n\n  <form\n    (submit)=\"onReset(resetForm)\"\n    #resetForm=\"ngForm\"\n    *ngIf=\"!isLoading\"\n    class=\"reset__form\"\n  >\n\n    <span class=\"reset__form--label\">New Password</span>\n    <input\n      type=\"password\"\n      required\n      minlength=\"8\"\n      ngModel\n      name=\"password\"\n      #passwordInput=\"ngModel\"\n      class=\"reset__form--input input-bar\"\n    >\n\n    <span class=\"reset__form--label\">Confirm New Password</span>\n    <input\n      type=\"password\"\n      required\n      minlength=\"8\"\n      ngModel\n      name=\"passwordConfirm\"\n      #passwordConfirmInput=\"ngModel\"\n      class=\"reset__form--input input-bar\"\n    >\n\n    <button\n      [disabled]=\"!resetForm.valid\"\n      class=\"reset__form--reset cta-btn\"\n    >Reset</button>\n\n  </form>\n\n  <span\n    *ngIf=\"isLoading\"\n    class=\"loading\"\n  >Loading...</span>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"signup\">\n\n  <span class=\"signup__title heading-big\">\n    Sign up\n  </span>\n\n  <p class=\"signup__welcome greeting\">\n    Create your own personalized Baristabook by signing up and starring drinks.\n    Keep it handy and you’ll never have to remake a drink again!\n    <small>(For the most part...)</small>\n  </p>\n\n  <form\n    (submit)=\"onSignup(signupForm)\"\n    #signupForm=\"ngForm\"\n    *ngIf=\"!isLoading\"\n    class=\"signup__form\"\n  >\n\n    <span class=\"signup__form--label\">Name</span>\n    <input\n      required\n      ngModel\n      name=\"name\"\n      #nameInput=\"ngModel\"\n      class=\"signup__form--input input-bar\"\n    >\n\n    <span class=\"signup__form--label\">Email</span>\n    <input\n      type=\"email\"\n      required\n      ngModel\n      name=\"email\"\n      #emailInput=\"ngModel\"\n      class=\"signup__form--input input-bar\"\n    >\n\n    <span class=\"signup__form--label\">Password</span>\n    <input\n      type=\"password\"\n      required\n      minlength=\"8\"\n      ngModel\n      name=\"password\"\n      #passwordInput=\"ngModel\"\n      class=\"signup__form--input input-bar\"\n    >\n\n    <span class=\"signup__form--label\">Password confirm</span>\n    <input\n      type=\"password\"\n      required\n      minlength=\"8\"\n      ngModel\n      name=\"passwordConfirm\"\n      #passwordConfirmInput=\"ngModel\"\n      class=\"signup__form--input input-bar\"\n    >\n\n    <button\n      [disabled]=\"!signupForm.valid\"\n      class=\"signup__form--signup cta-btn\"\n    >Sign Up</button>\n\n  </form>\n\n  <span\n    *ngIf=\"isLoading\"\n    class=\"loading\"\n  >Loading...</span>\n\n</div>\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/auth/reset/reset.component.ts");








const routes = [
    {
        path: "login/:state",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: { animation: "LoginPage" }
    },
    {
        path: "signup",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        data: { animation: "SignupPage" }
    },
    {
        path: "forgot/:state",
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_6__["ForgotComponent"],
        data: { animation: "ForgotPage" }
    },
    {
        path: "reset/:token",
        component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"],
        data: { animation: "ResetPage" }
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/auth/reset/reset.component.ts");









let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"], _reset_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forgot {\n  display: grid;\n  grid-template-rows: 8vh 10vh 40vh;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  row-gap: 2rem;\n  padding: 6rem 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-width: 22em) {\n  .forgot {\n    padding: 3rem 2rem;\n  }\n}\n@media only screen and (max-height: 28em) {\n  .forgot {\n    padding-top: 2rem;\n    padding-bottom: 0rem;\n  }\n}\n.forgot__form {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n  margin-top: 5vh;\n  padding: 3rem 5rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 0.8rem;\n}\n.forgot__form--label {\n  font-size: 1.8rem;\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n.forgot__form--forgot {\n  grid-column: 2;\n  justify-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxhdXRoXFxmb3Jnb3RcXGZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RGO0FER0U7RUFkRjtJQWdCSSxrQkFBQTtFQ0RGO0FBQ0Y7QURHRTtFQW5CRjtJQXFCSSxpQkFBQTtJQUNBLG9CQUFBO0VDREY7QUFDRjtBREdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQ0FBQTtFQUNBLHFCQUFBO0FDSEo7QURLSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hOO0FETUk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggMTB2aCA0MHZoO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICByb3ctZ2FwOiAycmVtO1xyXG5cclxuICBwYWRkaW5nOiA2cmVtIDJyZW07XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMmVtKSB7XHJcbiAgICAvLzMyMFxyXG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xyXG4gICAgLy80NDYgTEFORFNDQVBFXHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDVyZW07XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuXHJcbiAgICAmLS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tZm9yZ290IHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5mb3Jnb3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAxMHZoIDQwdmg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAycmVtO1xuICBwYWRkaW5nOiA2cmVtIDJyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMmVtKSB7XG4gIC5mb3Jnb3Qge1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAuZm9yZ290IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgfVxufVxuLmZvcmdvdF9fZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIHBhZGRpbmc6IDNyZW0gNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG59XG4uZm9yZ290X19mb3JtLS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9yZ290X19mb3JtLS1mb3Jnb3Qge1xuICBncmlkLWNvbHVtbjogMjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.ts ***!
  \*************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");





let ForgotComponent = class ForgotComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.isLoading = false;
        //FETCH TOKEN FROM ROUTE
        this.route.params.subscribe(param => (this.state = param["state"]));
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => (this.isLoading = false));
    }
    onForgot(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.forgotPassword(form.value.email);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-forgot",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_4__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.component.scss */ "./src/app/auth/forgot/forgot.component.scss")).default]
    })
], ForgotComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  display: grid;\n  grid-template-rows: 8vh 10vh 10vh 30vh;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  row-gap: 2rem;\n  padding: 6rem 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-width: 22em) {\n  .login {\n    padding: 3rem 2rem;\n  }\n}\n@media only screen and (max-height: 28em) {\n  .login {\n    padding-top: 2rem;\n    padding-bottom: 0rem;\n  }\n}\n.login__signup {\n  justify-self: flex-end;\n  -webkit-transform: translateY(-1rem);\n          transform: translateY(-1rem);\n}\n.login__form {\n  display: grid;\n  grid-template-columns: 30% 70%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n  -webkit-transform: translateY(-4rem);\n          transform: translateY(-4rem);\n  padding: 3rem 5rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 0.8rem;\n}\n.login__form--label {\n  font-size: 1.8rem;\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n.login__form--forgot {\n  grid-column: 1/-1;\n  grid-row: 3;\n  justify-self: flex-start;\n  -webkit-transform: translateX(1rem);\n          transform: translateX(1rem);\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  text-align: right;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n.login__form--forgot:hover {\n  background-color: var(--color-mocha);\n}\n.login__form--login {\n  grid-column: 2;\n  grid-row: 3;\n  justify-self: flex-end;\n}\n.loading {\n  -webkit-transform: translateY(-10rem);\n          transform: translateY(-10rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9EOlxcRG9jdW1lbnRzXFxEb2N1bWVudHNcXEdpdEh1YlxcYmFyaXN0YWJvb2svc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNERjtBREdFO0VBZEY7SUFnQkksa0JBQUE7RUNERjtBQUNGO0FER0U7RUFuQkY7SUFxQkksaUJBQUE7SUFDQSxvQkFBQTtFQ0RGO0FBQ0Y7QURHRTtFQUNFLHNCQUFBO0VBRUEsb0NBQUE7VUFBQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLG9DQUFBO1VBQUEsNEJBQUE7RUFFQSxrQkFBQTtFQUVBLG9DQUFBO0VBQ0EscUJBQUE7QUNOSjtBRFFJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLGVBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEWU07RUFDRSxvQ0FBQTtBQ1ZSO0FEY0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDWk47QURpQkE7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDEwdmggMTB2aCAzMHZoO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICByb3ctZ2FwOiAycmVtO1xyXG5cclxuICBwYWRkaW5nOiA2cmVtIDJyZW07XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMmVtKSB7XHJcbiAgICAvLzMyMFxyXG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xyXG4gICAgLy80NDYgTEFORFNDQVBFXHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fc2lnbnVwIHtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcclxuICB9XHJcblxyXG4gICZfX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cmVtKTtcclxuXHJcbiAgICBwYWRkaW5nOiAzcmVtIDVyZW07XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuXHJcbiAgICAmLS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tZm9yZ290IHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgICAgZ3JpZC1yb3c6IDM7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxuXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcclxuXHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1vY2hhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLWxvZ2luIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgIGdyaWQtcm93OiAzO1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTByZW0pO1xyXG59XHJcbiIsIi5sb2dpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDEwdmggMTB2aCAzMHZoO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMnJlbTtcbiAgcGFkZGluZzogNnJlbSAycmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xuICAubG9naW4ge1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAubG9naW4ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICB9XG59XG4ubG9naW5fX3NpZ251cCB7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XG59XG4ubG9naW5fX2Zvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cmVtKTtcbiAgcGFkZGluZzogM3JlbSA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbn1cbi5sb2dpbl9fZm9ybS0tbGFiZWwge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmxvZ2luX19mb3JtLS1mb3Jnb3Qge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgZ3JpZC1yb3c6IDM7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5sb2dpbl9fZm9ybS0tZm9yZ290OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xufVxuLmxvZ2luX19mb3JtLS1sb2dpbiB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMztcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmxvYWRpbmcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcmVtKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.isLoading = false;
        //FETCH STATE FROM ROUTE LINK TO SET LOGIN GREETING FOR STARRED FEATURE
        this.route.params.subscribe(param => (this.state = param["state"]));
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => (this.isLoading = false));
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_4__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/reset/reset.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/reset/reset.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading {\n  -webkit-transform: translateY(-10rem);\n          transform: translateY(-10rem);\n}\n\n.reset {\n  display: grid;\n  grid-template-rows: 8vh 10vh 40vh;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  row-gap: 2rem;\n  padding: 6rem 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n\n@media only screen and (max-width: 22em) {\n  .reset {\n    padding: 3rem 2rem;\n  }\n}\n\n@media only screen and (max-height: 28em) {\n  .reset {\n    padding-top: 2rem;\n    padding-bottom: 6rem;\n  }\n}\n\n.reset__form {\n  display: grid;\n  grid-template-columns: 40% 60%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n  margin-top: 5vh;\n  padding: 3rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 0.8rem;\n}\n\n.reset__form--label {\n  font-size: 1.8rem;\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n\n.reset__form--reset {\n  grid-column: 2;\n  justify-self: flex-end;\n  -webkit-transform: translateX(-4rem);\n          transform: translateX(-4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC9EOlxcRG9jdW1lbnRzXFxEb2N1bWVudHNcXEdpdEh1YlxcYmFyaXN0YWJvb2svc3JjXFxhcHBcXGF1dGhcXHJlc2V0XFxyZXNldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZXNldC9yZXNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO1VBQUEsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNERjs7QURHRTtFQWRGO0lBZ0JJLGtCQUFBO0VDREY7QUFDRjs7QURHRTtFQW5CRjtJQXFCSSxpQkFBQTtJQUNBLG9CQUFBO0VDREY7QUFDRjs7QURHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFFQSxvQ0FBQTtFQUNBLHFCQUFBO0FDSEo7O0FES0k7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNITjs7QURNSTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUVBLG9DQUFBO1VBQUEsNEJBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQvcmVzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHJlbSk7XHJcbn1cclxuXHJcbi5yZXNldCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAxMHZoIDQwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHJvdy1nYXA6IDJyZW07XHJcblxyXG4gIHBhZGRpbmc6IDZyZW0gMnJlbTtcclxuXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyZW0pIHtcclxuICAgIC8vMzIwXHJcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XHJcbiAgICAvLzQ0NiBMQU5EU0NBUEVcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XHJcbiAgfVxyXG5cclxuICAmX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuXHJcbiAgICAmLS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tcmVzZXQge1xyXG4gICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHJlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5sb2FkaW5nIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHJlbSk7XG59XG5cbi5yZXNldCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDEwdmggNDB2aDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDJyZW07XG4gIHBhZGRpbmc6IDZyZW0gMnJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyZW0pIHtcbiAgLnJlc2V0IHtcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcbiAgLnJlc2V0IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgfVxufVxuLnJlc2V0X19mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgcGFkZGluZzogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG59XG4ucmVzZXRfX2Zvcm0tLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5yZXNldF9fZm9ybS0tcmVzZXQge1xuICBncmlkLWNvbHVtbjogMjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cmVtKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/reset/reset.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/reset/reset.component.ts ***!
  \***********************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let ResetComponent = class ResetComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.isLoading = false;
        //FETCH TOKEN FROM ROUTE
        this.route.params.subscribe(param => (this.token = param["token"]));
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => (this.isLoading = false));
    }
    onReset(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.resetPassword(this.token, form.value.password, form.value.passwordConfirm);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
ResetComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reset",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset.component.scss */ "./src/app/auth/reset/reset.component.scss")).default]
    })
], ResetComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup {\n  display: grid;\n  grid-template-rows: 10vh 15vh 35vh;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  padding: 6rem 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-width: 22em) {\n  .signup {\n    grid-template-rows: 10vh 18vh 35vh;\n    padding: 3rem 2rem;\n  }\n}\n@media only screen and (max-height: 28em) {\n  .signup {\n    grid-template-rows: 10vh 18vh 35vh;\n    padding-top: 0rem;\n    padding-bottom: 6rem;\n  }\n}\n.signup__welcome {\n  max-width: 60rem;\n  font-size: var(--font-medium);\n  text-align: justify;\n}\n.signup__form {\n  align-self: flex-start;\n  display: grid;\n  grid-template-columns: 31% 69%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 0.8rem;\n}\n.signup__form--label {\n  font-size: 1.8rem;\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n.signup__form--signup {\n  grid-column: 2;\n  justify-self: flex-end;\n  position: relative;\n  -webkit-transform: translateX(-4.5rem);\n          transform: translateX(-4.5rem);\n}\n.loading {\n  -webkit-transform: translateY(-6rem);\n          transform: translateY(-6rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxhdXRoXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFFQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RGO0FER0U7RUFiRjtJQWVJLGtDQUFBO0lBRUEsa0JBQUE7RUNGRjtBQUNGO0FESUU7RUFwQkY7SUFzQkksa0NBQUE7SUFFQSxpQkFBQTtJQUNBLG9CQUFBO0VDSEY7QUFDRjtBREtFO0VBQ0UsZ0JBQUE7RUFFQSw2QkFBQTtFQUNBLG1CQUFBO0FDSko7QURPRTtFQUNFLHNCQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsb0NBQUE7RUFDQSxxQkFBQTtBQ1JKO0FEVUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSTjtBRFdJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDVk47QURlQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDE1dmggMzV2aDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nOiA2cmVtIDJyZW07XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMmVtKSB7XHJcbiAgICAvLzMyMFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDE4dmggMzV2aDtcclxuXHJcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XHJcbiAgICAvLzQ0NiBMQU5EU0NBUEVcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCAxOHZoIDM1dmg7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcclxuICB9XHJcblxyXG4gICZfX3dlbGNvbWUge1xyXG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcclxuXHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICAmX19mb3JtIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzElIDY5JTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgcGFkZGluZzogM3JlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG5cclxuICAgICYtLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1zaWdudXAge1xyXG4gICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00LjVyZW0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnJlbSk7XHJcbn1cclxuIiwiLnNpZ251cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCAxNXZoIDM1dmg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnJlbSAycmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xuICAuc2lnbnVwIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMTh2aCAzNXZoO1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAuc2lnbnVwIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMTh2aCAzNXZoO1xuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICB9XG59XG4uc2lnbnVwX193ZWxjb21lIHtcbiAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc2lnbnVwX19mb3JtIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMSUgNjklO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xufVxuLnNpZ251cF9fZm9ybS0tbGFiZWwge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnNpZ251cF9fZm9ybS0tc2lnbnVwIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00LjVyZW0pO1xufVxuXG4ubG9hZGluZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnJlbSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(authStatus => (this.isLoading = false));
    }
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.signup(form.value.name, form.value.email, form.value.password, form.value.passwordConfirm);
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map