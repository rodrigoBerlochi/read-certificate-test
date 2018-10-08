webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FileInput.jsx":
/*!**********************************!*\
  !*** ./components/FileInput.jsx ***!
  \**********************************/
/*! exports provided: FileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return FileInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.jsx");
var _jsxFileName = "C:\\Users\\rberlochi\\Documents\\Tableau\\Projects\\next_read_cert\\components\\FileInput.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * 
 */

var FileInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FileInput, _React$Component);

  function FileInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FileInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FileInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isFileAPISupported: true,
      progress: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reader", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFileInputChange", function (e) {
      var file = e.target.files[0];

      _this.reader.onload = function (e) {
        var result = e.currentTarget.result;

        _this.props.getResult(result);
      };

      _this.reader.onprogress = function (e) {
        var pgs = Math.round(e.loaded / e.total * 100);

        _this.setState({
          progress: pgs
        });
      };

      _this.reader[_this.props.readingType](file);
    });

    return _this;
  }

  _createClass(FileInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
        this.setState({
          isFileAPISupported: false
        });
        return;
      }

      this.reader = new FileReader();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isFileAPISupported = _this$state.isFileAPISupported,
          progress = _this$state.progress;
      var messageNoBrowserSupport = this.props.messageNoBrowserSupport;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, isFileAPISupported ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        id: this.props.id,
        type: 'file',
        onInputChange: this.onFileInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }) : messageNoBrowserSupport, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("progress", {
        max: 100,
        value: progress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }]);

  return FileInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(FileInput, "EnumReadingsType", {
  text: 'readAsText',
  binaryString: 'readAsBinaryString',
  arrayBuffer: 'readAsArrayBuffer',
  dataURL: 'readAsDataURL'
});

var readings = Object.values(FileInput.EnumReadingsType);
FileInput.propsTypes = {
  messageNoBrowserSupport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  getResult: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  readingType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(readings).isRequired
};
FileInput.defaultProps = {
  messageNoBrowserSupport: 'Your browser has no support for Uploading Files. Use another browser.',
  getResult: function getResult(val) {
    console.log(val);
  }
};

/***/ })

})
//# sourceMappingURL=index.js.328bb0330debe6ca680f.hot-update.js.map