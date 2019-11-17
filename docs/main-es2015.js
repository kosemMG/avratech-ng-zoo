(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <header>\r\n    <app-header></app-header>\r\n  </header>\r\n  <router-outlet></router-outlet>\r\n<!--  <app-birds-panel *ngIf=\"pagingService.currentPanel === 'birds'\"></app-birds-panel>-->\r\n<!--  <app-livestock-panel *ngIf=\"pagingService.currentPanel === 'livestock'\"></app-livestock-panel>-->\r\n<!--  <app-wild-animals-panel *ngIf=\"pagingService.currentPanel === 'wild-animals'\"></app-wild-animals-panel>-->\r\n<!--  <app-paginator (itemMoved)=\"switchItem($event)\"></app-paginator>-->\r\n  <footer class=\"align-bottom container\">\r\n    <app-footer></app-footer>\r\n  </footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/birds-card/birds-card.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/birds-card/birds-card.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h4>{{ birdsService.currentAnimal.name }}</h4>\r\n  <p>Lifespan: {{ birdsService.currentAnimal.lifespan }}</p>\r\n  <p>Flight speed: {{ birdsService.currentAnimal.speed }} km/h</p>\r\n  <p>Weight: {{ birdsService.currentAnimal.weight }}</p>\r\n  <p>Clutch size: {{ birdsService.currentAnimal.clutchSize }}</p>\r\n  <p>Distribution: {{ birdsService.currentAnimal.distribution }}</p>\r\n  <img\r\n    [src]=\"birdsService.currentAnimal.src\"\r\n    [alt]=\"birdsService.currentAnimal.name\"\r\n  />\r\n</div>\r\n<div class=\"row justify-content-center\">\r\n  <app-paginator></app-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/livestock-card/livestock-card.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/livestock-card/livestock-card.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h4>{{ livestockService.currentAnimal.name }}</h4>\r\n  <p>Lifespan: {{ livestockService.currentAnimal.lifespan }}</p>\r\n  <p>Gestation period: {{ livestockService.currentAnimal.gestationPeriod }}</p>\r\n  <p>Weight: {{ livestockService.currentAnimal.weight }}</p>\r\n  <p>Distribution: {{ livestockService.currentAnimal.distribution }}</p>\r\n  <img\r\n    [src]=\"livestockService.currentAnimal.src\"\r\n    [alt]=\"livestockService.currentAnimal.name\"\r\n  />\r\n</div>\r\n<div class=\"row justify-content-center\">\r\n  <app-paginator></app-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/wild-animals-card/wild-animals-card.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/wild-animals-card/wild-animals-card.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h4>{{ wildService.currentAnimal.name }}</h4>\r\n  <p>Speed: {{ wildService.currentAnimal.speed }}</p>\r\n  <p>Lifespan: {{ wildService.currentAnimal.lifespan }}</p>\r\n  <p>Weight: {{ wildService.currentAnimal.weight }}</p>\r\n  <p>Gestation period: {{ wildService.currentAnimal.gestationPeriod }}</p>\r\n  <p>Distribution: {{ wildService.currentAnimal.distribution }}</p>\r\n  <img\r\n    [src]=\"wildService.currentAnimal.src\"\r\n    [alt]=\"wildService.currentAnimal.name\"\r\n  />\r\n</div>\r\n<div class=\"row justify-content-center\">\r\n  <app-paginator></app-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/footer/footer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center\">\r\n  <p>{{ year }}</p>\r\n  <p>&nbsp;&copy; Copyright by Moshe Gelberg</p>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/header/header.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/header/header.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-info\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img\n      src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrL6MIKdpSEXO-S9k5R9mqRnJSntZC6AOtkfQ4yxcpuCZCwyFW&s\"\n      alt=\"logo\">\n  </a>\n  <app-navigation></app-navigation>\n  <div class=\"greeting\">\n    Hello, guest!\n  </div>\n</nav>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/navigation/navigation.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/navigation/navigation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div>-->\n<!--  <ul class=\"nav nav-tabs menu\">-->\n<!--    <li><a href=\"#\" (click)=\"onNavigateTo('birds')\">Birds</a></li>-->\n<!--    <li><a href=\"#\" (click)=\"onNavigateTo('livestock')\">Livestock</a></li>-->\n<!--    <li><a href=\"#\" (click)=\"onNavigateTo('wild-animals')\">Wild animals</a></li>-->\n<!--  </ul>-->\n<!--</div>-->\n<div>\n  <ul class=\"nav nav-tabs menu\">\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        routerLinkActive=\"active-link\"\n        [routerLinkActiveOptions]=\"{exact: true}\"\n        routerLink=\"/birds\"\n      >Birds</a>\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        routerLinkActive=\"active-link\"\n        routerLink=\"/livestock\"\n      >Livestock</a>\n    </li>\n    <li class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        routerLinkActive=\"active-link\"\n        routerLink=\"/wild\"\n      >Wild animals</a>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/page-not-found/page-not-found.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/page-not-found/page-not-found.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>The page was not found!</h2>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/paginator/paginator.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/paginator/paginator.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center paginator\">\r\n  <a class=\"arrow\" [routerLink]=\"[path, id === 1 ? currentAnimalsArrayLength : id - 1]\">&#60;</a>\r\n  <a class=\"arrow\" [routerLink]=\"[path, id === currentAnimalsArrayLength ? 1 : id + 1]\">&#62;</a>\r\n</div>\r\n<!--(click)=\"changeItem(-1)\"-->\r\n<!--(click)=\"changeItem(1)\"-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/birds-panel/birds-panel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/birds-panel/birds-panel.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Welcome to the Birds observatory</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h4>The birds list</h4>\r\n    <ul class=\"list-group\">\r\n      <li\r\n        class=\"list-group-item list-group-item-action bird-choice\"\r\n        *ngFor=\"let bird of birdsService.list\"\r\n        [routerLink]=\"['/birds', bird.id]\"\r\n        routerLinkActive=\"active active-bg\">\r\n        <!--        (click)=\"navigateTo(bird)\"-->\r\n        <span>{{ bird.name }}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <!--    <app-birds-card class=\"col-md-7\"></app-birds-card>-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/livestock-panel/livestock-panel.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/livestock-panel/livestock-panel.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Welcome to the Livestock observatory</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h4>The livestock list</h4>\r\n    <ul>\r\n      <li\r\n        class=\"list-group-item list-group-item-action livestock-choice\"\r\n        *ngFor=\"let animal of livestockService.list\"\r\n        [routerLink]=\"['/livestock', animal.id]\"\r\n        routerLinkActive=\"active active-bg\">\r\n        <!--        (click)=\"navigateTo(animal)\"-->\r\n        <span>{{ animal.name }}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n<!--  <app-livestock-card class=\"col-md-7\"></app-livestock-card>-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Welcome to the Livestock observatory</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h4>The wild animals list</h4>\r\n    <ul>\r\n      <li\r\n        class=\"list-group-item list-group-item-action wild-choice\"\r\n        *ngFor=\"let animal of wildService.list\"\r\n        [routerLink]=\"['/wild', animal.id]\"\r\n        routerLinkActive=\"active active-bg\">\r\n        <!--        (click)=\"navigateTo(animal)\"-->\r\n        <span>{{ animal.name }}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <!--  <app-livestock-card class=\"col-md-7\"></app-livestock-card>-->\r\n</div>\r\n");

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
/* harmony import */ var _components_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/panels/birds-panel/birds-panel.component */ "./src/app/components/panels/birds-panel/birds-panel.component.ts");
/* harmony import */ var _components_panels_livestock_panel_livestock_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panels/livestock-panel/livestock-panel.component */ "./src/app/components/panels/livestock-panel/livestock-panel.component.ts");
/* harmony import */ var _components_panels_wild_animals_panel_wild_animals_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panels/wild-animals-panel/wild-animals-panel.component */ "./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.ts");
/* harmony import */ var _components_general_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/page-not-found/page-not-found.component */ "./src/app/components/general/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_cards_birds_card_birds_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/birds-card/birds-card.component */ "./src/app/components/cards/birds-card/birds-card.component.ts");
/* harmony import */ var _components_cards_livestock_card_livestock_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cards/livestock-card/livestock-card.component */ "./src/app/components/cards/livestock-card/livestock-card.component.ts");
/* harmony import */ var _components_cards_wild_animals_card_wild_animals_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cards/wild-animals-card/wild-animals-card.component */ "./src/app/components/cards/wild-animals-card/wild-animals-card.component.ts");










const appRoutes = [
    { path: 'birds', component: _components_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_3__["BirdsPanelComponent"], children: [
            { path: ':id', component: _components_cards_birds_card_birds_card_component__WEBPACK_IMPORTED_MODULE_7__["BirdsCardComponent"] },
            { path: '', redirectTo: '/birds/1', pathMatch: 'full' }
        ] },
    { path: '', redirectTo: 'birds/1', pathMatch: 'full' },
    { path: 'livestock', component: _components_panels_livestock_panel_livestock_panel_component__WEBPACK_IMPORTED_MODULE_4__["LivestockPanelComponent"], children: [
            { path: ':id', component: _components_cards_livestock_card_livestock_card_component__WEBPACK_IMPORTED_MODULE_8__["LivestockCardComponent"] },
            { path: '', redirectTo: '/livestock/1', pathMatch: 'full' }
        ] },
    { path: 'wild', component: _components_panels_wild_animals_panel_wild_animals_panel_component__WEBPACK_IMPORTED_MODULE_5__["WildAnimalsPanelComponent"], children: [
            { path: ':id', component: _components_cards_wild_animals_card_wild_animals_card_component__WEBPACK_IMPORTED_MODULE_9__["WildAnimalsCardComponent"] },
            { path: '', redirectTo: '/wild/1', pathMatch: 'full' }
        ] },
    { path: 'not-found', component: _components_general_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
    { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\r\n  background-color: #17a2b8;\r\n  padding-top: 20px;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

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


let AppComponent = class AppComponent {
    // url: string;
    constructor() {
        this.title = 'avratech-zoo';
        console.log('AppComponent constructor()');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/header/header.component */ "./src/app/components/general/header/header.component.ts");
/* harmony import */ var _components_general_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/navigation/navigation.component */ "./src/app/components/general/navigation/navigation.component.ts");
/* harmony import */ var _components_panels_livestock_panel_livestock_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/panels/livestock-panel/livestock-panel.component */ "./src/app/components/panels/livestock-panel/livestock-panel.component.ts");
/* harmony import */ var _components_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panels/birds-panel/birds-panel.component */ "./src/app/components/panels/birds-panel/birds-panel.component.ts");
/* harmony import */ var _components_panels_wild_animals_panel_wild_animals_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/panels/wild-animals-panel/wild-animals-panel.component */ "./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.ts");
/* harmony import */ var _components_cards_wild_animals_card_wild_animals_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cards/wild-animals-card/wild-animals-card.component */ "./src/app/components/cards/wild-animals-card/wild-animals-card.component.ts");
/* harmony import */ var _components_cards_birds_card_birds_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cards/birds-card/birds-card.component */ "./src/app/components/cards/birds-card/birds-card.component.ts");
/* harmony import */ var _components_cards_livestock_card_livestock_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cards/livestock-card/livestock-card.component */ "./src/app/components/cards/livestock-card/livestock-card.component.ts");
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/general/footer/footer.component */ "./src/app/components/general/footer/footer.component.ts");
/* harmony import */ var _components_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/general/paginator/paginator.component */ "./src/app/components/general/paginator/paginator.component.ts");
/* harmony import */ var _components_general_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/general/page-not-found/page-not-found.component */ "./src/app/components/general/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_general_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
            _components_panels_livestock_panel_livestock_panel_component__WEBPACK_IMPORTED_MODULE_7__["LivestockPanelComponent"],
            _components_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_8__["BirdsPanelComponent"],
            _components_panels_wild_animals_panel_wild_animals_panel_component__WEBPACK_IMPORTED_MODULE_9__["WildAnimalsPanelComponent"],
            _components_cards_wild_animals_card_wild_animals_card_component__WEBPACK_IMPORTED_MODULE_10__["WildAnimalsCardComponent"],
            _components_cards_birds_card_birds_card_component__WEBPACK_IMPORTED_MODULE_11__["BirdsCardComponent"],
            _components_cards_livestock_card_livestock_card_component__WEBPACK_IMPORTED_MODULE_12__["LivestockCardComponent"],
            _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_14__["PaginatorComponent"],
            _components_general_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/cards/birds-card/birds-card.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/cards/birds-card/birds-card.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  max-width: 95%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9iaXJkcy1jYXJkL2JpcmRzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL2JpcmRzLWNhcmQvYmlyZHMtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/cards/birds-card/birds-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/birds-card/birds-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: BirdsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsCardComponent", function() { return BirdsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BirdsCardComponent = class BirdsCardComponent {
    constructor(birdsService, route) {
        this.birdsService = birdsService;
        this.route = route;
        console.log('BirdsCardComponent constructor()');
    }
    ngOnInit() {
        setTimeout(() => {
            this.birdsService.currentAnimal = this.getBird();
            this.route.params
                .subscribe(() => {
                this.birdsService.currentAnimal = this.getBird();
            });
        });
    }
    getBird() {
        const birdId = +this.route.snapshot.params.id;
        for (const bird of this.birdsService.list) {
            if (bird.id === birdId) {
                return bird;
            }
        }
    }
};
BirdsCardComponent.ctorParameters = () => [
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BirdsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birds-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/birds-card/birds-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-card.component.css */ "./src/app/components/cards/birds-card/birds-card.component.css")).default]
    })
], BirdsCardComponent);



/***/ }),

/***/ "./src/app/components/cards/livestock-card/livestock-card.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/cards/livestock-card/livestock-card.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  max-width: 95%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9saXZlc3RvY2stY2FyZC9saXZlc3RvY2stY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvbGl2ZXN0b2NrLWNhcmQvbGl2ZXN0b2NrLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/cards/livestock-card/livestock-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/livestock-card/livestock-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LivestockCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivestockCardComponent", function() { return LivestockCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_livestock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/livestock.service */ "./src/app/services/livestock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LivestockCardComponent = class LivestockCardComponent {
    constructor(livestockService, route) {
        this.livestockService = livestockService;
        this.route = route;
        console.log('LivestockCardComponent constructor()');
    }
    ngOnInit() {
        setTimeout(() => {
            this.livestockService.currentAnimal = this.getBird();
            this.route.params
                .subscribe(() => {
                this.livestockService.currentAnimal = this.getBird();
            });
        });
    }
    getBird() {
        const birdId = +this.route.snapshot.params.id;
        for (const bird of this.livestockService.list) {
            if (bird.id === birdId) {
                return bird;
            }
        }
    }
};
LivestockCardComponent.ctorParameters = () => [
    { type: _services_livestock_service__WEBPACK_IMPORTED_MODULE_2__["LivestockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LivestockCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-livestock-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./livestock-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/livestock-card/livestock-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./livestock-card.component.css */ "./src/app/components/cards/livestock-card/livestock-card.component.css")).default]
    })
], LivestockCardComponent);



/***/ }),

/***/ "./src/app/components/cards/wild-animals-card/wild-animals-card.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/cards/wild-animals-card/wild-animals-card.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  max-width: 95%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy93aWxkLWFuaW1hbHMtY2FyZC93aWxkLWFuaW1hbHMtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvd2lsZC1hbmltYWxzLWNhcmQvd2lsZC1hbmltYWxzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/cards/wild-animals-card/wild-animals-card.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cards/wild-animals-card/wild-animals-card.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WildAnimalsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildAnimalsCardComponent", function() { return WildAnimalsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wild_animals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wild-animals.service */ "./src/app/services/wild-animals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WildAnimalsCardComponent = class WildAnimalsCardComponent {
    constructor(wildService, route) {
        this.wildService = wildService;
        this.route = route;
        console.log('WildAnimalsCardComponent constructor()');
    }
    ngOnInit() {
        setTimeout(() => {
            this.wildService.currentAnimal = this.getBird();
            this.route.params
                .subscribe(() => {
                this.wildService.currentAnimal = this.getBird();
            });
        });
    }
    getBird() {
        const birdId = +this.route.snapshot.params.id;
        for (const bird of this.wildService.list) {
            if (bird.id === birdId) {
                return bird;
            }
        }
    }
};
WildAnimalsCardComponent.ctorParameters = () => [
    { type: _services_wild_animals_service__WEBPACK_IMPORTED_MODULE_2__["WildAnimalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
WildAnimalsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wild-animals-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-animals-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/wild-animals-card/wild-animals-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-animals-card.component.css */ "./src/app/components/cards/wild-animals-card/wild-animals-card.component.css")).default]
    })
], WildAnimalsCardComponent);



/***/ }),

/***/ "./src/app/components/general/footer/footer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/general/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/general/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/general/header/header.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/general/header/header.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand > img {\r\n  max-width: 60px;\r\n}\r\n\r\n.greeting {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCA+IGltZyB7XHJcbiAgbWF4LXdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uZ3JlZXRpbmcge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/general/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/general/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/general/navigation/navigation.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/general/navigation/navigation.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  /*color: white;*/\r\n}\r\n\r\nli {\r\n  padding: 10px 20px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.menu {\r\n  list-style-type: none;\r\n  font-size: 20px;\r\n}\r\n\r\n.active-link {\r\n  color: #495057;\r\n  background-color: #ace9f2;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICAvKmNvbG9yOiB3aGl0ZTsqL1xyXG59XHJcblxyXG5saSB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNlOWYyO1xyXG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNiAjZGVlMmU2ICNmZmY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/general/navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/general/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() {
        console.log('NavigationComponent constructor()');
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/general/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/general/page-not-found/page-not-found.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/general/page-not-found/page-not-found.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n  margin-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYWwvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/general/page-not-found/page-not-found.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/general/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/general/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/general/paginator/paginator.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/general/paginator/paginator.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".arrow {\r\n  font-size: 80px;\r\n  font-weight: bold;\r\n  padding: 0 30px;\r\n}\r\n\r\na {\r\n  color: #17a2b8;\r\n  cursor: pointer;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.paginator {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJyb3cge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjMTdhMmI4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/general/paginator/paginator.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/general/paginator/paginator.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");
/* harmony import */ var _services_livestock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/livestock.service */ "./src/app/services/livestock.service.ts");
/* harmony import */ var _services_wild_animals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/wild-animals.service */ "./src/app/services/wild-animals.service.ts");






let PaginatorComponent = class PaginatorComponent {
    constructor(route, birdsService, livestockService, wildService) {
        this.route = route;
        this.birdsService = birdsService;
        this.livestockService = livestockService;
        this.wildService = wildService;
        this.itemMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('PaginatorComponent constructor()');
    }
    ngOnInit() {
        setTimeout(() => {
            this.id = +this.route.snapshot.params.id;
            this.route.params
                .subscribe((params) => {
                this.path = '/' + this.getPanel();
                this.id = +params.id;
                this.serCurrentAnimalsArrayLength();
            });
        });
    }
    serCurrentAnimalsArrayLength() {
        switch (this.path) {
            case '/birds':
                this.currentAnimalsArrayLength = this.birdsService.list.length;
                break;
            case '/livestock':
                this.currentAnimalsArrayLength = this.livestockService.list.length;
                break;
            case '/wild':
                this.currentAnimalsArrayLength = this.wildService.list.length;
                break;
        }
    }
    getPanel() {
        const path = window.location.pathname;
        return path.split('/')[2];
    }
};
PaginatorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_3__["BirdsService"] },
    { type: _services_livestock_service__WEBPACK_IMPORTED_MODULE_4__["LivestockService"] },
    { type: _services_wild_animals_service__WEBPACK_IMPORTED_MODULE_5__["WildAnimalsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginatorComponent.prototype, "itemMoved", void 0);
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/paginator/paginator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/components/general/paginator/paginator.component.css")).default]
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/app/components/panels/birds-panel/birds-panel.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/panels/birds-panel/birds-panel.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n  margin: 30px 0;\r\n  text-align: center;\r\n}\r\n\r\n.bird-choice {\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.active-bg {\r\n  background-color: #17a2b8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYW5lbHMvYmlyZHMtcGFuZWwvYmlyZHMtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYW5lbHMvYmlyZHMtcGFuZWwvYmlyZHMtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaXJkLWNob2ljZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/panels/birds-panel/birds-panel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/panels/birds-panel/birds-panel.component.ts ***!
  \************************************************************************/
/*! exports provided: BirdsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsPanelComponent", function() { return BirdsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");



let BirdsPanelComponent = class BirdsPanelComponent {
    constructor(birdsService) {
        this.birdsService = birdsService;
        console.log('BirdsPanelComponent constructor()');
    }
};
BirdsPanelComponent.ctorParameters = () => [
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
];
BirdsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/birds-panel/birds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-panel.component.css */ "./src/app/components/panels/birds-panel/birds-panel.component.css")).default]
    })
], BirdsPanelComponent);



/***/ }),

/***/ "./src/app/components/panels/livestock-panel/livestock-panel.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/panels/livestock-panel/livestock-panel.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n  margin: 30px 0;\r\n  text-align: center;\r\n}\r\n\r\n.livestock-choice {\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.active-bg {\r\n  background-color: #17a2b8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYW5lbHMvbGl2ZXN0b2NrLXBhbmVsL2xpdmVzdG9jay1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhbmVscy9saXZlc3RvY2stcGFuZWwvbGl2ZXN0b2NrLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGl2ZXN0b2NrLWNob2ljZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/panels/livestock-panel/livestock-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/panels/livestock-panel/livestock-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: LivestockPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivestockPanelComponent", function() { return LivestockPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_livestock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/livestock.service */ "./src/app/services/livestock.service.ts");



let LivestockPanelComponent = class LivestockPanelComponent {
    constructor(livestockService) {
        this.livestockService = livestockService;
        console.log('LivestockPanelComponent constructor()');
    }
    navigateTo(animal) {
        console.log('LivestockPanelComponent navigateTo() | animal:', animal);
        this.livestockService.currentAnimal = animal;
        this.livestockService.currentIndex = this.livestockService.list.indexOf(animal);
    }
};
LivestockPanelComponent.ctorParameters = () => [
    { type: _services_livestock_service__WEBPACK_IMPORTED_MODULE_2__["LivestockService"] }
];
LivestockPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-livestock-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./livestock-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/livestock-panel/livestock-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./livestock-panel.component.css */ "./src/app/components/panels/livestock-panel/livestock-panel.component.css")).default]
    })
], LivestockPanelComponent);



/***/ }),

/***/ "./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n  margin: 30px 0;\r\n  text-align: center;\r\n}\r\n\r\n.wild-choice {\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.active-bg {\r\n  background-color: #17a2b8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYW5lbHMvd2lsZC1hbmltYWxzLXBhbmVsL3dpbGQtYW5pbWFscy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhbmVscy93aWxkLWFuaW1hbHMtcGFuZWwvd2lsZC1hbmltYWxzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2lsZC1jaG9pY2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYWN0aXZlLWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WildAnimalsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildAnimalsPanelComponent", function() { return WildAnimalsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wild_animals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wild-animals.service */ "./src/app/services/wild-animals.service.ts");



let WildAnimalsPanelComponent = class WildAnimalsPanelComponent {
    constructor(wildService) {
        this.wildService = wildService;
        console.log('WildAnimalsPanelComponent constructor()');
    }
    navigateTo(animal) {
        console.log('WildAnimalsPanelComponent navigateTo() | animal:', animal);
        this.wildService.currentAnimal = animal;
        this.wildService.currentIndex = this.wildService.list.indexOf(animal);
    }
};
WildAnimalsPanelComponent.ctorParameters = () => [
    { type: _services_wild_animals_service__WEBPACK_IMPORTED_MODULE_2__["WildAnimalsService"] }
];
WildAnimalsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wild-animals-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-animals-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-animals-panel.component.css */ "./src/app/components/panels/wild-animals-panel/wild-animals-panel.component.css")).default]
    })
], WildAnimalsPanelComponent);



/***/ }),

/***/ "./src/app/services/birds.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/birds.service.ts ***!
  \*******************************************/
/*! exports provided: BirdsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsService", function() { return BirdsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BirdsService = class BirdsService {
    constructor(http) {
        this.http = http;
        this.list = [];
        this.currentIndex = 0;
        console.log('BirdsService constructor()');
        this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/birds.json')
            .subscribe(data => {
            this.list = data;
            this.currentAnimal = this.list[0];
        });
    }
};
BirdsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BirdsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BirdsService);



/***/ }),

/***/ "./src/app/services/livestock.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/livestock.service.ts ***!
  \***********************************************/
/*! exports provided: LivestockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivestockService", function() { return LivestockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LivestockService = class LivestockService {
    constructor(http) {
        this.http = http;
        this.list = [];
        this.currentIndex = 0;
        console.log('LivestockService constructor()');
        this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/livestock.json')
            .subscribe(data => {
            this.list = data;
            this.currentAnimal = this.list[0];
        });
    }
};
LivestockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LivestockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LivestockService);



/***/ }),

/***/ "./src/app/services/wild-animals.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/wild-animals.service.ts ***!
  \**************************************************/
/*! exports provided: WildAnimalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildAnimalsService", function() { return WildAnimalsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WildAnimalsService = class WildAnimalsService {
    constructor(http) {
        this.http = http;
        this.list = [];
        this.currentIndex = 0;
        console.log('WildAnimalsService constructor()');
        this.http.get('https://raw.githubusercontent.com/kosemMG/avratech-ng-zoo/master/src/assets/json/wild-animals.json')
            .subscribe(data => {
            this.list = data;
            this.currentAnimal = this.list[0];
        });
    }
};
WildAnimalsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WildAnimalsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WildAnimalsService);



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu.RAVTECH\Documents\moshe\avratech-ng-zoo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map