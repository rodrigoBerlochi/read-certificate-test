webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Input.jsx":
/*!******************************!*\
  !*** ./components/Input.jsx ***!
  \******************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rberlochi\\Documents\\Tableau\\Projects\\next_read_cert\\components\\Input.jsx";


var Input = function Input(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: props.type,
    id: props.id,
    name: props.name || props.id,
    onChange: props.onInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};
Input.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Input.defaultProps = {
  onInputChange: function onInputChange(e) {
    console.dir(e);
  }
};

/***/ })

})
//# sourceMappingURL=index.js.c113f4d025dc32465492.hot-update.js.map