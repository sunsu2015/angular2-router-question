webpackJsonp([2,6],{

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module3_component_ts__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module4_module4_component_ts__ = __webpack_require__(660);
/* harmony export (binding) */ __webpack_require__.d(exports, "Module3", function() { return Module3; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Route = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__module3_component_ts__["a" /* Module3Component */] }
];
var Module3 = (function () {
    function Module3() {
    }
    Module3 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(Route),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__module3_component_ts__["a" /* Module3Component */], __WEBPACK_IMPORTED_MODULE_3__module4_module4_component_ts__["a" /* Module4Component */]]
        }), 
        __metadata('design:paramtypes', [])
    ], Module3);
    return Module3;
}());


/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Module3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Module3Component = (function () {
    function Module3Component() {
    }
    Module3Component.prototype.ngOnInit = function () {
    };
    Module3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: 'app-module3',
            template: __webpack_require__(671),
        }), 
        __metadata('design:paramtypes', [])
    ], Module3Component);
    return Module3Component;
}());


/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Module4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Module4Component = (function () {
    function Module4Component() {
    }
    Module4Component.prototype.ngOnInit = function () {
    };
    Module4Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: 'app-module4',
            template: __webpack_require__(672),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], Module4Component);
    return Module4Component;
}());


/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<p>\r\n  module3 works!\r\n</p>\r\n<app-module4></app-module4>\r\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<p>\r\n  module4 works!\r\n</p>\r\n"

/***/ }

});
//# sourceMappingURL=2.map