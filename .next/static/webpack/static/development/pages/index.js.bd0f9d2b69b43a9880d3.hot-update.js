webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/certh-auth.js":
/*!*******************************!*\
  !*** ./modules/certh-auth.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pkijs_pkijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkijs/pkijs */ "./pkijs/pkijs.js");
/* harmony import */ var _pkijs_pkijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pkijs_pkijs__WEBPACK_IMPORTED_MODULE_0__);
// keep it old fashion because we need to test an old implementation of pkijs
// var pki = require('../pkijs/pkijs');
 //pki

console.dir(_pkijs_pkijs__WEBPACK_IMPORTED_MODULE_0__["org"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FileInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FileInput */ "./components/FileInput.jsx");
/* harmony import */ var _modules_certh_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/certh-auth */ "./modules/certh-auth.js");
var _jsxFileName = "C:\\Users\\rberlochi\\Documents\\Tableau\\Projects\\next_read_cert\\pages\\index.js";


 // todo review this

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FileInput__WEBPACK_IMPORTED_MODULE_1__["FileInput"], {
    id: 'cert-input',
    manageFileInput: function manageFileInput() {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.bd0f9d2b69b43a9880d3.hot-update.js.map