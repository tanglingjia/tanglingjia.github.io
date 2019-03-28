(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lingjia_lingjia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lingjia/lingjia.component */ "./src/app/lingjia/lingjia.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
/* harmony import */ var _utilities_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/timestamp/timestamp.component */ "./src/app/utilities/timestamp/timestamp.component.ts");
/* harmony import */ var _utilities_number_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/number/number.component */ "./src/app/utilities/number/number.component.ts");
/* harmony import */ var _utilities_compare_compare_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/compare/compare.component */ "./src/app/utilities/compare/compare.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");









var routes = [
    { path: '', redirectTo: 'lingjia', pathMatch: 'full' },
    { path: 'lingjia', component: _lingjia_lingjia_component__WEBPACK_IMPORTED_MODULE_3__["LingjiaComponent"] },
    {
        path: 'utilities',
        component: _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_4__["UtilitiesComponent"],
        children: [
            { path: 'timestamp', component: _utilities_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_5__["TimestampComponent"] },
            { path: 'compare', component: _utilities_compare_compare_component__WEBPACK_IMPORTED_MODULE_7__["CompareComponent"] },
            { path: 'number', component: _utilities_number_number_component__WEBPACK_IMPORTED_MODULE_6__["NumberComponent"] }
        ]
    },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_8__["GamesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"mysite\">\n  <nav>\n    <button mat-button routerLink=\"lingjia\">\n      <span>Lingjia</span>\n    </button>\n    <button mat-button routerLink=\"utilities\">\n      <span>Utilities</span>\n    </button>\n    <button mat-button routerLink=\"games\">\n      <span>Games</span>\n    </button>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mysite {\n  height: 100%; }\n  .mysite nav {\n    height: 40px;\n    padding: 8px 16px;\n    background: #3f51b5;\n    color: #ffffff; }\n  .mysite nav .mat-icon {\n      float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGdpdFxcbXlzaXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFZLEVBQUE7RUFEaEI7SUFHUSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFOdEI7TUFRWSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYWxpZ25NZTogY2VudGVyO1xyXG4ubXlzaXRlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG5hdiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mysite';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
/* harmony import */ var _lingjia_lingjia_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lingjia/lingjia.component */ "./src/app/lingjia/lingjia.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _utilities_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utilities/timestamp/timestamp.component */ "./src/app/utilities/timestamp/timestamp.component.ts");
/* harmony import */ var _utilities_compare_compare_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utilities/compare/compare.component */ "./src/app/utilities/compare/compare.component.ts");
/* harmony import */ var _utilities_number_number_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utilities/number/number.component */ "./src/app/utilities/number/number.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_15__["UtilitiesComponent"],
                _lingjia_lingjia_component__WEBPACK_IMPORTED_MODULE_16__["LingjiaComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_17__["GamesComponent"],
                _utilities_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_19__["TimestampComponent"],
                _utilities_compare_compare_component__WEBPACK_IMPORTED_MODULE_20__["CompareComponent"],
                _utilities_number_number_component__WEBPACK_IMPORTED_MODULE_21__["NumberComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  games works!\n</p>\n"

/***/ }),

/***/ "./src/app/games/games.component.scss":
/*!********************************************!*\
  !*** ./src/app/games/games.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.scss */ "./src/app/games/games.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/lingjia/lingjia.component.html":
/*!************************************************!*\
  !*** ./src/app/lingjia/lingjia.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  &nbsp;&nbsp;匠人之心\n</p>\n"

/***/ }),

/***/ "./src/app/lingjia/lingjia.component.scss":
/*!************************************************!*\
  !*** ./src/app/lingjia/lingjia.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmdqaWEvbGluZ2ppYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lingjia/lingjia.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lingjia/lingjia.component.ts ***!
  \**********************************************/
/*! exports provided: LingjiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LingjiaComponent", function() { return LingjiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LingjiaComponent = /** @class */ (function () {
    function LingjiaComponent() {
    }
    LingjiaComponent.prototype.ngOnInit = function () {
    };
    LingjiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lingjia',
            template: __webpack_require__(/*! ./lingjia.component.html */ "./src/app/lingjia/lingjia.component.html"),
            styles: [__webpack_require__(/*! ./lingjia.component.scss */ "./src/app/lingjia/lingjia.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LingjiaComponent);
    return LingjiaComponent;
}());



/***/ }),

/***/ "./src/app/utilities/compare/compare.component.html":
/*!**********************************************************!*\
  !*** ./src/app/utilities/compare/compare.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"compare\"></div>"

/***/ }),

/***/ "./src/app/utilities/compare/compare.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/utilities/compare/compare.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\n  font-size: 13.3333px; }\n  .left textarea {\n    position: absolute;\n    left: 50px; }\n  .left .row {\n    position: absolute; }\n  .right textarea {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0aWVzL2NvbXBhcmUvRDpcXGdpdFxcbXlzaXRlL3NyY1xcYXBwXFx1dGlsaXRpZXNcXGNvbXBhcmVcXGNvbXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBQTtFQUR0QjtJQUdJLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFKZDtJQU9JLGtCQUFrQixFQUFBO0VBR3RCO0VBRUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91dGlsaXRpZXMvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xyXG4gIGZvbnQtc2l6ZTogMTMuMzMzM3B4O1xyXG4gIHRleHRhcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4ucmlnaHQge1xyXG4gIHRleHRhcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/utilities/compare/compare.component.ts":
/*!********************************************************!*\
  !*** ./src/app/utilities/compare/compare.component.ts ***!
  \********************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_merge_merge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/merge/merge.js */ "./node_modules/codemirror/addon/merge/merge.js");
/* harmony import */ var codemirror_addon_merge_merge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_merge_merge_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_diff_match_patch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/diff_match_patch.js */ "./src/assets/diff_match_patch.js");
/* harmony import */ var _assets_diff_match_patch_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_diff_match_patch_js__WEBPACK_IMPORTED_MODULE_4__);





var CompareComponent = /** @class */ (function () {
    function CompareComponent() {
    }
    CompareComponent.prototype.initUI = function () {
        var target = document.getElementById("compare");
        codemirror__WEBPACK_IMPORTED_MODULE_2__["MergeView"](target, {
            value: '',
            origLeft: '',
            lineNumbers: true,
            allowEditingOriginals: true
        });
    };
    CompareComponent.prototype.ngOnInit = function () {
        this.initUI();
    };
    CompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/utilities/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/utilities/compare/compare.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/utilities/number/number.component.html":
/*!********************************************************!*\
  !*** ./src/app/utilities/number/number.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-select class=\"numberconvert\" [(value)]=\"sourceType\">\n  <mat-option *ngFor=\"let item of sourceItems\" [value]=\"item.value\" [disabled]=\"item.disabled\" (click)=\"changeSource(item)\">\n    {{item.text}}\n  </mat-option>\n</mat-select>\n<input class=\"txtsource\" matInput placeholder=\"输入要转化的数字\" [(ngModel)]=\"sourceNumber\">\n<button class=\"transfer\" mat-mini-fab (click)=\"translate()\">转化</button>\n<mat-select class=\"numberconvert\" [(value)]=\"targetType\">\n  <mat-option *ngFor=\"let item of targetItems\" [value]=\"item.value\" [disabled]=\"item.disabled\">\n    {{item.text}}\n  </mat-option>\n</mat-select>\n<input class=\"txttarget\" matInput [(ngModel)]=\"targetNumber\">"

/***/ }),

/***/ "./src/app/utilities/number/number.component.scss":
/*!********************************************************!*\
  !*** ./src/app/utilities/number/number.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numberconvert {\n  width: 120px;\n  height: 30px;\n  margin-left: 30px; }\n\n.txtsource, .txttarget {\n  width: 120px;\n  height: 30px;\n  margin-left: 30px; }\n\n.transfer {\n  margin-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0aWVzL251bWJlci9EOlxcZ2l0XFxteXNpdGUvc3JjXFxhcHBcXHV0aWxpdGllc1xcbnVtYmVyXFxudW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91dGlsaXRpZXMvbnVtYmVyL251bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXJjb252ZXJ0IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udHh0c291cmNlLC50eHR0YXJnZXQge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50cmFuc2ZlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/utilities/number/number.component.ts":
/*!******************************************************!*\
  !*** ./src/app/utilities/number/number.component.ts ***!
  \******************************************************/
/*! exports provided: NumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberComponent", function() { return NumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberComponent = /** @class */ (function () {
    function NumberComponent() {
        this.sourceItems = [
            {
                value: 'option1',
                text: '2进制',
                disabled: false
            },
            {
                value: 'option2',
                text: '8进制',
                disabled: false
            },
            {
                value: 'option3',
                text: '10进制',
                disabled: false
            },
            {
                value: 'option4',
                text: '16进制',
                disabled: false
            }
        ];
        this.targetItems = [
            {
                value: 'option1',
                text: '2进制',
                disabled: true
            },
            {
                value: 'option2',
                text: '8进制',
                disabled: false
            },
            {
                value: 'option3',
                text: '10进制',
                disabled: false
            },
            {
                value: 'option4',
                text: '16进制',
                disabled: false
            }
        ];
    }
    NumberComponent.prototype.ngOnInit = function () {
        this.sourceType = "option1";
        this.targetType = "option2";
    };
    NumberComponent.prototype.changeSource = function (item) {
        var _this = this;
        var needChangeTarget = false;
        if (item.value === this.targetType) {
            needChangeTarget = true;
        }
        this.targetItems.forEach(function (i) {
            i.disabled = i.value === item.value;
            if (needChangeTarget) {
                if (i.value != _this.targetType) {
                    _this.targetType = i.value;
                    needChangeTarget = false;
                }
            }
        });
    };
    NumberComponent.prototype.translate = function () {
        var sourceTransferNum = '';
        switch (this.sourceType) {
            case 'option1':
                sourceTransferNum = '2';
                break;
            case 'option2':
                sourceTransferNum = '8';
                break;
            case 'option4':
                sourceTransferNum = '16';
                break;
        }
        var targetTransferNum = '';
        switch (this.targetType) {
            case 'option1':
                targetTransferNum = '2';
                break;
            case 'option2':
                targetTransferNum = '8';
                break;
            case 'option4':
                targetTransferNum = '16';
                break;
        }
        this.targetNumber = targetTransferNum === '' ?
            parseInt(this.sourceNumber, parseInt(sourceTransferNum)).toString() :
            parseInt(this.sourceNumber, parseInt(sourceTransferNum)).toString(parseInt(targetTransferNum));
    };
    NumberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-number',
            template: __webpack_require__(/*! ./number.component.html */ "./src/app/utilities/number/number.component.html"),
            styles: [__webpack_require__(/*! ./number.component.scss */ "./src/app/utilities/number/number.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NumberComponent);
    return NumberComponent;
}());



/***/ }),

/***/ "./src/app/utilities/timestamp/timestamp.component.html":
/*!**************************************************************!*\
  !*** ./src/app/utilities/timestamp/timestamp.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input class=\"txttimestamp\" matInput placeholder=\"输入时间戳（秒）如946656000\" [(ngModel)]=\"currentTimestamp\">\n</div>\n<div>\n  <mat-button-toggle-group class=\"translate\">\n    <mat-button-toggle class=\"tranbutton\" (click)=\"translateToTime()\">\n      <mat-icon>arrow_downward</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle class=\"tranbutton\" (click)=\"translateToTimestamp()\">\n      <mat-icon>arrow_upward</mat-icon>\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n<div>\n  <input class=\"txttime\" matInput placeholder=\"输入时间格式如2000-01-01 00:00:00\" [(ngModel)]=\"currentTime\">\n</div>\n"

/***/ }),

/***/ "./src/app/utilities/timestamp/timestamp.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/utilities/timestamp/timestamp.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txttimestamp {\n  width: 250px;\n  height: 30px;\n  margin-bottom: 20px; }\n\n.translate {\n  margin-left: 70px; }\n\n.txttime {\n  margin-top: 20px;\n  width: 250px;\n  height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0aWVzL3RpbWVzdGFtcC9EOlxcZ2l0XFxteXNpdGUvc3JjXFxhcHBcXHV0aWxpdGllc1xcdGltZXN0YW1wXFx0aW1lc3RhbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXRpbGl0aWVzL3RpbWVzdGFtcC90aW1lc3RhbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0dGltZXN0YW1wIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50cmFuc2xhdGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcblxyXG4udHh0dGltZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/utilities/timestamp/timestamp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/utilities/timestamp/timestamp.component.ts ***!
  \************************************************************/
/*! exports provided: TimestampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampComponent", function() { return TimestampComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimestampComponent = /** @class */ (function () {
    function TimestampComponent() {
    }
    TimestampComponent.prototype.ngOnInit = function () {
        this.currentTimestamp = (new Date()).valueOf().toString();
        this.currentTime = this.format(parseInt(this.currentTimestamp));
    };
    TimestampComponent.prototype.translateToTime = function () {
        this.currentTime = this.format(parseInt(this.currentTimestamp));
    };
    TimestampComponent.prototype.translateToTimestamp = function () {
        this.currentTimestamp = (new Date(this.currentTime)).valueOf().toString();
    };
    TimestampComponent.prototype.add0 = function (m) {
        return m < 10 ? '0' + m : m;
    };
    TimestampComponent.prototype.format = function (shijianchuo) {
        var time = new Date(shijianchuo);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
    };
    TimestampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timestamp',
            template: __webpack_require__(/*! ./timestamp.component.html */ "./src/app/utilities/timestamp/timestamp.component.html"),
            styles: [__webpack_require__(/*! ./timestamp.component.scss */ "./src/app/utilities/timestamp/timestamp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimestampComponent);
    return TimestampComponent;
}());



/***/ }),

/***/ "./src/app/utilities/utilities.component.html":
/*!****************************************************!*\
  !*** ./src/app/utilities/utilities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"utilities\">\n  <mat-drawer class=\"type\" mode=\"side\" opened>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Regular\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <button mat-button (click)=\"turnToUtility()\" routerLink=\"timestamp\">\n            <span>linux时间戳</span>\n          </button>\n          <button mat-button (click)=\"turnToUtility()\" routerLink=\"compare\">\n            <span>文字对比</span>\n          </button>\n          <button mat-button (click)=\"turnToUtility()\" routerLink=\"number\">\n            <span>进制转化</span>\n          </button>\n        </mat-expansion-panel>\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\n          (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Second\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <p>The second one</p>\n        </mat-expansion-panel>\n      </mat-accordion>\n  </mat-drawer>\n  <mat-drawer-content class=\"content\">\n    <div *ngIf=\"showTips\">平常经常会用到的工具都会放到这里</div>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/utilities/utilities.component.scss":
/*!****************************************************!*\
  !*** ./src/app/utilities/utilities.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".utilities {\n  height: calc(100% - 76px);\n  margin: 10px; }\n  .utilities .type {\n    width: 200px; }\n  .utilities .content {\n    padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0aWVzL0Q6XFxnaXRcXG15c2l0ZS9zcmNcXGFwcFxcdXRpbGl0aWVzXFx1dGlsaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0VBRmQ7SUFJSSxZQUFZLEVBQUE7RUFKaEI7SUFPSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91dGlsaXRpZXMvdXRpbGl0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnV0aWxpdGllcyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3NnB4KTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgLnR5cGUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/utilities/utilities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/utilities/utilities.component.ts ***!
  \**************************************************/
/*! exports provided: UtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesComponent", function() { return UtilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilitiesComponent = /** @class */ (function () {
    function UtilitiesComponent() {
    }
    UtilitiesComponent.prototype.ngOnInit = function () {
        if (window.location.href.endsWith("utilities"))
            this.showTips = true;
    };
    UtilitiesComponent.prototype.turnToUtility = function () {
        this.showTips = false;
    };
    UtilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-utilities',
            template: __webpack_require__(/*! ./utilities.component.html */ "./src/app/utilities/utilities.component.html"),
            styles: [__webpack_require__(/*! ./utilities.component.scss */ "./src/app/utilities/utilities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilitiesComponent);
    return UtilitiesComponent;
}());



/***/ }),

/***/ "./src/assets/diff_match_patch.js":
/*!****************************************!*\
  !*** ./src/assets/diff_match_patch.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){function diff_match_patch(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=0.5;this.Match_Distance=1E3;this.Patch_DeleteThreshold=0.5;this.Patch_Margin=4;this.Match_MaxBits=32}
diff_match_patch.prototype.diff_main=function(a,b,c,d){"undefined"==typeof d&&(d=0>=this.Diff_Timeout?Number.MAX_VALUE:(new Date).getTime()+1E3*this.Diff_Timeout);if(null==a||null==b)throw Error("Null input. (diff_main)");if(a==b)return a?[[0,a]]:[];"undefined"==typeof c&&(c=!0);var e=c,f=this.diff_commonPrefix(a,b);c=a.substring(0,f);a=a.substring(f);b=b.substring(f);var f=this.diff_commonSuffix(a,b),g=a.substring(a.length-f);a=a.substring(0,a.length-f);b=b.substring(0,b.length-f);a=this.diff_compute_(a,
b,e,d);c&&a.unshift([0,c]);g&&a.push([0,g]);this.diff_cleanupMerge(a);return a};
diff_match_patch.prototype.diff_compute_=function(a,b,c,d){if(!a)return[[1,b]];if(!b)return[[-1,a]];var e=a.length>b.length?a:b,f=a.length>b.length?b:a,g=e.indexOf(f);return-1!=g?(c=[[1,e.substring(0,g)],[0,f],[1,e.substring(g+f.length)]],a.length>b.length&&(c[0][0]=c[2][0]=-1),c):1==f.length?[[-1,a],[1,b]]:(e=this.diff_halfMatch_(a,b))?(f=e[0],a=e[1],g=e[2],b=e[3],e=e[4],f=this.diff_main(f,g,c,d),c=this.diff_main(a,b,c,d),f.concat([[0,e]],c)):c&&100<a.length&&100<b.length?this.diff_lineMode_(a,b,
d):this.diff_bisect_(a,b,d)};
diff_match_patch.prototype.diff_lineMode_=function(a,b,c){var d=this.diff_linesToChars_(a,b);a=d.chars1;b=d.chars2;d=d.lineArray;a=this.diff_main(a,b,!1,c);this.diff_charsToLines_(a,d);this.diff_cleanupSemantic(a);a.push([0,""]);for(var e=d=b=0,f="",g="";b<a.length;){switch(a[b][0]){case 1:e++;g+=a[b][1];break;case -1:d++;f+=a[b][1];break;case 0:if(1<=d&&1<=e){a.splice(b-d-e,d+e);b=b-d-e;d=this.diff_main(f,g,!1,c);for(e=d.length-1;0<=e;e--)a.splice(b,0,d[e]);b+=d.length}d=e=0;g=f=""}b++}a.pop();return a};
diff_match_patch.prototype.diff_bisect_=function(a,b,c){for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),g=f,h=2*f,j=Array(h),i=Array(h),k=0;k<h;k++)j[k]=-1,i[k]=-1;j[g+1]=0;i[g+1]=0;for(var k=d-e,q=0!=k%2,r=0,t=0,p=0,w=0,v=0;v<f&&!((new Date).getTime()>c);v++){for(var n=-v+r;n<=v-t;n+=2){var l=g+n,m;m=n==-v||n!=v&&j[l-1]<j[l+1]?j[l+1]:j[l-1]+1;for(var s=m-n;m<d&&s<e&&a.charAt(m)==b.charAt(s);)m++,s++;j[l]=m;if(m>d)t+=2;else if(s>e)r+=2;else if(q&&(l=g+k-n,0<=l&&l<h&&-1!=i[l])){var u=d-i[l];if(m>=
u)return this.diff_bisectSplit_(a,b,m,s,c)}}for(n=-v+p;n<=v-w;n+=2){l=g+n;u=n==-v||n!=v&&i[l-1]<i[l+1]?i[l+1]:i[l-1]+1;for(m=u-n;u<d&&m<e&&a.charAt(d-u-1)==b.charAt(e-m-1);)u++,m++;i[l]=u;if(u>d)w+=2;else if(m>e)p+=2;else if(!q&&(l=g+k-n,0<=l&&(l<h&&-1!=j[l])&&(m=j[l],s=g+m-l,u=d-u,m>=u)))return this.diff_bisectSplit_(a,b,m,s,c)}}return[[-1,a],[1,b]]};
diff_match_patch.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),g=b.substring(0,d);a=a.substring(c);b=b.substring(d);f=this.diff_main(f,g,!1,e);e=this.diff_main(a,b,!1,e);return f.concat(e)};
diff_match_patch.prototype.diff_linesToChars_=function(a,b){function c(a){for(var b="",c=0,f=-1,g=d.length;f<a.length-1;){f=a.indexOf("\n",c);-1==f&&(f=a.length-1);var r=a.substring(c,f+1),c=f+1;(e.hasOwnProperty?e.hasOwnProperty(r):void 0!==e[r])?b+=String.fromCharCode(e[r]):(b+=String.fromCharCode(g),e[r]=g,d[g++]=r)}return b}var d=[],e={};d[0]="";var f=c(a),g=c(b);return{chars1:f,chars2:g,lineArray:d}};
diff_match_patch.prototype.diff_charsToLines_=function(a,b){for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++)e[f]=b[d.charCodeAt(f)];a[c][1]=e.join("")}};diff_match_patch.prototype.diff_commonPrefix=function(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(f,e)==b.substring(f,e)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};
diff_match_patch.prototype.diff_commonOverlap_=function(a,b){var c=a.length,d=b.length;if(0==c||0==d)return 0;c>d?a=a.substring(c-d):c<d&&(b=b.substring(0,c));c=Math.min(c,d);if(a==b)return c;for(var d=0,e=1;;){var f=a.substring(c-e),f=b.indexOf(f);if(-1==f)return d;e+=f;if(0==f||a.substring(c-e)==b.substring(0,e))d=e,e++}};
diff_match_patch.prototype.diff_halfMatch_=function(a,b){function c(a,b,c){for(var d=a.substring(c,c+Math.floor(a.length/4)),e=-1,g="",h,j,n,l;-1!=(e=b.indexOf(d,e+1));){var m=f.diff_commonPrefix(a.substring(c),b.substring(e)),s=f.diff_commonSuffix(a.substring(0,c),b.substring(0,e));g.length<s+m&&(g=b.substring(e-s,e)+b.substring(e,e+m),h=a.substring(0,c-s),j=a.substring(c+m),n=b.substring(0,e-s),l=b.substring(e+m))}return 2*g.length>=a.length?[h,j,n,l,g]:null}if(0>=this.Diff_Timeout)return null;
var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(4>d.length||2*e.length<d.length)return null;var f=this,g=c(d,e,Math.ceil(d.length/4)),d=c(d,e,Math.ceil(d.length/2)),h;if(!g&&!d)return null;h=d?g?g[4].length>d[4].length?g:d:d:g;var j;a.length>b.length?(g=h[0],d=h[1],e=h[2],j=h[3]):(e=h[0],j=h[1],g=h[2],d=h[3]);h=h[4];return[g,d,e,j,h]};
diff_match_patch.prototype.diff_cleanupSemantic=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=0,h=0,j=0,i=0;f<a.length;)0==a[f][0]?(c[d++]=f,g=j,h=i,i=j=0,e=a[f][1]):(1==a[f][0]?j+=a[f][1].length:i+=a[f][1].length,e&&(e.length<=Math.max(g,h)&&e.length<=Math.max(j,i))&&(a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,d--,f=0<d?c[d-1]:-1,i=j=h=g=0,e=null,b=!0)),f++;b&&this.diff_cleanupMerge(a);this.diff_cleanupSemanticLossless(a);for(f=1;f<a.length;){if(-1==a[f-1][0]&&1==a[f][0]){b=a[f-1][1];c=a[f][1];
d=this.diff_commonOverlap_(b,c);e=this.diff_commonOverlap_(c,b);if(d>=e){if(d>=b.length/2||d>=c.length/2)a.splice(f,0,[0,c.substring(0,d)]),a[f-1][1]=b.substring(0,b.length-d),a[f+1][1]=c.substring(d),f++}else if(e>=b.length/2||e>=c.length/2)a.splice(f,0,[0,b.substring(0,e)]),a[f-1][0]=1,a[f-1][1]=c.substring(0,c.length-e),a[f+1][0]=-1,a[f+1][1]=b.substring(e),f++;f++}f++}};
diff_match_patch.prototype.diff_cleanupSemanticLossless=function(a){function b(a,b){if(!a||!b)return 6;var c=a.charAt(a.length-1),d=b.charAt(0),e=c.match(diff_match_patch.nonAlphaNumericRegex_),f=d.match(diff_match_patch.nonAlphaNumericRegex_),g=e&&c.match(diff_match_patch.whitespaceRegex_),h=f&&d.match(diff_match_patch.whitespaceRegex_),c=g&&c.match(diff_match_patch.linebreakRegex_),d=h&&d.match(diff_match_patch.linebreakRegex_),i=c&&a.match(diff_match_patch.blanklineEndRegex_),j=d&&b.match(diff_match_patch.blanklineStartRegex_);
return i||j?5:c||d?4:e&&!g&&h?3:g||h?2:e||f?1:0}for(var c=1;c<a.length-1;){if(0==a[c-1][0]&&0==a[c+1][0]){var d=a[c-1][1],e=a[c][1],f=a[c+1][1],g=this.diff_commonSuffix(d,e);if(g)var h=e.substring(e.length-g),d=d.substring(0,d.length-g),e=h+e.substring(0,e.length-g),f=h+f;for(var g=d,h=e,j=f,i=b(d,e)+b(e,f);e.charAt(0)===f.charAt(0);){var d=d+e.charAt(0),e=e.substring(1)+f.charAt(0),f=f.substring(1),k=b(d,e)+b(e,f);k>=i&&(i=k,g=d,h=e,j=f)}a[c-1][1]!=g&&(g?a[c-1][1]=g:(a.splice(c-1,1),c--),a[c][1]=
h,j?a[c+1][1]=j:(a.splice(c+1,1),c--))}c++}};diff_match_patch.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/;diff_match_patch.whitespaceRegex_=/\s/;diff_match_patch.linebreakRegex_=/[\r\n]/;diff_match_patch.blanklineEndRegex_=/\n\r?\n$/;diff_match_patch.blanklineStartRegex_=/^\r?\n\r?\n/;
diff_match_patch.prototype.diff_cleanupEfficiency=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=!1,h=!1,j=!1,i=!1;f<a.length;){if(0==a[f][0])a[f][1].length<this.Diff_EditCost&&(j||i)?(c[d++]=f,g=j,h=i,e=a[f][1]):(d=0,e=null),j=i=!1;else if(-1==a[f][0]?i=!0:j=!0,e&&(g&&h&&j&&i||e.length<this.Diff_EditCost/2&&3==g+h+j+i))a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,e=null,g&&h?(j=i=!0,d=0):(d--,f=0<d?c[d-1]:-1,j=i=!1),b=!0;f++}b&&this.diff_cleanupMerge(a)};
diff_match_patch.prototype.diff_cleanupMerge=function(a){a.push([0,""]);for(var b=0,c=0,d=0,e="",f="",g;b<a.length;)switch(a[b][0]){case 1:d++;f+=a[b][1];b++;break;case -1:c++;e+=a[b][1];b++;break;case 0:1<c+d?(0!==c&&0!==d&&(g=this.diff_commonPrefix(f,e),0!==g&&(0<b-c-d&&0==a[b-c-d-1][0]?a[b-c-d-1][1]+=f.substring(0,g):(a.splice(0,0,[0,f.substring(0,g)]),b++),f=f.substring(g),e=e.substring(g)),g=this.diff_commonSuffix(f,e),0!==g&&(a[b][1]=f.substring(f.length-g)+a[b][1],f=f.substring(0,f.length-
g),e=e.substring(0,e.length-g))),0===c?a.splice(b-d,c+d,[1,f]):0===d?a.splice(b-c,c+d,[-1,e]):a.splice(b-c-d,c+d,[-1,e],[1,f]),b=b-c-d+(c?1:0)+(d?1:0)+1):0!==b&&0==a[b-1][0]?(a[b-1][1]+=a[b][1],a.splice(b,1)):b++,c=d=0,f=e=""}""===a[a.length-1][1]&&a.pop();c=!1;for(b=1;b<a.length-1;)0==a[b-1][0]&&0==a[b+1][0]&&(a[b][1].substring(a[b][1].length-a[b-1][1].length)==a[b-1][1]?(a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length),a[b+1][1]=a[b-1][1]+a[b+1][1],a.splice(b-1,1),c=!0):a[b][1].substring(0,
a[b+1][1].length)==a[b+1][1]&&(a[b-1][1]+=a[b+1][1],a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1],a.splice(b+1,1),c=!0)),b++;c&&this.diff_cleanupMerge(a)};diff_match_patch.prototype.diff_xIndex=function(a,b){var c=0,d=0,e=0,f=0,g;for(g=0;g<a.length;g++){1!==a[g][0]&&(c+=a[g][1].length);-1!==a[g][0]&&(d+=a[g][1].length);if(c>b)break;e=c;f=d}return a.length!=g&&-1===a[g][0]?f:f+(b-e)};
diff_match_patch.prototype.diff_prettyHtml=function(a){for(var b=[],c=/&/g,d=/</g,e=/>/g,f=/\n/g,g=0;g<a.length;g++){var h=a[g][0],j=a[g][1],j=j.replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&para;<br>");switch(h){case 1:b[g]='<ins style="background:#e6ffe6;">'+j+"</ins>";break;case -1:b[g]='<del style="background:#ffe6e6;">'+j+"</del>";break;case 0:b[g]="<span>"+j+"</span>"}}return b.join("")};
diff_match_patch.prototype.diff_text1=function(a){for(var b=[],c=0;c<a.length;c++)1!==a[c][0]&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++)-1!==a[c][0]&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_levenshtein=function(a){for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][0],g=a[e][1];switch(f){case 1:c+=g.length;break;case -1:d+=g.length;break;case 0:b+=Math.max(c,d),d=c=0}}return b+=Math.max(c,d)};
diff_match_patch.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++)switch(a[c][0]){case 1:b[c]="+"+encodeURI(a[c][1]);break;case -1:b[c]="-"+a[c][1].length;break;case 0:b[c]="="+a[c][1].length}return b.join("\t").replace(/%20/g," ")};
diff_match_patch.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),g=0;g<f.length;g++){var h=f[g].substring(1);switch(f[g].charAt(0)){case "+":try{c[d++]=[1,decodeURI(h)]}catch(j){throw Error("Illegal escape in diff_fromDelta: "+h);}break;case "-":case "=":var i=parseInt(h,10);if(isNaN(i)||0>i)throw Error("Invalid number in diff_fromDelta: "+h);h=a.substring(e,e+=i);"="==f[g].charAt(0)?c[d++]=[0,h]:c[d++]=[-1,h];break;default:if(f[g])throw Error("Invalid diff operation in diff_fromDelta: "+
f[g]);}}if(e!=a.length)throw Error("Delta length ("+e+") does not equal source text length ("+a.length+").");return c};diff_match_patch.prototype.match_main=function(a,b,c){if(null==a||null==b||null==c)throw Error("Null input. (match_main)");c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1};
diff_match_patch.prototype.match_bitap_=function(a,b,c){function d(a,d){var e=a/b.length,g=Math.abs(c-d);return!f.Match_Distance?g?1:e:e+g/f.Match_Distance}if(b.length>this.Match_MaxBits)throw Error("Pattern too long for this browser.");var e=this.match_alphabet_(b),f=this,g=this.Match_Threshold,h=a.indexOf(b,c);-1!=h&&(g=Math.min(d(0,h),g),h=a.lastIndexOf(b,c+b.length),-1!=h&&(g=Math.min(d(0,h),g)));for(var j=1<<b.length-1,h=-1,i,k,q=b.length+a.length,r,t=0;t<b.length;t++){i=0;for(k=q;i<k;)d(t,c+
k)<=g?i=k:q=k,k=Math.floor((q-i)/2+i);q=k;i=Math.max(1,c-k+1);var p=Math.min(c+k,a.length)+b.length;k=Array(p+2);for(k[p+1]=(1<<t)-1;p>=i;p--){var w=e[a.charAt(p-1)];k[p]=0===t?(k[p+1]<<1|1)&w:(k[p+1]<<1|1)&w|((r[p+1]|r[p])<<1|1)|r[p+1];if(k[p]&j&&(w=d(t,p-1),w<=g))if(g=w,h=p-1,h>c)i=Math.max(1,2*c-h);else break}if(d(t+1,c)>g)break;r=k}return h};
diff_match_patch.prototype.match_alphabet_=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=0;for(c=0;c<a.length;c++)b[a.charAt(c)]|=1<<a.length-c-1;return b};
diff_match_patch.prototype.patch_addContext_=function(a,b){if(0!=b.length){for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,c=b.substring(a.start2-d,a.start2+a.length1+d);d+=this.Patch_Margin;(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift([0,c]);(d=b.substring(a.start2+a.length1,a.start2+a.length1+d))&&a.diffs.push([0,d]);a.start1-=c.length;a.start2-=c.length;a.length1+=
c.length+d.length;a.length2+=c.length+d.length}};
diff_match_patch.prototype.patch_make=function(a,b,c){var d;if("string"==typeof a&&"string"==typeof b&&"undefined"==typeof c)d=a,b=this.diff_main(d,b,!0),2<b.length&&(this.diff_cleanupSemantic(b),this.diff_cleanupEfficiency(b));else if(a&&"object"==typeof a&&"undefined"==typeof b&&"undefined"==typeof c)b=a,d=this.diff_text1(b);else if("string"==typeof a&&b&&"object"==typeof b&&"undefined"==typeof c)d=a;else if("string"==typeof a&&"string"==typeof b&&c&&"object"==typeof c)d=a,b=c;else throw Error("Unknown call format to patch_make.");
if(0===b.length)return[];c=[];a=new diff_match_patch.patch_obj;for(var e=0,f=0,g=0,h=d,j=0;j<b.length;j++){var i=b[j][0],k=b[j][1];!e&&0!==i&&(a.start1=f,a.start2=g);switch(i){case 1:a.diffs[e++]=b[j];a.length2+=k.length;d=d.substring(0,g)+k+d.substring(g);break;case -1:a.length1+=k.length;a.diffs[e++]=b[j];d=d.substring(0,g)+d.substring(g+k.length);break;case 0:k.length<=2*this.Patch_Margin&&e&&b.length!=j+1?(a.diffs[e++]=b[j],a.length1+=k.length,a.length2+=k.length):k.length>=2*this.Patch_Margin&&
e&&(this.patch_addContext_(a,h),c.push(a),a=new diff_match_patch.patch_obj,e=0,h=d,f=g)}1!==i&&(f+=k.length);-1!==i&&(g+=k.length)}e&&(this.patch_addContext_(a,h),c.push(a));return c};diff_match_patch.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=new diff_match_patch.patch_obj;e.diffs=[];for(var f=0;f<d.diffs.length;f++)e.diffs[f]=d.diffs[f].slice();e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e}return b};
diff_match_patch.prototype.patch_apply=function(a,b){if(0==a.length)return[b,[]];a=this.patch_deepCopy(a);var c=this.patch_addPadding(a);b=c+b+c;this.patch_splitMax(a);for(var d=0,e=[],f=0;f<a.length;f++){var g=a[f].start2+d,h=this.diff_text1(a[f].diffs),j,i=-1;if(h.length>this.Match_MaxBits){if(j=this.match_main(b,h.substring(0,this.Match_MaxBits),g),-1!=j&&(i=this.match_main(b,h.substring(h.length-this.Match_MaxBits),g+h.length-this.Match_MaxBits),-1==i||j>=i))j=-1}else j=this.match_main(b,h,g);
if(-1==j)e[f]=!1,d-=a[f].length2-a[f].length1;else if(e[f]=!0,d=j-g,g=-1==i?b.substring(j,j+h.length):b.substring(j,i+this.Match_MaxBits),h==g)b=b.substring(0,j)+this.diff_text2(a[f].diffs)+b.substring(j+h.length);else if(g=this.diff_main(h,g,!1),h.length>this.Match_MaxBits&&this.diff_levenshtein(g)/h.length>this.Patch_DeleteThreshold)e[f]=!1;else{this.diff_cleanupSemanticLossless(g);for(var h=0,k,i=0;i<a[f].diffs.length;i++){var q=a[f].diffs[i];0!==q[0]&&(k=this.diff_xIndex(g,h));1===q[0]?b=b.substring(0,
j+k)+q[1]+b.substring(j+k):-1===q[0]&&(b=b.substring(0,j+k)+b.substring(j+this.diff_xIndex(g,h+q[1].length)));-1!==q[0]&&(h+=q[1].length)}}}b=b.substring(c.length,b.length-c.length);return[b,e]};
diff_match_patch.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++)c+=String.fromCharCode(d);for(d=0;d<a.length;d++)a[d].start1+=b,a[d].start2+=b;var d=a[0],e=d.diffs;if(0==e.length||0!=e[0][0])e.unshift([0,c]),d.start1-=b,d.start2-=b,d.length1+=b,d.length2+=b;else if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f}d=a[a.length-1];e=d.diffs;0==e.length||0!=e[e.length-1][0]?(e.push([0,
c]),d.length1+=b,d.length2+=b):b>e[e.length-1][1].length&&(f=b-e[e.length-1][1].length,e[e.length-1][1]+=c.substring(0,f),d.length1+=f,d.length2+=f);return c};
diff_match_patch.prototype.patch_splitMax=function(a){for(var b=this.Match_MaxBits,c=0;c<a.length;c++)if(!(a[c].length1<=b)){var d=a[c];a.splice(c--,1);for(var e=d.start1,f=d.start2,g="";0!==d.diffs.length;){var h=new diff_match_patch.patch_obj,j=!0;h.start1=e-g.length;h.start2=f-g.length;""!==g&&(h.length1=h.length2=g.length,h.diffs.push([0,g]));for(;0!==d.diffs.length&&h.length1<b-this.Patch_Margin;){var g=d.diffs[0][0],i=d.diffs[0][1];1===g?(h.length2+=i.length,f+=i.length,h.diffs.push(d.diffs.shift()),
j=!1):-1===g&&1==h.diffs.length&&0==h.diffs[0][0]&&i.length>2*b?(h.length1+=i.length,e+=i.length,j=!1,h.diffs.push([g,i]),d.diffs.shift()):(i=i.substring(0,b-h.length1-this.Patch_Margin),h.length1+=i.length,e+=i.length,0===g?(h.length2+=i.length,f+=i.length):j=!1,h.diffs.push([g,i]),i==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring(i.length))}g=this.diff_text2(h.diffs);g=g.substring(g.length-this.Patch_Margin);i=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);""!==i&&
(h.length1+=i.length,h.length2+=i.length,0!==h.diffs.length&&0===h.diffs[h.diffs.length-1][0]?h.diffs[h.diffs.length-1][1]+=i:h.diffs.push([0,i]));j||a.splice(++c,0,h)}}};diff_match_patch.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b.join("")};
diff_match_patch.prototype.patch_fromText=function(a){var b=[];if(!a)return b;a=a.split("\n");for(var c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){var e=a[c].match(d);if(!e)throw Error("Invalid patch string: "+a[c]);var f=new diff_match_patch.patch_obj;b.push(f);f.start1=parseInt(e[1],10);""===e[2]?(f.start1--,f.length1=1):"0"==e[2]?f.length1=0:(f.start1--,f.length1=parseInt(e[2],10));f.start2=parseInt(e[3],10);""===e[4]?(f.start2--,f.length2=1):"0"==e[4]?f.length2=0:(f.start2--,f.length2=
parseInt(e[4],10));for(c++;c<a.length;){e=a[c].charAt(0);try{var g=decodeURI(a[c].substring(1))}catch(h){throw Error("Illegal escape in patch_fromText: "+g);}if("-"==e)f.diffs.push([-1,g]);else if("+"==e)f.diffs.push([1,g]);else if(" "==e)f.diffs.push([0,g]);else if("@"==e)break;else if(""!==e)throw Error('Invalid patch mode "'+e+'" in: '+g);c++}}return b};diff_match_patch.patch_obj=function(){this.diffs=[];this.start2=this.start1=null;this.length2=this.length1=0};
diff_match_patch.patch_obj.prototype.toString=function(){var a,b;a=0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1;b=0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2;a=["@@ -"+a+" +"+b+" @@\n"];var c;for(b=0;b<this.diffs.length;b++){switch(this.diffs[b][0]){case 1:c="+";break;case -1:c="-";break;case 0:c=" "}a[b+1]=c+encodeURI(this.diffs[b][1])+"\n"}return a.join("").replace(/%20/g," ")};
this.diff_match_patch=diff_match_patch;this.DIFF_DELETE=-1;this.DIFF_INSERT=1;this.DIFF_EQUAL=0;})()

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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\mysite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map