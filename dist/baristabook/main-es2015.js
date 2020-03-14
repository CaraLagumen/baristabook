(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./drinks/drinks.module": [
		"./src/app/drinks/drinks.module.ts"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-container\">\n  <app-header></app-header>\n  <app-alert></app-alert>\n\n  <div\n    [@fadeAnimation]=\"prepareRoute(outlet)\"\n    class=\"main\"\n  >\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n\n    <img\n      src=\"assets/main-bg1.svg\"\n      alt=\"\"\n      class=\"main__bg main__bg--1\"\n    >\n    <img\n      src=\"assets/main-bg2.svg\"\n      alt=\"\"\n      class=\"main__bg main__bg--2\"\n    >\n  </div>\n\n  <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert-container\">\n\n  <div\n    *ngFor=\"let alert of alerts\"\n    class=\"{{ styleClass(alert) }}\"\n  >\n    <span\n      [innerHTML]=\"alert.message\"\n      class=\"alert__message\"\n    ></span>\n\n    <a\n      (click)=\"removeAlert(alert)\"\n      class=\"alert__close pointer\"\n    >&times;</a>\n\n  </div>\n\n</div>\n\n\n<!-- UNCOMMENT FOR EASY STYLING -->\n<!-- <div\n  @fadeTrigger\n  class=\"alert-container\"\n>\n\n  <div class=\"alert alert__success\">\n    <span class=\"alert__message\">You've logged in successfully.</span>\n\n    <a\n      href=\"#\"\n      class=\"alert__close pointer\"\n    >&times;</a>\n  </div>\n\n\n  <div class=\"alert alert__info\">\n    <span class=\"alert__message\">You currently have no stars.</span>\n\n    <a\n      href=\"#\"\n      class=\"alert__close pointer\"\n    >&times;</a>\n  </div>\n\n  <div class=\"alert alert__warning\">\n    <span class=\"alert__message\">You are reaching the starred limit.</span>\n\n    <a\n      href=\"#\"\n      class=\"alert__close pointer\"\n    >&times;</a>\n  </div>\n\n  <div class=\"alert alert__danger\">\n    <span class=\"alert__message\">Your email or password was incorrect, please try again.</span>\n\n    <a\n      href=\"#\"\n      class=\"alert__close pointer\"\n    >&times;</a>\n  </div>\n\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\r\n\r\n  <div class=\"footer__carapace\">\r\n    <a\r\n      href=\"https://caralagumen.github.io/cyberbird/\"\r\n      class=\"footer__carapace-svg\"\r\n    >\r\n      <img\r\n        src=\"assets/carapace.svg\"\r\n        alt=\"Carapace logo\"\r\n      >\r\n    </a>\r\n  </div>\r\n\r\n  <ul class=\"footer__nav\">\r\n    <li class=\"footer__nav--item\">\r\n      <a\r\n        routerLink=\"/nav/share\"\r\n        class=\"footer__nav--link\"\r\n      >Share</a>\r\n    </li>\r\n    <li class=\"footer__nav--item\"><a\r\n        routerLink=\"/nav/about\"\r\n        class=\"footer__nav--link\"\r\n      >About</a>\r\n    </li>\r\n    <li class=\"footer__nav--item\"><a\r\n        routerLink=\"/nav/disclaimer\"\r\n        class=\"footer__nav--link\"\r\n      >Disclaimer</a>\r\n    </li>\r\n    <li class=\"footer__nav--item\"><a\r\n        routerLink=\"/nav/contact-us\"\r\n        class=\"footer__nav--link\"\r\n      >Contact Us</a>\r\n    </li>\r\n    <li class=\"footer__nav--item\">\r\n      <span class=\"footer__copyright\">Crafted with ♥ by Cara Lagumen</span>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- COSMETICS -->\r\n  <div class=\"footer__bg1\">&nbsp;</div>\r\n  <div class=\"footer__bg2\">&nbsp;</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n\n  <div class=\"header__logo\">\n    <a\n      routerLink=\"/\"\n      class=\"header__logo-svg box\"\n    >\n      <img\n        src=\"assets/logo.svg\"\n        alt=\"Baristabook logo\"\n      >\n    </a>\n  </div>\n\n  <div class=\"header__user\">\n\n    <div\n      *ngIf=\"!userIsAuth\"\n      class=\"header__user--container\"\n    >\n\n      <!-- PLACEHOLDER FOR GRID COLUMNS TO BE 3 -->\n      <span class=\"placeholder\"></span>\n\n      <a\n        routerLink=\"/auth/login/welcome\"\n        class=\"header__user--container-login btn-medium pointer\"\n      >\n        <span class=\"emboss\">Login</span>\n        <img\n          src=\"assets/auth-login.svg\"\n          alt=\"Login icon\"\n        >\n      </a>\n\n      <a\n        routerLink=\"/auth/signup\"\n        class=\"header__user--container-signup btn-medium pointer\"\n      >\n        <span class=\"emboss\">Sign Up</span>\n        <img\n          src=\"assets/auth-signup.svg\"\n          alt=\"Signup icon\"\n        >\n      </a>\n\n    </div>\n\n    <div\n      *ngIf=\"userIsAuth\"\n      class=\"header__user--container\"\n    >\n\n      <a\n        routerLink=\"/user/profile\"\n        class=\"header__user--container-profile btn-medium pointer\"\n      >\n        <span class=\"emboss\">Profile</span>\n        <img\n          src=\"assets/auth-profile.svg\"\n          alt=\"Profile icon\"\n        >\n      </a>\n\n      <a\n        routerLink=\"/user/starred\"\n        class=\"header__user--container-starred btn-medium pointer\"\n      >\n        <span class=\"emboss\">Starred</span>\n        <img\n          src=\"assets/auth-starred.svg\"\n          alt=\"Starred icon\"\n        >\n      </a>\n\n      <button\n        (click)=\"onLogout()\"\n        *ngIf=\"userIsAuth\"\n        class=\"header__user--container-logout btn-medium pointer\"\n      >\n        <span class=\"emboss\">Logout</span>\n        <img\n          src=\"assets/auth-logout.svg\"\n          alt=\"Logout icon\"\n        >\n      </button>\n\n    </div>\n\n    <!-- COSMETICS -->\n    <div class=\"header__bg1\">&nbsp;</div>\n    <div class=\"header__bg2\">&nbsp;</div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- SHARE -->\r\n<div\r\n  @fadeTrigger\r\n  *ngIf=\"state === 'share'\"\r\n  class=\"share\"\r\n>\r\n  <span class=\"share__title heading-big\">Share</span>\r\n\r\n  <div class=\"share__text greeting\">\r\n    Thank you for using our app! Please feel free\r\n    to share with your coworkers, managers, neighbors, and\r\n    especially your cat and dog.\r\n  </div>\r\n\r\n  <div class=\"elfsight-app-48a864ce-4cc5-4923-91d2-9f0ec1ab24ae share__btns\"></div>\r\n\r\n</div>\r\n\r\n<!-- ABOUT -->\r\n<div\r\n  @fadeTrigger\r\n  *ngIf=\"state === 'about'\"\r\n  class=\"about brief\"\r\n>\r\n\r\n  <span class=\"about__title heading-big\">About</span>\r\n\r\n  <div class=\"about__text blurb scrollable\">\r\n    Baristas often need to memorize a great deal of recipes.\r\n    With multiple updates and additions of new drinks every year,\r\n    it's no wonder that many could get confused with the proper\r\n    way to make them.\r\n    <br>\r\n    <br>\r\n    Baristabook was created to enable baristas of all levels\r\n    to craft drinks with a consistent quality. They can browse\r\n    drink info to refresh their memory or save difficult ones in\r\n    a personalized list for further study.\r\n    <br>\r\n    <br>\r\n    This simple yet functional app was developed by a barista from\r\n    the bustling strip of Las Vegas, NV in Q1 2020. And although she\r\n    enjoys making drinks and asking-flexing on her cashiers, 'Is that all\r\n    you've got?' when she runs out of said drinks... <small>(Only to be\r\n      slammed dunked and be deceased thereafter...)</small> She intended\r\n    for this app to be more than just a tool that could be used for\r\n    work - but as a ticket to even greater heights.\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- DISCLAIMER -->\r\n<div\r\n  @fadeTrigger\r\n  *ngIf=\"state === 'disclaimer'\"\r\n  class=\"disclaimer brief\"\r\n>\r\n\r\n  <span class=\"disclaimer__title heading-big\">Disclaimer</span>\r\n\r\n  <div class=\"disclaimer__text blurb scrollable\">\r\n    Baristabook is a fan-made app and is not affiliated with the\r\n    Starbucks Coffee Company or any of its subsidiaries. The information\r\n    shown on Baristabook is shared knowledge among baristas and does\r\n    not represent actual Starbucks drinks or recipes. The trademark\r\n    'Frappuccino' used in this site is for informational purposes only.\r\n    No Starbucks logos or copyrights were used in the creation of this app.\r\n    <br>\r\n    <br>\r\n    The information Baristabook provides is for general informational purposes\r\n    only. Under no circumstance should we have liability to you for loss or\r\n    damage as use of information on our site.\r\n    <br>\r\n    <br>\r\n    Special thanks to:\r\n    <ul>\r\n      <li>\r\n        <a\r\n          href=\"https://www.flaticon.com/authors/freepik\"\r\n          title=\"Freepik\"\r\n        >Freepik</a>, <a\r\n          href=\"https://www.flaticon.com/authors/good-ware\"\r\n          title=\"Good Ware\"\r\n        >Good Ware</a>, and <a\r\n          href=\"https://www.flaticon.com/authors/monkik\"\r\n          title=\"monkik\"\r\n        >monkik</a> from <a\r\n          href=\"https://www.flaticon.com/\"\r\n          title=\"Flaticon\"\r\n        >flaticon.com</a> for the drink seasons icons.\r\n      </li>\r\n\r\n      <li><a\r\n          href=\"https://www.flaticon.com/authors/freepik\"\r\n          title=\"Freepik\"\r\n        >Freepik</a> and\r\n        <a\r\n          href=\"https://www.flaticon.com/authors/pixel-perfect\"\r\n          title=\"Pixel perfect\"\r\n        >Pixel perfect</a> from <a\r\n          href=\"https://www.flaticon.com/\"\r\n          title=\"Flaticon\"\r\n        >flaticon.com</a> for the auth icons.\r\n      </li>\r\n\r\n      <li>\r\n        <a href=\"https://hugogiraudel.com/\">Hugo Giraudel</a>\r\n        for a few CSS styles from\r\n        <a href=\"https://tympanus.net/Tutorials/BasicReadyToUseCSSStyles/\">\r\n          Basic Ready to Use CSS Styles at Codrops</a>.\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- CONTACT US -->\r\n<div\r\n  @fadeTrigger\r\n  *ngIf=\"state === 'contact-us' || state === 'sent' || state === 'fail'\"\r\n  class=\"contact-us\"\r\n>\r\n\r\n  <span class=\"contact-us__title heading-big\">Contact us</span>\r\n\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"state === 'contact-us'\"\r\n    class=\"contact-us__text greeting\"\r\n  >\r\n    Have a question, suggestion, or correction?\r\n    Don’t hesitate to send us a message.\r\n    Nice messages also accepted. Thank you Sharon.</div>\r\n\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"state === 'sent'\"\r\n    class=\"contact-us__text greeting\"\r\n  >\r\n    Thank you, your message has been sent!</div>\r\n\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"state === 'fail'\"\r\n    class=\"contact-us__text greeting\"\r\n  >\r\n    Sorry, there was an error. Please try again.</div>\r\n\r\n  <form\r\n    @fadeTrigger\r\n    *ngIf=\"!isLoading && state === 'contact-us' || state === 'fail'\"\r\n    (submit)=\"onContact(contactForm)\"\r\n    #contactForm=\"ngForm\"\r\n    class=\"contact-us__form\"\r\n  >\r\n\r\n    <textarea\r\n      required\r\n      minlength=\"50\"\r\n      ngModel\r\n      name=\"message\"\r\n      #messageInput=\"ngModel\"\r\n      cols=\"30\"\r\n      rows=\"10\"\r\n      class=\"contact-us__form--message\"\r\n    ></textarea>\r\n\r\n    <span class=\"contact-us__form--label\">Email</span>\r\n    <input\r\n      type=\"email\"\r\n      required\r\n      ngModel\r\n      name=\"email\"\r\n      #emailInput=\"ngModel\"\r\n      class=\"contact-us__form--email\"\r\n    >\r\n\r\n    <button\r\n      [disabled]=\"!contactForm.valid\"\r\n      class=\"contact-us__form--send cta-btn\"\r\n    >Send</button>\r\n\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-item/drink-item.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-item/drink-item.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  @fadeTrigger\r\n  [ngClass]=\"{ 'drink-item-card__style--hot': drink.form === 'Hot',\r\n  'drink-item-card__style--iced': drink.form === 'Iced',\r\n  'drink-item-card__style--frozen': drink.form === 'Frozen'}\"\r\n  class=\"drink-item-card box-shadow-sharp\"\r\n>\r\n\r\n  <!-- STAR -->\r\n  <div class=\"drink-item-card__star\">\r\n    <button\r\n      *ngIf=\"userIsAuth\"\r\n      (click)=\"clickHandler($event)\"\r\n      class=\"drink-item-card__star--btn emboss\"\r\n    >{{ star }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!userIsAuth\"\r\n      [routerLink]=\"['/auth/login/star']\"\r\n      routerLinkActive=\"active\"\r\n      class=\"drink-item-card__star--btn emboss\"\r\n      style=\"color: var(--color-earth);\"\r\n    >★\r\n    </button>\r\n  </div>\r\n\r\n  <!-- FRONT -->\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"!previewDrink\"\r\n    class=\"drink-item-card__front\"\r\n  >\r\n\r\n    <div class=\"drink-item-card__front--misc\">\r\n      <span class=\"drink-item-card__front--misc-season\">\r\n        <span *ngIf=\"drink.season === 'Year round'\"><img\r\n            src=\"assets/season-year.svg\"\r\n            alt=\"Year icon\"\r\n            style=\"height: 2.6rem;\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Winter'\"><img\r\n            src=\"assets/season-winter.svg\"\r\n            alt=\"Winter icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Spring'\"><img\r\n            src=\"assets/season-spring.svg\"\r\n            alt=\"Spring icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Summer'\"><img\r\n            src=\"assets/season-summer.svg\"\r\n            alt=\"Summer icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Fall'\"><img\r\n            src=\"assets/season-fall.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"drink-item-card__front--code\">\r\n      <a\r\n        [routerLink]=\"['/drinks/name', drink.slug]\"\r\n        routerLinkActive=\"active\"\r\n        class=\"drink-item-card__front--code-letter\"\r\n      >{{ drink?.code }}</a>\r\n      <span class=\"drink-item-card__front--code-box\"></span>\r\n    </div>\r\n\r\n    <span class=\"drink-item-card__front--form\">{{ drink?.form }}</span>\r\n\r\n  </div>\r\n\r\n  <!-- BACK -->\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"previewDrink\"\r\n    class=\"drink-item-card__back\"\r\n  >\r\n\r\n    <span class=\"drink-item-card__back--pair\">\r\n      <span class=\"drink-item-card__back--pair-key\">Name</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.name }}</span>\r\n    </span>\r\n\r\n    <span class=\"drink-item-card__back--pair\"><span class=\"drink-item-card__back--pair-key\">Size</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.size }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.caffeine\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">{{ drink?.caffeine }}</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.caffeineCount }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.caffeine2\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">{{ drink?.caffeine2 }}</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.caffeine2Count }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.syrup\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">{{ drink?.syrup }}</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.syrupCount }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.syrup2\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">{{ drink?.syrup2 }}</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.syrup2Count }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.tea\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">{{ drink?.tea }}</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.teaCount }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.body\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Body</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.body }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.base\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">{{ drink?.base }}</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.baseCount }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.whippedCream\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Whipped Cream</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.whippedCream }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.topping\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Topping</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.topping }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.shaker\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Shaker</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.shaker }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.shakerAddition\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Shaker Addition</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.shakerAddition }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.driedFruit\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Dried Fruit</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.driedFruit }}</span>\r\n    </span>\r\n\r\n    <span\r\n      *ngIf=\"drink.custom\"\r\n      class=\"drink-item-card__back--pair\"\r\n    ><span class=\"drink-item-card__back--pair-key\">Custom</span>\r\n      <span class=\"drink-item-card__back--pair-value\">{{ drink?.custom }}</span>\r\n    </span>\r\n\r\n    <!-- BOTTOM SPACER FOR SCROLL BAR -->\r\n    <span>&nbsp;</span>\r\n\r\n  </div>\r\n\r\n  <!-- EXPAND BUTTON -->\r\n  <div class=\"drink-item-card__expand\">\r\n    <button\r\n      *ngIf=\"!previewDrink\"\r\n      (click)=\"onPreviewDrink()\"\r\n      class=\"drink-item-card__expand--btn\"\r\n    >\r\n      ▼\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"previewDrink\"\r\n      (click)=\"onPreviewDrink()\"\r\n      class=\"drink-item-card__expand--btn\"\r\n    >\r\n      ▲\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-line/drink-line.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-line/drink-line.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  @fadeTrigger\n  class=\"drink__line\"\n>\n  <table class=\"drink-line__items\">\n\n    <tr class=\"drink-line__items--short\">\n      <div class=\"drink-line__items--short-star\">\n        <button\n          *ngIf=\"userIsAuth\"\n          (click)=\"clickHandler($event)\"\n        >{{ star }}\n        </button>\n\n        <button\n          *ngIf=\"!userIsAuth\"\n          [routerLink]=\"['/auth/login/star']\"\n          routerLinkActive=\"active\"\n          style=\"color: var(--color-earth);\"\n        >★\n        </button>\n      </div>\n    </tr>\n\n    <tr\n      [routerLink]=\"['/drinks/name', drink.slug]\"\n      routerLinkActive=\"active\"\n      class=\"drink-line__items--cell pointer\"\n    >\n      <div\n        class=\"drink-line__items--cell-text scrollable\"\n        style=\"font-weight: 600;\"\n      >{{ drink?.name }}</div>\n    </tr>\n\n    <tr class=\"drink-line__items--short\">\n      <div class=\"drink-line__items--short-text scrollable\">{{ drink?.form }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.season }}</div>\n    </tr>\n    <tr class=\"drink-line__items--short\">\n      <div class=\"drink-line__items--short-text scrollable\">{{ drink?.size }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">\n        {{ drink?.caffeine }}<br *ngIf=\"drink.caffeine\">\n        {{ drink?.caffeine2 }}<br *ngIf=\"drink.caffeine2\">\n        {{ drink?.tea }}\n      </div>\n    </tr>\n    <tr class=\"drink-line__items--short mobile-hide\">\n      <div class=\"drink-line__items--short-text scrollable\">\n        {{ drink?.caffeineCount }}<br *ngIf=\"drink.caffeineCount\">\n        {{ drink?.caffeine2Count }}<br *ngIf=\"drink.caffeine2Count\">\n        {{ drink?.teaCount }}\n      </div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">\n        {{ drink?.syrup }}<br *ngIf=\"drink.syrup\">\n        {{ drink?.syrup2 }}\n      </div>\n    </tr>\n    <tr class=\"drink-line__items--short mobile-hide\">\n      <div class=\"drink-line__items--short-text scrollable\">\n        {{ drink?.syrupCount }}<br *ngIf=\"drink.syrupCount\">\n        {{ drink?.syrup2Count }}\n      </div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.body }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.base }}</div>\n    </tr>\n    <tr class=\"drink-line__items--short mobile-hide\">\n      <div class=\"drink-line__items--short-text scrollable\">{{ drink?.baseCount }}</div>\n    </tr>\n    <tr class=\"drink-line__items--short mobile-hide\">\n      <div class=\"drink-line__items--short-text scrollable\">{{ drink?.whippedCream }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.topping }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.shaker }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.shakerAddition }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.driedFruit }}</div>\n    </tr>\n    <tr class=\"drink-line__items--cell mobile-hide\">\n      <div class=\"drink-line__items--cell-text scrollable\">{{ drink?.custom }}</div>\n    </tr>\n\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"drink-list-container\">\r\n\r\n  <!-- SEARCH FEATURE -->\r\n  <div class=\"search border-inset\">\r\n\r\n    <div class=\"search__list\">\r\n      <button\r\n        (click)=\"onListView()\"\r\n        [attr.btn-content]=\"mobileView\"\r\n        class=\"search__list--btn btn-small emboss\"\r\n      >\r\n        <span>{{ view }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"search__bar\">\r\n      <form>\r\n        <label>\r\n          <input\r\n            type=\"text\"\r\n            (keyup)=\"searchTerm.next($event)\"\r\n            placeholder=\"Search\"\r\n            class=\"search__bar--input\"\r\n          >\r\n        </label>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"search__sort\">\r\n      <button\r\n        (click)=\"onSort()\"\r\n        class=\"search__sort--btn btn-small emboss\"\r\n      >\r\n        <span>Sort A - Z</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div\r\n      class=\"search__results\"\r\n      *ngIf=\"searchResults && !hidden\"\r\n    >\r\n      <button\r\n        (click)=\"onHideSearchResults()\"\r\n        *ngIf=\"searchResults.length > 0\"\r\n        class=\"search__results--close\"\r\n      >Close</button>\r\n\r\n      <ul\r\n        @fadeTrigger\r\n        *ngFor=\"let result of searchResults | slice:0:9 | removeDuplicates\"\r\n      >\r\n        <a\r\n          [routerLink]=\"['/drinks/name', result.slug]\"\r\n          class=\"search__results--item\"\r\n        >{{ result?.name }}</a>\r\n      </ul>\r\n    </div>\r\n\r\n    <div\r\n      *ngIf=\"searching\"\r\n      class=\"search__loading loading\"\r\n    ></div>\r\n\r\n  </div>\r\n\r\n  <!-- MAIN VIEW -->\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"!isLoading && !listView\"\r\n    class=\"main\"\r\n  >\r\n    <div class=\"main__cards\">\r\n\r\n      <app-drink-item\r\n        *ngFor=\"let drink of (drinks$ | async);\"\r\n        [drink]=\"drink\"\r\n        [userIsAuth]=\"userIsAuth\"\r\n        [starreds]=\"starreds\"\r\n      ></app-drink-item>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- LIST VIEW -->\r\n  <div\r\n    @fadeTrigger\r\n    *ngIf=\"!isLoading && listView\"\r\n    class=\"list\"\r\n  >\r\n\r\n    <table class=\"list__titles\">\r\n\r\n      <th class=\"list__titles--short\">Star</th>\r\n      <th class=\"list__titles--cell\">Name</th>\r\n      <th class=\"list__titles--short\">Form</th>\r\n      <th class=\"list__titles--cell\">Season</th>\r\n      <th class=\"list__titles--short\">Size</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Caffeine/Tea</th>\r\n      <th class=\"list__titles--short mobile-hide\">#</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Syrup</th>\r\n      <th class=\"list__titles--short mobile-hide\">#</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Body</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Base Style</th>\r\n      <th class=\"list__titles--short mobile-hide\">#</th>\r\n      <th class=\"list__titles--short mobile-hide\">WC</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Topping</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Shaker</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Shaker Addition</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Dried Fruit</th>\r\n      <th class=\"list__titles--cell mobile-hide\">Custom</th>\r\n\r\n    </table>\r\n\r\n    <div class=\"list__items\">\r\n\r\n      <app-drink-line\r\n        *ngFor=\"let drink of (drinks$ | async);\"\r\n        [drink]=\"drink\"\r\n        [userIsAuth]=\"userIsAuth\"\r\n        [starreds]=\"starreds\"\r\n      ></app-drink-line>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <span\r\n    *ngIf=\"isLoading\"\r\n    class=\"loading\"\r\n  >Loading...</span>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink/drink.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink/drink.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"drink-container\">\r\n  <div\r\n    [ngClass]=\"{ 'drink-card__style--hot': drink.form === 'Hot',\r\n    'drink-card__style--iced': drink.form === 'Iced',\r\n    'drink-card__style--frozen': drink.form === 'Frozen'}\"\r\n    class=\"drink-card box-shadow-sharp\"\r\n  >\r\n\r\n    <!-- STAR -->\r\n    <div class=\"drink-card__star\">\r\n      <button\r\n        *ngIf=\"userIsAuth\"\r\n        (click)=\"clickHandler($event)\"\r\n        class=\"drink-card__star--btn emboss\"\r\n      >{{ star }}\r\n      </button>\r\n\r\n      <button\r\n        *ngIf=\"!userIsAuth\"\r\n        [routerLink]=\"['/auth/login/star']\"\r\n        routerLinkActive=\"active\"\r\n        class=\"drink-card__star--btn emboss\"\r\n        style=\"color: var(--color-earth);\"\r\n      >★\r\n      </button>\r\n    </div>\r\n\r\n    <!-- CODE -->\r\n    <div class=\"drink-card__code\">\r\n      <span class=\"drink-card__code--box\"></span>\r\n      <span class=\"drink-card__code--letter\">{{ drink?.code }}</span>\r\n    </div>\r\n\r\n    <!-- MISC -->\r\n    <div class=\"drink-card__misc\">\r\n\r\n      <span class=\"drink-card__misc--season\">\r\n        <span *ngIf=\"drink.season === 'Year round'\"><img\r\n            src=\"assets/season-year.svg\"\r\n            alt=\"Fall icon\"\r\n            style=\"height: 2.6rem;\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Winter'\"><img\r\n            src=\"assets/season-winter.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Spring'\"><img\r\n            src=\"assets/season-spring.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Summer'\"><img\r\n            src=\"assets/season-summer.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"drink.season === 'Fall'\"><img\r\n            src=\"assets/season-fall.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n      </span>\r\n\r\n      <span\r\n        [ngClass]=\"{ 'drink-card__misc--form-hot': drink.form === 'Hot',\r\n      'drink-card__misc--form-iced': drink.form === 'Iced',\r\n      'drink-card__misc--form-frozen': drink.form === 'Frozen'}\"\r\n        class=\"drink-card__misc--form text-xsmall\"\r\n      >{{ drink?.form }}</span>\r\n\r\n    </div>\r\n\r\n    <!-- VALUES -->\r\n    <div class=\"scroll-container\">\r\n      <ul class=\"drink-card__value\">\r\n\r\n        <li class=\"drink-card__value--pair\">\r\n          <span class=\"drink-card__value--pair-key\">Name</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.name }}</span>\r\n        </li>\r\n\r\n        <li class=\"drink-card__value--pair\">\r\n          <span class=\"drink-card__value--pair-key\">Size</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.size[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.size[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.size[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.size[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.caffeine\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">{{ drink?.caffeine }}</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.caffeineCount[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.caffeineCount[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.caffeineCount[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.caffeineCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.caffeine2\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">{{ drink?.caffeine2 }}</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.caffeine2Count[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.caffeine2Count[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.caffeine2Count[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.caffeine2Count[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.syrup\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">{{ drink?.syrup }}</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.syrupCount[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.syrupCount[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.syrupCount[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.syrupCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.syrup2\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">{{ drink?.syrup2 }}</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.syrup2Count[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.syrup2Count[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.syrup2Count[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.syrup2Count[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.tea\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">{{ drink?.tea }}</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.teaCount[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.teaCount[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.teaCount[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.teaCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.body\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Body</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.body }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.base\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">{{ drink?.base }}</span>\r\n          <span class=\"drink-card__value--pair-value\">\r\n            <span class=\"drink-card__value--pair-box1\">{{ drink?.baseCount[0] }}</span>\r\n            <span class=\"drink-card__value--pair-box2\">{{ drink?.baseCount[1] }}</span>\r\n            <span class=\"drink-card__value--pair-box3\">{{ drink?.baseCount[2] }}</span>\r\n            <span class=\"drink-card__value--pair-box4\">{{ drink?.baseCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.whippedCream\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Whipped Cream</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.whippedCream }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.topping\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Topping</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.topping }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.shaker\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Shaker</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.shaker }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.shakerAddition\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Shaker Addition</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.shakerAddition }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.driedFruit\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Dried Fruit</span>\r\n          <span class=\"drink-card__value--pair-value\">{{ drink?.driedFruit }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"drink.custom\"\r\n          class=\"drink-card__value--pair\"\r\n        >\r\n          <span class=\"drink-card__value--pair-key\">Custom</span>\r\n          <span class=\"drink-card__value--pair-value text-xsmall\">{{ drink?.custom }}</span>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drinks.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drinks.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"drinks-container\">\r\n\r\n  <div\r\n    *ngIf=\"!isLoading\"\r\n    class=\"main__cards\"\r\n  >\r\n    <app-drink\r\n      *ngFor=\"let drink of (drinks$ | async);\"\r\n      [drink]=\"drink\"\r\n      [userIsAuth]=\"userIsAuth\"\r\n      [starreds]=\"starreds\"\r\n    ></app-drink>\r\n  </div>\r\n\r\n  <span\r\n    *ngIf=\"isLoading\"\r\n    class=\"loading\"\r\n  >Loading...</span>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/starred-list/starred-item/starred-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/starred-list/starred-item/starred-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"starred-item-container\">\r\n  <div\r\n    [ngClass]=\"{ 'starred-card__style--hot': starredDrink.form === 'Hot',\r\n    'starred-card__style--iced': starredDrink.form === 'Iced',\r\n    'starred-card__style--frozen': starredDrink.form === 'Frozen'}\"\r\n    class=\"starred-card box-shadow-sharp\"\r\n  >\r\n\r\n    <!-- STAR -->\r\n    <div class=\"starred-card__star\">\r\n      <button\r\n        (click)=\"onDeleteStarred()\"\r\n        [disabled]=\"isDisabled\"\r\n        class=\"starred-card__star--btn emboss\"\r\n      >{{ star }}</button>\r\n    </div>\r\n\r\n    <!-- CODE -->\r\n    <div class=\"starred-card__code\">\r\n      <span class=\"starred-card__code--box\"></span>\r\n      <a\r\n        [routerLink]=\"['/drinks/name', starredDrink.slug]\"\r\n        routerLinkActive=\"active\"\r\n        class=\"starred-card__code--letter\"\r\n      >{{ starredDrink?.code }}</a>\r\n    </div>\r\n\r\n    <!-- MISC -->\r\n    <div class=\"starred-card__misc\">\r\n\r\n      <span class=\"starred-card__misc--season\">\r\n        <span *ngIf=\"starredDrink.season === 'Year round'\"><img\r\n            src=\"assets/season-year.svg\"\r\n            alt=\"Fall icon\"\r\n            style=\"height: 2.6rem;\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"starredDrink.season === 'Winter'\"><img\r\n            src=\"assets/season-winter.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"starredDrink.season === 'Spring'\"><img\r\n            src=\"assets/season-spring.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"starredDrink.season === 'Summer'\"><img\r\n            src=\"assets/season-summer.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n\r\n        <span *ngIf=\"starredDrink.season === 'Fall'\"><img\r\n            src=\"assets/season-fall.svg\"\r\n            alt=\"Fall icon\"\r\n          ></span>\r\n      </span>\r\n\r\n      <span\r\n        [ngClass]=\"{ 'starred-card__misc--form-hot': starredDrink.form === 'Hot',\r\n      'starred-card__misc--form-iced': starredDrink.form === 'Iced',\r\n      'starred-card__misc--form-frozen': starredDrink.form === 'Frozen'}\"\r\n        class=\"starred-card__misc--form text-xsmall\"\r\n      >{{ starredDrink?.form }}</span>\r\n\r\n    </div>\r\n\r\n    <!-- VALUES -->\r\n    <div class=\"scroll-container\">\r\n      <ul class=\"starred-card__value\">\r\n\r\n        <li class=\"starred-card__value--pair\">\r\n          <span class=\"starred-card__value--pair-key\">Name</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.name }}</span>\r\n        </li>\r\n\r\n        <li class=\"starred-card__value--pair\">\r\n          <span class=\"starred-card__value--pair-key\">Size</span>\r\n          <span class=\"starred-card__value--pair-value\">\r\n            <span class=\"starred-card__value--pair-box1\">{{ starredDrink?.size[0] }}</span>\r\n            <span class=\"starred-card__value--pair-box2\">{{ starredDrink?.size[1] }}</span>\r\n            <span class=\"starred-card__value--pair-box3\">{{ starredDrink?.size[2] }}</span>\r\n            <span class=\"starred-card__value--pair-box4\">{{ starredDrink?.size[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.caffeine\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">{{ starredDrink?.caffeine }}</span>\r\n          <span class=\"starred-card__value--pair-value\">\r\n            <span class=\"starred-card__value--pair-box1\">{{ starredDrink?.caffeineCount[0] }}</span>\r\n            <span class=\"starred-card__value--pair-box2\">{{ starredDrink?.caffeineCount[1] }}</span>\r\n            <span class=\"starred-card__value--pair-box3\">{{ starredDrink?.caffeineCount[2] }}</span>\r\n            <span class=\"starred-card__value--pair-box4\">{{ starredDrink?.caffeineCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.syrup\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">{{ starredDrink?.syrup }}</span>\r\n          <span class=\"starred-card__value--pair-value\">\r\n            <span class=\"starred-card__value--pair-box1\">{{ starredDrink?.syrupCount[0] }}</span>\r\n            <span class=\"starred-card__value--pair-box2\">{{ starredDrink?.syrupCount[1] }}</span>\r\n            <span class=\"starred-card__value--pair-box3\">{{ starredDrink?.syrupCount[2] }}</span>\r\n            <span class=\"starred-card__value--pair-box4\">{{ starredDrink?.syrupCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.body\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Body</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.body }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.base\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">{{ starredDrink?.base }}</span>\r\n          <span class=\"starred-card__value--pair-value\">\r\n            <span class=\"starred-card__value--pair-box1\">{{ starredDrink?.baseCount[0] }}</span>\r\n            <span class=\"starred-card__value--pair-box2\">{{ starredDrink?.baseCount[1] }}</span>\r\n            <span class=\"starred-card__value--pair-box3\">{{ starredDrink?.baseCount[2] }}</span>\r\n            <span class=\"starred-card__value--pair-box4\">{{ starredDrink?.baseCount[3] }}</span>\r\n          </span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.whippedCream\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Whipped Cream</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.whippedCream }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.topping\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Topping</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.topping }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.shaker\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Shaker</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.shaker }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.shakerAddition\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Shaker Addition</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.shakerAddition }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.driedFruit\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Dried Fruit</span>\r\n          <span class=\"starred-card__value--pair-value\">{{ starredDrink?.driedFruit }}</span>\r\n        </li>\r\n\r\n        <li\r\n          *ngIf=\"starredDrink.custom\"\r\n          class=\"starred-card__value--pair\"\r\n        >\r\n          <span class=\"starred-card__value--pair-key\">Custom</span>\r\n          <span class=\"starred-card__value--pair-value text-xsmall\">{{ starredDrink?.custom }}</span>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/starred-list/starred-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/starred-list/starred-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"starred-list-container\">\r\n\r\n  <div class=\"sort border-inset\">\r\n    <button\r\n      (click)=\"onSort()\"\r\n      class=\"sort__btn btn-small emboss\"\r\n    >Sort A - Z</button>\r\n  </div>\r\n\r\n  <div\r\n    *ngIf=\"!isLoading\"\r\n    class=\"main\"\r\n  >\r\n    <div class=\"main__cards\">\r\n      <app-starred-item\r\n        *ngFor=\"let starredDrink of (starredsDrinks$ | async);\"\r\n        [starredDrink]=\"starredDrink\"\r\n        [starreds]=\"starreds\"\r\n      ></app-starred-item>\r\n    </div>\r\n  </div>\r\n\r\n  <span\r\n    *ngIf=\"isLoading\"\r\n    class=\"loading\"\r\n  >Loading...</span>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-container\">\n\n  <span class=\"title heading-big\">\n    Profile\n  </span>\n\n  <div\n    *ngIf=\"!isLoading\"\n    class=\"user\"\n  >\n\n    <span class=\"user__form--title heading-medium title1\">Info</span>\n\n    <form\n      (submit)=\"onUpdateUser()\"\n      [formGroup]=\"updateUserForm\"\n      *ngIf=\"!isLoading\"\n      class=\"user__form form1\"\n    >\n\n      <span class=\"user__form--label\">Name</span>\n      <input\n        type=\"text\"\n        formControlName=\"name\"\n        placeholder=\"{{ user?.name }}\"\n        class=\"user__form--input input-bar\"\n      >\n\n      <span class=\"user__form--label\">Email</span>\n      <input\n        type=\"email\"\n        formControlName=\"email\"\n        placeholder=\"{{ user?.email }}\"\n        class=\"user__form--input input-bar\"\n      >\n\n      <span class=\"user__form--label\">Location</span>\n      <input\n        type=\"text\"\n        minlength=\"5\"\n        formControlName=\"location\"\n        placeholder=\"{{ user?.location }}\"\n        class=\"user__form--input input-bar\"\n      >\n\n      <button\n        [disabled]=\"!updateUserForm.valid\"\n        type=\"submit\"\n        class=\"user__form--submit cta-btn button-left\"\n      >Update Info</button>\n    </form>\n\n    <span class=\"user__form--title heading-medium title2\">Change Password</span>\n\n    <form\n      (submit)=\"onChangePassword(changePasswordForm)\"\n      #changePasswordForm=\"ngForm\"\n      class=\"user__form form2\"\n    >\n\n      <span class=\"user__form--label\">Current password</span>\n      <input\n        type=\"password\"\n        required\n        minlength=\"8\"\n        ngModel\n        name=\"passwordCurrent\"\n        #passwordCurrentInput=\"ngModel\"\n        class=\"user__form--input input-bar\"\n      >\n\n      <span class=\"user__form--label\">New Password</span>\n      <input\n        type=\"password\"\n        required\n        minlength=\"8\"\n        ngModel\n        name=\"password\"\n        #passwordInput=\"ngModel\"\n        class=\"user__form--input input-bar\"\n      >\n\n      <span class=\"user__form--label\">New Password Confirm</span>\n      <input\n        type=\"password\"\n        required\n        minlength=\"8\"\n        ngModel\n        name=\"passwordConfirm\"\n        #passwordConfirmInput=\"ngModel\"\n        class=\"user__form--input input-bar\"\n      >\n\n      <button\n        [disabled]=\"!changePasswordForm.valid\"\n        class=\"user__form--submit cta-btn\"\n      >Update Password</button>\n\n    </form>\n\n  </div>\n\n  <span\n    *ngIf=\"isLoading\"\n    class=\"loading\"\n  >Loading...</span>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/zone.js/dist/zone-evergreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zone$1 = (function (global) {
    const performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    const checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    class Zone {
        constructor(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        static assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        }
        static get root() {
            let zone = Zone.current;
            while (zone.parent) {
                zone = zone.parent;
            }
            return zone;
        }
        static get current() {
            return _currentZoneFrame.zone;
        }
        static get currentTask() {
            return _currentTask;
        }
        static __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                const perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        }
        get parent() {
            return this._parent;
        }
        get name() {
            return this._name;
        }
        get(key) {
            const zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        }
        getZoneWith(key) {
            let current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        }
        fork(zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        }
        wrap(callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            const _callback = this._zoneDelegate.intercept(this, callback, source);
            const zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        }
        run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runGuarded(callback, applyThis = null, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            const reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            const previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        }
        scheduleTask(task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                let newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            const zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        }
        scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        }
        scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        }
        scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        }
        cancelTask(task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        }
        _updateTaskCount(task, count) {
            const zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (let i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        }
    }
    Zone.__symbol__ = __symbol__;
    const DELEGATE_ZS = {
        name: '',
        onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
        onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
        onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
        onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
    };
    class ZoneDelegate {
        constructor(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        }
        intercept(targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        }
        invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        }
        handleError(targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        }
        scheduleTask(targetZone, task) {
            let returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        }
        invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        }
        cancelTask(targetZone, task) {
            let value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        }
        hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        }
        _updateTaskCount(type, count) {
            const counts = this._taskCounts;
            const prev = counts[type];
            const next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                const isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        }
    }
    class ZoneTask {
        constructor(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            const self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        static invokeTask(task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        }
        get zone() {
            return this._zone;
        }
        get state() {
            return this._state;
        }
        cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
        }
        _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
            }
        }
        toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        }
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const symbolSetTimeout = __symbol__('setTimeout');
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    let _microTaskQueue = [];
    let _isDrainingMicrotaskQueue = false;
    let nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                const queue = _microTaskQueue;
                _microTaskQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    const task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const NO_ZONE = { name: 'NO ZONE' };
    const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    const patches = {};
    const _api = {
        symbol: __symbol__,
        currentZoneFrame: () => _currentZoneFrame,
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
        patchEventTarget: () => [],
        patchOnProperties: noop,
        patchMethod: () => noop,
        bindArguments: () => [],
        patchThen: () => noop,
        patchMacroTask: () => noop,
        setNativePromise: (NativePromise) => {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: () => noop,
        isIEOrEdge: () => false,
        getGlobalObjects: () => undefined,
        ObjectDefineProperty: () => noop,
        ObjectGetOwnPropertyDescriptor: () => undefined,
        ObjectCreate: () => undefined,
        ArraySlice: () => [],
        patchClass: () => noop,
        wrapWithCurrentZone: () => noop,
        filterProperties: () => [],
        attachOriginToPatched: () => noop,
        _redefineProperty: () => noop,
        patchCallbacks: () => noop
    };
    let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    let _currentTask = null;
    let _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            const className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    const creationTrace = '__creationTrace__';
    api.onUnhandledError = (e) => {
        if (api.showUncaughtError()) {
            const rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = () => {
        while (_uncaughtPromiseErrors.length) {
            while (_uncaughtPromiseErrors.length) {
                const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(() => {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            }
        }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__('state');
    const symbolValue = __symbol__('value');
    const symbolFinally = __symbol__('finally');
    const symbolParentPromiseValue = __symbol__('parentPromiseValue');
    const symbolParentPromiseState = __symbol__('parentPromiseState');
    const source = 'Promise.then';
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return (v) => {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    const once = function () {
        let wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    const TYPE_ERROR = 'Promise resolved with itself';
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        const onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            let then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(() => {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(() => {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                const queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    const trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (let i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        const error = err;
                        error.rejection = value;
                        error.promise = promise;
                        error.zone = Zone.current;
                        error.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                const handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        const promiseState = promise[symbolState];
        const delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, () => {
            try {
                const parentPromiseValue = promise[symbolValue];
                const isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    class ZoneAwarePromise {
        constructor(executor) {
            const promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        static toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
        }
        static resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
        }
        static reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
        }
        static race(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        }
        static all(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            let unresolvedCount = 2;
            let valueIndex = 0;
            const resolvedValues = [];
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                const curValueIndex = valueIndex;
                value.then((value) => {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        }
        get [Symbol.toStringTag]() {
            return 'Promise';
        }
        then(onFulfilled, onRejected) {
            const chainPromise = new this.constructor(null);
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        }
        catch(onRejected) {
            return this.then(null, onRejected);
        }
        finally(onFinally) {
            const chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    const NativePromise = global[symbolPromise] = global['Promise'];
    const ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    let desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        const proto = Ctor.prototype;
        const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        const originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            const wrapped = new ZoneAwarePromise((resolve, reject) => {
                originalThen.call(this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            let resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            let ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        const fetch = global['fetch'];
        if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** __zone_symbol__ string const */
const ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
const NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    const source = prototype.constructor['name'];
    for (let i = 0; i < fnNames.length; i++) {
        const name = fnNames[i];
        const delegate = prototype[name];
        if (delegate) {
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
            if (!isPropertyWritable(prototypeDesc)) {
                continue;
            }
            prototype[name] = ((delegate) => {
                const patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames = {};
const wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    let eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    const target = this || event.target || _global;
    const listener = target[eventNameSymbol];
    let result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        const errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    const originalDescGet = desc.get;
    const originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    const eventName = prop.substr(2);
    let eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        let previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        const listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            let value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (let i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        const onProperties = [];
        for (const prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (let j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    const OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        const a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    const instance = new OriginalClass(function () { });
    let prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    const symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach((symbol) => {
        const desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
let shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    let proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    const delegateName = zoneSymbol(name);
    let delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            const patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    let setNative = null;
    function scheduleTask(task) {
        const data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
        const meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', (global) => {
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    const PROMISE_SYMBOL = zoneSymbol('Promise');
    const ERROR_SYMBOL = zoneSymbol('Error');
    const newFunctionToString = function toString() {
        if (typeof this === 'function') {
            const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                const nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                const nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        const options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
const zoneSymbolEventNames$1 = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
const IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    const PREPEND_EVENT_LISTENER = 'prependListener';
    const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    const invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        const delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = (event) => delegate.handleEvent(event);
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        const options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    const globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global;
        const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    const globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global;
        const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        let useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        const validateHandler = patchOptions && patchOptions.vh;
        let checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        let returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        let proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        const eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        const taskData = {};
        const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        let nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        const customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        const customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        const customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        const compareTaskCallbackVsDelegate = function (task, delegate) {
            const typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        const blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
            return function () {
                const target = this || _global;
                const eventName = arguments[0];
                let delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                let isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                const options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (let i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                let capture;
                let once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                const zone = Zone.current;
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                let symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                let existingTasks = target[symbolEventName];
                let isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                let source;
                const constructorName = target.constructor['name'];
                const targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            const options = arguments[2];
            let capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            const delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            const symbolEventNames = zoneSymbolEventNames$1[eventName];
            let symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            const existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (let i = 0; i < existingTasks.length; i++) {
                    const existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            const listeners = [];
            const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (let i = 0; i < tasks.length; i++) {
                const task = tasks[i];
                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            if (!eventName) {
                const keys = Object.keys(target);
                for (let i = 0; i < keys.length; i++) {
                    const prop = keys[i];
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    const symbolEventName = symbolEventNames[FALSE_STR];
                    const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    const tasks = target[symbolEventName];
                    const captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        const removeTasks = tasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        const removeTasks = captureTasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    let results = [];
    for (let i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    const foundTasks = [];
    for (let prop in target) {
        const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        let evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            const tasks = target[prop];
            if (tasks) {
                for (let i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    const Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    const symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    const nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                const source = `${targetName}.${method}::` + callback;
                const prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
const zoneSymbol$1 = Zone.__symbol__;
const _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
const _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
const _create = Object.create;
const unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        const originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        const desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    const originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                let descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log(`Attempting to configure '${prop}' with descriptor '${descJson}' on object '${obj}' and got error, giving up: ${error}`);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
const globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
const documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
const windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
const htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
const mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
const ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
const webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
const formEventNames = ['autocomplete', 'autocompleteerror'];
const detailEventNames = ['toggle'];
const frameEventNames = ['load'];
const frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
const marqueeEventNames = ['bounce', 'finish', 'start'];
const XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
const IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
const websocketEventNames = ['close', 'error', 'open', 'message'];
const workerEventNames = ['error', 'message'];
const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    const tip = ignoreProperties.filter(ip => ip.target === target);
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    const targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    const supportsWebSocket = typeof WebSocket !== 'undefined';
    const ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        const internalWindow = window;
        const ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        const HTMLMarqueeElement = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }
        const Worker = internalWindow['Worker'];
        if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
    }
    const XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    const XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
        globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames,
        isBrowser,
        isMix,
        isNode,
        TRUE_STR,
        FALSE_STR,
        ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR
    });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    let setNative = null;
    let clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    const tasksByHandleId = {};
    function scheduleTask(task) {
        const data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, (delegate) => function (self, args) {
            if (typeof args[0] === 'function') {
                const options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                const handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        });
    clearNative =
        patchMethod(window, cancelName, (delegate) => function (self, args) {
            const id = args[0];
            let task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    const { isBrowser, isMix } = api.getGlobalObjects();
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (let i = 0; i < eventNames.length; i++) {
        const eventName = eventNames[i];
        const falseEventName = eventName + FALSE_STR;
        const trueEventName = eventName + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    const EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', (global) => {
    const legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', (global) => {
    const set = 'set';
    const clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', (global) => {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
    const blockingMethods = ['alert', 'prompt', 'confirm'];
    for (let i = 0; i < blockingMethods.length; i++) {
        const name = blockingMethods[i];
        patchMethod(global, name, (delegate, symbol, name) => {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', (global, Zone, api) => {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    const XHR_TASK = zoneSymbol('xhrTask');
    const XHR_SYNC = zoneSymbol('xhrSync');
    const XHR_LISTENER = zoneSymbol('xhrListener');
    const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    const XHR_URL = zoneSymbol('xhrURL');
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        const XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        const READY_STATE_CHANGE = 'readystatechange';
        const SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            const data = task.data;
            const target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            const listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            const newListener = target[XHR_LISTENER] = () => {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        const loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            const oriInvoke = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                const loadTasks = target['__zone_symbol__loadfalse'];
                                for (let i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            const storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            const data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        });
        const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        });
        const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
            const task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        });
    }
});
Zone.__load_patch('geolocation', (global) => {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            const eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(eventTask => {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");





const routes = [
    { path: "", redirectTo: "/drinks", pathMatch: "full" },
    {
        path: "drinks",
        loadChildren: "./drinks/drinks.module#DrinksModule",
        data: { animation: "DrinksPage" }
    },
    {
        path: "auth",
        loadChildren: "./auth/auth.module#AuthModule",
        data: { animation: "AuthPage" }
    },
    {
        path: "user",
        loadChildren: "./user/user.module#UserModule",
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { animation: "UserPage" }
    },
    {
        path: "nav/:link",
        component: _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        data: { animation: "NavPage" }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  display: grid;\n  grid-template-rows: [header-start] 17vh [header-end main-start] 1fr [main-end footer-start] 15vh [footer-end];\n  height: 100vh;\n}\n\napp-header {\n  grid-row: header-start/header-end;\n  align-self: flex-end;\n}\n\n.main {\n  grid-row: main-start/main-end;\n  position: relative;\n}\n\n.main__bg {\n  position: fixed;\n  bottom: 0;\n  z-index: -1000;\n  opacity: 0.05;\n}\n\n.main__bg--1 {\n  left: 0;\n}\n\n.main__bg--2 {\n  right: 0;\n}\n\napp-footer {\n  grid-row: footer-start/footer-end;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2R0FDRTtFQUlGLGFBQUE7QUNIRjs7QURNQTtFQUNFLGlDQUFBO0VBRUEsb0JBQUE7QUNKRjs7QURPQTtFQUNFLDZCQUFBO0VBRUEsa0JBQUE7QUNMRjs7QURPRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNOSjs7QURRSTtFQUNFLE9BQUE7QUNOTjs7QURTSTtFQUNFLFFBQUE7QUNQTjs7QURZQTtFQUNFLGlDQUFBO0VBRUEsb0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czpcclxuICAgIFtoZWFkZXItc3RhcnRdIDE3dmhcclxuICAgIFtoZWFkZXItZW5kIG1haW4tc3RhcnRdIDFmclxyXG4gICAgW21haW4tZW5kIGZvb3Rlci1zdGFydF0gMTV2aFxyXG4gICAgW2Zvb3Rlci1lbmRdO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmFwcC1oZWFkZXIge1xyXG4gIGdyaWQtcm93OiBoZWFkZXItc3RhcnQgLyBoZWFkZXItZW5kO1xyXG5cclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGdyaWQtcm93OiBtYWluLXN0YXJ0IC8gbWFpbi1lbmQ7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fYmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogLTEwMDA7XHJcblxyXG4gICAgb3BhY2l0eTogMC4wNTtcclxuXHJcbiAgICAmLS0xIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLS0yIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtZm9vdGVyIHtcclxuICBncmlkLXJvdzogZm9vdGVyLXN0YXJ0IC8gZm9vdGVyLWVuZDtcclxuXHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuIiwiLmFwcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IFtoZWFkZXItc3RhcnRdIDE3dmggW2hlYWRlci1lbmQgbWFpbi1zdGFydF0gMWZyIFttYWluLWVuZCBmb290ZXItc3RhcnRdIDE1dmggW2Zvb3Rlci1lbmRdO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hcHAtaGVhZGVyIHtcbiAgZ3JpZC1yb3c6IGhlYWRlci1zdGFydC9oZWFkZXItZW5kO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLm1haW4ge1xuICBncmlkLXJvdzogbWFpbi1zdGFydC9tYWluLWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX2JnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IC0xMDAwO1xuICBvcGFjaXR5OiAwLjA1O1xufVxuLm1haW5fX2JnLS0xIHtcbiAgbGVmdDogMDtcbn1cbi5tYWluX19iZy0tMiB7XG4gIHJpZ2h0OiAwO1xufVxuXG5hcHAtZm9vdGVyIHtcbiAgZ3JpZC1yb3c6IGZvb3Rlci1zdGFydC9mb290ZXItZW5kO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/route-animations */ "./src/app/shared/route-animations.ts");




let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.autoLogin();
    }
    prepareRoute(outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData["animation"]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__["fade"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _drinks_drinks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drinks/drinks.module */ "./src/app/drinks/drinks.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__["NavComponent"],
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _drinks_drinks_module__WEBPACK_IMPORTED_MODULE_8__["DrinksModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        exports: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"]],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    //ATTACH HEADER TO OUTGOING REQ
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authToken}`)
        });
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/auth/login']);
        }
        return isAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/alert/alert.service */ "./src/app/components/alert/alert.service.ts");







const ROOT_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/users`;
let AuthService = class AuthService {
    constructor(http, router, alertService) {
        this.http = http;
        this.router = router;
        this.alertService = alertService;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isAuth = false;
    }
    //FUNCTIONS----------------------------------------------------------
    signup(name, email, password, passwordConfirm) {
        const authData = { name, email, password, passwordConfirm };
        this.http.post(`${ROOT_URL}/signup`, authData).subscribe(() => {
            this.alertService.success("Welcome, you signed up successfully.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.login(email, password);
        }, err => {
            this.alertService.error("Unable to sign you up with that info, please try again.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.authStatusListener.next(false);
        });
    }
    autoLogin() {
        //STOP IF NO AUTH DATA
        const authData = this.getAuthData();
        if (!authData) {
            return;
        }
        const now = new Date();
        const expiresIn = authData.expirationDate.getTime() - now.getTime();
        //VERIFY NOT EXPIRED & LOGIN
        if (expiresIn > 0) {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth = true;
            this.setAuthTimer(expiresIn / 1000);
            this.alertService.info("You've been logged in automatically.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.authStatusListener.next(true);
        }
    }
    login(email, password) {
        const authData = { email, password };
        this.http
            .post(`${ROOT_URL}/login`, authData)
            .subscribe(res => {
            //FETCH TOKEN FROM RESPONSE & SET
            const token = res.token;
            this.token = token;
            //RELATE TOKEN EXPIRATION FROM BACKEND TO UI
            if (token) {
                const expiresInDuration = res.expiresIn;
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                //START TIMER & SAVE AUTH
                this.setAuthTimer(expiresInDuration);
                this.userId = res.user._id;
                this.saveAuthData(token, this.userId, expirationDate);
                //EXPOSE USER IS LOGGED
                this.isAuth = true;
                this.alertService.success("You logged in successfully.", {
                    autoClose: true,
                    keepAfterRouteChange: true
                });
                //DISPLAY IN UI USER IS LOGGED
                this.authStatusListener.next(true);
                this.router.navigate(["/"]);
            }
        }, err => {
            this.authStatusListener.next(false);
            this.alertService.error("Your email or password is incorrect, please try again.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
        });
    }
    logout() {
        //RESET ALL
        this.token = null;
        this.userId = null;
        this.isAuth = false;
        this.alertService.warn("You logged out successfully.", {
            autoClose: true,
            keepAfterRouteChange: true
        });
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    }
    changePassword(passwordCurrent, password, passwordConfirm) {
        const authUpdateData = {
            passwordCurrent,
            password,
            passwordConfirm
        };
        this.http
            .patch(`${ROOT_URL}/updateMyPassword`, authUpdateData)
            .subscribe(res => {
            //FETCH TOKEN FROM RESPONSE & SET
            const token = res.token;
            this.token = token;
            //RELATE TOKEN EXPIRATION FROM BACKEND TO UI
            if (token) {
                const expiresInDuration = res.expiresIn;
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                //START TIMER & SAVE AUTH
                this.setAuthTimer(expiresInDuration);
                this.userId = res.user._id;
                this.saveAuthData(token, this.userId, expirationDate);
                //EXPOSE USER IS LOGGED
                this.isAuth = true;
                this.alertService.success("You successfully changed your password. Your page will reload in 8 seconds.", {
                    autoClose: true,
                    keepAfterRouteChange: true
                });
                //DISPLAY IN UI USER IS LOGGED
                this.authStatusListener.next(true);
                //DELAY RELOAD FOR ALERT
                setTimeout(() => {
                    location.reload();
                }, 8000);
            }
        }, err => {
            this.alertService.error("Your passwords don't match.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.authStatusListener.next(false);
        });
    }
    forgotPassword(email) {
        this.http.post(`${ROOT_URL}/forgotPassword`, { email }).subscribe(() => {
            this.alertService.success("Your email has been sent.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.router.navigate(["/auth/forgot/sent"]);
        }, err => {
            this.alertService.error("That email does not exist in our server.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.authStatusListener.next(false);
        });
    }
    resetPassword(token, password, passwordConfirm) {
        const authResetData = {
            password,
            passwordConfirm
        };
        this.http
            .patch(`${ROOT_URL}/resetPassword/${token}`, authResetData)
            .subscribe(res => {
            //FETCH TOKEN FROM RESPONSE & SET
            const token = res.token;
            this.token = token;
            //RELATE TOKEN EXPIRATION FROM BACKEND TO UI
            if (token) {
                const expiresInDuration = res.expiresIn;
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                //START TIMER & SAVE AUTH
                this.setAuthTimer(expiresInDuration);
                this.userId = res.user._id;
                this.saveAuthData(token, this.userId, expirationDate);
                //EXPOSE USER IS LOGGED
                this.isAuth = true;
                this.alertService.success("You successfully reset your password.", {
                    autoClose: true,
                    keepAfterRouteChange: true
                });
                //DISPLAY IN UI USER IS LOGGED
                this.authStatusListener.next(true);
                this.router.navigate(["/"]);
            }
        }, err => {
            this.alertService.error("Your passwords don't match.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.authStatusListener.next(false);
        });
    }
    //TOOLS----------------------------------------------------------
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate || !userId) {
            return;
        }
        return {
            token,
            userId,
            expirationDate: new Date(expirationDate)
        };
    }
    saveAuthData(token, userId, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expiration", expirationDate.toISOString());
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("expiration");
    }
    //GETTERS----------------------------------------------------------
    getToken() {
        return this.token;
    }
    getUserId() {
        return this.userId;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getIsAuth() {
        return this.isAuth;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-container {\n  position: fixed;\n  top: 4vh;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 9999;\n}\n\n.alert {\n  display: grid;\n  grid-template-columns: 90% 10%;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center;\n  width: 30rem;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0.5rem;\n  border-radius: 0.8rem;\n  opacity: 0.95;\n  font-size: var(--font-xsmall);\n  text-align: center;\n}\n\n.alert__success {\n  background-color: #dff0d8;\n  color: #509468;\n}\n\n.alert__info {\n  background-color: #d1ecf1;\n  color: #31708f;\n}\n\n.alert__warning {\n  background-color: #fff3cd;\n  color: #946d3b;\n}\n\n.alert__danger {\n  background-color: #f8d7da;\n  color: #a94442;\n}\n\n.alert__close {\n  font-size: var(--font-small);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9EOlxcRG9jdW1lbnRzXFxEb2N1bWVudHNcXEdpdEh1YlxcYmFyaXN0YWJvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJRTtFQUNFLHlCQUFBO0VBRUEsY0FBQTtBQ0hKOztBRE1FO0VBQ0UseUJBQUE7RUFFQSxjQUFBO0FDTEo7O0FEUUU7RUFDRSx5QkFBQTtFQUVBLGNBQUE7QUNQSjs7QURVRTtFQUNFLHlCQUFBO0VBRUEsY0FBQTtBQ1RKOztBRFlFO0VBQ0UsNEJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0dmg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICB3aWR0aDogMzByZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICBvcGFjaXR5OiAwLjk1O1xyXG5cclxuICBmb250LXNpemU6IHZhcigtLWZvbnQteHNtYWxsKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICZfX3N1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcclxuXHJcbiAgICBjb2xvcjogIzUwOTQ2ODtcclxuICB9XHJcblxyXG4gICZfX2luZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuXHJcbiAgICBjb2xvcjogIzMxNzA4ZjtcclxuICB9XHJcblxyXG4gICZfX3dhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcclxuXHJcbiAgICBjb2xvcjogIzk0NmQzYjtcclxuICB9XHJcblxyXG4gICZfX2RhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG5cclxuICAgIGNvbG9yOiAjYTk0NDQyO1xyXG4gIH1cclxuXHJcbiAgJl9fY2xvc2Uge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICB9XHJcbn1cclxuIiwiLmFsZXJ0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0dmg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uYWxlcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgb3BhY2l0eTogMC45NTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXhzbWFsbCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGVydF9fc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG4gIGNvbG9yOiAjNTA5NDY4O1xufVxuLmFsZXJ0X19pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcbiAgY29sb3I6ICMzMTcwOGY7XG59XG4uYWxlcnRfX3dhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICBjb2xvcjogIzk0NmQzYjtcbn1cbi5hbGVydF9fZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgY29sb3I6ICNhOTQ0NDI7XG59XG4uYWxlcnRfX2Nsb3NlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.model */ "./src/app/components/alert/alert.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "./src/app/components/alert/alert.service.ts");






let AlertComponent = class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = "default-alert";
        this.alerts = [];
    }
    ngOnInit() {
        //LISTEN FOR NEW ALERTS
        this.alertListenerSub = this.alertService
            .onAlert(this.id)
            .subscribe(alert => {
            //CLEAR ALERTS IF THERE IS NONE
            if (!alert.message) {
                //FILTER OUT ALERTS WITH keepAfterRouteChange FLAG
                this.alerts = this.alerts.filter(el => el.keepAfterRouteChange);
                //REMOVE keepAfterRouteChange FLAG ON REMAINDER
                this.alerts.forEach(el => delete el.keepAfterRouteChange);
                return;
            }
            //ADD ALERT TO ARR
            this.alerts.push(alert);
            //AUTO CLOSE IF AN OPTION
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 8000);
            }
        });
        //CLEAR ALERTS ON ROUTE CHANGE
        this.routeSub = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(el => el !== alert);
    }
    styleClass(alert) {
        if (!alert)
            return;
        const classes = ["alert"];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success]: "alert__success",
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info]: "alert__info",
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning]: "alert__warning",
            [_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error]: "alert__danger"
        };
        classes.push(alertTypeClass[alert.type]);
        return classes.join(" ");
    }
    ngOnDestroy() {
        this.alertListenerSub.unsubscribe();
        this.routeSub.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "id", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-alert",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/components/alert/alert.model.ts":
/*!*************************************************!*\
  !*** ./src/app/components/alert/alert.model.ts ***!
  \*************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Info"] = 1] = "Info";
    AlertType[AlertType["Warning"] = 2] = "Warning";
    AlertType[AlertType["Error"] = 3] = "Error";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/components/alert/alert.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/alert/alert.service.ts ***!
  \***************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.model */ "./src/app/components/alert/alert.model.ts");





let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = "default-alert";
    }
    //ENABLE SUBSCRIPTION TO ALERTS OBSERVABLE
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(el => el && el.id === id));
    }
    //MAIN METHOD
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    clear(id = this.defaultId) {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id }));
    }
    //ALTER MAIN METHOD
    success(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({ type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message }, options)));
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({ type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message }, options)));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({ type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message }, options)));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({ type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message }, options)));
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AlertService);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  display: grid;\n  grid-template-columns: [cara-start] 30vw [cara-end] 1fr [nav-start] 30vw [nav-end];\n  color: var(--color-white);\n}\n@media only screen and (max-height: 28em) {\n  .footer {\n    grid-template-columns: [cara-start] 30vw [cara-end] 1fr [nav-start] 40vw [nav-end];\n  }\n}\n.footer__carapace {\n  grid-column: cara-start/cara-end;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 300;\n  padding-left: 1rem;\n  -webkit-transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n.footer__carapace img {\n  height: 4vh;\n}\n@media only screen and (max-height: 26em) {\n  .footer__carapace img {\n    height: 8vh;\n  }\n}\n.footer__carapace:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n.footer__nav {\n  grid-column: nav-start/nav-end;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 300;\n  padding-bottom: 2.5rem;\n  padding-right: 1rem;\n  text-align: end;\n}\n@media only screen and (max-height: 28em) {\n  .footer__nav {\n    display: inline;\n    padding-right: 0;\n  }\n}\n@media only screen and (max-height: 28em) {\n  .footer__nav--item {\n    display: inline;\n    padding-left: 1rem;\n  }\n}\n.footer__nav--link {\n  font-size: var(--font-small);\n  font-weight: 300;\n  text-transform: lowercase;\n  -webkit-transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n@media only screen and (max-height: 45em) {\n  .footer__nav--link {\n    line-height: 1;\n  }\n}\n@media only screen and (min-width: 215em) and (min-height: 90em) {\n  .footer__nav--link {\n    font-size: 120%;\n  }\n}\n@media only screen and (min-width: 215em) and (min-height: 135em) {\n  .footer__nav--link {\n    font-size: 150%;\n  }\n}\n.footer__nav--link:hover {\n  font-weight: 600;\n}\n.footer__copyright {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 300;\n  width: 20rem;\n  padding-bottom: 0.5rem;\n  padding-right: 1rem;\n  text-transform: uppercase;\n  text-align: end;\n}\n.footer__bg1 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 15vh;\n  width: 100vw;\n  background-color: var(--color-earth);\n  -webkit-clip-path: polygon(0% 70%, 100% 0, 100% 100%, 0 100%);\n          clip-path: polygon(0% 70%, 100% 0, 100% 100%, 0 100%);\n  z-index: 200;\n}\n.footer__bg2 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 15vh;\n  width: 100vw;\n  background-color: var(--color-mocha);\n  -webkit-clip-path: polygon(0% 30%, 100% 70%, 100% 100%, 0 100%);\n          clip-path: polygon(0% 30%, 100% 70%, 100% 100%, 0 100%);\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtGQUNFO0VBS0YseUJBQUE7QUNKRjtBRE1FO0VBVkY7SUFZSSxrRkFDRTtFQ0xKO0FBQ0Y7QURVRTtFQUNFLGdDQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGlFQUFBO0VBQUEseURBQUE7QUNYSjtBRGFJO0VBQ0UsV0FBQTtBQ1hOO0FEYU07RUFIRjtJQUtJLFdBQUE7RUNYTjtBQUNGO0FEY0k7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDWk47QURnQkU7RUFDRSw4QkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7QUNqQko7QURtQkk7RUFiRjtJQWVJLGVBQUE7SUFDQSxnQkFBQTtFQ2pCSjtBQUNGO0FEb0JNO0VBREY7SUFHSSxlQUFBO0lBQ0Esa0JBQUE7RUNsQk47QUFDRjtBRHFCSTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLGlFQUFBO0VBQUEseURBQUE7QUNwQk47QURzQk07RUFQRjtJQVNJLGNBQUE7RUNwQk47QUFDRjtBRHNCTTtFQVpGO0lBY0ksZUFBQTtFQ3BCTjtBQUNGO0FEc0JNO0VBakJGO0lBbUJJLGVBQUE7RUNwQk47QUFDRjtBRHNCTTtFQUNFLGdCQUFBO0FDcEJSO0FEeUJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtBQzFCSjtBRDZCRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkRBQUE7VUFBQSxxREFBQTtFQUVBLFlBQUE7QUM3Qko7QURnQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLCtEQUFBO1VBQUEsdURBQUE7RUFFQSxZQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6XHJcbiAgICBbY2FyYS1zdGFydF0gMzB2d1xyXG4gICAgW2NhcmEtZW5kXSAxZnJcclxuICAgIFtuYXYtc3RhcnRdIDMwdndcclxuICAgIFtuYXYtZW5kXTtcclxuXHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xyXG4gICAgLy80NDYgTEFORFNDQVBFXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6XHJcbiAgICAgIFtjYXJhLXN0YXJ0XSAzMHZ3XHJcbiAgICAgIFtjYXJhLWVuZF0gMWZyXHJcbiAgICAgIFtuYXYtc3RhcnRdIDQwdndcclxuICAgICAgW25hdi1lbmRdO1xyXG4gIH1cclxuXHJcbiAgJl9fY2FyYXBhY2Uge1xyXG4gICAgZ3JpZC1jb2x1bW46IGNhcmEtc3RhcnQgLyBjYXJhLWVuZDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMzAwO1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43MSwgMC4wMSwgMC4wOSwgMS41MSk7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiA0dmg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyNmVtKSB7XHJcbiAgICAgICAgLy80MTQgTEFORFNDQVBFXHJcbiAgICAgICAgaGVpZ2h0OiA4dmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX25hdiB7XHJcbiAgICBncmlkLWNvbHVtbjogbmF2LXN0YXJ0IC8gbmF2LWVuZDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xyXG4gICAgICAvLzQ0NiBMQU5EU0NBUEVcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWl0ZW0ge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XHJcbiAgICAgICAgLy80NDYgTEFORFNDQVBFXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDVlbSkge1xyXG4gICAgICAgIC8vNzIwXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjE1ZW0pIGFuZCAobWluLWhlaWdodDogOTBlbSkge1xyXG4gICAgICAgIC8vMzQ0MCB4IDE0NDAgVUxUUkFXSURFXHJcbiAgICAgICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIxNWVtKSBhbmQgKG1pbi1oZWlnaHQ6IDEzNWVtKSB7XHJcbiAgICAgICAgLy8zNDQwIHggMjE2MFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29weXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMzAwO1xyXG5cclxuICAgIHdpZHRoOiAyMHJlbTtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuXHJcbiAgJl9fYmcxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWFydGgpO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDcwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcblxyXG4gICAgei1pbmRleDogMjAwO1xyXG4gIH1cclxuXHJcbiAgJl9fYmcyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDMwJSwgMTAwJSA3MCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuXHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG59XHJcbiIsIi5mb290ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtjYXJhLXN0YXJ0XSAzMHZ3IFtjYXJhLWVuZF0gMWZyIFtuYXYtc3RhcnRdIDMwdncgW25hdi1lbmRdO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAuZm9vdGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtjYXJhLXN0YXJ0XSAzMHZ3IFtjYXJhLWVuZF0gMWZyIFtuYXYtc3RhcnRdIDQwdncgW25hdi1lbmRdO1xuICB9XG59XG4uZm9vdGVyX19jYXJhcGFjZSB7XG4gIGdyaWQtY29sdW1uOiBjYXJhLXN0YXJ0L2NhcmEtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjcxLCAwLjAxLCAwLjA5LCAxLjUxKTtcbn1cbi5mb290ZXJfX2NhcmFwYWNlIGltZyB7XG4gIGhlaWdodDogNHZoO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjZlbSkge1xuICAuZm9vdGVyX19jYXJhcGFjZSBpbWcge1xuICAgIGhlaWdodDogOHZoO1xuICB9XG59XG4uZm9vdGVyX19jYXJhcGFjZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4uZm9vdGVyX19uYXYge1xuICBncmlkLWNvbHVtbjogbmF2LXN0YXJ0L25hdi1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XG4gIC5mb290ZXJfX25hdiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcbiAgLmZvb3Rlcl9fbmF2LS1pdGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICB9XG59XG4uZm9vdGVyX19uYXYtLWxpbmsge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43MSwgMC4wMSwgMC4wOSwgMS41MSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NWVtKSB7XG4gIC5mb290ZXJfX25hdi0tbGluayB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjE1ZW0pIGFuZCAobWluLWhlaWdodDogOTBlbSkge1xuICAuZm9vdGVyX19uYXYtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMTVlbSkgYW5kIChtaW4taGVpZ2h0OiAxMzVlbSkge1xuICAuZm9vdGVyX19uYXYtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgfVxufVxuLmZvb3Rlcl9fbmF2LS1saW5rOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb290ZXJfX2NvcHlyaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMzAwO1xuICB3aWR0aDogMjByZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5mb290ZXJfX2JnMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWFydGgpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNzAlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgei1pbmRleDogMjAwO1xufVxuLmZvb3Rlcl9fYmcyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tb2NoYSk7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAzMCUsIDEwMCUgNzAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG4gIHotaW5kZXg6IDEwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: grid;\n  grid-template-columns: [logo-start] 33vw [logo-end] 1fr [user-start] 34vw [user-end];\n}\n@media only screen and (max-width: 87em) {\n  .header {\n    grid-template-columns: [logo-start] 43vw [logo-end] 1fr [user-start] 44vw [user-end];\n  }\n}\n.header__logo {\n  grid-column: logo-start/logo-end;\n  padding-bottom: 2vh;\n  padding-left: 4.5vw;\n  -webkit-transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n.header__logo img {\n  height: 10vh;\n}\n@media only screen and (max-height: 26em) {\n  .header__logo img {\n    -webkit-transform: translateY(1rem);\n            transform: translateY(1rem);\n    height: 14vh;\n  }\n}\n.header__logo:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n.header__user {\n  grid-column: user-start/user-end;\n}\n.header__user--container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: flex-end;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  justify-items: center;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 4vh;\n  padding-right: 4.5vw;\n}\n@media only screen and (max-height: 26em) {\n  .header__user--container {\n    -webkit-transform: translateY(1rem);\n            transform: translateY(1rem);\n    padding-right: 2vw;\n  }\n}\n.header__user--container img,\n.header__user--container .starred-icon {\n  display: none;\n}\n@media only screen and (max-width: 44em) {\n  .header__user--container {\n    grid-template-columns: repeat(3, 4.5rem);\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    justify-items: flex-end;\n    padding-bottom: 3vh;\n    padding-right: 2rem;\n  }\n  .header__user--container span {\n    display: none;\n  }\n  .header__user--container .placeholder {\n    display: inline-block;\n  }\n  .header__user--container img {\n    display: inline-block;\n    height: 3rem;\n    width: 3rem;\n  }\n}\n.header__bg1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 10vh;\n  width: 100vw;\n  background-color: var(--color-mocha);\n  -webkit-clip-path: polygon(100% 20%, 100% 0, 0 0, 0 100%);\n          clip-path: polygon(100% 20%, 100% 0, 0 0, 0 100%);\n  z-index: -1;\n}\n.header__bg2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 10vh;\n  width: 100vw;\n  background-color: var(--color-earth);\n  -webkit-clip-path: polygon(100% 80%, 100% 0, 0 0, 0 25%);\n          clip-path: polygon(100% 80%, 100% 0, 0 0, 0 25%);\n  z-index: -2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9GQUNFO0FDQUo7QURLRTtFQVJGO0lBVUksb0ZBQ0U7RUNKSjtBQUNGO0FEU0U7RUFDRSxnQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxpRUFBQTtFQUFBLHlEQUFBO0FDVEo7QURXSTtFQUNFLFlBQUE7QUNUTjtBRFdNO0VBSEY7SUFLSSxtQ0FBQTtZQUFBLDJCQUFBO0lBRUEsWUFBQTtFQ1ZOO0FBQ0Y7QURhSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNYTjtBRGVFO0VBQ0UsZ0NBQUE7QUNiSjtBRGVJO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EscUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0Esb0JBQUE7QUNmTjtBRGlCTTtFQWJGO0lBZUksbUNBQUE7WUFBQSwyQkFBQTtJQUVBLGtCQUFBO0VDaEJOO0FBQ0Y7QURrQk07O0VBR0UsYUFBQTtBQ2pCUjtBRG9CTTtFQTFCRjtJQTRCSSx3Q0FBQTtJQUNBLHFCQUFBO1lBQUEseUJBQUE7SUFDQSx1QkFBQTtJQUVBLG1CQUFBO0lBQ0EsbUJBQUE7RUNuQk47RURxQk07SUFDRSxhQUFBO0VDbkJSO0VEc0JNO0lBQ0UscUJBQUE7RUNwQlI7RUR1Qk07SUFDRSxxQkFBQTtJQUVBLFlBQUE7SUFDQSxXQUFBO0VDdEJSO0FBQ0Y7QUQyQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7RUFFQSxXQUFBO0FDM0JKO0FEOEJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx3REFBQTtVQUFBLGdEQUFBO0VBRUEsV0FBQTtBQzlCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOlxyXG4gICAgW2xvZ28tc3RhcnRdIDMzdndcclxuICAgIFtsb2dvLWVuZF0gMWZyXHJcbiAgICBbdXNlci1zdGFydF0gMzR2d1xyXG4gICAgW3VzZXItZW5kXTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4N2VtKSB7XHJcbiAgICAvLzE0MDBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpcclxuICAgICAgW2xvZ28tc3RhcnRdIDQzdndcclxuICAgICAgW2xvZ28tZW5kXSAxZnJcclxuICAgICAgW3VzZXItc3RhcnRdIDQ0dndcclxuICAgICAgW3VzZXItZW5kXTtcclxuICB9XHJcblxyXG4gICZfX2xvZ28ge1xyXG4gICAgZ3JpZC1jb2x1bW46IGxvZ28tc3RhcnQgLyBsb2dvLWVuZDtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0LjV2dztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43MSwgMC4wMSwgMC4wOSwgMS41MSk7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMHZoO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjZlbSkge1xyXG4gICAgICAgIC8vNDE0IExBTkRTQ0FQRVxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAxNHZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX191c2VyIHtcclxuICAgIGdyaWQtY29sdW1uOiB1c2VyLXN0YXJ0IC8gdXNlci1lbmQ7XHJcblxyXG4gICAgJi0tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0dmg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQuNXZ3O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjZlbSkge1xyXG4gICAgICAgIC8vNDE0IExBTkRTQ0FQRVxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcclxuXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcsXHJcbiAgICAgIC5zdGFycmVkLWljb24ge1xyXG4gICAgICAgIC8vT05MWSBTSE9XIE9OIE1PQklMRVxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDRlbSkge1xyXG4gICAgICAgIC8vNzAwXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNC41cmVtKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYmcxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMjAlLCAxMDAlIDAsIDAgMCwgMCAxMDAlKTtcclxuXHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gICZfX2JnMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVhcnRoKTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDgwJSwgMTAwJSAwLCAwIDAsIDAgMjUlKTtcclxuXHJcbiAgICB6LWluZGV4OiAtMjtcclxuICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2xvZ28tc3RhcnRdIDMzdncgW2xvZ28tZW5kXSAxZnIgW3VzZXItc3RhcnRdIDM0dncgW3VzZXItZW5kXTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODdlbSkge1xuICAuaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtsb2dvLXN0YXJ0XSA0M3Z3IFtsb2dvLWVuZF0gMWZyIFt1c2VyLXN0YXJ0XSA0NHZ3IFt1c2VyLWVuZF07XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28ge1xuICBncmlkLWNvbHVtbjogbG9nby1zdGFydC9sb2dvLWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgcGFkZGluZy1sZWZ0OiA0LjV2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xufVxuLmhlYWRlcl9fbG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwdmg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyNmVtKSB7XG4gIC5oZWFkZXJfX2xvZ28gaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gICAgaGVpZ2h0OiAxNHZoO1xuICB9XG59XG4uaGVhZGVyX19sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbi5oZWFkZXJfX3VzZXIge1xuICBncmlkLWNvbHVtbjogdXNlci1zdGFydC91c2VyLWVuZDtcbn1cbi5oZWFkZXJfX3VzZXItLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDR2aDtcbiAgcGFkZGluZy1yaWdodDogNC41dnc7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyNmVtKSB7XG4gIC5oZWFkZXJfX3VzZXItLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcbiAgfVxufVxuLmhlYWRlcl9fdXNlci0tY29udGFpbmVyIGltZyxcbi5oZWFkZXJfX3VzZXItLWNvbnRhaW5lciAuc3RhcnJlZC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDRlbSkge1xuICAuaGVhZGVyX191c2VyLS1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDQuNXJlbSk7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIH1cbiAgLmhlYWRlcl9fdXNlci0tY29udGFpbmVyIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlYWRlcl9fdXNlci0tY29udGFpbmVyIC5wbGFjZWhvbGRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5oZWFkZXJfX3VzZXItLWNvbnRhaW5lciBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gIH1cbn1cbi5oZWFkZXJfX2JnMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAyMCUsIDEwMCUgMCwgMCAwLCAwIDEwMCUpO1xuICB6LWluZGV4OiAtMTtcbn1cbi5oZWFkZXJfX2JnMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZWFydGgpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSA4MCUsIDEwMCUgMCwgMCAwLCAwIDI1JSk7XG4gIHotaW5kZXg6IC0yO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.userIsAuth = false;
    }
    ngOnInit() {
        //CHECK IF USER LOGGED IN TO TOGGLE DISPLAYED BUTTONS
        this.userIsAuth = this.authService.getIsAuth();
        this.authListenerSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuth => (this.userIsAuth = isAuth));
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authListenerSub.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brief {\n  display: grid;\n  grid-template-rows: 5vh 63vh;\n  align-content: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  row-gap: 3rem;\n  padding: 4rem 2rem;\n}\n@media only screen and (max-height: 28em) {\n  .brief {\n    padding: 2rem;\n  }\n}\n.brief .about__text,\n.brief .disclaimer__text {\n  height: 50vh;\n  padding-right: 1rem;\n}\n@media only screen and (max-width: 26em) {\n  .brief .about__text,\n.brief .disclaimer__text {\n    padding: 0;\n  }\n}\n.share {\n  display: grid;\n  grid-template-rows: 10vh 5vh 45vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  padding: 6rem 2rem;\n}\n@media only screen and (max-height: 28em) {\n  .share {\n    padding: 4rem 2rem;\n  }\n}\n.share__btns {\n  align-self: center;\n  -webkit-transform: translateY(-4rem);\n          transform: translateY(-4rem);\n}\n@media only screen and (max-width: 28em) {\n  .share__btns {\n    width: 150%;\n    -webkit-transform: translate(-2rem, 0rem) scale(0.8);\n            transform: translate(-2rem, 0rem) scale(0.8);\n  }\n}\n@media only screen and (max-width: 24em) {\n  .share__btns {\n    position: absolute;\n    -webkit-transform: translate(-2rem, 0rem) scale(0.7);\n            transform: translate(-2rem, 0rem) scale(0.7);\n  }\n}\n@media only screen and (max-width: 22em) {\n  .share__btns {\n    position: absolute;\n    -webkit-transform: translate(-2rem, 4rem) scale(0.6);\n            transform: translate(-2rem, 4rem) scale(0.6);\n  }\n}\n@media only screen and (max-height: 28em) {\n  .share__btns {\n    position: absolute;\n    -webkit-transform: translate(-2rem, 2rem) scale(0.5);\n            transform: translate(-2rem, 2rem) scale(0.5);\n  }\n}\n@media only screen and (min-width: 25em) and (min-height: 45em) {\n  .share__btns {\n    -webkit-transform: translateY(-2rem) scale(0.75);\n            transform: translateY(-2rem) scale(0.75);\n  }\n}\n@media only screen and (min-height: 67em) {\n  .share__btns {\n    -webkit-transform: translateY(-4rem) scale(1.15);\n            transform: translateY(-4rem) scale(1.15);\n  }\n}\n@media only screen and (min-height: 90em) {\n  .share__btns {\n    -webkit-transform: translateY(-4rem) scale(1.5);\n            transform: translateY(-4rem) scale(1.5);\n  }\n}\n@media only screen and (min-height: 135em) {\n  .share__btns {\n    -webkit-transform: translateY(-4rem) scale(2);\n            transform: translateY(-4rem) scale(2);\n  }\n}\n.contact-us {\n  display: grid;\n  grid-template-rows: 10vh 10vh 48vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  padding: 6rem 2rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-width: 22em) {\n  .contact-us {\n    padding: 3rem 2rem;\n  }\n}\n@media only screen and (max-height: 28em) {\n  .contact-us {\n    padding-top: 2rem;\n    padding-bottom: 0rem;\n  }\n}\n.contact-us__form {\n  align-self: flex-start;\n  display: grid;\n  grid-template-columns: 30% 70%;\n  grid-template-rows: 60% 30% 10%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n  -webkit-transform: translateY(-2rem);\n          transform: translateY(-2rem);\n  padding-top: 5rem;\n}\n@media only screen and (max-width: 22em) {\n  .contact-us__form {\n    -webkit-transform: translateY(2rem);\n            transform: translateY(2rem);\n  }\n}\n.contact-us__form--message {\n  grid-column: 1/-1;\n  grid-row: 1/2;\n  height: 20rem;\n  width: 28rem;\n  resize: none;\n  background-color: var(--color-mocha);\n  border-radius: 0.4rem;\n  color: var(--color-star);\n  scrollbar-width: thin;\n}\n.contact-us__form--message:focus {\n  -webkit-transform: translateY(-0.1rem);\n          transform: translateY(-0.1rem);\n  border-bottom: 0.3rem solid var(--color-blonde);\n}\n.contact-us__form--message:focus:invalid {\n  border-bottom: 0.3rem solid var(--color-hot);\n}\n.contact-us__form--label {\n  font-size: 1.8rem;\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n.contact-us__form--email {\n  height: 3.6rem;\n  width: 18.8rem;\n  padding: 0.5rem;\n  background-color: var(--color-mocha);\n  border-radius: 0.4rem;\n  color: var(--color-star);\n}\n.contact-us__form--email:focus {\n  -webkit-transform: translateY(-0.1rem);\n          transform: translateY(-0.1rem);\n  border-bottom: 0.3rem solid var(--color-blonde);\n}\n.contact-us__form--email:focus:invalid {\n  border-bottom: 0.3rem solid var(--color-hot);\n}\n.contact-us__form--send {\n  grid-column: 2;\n  justify-self: flex-end;\n  -webkit-transform: translateX(-1rem);\n          transform: translateX(-1rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7QUNBRjtBREVFO0VBVkY7SUFZSSxhQUFBO0VDQUY7QUFDRjtBREVFOztFQUVFLFlBQUE7RUFHQSxtQkFBQTtBQ0ZKO0FESUk7RUFQRjs7SUFTSSxVQUFBO0VDREo7QUFDRjtBREtBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7QUNIRjtBREtFO0VBUkY7SUFVSSxrQkFBQTtFQ0hGO0FBQ0Y7QURLRTtFQUNFLGtCQUFBO0VBRUEsb0NBQUE7VUFBQSw0QkFBQTtBQ0pKO0FETUk7RUFMRjtJQU9JLFdBQUE7SUFDQSxvREFBQTtZQUFBLDRDQUFBO0VDSko7QUFDRjtBRE1JO0VBWEY7SUFhSSxrQkFBQTtJQUNBLG9EQUFBO1lBQUEsNENBQUE7RUNKSjtBQUNGO0FETUk7RUFqQkY7SUFtQkksa0JBQUE7SUFDQSxvREFBQTtZQUFBLDRDQUFBO0VDSko7QUFDRjtBRE1JO0VBdkJGO0lBeUJJLGtCQUFBO0lBQ0Esb0RBQUE7WUFBQSw0Q0FBQTtFQ0pKO0FBQ0Y7QURNSTtFQTdCRjtJQStCSSxnREFBQTtZQUFBLHdDQUFBO0VDSko7QUFDRjtBRE1JO0VBbENGO0lBb0NJLGdEQUFBO1lBQUEsd0NBQUE7RUNKSjtBQUNGO0FETUk7RUF2Q0Y7SUF5Q0ksK0NBQUE7WUFBQSx1Q0FBQTtFQ0pKO0FBQ0Y7QURNSTtFQTVDRjtJQThDSSw2Q0FBQTtZQUFBLHFDQUFBO0VDSko7QUFDRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNQRjtBRFNFO0VBWkY7SUFjSSxrQkFBQTtFQ1BGO0FBQ0Y7QURTRTtFQWpCRjtJQW1CSSxpQkFBQTtJQUNBLG9CQUFBO0VDUEY7QUFDRjtBRFNFO0VBQ0Usc0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBRUEsb0NBQUE7VUFBQSw0QkFBQTtFQUVBLGlCQUFBO0FDVko7QURZSTtFQWJGO0lBZUksbUNBQUE7WUFBQSwyQkFBQTtFQ1ZKO0FBQ0Y7QURZSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQUFBO0VBQ0EscUJBQUE7RUFFQSx3QkFBQTtFQUVBLHFCQUFBO0FDZE47QURnQk07RUFDRSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsK0NBQUE7QUNkUjtBRGlCTTtFQUNFLDRDQUFBO0FDZlI7QURtQkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNqQk47QURvQkk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUNBLHFCQUFBO0VBRUEsd0JBQUE7QUNwQk47QURzQk07RUFDRSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsK0NBQUE7QUNwQlI7QUR1Qk07RUFDRSw0Q0FBQTtBQ3JCUjtBRHlCSTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUVBLG9DQUFBO1VBQUEsNEJBQUE7QUN4Qk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJpZWYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNjN2aDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICByb3ctZ2FwOiAzcmVtO1xyXG5cclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcclxuICAgIC8vNDQ2IExBTkRTQ0FQRVxyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dF9fdGV4dCxcclxuICAuZGlzY2xhaW1lcl9fdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgLy9TUEFDRSBGT1IgU0NST0xMIEJBUlxyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2ZW0pIHtcclxuICAgICAgLy80MTRcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaGFyZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNXZoIDQ1dmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nOiA2cmVtIDJyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcclxuICAgIC8vNDQ2IExBTkRTQ0FQRVxyXG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYnRucyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cmVtKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4ZW0pIHtcclxuICAgICAgLy80NDZcclxuICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycmVtLCAwcmVtKSBzY2FsZSgwLjgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjRlbSkge1xyXG4gICAgICAvLzM3NVxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycmVtLCAwcmVtKSBzY2FsZSgwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xyXG4gICAgICAvLzMyMFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycmVtLCA0cmVtKSBzY2FsZSgwLjYpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcclxuICAgICAgLy80NDYgTEFORFNDQVBFXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJyZW0sIDJyZW0pIHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNWVtKSBhbmQgKG1pbi1oZWlnaHQ6IDQ1ZW0pIHtcclxuICAgICAgLy9BVCBMRUFTVCA3MjAgeCA0MDBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKSBzY2FsZSgwLjc1KTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2N2VtKSB7XHJcbiAgICAgIC8vMTA4MFxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRyZW0pIHNjYWxlKDEuMTUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDkwZW0pIHtcclxuICAgICAgLy8xNDQwXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHJlbSkgc2NhbGUoMS41KTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMzVlbSkge1xyXG4gICAgICAvLzIxNjBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cmVtKSBzY2FsZSgyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCAxMHZoIDQ4dmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nOiA2cmVtIDJyZW07XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMmVtKSB7XHJcbiAgICAvLzMyMFxyXG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xyXG4gICAgLy80NDYgTEFORFNDQVBFXHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fZm9ybSB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwJSAzMCUgMTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xyXG4gICAgICAvLzMyMFxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tbWVzc2FnZSB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcclxuXHJcbiAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICAgIHdpZHRoOiAyOHJlbTtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcblxyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc3Rhcik7XHJcblxyXG4gICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMXJlbSk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkIHZhcigtLWNvbG9yLWJsb25kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zm9jdXM6aW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkIHZhcigtLWNvbG9yLWhvdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tZW1haWwge1xyXG4gICAgICBoZWlnaHQ6IDMuNnJlbTtcclxuICAgICAgd2lkdGg6IDE4LjhyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1vY2hhKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG5cclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXN0YXIpO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1ibG9uZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzOmludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1ob3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tc2VuZCB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmJyaWVmIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNjN2aDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogM3JlbTtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAuYnJpZWYge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cbi5icmllZiAuYWJvdXRfX3RleHQsXG4uYnJpZWYgLmRpc2NsYWltZXJfX3RleHQge1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2ZW0pIHtcbiAgLmJyaWVmIC5hYm91dF9fdGV4dCxcbi5icmllZiAuZGlzY2xhaW1lcl9fdGV4dCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uc2hhcmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNXZoIDQ1dmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZyZW0gMnJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcbiAgLnNoYXJlIHtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIH1cbn1cbi5zaGFyZV9fYnRucyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cmVtKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjhlbSkge1xuICAuc2hhcmVfX2J0bnMge1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycmVtLCAwcmVtKSBzY2FsZSgwLjgpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0ZW0pIHtcbiAgLnNoYXJlX19idG5zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJyZW0sIDByZW0pIHNjYWxlKDAuNyk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xuICAuc2hhcmVfX2J0bnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnJlbSwgNHJlbSkgc2NhbGUoMC42KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAuc2hhcmVfX2J0bnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnJlbSwgMnJlbSkgc2NhbGUoMC41KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNWVtKSBhbmQgKG1pbi1oZWlnaHQ6IDQ1ZW0pIHtcbiAgLnNoYXJlX19idG5zIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pIHNjYWxlKDAuNzUpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2N2VtKSB7XG4gIC5zaGFyZV9fYnRucyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cmVtKSBzY2FsZSgxLjE1KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogOTBlbSkge1xuICAuc2hhcmVfX2J0bnMge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHJlbSkgc2NhbGUoMS41KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTM1ZW0pIHtcbiAgLnNoYXJlX19idG5zIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRyZW0pIHNjYWxlKDIpO1xuICB9XG59XG5cbi5jb250YWN0LXVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDEwdmggNDh2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnJlbSAycmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xuICAuY29udGFjdC11cyB7XG4gICAgcGFkZGluZzogM3JlbSAycmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XG4gIC5jb250YWN0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgfVxufVxuLmNvbnRhY3QtdXNfX2Zvcm0ge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjAlIDMwJSAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcbiAgcGFkZGluZy10b3A6IDVyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyZW0pIHtcbiAgLmNvbnRhY3QtdXNfX2Zvcm0ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycmVtKTtcbiAgfVxufVxuLmNvbnRhY3QtdXNfX2Zvcm0tLW1lc3NhZ2Uge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgd2lkdGg6IDI4cmVtO1xuICByZXNpemU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1vY2hhKTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc3Rhcik7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbi5jb250YWN0LXVzX19mb3JtLS1tZXNzYWdlOmZvY3VzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xuICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgdmFyKC0tY29sb3ItYmxvbmRlKTtcbn1cbi5jb250YWN0LXVzX19mb3JtLS1tZXNzYWdlOmZvY3VzOmludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgdmFyKC0tY29sb3ItaG90KTtcbn1cbi5jb250YWN0LXVzX19mb3JtLS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uY29udGFjdC11c19fZm9ybS0tZW1haWwge1xuICBoZWlnaHQ6IDMuNnJlbTtcbiAgd2lkdGg6IDE4LjhyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zdGFyKTtcbn1cbi5jb250YWN0LXVzX19mb3JtLS1lbWFpbDpmb2N1cyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xcmVtKTtcbiAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkIHZhcigtLWNvbG9yLWJsb25kZSk7XG59XG4uY29udGFjdC11c19fZm9ybS0tZW1haWw6Zm9jdXM6aW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1ob3QpO1xufVxuLmNvbnRhY3QtdXNfX2Zvcm0tLXNlbmQge1xuICBncmlkLWNvbHVtbjogMjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");





let NavComponent = class NavComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.isLoading = false;
        //FETCH STATE FROM ROUTE LINK TO SET NAV CLASSES FOR BROWSING DIFFERENT PAGES
        this.route.params.subscribe(param => (this.state = param["link"]));
    }
    ngOnInit() { }
    onContact(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.userService.contact(form.value.email, form.value.message);
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/drinks/drink-list/drink-item/drink-item.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/drinks/drink-list/drink-item/drink-item.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drink-item-card {\n  height: 15rem;\n  width: 18rem;\n  border-radius: 0.4rem;\n  box-shadow: inset 0 0.1rem 0 rgba(255, 255, 255, 0.7);\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: -webkit-transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51), -webkit-transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n@media only screen and (max-width: 21em) {\n  .drink-item-card {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n}\n.drink-item-card:hover {\n  -webkit-transform: translateY(-0.5rem) scale(1.02);\n          transform: translateY(-0.5rem) scale(1.02);\n  box-shadow: inset 0 0.1rem 0 rgba(255, 255, 255, 0.7), 0 0.3rem 0.3rem rgba(0, 0, 0, 0.125), 0 0.35rem 0.35rem rgba(0, 0, 0, 0.1), 0 0.45rem 0.45rem rgba(0, 0, 0, 0.75), 0 0.65rem 0.65rem rgba(0, 0, 0, 0.5), 0 1.1rem 1.1rem rgba(0, 0, 0, 0.025);\n}\n@media only screen and (max-width: 21em) {\n  .drink-item-card:hover {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n}\n.drink-item-card__style--hot {\n  background: radial-gradient(var(--color-blonde), var(--color-hot));\n}\n.drink-item-card__style--iced {\n  background: radial-gradient(var(--color-frozen), var(--color-iced));\n}\n.drink-item-card__style--frozen {\n  background: radial-gradient(rgba(255, 255, 255, 0.8), var(--color-frozen));\n}\n.drink-item-card__star--btn {\n  position: relative;\n  -webkit-transform: translateY(-3rem) rotate(-90deg);\n          transform: translateY(-3rem) rotate(-90deg);\n  z-index: 100;\n  font-size: 4.5rem;\n}\n@media only screen and (max-width: 26em) {\n  .drink-item-card__star--btn {\n    -webkit-transform: translateY(-0.6rem) rotate(-90deg);\n            transform: translateY(-0.6rem) rotate(-90deg);\n  }\n}\n.drink-item-card__star--btn:hover {\n  text-shadow: 0 0 0.5rem currentColor, 0 0 1rem var(--color-blonde), 0 0 2rem var(--color-white);\n}\n.drink-item-card__front {\n  display: grid;\n  grid-template-columns: 30% 40% 30%;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n  position: relative;\n  -webkit-transform: translateY(-6.2rem);\n          transform: translateY(-6.2rem);\n  height: 15rem;\n  width: 18rem;\n  padding: 1rem;\n}\n.drink-item-card__front--misc {\n  position: relative;\n  -webkit-transform: translateY(3rem);\n          transform: translateY(3rem);\n  height: 3rem;\n}\n.drink-item-card__front--misc-season {\n  width: 3rem;\n}\n.drink-item-card__front--misc-season img {\n  width: 3rem;\n  opacity: 0.5;\n  background: radial-gradient(rgba(255, 255, 255, 0.3), transparent);\n}\n.drink-item-card__front--code {\n  display: grid;\n  grid-template-columns: 25% 50% 25%;\n  grid-template-rows: 25% 50% 25%;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center;\n}\n.drink-item-card__front--code-letter {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  z-index: 10;\n  font-family: \"Italiana\", sans-serif;\n  font-size: 4rem;\n  color: var(--color-white);\n  text-shadow: -0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.4), 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);\n}\n.drink-item-card__front--code-box {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  display: block;\n  height: 2.4rem;\n  width: 4.25rem;\n  background: none;\n  border: 0.1rem solid var(--color-white);\n  opacity: 0.2;\n  box-shadow: 0 0 0.5rem 0.2rem rgba(0, 0, 0, 0.5), inset 0 0 0.5rem 0.2rem rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n.drink-item-card__front--form {\n  position: relative;\n  -webkit-transform: translateY(3rem);\n          transform: translateY(3rem);\n  height: 2rem;\n  width: 4rem;\n  text-shadow: -0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.2), 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);\n  color: var(--color-white);\n  font-size: 1rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n.drink-item-card__back {\n  display: grid;\n  grid-auto-columns: 18rem;\n  position: relative;\n  -webkit-transform: translateY(-6.2rem);\n          transform: translateY(-6.2rem);\n  height: 15rem;\n  width: 18rem;\n  padding: 1rem;\n  padding-right: 2rem;\n  border-radius: 0.4rem;\n  background-color: rgba(0, 0, 0, 0.2);\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.drink-item-card__back--pair {\n  display: grid;\n  grid-template-columns: 30% 50%;\n  -webkit-column-gap: 0.5rem;\n     -moz-column-gap: 0.5rem;\n          column-gap: 0.5rem;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  color: var(--color-white);\n  font-weight: 300;\n}\n.drink-item-card__back--pair-key {\n  opacity: 0.6;\n  text-align: right;\n  text-transform: lowercase;\n  line-height: 1;\n}\n.drink-item-card__back--pair-value {\n  border-bottom: 0.1rem solid var(--color-coffee);\n  text-transform: uppercase;\n}\n.drink-item-card__expand {\n  position: relative;\n  -webkit-transform: translate(15.5rem, -8.5rem);\n          transform: translate(15.5rem, -8.5rem);\n}\n@media only screen and (max-width: 26em) {\n  .drink-item-card__expand {\n    -webkit-transform: translate(19rem, -9rem) scale(1.4);\n            transform: translate(19rem, -9rem) scale(1.4);\n  }\n}\n.drink-item-card__expand--btn {\n  color: var(--color-mocha);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvZHJpbmstaXRlbS9EOlxcRG9jdW1lbnRzXFxEb2N1bWVudHNcXEdpdEh1YlxcYmFyaXN0YWJvb2svc3JjXFxhcHBcXGRyaW5rc1xcZHJpbmstbGlzdFxcZHJpbmstaXRlbVxcZHJpbmstaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvZHJpbmstaXRlbS9kcmluay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtFQUNBLHFEQUFBO0VBRUEsK0VBQUE7RUFBQSx1RUFBQTtFQUFBLCtEQUFBO0VBQUEsNEhBQUE7QUNERjtBREdFO0VBVEY7SUFXSSw4QkFBQTtZQUFBLHNCQUFBO0VDREY7QUFDRjtBREdFO0VBQ0Usa0RBQUE7VUFBQSwwQ0FBQTtFQUNBLG9QQUFBO0FDREo7QURNSTtFQVBGO0lBU0ksOEJBQUE7WUFBQSxzQkFBQTtFQ0pKO0FBQ0Y7QURTSTtFQUNFLGtFQUFBO0FDUE47QURVSTtFQUNFLG1FQUFBO0FDUk47QURXSTtFQUNFLDBFQUFBO0FDVE47QURpQkk7RUFDRSxrQkFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QUNoQk47QURrQk07RUFQRjtJQVNJLHFEQUFBO1lBQUEsNkNBQUE7RUNoQk47QUFDRjtBRGtCTTtFQUNFLCtGQUFBO0FDaEJSO0FEc0JFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDdEJKO0FEd0JJO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBRUEsWUFBQTtBQ3ZCTjtBRHlCTTtFQUNFLFdBQUE7QUN2QlI7QUR5QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtFQUFBO0FDeEJWO0FENkJJO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7QUMzQk47QUQ2Qk07RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0VBRUEsbUNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwrRkFBQTtBQzdCUjtBRGlDTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsNEZBQUE7RUFHQSxvQkFBQTtBQ3BDUjtBRHdDSTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsK0ZBQUE7RUFHQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDMUNOO0FEOENFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBRUEsa0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLG9DQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDaERKO0FEa0RJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtVQUFBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtBQ2xETjtBRG9ETTtFQUNFLFlBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ25EUjtBRHNETTtFQUNFLCtDQUFBO0VBRUEseUJBQUE7QUNyRFI7QUQwREU7RUFDRSxrQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUN4REo7QUQwREk7RUFKRjtJQU1JLHFEQUFBO1lBQUEsNkNBQUE7RUN4REo7QUFDRjtBRDBESTtFQUNFLHlCQUFBO0FDeEROIiwiZmlsZSI6InNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvZHJpbmstaXRlbS9kcmluay1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyaW5rLWl0ZW0tY2FyZCB7XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICB3aWR0aDogMThyZW07XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAuMXJlbSAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIxZW0pIHtcclxuICAgIC8vMzI1IENPTlRST0wgV0lUSCBkcmluay1saXN0XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSkgc2NhbGUoMS4wMik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuMXJlbSAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgICAgMCAwLjNyZW0gMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAuMzVyZW0gMC4zNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgIDAgMC40NXJlbSAwLjQ1cmVtIHJnYmEoMCwgMCwgMCwgMC43NSksXHJcbiAgICAgIDAgMC42NXJlbSAwLjY1cmVtIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxLjFyZW0gMS4xcmVtIHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjFlbSkge1xyXG4gICAgICAvLzMyNSBDT05UUk9MIFdJVEggZHJpbmstbGlzdFxyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9WQVJJQUJMRSBTVFlMRVxyXG4gICZfX3N0eWxlIHtcclxuICAgICYtLWhvdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1jb2xvci1ibG9uZGUpLCB2YXIoLS1jb2xvci1ob3QpKTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pY2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHZhcigtLWNvbG9yLWZyb3plbiksIHZhcigtLWNvbG9yLWljZWQpKTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1mcm96ZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxyXG4gICAgICAgIHZhcigtLWNvbG9yLWZyb3plbilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3N0YXIge1xyXG4gICAgJi0tYnRuIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNyZW0pIHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgICBmb250LXNpemU6IDQuNXJlbTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjZlbSkge1xyXG4gICAgICAgIC8vNDE0XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjZyZW0pIHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAuNXJlbSBjdXJyZW50Q29sb3IsIDAgMCAxcmVtIHZhcigtLWNvbG9yLWJsb25kZSksXHJcbiAgICAgICAgICAwIDAgMnJlbSB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Zyb250IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA0MCUgMzAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNi4ycmVtKTtcclxuXHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAmLS1taXNjIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XHJcblxyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcblxyXG4gICAgICAmLXNlYXNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDNyZW07XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tY29kZSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDUwJSAyNSU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDUwJSAyNSU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICYtbGV0dGVyIHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSXRhbGlhbmFcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogLTAuMXJlbSAtMC4xcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICAgICAgICAwLjFyZW0gMC4xcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtYm94IHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgd2lkdGg6IDQuMjVyZW07XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICBpbnNldCAwIDAgMC41cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tZm9ybSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xyXG5cclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuXHJcbiAgICAgIHRleHQtc2hhZG93OiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAwLjFyZW0gMC4xcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2JhY2sge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxOHJlbTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuMnJlbSk7XHJcblxyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIHdpZHRoOiAxOHJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG5cclxuICAgICYtLXBhaXIge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA1MCU7XHJcbiAgICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgICAgJi1rZXkge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLWNvZmZlZSk7XHJcblxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2V4cGFuZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNS41cmVtLCAtOC41cmVtKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2ZW0pIHtcclxuICAgICAgLy80MTRcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTlyZW0sIC05cmVtKSBzY2FsZSgxLjQpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWJ0biB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tb2NoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5kcmluay1pdGVtLWNhcmQge1xuICBoZWlnaHQ6IDE1cmVtO1xuICB3aWR0aDogMThyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjFyZW0gMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjcxLCAwLjAxLCAwLjA5LCAxLjUxKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjFlbSkge1xuICAuZHJpbmstaXRlbS1jYXJkIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG59XG4uZHJpbmstaXRlbS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pIHNjYWxlKDEuMDIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAuMXJlbSAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgMCAwLjNyZW0gMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAuMzVyZW0gMC4zNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMC40NXJlbSAwLjQ1cmVtIHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMC42NXJlbSAwLjY1cmVtIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxLjFyZW0gMS4xcmVtIHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMWVtKSB7XG4gIC5kcmluay1pdGVtLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbn1cbi5kcmluay1pdGVtLWNhcmRfX3N0eWxlLS1ob3Qge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodmFyKC0tY29sb3ItYmxvbmRlKSwgdmFyKC0tY29sb3ItaG90KSk7XG59XG4uZHJpbmstaXRlbS1jYXJkX19zdHlsZS0taWNlZCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1jb2xvci1mcm96ZW4pLCB2YXIoLS1jb2xvci1pY2VkKSk7XG59XG4uZHJpbmstaXRlbS1jYXJkX19zdHlsZS0tZnJvemVuIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgdmFyKC0tY29sb3ItZnJvemVuKSk7XG59XG4uZHJpbmstaXRlbS1jYXJkX19zdGFyLS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3JlbSkgcm90YXRlKC05MGRlZyk7XG4gIHotaW5kZXg6IDEwMDtcbiAgZm9udC1zaXplOiA0LjVyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2ZW0pIHtcbiAgLmRyaW5rLWl0ZW0tY2FyZF9fc3Rhci0tYnRuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNnJlbSkgcm90YXRlKC05MGRlZyk7XG4gIH1cbn1cbi5kcmluay1pdGVtLWNhcmRfX3N0YXItLWJ0bjpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIDAgMC41cmVtIGN1cnJlbnRDb2xvciwgMCAwIDFyZW0gdmFyKC0tY29sb3ItYmxvbmRlKSwgMCAwIDJyZW0gdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLmRyaW5rLWl0ZW0tY2FyZF9fZnJvbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA0MCUgMzAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjJyZW0pO1xuICBoZWlnaHQ6IDE1cmVtO1xuICB3aWR0aDogMThyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uZHJpbmstaXRlbS1jYXJkX19mcm9udC0tbWlzYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uZHJpbmstaXRlbS1jYXJkX19mcm9udC0tbWlzYy1zZWFzb24ge1xuICB3aWR0aDogM3JlbTtcbn1cbi5kcmluay1pdGVtLWNhcmRfX2Zyb250LS1taXNjLXNlYXNvbiBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCB0cmFuc3BhcmVudCk7XG59XG4uZHJpbmstaXRlbS1jYXJkX19mcm9udC0tY29kZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDUwJSAyNSU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDUwJSAyNSU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5kcmluay1pdGVtLWNhcmRfX2Zyb250LS1jb2RlLWxldHRlciB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAyLzM7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LWZhbWlseTogXCJJdGFsaWFuYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC40KSwgMC4xcmVtIDAuMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmRyaW5rLWl0ZW0tY2FyZF9fZnJvbnQtLWNvZGUtYm94IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMi40cmVtO1xuICB3aWR0aDogNC4yNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xuICBvcGFjaXR5OiAwLjI7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC41KSwgaW5zZXQgMCAwIDAuNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5kcmluay1pdGVtLWNhcmRfX2Zyb250LS1mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIHRleHQtc2hhZG93OiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMC4xcmVtIDAuMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kcmluay1pdGVtLWNhcmRfX2JhY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tY29sdW1uczogMThyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjJyZW0pO1xuICBoZWlnaHQ6IDE1cmVtO1xuICB3aWR0aDogMThyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbi5kcmluay1pdGVtLWNhcmRfX2JhY2stLXBhaXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA1MCU7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kcmluay1pdGVtLWNhcmRfX2JhY2stLXBhaXIta2V5IHtcbiAgb3BhY2l0eTogMC42O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZHJpbmstaXRlbS1jYXJkX19iYWNrLS1wYWlyLXZhbHVlIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLWNvZmZlZSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZHJpbmstaXRlbS1jYXJkX19leHBhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1LjVyZW0sIC04LjVyZW0pO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNmVtKSB7XG4gIC5kcmluay1pdGVtLWNhcmRfX2V4cGFuZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTlyZW0sIC05cmVtKSBzY2FsZSgxLjQpO1xuICB9XG59XG4uZHJpbmstaXRlbS1jYXJkX19leHBhbmQtLWJ0biB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1tb2NoYSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/drinks/drink-list/drink-item/drink-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/drinks/drink-list/drink-item/drink-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: DrinkItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkItemComponent", function() { return DrinkItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");




let DrinkItemComponent = class DrinkItemComponent {
    constructor(userService) {
        this.userService = userService;
        this.previewDrink = false;
        //STARRED FEATURE
        this.drinkIsStarred = false;
        this.star = "★";
    }
    ngOnInit() {
        if (this.userIsAuth) {
            //FIND IF DRINK IS STARRED, TOGGLE drinkIsStarred BUTTON
            this.starreds.forEach(el => {
                if (el.drink.id === this.drink.id) {
                    this.drinkIsStarred = true;
                    this.star = "☆";
                }
            });
        }
    }
    //TOGGLE DRINK PREVIEW
    onPreviewDrink() {
        this.previewDrink = !this.previewDrink;
    }
    onSaveStarred() {
        //SERVER REQUIRES THE DRINK ID & USER ID FOR STARRED CREATION
        this.userService.saveStarred(this.drink.id, this.userId).subscribe(() => {
            //UPDATE VALUES & starreds ARR
            this.drinkIsStarred = true;
            this.star = "☆";
            this.updateStarred();
        });
    }
    onDeleteStarred() {
        //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
        this.userService
            .deleteStarred(this.starreds, this.drink.id)
            .subscribe(() => {
            //UPDATE VALUES & STARRED ARR
            this.drinkIsStarred = false;
            this.star = "★";
            this.updateStarred();
        });
    }
    //UPDATE STARRED DATA FOR DISPLAY
    updateStarred() {
        this.userService.getStarred().subscribe((starred) => {
            this.starreds = starred.doc;
        });
    }
    //ENABLES TOGGLE BUTTON
    clickHandler() {
        if (this.drinkIsStarred) {
            this.onDeleteStarred();
        }
        else if (!this.drinkIsStarred) {
            this.onSaveStarred();
        }
    }
};
DrinkItemComponent.ctorParameters = () => [
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkItemComponent.prototype, "drink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkItemComponent.prototype, "userIsAuth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkItemComponent.prototype, "userId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkItemComponent.prototype, "starreds", void 0);
DrinkItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-drink-item",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drink-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-item/drink-item.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drink-item.component.scss */ "./src/app/drinks/drink-list/drink-item/drink-item.component.scss")).default]
    })
], DrinkItemComponent);



/***/ }),

/***/ "./src/app/drinks/drink-list/drink-line/drink-line.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/drinks/drink-list/drink-line/drink-line.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drink-line {\n  display: grid;\n  grid-template-rows: 5vh 63vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 3rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.drink-line__items {\n  display: table;\n  border-spacing: 0.5rem;\n  width: 95vw;\n}\n.drink-line__items:hover {\n  background-color: var(--color-mocha);\n}\n.drink-line__items--cell {\n  display: table-cell;\n  height: 5rem;\n  width: 4.5vw;\n  border-bottom: 0.1rem solid var(--color-mocha);\n  font-weight: 300;\n  text-align: end;\n}\n@media only screen and (max-width: 76em) {\n  .drink-line__items--cell {\n    width: 19vw;\n  }\n}\n.drink-line__items--cell:hover {\n  background-color: var(--color-coffee);\n}\n.drink-line__items--short {\n  display: table-cell;\n  height: 5rem;\n  width: 2vw;\n  border-bottom: 0.1rem solid var(--color-mocha);\n  font-weight: 300;\n  text-align: end;\n  word-break: break-all;\n}\n@media only screen and (max-width: 76em) {\n  .drink-line__items--short {\n    width: 15vw;\n  }\n  .drink-line__items--short button {\n    font-size: 2rem;\n  }\n}\n.drink-line__items--short:hover {\n  background-color: var(--color-coffee);\n}\n@media only screen and (max-width: 76em) {\n  .mobile-hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvZHJpbmstbGluZS9EOlxcRG9jdW1lbnRzXFxEb2N1bWVudHNcXEdpdEh1YlxcYmFyaXN0YWJvb2svc3JjXFxhcHBcXGRyaW5rc1xcZHJpbmstbGlzdFxcZHJpbmstbGluZVxcZHJpbmstbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvZHJpbmstbGluZS9kcmluay1saW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDREY7QURHRTtFQUNFLGNBQUE7RUFFQSxzQkFBQTtFQUVBLFdBQUE7QUNISjtBREtJO0VBQ0Usb0NBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLDhDQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FDUE47QURTTTtFQVhGO0lBYUksV0FBQTtFQ1BOO0FBQ0Y7QURTTTtFQUNFLHFDQUFBO0FDUFI7QURXSTtFQUNFLG1CQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFFQSw4Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDWk47QURjTTtFQVpGO0lBY0ksV0FBQTtFQ1pOO0VEY007SUFDRSxlQUFBO0VDWlI7QUFDRjtBRGVNO0VBQ0UscUNBQUE7QUNiUjtBRG9CRTtFQURGO0lBR0ksYUFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvZHJpbmstbGluZS9kcmluay1saW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyaW5rLWxpbmUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNjN2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgJl9faXRlbXMge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcblxyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuXHJcbiAgICB3aWR0aDogOTV2dztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWNlbGwge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cclxuICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICB3aWR0aDogNC41dnc7XHJcblxyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItbW9jaGEpO1xyXG5cclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NmVtKSB7XHJcbiAgICAgICAgLy8xMjAwIENPTlRST0wgV0lUSCBkcmluay1saXN0XHJcbiAgICAgICAgd2lkdGg6IDE5dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvZmZlZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1zaG9ydCB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblxyXG4gICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgIHdpZHRoOiAydnc7XHJcblxyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItbW9jaGEpO1xyXG5cclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2ZW0pIHtcclxuICAgICAgICAvLzEyMDAgQ09OVFJPTCBXSVRIIGRyaW5rLWxpc3RcclxuICAgICAgICB3aWR0aDogMTV2dztcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvZmZlZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2JpbGUtaGlkZSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NmVtKSB7XHJcbiAgICAvLzEyMDAgQ09OVFJPTCBXSVRIIGRyaW5rLWxpc3RcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIi5kcmluay1saW5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNjN2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbi5kcmluay1saW5lX19pdGVtcyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXItc3BhY2luZzogMC41cmVtO1xuICB3aWR0aDogOTV2dztcbn1cbi5kcmluay1saW5lX19pdGVtczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1vY2hhKTtcbn1cbi5kcmluay1saW5lX19pdGVtcy0tY2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDQuNXZ3O1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItbW9jaGEpO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2ZW0pIHtcbiAgLmRyaW5rLWxpbmVfX2l0ZW1zLS1jZWxsIHtcbiAgICB3aWR0aDogMTl2dztcbiAgfVxufVxuLmRyaW5rLWxpbmVfX2l0ZW1zLS1jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29mZmVlKTtcbn1cbi5kcmluay1saW5lX19pdGVtcy0tc2hvcnQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiAydnc7XG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1tb2NoYSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NmVtKSB7XG4gIC5kcmluay1saW5lX19pdGVtcy0tc2hvcnQge1xuICAgIHdpZHRoOiAxNXZ3O1xuICB9XG4gIC5kcmluay1saW5lX19pdGVtcy0tc2hvcnQgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbi5kcmluay1saW5lX19pdGVtcy0tc2hvcnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jb2ZmZWUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2ZW0pIHtcbiAgLm1vYmlsZS1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/drinks/drink-list/drink-line/drink-line.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/drinks/drink-list/drink-line/drink-line.component.ts ***!
  \**********************************************************************/
/*! exports provided: DrinkLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkLineComponent", function() { return DrinkLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");




let DrinkLineComponent = class DrinkLineComponent {
    constructor(userService) {
        this.userService = userService;
        this.previewDrink = false;
        //STARRED FEATURE
        this.drinkIsStarred = false;
        this.star = "★";
    }
    ngOnInit() {
        if (this.userIsAuth) {
            //FIND IF DRINK IS STARRED, TOGGLE drinkIsStarred BUTTON
            this.starreds.forEach(el => {
                if (el.drink.id === this.drink.id) {
                    this.drinkIsStarred = true;
                    this.star = "☆";
                }
            });
        }
    }
    //TOGGLE DRINK PREVIEW
    onPreviewDrink() {
        this.previewDrink = !this.previewDrink;
    }
    onSaveStarred() {
        //SERVER REQUIRES THE DRINK ID & USER ID FOR STARRED CREATION
        this.userService.saveStarred(this.drink.id, this.userId).subscribe(() => {
            //UPDATE VALUES & starreds ARR
            this.drinkIsStarred = true;
            this.star = "☆";
            this.updateStarred();
        });
    }
    onDeleteStarred() {
        //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
        this.userService
            .deleteStarred(this.starreds, this.drink.id)
            .subscribe(() => {
            //UPDATE VALUES & STARRED ARR
            this.drinkIsStarred = false;
            this.star = "★";
            this.updateStarred();
        });
    }
    //UPDATE STARRED DATA FOR DISPLAY
    updateStarred() {
        this.userService.getStarred().subscribe((starred) => {
            this.starreds = starred.doc;
        });
    }
    //ENABLES TOGGLE BUTTON
    clickHandler() {
        if (this.drinkIsStarred) {
            this.onDeleteStarred();
        }
        else if (!this.drinkIsStarred) {
            this.onSaveStarred();
        }
    }
};
DrinkLineComponent.ctorParameters = () => [
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkLineComponent.prototype, "drink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkLineComponent.prototype, "userIsAuth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkLineComponent.prototype, "userId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkLineComponent.prototype, "starreds", void 0);
DrinkLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-drink-line",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drink-line.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-line/drink-line.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_3__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drink-line.component.scss */ "./src/app/drinks/drink-list/drink-line/drink-line.component.scss")).default]
    })
], DrinkLineComponent);



/***/ }),

/***/ "./src/app/drinks/drink-list/drink-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/drinks/drink-list/drink-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drink-list-container {\n  display: grid;\n  grid-template-rows: [search-start] 8vh [search-end main-start] 60vh [main-end];\n}\n@media only screen and (max-height: 28em) {\n  .drink-list-container {\n    grid-template-rows: [search-start] 12vh [search-end main-start] 56vh [main-end];\n  }\n}\n.search {\n  grid-row: search-start/search-end;\n  align-content: center;\n  display: grid;\n  grid-template-columns: [list-start] 25vw [list-end bar-start] 50vw [bar-end sort-start] 25vw [sort-end];\n}\n.search__list {\n  grid-column: list-start/list-end;\n  display: grid;\n  grid-template-rows: 99% 1%;\n}\n@media only screen and (max-width: 32em) {\n  .search__list {\n    align-self: center;\n    justify-self: center;\n    z-index: 100;\n    height: 4.5vh;\n    width: 6rem;\n    border-top-left-radius: 10rem;\n    border-bottom-left-radius: 10rem;\n    background-color: var(--color-star);\n    border-right: 0.1rem solid rgba(0, 0, 0, 0.25);\n  }\n}\n.search__list--btn {\n  align-self: center;\n  justify-self: center;\n}\n@media only screen and (max-width: 32em) {\n  .search__list--btn {\n    color: var(--color-mocha);\n    font-size: var(--font-medium);\n    text-shadow: none;\n  }\n  .search__list--btn span {\n    display: none;\n  }\n  .search__list--btn:after {\n    content: attr(btn-content);\n  }\n}\n.search__bar {\n  grid-column: bar-start/bar-end;\n  justify-self: center;\n  display: grid;\n  align-content: center;\n  padding: 1rem;\n  -webkit-transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: all 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n.search__bar--input {\n  height: 4.5vh;\n  width: 30rem;\n  padding: 0.7rem 2rem;\n  border-radius: 10rem;\n  background-color: var(--color-star);\n  color: var(--color-espresso);\n  text-transform: uppercase;\n  text-align: center;\n  border: 0.1rem solid rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 0.1rem 0 rgba(0, 0, 0, 0.7);\n  -webkit-transition: all 0.2s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: all 0.2s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n@media only screen and (max-width: 32em) {\n  .search__bar--input {\n    width: 80vw;\n  }\n}\n@media only screen and (max-height: 26em) {\n  .search__bar--input {\n    height: 6.5vh;\n  }\n}\n.search__bar--input:focus {\n  width: 35rem;\n}\n@media only screen and (max-width: 32em) {\n  .search__bar--input:focus {\n    width: 80vw;\n  }\n}\n.search__bar--input-loading {\n  font-size: 1.8rem;\n}\n.search__sort {\n  grid-column: sort-start/sort-end;\n  display: grid;\n  grid-template-rows: 99% 1%;\n}\n@media only screen and (max-width: 32em) {\n  .search__sort {\n    align-self: center;\n    justify-self: center;\n    z-index: 100;\n    height: 4.5vh;\n    width: 6rem;\n    border-top-right-radius: 10rem;\n    border-bottom-right-radius: 10rem;\n    background-color: var(--color-star);\n    border-left: 0.1rem solid rgba(0, 0, 0, 0.25);\n  }\n}\n.search__sort--btn {\n  align-self: center;\n  justify-self: center;\n}\n@media only screen and (max-width: 32em) {\n  .search__sort--btn {\n    color: var(--color-mocha);\n    text-shadow: none;\n  }\n  .search__sort--btn span {\n    display: none;\n  }\n  .search__sort--btn:after {\n    content: \"A\";\n  }\n}\n.search__results {\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  gap: 0.2rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 5000;\n  max-height: 70%;\n  width: 30rem;\n  padding: 0rem 3rem;\n  padding-top: 2rem;\n  border-radius: 0.8rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: var(--font-small);\n  text-transform: uppercase;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-height: 26em) {\n  .search__results {\n    -webkit-transform: translate(-50%, -30%);\n            transform: translate(-50%, -30%);\n  }\n}\n.search__results:empty {\n  display: none;\n}\n.search__results ul:not(:last-child) {\n  border-bottom: 0.01rem solid var(--color-mocha);\n}\n.search__results ul:last-child {\n  padding-bottom: 2rem;\n}\n.search__results--item {\n  -webkit-transition: all 0.2s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: all 0.2s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n.search__results--item:hover {\n  color: var(--color-white);\n  letter-spacing: 0.2rem;\n}\n.search__results--close {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  color: var(--color-earth);\n  font-size: var(--font-xsmall);\n  text-transform: lowercase;\n  font-weight: 300;\n}\n.search__results--close:hover {\n  color: var(--color-white);\n}\n.search__loading {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 5000;\n}\n.main__cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-column-gap: 5rem;\n     -moz-column-gap: 5rem;\n          column-gap: 5rem;\n  row-gap: 2.5rem;\n  height: 112%;\n  padding: 5rem 10rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-width: 32em) {\n  .main__cards {\n    gap: 1rem;\n    padding: 1rem;\n  }\n}\n@media only screen and (max-width: 21em) {\n  .main__cards {\n    gap: 0rem;\n    padding: 0rem;\n  }\n}\n.list {\n  padding-top: 3rem;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 32em) {\n  .list {\n    padding-top: 1rem;\n  }\n}\n@media only screen and (max-height: 28em) {\n  .list {\n    padding-top: 1rem;\n  }\n}\n.list__titles {\n  display: table;\n  position: fixed;\n  right: 0;\n  left: 0;\n  margin-right: auto;\n  margin-left: auto;\n  height: 5vh;\n  width: 95vw;\n  border-spacing: 0.5rem;\n  font-size: var(--font-xsmall);\n}\n.list__titles--cell {\n  display: table-cell;\n  width: 4.4vw;\n  border-bottom: 0.1rem solid var(--color-blonde);\n  text-align: start;\n  vertical-align: bottom;\n  font-weight: 400;\n}\n@media only screen and (max-width: 76em) {\n  .list__titles--cell {\n    width: 19vw;\n  }\n}\n.list__titles--short {\n  display: table-cell;\n  width: 2vw;\n  border-bottom: 0.1rem solid var(--color-blonde);\n  text-align: start;\n  vertical-align: bottom;\n  font-weight: 400;\n}\n@media only screen and (max-width: 76em) {\n  .list__titles--short {\n    width: 15vw;\n  }\n}\n.list__items {\n  position: fixed;\n  -webkit-transform: translate(0.2vw, 5vh);\n          transform: translate(0.2vw, 5vh);\n  right: 0;\n  left: 0;\n  margin-right: auto;\n  margin-left: auto;\n  height: 52vh;\n  width: 95.2vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n@media only screen and (max-width: 76em) {\n  .mobile-hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpbmtzL2RyaW5rLWxpc3QvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFxkcmlua3NcXGRyaW5rLWxpc3RcXGRyaW5rLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RyaW5rcy9kcmluay1saXN0L2RyaW5rLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEVBQ0U7QUNBSjtBRElFO0VBUEY7SUFTSSwrRUFDRTtFQ0hKO0FBQ0Y7QURVQTtFQUNFLGlDQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUdBQ0U7QUNUSjtBRGNFO0VBQ0UsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsMEJBQUE7QUNiSjtBRGVJO0VBTkY7SUFRSSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUVBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQ0FBQTtJQUVBLG1DQUFBO0lBQ0EsOENBQUE7RUNmSjtBQUNGO0FEaUJJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ2ZOO0FEaUJNO0VBSkY7SUFNSSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0EsaUJBQUE7RUNmTjtFRGlCTTtJQUNFLGFBQUE7RUNmUjtFRGtCTTtJQUNFLDBCQUFBO0VDaEJSO0FBQ0Y7QURxQkU7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUVBLGlFQUFBO0VBQUEseURBQUE7QUNyQko7QUR1Qkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFFQSxpRUFBQTtFQUFBLHlEQUFBO0FDdkJOO0FEeUJNO0VBZkY7SUFpQkksV0FBQTtFQ3ZCTjtBQUNGO0FEeUJNO0VBcEJGO0lBc0JJLGFBQUE7RUN2Qk47QUFDRjtBRHlCTTtFQUNFLFlBQUE7QUN2QlI7QUR5QlE7RUFIRjtJQUtJLFdBQUE7RUN2QlI7QUFDRjtBRDBCTTtFQUNFLGlCQUFBO0FDeEJSO0FENkJFO0VBQ0UsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsMEJBQUE7QUM1Qko7QUQ4Qkk7RUFORjtJQVFJLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBRUEsYUFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtJQUNBLGlDQUFBO0lBRUEsbUNBQUE7SUFDQSw2Q0FBQTtFQzlCSjtBQUNGO0FEZ0NJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQzlCTjtBRGdDTTtFQUpGO0lBTUkseUJBQUE7SUFDQSxpQkFBQTtFQzlCTjtFRGdDTTtJQUNFLGFBQUE7RUM5QlI7RURpQ007SUFDRSxZQUFBO0VDL0JSO0FBQ0Y7QURvQ0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3RDSjtBRHdDSTtFQTNCRjtJQTZCSSx3Q0FBQTtZQUFBLGdDQUFBO0VDdENKO0FBQ0Y7QUR3Q0k7RUFFRSxhQUFBO0FDdkNOO0FEMENJO0VBQ0UsK0NBQUE7QUN4Q047QUQyQ0k7RUFFRSxvQkFBQTtBQzFDTjtBRDZDSTtFQUNFLGlFQUFBO0VBQUEseURBQUE7QUMzQ047QUQ2Q007RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FDM0NSO0FEK0NJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQy9DTjtBRGlETTtFQUNFLHlCQUFBO0FDL0NSO0FEb0RFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxhQUFBO0FDbERKO0FEd0RBO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFHQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUN4REY7QUQwREU7RUFmRjtJQWlCSSxTQUFBO0lBRUEsYUFBQTtFQ3pERjtBQUNGO0FEMkRFO0VBdEJGO0lBd0JJLFNBQUE7SUFFQSxhQUFBO0VDMURGO0FBQ0Y7QUQrREE7RUFDRSxpQkFBQTtFQUVBLHlCQUFBO0FDN0RGO0FEK0RFO0VBTEY7SUFPSSxpQkFBQTtFQzdERjtBQUNGO0FEK0RFO0VBVkY7SUFZSSxpQkFBQTtFQzdERjtBQUNGO0FEK0RFO0VBQ0UsY0FBQTtFQUVBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEsNkJBQUE7QUNoRUo7QURrRUk7RUFDRSxtQkFBQTtFQUVBLFlBQUE7RUFFQSwrQ0FBQTtFQUVBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ25FTjtBRHFFTTtFQVhGO0lBYUksV0FBQTtFQ25FTjtBQUNGO0FEc0VJO0VBQ0UsbUJBQUE7RUFFQSxVQUFBO0VBRUEsK0NBQUE7RUFFQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUN2RU47QUR5RU07RUFYRjtJQWFJLFdBQUE7RUN2RU47QUFDRjtBRDJFRTtFQUNFLGVBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUMzRUo7QURnRkU7RUFERjtJQUdJLGFBQUE7RUM3RUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rcy9kcmluay1saXN0L2RyaW5rLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJpbmstbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOlxyXG4gICAgW3NlYXJjaC1zdGFydF0gOHZoXHJcbiAgICBbc2VhcmNoLWVuZCBtYWluLXN0YXJ0XSA2MHZoXHJcbiAgICBbbWFpbi1lbmRdO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XHJcbiAgICAvLzQ0NiBMQU5EU0NBUEVcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpcclxuICAgICAgW3NlYXJjaC1zdGFydF0gMTJ2aFxyXG4gICAgICBbc2VhcmNoLWVuZCBtYWluLXN0YXJ0XSA1NnZoXHJcbiAgICAgIFttYWluLWVuZF07XHJcbiAgfVxyXG59XHJcblxyXG4vL1NFQVJDSCBCQVItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4uc2VhcmNoIHtcclxuICBncmlkLXJvdzogc2VhcmNoLXN0YXJ0IC8gc2VhcmNoLWVuZDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOlxyXG4gICAgW2xpc3Qtc3RhcnRdIDI1dndcclxuICAgIFtsaXN0LWVuZCBiYXItc3RhcnRdIDUwdndcclxuICAgIFtiYXItZW5kIHNvcnQtc3RhcnRdIDI1dndcclxuICAgIFtzb3J0LWVuZF07XHJcblxyXG4gICZfX2xpc3Qge1xyXG4gICAgZ3JpZC1jb2x1bW46IGxpc3Qtc3RhcnQgLyBsaXN0LWVuZDtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5OSUgMSU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgICAgIC8vNTAwXHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAgIGhlaWdodDogNC41dmg7XHJcbiAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTByZW07XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdGFyKTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1idG4ge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgICAgICAgLy81MDBcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoYnRuLWNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYmFyIHtcclxuICAgIGdyaWQtY29sdW1uOiBiYXItc3RhcnQgLyBiYXItZW5kO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xyXG5cclxuICAgICYtLWlucHV0IHtcclxuICAgICAgaGVpZ2h0OiA0LjV2aDtcclxuICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjdyZW0gMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdGFyKTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWVzcHJlc3NvKTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgICAgICAgLy81MDBcclxuICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjZlbSkge1xyXG4gICAgICAgIC8vNDE0IExBTkRTQ0FQRVxyXG4gICAgICAgIGhlaWdodDogNi41dmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIHdpZHRoOiAzNXJlbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgICAgICAgICAvLzUwMFxyXG4gICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWxvYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zb3J0IHtcclxuICAgIGdyaWQtY29sdW1uOiBzb3J0LXN0YXJ0IC8gc29ydC1lbmQ7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTklIDElO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xyXG4gICAgICAvLzUwMFxyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgICBoZWlnaHQ6IDQuNXZoO1xyXG4gICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTByZW07XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdGFyKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWJ0biB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcclxuICAgICAgICAvLzUwMFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tb2NoYSk7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJBXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19yZXN1bHRzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgIGdhcDogMC4ycmVtO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG5cclxuICAgIG1heC1oZWlnaHQ6IDcwJTtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIHBhZGRpbmc6IDByZW0gM3JlbTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtOyAvL1RPIEJFIFVTRUQgV0lUSCB1bDpsYXN0LWNoaWxkXHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjgpO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjZlbSkge1xyXG4gICAgICAvLzQxNCBMQU5EU0NBUEVcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIC8vQ1JFQVRFUyBVTklGT1JNIEJPUkRFUlxyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHVsOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjAxcmVtIHNvbGlkIHZhcigtLWNvbG9yLW1vY2hhKTtcclxuICAgIH1cclxuXHJcbiAgICB1bDpsYXN0LWNoaWxkIHtcclxuICAgICAgLy9TQ1JPTEwgUEFERElORyBGSVhcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi0taXRlbSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjcxLCAwLjAxLCAwLjA5LCAxLjUxKTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLWNsb3NlIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDFyZW07XHJcbiAgICAgIHJpZ2h0OiAxcmVtO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWVhcnRoKTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14c21hbGwpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vR1JJRCBWSUVXLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLm1haW5fX2NhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxOHJlbSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogNXJlbTtcclxuICByb3ctZ2FwOiAyLjVyZW07XHJcblxyXG4gIC8vQUREIFJPT00gRk9SIFNDUk9MTFxyXG4gIGhlaWdodDogMTEyJTtcclxuICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xyXG5cclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xyXG4gICAgLy81MDBcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMWVtKSB7XHJcbiAgICAvLzMyNSBDT05UUk9MIFdJVEggZHJpbmstaXRlbVxyXG4gICAgZ2FwOiAwcmVtO1xyXG5cclxuICAgIHBhZGRpbmc6IDByZW07XHJcbiAgfVxyXG59XHJcblxyXG4vL0xJU1QgVklFVy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5saXN0IHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgICAvLzUwMFxyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOGVtKSB7XHJcbiAgICAvLzQ0NiBMQU5EU0NBUEVcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGVzIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcbiAgICBib3JkZXItc3BhY2luZzogMC41cmVtO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14c21hbGwpO1xyXG5cclxuICAgICYtLWNlbGwge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cclxuICAgICAgd2lkdGg6IDQuNHZ3O1xyXG5cclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLWJsb25kZSk7XHJcblxyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzZlbSkge1xyXG4gICAgICAgIC8vMTIwMCBDT05UUk9MIFdJVEggZHJpbmstbGlzdFxyXG4gICAgICAgIHdpZHRoOiAxOXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tc2hvcnQge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cclxuICAgICAgd2lkdGg6IDJ2dztcclxuXHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ibG9uZGUpO1xyXG5cclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2ZW0pIHtcclxuICAgICAgICAvLzEyMDAgQ09OVFJPTCBXSVRIIGRyaW5rLWxpc3RcclxuICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faXRlbXMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4ydncsIDV2aCk7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICBoZWlnaHQ6IDUydmg7XHJcbiAgICB3aWR0aDogOTUuMnZ3OyAvL0FERCAwLjJ2dyBGT1IgU0NST0xMIEJBUlxyXG5cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgfVxyXG59XHJcblxyXG4ubW9iaWxlLWhpZGUge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzZlbSkge1xyXG4gICAgLy81MDAgQ09OVFJPTCBXSVRIIGRyaW5rLWxpbmVcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIi5kcmluay1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogW3NlYXJjaC1zdGFydF0gOHZoIFtzZWFyY2gtZW5kIG1haW4tc3RhcnRdIDYwdmggW21haW4tZW5kXTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcbiAgLmRyaW5rLWxpc3QtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFtzZWFyY2gtc3RhcnRdIDEydmggW3NlYXJjaC1lbmQgbWFpbi1zdGFydF0gNTZ2aCBbbWFpbi1lbmRdO1xuICB9XG59XG5cbi5zZWFyY2gge1xuICBncmlkLXJvdzogc2VhcmNoLXN0YXJ0L3NlYXJjaC1lbmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbbGlzdC1zdGFydF0gMjV2dyBbbGlzdC1lbmQgYmFyLXN0YXJ0XSA1MHZ3IFtiYXItZW5kIHNvcnQtc3RhcnRdIDI1dncgW3NvcnQtZW5kXTtcbn1cbi5zZWFyY2hfX2xpc3Qge1xuICBncmlkLWNvbHVtbjogbGlzdC1zdGFydC9saXN0LWVuZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5OSUgMSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcbiAgLnNlYXJjaF9fbGlzdCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBoZWlnaHQ6IDQuNXZoO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN0YXIpO1xuICAgIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIH1cbn1cbi5zZWFyY2hfX2xpc3QtLWJ0biB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcbiAgLnNlYXJjaF9fbGlzdC0tYnRuIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbW9jaGEpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIC5zZWFyY2hfX2xpc3QtLWJ0biBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWFyY2hfX2xpc3QtLWJ0bjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihidG4tY29udGVudCk7XG4gIH1cbn1cbi5zZWFyY2hfX2JhciB7XG4gIGdyaWQtY29sdW1uOiBiYXItc3RhcnQvYmFyLWVuZDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xufVxuLnNlYXJjaF9fYmFyLS1pbnB1dCB7XG4gIGhlaWdodDogNC41dmg7XG4gIHdpZHRoOiAzMHJlbTtcbiAgcGFkZGluZzogMC43cmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdGFyKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVzcHJlc3NvKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC43MSwgMC4wMSwgMC4wOSwgMS41MSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcbiAgLnNlYXJjaF9fYmFyLS1pbnB1dCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI2ZW0pIHtcbiAgLnNlYXJjaF9fYmFyLS1pbnB1dCB7XG4gICAgaGVpZ2h0OiA2LjV2aDtcbiAgfVxufVxuLnNlYXJjaF9fYmFyLS1pbnB1dDpmb2N1cyB7XG4gIHdpZHRoOiAzNXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xuICAuc2VhcmNoX19iYXItLWlucHV0OmZvY3VzIHtcbiAgICB3aWR0aDogODB2dztcbiAgfVxufVxuLnNlYXJjaF9fYmFyLS1pbnB1dC1sb2FkaW5nIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG4uc2VhcmNoX19zb3J0IHtcbiAgZ3JpZC1jb2x1bW46IHNvcnQtc3RhcnQvc29ydC1lbmQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOTklIDElO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XG4gIC5zZWFyY2hfX3NvcnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgaGVpZ2h0OiA0LjV2aDtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTByZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN0YXIpO1xuICAgIGJvcmRlci1sZWZ0OiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxufVxuLnNlYXJjaF9fc29ydC0tYnRuIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xuICAuc2VhcmNoX19zb3J0LS1idG4ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tb2NoYSk7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLnNlYXJjaF9fc29ydC0tYnRuIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNlYXJjaF9fc29ydC0tYnRuOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIkFcIjtcbiAgfVxufVxuLnNlYXJjaF9fcmVzdWx0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG4gIGdhcDogMC4ycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA1MDAwO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiAzMHJlbTtcbiAgcGFkZGluZzogMHJlbSAzcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyNmVtKSB7XG4gIC5zZWFyY2hfX3Jlc3VsdHMge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xuICB9XG59XG4uc2VhcmNoX19yZXN1bHRzOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWFyY2hfX3Jlc3VsdHMgdWw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDAuMDFyZW0gc29saWQgdmFyKC0tY29sb3ItbW9jaGEpO1xufVxuLnNlYXJjaF9fcmVzdWx0cyB1bDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4uc2VhcmNoX19yZXN1bHRzLS1pdGVtIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNzEsIDAuMDEsIDAuMDksIDEuNTEpO1xufVxuLnNlYXJjaF9fcmVzdWx0cy0taXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG59XG4uc2VhcmNoX19yZXN1bHRzLS1jbG9zZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVhcnRoKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXhzbWFsbCk7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc2VhcmNoX19yZXN1bHRzLS1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4uc2VhcmNoX19sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogNTAwMDtcbn1cblxuLm1haW5fX2NhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDE4cmVtKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDVyZW07XG4gIHJvdy1nYXA6IDIuNXJlbTtcbiAgaGVpZ2h0OiAxMTIlO1xuICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xuICAubWFpbl9fY2FyZHMge1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIxZW0pIHtcbiAgLm1haW5fX2NhcmRzIHtcbiAgICBnYXA6IDByZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgfVxufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XG4gIC5saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAubGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbn1cbi5saXN0X190aXRsZXMge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiA5NXZ3O1xuICBib3JkZXItc3BhY2luZzogMC41cmVtO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQteHNtYWxsKTtcbn1cbi5saXN0X190aXRsZXMtLWNlbGwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogNC40dnc7XG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ibG9uZGUpO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzZlbSkge1xuICAubGlzdF9fdGl0bGVzLS1jZWxsIHtcbiAgICB3aWR0aDogMTl2dztcbiAgfVxufVxuLmxpc3RfX3RpdGxlcy0tc2hvcnQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogMnZ3O1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgdmFyKC0tY29sb3ItYmxvbmRlKTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2ZW0pIHtcbiAgLmxpc3RfX3RpdGxlcy0tc2hvcnQge1xuICAgIHdpZHRoOiAxNXZ3O1xuICB9XG59XG4ubGlzdF9faXRlbXMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMnZ3LCA1dmgpO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgaGVpZ2h0OiA1MnZoO1xuICB3aWR0aDogOTUuMnZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NmVtKSB7XG4gIC5tb2JpbGUtaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/drinks/drink-list/drink-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/drinks/drink-list/drink-list.component.ts ***!
  \***********************************************************/
/*! exports provided: DrinkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkListComponent", function() { return DrinkListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _drinks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drinks.service */ "./src/app/drinks/drinks.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/route-animations */ "./src/app/shared/route-animations.ts");








let DrinkListComponent = class DrinkListComponent {
    constructor(drinksService, authService, userService) {
        this.drinksService = drinksService;
        this.authService = authService;
        this.userService = userService;
        this.isLoading = false;
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hidden = false;
        this.listView = false;
        this.view = "List view";
        this.mobileView = "≡";
        //REAL-TIME SEARCH FEATURE
        this.searchTerm
            .pipe(
        //EXTRACT TYPED INPUT
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((typed) => typed.target.value), 
        //DELAY API CALL FOR 400MS
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), 
        //RESTRICT TYPING ERR FROM GETTING SENT
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        //REQUIRE SEARCH TERM TO BE MORE THAN 1 LETTER
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(term => term.length > 0))
            .subscribe(searchTerm => {
            this.searching = true;
            //FETCH THE RESULTS
            this.drinksService
                .searchDrinks(searchTerm)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                this.searchResults = res.doc;
            }))
                //UPDATE UI
                .subscribe(searchTerm => {
                this.searching = true;
                this.hidden = false;
                this.onSearch(searchTerm);
            });
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.userFeature();
        //EXPOSE DRINK FOR DISPLAY WITH MINISCULE DELAY
        //TO REGISTER STARRED DRINKS IF ANY
        this.drinks$ = this.drinksService
            .getDrinks()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(150))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((drinks) => drinks.doc));
        this.isLoading = false;
    }
    onListView() {
        this.listView = !this.listView;
        if (this.listView === true) {
            this.view = "Grid view";
            this.mobileView = "⊞"; //⊞
        }
        else {
            this.view = "List view";
            this.mobileView = "≡"; //≡
        }
    }
    onSort() {
        this.userFeature();
        this.drinks$ = this.drinksService
            .getDrinksSorted()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(150))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((drinks) => drinks.doc));
    }
    onSearch(term) {
        this.drinksService.searchDrinks(term).subscribe(res => {
            this.searching = false;
        }, err => {
            this.searching = false;
        });
    }
    onHideSearchResults() {
        this.hidden = true;
    }
    userFeature() {
        //CHECK IF USER LOGGED IN & SHARE TO CHILD WITH LISTENER
        this.userIsAuth = this.authService.getIsAuth();
        this.authListenerSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuth => (this.userIsAuth = isAuth));
        if (this.userIsAuth) {
            //IF USER LOGGED IN, EXPOSE STARRED ARR TO COMPARE FOR DISPLAY IN CHILD
            this.userId = this.authService.getUserId();
            this.userService.getStarred().subscribe((starred) => {
                this.starreds = starred.doc;
            });
        }
        else if (!this.userIsAuth) {
            //IF NOT, SET UNUSED VARS TO NULL
            this.userId = null;
            this.starreds = null;
        }
    }
    ngOnDestroy() {
        this.authListenerSub.unsubscribe();
    }
};
DrinkListComponent.ctorParameters = () => [
    { type: _drinks_service__WEBPACK_IMPORTED_MODULE_4__["DrinksService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
DrinkListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-drink-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drink-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink-list/drink-list.component.html")).default,
        animations: [src_app_shared_route_animations__WEBPACK_IMPORTED_MODULE_7__["fadeTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drink-list.component.scss */ "./src/app/drinks/drink-list/drink-list.component.scss")).default]
    })
], DrinkListComponent);



/***/ }),

/***/ "./src/app/drinks/drink/drink.component.scss":
/*!***************************************************!*\
  !*** ./src/app/drinks/drink/drink.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drink-container {\n  display: grid;\n  grid-template-columns: auto;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpbmtzL2RyaW5rL0Q6XFxEb2N1bWVudHNcXERvY3VtZW50c1xcR2l0SHViXFxiYXJpc3RhYm9vay9zcmNcXGFwcFxcZHJpbmtzXFxkcmlua1xcZHJpbmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RyaW5rcy9kcmluay9kcmluay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rcy9kcmluay9kcmluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmluay1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIi5kcmluay1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/drinks/drink/drink.component.ts":
/*!*************************************************!*\
  !*** ./src/app/drinks/drink/drink.component.ts ***!
  \*************************************************/
/*! exports provided: DrinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkComponent", function() { return DrinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");



let DrinkComponent = class DrinkComponent {
    constructor(userService) {
        this.userService = userService;
        //STARRED FEATURE
        this.drinkIsStarred = false;
        this.star = "★";
    }
    ngOnInit() {
        if (this.userIsAuth) {
            //FIND IF DRINK IS STARRED, TOGGLE drinkIsStarred BUTTON
            this.starreds.forEach(el => {
                if (el.drink.id === this.drink.id) {
                    this.drinkIsStarred = true;
                    this.star = "☆";
                }
            });
        }
    }
    onSaveStarred() {
        //SERVER REQUIRES THE DRINK ID & USER ID FOR STARRED CREATION
        this.userService.saveStarred(this.drink.id, this.userId).subscribe(() => {
            //UPDATE VALUES & starreds ARR
            this.drinkIsStarred = true;
            this.star = "☆";
            this.updateStarred();
        });
    }
    onDeleteStarred() {
        //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
        this.userService
            .deleteStarred(this.starreds, this.drink.id)
            .subscribe(() => {
            //UPDATE VALUES & STARRED ARR
            this.drinkIsStarred = false;
            this.star = "★";
            this.updateStarred();
        });
    }
    //UPDATE STARRED DATA FOR DISPLAY
    updateStarred() {
        this.userService.getStarred().subscribe((starred) => {
            this.starreds = starred.doc;
        });
    }
    //ENABLES TOGGLE BUTTON
    clickHandler() {
        if (this.drinkIsStarred) {
            this.onDeleteStarred();
        }
        else if (!this.drinkIsStarred) {
            this.onSaveStarred();
        }
    }
};
DrinkComponent.ctorParameters = () => [
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkComponent.prototype, "drink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkComponent.prototype, "userIsAuth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkComponent.prototype, "userId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DrinkComponent.prototype, "starreds", void 0);
DrinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-drink",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drink.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drink/drink.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drink.component.scss */ "./src/app/drinks/drink/drink.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../shared/drink-card.scss */ "./src/app/shared/drink-card.scss")).default]
    })
], DrinkComponent);



/***/ }),

/***/ "./src/app/drinks/drinks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/drinks/drinks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DrinksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksRoutingModule", function() { return DrinksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drink_list_drink_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drink-list/drink-list.component */ "./src/app/drinks/drink-list/drink-list.component.ts");
/* harmony import */ var _drink_drink_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drink/drink.component */ "./src/app/drinks/drink/drink.component.ts");
/* harmony import */ var _drinks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinks.component */ "./src/app/drinks/drinks.component.ts");







const routes = [
    {
        path: "",
        component: _drink_list_drink_list_component__WEBPACK_IMPORTED_MODULE_4__["DrinkListComponent"],
        data: { animation: "DrinkListPage" }
    },
    { path: ":id", component: _drink_drink_component__WEBPACK_IMPORTED_MODULE_5__["DrinkComponent"], data: { animation: "DrinkPage" } },
    {
        path: "name/:slug",
        component: _drinks_component__WEBPACK_IMPORTED_MODULE_6__["DrinksComponent"],
        data: { animation: "DrinksPage" }
    }
];
let DrinksRoutingModule = class DrinksRoutingModule {
};
DrinksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], DrinksRoutingModule);



/***/ }),

/***/ "./src/app/drinks/drinks.component.scss":
/*!**********************************************!*\
  !*** ./src/app/drinks/drinks.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drinks-container {\n  display: grid;\n  grid-template-rows: 68vh;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.main__cards {\n  display: -webkit-box;\n  display: flex;\n}\n\n@media only screen and (max-width: 26em) {\n  .main__cards {\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    scrollbar-width: thin;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpbmtzL0Q6XFxEb2N1bWVudHNcXERvY3VtZW50c1xcR2l0SHViXFxiYXJpc3RhYm9vay9zcmNcXGFwcFxcZHJpbmtzXFxkcmlua3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RyaW5rcy9kcmlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURFQTtFQUVFLG9CQUFBO0VBQUEsYUFBQTtBQ0FGOztBREVFO0VBSkY7SUFNSSx5QkFBQTtZQUFBLG1CQUFBO0lBRUEsU0FBQTtJQUNBLFVBQUE7SUFFQSxZQUFBO0lBQ0EsV0FBQTtJQUVBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kcmlua3MvZHJpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyaW5rcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2OHZoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW5fX2NhcmRzIHtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNmVtKSB7XHJcbiAgICAvLzQxNFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgfVxyXG59XHJcbiIsIi5kcmlua3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2OHZoO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbl9fY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNmVtKSB7XG4gIC5tYWluX19jYXJkcyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/drinks/drinks.component.ts":
/*!********************************************!*\
  !*** ./src/app/drinks/drinks.component.ts ***!
  \********************************************/
/*! exports provided: DrinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksComponent", function() { return DrinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drinks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinks.service */ "./src/app/drinks/drinks.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");







let DrinksComponent = class DrinksComponent {
    constructor(drinksService, authService, userService, route) {
        this.drinksService = drinksService;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.userFeature();
        //FETCH SLUG FROM ROUTE PARAM
        this.slug = this.route.snapshot.paramMap.get("slug");
        this.drinks$ = this.drinksService
            .getDrinkSlug(this.slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(150))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((drinks) => drinks.doc));
        this.isLoading = false;
    }
    userFeature() {
        //CHECK IF USER LOGGED IN & SHARE TO CHILD WITH LISTENER
        this.userIsAuth = this.authService.getIsAuth();
        this.authListenerSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuth => (this.userIsAuth = isAuth));
        if (this.userIsAuth) {
            //IF USER LOGGED IN, EXPOSE STARRED ARR TO COMPARE FOR DISPLAY IN CHILD
            this.userId = this.authService.getUserId();
            this.userService.getStarred().subscribe((starred) => {
                this.starreds = starred.doc;
            });
        }
        else if (!this.userIsAuth) {
            //IF NOT, SET UNUSED VARS TO NULL
            this.userId = null;
            this.starreds = null;
        }
    }
    ngOnDestroy() {
        this.authListenerSub.unsubscribe();
    }
};
DrinksComponent.ctorParameters = () => [
    { type: _drinks_service__WEBPACK_IMPORTED_MODULE_4__["DrinksService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DrinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-drinks",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drinks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drinks/drinks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drinks.component.scss */ "./src/app/drinks/drinks.component.scss")).default]
    })
], DrinksComponent);



/***/ }),

/***/ "./src/app/drinks/drinks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/drinks/drinks.module.ts ***!
  \*****************************************/
/*! exports provided: DrinksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksModule", function() { return DrinksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _drinks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinks.component */ "./src/app/drinks/drinks.component.ts");
/* harmony import */ var _drink_drink_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drink/drink.component */ "./src/app/drinks/drink/drink.component.ts");
/* harmony import */ var _drink_list_drink_item_drink_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drink-list/drink-item/drink-item.component */ "./src/app/drinks/drink-list/drink-item/drink-item.component.ts");
/* harmony import */ var _drink_list_drink_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drink-list/drink-list.component */ "./src/app/drinks/drink-list/drink-list.component.ts");
/* harmony import */ var _drinks_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drinks-routing.module */ "./src/app/drinks/drinks-routing.module.ts");
/* harmony import */ var _shared_remove_duplicates_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/remove-duplicates.pipe */ "./src/app/shared/remove-duplicates.pipe.ts");
/* harmony import */ var _drink_list_drink_line_drink_line_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drink-list/drink-line/drink-line.component */ "./src/app/drinks/drink-list/drink-line/drink-line.component.ts");











let DrinksModule = class DrinksModule {
};
DrinksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _drinks_component__WEBPACK_IMPORTED_MODULE_4__["DrinksComponent"],
            _drink_drink_component__WEBPACK_IMPORTED_MODULE_5__["DrinkComponent"],
            _drink_list_drink_item_drink_item_component__WEBPACK_IMPORTED_MODULE_6__["DrinkItemComponent"],
            _drink_list_drink_list_component__WEBPACK_IMPORTED_MODULE_7__["DrinkListComponent"],
            _drink_list_drink_line_drink_line_component__WEBPACK_IMPORTED_MODULE_10__["DrinkLineComponent"],
            _shared_remove_duplicates_pipe__WEBPACK_IMPORTED_MODULE_9__["RemoveDuplicatesPipe"]
        ],
        imports: [_drinks_routing_module__WEBPACK_IMPORTED_MODULE_8__["DrinksRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
    })
], DrinksModule);



/***/ }),

/***/ "./src/app/drinks/drinks.service.ts":
/*!******************************************!*\
  !*** ./src/app/drinks/drinks.service.ts ***!
  \******************************************/
/*! exports provided: DrinksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksService", function() { return DrinksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




const ROOT_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/drinks`;
let DrinksService = class DrinksService {
    constructor(http) {
        this.http = http;
    }
    getDrinks() {
        return this.http.get(`${ROOT_URL}`);
    }
    //FETCH DRINKS DATA SORTED BY NAME
    getDrinksSorted() {
        return this.http.get(`${ROOT_URL}?sort=name`);
    }
    getDrink(id) {
        return this.http.get(`${ROOT_URL}/${id}`);
    }
    getDrinkSlug(slug) {
        return this.http.get(`${ROOT_URL}/name/${slug}`);
    }
    searchDrinks(term) {
        return this.http.get(`${ROOT_URL}/search?drink=${term}`);
    }
};
DrinksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DrinksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DrinksService);



/***/ }),

/***/ "./src/app/shared/drink-card.scss":
/*!****************************************!*\
  !*** ./src/app/shared/drink-card.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drink-card,\n.starred-card {\n  display: grid;\n  grid-template-rows: 0.01rem 8rem 3rem 1fr;\n  justify-items: center;\n  row-gap: 1.5rem;\n  max-height: 50rem;\n  width: 30rem;\n  padding: 3rem 2rem;\n  margin: 0 2rem;\n  border-radius: 0.8rem;\n  box-shadow: inset 0 0.1rem 0 rgba(255, 255, 255, 0.7);\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: -webkit-transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n  transition: transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51), -webkit-transform 0.3s cubic-bezier(0.71, 0.01, 0.09, 1.51);\n}\n.drink-card:hover,\n.starred-card:hover {\n  -webkit-transform: translateY(-0.5rem) scale(1.02);\n          transform: translateY(-0.5rem) scale(1.02);\n  box-shadow: inset 0 0.1rem 0 rgba(255, 255, 255, 0.7), 0 0.3rem 0.3rem rgba(0, 0, 0, 0.125), 0 0.35rem 0.35rem rgba(0, 0, 0, 0.1), 0 0.45rem 0.45rem rgba(0, 0, 0, 0.75), 0 0.65rem 0.65rem rgba(0, 0, 0, 0.5), 0 1.1rem 1.1rem rgba(0, 0, 0, 0.025);\n}\n.drink-card__style--hot,\n.starred-card__style--hot {\n  background: radial-gradient(circle at bottom right, var(--color-star), var(--color-hot) 80%, var(--color-blonde));\n}\n.drink-card__style--iced,\n.starred-card__style--iced {\n  background: radial-gradient(circle at bottom right, var(--color-star), var(--color-iced) 80%, var(--color-blonde));\n}\n.drink-card__style--frozen,\n.starred-card__style--frozen {\n  background: radial-gradient(circle at bottom right, var(--color-star), var(--color-frozen) 80%, var(--color-blonde));\n}\n.drink-card__star--btn,\n.starred-card__star--btn {\n  position: relative;\n  -webkit-transform: translate(-14rem, -8.5rem) rotate(-90deg);\n          transform: translate(-14rem, -8.5rem) rotate(-90deg);\n  font-size: 9rem;\n}\n.drink-card__star--btn:hover,\n.starred-card__star--btn:hover {\n  text-shadow: 0 0 0.5rem currentColor, 0 0 1rem var(--color-blonde), 0 0 2rem var(--color-white);\n}\n.drink-card__code,\n.starred-card__code {\n  display: grid;\n  grid-template-columns: 25% 50% 25%;\n  grid-template-rows: 25% 50% 25%;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: center;\n}\n.drink-card__code--letter,\n.starred-card__code--letter {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  position: relative;\n  font-family: \"Italiana\", sans-serif;\n  font-size: 8rem;\n  color: var(--color-white);\n  text-shadow: -0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.4), 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);\n}\n.drink-card__code--box,\n.starred-card__code--box {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  position: relative;\n  height: 4.8rem;\n  width: 8.5rem;\n  border: 0.1rem solid var(--color-white);\n  opacity: 0.2;\n  box-shadow: 0 0 0.5rem 0.2rem rgba(0, 0, 0, 0.5), inset 0 0 0.5rem 0.2rem rgba(0, 0, 0, 0.5);\n}\n.drink-card__misc,\n.starred-card__misc {\n  align-self: flex-end;\n  justify-self: flex-end;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  height: 3rem;\n}\n.drink-card__misc--season,\n.starred-card__misc--season {\n  align-self: flex-end;\n  -webkit-transform: translate(-1.5rem, 1.3rem);\n          transform: translate(-1.5rem, 1.3rem);\n  width: 3rem;\n}\n.drink-card__misc--season img,\n.starred-card__misc--season img {\n  width: 3rem;\n  opacity: 0.5;\n}\n.drink-card__misc--form,\n.starred-card__misc--form {\n  align-self: flex-end;\n  -webkit-transform: translate(-1.8rem, 0.8rem);\n          transform: translate(-1.8rem, 0.8rem);\n  height: 2rem;\n  width: 4rem;\n  border-radius: 3.2rem;\n  text-align: center;\n  color: var(--color-white);\n}\n.drink-card__misc--form-hot,\n.starred-card__misc--form-hot {\n  background-color: var(--color-hot);\n}\n.drink-card__misc--form-iced,\n.starred-card__misc--form-iced {\n  background-color: var(--color-iced);\n}\n.drink-card__misc--form-frozen,\n.starred-card__misc--form-frozen {\n  -webkit-transform: translate(-2.5rem, 0.8rem);\n          transform: translate(-2.5rem, 0.8rem);\n  width: 5.5rem;\n  background-color: var(--color-frozen);\n}\n.drink-card__value,\n.starred-card__value {\n  display: grid;\n  grid-auto-columns: 25rem;\n  gap: 0.5rem;\n  font-size: var(--font-small);\n  color: var(--color-white);\n  box-shadow: 0 0 1rem 0.1;\n}\n.drink-card__value--pair,\n.starred-card__value--pair {\n  display: grid;\n  grid-template-columns: 30% 70%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n}\n.drink-card__value--pair-key,\n.starred-card__value--pair-key {\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n.drink-card__value--pair-value,\n.starred-card__value--pair-value {\n  display: grid;\n  grid-template-columns: auto;\n  -webkit-column-gap: 1rem;\n     -moz-column-gap: 1rem;\n          column-gap: 1rem;\n  padding: 0.5rem;\n  background: radial-gradient(circle at top right, var(--color-coffee), var(--color-blonde), var(--color-coffee));\n  border-radius: 0.3rem;\n  border: 0.1rem solid rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 0.1rem 0 rgba(0, 0, 0, 0.7);\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.drink-card__value--pair-box1,\n.starred-card__value--pair-box1 {\n  justify-self: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: var(--color-espresso);\n  text-align: center;\n  grid-column-start: 1;\n}\n.drink-card__value--pair-box2,\n.starred-card__value--pair-box2 {\n  justify-self: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: var(--color-espresso);\n  text-align: center;\n  grid-column-start: 2;\n}\n.drink-card__value--pair-box3,\n.starred-card__value--pair-box3 {\n  justify-self: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: var(--color-espresso);\n  text-align: center;\n  grid-column-start: 3;\n}\n.drink-card__value--pair-box4,\n.starred-card__value--pair-box4 {\n  justify-self: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: var(--color-espresso);\n  text-align: center;\n  grid-column-start: 4;\n}\n.scroll-container {\n  height: 108%;\n  padding-right: 3.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL0Q6XFxEb2N1bWVudHNcXERvY3VtZW50c1xcR2l0SHViXFxiYXJpc3RhYm9vay9zcmNcXGFwcFxcc2hhcmVkXFxkcmluay1jYXJkLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9kcmluay1jYXJkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBQTtFQUNBLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7RUFDQSxxREFBQTtFQUVBLCtFQUFBO0VBQUEsdUVBQUE7RUFBQSwrREFBQTtFQUFBLDRIQUFBO0FDRkY7QURJRTs7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0VBQ0Esb1BBQUE7QUNESjtBRFNJOztFQUNFLGlIQUFBO0FDTk47QURjSTs7RUFDRSxrSEFBQTtBQ1hOO0FEbUJJOztFQUNFLG9IQUFBO0FDaEJOO0FEMEJJOztFQUNFLGtCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtFQUVBLGVBQUE7QUN4Qk47QUQwQk07O0VBQ0UsK0ZBQUE7QUN2QlI7QUQ2QkU7O0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7QUMxQko7QUQ0Qkk7O0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFFQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtGQUFBO0FDM0JOO0FEK0JJOztFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLGFBQUE7RUFFQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtBQy9CTjtBRHFDRTs7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBRUEsWUFBQTtBQ3BDSjtBRHNDSTs7RUFDRSxvQkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFFQSxXQUFBO0FDcENOO0FEc0NNOztFQUNFLFdBQUE7RUFFQSxZQUFBO0FDcENSO0FEd0NJOztFQUNFLG9CQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDdkNOO0FEeUNNOztFQUNFLGtDQUFBO0FDdENSO0FEeUNNOztFQUNFLG1DQUFBO0FDdENSO0FEeUNNOztFQUNFLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxhQUFBO0VBRUEscUNBQUE7QUN2Q1I7QUQ0Q0U7O0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQzFDSjtBRDRDSTs7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtBQ3pDTjtBRDJDTTs7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDeENSO0FEMkNNOztFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUVBLGVBQUE7RUFFQSwrR0FBQTtFQU1BLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNoRFI7QUQ4RFE7O0VBVEUsb0JBQUE7RUFFQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLHVDQUFBO0VBQ0Esa0JBQUE7RUFLQSxvQkFBQTtBQ3ZEVjtBRDBEUTs7RUFkRSxvQkFBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBRUEsdUNBQUE7RUFDQSxrQkFBQTtFQVVBLG9CQUFBO0FDbkRWO0FEc0RROztFQW5CRSxvQkFBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBRUEsdUNBQUE7RUFDQSxrQkFBQTtFQWVBLG9CQUFBO0FDL0NWO0FEa0RROztFQXhCRSxvQkFBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBRUEsdUNBQUE7RUFDQSxrQkFBQTtFQW9CQSxvQkFBQTtBQzNDVjtBRG1EQTtFQUVFLFlBQUE7RUFFQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ25ERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kcmluay1jYXJkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJpbmstY2FyZCxcclxuLnN0YXJyZWQtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMDFyZW0gOHJlbSAzcmVtIDFmcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgcm93LWdhcDogMS41cmVtO1xyXG5cclxuICBtYXgtaGVpZ2h0OiA1MHJlbTtcclxuICB3aWR0aDogMzByZW07XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIG1hcmdpbjogMCAycmVtO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjFyZW0gMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjcxLCAwLjAxLCAwLjA5LCAxLjUxKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSkgc2NhbGUoMS4wMik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuMXJlbSAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgICAgMCAwLjNyZW0gMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAuMzVyZW0gMC4zNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgIDAgMC40NXJlbSAwLjQ1cmVtIHJnYmEoMCwgMCwgMCwgMC43NSksXHJcbiAgICAgIDAgMC42NXJlbSAwLjY1cmVtIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxLjFyZW0gMS4xcmVtIHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG4gIH1cclxuXHJcbiAgLy9WQVJJQUJMRSBTVFlMRVxyXG4gICZfX3N0eWxlIHtcclxuICAgICYtLWhvdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBjaXJjbGUgYXQgYm90dG9tIHJpZ2h0LFxyXG4gICAgICAgIHZhcigtLWNvbG9yLXN0YXIpLFxyXG4gICAgICAgIHZhcigtLWNvbG9yLWhvdCkgODAlLFxyXG4gICAgICAgIHZhcigtLWNvbG9yLWJsb25kZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pY2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGNpcmNsZSBhdCBib3R0b20gcmlnaHQsXHJcbiAgICAgICAgdmFyKC0tY29sb3Itc3RhciksXHJcbiAgICAgICAgdmFyKC0tY29sb3ItaWNlZCkgODAlLFxyXG4gICAgICAgIHZhcigtLWNvbG9yLWJsb25kZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1mcm96ZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgY2lyY2xlIGF0IGJvdHRvbSByaWdodCxcclxuICAgICAgICB2YXIoLS1jb2xvci1zdGFyKSxcclxuICAgICAgICB2YXIoLS1jb2xvci1mcm96ZW4pIDgwJSxcclxuICAgICAgICB2YXIoLS1jb2xvci1ibG9uZGUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zdGFyIHtcclxuICAgICYtLWJ0biB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE0cmVtLCAtOC41cmVtKSByb3RhdGUoLTkwZGVnKTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogOXJlbTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMC41cmVtIGN1cnJlbnRDb2xvciwgMCAwIDFyZW0gdmFyKC0tY29sb3ItYmxvbmRlKSxcclxuICAgICAgICAgIDAgMCAycmVtIHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29kZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNTAlIDI1JTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDUwJSAyNSU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICYtLWxldHRlciB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG5cclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgZm9udC1mYW1pbHk6IFwiSXRhbGlhbmFcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTAuMXJlbSAtMC4xcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICAgICAgMC4xcmVtIDAuMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWJveCB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG5cclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgaGVpZ2h0OiA0LjhyZW07XHJcbiAgICAgIHdpZHRoOiA4LjVyZW07XHJcblxyXG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgIGluc2V0IDAgMCAwLjVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vVkFSSUFCTEUgU1RZTEVcclxuICAmX19taXNjIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG5cclxuICAgIGhlaWdodDogM3JlbTtcclxuXHJcbiAgICAmLS1zZWFzb24ge1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNXJlbSwgMS4zcmVtKTtcclxuXHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogM3JlbTtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tZm9ybSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMS44cmVtLCAwLjhyZW0pO1xyXG5cclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG5cclxuICAgICAgJi1ob3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtaWNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaWNlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtZnJvemVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41cmVtLCAwLjhyZW0pO1xyXG4gICAgICAgIHdpZHRoOiA1LjVyZW07XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZyb3plbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3ZhbHVlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjVyZW07XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMTtcclxuXHJcbiAgICAmLS1wYWlyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICAmLWtleSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXZhbHVlIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICAgIGNpcmNsZSBhdCB0b3AgcmlnaHQsXHJcbiAgICAgICAgICB2YXIoLS1jb2xvci1jb2ZmZWUpLFxyXG4gICAgICAgICAgdmFyKC0tY29sb3ItYmxvbmRlKSxcclxuICAgICAgICAgIHZhcigtLWNvbG9yLWNvZmZlZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcblxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ib3gge1xyXG4gICAgICAgIEBtaXhpbiBib3gge1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICB3aWR0aDogMi41cmVtO1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVzcHJlc3NvKTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYxIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGJveDtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYm94O1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmMyB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBib3g7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY0IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGJveDtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9jYXJkX192YWx1ZVxyXG4uc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgLy9DT05UUk9MIFdJVEggY2FyZCBwYWRkaW5nLWJvdHRvbVxyXG4gIGhlaWdodDogMTA4JTtcclxuICAvL0NSRUFURVMgR0FQXHJcbiAgcGFkZGluZy1yaWdodDogMy41cmVtO1xyXG5cclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbn1cclxuIiwiLmRyaW5rLWNhcmQsXG4uc3RhcnJlZC1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjAxcmVtIDhyZW0gM3JlbSAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMS41cmVtO1xuICBtYXgtaGVpZ2h0OiA1MHJlbTtcbiAgd2lkdGg6IDMwcmVtO1xuICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gIG1hcmdpbjogMCAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xcmVtIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43MSwgMC4wMSwgMC4wOSwgMS41MSk7XG59XG4uZHJpbmstY2FyZDpob3Zlcixcbi5zdGFycmVkLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSkgc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xcmVtIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCAwIDAuM3JlbSAwLjNyZW0gcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMC4zNXJlbSAwLjM1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwLjQ1cmVtIDAuNDVyZW0gcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAwLjY1cmVtIDAuNjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDEuMXJlbSAxLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjAyNSk7XG59XG4uZHJpbmstY2FyZF9fc3R5bGUtLWhvdCxcbi5zdGFycmVkLWNhcmRfX3N0eWxlLS1ob3Qge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSByaWdodCwgdmFyKC0tY29sb3Itc3RhciksIHZhcigtLWNvbG9yLWhvdCkgODAlLCB2YXIoLS1jb2xvci1ibG9uZGUpKTtcbn1cbi5kcmluay1jYXJkX19zdHlsZS0taWNlZCxcbi5zdGFycmVkLWNhcmRfX3N0eWxlLS1pY2VkIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20gcmlnaHQsIHZhcigtLWNvbG9yLXN0YXIpLCB2YXIoLS1jb2xvci1pY2VkKSA4MCUsIHZhcigtLWNvbG9yLWJsb25kZSkpO1xufVxuLmRyaW5rLWNhcmRfX3N0eWxlLS1mcm96ZW4sXG4uc3RhcnJlZC1jYXJkX19zdHlsZS0tZnJvemVuIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20gcmlnaHQsIHZhcigtLWNvbG9yLXN0YXIpLCB2YXIoLS1jb2xvci1mcm96ZW4pIDgwJSwgdmFyKC0tY29sb3ItYmxvbmRlKSk7XG59XG4uZHJpbmstY2FyZF9fc3Rhci0tYnRuLFxuLnN0YXJyZWQtY2FyZF9fc3Rhci0tYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTRyZW0sIC04LjVyZW0pIHJvdGF0ZSgtOTBkZWcpO1xuICBmb250LXNpemU6IDlyZW07XG59XG4uZHJpbmstY2FyZF9fc3Rhci0tYnRuOmhvdmVyLFxuLnN0YXJyZWQtY2FyZF9fc3Rhci0tYnRuOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjVyZW0gY3VycmVudENvbG9yLCAwIDAgMXJlbSB2YXIoLS1jb2xvci1ibG9uZGUpLCAwIDAgMnJlbSB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4uZHJpbmstY2FyZF9fY29kZSxcbi5zdGFycmVkLWNhcmRfX2NvZGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA1MCUgMjUlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA1MCUgMjUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uZHJpbmstY2FyZF9fY29kZS0tbGV0dGVyLFxuLnN0YXJyZWQtY2FyZF9fY29kZS0tbGV0dGVyIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDIvMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJJdGFsaWFuYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDhyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC40KSwgMC4xcmVtIDAuMXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmRyaW5rLWNhcmRfX2NvZGUtLWJveCxcbi5zdGFycmVkLWNhcmRfX2NvZGUtLWJveCB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAyLzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0LjhyZW07XG4gIHdpZHRoOiA4LjVyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgb3BhY2l0eTogMC4yO1xuICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuNSksIGluc2V0IDAgMCAwLjVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5kcmluay1jYXJkX19taXNjLFxuLnN0YXJyZWQtY2FyZF9fbWlzYyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGhlaWdodDogM3JlbTtcbn1cbi5kcmluay1jYXJkX19taXNjLS1zZWFzb24sXG4uc3RhcnJlZC1jYXJkX19taXNjLS1zZWFzb24ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNXJlbSwgMS4zcmVtKTtcbiAgd2lkdGg6IDNyZW07XG59XG4uZHJpbmstY2FyZF9fbWlzYy0tc2Vhc29uIGltZyxcbi5zdGFycmVkLWNhcmRfX21pc2MtLXNlYXNvbiBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuLmRyaW5rLWNhcmRfX21pc2MtLWZvcm0sXG4uc3RhcnJlZC1jYXJkX19taXNjLS1mb3JtIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjhyZW0sIDAuOHJlbSk7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLmRyaW5rLWNhcmRfX21pc2MtLWZvcm0taG90LFxuLnN0YXJyZWQtY2FyZF9fbWlzYy0tZm9ybS1ob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ob3QpO1xufVxuLmRyaW5rLWNhcmRfX21pc2MtLWZvcm0taWNlZCxcbi5zdGFycmVkLWNhcmRfX21pc2MtLWZvcm0taWNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWljZWQpO1xufVxuLmRyaW5rLWNhcmRfX21pc2MtLWZvcm0tZnJvemVuLFxuLnN0YXJyZWQtY2FyZF9fbWlzYy0tZm9ybS1mcm96ZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41cmVtLCAwLjhyZW0pO1xuICB3aWR0aDogNS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mcm96ZW4pO1xufVxuLmRyaW5rLWNhcmRfX3ZhbHVlLFxuLnN0YXJyZWQtY2FyZF9fdmFsdWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tY29sdW1uczogMjVyZW07XG4gIGdhcDogMC41cmVtO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBib3gtc2hhZG93OiAwIDAgMXJlbSAwLjE7XG59XG4uZHJpbmstY2FyZF9fdmFsdWUtLXBhaXIsXG4uc3RhcnJlZC1jYXJkX192YWx1ZS0tcGFpciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuLmRyaW5rLWNhcmRfX3ZhbHVlLS1wYWlyLWtleSxcbi5zdGFycmVkLWNhcmRfX3ZhbHVlLS1wYWlyLWtleSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5kcmluay1jYXJkX192YWx1ZS0tcGFpci12YWx1ZSxcbi5zdGFycmVkLWNhcmRfX3ZhbHVlLS1wYWlyLXZhbHVlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIHJpZ2h0LCB2YXIoLS1jb2xvci1jb2ZmZWUpLCB2YXIoLS1jb2xvci1ibG9uZGUpLCB2YXIoLS1jb2xvci1jb2ZmZWUpKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmRyaW5rLWNhcmRfX3ZhbHVlLS1wYWlyLWJveDEsXG4uc3RhcnJlZC1jYXJkX192YWx1ZS0tcGFpci1ib3gxIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lc3ByZXNzbyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG59XG4uZHJpbmstY2FyZF9fdmFsdWUtLXBhaXItYm94Mixcbi5zdGFycmVkLWNhcmRfX3ZhbHVlLS1wYWlyLWJveDIge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWVzcHJlc3NvKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbn1cbi5kcmluay1jYXJkX192YWx1ZS0tcGFpci1ib3gzLFxuLnN0YXJyZWQtY2FyZF9fdmFsdWUtLXBhaXItYm94MyB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZXNwcmVzc28pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xufVxuLmRyaW5rLWNhcmRfX3ZhbHVlLS1wYWlyLWJveDQsXG4uc3RhcnJlZC1jYXJkX192YWx1ZS0tcGFpci1ib3g0IHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lc3ByZXNzbyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XG59XG5cbi5zY3JvbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDglO1xuICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/global-error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/global-error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alert/alert.service */ "./src/app/components/alert/alert.service.ts");





let GlobalErrorHandler = class GlobalErrorHandler {
    constructor(injector, alertService) {
        this.injector = injector;
        this.alertService = alertService;
    }
    handleError(err) {
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.alertService.error(`Request URL: ${router.url}`, {
            autoClose: true,
            keepAfterRouteChange: true
        });
        console.log(`Request URL: ${router.url}`);
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
            this.alertService.error(`${err.status}: ${err.message}`, {
                autoClose: true,
                keepAfterRouteChange: true
            });
            console.error(`${err.status}: ${err.message}`);
        }
        else {
            this.alertService.error(`An error occurred: ${err.message}`, {
                autoClose: true,
                keepAfterRouteChange: true
            });
            console.error(`An error occurred: ${err.message}`);
        }
    }
};
GlobalErrorHandler.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _components_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
GlobalErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalErrorHandler);



/***/ }),

/***/ "./src/app/shared/remove-duplicates.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/remove-duplicates.pipe.ts ***!
  \**************************************************/
/*! exports provided: RemoveDuplicatesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDuplicatesPipe", function() { return RemoveDuplicatesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let RemoveDuplicatesPipe = class RemoveDuplicatesPipe {
    transform(value) {
        if (value !== undefined && value !== null) {
            return lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](value, "name");
        }
        return value;
    }
};
RemoveDuplicatesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "removeDuplicates"
    })
], RemoveDuplicatesPipe);



/***/ }),

/***/ "./src/app/shared/route-animations.ts":
/*!********************************************!*\
  !*** ./src/app/shared/route-animations.ts ***!
  \********************************************/
/*! exports provided: fade, fadeTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeTrigger", function() { return fadeTrigger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: "relative" }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: "0" }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: "1" }))
        ], {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true })
    ])
]);
const fadeTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeTrigger", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
    ])
]);


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _global_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-error-handler.service */ "./src/app/shared/global-error-handler.service.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _global_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["GlobalErrorHandler"] }]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/user/starred-list/starred-item/starred-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/user/starred-list/starred-item/starred-item.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 32em) {\n  .starred-item-container {\n    padding: 0 4rem;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n  }\n}\n@media only screen and (max-width: 24em) {\n  .starred-item-container {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n}\n@media only screen and (max-width: 22em) {\n  .starred-item-container {\n    padding: 0 2rem;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdGFycmVkLWxpc3Qvc3RhcnJlZC1pdGVtL0Q6XFxEb2N1bWVudHNcXERvY3VtZW50c1xcR2l0SHViXFxiYXJpc3RhYm9vay9zcmNcXGFwcFxcdXNlclxcc3RhcnJlZC1saXN0XFxzdGFycmVkLWl0ZW1cXHN0YXJyZWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9zdGFycmVkLWxpc3Qvc3RhcnJlZC1pdGVtL3N0YXJyZWQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQURGO0lBR0ksZUFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUNBRjtBQUNGO0FERUU7RUFQRjtJQVNJLDhCQUFBO1lBQUEsc0JBQUE7RUNBRjtBQUNGO0FERUU7RUFaRjtJQWNJLGVBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc3RhcnJlZC1saXN0L3N0YXJyZWQtaXRlbS9zdGFycmVkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnJlZC1pdGVtLWNvbnRhaW5lciB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgICAvLzUwMFxyXG4gICAgcGFkZGluZzogMCA0cmVtO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNGVtKSB7XHJcbiAgICAvLzM3NVxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xyXG4gICAgLy8zMjBcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XG4gIC5zdGFycmVkLWl0ZW0tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDRyZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0ZW0pIHtcbiAgLnN0YXJyZWQtaXRlbS1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjJlbSkge1xuICAuc3RhcnJlZC1pdGVtLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/starred-list/starred-item/starred-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/starred-list/starred-item/starred-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: StarredItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredItemComponent", function() { return StarredItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");



let StarredItemComponent = class StarredItemComponent {
    constructor(userService) {
        this.userService = userService;
        this.viewStarred = false;
        this.star = "☆";
        this.isDisabled = false;
    }
    //TOGGLE STARRED PREVIEW
    onViewStarred() {
        this.viewStarred = !this.viewStarred;
    }
    onDeleteStarred() {
        //PLUG IN STARRED ARR & DRINK ID FOR COMPARISON IN DELETE SERVICE
        this.userService
            .deleteStarred(this.starreds, this.starredDrink.id)
            .subscribe(() => {
            this.star = "★";
            this.isDisabled = true;
        });
    }
};
StarredItemComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StarredItemComponent.prototype, "starredDrink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StarredItemComponent.prototype, "starreds", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StarredItemComponent.prototype, "index", void 0);
StarredItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-starred-item",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starred-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/starred-list/starred-item/starred-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starred-item.component.scss */ "./src/app/user/starred-list/starred-item/starred-item.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../shared/drink-card.scss */ "./src/app/shared/drink-card.scss")).default]
    })
], StarredItemComponent);



/***/ }),

/***/ "./src/app/user/starred-list/starred-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/starred-list/starred-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".starred-list-container {\n  display: grid;\n  grid-template-rows: 8vh 60vh;\n}\n\n.sort {\n  display: grid;\n  height: 8vh;\n}\n\n.sort__btn {\n  align-self: center;\n  justify-self: center;\n}\n\n.main {\n  height: 112%;\n  padding-bottom: 10rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n\n@media only screen and (max-width: 65em) {\n  .main {\n    height: 100%;\n    padding: 0 0;\n  }\n}\n\n@media only screen and (max-height: 28em) {\n  .main {\n    height: 112%;\n    padding-bottom: 10rem;\n  }\n}\n\n.main__cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 30rem);\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  -webkit-column-gap: 10rem;\n     -moz-column-gap: 10rem;\n          column-gap: 10rem;\n  row-gap: 5rem;\n  padding: 5rem 10rem;\n}\n\n@media only screen and (max-width: 65em) {\n  .main__cards {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    margin: 0;\n    padding: 0;\n    height: 60vh;\n    width: auto;\n    overflow-x: auto;\n    overflow-y: hidden;\n    scrollbar-width: thin;\n  }\n}\n\n@media only screen and (max-height: 26em) {\n  .main__cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 30rem);\n    -webkit-box-align: center;\n            align-items: center;\n    justify-content: space-around;\n    -webkit-column-gap: 10rem;\n       -moz-column-gap: 10rem;\n            column-gap: 10rem;\n    row-gap: 5rem;\n    padding: 5rem 10rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    scrollbar-width: thin;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdGFycmVkLWxpc3QvRDpcXERvY3VtZW50c1xcRG9jdW1lbnRzXFxHaXRIdWJcXGJhcmlzdGFib29rL3NyY1xcYXBwXFx1c2VyXFxzdGFycmVkLWxpc3RcXHN0YXJyZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9zdGFycmVkLWxpc3Qvc3RhcnJlZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBRUEsV0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ0FKOztBRElBO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDSEY7O0FES0U7RUFURjtJQVdJLFlBQUE7SUFDQSxZQUFBO0VDSEY7QUFDRjs7QURLRTtFQWZGO0lBaUJJLFlBQUE7SUFDQSxxQkFBQTtFQ0hGO0FBQ0Y7O0FES0U7RUFDRSxhQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7QUNKSjs7QURNSTtFQVZGO0lBWUksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtZQUFBLDJCQUFBO0lBRUEsU0FBQTtJQUNBLFVBQUE7SUFFQSxZQUFBO0lBQ0EsV0FBQTtJQUVBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQ1BKO0FBQ0Y7O0FEU0k7RUEzQkY7SUE2QkksYUFBQTtJQUNBLDhDQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EseUJBQUE7T0FBQSxzQkFBQTtZQUFBLGlCQUFBO0lBQ0EsYUFBQTtJQUVBLG1CQUFBO0lBRUEsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDVEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc3RhcnJlZC1saXN0L3N0YXJyZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFycmVkLWxpc3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDYwdmg7XHJcbn1cclxuXHJcbi5zb3J0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICBoZWlnaHQ6IDh2aDtcclxuXHJcbiAgJl9fYnRuIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIC8vQUREIFJPT00gRk9SIFNDUk9MTFxyXG4gIGhlaWdodDogMTEyJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NWVtKSB7XHJcbiAgICAvLzEwMjRcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcclxuICAgIC8vNDQ2IExBTkRTQ0FQRVxyXG4gICAgaGVpZ2h0OiAxMTIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fY2FyZHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMHJlbSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMHJlbTtcclxuICAgIHJvdy1nYXA6IDVyZW07XHJcblxyXG4gICAgcGFkZGluZzogNXJlbSAxMHJlbTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1ZW0pIHtcclxuICAgICAgLy8xMDI0XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjZlbSkge1xyXG4gICAgICAvLzQxNCBMQU5EU0NBUEVcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMwcmVtKTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGNvbHVtbi1nYXA6IDEwcmVtO1xyXG4gICAgICByb3ctZ2FwOiA1cmVtO1xyXG5cclxuICAgICAgcGFkZGluZzogNXJlbSAxMHJlbTtcclxuXHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc3RhcnJlZC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDYwdmg7XG59XG5cbi5zb3J0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiA4dmg7XG59XG4uc29ydF9fYnRuIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICBoZWlnaHQ6IDExMiU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1ZW0pIHtcbiAgLm1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcbiAgLm1haW4ge1xuICAgIGhlaWdodDogMTEyJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIH1cbn1cbi5tYWluX19jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMHJlbSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2x1bW4tZ2FwOiAxMHJlbTtcbiAgcm93LWdhcDogNXJlbTtcbiAgcGFkZGluZzogNXJlbSAxMHJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjVlbSkge1xuICAubWFpbl9fY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI2ZW0pIHtcbiAgLm1haW5fX2NhcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMHJlbSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBjb2x1bW4tZ2FwOiAxMHJlbTtcbiAgICByb3ctZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMTByZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/user/starred-list/starred-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/starred-list/starred-list.component.ts ***!
  \*************************************************************/
/*! exports provided: StarredListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredListComponent", function() { return StarredListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/alert/alert.service */ "./src/app/components/alert/alert.service.ts");





let StarredListComponent = class StarredListComponent {
    constructor(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        //EXPOSE STARRED FOR DISPLAY
        this.starredsDrinks$ = this.userService
            .getStarredDrinks()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(150))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((starred) => starred.doc));
        this.userService.getStarred().subscribe((starred) => {
            this.starreds = starred.doc;
            if (this.starreds.length === 0) {
                this.alertService.warn("You don't have any saved drinks yet.", {
                    autoClose: true,
                    keepAfterRouteChange: true
                });
            }
        });
        this.isLoading = false;
    }
    onSort() {
        this.starredsDrinks$ = this.userService.getStarredDrinks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((starred) => {
            starred.doc.sort((star1, star2) => {
                //MANUAL SORT
                return star1.name < star2.name ? -1 : 1;
            });
            return starred.doc;
        }));
    }
};
StarredListComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
StarredListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-starred",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starred-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/starred-list/starred-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starred-list.component.scss */ "./src/app/user/starred-list/starred-list.component.scss")).default]
    })
], StarredListComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _starred_list_starred_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starred-list/starred-list.component */ "./src/app/user/starred-list/starred-list.component.ts");






const routes = [
    {
        path: "profile",
        component: _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        data: { animation: "UserPage" }
    },
    {
        path: "starred",
        component: _starred_list_starred_list_component__WEBPACK_IMPORTED_MODULE_5__["StarredListComponent"],
        data: { animation: "StarredListPage" }
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n  display: grid;\n  grid-template-rows: 10vh 58vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n}\n\n.title {\n  align-self: flex-start;\n}\n\n.user {\n  align-self: flex-start;\n  padding: 1.5rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 0.8rem;\n}\n\n@media only screen and (max-height: 41em) {\n  .user {\n    height: 58vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n    scrollbar-width: thin;\n  }\n}\n\n@media only screen and (max-height: 28em) {\n  .user {\n    display: grid;\n    grid-template-columns: 40% 60%;\n    grid-template-rows: 20% 80%;\n    -webkit-column-gap: 2rem;\n       -moz-column-gap: 2rem;\n            column-gap: 2rem;\n    height: auto;\n    padding: 3rem;\n  }\n  .user .form1 {\n    grid-column: 1/2;\n    grid-row: 2/-1;\n  }\n  .user .form2 {\n    grid-column: 2/-1;\n    grid-row: 2/-1;\n  }\n  .user .button-left {\n    -webkit-transform: translateX(3rem);\n            transform: translateX(3rem);\n  }\n}\n\n.user__form {\n  align-self: center;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n@media only screen and (max-width: 26em) {\n  .user__form {\n    width: 80vw;\n  }\n}\n\n.user__form--label {\n  font-size: 1.8rem;\n  text-align: right;\n  text-transform: lowercase;\n  font-weight: 300;\n  line-height: 1;\n}\n\n@media only screen and (max-width: 22em) {\n  .user__form--input {\n    width: 98%;\n  }\n}\n\n.user__form--submit {\n  grid-column: 2;\n  justify-self: flex-end;\n  position: relative;\n  -webkit-transform: translateX(-5rem);\n          transform: translateX(-5rem);\n  white-space: nowrap;\n}\n\n@media only screen and (max-width: 26em) {\n  .user__form--submit {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9EOlxcRG9jdW1lbnRzXFxEb2N1bWVudHNcXEdpdEh1YlxcYmFyaXN0YWJvb2svc3JjXFxhcHBcXHVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBRUEsZUFBQTtFQUVBLG9DQUFBO0VBQ0EscUJBQUE7QUNERjs7QURHRTtFQVJGO0lBVUksWUFBQTtJQUVBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtFQ0ZGO0FBQ0Y7O0FESUU7RUFqQkY7SUFtQkksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsMkJBQUE7SUFDQSx3QkFBQTtPQUFBLHFCQUFBO1lBQUEsZ0JBQUE7SUFFQSxZQUFBO0lBQ0EsYUFBQTtFQ0hGO0VES0U7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUNISjtFRE1FO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VDSko7RURPRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNMSjtBQUNGOztBRFFFO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7QUNSSjs7QURVSTtFQVZGO0lBWUksV0FBQTtFQ1JKO0FBQ0Y7O0FEVUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSTjs7QURZTTtFQURGO0lBR0ksVUFBQTtFQ1ZOO0FBQ0Y7O0FEYUk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFFQSxtQkFBQTtBQ2JOOztBRGVNO0VBVEY7SUFXSSxnQ0FBQTtZQUFBLHdCQUFBO0VDYk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNTh2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC42KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQxZW0pIHtcclxuICAgIC8vNjUwXHJcbiAgICBoZWlnaHQ6IDU4dmg7XHJcblxyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDI4ZW0pIHtcclxuICAgIC8vNDQ2IExBTkRTQ0FQRVxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcclxuICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcblxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuXHJcbiAgICAuZm9ybTEge1xyXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICAgIGdyaWQtcm93OiAyIC8gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0yIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcclxuICAgICAgZ3JpZC1yb3c6IDIgLyAtMTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWxlZnQge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3JlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19mb3JtIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjZlbSkge1xyXG4gICAgICAvLzQxNFxyXG4gICAgICB3aWR0aDogODB2dztcclxuICAgIH1cclxuXHJcbiAgICAmLS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taW5wdXQge1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyZW0pIHtcclxuICAgICAgICAvLzMyMFxyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1zdWJtaXQge1xyXG4gICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcclxuXHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2ZW0pIHtcclxuICAgICAgICAvLzQxNFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNTh2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLnVzZXIge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDFlbSkge1xuICAudXNlciB7XG4gICAgaGVpZ2h0OiA1OHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjhlbSkge1xuICAudXNlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xuICAgIGNvbHVtbi1nYXA6IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbiAgLnVzZXIgLmZvcm0xIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAyLy0xO1xuICB9XG4gIC51c2VyIC5mb3JtMiB7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gICAgZ3JpZC1yb3c6IDIvLTE7XG4gIH1cbiAgLnVzZXIgLmJ1dHRvbi1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3JlbSk7XG4gIH1cbn1cbi51c2VyX19mb3JtIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjZlbSkge1xuICAudXNlcl9fZm9ybSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cbi51c2VyX19mb3JtLS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyZW0pIHtcbiAgLnVzZXJfX2Zvcm0tLWlucHV0IHtcbiAgICB3aWR0aDogOTglO1xuICB9XG59XG4udXNlcl9fZm9ybS0tc3VibWl0IHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjZlbSkge1xuICAudXNlcl9fZm9ybS0tc3VibWl0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");





let UserComponent = class UserComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        //INITIALIZE USER INFO FORM
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]
            })
        });
        //EXPOSE USER DATA FOR DISPLAY & PLUG IN VALUES FOR FORM
        this.userService.getUser().subscribe(userData => {
            this.user = userData.doc;
            this.updateUserForm.controls['name'].setValue(userData.name);
            this.updateUserForm.controls['email'].setValue(userData.email);
            this.updateUserForm.controls['location'].setValue(userData.location);
        });
        this.isLoading = false;
    }
    onUpdateUser() {
        if (this.updateUserForm.invalid) {
            return;
        }
        this.isLoading = true;
        this.userService.updateUser(this.updateUserForm.value.name, this.updateUserForm.value.email, this.updateUserForm.value.location);
        this.updateUserForm.reset();
        this.isLoading = false;
    }
    onChangePassword(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.changePassword(form.value.passwordCurrent, form.value.password, form.value.passwordConfirm);
        this.updateUserForm.reset();
        this.isLoading = false;
    }
};
UserComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _starred_list_starred_item_starred_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starred-list/starred-item/starred-item.component */ "./src/app/user/starred-list/starred-item/starred-item.component.ts");
/* harmony import */ var _starred_list_starred_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starred-list/starred-list.component */ "./src/app/user/starred-list/starred-list.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");








let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], _starred_list_starred_list_component__WEBPACK_IMPORTED_MODULE_6__["StarredListComponent"], _starred_list_starred_item_starred_item_component__WEBPACK_IMPORTED_MODULE_5__["StarredItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/alert/alert.service */ "./src/app/components/alert/alert.service.ts");







const ROOT_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}`;
let UserService = class UserService {
    constructor(http, router, alertService) {
        this.http = http;
        this.router = router;
        this.alertService = alertService;
    }
    //STARRED FEATURE----------------------------------------------------------
    //FETCH ARR OF STARRED DRINKS OBJ
    getStarredDrinks() {
        return this.http.get(`${ROOT_URL}/starred/me`).pipe(
        //NEST LVL 1 { status: `success`, results: doc.length, doc }
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(doc => {
            return {
                //NEST LVL 2 doc: { [STARRED ARR (EACH FOLLOWS STARRED SCHEMA)] }
                doc: doc.doc.map(doc => {
                    //NEST LVL 3 drink: { DRINK DATA }
                    return doc.drink;
                })
            };
        }));
    }
    //FETCH ARR OF STARRED OBJ (INCLUDES STARRED UNIQUE ID FOR DELETION)
    getStarred() {
        return this.http.get(`${ROOT_URL}/starred/me`).pipe(
        //NEST LVL 1 { status: `success`, results: doc.length, doc }
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(doc => {
            return {
                //NEST LVL 2 doc: { [STARRED ARR (EACH FOLLOWS STARRED SCHEMA)] }
                doc: doc.doc.map(doc => {
                    //NEST LVL 3 { COMPLETE STARRED DOC WITH UNIQUE ID}
                    return doc;
                })
            };
        }));
    }
    saveStarred(drinkId, userId) {
        const starredData = { drinkId, userId };
        this.alertService.info("Your drink has been saved.", {
            autoClose: true,
            keepAfterRouteChange: true
        });
        return this.http.post(`${ROOT_URL}/drinks/${drinkId}`, starredData);
    }
    deleteStarred(starreds, drinkId) {
        let starredId;
        //MATCH DRINK ID WITH STARRED'S DRINK ID TO FIND STARRED UNIQUE ID
        starreds.forEach(el => {
            if (el.drink.id === drinkId) {
                starredId = el.id;
            }
        });
        this.alertService.warn("Your star has been deleted.", {
            autoClose: true,
            keepAfterRouteChange: true
        });
        return this.http.delete(`${ROOT_URL}/starred/me/${starredId}`);
    }
    //PROFILE FEATURE----------------------------------------------------------
    //FETCH LOGGED IN USER DATA
    getUser() {
        return this.http.get(`${ROOT_URL}/users/me`).pipe(
        //NEST LVL 1 { status: `success`, doc }
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(doc => {
            return {
                //NEST LVL 2 doc: { USER KEY VALUE PAIRS }
                doc: doc.doc
            };
        }));
    }
    //UPDATE USER INFO
    updateUser(name, email, location) {
        let userData;
        userData = { name, email, location };
        this.http.patch(`${ROOT_URL}/users/updateMe`, userData).subscribe(() => {
            this.alertService.success("Your info has been updated.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
        });
    }
    contact(email, message) {
        this.http.post(`${ROOT_URL}/users/send`, { email, message }).subscribe(() => {
            this.alertService.success("Your email has been sent.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.router.navigate(["/nav/sent"]);
        }, err => {
            this.alertService.error("There was a problem in sending your email.", {
                autoClose: true,
                keepAfterRouteChange: true
            });
            this.router.navigate(["/nav/fail"]);
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: `http://localhost:3000/api/v1`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Documents\GitHub\baristabook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map