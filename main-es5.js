(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <nav class=\"navbar navbar-inverse navbarColor\"  *ngIf=\"loggedIn\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n      </div>\n      <div class=\"col-md-7 mb-3 search\">\n          <select class=\"form-control\" >\n              <option selected>All Deals</option>\n              <option value=\"1\">Active Deals</option>\n              <option value=\"2\">Closed Deals</option>\n            </select>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Deal Name\">\n          <div class=\"searchIcon\"><span class=\"glyphicon glyphicon-search\"></span></div>\n      </div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><div class=\"top-left\"></div></li>\n        <li><span class=\"glyphicon glyphicon-log-out logOut\" (click)=\"logout()\"></span></li>\n      </ul>\n    </div>\n  </nav>\n \n <div class=\"row contentRow\"  *ngIf=\"loggedIn\">\n  <div class=\"col-sm-1 leftColumn\">\n      <ul class=\"leftNav\">        \n        <li routerLinkActive=\"active\" ng-class=\"getClass('home')\"><span class=\"glyphicon glyphicon-home\"></span><br/><a [routerLink]=\"['home']\"> Home</a></li>\n        <li routerLinkActive=\"active\" ng-class=\"getClass('userProfile')\"><span class=\"glyphicon glyphicon-user\"></span><br/><a [routerLink]=\"['userProfile']\">Profile</a></li>\n        <li routerLinkActive=\"active\" ng-class=\"getClass('SPapiList')\"><span class=\"glyphicon glyphicon-folder-open SPapiList\"></span><br/><a [routerLink]=\"['SPapiList']\">Deals</a></li>\n        <li routerLinkActive=\"active\" ng-class=\"getClass('todoList')\"><span class=\"glyphicon glyphicon-list-alt\"></span><br/><a [routerLink]=\"['todoList']\">List</a></li>\n        <li routerLinkActive=\"active\" ng-class=\"getClass('spList')\"><span class=\"glyphicon glyphicon-globe\"></span><br/><a [routerLink]=\"['spList']\">REST API</a></li>\n       </ul>\n  </div>\n  <div class=\"col-sm-auto\">      \n      <router-outlet *ngIf=\"!isIframe\"></router-outlet>\n  </div>\n </div>\n  <div class=\"row\" *ngIf=\"!loggedIn\" class=\"loginBackground\">\n      <div class=\"login\">\n        <div class=\"loginTitle\">Nuveen Demo - Angular</div>\n        <div class=\"loginBox\">\n        You are not logged in, Please Login!!<hr>\n        <a (click)=\"login()\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n      </div>\n      </div>\n    </div>\n\n  <!--This is to avoid reload during acquireTokenSilent() because of hidden iframe -->\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deal-documents.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deal-documents.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='table-responsive userData documents'>\r\n    <div class=\"tableTitle\" >Deal Documents</div>\r\n    <table class='table table-striped userTable' >\r\n      <thead>\r\n        <th>Document Name</th>\r\n        <th>Created</th>\r\n        <th>Created By</th>\r\n        <th>Modified</th>\r\n        <th>Modified By</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of dealDocuments\">\r\n            <td><a href=\"{{item.url}}\">{{item?.title}}</a></td>\r\n            <td>{{item?.created}}</td>\r\n            <td>{{item?.createdBy}}</td>\r\n            <td>{{item?.modified}}</td>\r\n            <td>{{item?.lastModifiedBy}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <div class=\"docSection\">\r\n        <div class=\"form-group\">\r\n            <label for=\"file\">Choose File</label>\r\n            <input style=\"width: 100%;\" type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\"/>\r\n        </div>\r\n        <div>\r\n          <a class='btn btn-default btnBack' (click)=\"uploadFileToActivity()\">Upload Document </a>\r\n          <a class='btn btn-default btnBack' (click)=\"onBack()\">Back </a>\r\n        </div>\r\n      </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deal.component.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deal.component.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class='table-responsive userData'>\n    <div class=\"counter\" >\n      <div (click)=\"filter('Prospect')\">\n        <div>{{getCount('Prospect') | number : '2.0-2' }}</div>\n        <div>Prospect <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Prospect'? '' : 'fColor'\"></span></div>\n      </div>\n      <div (click)=\"filter('New Deal')\">\n         <div>{{getCount('New Deal') | number : '2.0-2' }}</div>\n         <div>New Deals <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'New Deal'? '' : 'fColor'\"></span></div>\n       </div>\n       <div (click)=\"filter('Under Consideration')\">\n         <div>{{getCount('Under Consideration') | number : '2.0-2' }}</div>\n         <div>Under Consideration <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Under Consideration'? '' : 'fColor'\"></span></div>\n       </div>\n       <div (click)=\"filter('LOI')\">\n         <div>{{getCount('LOI') | number : '2.0-2' }}</div>\n         <div>LOI <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'LOI'? '' : 'fColor'\"></span></div>\n       </div>\n       <div (click)=\"filter('Awarded')\">\n         <div>{{getCount('Awarded') | number : '2.0-2' }}</div>\n         <div>Awarded <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Awarded'? '' : 'fColor'\"></span></div>\n       </div>\n       <div (click)=\"filter('Closed')\">\n           <div>{{getCount('Closed') | number : '2.0-2' }}</div>\n           <div>Closed <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Closed'? '' : 'fColor'\"></span></div>\n       </div>\n       <div (click)=\"filter('Onboarded')\">\n         <div>{{getCount('Onboarded') | number : '2.0-2' }}</div>\n         <div>Onboarded <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Onboarded'? '' : 'fColor'\"></span></div>\n       </div>\n    </div>\n    <table class='table userTable' >\n      <thead>\n        <th>Deal Name</th>\n        <th>Deal Address</th>\n        <th>Fund Name</th>\n        <th>Property Name</th>\n        <th>Deal Stage</th>\n        <th>Deal Status</th>\n        <th>Deal Type</th>\n        <th>MNPI Status</th>\n        <th>Primary Acquisition Officer</th>\n        <th>Market</th>\n        <th>Sub Market</th>\n        <th>Property Region</th>\n        <th>TIAA Valuation</th>\n        <th>SF/Unit</th>\n        <th>Investment ID</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of todoSPList\">\n            <td><a [routerLink]=\"['documents',item.id]\">{{item?.title}}</a></td>\n            <td>{{item?.address}}</td>\n            <td>{{item?.fundName}}</td>\n            <td>{{item?.propertyType}}</td>\n            <td>{{item?.dealStage}}</td>\n            <td>{{item?.dealStatus}}</td>\n            <td>{{item?.dealType}}</td>\n            <td>{{item?.mNPIStatus}}</td>\n            <td>{{item?.primaryAcquisitionOfficer}}</td>\n            <td>{{item?.market}}</td>\n            <td>{{item?.subMarket}}</td>\n            <td>{{item?.propertyRegion}}</td>\n            <td>{{item?.tIAAValuation}}</td>\n            <td>{{item?.sFUnit}}</td>\n            <td>{{item?.investmentID}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sharepoint-data/sharepoint-data.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sharepoint-data/sharepoint-data.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class='table-responsive userData'>\n  <div class=\"counter\" >\n    <div (click)=\"filter('Prospect')\">\n      <div>{{getCount('Prospect') | number : '2.0-2' }}</div>\n      <div>Prospect <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Prospect'? '' : 'fColor'\"></span></div>\n    </div>\n    <div (click)=\"filter('New Deal')\">\n       <div>{{getCount('New Deal') | number : '2.0-2' }}</div>\n       <div>New Deals <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'New Deal'? '' : 'fColor'\"></span></div>\n     </div>\n     <div (click)=\"filter('Under Consideration')\">\n       <div>{{getCount('Under Consideration') | number : '2.0-2' }}</div>\n       <div>Under Consideration <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Under Consideration'? '' : 'fColor'\"></span></div>\n     </div>\n     <div (click)=\"filter('LOI')\">\n       <div>{{getCount('LOI') | number : '2.0-2' }}</div>\n       <div>LOI <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'LOI'? '' : 'fColor'\"></span></div>\n     </div>\n     <div (click)=\"filter('Awarded')\">\n       <div>{{getCount('Awarded') | number : '2.0-2' }}</div>\n       <div>Awarded <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Awarded'? '' : 'fColor'\"></span></div>\n     </div>\n     <div (click)=\"filter('Closed')\">\n         <div>{{getCount('Closed') | number : '2.0-2' }}</div>\n         <div>Closed <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Closed'? '' : 'fColor'\"></span></div>\n     </div>\n     <div (click)=\"filter('Onboarded')\">\n       <div>{{getCount('Onboarded') | number : '2.0-2' }}</div>\n       <div>Onboarded <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Onboarded'? '' : 'fColor'\"></span></div>\n     </div>\n  </div>\n  <table class='table userTable' >\n    <thead>\n      <th>Deal Name</th>\n      <th>Deal Address</th>\n      <th>Fund Name</th>\n      <th>Property Name</th>\n      <th>Deal Stage</th>\n      <th>Deal Status</th>\n      <th>Deal Type</th>\n      <th>MNPI Status</th>\n      <th>Primary Acquisition Officer</th>\n      <th>Market</th>\n      <th>Sub Market</th>\n      <th>Property Region</th>\n      <th>TIAA Valuation</th>\n      <th>SF/Unit</th>\n      <th>Investment ID</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of spList\">\n          <td>{{item?.Title}}</td>\n          <td>{{item?.Address}}</td>\n          <td>{{item?.FundName}}</td>\n          <td>{{item?.PropertyType}}</td>\n          <td>{{item?.DealStage}}</td>\n          <td>{{item?.DealStatus}}</td>\n          <td>{{item?.DealType}}</td>\n          <td>{{item?.MNPIStatus}}</td>\n          <td>{{item?.PrimaryAcquisitionOfficer}}</td>\n          <td>{{item?.Market}}</td>\n          <td>{{item?.SubMarket}}</td>\n          <td>{{item?.PropertyRegion}}</td>\n          <td>{{item?.TIAAValuation}}</td>\n          <td>{{item?.SFUnit}}</td>\n          <td>{{item?.InvestmentID}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spapi/spapi.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spapi/spapi.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class='table-responsive userData'>\n <div class=\"counter\"  ng-show=\"todoSPList\">\n   <div (click)=\"filter('Prospect')\">\n     <div>{{getCount('Prospect') | number : '2.0-2' }}</div>\n     <div>Prospect <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Prospect'? '' : 'fColor'\"></span></div>\n   </div>\n   <div (click)=\"filter('New Deal')\">\n      <div>{{getCount('New Deal') | number : '2.0-2' }}</div>\n      <div>New Deals <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'New Deal'? '' : 'fColor'\"></span></div>\n    </div>\n    <div (click)=\"filter('Under Consideration')\">\n      <div>{{getCount('Under Consideration') | number : '2.0-2' }}</div>\n      <div>Under Consideration <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Under Consideration'? '' : 'fColor'\"></span></div>\n    </div>\n    <div (click)=\"filter('LOI')\">\n      <div>{{getCount('LOI') | number : '2.0-2' }}</div>\n      <div>LOI <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'LOI'? '' : 'fColor'\"></span></div>\n    </div>\n    <div (click)=\"filter('Awarded')\">\n      <div>{{getCount('Awarded') | number : '2.0-2' }}</div>\n      <div>Awarded <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Awarded'? '' : 'fColor'\"></span></div>\n    </div>\n    <div (click)=\"filter('Closed')\">\n        <div>{{getCount('Closed') | number : '2.0-2' }}</div>\n        <div>Closed <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Closed'? '' : 'fColor'\"></span></div>\n    </div>\n    <div (click)=\"filter('Onboarded')\">\n      <div>{{getCount('Onboarded') | number : '2.0-2' }}</div>\n      <div>Onboarded <span class=\"glyphicon glyphicon-ok-circle\" [ngClass]=\"noFilter == 'Onboarded'? '' : 'fColor'\"></span></div>\n    </div>\n </div>\n    <table class='table userTable'  ng-show=\"!todoSPList.length\">\n      <thead>\n        <th>Deal Name</th>\n        <th>Deal Address</th>\n        <th>Fund Name</th>\n        <th>Property Name</th>\n        <th>Deal Stage</th>\n        <th>Deal Status</th>\n        <th>Deal Type</th>\n        <th>MNPI Status</th>\n        <th>Primary Acquisition Officer</th>\n        <th>Market</th>\n        <th>Sub Market</th>\n        <th>Property Region</th>\n        <!--<th>TIAA Valuation</th>\n        <th>SF/Unit</th>\n        <th>Investment ID</th>-->\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of todoList\">\n            <td>{{item?.title}}</td>\n            <td>{{item?.address}}</td>\n            <td>{{item?.fundName}}</td>\n            <td>{{item?.propertyType}}</td>\n            <td>{{item?.dealStage}}</td>\n            <td>{{item?.dealStatus}}</td>\n            <td>{{item?.dealType}}</td>\n            <td>{{item?.mnpiStatus}}</td>\n            <td>{{item?.primaryAcquisitionOfficer}}</td>\n            <td>{{item?.market}}</td>\n            <td>{{item?.subMarket}}</td>\n            <td>{{item?.propertyRegion}}</td>\n            <!--<td>{{item?.tIAAValuation}}</td>\n            <td>{{item?.sFUnit}}</td>\n            <td>{{item?.investmentID}}</td>-->\n        </tr>\n      </tbody>\n    </table>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-data/user-data.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-data/user-data.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class='table-responsive userData'>\n    <div class=\"tableTitle\">User Information</div>\n    <table class='table table-striped userTable'>\n      <tbody>\n        <tr>\n            <td>Business Phones</td>\n            <td>{{userData?.businessPhones}}</td>\n        </tr>\n        <tr>\n            <td>Display Name</td>\n            <td>{{userData?.displayName}}</td>\n        </tr>\n        <tr>\n            <td>Given Name</td>\n            <td>{{userData?.givenName}}</td>\n        </tr>\n        <tr>\n            <td>Id</td>\n            <td>{{userData?.userData}}</td>\n        </tr>\n        <tr>\n            <td>Job Title</td>\n            <td>{{userData?.jobTitle}}</td>\n        </tr>\n        <tr>\n            <td>Mail</td>\n            <td>{{userData?.mail}}</td>\n        </tr>\n        <tr>\n            <td>Mobile Phone</td>\n            <td>{{userData?.mobilePhone}}</td>\n        </tr>\n        <tr>\n            <td>Office Location</td>\n            <td>{{userData?.officeLocation}}</td>\n        </tr>\n        <tr>\n            <td>Preferred Language</td>\n            <td>{{userData?.preferredLanguage}}</td>\n        </tr>\n        <tr>\n            <td>Surname</td>\n            <td>{{userData?.surname}}</td>\n        </tr>\n        <tr>\n            <td>User Principal Name</td>\n            <td>{{userData?.userPrincipalName}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a.disabled {\n  color: gray;\n  cursor: not-allowed;\n  text-decoration: underline;\n}\n.glyphicon{\n  color:rgba(37, 54, 69, 1);\n  text-shadow: -0.7px 0 white, 0 0.7px white, 0.7px 0 white, 0 -0.7px white;\n}\n.navbarColor{\n  background-color: rgba(37, 54, 69, 1);\n  border: none;\n  border-radius: 0;\n  margin-bottom: 0;\n  box-shadow:  0px 2px 10px 0px rgba(37,54,69,1);\n}\n.navbarColor a{\n  color: white;\n}\n.contentRow{\n  background-color: rgba(37, 54, 69, 1);\n  margin: 0;\n}\n.leftColumn{\n  background-color: rgba(37, 54, 69, 1);\n  color: white;\n  padding: 0;\n  min-height: 550px;\n}\n.navbar-header{\n  background-image: url('New_logo.png');\n  width: 126px;\n  height: 38px;\n  margin-top: 7px;\n}\n.userImg{\n  background-image: url('user.png');\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  margin: auto;\n}\n.top-left {\n  background-image: url('left-top-icons.PNG');\n  margin: auto;\n  height: 40px;\n  width: 270px;\n  background-size: 270px 40px;\n  margin-top: 5px;\n}\n.userLI{\n  background-image: url('user-img-background.jpg');\n  min-height: 135px;\n  padding: 10px;\n  color: white !important;\n  text-align: center;\n}\n.leftNav{\n  list-style: none;\n  padding: 0;\n}\n.leftNav li{\n  padding: 5px 10px;\n  color: white;\n  text-align: center;\n}\n.active{\n  border-left: 4px solid orange;\n  background-color: rgba(15, 30, 47, 1);\n}\n.search{\n  text-align: right;\n  margin-left: 55px;\n  padding: 10px 10px;\n}\n.search select{\n  width: 20%;\n  display: inline-block;\n  height: 30px;\n  border-radius: 5px 0px 0px 5px;\n  border-right: 0px;\n  background-color: rgba(237, 237, 237, 1);\n  font-size: 12px;\n}\n.search input{\n  width: 60%;\n  display: inline-block;\n  height: 30px;\n  border-radius: 0px 0px 0px 0px;\n  border-left: 0px;\n  border-right: 0px;\n  font-size: 12px;\n  padding: 5px 12px;\n}\n.searchIcon{\n  display: inline-block;\n  background-color: white;\n  padding: 3.3px 3.5px 4.8px 4px;\n  border: 1px solid #ccc;\n  border-left: 0px;\n  border-radius: 0px 5px 5px 0px;\n}\n.logOut{\n  padding: 17px 5px;\n  text-shadow: 0px 0px 0px 0px;\n  color: gray;\n}\n.leftNav li a{\n  color:white;\n  text-decoration: none;\n  font-size: 10px;\n}\n.loginBackground{\n  background-color: rgba(0, 188, 212, 1);\n}\n.login{\n  min-height: 300px;\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10%;\n  padding-bottom: 20%;  \n}\n.loginTitle{\n  font-size: 30px;\n  color: white;\n  text-align: center;\n  padding: 10px;\n}\n.loginBox{\n  background-color: white;\n  padding: 50px;\n  text-align: center;\n}\n.loginBox hr{\n  border-color: rgba(0, 188, 212, 1);\n}\n/*@media all and (min-width:768px)*/\n.col-sm-1 {\n  width: 6%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBR2hCLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFDQUE4QztFQUM5QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlDQUEwQztFQUMxQyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDJDQUFvRDtFQUNwRCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0RBQXlEO0VBQ3pELGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLmRpc2FibGVkIHtcbiAgY29sb3I6IGdyYXk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmdseXBoaWNvbntcbiAgY29sb3I6cmdiYSgzNywgNTQsIDY5LCAxKTtcbiAgdGV4dC1zaGFkb3c6IC0wLjdweCAwIHdoaXRlLCAwIDAuN3B4IHdoaXRlLCAwLjdweCAwIHdoaXRlLCAwIC0wLjdweCB3aGl0ZTtcbn1cbi5uYXZiYXJDb2xvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgNTQsIDY5LCAxKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICAwcHggMnB4IDEwcHggMHB4IHJnYmEoMzcsNTQsNjksMSk7XG4gIC1tb3otYm94LXNoYWRvdzogIDBweCAycHggMTBweCAwcHggcmdiYSgzNyw1NCw2OSwxKTtcbiAgYm94LXNoYWRvdzogIDBweCAycHggMTBweCAwcHggcmdiYSgzNyw1NCw2OSwxKTtcbn1cbi5uYXZiYXJDb2xvciBhe1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGVudFJvd3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgNTQsIDY5LCAxKTtcbiAgbWFyZ2luOiAwO1xufVxuLmxlZnRDb2x1bW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDU0LCA2OSwgMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogNTUwcHg7XG59XG4ubmF2YmFyLWhlYWRlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9OZXdfbG9nby5wbmcnKTtcbiAgd2lkdGg6IDEyNnB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi51c2VySW1ne1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3VzZXIucG5nJyk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRvcC1sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvbGVmdC10b3AtaWNvbnMuUE5HXCIpO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI3MHB4IDQwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi51c2VyTEl7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvdXNlci1pbWctYmFja2dyb3VuZC5qcGcnKTtcbiAgbWluLWhlaWdodDogMTM1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGVmdE5hdntcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5sZWZ0TmF2IGxpe1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWN0aXZle1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIG9yYW5nZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMzAsIDQ3LCAxKTtcbn1cbi5zZWFyY2h7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4uc2VhcmNoIHNlbGVjdHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNlYXJjaCBpbnB1dHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG59XG5cbi5zZWFyY2hJY29ue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzLjNweCAzLjVweCA0LjhweCA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn1cblxuLmxvZ091dHtcbiAgcGFkZGluZzogMTdweCA1cHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubGVmdE5hdiBsaSBhe1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubG9naW5CYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4OCwgMjEyLCAxKTtcbn1cbi5sb2dpbntcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwJTsgIFxufVxuLmxvZ2luVGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubG9naW5Cb3h7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW5Cb3ggaHJ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxODgsIDIxMiwgMSk7XG59XG5cbi8qQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDo3NjhweCkqL1xuLmNvbC1zbS0xIHtcbiAgd2lkdGg6IDYlO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(broadcastService, authService) {
                    this.broadcastService = broadcastService;
                    this.authService = authService;
                    this.title = 'Msal Angular Demo';
                    this.searchString = "Hi";
                    this.userInfo = null;
                    //  This is to avoid reload during acquireTokenSilent() because of hidden iframe
                    this.isIframe = window !== window.parent && !window.opener;
                    if (this.authService.getUser()) {
                        this.loggedIn = true;
                        this.userName = this.authService.getUser().name;
                    }
                    else {
                        this.loggedIn = false;
                    }
                }
                AppComponent.prototype.login = function () {
                    var isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
                    if (isIE) {
                        this.authService.loginRedirect();
                    }
                    else {
                        this.authService.loginPopup();
                    }
                };
                AppComponent.prototype.logout = function () {
                    this.authService.logout();
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.broadcastService.subscribe("msal:loginFailure", function (payload) {
                        _this.loggedIn = false;
                    });
                    this.broadcastService.subscribe("msal:loginSuccess", function (payload) {
                        _this.loggedIn = true;
                        _this.userName = _this.authService.getUser().name;
                    });
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    this.broadcastService.getMSALSubject().next(1);
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                };
                AppComponent.prototype.getClass = function (path) {
                    console.log(path);
                    return (this.location.path().substr(0, path.length) === path) ? 'active' : '';
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] }],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: loggerCallback, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerCallback", function () { return loggerCallback; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error.component */ "./src/app/error.component.ts");
            /* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _deals_deal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deals/deal.component */ "./src/app/deals/deal.component.ts");
            /* harmony import */ var _deals_deal_documents_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deals/deal-documents.component */ "./src/app/deals/deal-documents.component.ts");
            /* harmony import */ var _deals_deal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deals/deal.service */ "./src/app/deals/deal.service.ts");
            /* harmony import */ var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-data/user-data.component */ "./src/app/user-data/user-data.component.ts");
            /* harmony import */ var _common_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/HttpServiceHelper */ "./src/app/common/HttpServiceHelper.ts");
            /* harmony import */ var _common_app_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/app-config */ "./src/app/common/app-config.ts");
            /* harmony import */ var _sharepoint_data_sharepoint_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sharepoint-data/sharepoint-data.component */ "./src/app/sharepoint-data/sharepoint-data.component.ts");
            /* harmony import */ var _sharepoint_data_sharepoint_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sharepoint-data/sharepoint-data.service */ "./src/app/sharepoint-data/sharepoint-data.service.ts");
            /* harmony import */ var _spapi_spapi_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./spapi/spapi.component */ "./src/app/spapi/spapi.component.ts");
            function loggerCallback(logLevel, message, piiEnabled) {
                console.log("client logging" + message);
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _deals_deal_component__WEBPACK_IMPORTED_MODULE_11__["TodoListComponent"], _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_14__["UserDataComponent"], _sharepoint_data_sharepoint_data_component__WEBPACK_IMPORTED_MODULE_17__["SharepointDataComponent"], _spapi_spapi_component__WEBPACK_IMPORTED_MODULE_19__["SPapiComponent"], _deals_deal_documents_component__WEBPACK_IMPORTED_MODULE_12__["DealDocumentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"], { useHash: true }),
                        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalModule"].forRoot({
                            clientID: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].angularClientID,
                            authority: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].authority,
                            consentScopes: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].consentScopes,
                            protectedResourceMap: [[_common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].webApiEndpoint, _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].webApiScopes], [_common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].userProfileEndpoint, _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].userProfileScopes], [_common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].sharepointURL, _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].spApiScopes]],
                            validateAuthority: true,
                            redirectUri: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].redirectUri,
                            cacheLocation: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].cacheLocation,
                            postLogoutRedirectUri: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].postLogoutRedirectUri,
                            navigateToLoginRequestUrl: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].navigateToLoginRequestUrl,
                            unprotectedResources: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].unprotectedResources,
                            logger: loggerCallback,
                            correlationId: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].correlationId,
                            piiLoggingEnabled: _common_app_config__WEBPACK_IMPORTED_MODULE_16__["AppConfig"].piiLoggingEnabled
                        }),
                    ],
                    providers: [_deals_deal_service__WEBPACK_IMPORTED_MODULE_13__["TodoListService"], _common_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_15__["HttpServiceHelper"], _sharepoint_data_sharepoint_data_service__WEBPACK_IMPORTED_MODULE_18__["SPListService"],
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalInterceptor"], multi: true }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routes.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.routes.ts ***!
          \*******************************/
        /*! exports provided: appRoutes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function () { return appRoutes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.component */ "./src/app/error.component.ts");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _deals_deal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deals/deal.component */ "./src/app/deals/deal.component.ts");
            /* harmony import */ var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data/user-data.component */ "./src/app/user-data/user-data.component.ts");
            /* harmony import */ var _sharepoint_data_sharepoint_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharepoint-data/sharepoint-data.component */ "./src/app/sharepoint-data/sharepoint-data.component.ts");
            /* harmony import */ var _spapi_spapi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spapi/spapi.component */ "./src/app/spapi/spapi.component.ts");
            /* harmony import */ var _deals_deal_documents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deals/deal-documents.component */ "./src/app/deals/deal-documents.component.ts");
            var appRoutes = [
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
                { path: 'todoList', component: _deals_deal_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalGuard"]],
                    children: [
                        { path: 'documents/:id', component: _deals_deal_documents_component__WEBPACK_IMPORTED_MODULE_8__["DealDocumentComponent"] }
                    ]
                },
                { path: 'SPapiList', component: _spapi_spapi_component__WEBPACK_IMPORTED_MODULE_7__["SPapiComponent"], canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalGuard"]] },
                { path: 'userProfile', component: _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_5__["UserDataComponent"] },
                { path: 'spList', component: _sharepoint_data_sharepoint_data_component__WEBPACK_IMPORTED_MODULE_6__["SharepointDataComponent"], canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalGuard"]] },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', component: _error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] }
            ];
            /***/ 
        }),
        /***/ "./src/app/common/HttpServiceHelper.ts": 
        /*!*********************************************!*\
          !*** ./src/app/common/HttpServiceHelper.ts ***!
          \*********************************************/
        /*! exports provided: HttpServiceHelper */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceHelper", function () { return HttpServiceHelper; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HttpServiceHelper = /** @class */ (function () {
                function HttpServiceHelper(http) {
                    this.http = http;
                }
                HttpServiceHelper.prototype.httpGetRequest = function (url) {
                    return this.http.get(url)
                        .map(function (response) {
                        return response;
                    })
                        .catch(function (response) { return (rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(response)); });
                };
                return HttpServiceHelper;
            }());
            HttpServiceHelper.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HttpServiceHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
            ], HttpServiceHelper);
            /***/ 
        }),
        /***/ "./src/app/common/app-config.ts": 
        /*!**************************************!*\
          !*** ./src/app/common/app-config.ts ***!
          \**************************************/
        /*! exports provided: AppConfig */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function () { return AppConfig; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AppConfig = {
                angularClientID: 'e185cf70-8c2b-4637-9b4d-12a4d482059c',
                apiClientID: "75679928-db16-495f-ad56-46b678f6eb03",
                tenantID: "e51112a7-bc43-4453-bf7c-f8e6aed76761",
                authority: "https://login.microsoftonline.com/e51112a7-bc43-4453-bf7c-f8e6aed76761",
                validateAuthority: true,
                consentScopes: ["api://75679928-db16-495f-ad56-46b678f6eb03/user.read", "api://75679928-db16-495f-ad56-46b678f6eb03/.default"],
                webApiEndpoint: "http://localhost:44351/api",
                webApiScopes: ['api://75679928-db16-495f-ad56-46b678f6eb03/.default'],
                userProfileEndpoint: "https://graph.microsoft.com/v1.0/me",
                userProfileScopes: ["user.read"],
                redirectUri: "http://localhost:4200/",
                cacheLocation: "localStorage",
                postLogoutRedirectUri: "http://localhost:4200/",
                navigateToLoginRequestUrl: true,
                correlationId: 'nuveenangulardemo',
                piiLoggingEnabled: true,
                unprotectedResources: ["https://www.microsoft.com/en-us/"],
                spApiScopes: ["https://dougnuveen.sharepoint.com/.default"],
                sharepointURL: "https://dougnuveen.sharepoint.com/sites/TestExternal/_api/web/lists/getbytitle('Deal List')/items",
                sharepointList: "Deal List"
            };
            /***/ 
        }),
        /***/ "./src/app/deals/deal-documents.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/deals/deal-documents.component.ts ***!
          \***************************************************/
        /*! exports provided: DealDocumentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealDocumentComponent", function () { return DealDocumentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _deal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deal.service */ "./src/app/deals/deal.service.ts");
            var DealDocumentComponent = /** @class */ (function () {
                function DealDocumentComponent(_Activatedroute, _router, _dealService) {
                    this._Activatedroute = _Activatedroute;
                    this._router = _router;
                    this._dealService = _dealService;
                    this.fileToUpload = null;
                }
                DealDocumentComponent.prototype.onBack = function () {
                    this._router.navigate(['todoList']);
                };
                DealDocumentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._Activatedroute.params.subscribe(function (params) {
                        _this._dealService.getDealDocuments(params['id']).subscribe(function (result) {
                            _this.dealDocuments = result;
                            console.log(result);
                        }, function (error) {
                            console.log("access token silent failed");
                        });
                    });
                };
                DealDocumentComponent.prototype.handleFileInput = function (files) {
                    this.fileToUpload = files.item(0);
                };
                DealDocumentComponent.prototype.uploadFileToActivity = function () {
                    var _this = this;
                    this.sub = this._Activatedroute.params.subscribe(function (params) {
                        _this._dealService.postFile(_this.fileToUpload, params['id']).subscribe(function (data) {
                            console.log(data);
                        }, function (error) {
                            console.log(error);
                        });
                    });
                };
                DealDocumentComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                return DealDocumentComponent;
            }());
            DealDocumentComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _deal_service__WEBPACK_IMPORTED_MODULE_3__["TodoListService"] }
            ]; };
            DealDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal-documents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deal-documents.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal.component.css */ "./src/app/deals/deal.component.css")).default]
                })
            ], DealDocumentComponent);
            /***/ 
        }),
        /***/ "./src/app/deals/deal.component.css": 
        /*!******************************************!*\
          !*** ./src/app/deals/deal.component.css ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".userData{\r\n    padding: 15px;\r\n    background-color: rgba(245, 250, 255, 1);\r\n    min-height: 548px;\r\n}\r\n.documents{\r\n    min-height: 250px; \r\n}\r\n.docSection{\r\n\r\n}\r\n.docSection > div {\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n.docSection > div:nth-child(2) {\r\n    text-align: right;\r\n}\r\n.userTable{\r\n    font-size: 11px;\r\n}\r\n.userTable th{\r\n    font-weight: normal;\r\n}\r\n.tableTitle{\r\n    font-size: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.counter{\r\n    width: 100%;\r\n    margin-bottom: 33px;\r\n}\r\n.counter > div{\r\n    display: inline-block;\r\n    padding: 10px 10px;\r\n    font-size: 11px;\r\n    width: 14%;\r\n    cursor: pointer;\r\n}\r\n.fColor{    \r\n    color: gray !important;\r\n}\r\n.counter > div > div > span{\r\n    float: right;\r\n    margin-top: 2%;\r\n}\r\n.counter > div:nth-child(1){\r\n    color:rgba(85, 85, 85, 1);\r\n}\r\n.counter > div:nth-child(2){\r\n    color:rgba(255, 182, 70, 1);\r\n}\r\n.counter > div:nth-child(3){\r\n    color:rgba(255, 160, 95, 1);\r\n}\r\n.counter > div:nth-child(4){\r\n    color:rgba(89, 189, 208, 1);\r\n}\r\n.counter > div:nth-child(5){\r\n    color:rgba(35, 181, 229, 1);\r\n}\r\n.counter > div:nth-child(6){\r\n    color:rgba(193, 217, 148, 1);\r\n}\r\n.counter > div:nth-child(7){\r\n    color:rgba(53, 203, 93, 1);\r\n}\r\n.counter > div:nth-child(8){\r\n    color:rgba(109, 159, 209, 1);\r\n}\r\n.counter > div:nth-child(9){\r\n    color:black;\r\n}\r\n.counter > div > div:nth-child(1){    \r\n    font-size: 30px;\r\n}\r\n.counter > div > div:nth-child(2){    \r\n    white-space:nowrap;\r\n    border-bottom: 1px solid;\r\n    padding: 2px;\r\n}\r\n.table > tbody > tr > td{\r\n    border-top: 0.1px solid rgba(186, 188, 188, 0.1);\r\n}\r\n.table > thead > th {\r\n    border-bottom: 0.1px solid rgba(186, 188, 188, 1);\r\n    padding: 4px 12px;\r\n}\r\n.btnBack{\r\n    margin-right: 15px;\r\n    background-color: rgba(90, 128, 165, 1);\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kZWFscy9kZWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckRhdGF7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI1MCwgMjU1LCAxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDU0OHB4O1xyXG59XHJcbi5kb2N1bWVudHN7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDsgXHJcbn1cclxuLmRvY1NlY3Rpb257XHJcblxyXG59XHJcbi5kb2NTZWN0aW9uID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5kb2NTZWN0aW9uID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnVzZXJUYWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4udXNlclRhYmxlIHRoe1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udGFibGVUaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNvdW50ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZkNvbG9yeyAgICBcclxuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb3VudGVyID4gZGl2ID4gZGl2ID4gc3BhbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCgxKXtcclxuICAgIGNvbG9yOnJnYmEoODUsIDg1LCA4NSwgMSk7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDE4MiwgNzAsIDEpO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCgzKXtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAxNjAsIDk1LCAxKTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgICBjb2xvcjpyZ2JhKDg5LCAxODksIDIwOCwgMSk7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gICAgY29sb3I6cmdiYSgzNSwgMTgxLCAyMjksIDEpO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCg2KXtcclxuICAgIGNvbG9yOnJnYmEoMTkzLCAyMTcsIDE0OCwgMSk7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDcpe1xyXG4gICAgY29sb3I6cmdiYSg1MywgMjAzLCA5MywgMSk7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDgpe1xyXG4gICAgY29sb3I6cmdiYSgxMDksIDE1OSwgMjA5LCAxKTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoOSl7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uY291bnRlciA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSl7ICAgIFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5jb3VudGVyID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKXsgICAgXHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRke1xyXG4gICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgcmdiYSgxODYsIDE4OCwgMTg4LCAwLjEpO1xyXG59XHJcbi50YWJsZSA+IHRoZWFkID4gdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgcmdiYSgxODYsIDE4OCwgMTg4LCAxKTtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG59XHJcbi5idG5CYWNre1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MCwgMTI4LCAxNjUsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/deals/deal.component.ts": 
        /*!*****************************************!*\
          !*** ./src/app/deals/deal.component.ts ***!
          \*****************************************/
        /*! exports provided: TodoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () { return TodoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _deal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal.service */ "./src/app/deals/deal.service.ts");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _common_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-config */ "./src/app/common/app-config.ts");
            var TodoListComponent = /** @class */ (function () {
                function TodoListComponent(todoListService, broadcastService, msalService) {
                    this.todoListService = todoListService;
                    this.broadcastService = broadcastService;
                    this.msalService = msalService;
                    this.error = "";
                    this.loadingMessage = "Loading...";
                    this.noFilter = "";
                    this.submitted = false;
                }
                TodoListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.populate();
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
                        console.log("acquire token failure " + JSON.stringify(payload));
                        if (payload.errorDesc.indexOf("consent_required") !== -1 || payload.errorDesc.indexOf("interaction_required") != -1) {
                            _this.msalService.acquireTokenPopup(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].webApiScopes).then(function (token) {
                                _this.todoListService.getItems().subscribe(function (results) {
                                    _this.todoSPList = results;
                                    _this.todoSPListOrg = results;
                                }, function (err) {
                                    _this.error = err;
                                });
                            }, function (error) {
                            });
                        }
                    });
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
                        console.log("acquire token success");
                    });
                };
                TodoListComponent.prototype.populate = function () {
                    var _this = this;
                    this.todoListService.getSPItems().subscribe(function (result) {
                        _this.todoSPList = result;
                        _this.todoSPListOrg = result;
                        console.log(result);
                    }, function (error) {
                        console.log("access token silent failed");
                        _this.error = error;
                    });
                };
                TodoListComponent.prototype.getCount = function (fltr) {
                    return this.todoSPListOrg.filter(function (s) { return s.dealStage == fltr; }).length;
                };
                TodoListComponent.prototype.filter = function (fltr) {
                    if (this.noFilter == fltr) {
                        this.todoSPList = this.todoSPListOrg;
                        this.noFilter = "";
                    }
                    else {
                        this.todoSPList = this.todoSPListOrg.filter(function (s) { return s.dealStage == fltr; });
                        this.noFilter = fltr;
                    }
                };
                //extremely important to unsubscribe
                TodoListComponent.prototype.ngOnDestroy = function () {
                    this.broadcastService.getMSALSubject().next(1);
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                };
                return TodoListComponent;
            }());
            TodoListComponent.ctorParameters = function () { return [
                { type: _deal_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"] }
            ]; };
            TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-todo-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal.component.css */ "./src/app/deals/deal.component.css")).default]
                })
            ], TodoListComponent);
            /***/ 
        }),
        /***/ "./src/app/deals/deal.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/deals/deal.service.ts ***!
          \***************************************/
        /*! exports provided: TodoListService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function () { return TodoListService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
            /* harmony import */ var _common_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-config */ "./src/app/common/app-config.ts");
            var TodoListService = /** @class */ (function () {
                function TodoListService(http) {
                    this.http = http;
                }
                TodoListService.prototype.getItems = function () {
                    return this.http.get(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].webApiEndpoint + "/deals/hardcoded")
                        .map(function (response) { return response; })
                        .catch(function (response) { return (rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response)); });
                };
                TodoListService.prototype.getSPItems = function () {
                    return this.http.get(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].webApiEndpoint + "/deals")
                        .map(function (response) { return response; })
                        .catch(function (response) { return (rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response)); });
                };
                TodoListService.prototype.getDealDocuments = function (id) {
                    return this.http.get(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].webApiEndpoint + "/deals/documents/" + id)
                        .map(function (response) { return response; })
                        .catch(function (response) { return (rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response)); });
                };
                TodoListService.prototype.postFile = function (fileToUpload, id) {
                    var endpoint = _common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].webApiEndpoint + "/deals/documents/" + id + "/upload";
                    var formData = new FormData();
                    formData.append('fileKey', fileToUpload, fileToUpload.name);
                    return this.http.post(endpoint, formData).map(function () { return true; })
                        .catch(function (response) { return (rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response)); });
                };
                return TodoListService;
            }());
            TodoListService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TodoListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TodoListService);
            /***/ 
        }),
        /***/ "./src/app/error.component.ts": 
        /*!************************************!*\
          !*** ./src/app/error.component.ts ***!
          \************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                }
                return ErrorComponent;
            }());
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "<h1>Page not found</h1>\n               <p>This is a Error Page</p>\n              "
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "<div style=\"text-align: center;font-size: 20px;background-color: rgba(245, 250, 255, 1); min-height:548px;\"><div style=\"padding-top: 10%;\">Demo Application for Calling Azure AD secured Web API from Angular Client</div></div>"
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/sharepoint-data/sharepoint-data.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/sharepoint-data/sharepoint-data.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".userData{\r\n    padding: 15px;\r\n    background-color: rgba(245, 250, 255, 1);\r\n    min-height: 548px;\r\n}\r\n\r\n.userTable{\r\n    font-size: 11px;\r\n}\r\n\r\n.userTable th{\r\n    font-weight: normal;\r\n}\r\n\r\n.tableTitle{\r\n    font-size: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.counter{\r\n    width: 100%;\r\n    margin-bottom: 33px;\r\n}\r\n\r\n.counter > div{\r\n    display: inline-block;\r\n    padding: 10px 10px;\r\n    font-size: 11px;\r\n    width: 14%;\r\n    cursor: pointer;\r\n}\r\n\r\n.fColor{    \r\n    color: gray !important;\r\n}\r\n\r\n.counter > div > div > span{\r\n    float: right;\r\n    margin-top: 2%;\r\n}\r\n\r\n.counter > div:nth-child(1){\r\n    color:rgba(85, 85, 85, 1);\r\n}\r\n\r\n.counter > div:nth-child(2){\r\n    color:rgba(255, 182, 70, 1);\r\n}\r\n\r\n.counter > div:nth-child(3){\r\n    color:rgba(255, 160, 95, 1);\r\n}\r\n\r\n.counter > div:nth-child(4){\r\n    color:rgba(89, 189, 208, 1);\r\n}\r\n\r\n.counter > div:nth-child(5){\r\n    color:rgba(35, 181, 229, 1);\r\n}\r\n\r\n.counter > div:nth-child(6){\r\n    color:rgba(193, 217, 148, 1);\r\n}\r\n\r\n.counter > div:nth-child(7){\r\n    color:rgba(53, 203, 93, 1);\r\n}\r\n\r\n.counter > div:nth-child(8){\r\n    color:rgba(109, 159, 209, 1);\r\n}\r\n\r\n.counter > div:nth-child(9){\r\n    color:black;\r\n}\r\n\r\n.counter > div > div:nth-child(1){    \r\n    font-size: 30px;\r\n}\r\n\r\n.counter > div > div:nth-child(2){    \r\n    white-space:nowrap;\r\n    border-bottom: 1px solid;\r\n    padding: 2px;\r\n}\r\n\r\n.table > tbody > tr > td{\r\n    border-top: 0.1px solid rgba(186, 188, 188, 0.1);\r\n}\r\n\r\n.table > thead > th {\r\n    border-bottom: 0.1px solid rgba(186, 188, 188, 1);\r\n    padding: 4px 12px;\r\n}\r\n\r\n.btnBack{\r\n    margin-right: 15px;\r\n    background-color: rgba(90, 128, 165, 1);\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVwb2ludC1kYXRhL3NoYXJlcG9pbnQtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXBvaW50LWRhdGEvc2hhcmVwb2ludC1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckRhdGF7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI1MCwgMjU1LCAxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDU0OHB4O1xyXG59XHJcblxyXG4udXNlclRhYmxle1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi51c2VyVGFibGUgdGh7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi50YWJsZVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY291bnRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzNweDtcclxufVxyXG4uY291bnRlciA+IGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHdpZHRoOiAxNCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mQ29sb3J7ICAgIFxyXG4gICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdW50ZXIgPiBkaXYgPiBkaXYgPiBzcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgY29sb3I6cmdiYSg4NSwgODUsIDg1LCAxKTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMTgyLCA3MCwgMSk7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDMpe1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDE2MCwgOTUsIDEpO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCg0KXtcclxuICAgIGNvbG9yOnJnYmEoODksIDE4OSwgMjA4LCAxKTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoNSl7XHJcbiAgICBjb2xvcjpyZ2JhKDM1LCAxODEsIDIyOSwgMSk7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDYpe1xyXG4gICAgY29sb3I6cmdiYSgxOTMsIDIxNywgMTQ4LCAxKTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoNyl7XHJcbiAgICBjb2xvcjpyZ2JhKDUzLCAyMDMsIDkzLCAxKTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoOCl7XHJcbiAgICBjb2xvcjpyZ2JhKDEwOSwgMTU5LCAyMDksIDEpO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCg5KXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5jb3VudGVyID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKXsgICAgXHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpeyAgICBcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGR7XHJcbiAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2JhKDE4NiwgMTg4LCAxODgsIDAuMSk7XHJcbn1cclxuLnRhYmxlID4gdGhlYWQgPiB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2JhKDE4NiwgMTg4LCAxODgsIDEpO1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbn1cclxuLmJ0bkJhY2t7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCAxMjgsIDE2NSwgMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/sharepoint-data/sharepoint-data.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/sharepoint-data/sharepoint-data.component.ts ***!
          \**************************************************************/
        /*! exports provided: SharepointDataComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharepointDataComponent", function () { return SharepointDataComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _sharepoint_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharepoint-data.service */ "./src/app/sharepoint-data/sharepoint-data.service.ts");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _common_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-config */ "./src/app/common/app-config.ts");
            var SharepointDataComponent = /** @class */ (function () {
                function SharepointDataComponent(spListService, broadcastService, msalService) {
                    this.spListService = spListService;
                    this.broadcastService = broadcastService;
                    this.msalService = msalService;
                    this.noFilter = "";
                }
                SharepointDataComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.populate();
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
                        console.log("acquire token failure " + JSON.stringify(payload));
                        if (payload.errorDesc.indexOf("consent_required") !== -1 || payload.errorDesc.indexOf("interaction_required") != -1) {
                            _this.msalService.acquireTokenPopup(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].spApiScopes).then(function (token) {
                                _this.spListService.getItems().subscribe(function (results) {
                                    _this.spList = results.value;
                                    _this.spListOrg = results.value;
                                }, function (err) {
                                    console.log(err);
                                });
                            }, function (error) {
                            });
                        }
                    });
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
                        console.log("acquire token success");
                    });
                };
                SharepointDataComponent.prototype.populate = function () {
                    var _this = this;
                    this.spListService.getItems().subscribe(function (result) {
                        _this.spList = result.value;
                        _this.spListOrg = result.value;
                        console.log(result);
                    }, function (error) {
                        console.log("access token silent failed");
                    });
                };
                SharepointDataComponent.prototype.getCount = function (fltr) {
                    return this.spListOrg.filter(function (s) { return s['DealStage'] == fltr; }).length;
                };
                SharepointDataComponent.prototype.filter = function (fltr) {
                    if (this.noFilter == fltr) {
                        this.spList = this.spListOrg;
                        this.noFilter = "";
                    }
                    else {
                        this.spList = this.spListOrg.filter(function (s) { return s['DealStage'] == fltr; });
                        this.noFilter = fltr;
                    }
                };
                //extremely important to unsubscribe
                SharepointDataComponent.prototype.ngOnDestroy = function () {
                    this.broadcastService.getMSALSubject().next(1);
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                };
                return SharepointDataComponent;
            }());
            SharepointDataComponent.ctorParameters = function () { return [
                { type: _sharepoint_data_service__WEBPACK_IMPORTED_MODULE_2__["SPListService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"] }
            ]; };
            SharepointDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sharepoint-data',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sharepoint-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sharepoint-data/sharepoint-data.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sharepoint-data.component.css */ "./src/app/sharepoint-data/sharepoint-data.component.css")).default]
                })
            ], SharepointDataComponent);
            /***/ 
        }),
        /***/ "./src/app/sharepoint-data/sharepoint-data.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/sharepoint-data/sharepoint-data.service.ts ***!
          \************************************************************/
        /*! exports provided: SPListService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPListService", function () { return SPListService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
            /* harmony import */ var _common_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-config */ "./src/app/common/app-config.ts");
            var SPListService = /** @class */ (function () {
                function SPListService(http) {
                    this.http = http;
                }
                SPListService.prototype.getItems = function () {
                    return this.http.get(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].sharepointURL)
                        .map(function (response) { return response; })
                        .catch(function (response) { return (rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response)); });
                };
                SPListService.prototype.postItem = function (item) {
                    return this.http.post(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].sharepointURL + _common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].sharepointList, item, { responseType: 'text' })
                        .map(function (response) {
                        return response;
                    });
                };
                return SPListService;
            }());
            SPListService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SPListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], SPListService);
            /***/ 
        }),
        /***/ "./src/app/spapi/spapi.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/spapi/spapi.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".userData{\r\n    padding: 15px;\r\n    background-color: rgba(245, 250, 255, 1);\r\n    min-height: 548px;\r\n}\r\n.userTable{\r\n    font-size: 11px;\r\n}\r\n.userTable th{\r\n    font-weight: normal;\r\n}\r\n.tableTitle{\r\n    font-size: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.counter{\r\n    width: 100%;\r\n    margin-bottom: 33px;\r\n}\r\n.counter > div{\r\n    display: inline-block;\r\n    padding: 10px 10px;\r\n    font-size: 11px;\r\n    width: 14%;\r\n    cursor: pointer;\r\n}\r\n.fColor{    \r\n    color: gray !important;\r\n}\r\n.counter > div > div > span{\r\n    float: right;\r\n    margin-top: 2%;\r\n}\r\n.counter > div:nth-child(1){\r\n    color:black;\r\n}\r\n.counter > div:nth-child(2){\r\n    color:orange;\r\n}\r\n.counter > div:nth-child(3){\r\n    color:red;\r\n}\r\n.counter > div:nth-child(4){\r\n    color:royalblue;\r\n}\r\n.counter > div:nth-child(5){\r\n    color:blue;\r\n}\r\n.counter > div:nth-child(6){\r\n    color:rgb(190, 207, 34);\r\n}\r\n.counter > div:nth-child(7){\r\n    color:rgb(44, 212, 81);\r\n}\r\n.counter > div:nth-child(8){\r\n    color:black;\r\n}\r\n.counter > div:nth-child(9){\r\n    color:black;\r\n}\r\n.counter > div > div:nth-child(1){    \r\n    font-size: 30px;\r\n}\r\n.counter > div > div:nth-child(2){    \r\n    white-space:nowrap;\r\n    border-bottom: 1px solid;\r\n    padding: 2px;\r\n}\r\n.table > tbody > tr > td{\r\n    border-top: 0.1px solid rgba(186, 188, 188, 0.1);\r\n}\r\n.table > thead > th {\r\n    border-bottom: 0.1px solid rgba(186, 188, 188, 1);\r\n    padding: 4px 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhcGkvc3BhcGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3BhcGkvc3BhcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyRGF0YXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjUwLCAyNTUsIDEpO1xyXG4gICAgbWluLWhlaWdodDogNTQ4cHg7XHJcbn1cclxuLnVzZXJUYWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4udXNlclRhYmxlIHRoe1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udGFibGVUaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNvdW50ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZkNvbG9yeyAgICBcclxuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXYgPiBkaXYgPiBzcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCgzKXtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgICBjb2xvcjpyb3lhbGJsdWU7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoNil7XHJcbiAgICBjb2xvcjpyZ2IoMTkwLCAyMDcsIDM0KTtcclxufVxyXG4uY291bnRlciA+IGRpdjpudGgtY2hpbGQoNyl7XHJcbiAgICBjb2xvcjpyZ2IoNDQsIDIxMiwgODEpO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCg4KXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5jb3VudGVyID4gZGl2Om50aC1jaGlsZCg5KXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5jb3VudGVyID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKXsgICAgXHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmNvdW50ZXIgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpeyAgICBcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGR7XHJcbiAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCByZ2JhKDE4NiwgMTg4LCAxODgsIDAuMSk7XHJcbn1cclxuLnRhYmxlID4gdGhlYWQgPiB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2JhKDE4NiwgMTg4LCAxODgsIDEpO1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/spapi/spapi.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/spapi/spapi.component.ts ***!
          \******************************************/
        /*! exports provided: SPapiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPapiComponent", function () { return SPapiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _deals_deal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deals/deal.service */ "./src/app/deals/deal.service.ts");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _common_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-config */ "./src/app/common/app-config.ts");
            var SPapiComponent = /** @class */ (function () {
                function SPapiComponent(todoListService, broadcastService, msalService) {
                    this.todoListService = todoListService;
                    this.broadcastService = broadcastService;
                    this.msalService = msalService;
                    this.error = "";
                    this.noFilter = "";
                    this.noFilterClass = "nofilter";
                }
                SPapiComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.populate();
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
                        console.log("acquire token failure " + JSON.stringify(payload));
                        if (payload.errorDesc.indexOf("consent_required") !== -1 || payload.errorDesc.indexOf("interaction_required") != -1) {
                            _this.msalService.acquireTokenPopup(_common_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].webApiScopes).then(function (token) {
                                _this.todoListService.getItems().subscribe(function (results) {
                                    _this.todoList = results;
                                    _this.todoListOrg = results;
                                }, function (err) {
                                    _this.error = err;
                                });
                            }, function (error) {
                            });
                        }
                    });
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
                        console.log("acquire token success");
                    });
                };
                SPapiComponent.prototype.populate = function () {
                    var _this = this;
                    this.todoListService.getItems().subscribe(function (result) {
                        _this.todoList = result;
                        _this.todoListOrg = result;
                        console.log(result);
                    }, function (error) {
                        console.log("access token silent failed");
                        _this.error = error;
                    });
                };
                SPapiComponent.prototype.getCount = function (fltr) {
                    return this.todoListOrg.filter(function (s) { return s.dealStage == fltr; }).length;
                };
                SPapiComponent.prototype.filter = function (fltr) {
                    if (this.noFilter == fltr) {
                        this.todoList = this.todoListOrg;
                        this.noFilter = "";
                    }
                    else {
                        this.todoList = this.todoListOrg.filter(function (s) { return s.dealStage == fltr; });
                        this.noFilter = fltr;
                    }
                };
                //extremely important to unsubscribe
                SPapiComponent.prototype.ngOnDestroy = function () {
                    this.broadcastService.getMSALSubject().next(1);
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                };
                return SPapiComponent;
            }());
            SPapiComponent.ctorParameters = function () { return [
                { type: _deals_deal_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"] }
            ]; };
            SPapiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-spapi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spapi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spapi/spapi.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spapi.component.css */ "./src/app/spapi/spapi.component.css")).default]
                })
            ], SPapiComponent);
            /***/ 
        }),
        /***/ "./src/app/user-data/user-data.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/user-data/user-data.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".userData{\r\n    padding: 15px;\r\n    background-color: rgba(245, 250, 255, 1);\r\n    min-height: 548px;\r\n}\r\n.userTable{\r\n    background-color: white;\r\n}\r\n.tableTitle{\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kYXRhL3VzZXItZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGF0YS91c2VyLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyRGF0YXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjUwLCAyNTUsIDEpO1xyXG4gICAgbWluLWhlaWdodDogNTQ4cHg7XHJcbn1cclxuLnVzZXJUYWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi50YWJsZVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/user-data/user-data.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/user-data/user-data.component.ts ***!
          \**************************************************/
        /*! exports provided: UserDataComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataComponent", function () { return UserDataComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
            /* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _common_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/HttpServiceHelper */ "./src/app/common/HttpServiceHelper.ts");
            var UserDataComponent = /** @class */ (function () {
                function UserDataComponent(authService, http, httpService, broadcastService) {
                    this.authService = authService;
                    this.http = http;
                    this.httpService = httpService;
                    this.broadcastService = broadcastService;
                    this.url = "https://graph.microsoft.com/v1.0/me";
                }
                UserDataComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getUSerProfile();
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
                        console.log("acquire token success " + JSON.stringify(payload));
                    });
                    //will work for acquireTokenSilent and acquireTokenPopup
                    this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
                        console.log("acquire token failure " + JSON.stringify(payload));
                        if (payload.errorDesc.indexOf("consent_required") !== -1 || payload.errorDesc.indexOf("interaction_required") != -1) {
                            _this.authService.acquireTokenPopup(["user.read"]).then(function (token) {
                                _this.getUSerProfile();
                            }, function (error) {
                            });
                        }
                    });
                };
                UserDataComponent.prototype.getUSerProfile = function () {
                    var _this = this;
                    this.httpService.httpGetRequest(this.url)
                        .subscribe(function (data) {
                        _this.userData = data;
                        console.log(data);
                    }, function (error) {
                        console.error(" Http get request to MS Graph failed" + JSON.stringify(error));
                    });
                };
                //extremely important to unsubscribe
                UserDataComponent.prototype.ngOnDestroy = function () {
                    this.broadcastService.getMSALSubject().next(1);
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                };
                return UserDataComponent;
            }());
            UserDataComponent.ctorParameters = function () { return [
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _common_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_4__["HttpServiceHelper"] },
                { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] }
            ]; };
            UserDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-data',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-data/user-data.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-data.component.css */ "./src/app/user-data/user-data.component.css")).default]
                })
            ], UserDataComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `angular-cli.json`.
            var environment = {
                production: false
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/guest/Desktop/Demo/Angular/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map