webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/FileReader.js":
/*!*******************************!*\
  !*** ./modules/FileReader.js ***!
  \*******************************/
/*! exports provided: handleFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleFile", function() { return handleFile; });
var handleFile = function handleFile(files) {};

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
/* harmony import */ var _modules_FileReader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/FileReader */ "./modules/FileReader.js");
/* harmony import */ var _modules_certh_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/certh-auth */ "./modules/certh-auth.js");
var _jsxFileName = "C:\\Users\\rberlochi\\Documents\\Tableau\\Projects\\next_read_cert\\pages\\index.js";



 // todo review this

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FileInput__WEBPACK_IMPORTED_MODULE_1__["FileInput"], {
    id: 'cert-input',
    manageFileInput: _modules_FileReader__WEBPACK_IMPORTED_MODULE_2__["handleFile"],
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
//# sourceMappingURL=index.js.b0f77d818377be0fc4cc.hot-update.js.map