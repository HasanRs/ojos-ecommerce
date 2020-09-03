webpackHotUpdate_N_E("pages/collections/accessories",{

/***/ "./components/collection.js":
/*!**********************************!*\
  !*** ./components/collection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/collection.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n //Bootstrap\n\n\n\n\n\n\n\nvar Collection = function Collection() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]),\n      collection = _React$useContext.collection;\n\n  if (!collection.products) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"border\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));else if (!collection.products[0]) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, collection.title), __jsx(\"div\", {\n    className: \"no-products-msg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"No products right now, check back later!\")));\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", collection.title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, collection.title), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    fluid: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, collection.products.map(function (product) {\n    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      xs: 12,\n      sm: 6,\n      md: 6,\n      lg: 4,\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"product-section\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: \"products\",\n      fluid: true,\n      src: product.images[0].src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }))), __jsx(\"div\", {\n      className: \"product-description\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      className: \"product-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }, product.title), __jsx(\"a\", {\n      href: \"/products/:id\",\n      className: \"product-price\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }, product.availableForSale ? \"$\" + product.variants[0].price : \"Sold out\")));\n  }))));\n};\n\n_s(Collection, \"Rei0DcJAe1zaaK/Xdsp96qiLUec=\");\n\n_c = Collection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collection);\n\nvar _c;\n\n$RefreshReg$(_c, \"Collection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsZWN0aW9uLmpzPzU4MGEiXSwibmFtZXMiOlsiQ29sbGVjdGlvbiIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlNob3BDb250ZXh0IiwiY29sbGVjdGlvbiIsInByb2R1Y3RzIiwidGl0bGUiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJoYW5kbGUiLCJpbWFnZXMiLCJzcmMiLCJhdmFpbGFibGVGb3JTYWxlIiwidmFyaWFudHMiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLDBCQUNBQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxnRUFBakIsQ0FEQTtBQUFBLE1BQ2ZDLFVBRGUscUJBQ2ZBLFVBRGU7O0FBR3ZCLE1BQUksQ0FBQ0EsVUFBVSxDQUFDQyxRQUFoQixFQUNFLE9BQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixRQUFJLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixDQURGLENBREYsS0FRSyxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQixDQUFwQixDQUFMLEVBQ0gsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCRCxVQUFVLENBQUNFLEtBQXZDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFERixDQUZGLENBREY7QUFRRixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFlRixVQUFVLENBQUNFLEtBQTFCLENBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkYsVUFBVSxDQUFDRSxLQUF2QyxDQUxGLEVBTUUsTUFBQyxpRUFBRDtBQUFXLFNBQUssRUFBQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQkUsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLFdBQ3ZCLE1BQUMsMkRBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUUsQ0FBeEI7QUFBMkIsUUFBRSxFQUFFLENBQS9CO0FBQWtDLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxzQkFBZUQsT0FBTyxDQUFDRSxNQUF2QixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQ0UsZUFBUyxFQUFDLFVBRFo7QUFFRSxXQUFLLE1BRlA7QUFHRSxTQUFHLEVBQUVGLE9BQU8sQ0FBQ0csTUFBUixDQUFlLENBQWYsRUFBa0JDLEdBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREYsRUFVRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLHNCQUFlSixPQUFPLENBQUNFLE1BQXZCLENBRE47QUFFRSxlQUFTLEVBQUMsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdGLE9BQU8sQ0FBQ0YsS0FKWCxDQURGLEVBT0U7QUFBRyxVQUFJLEVBQUMsZUFBUjtBQUF3QixlQUFTLEVBQUMsZUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRSxPQUFPLENBQUNLLGdCQUFSLEdBQ0csTUFBTUwsT0FBTyxDQUFDTSxRQUFSLENBQWlCLENBQWpCLEVBQW9CQyxLQUQ3QixHQUVHLFVBSE4sQ0FQRixDQVZGLENBRHVCO0FBQUEsR0FBeEIsQ0FESCxDQURGLENBTkYsQ0FERjtBQXVDRCxDQTNERDs7R0FBTWYsVTs7S0FBQUEsVTtBQTZEU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbGxlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBTaG9wQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3Nob3BDb250ZXh0XCI7XG5cbi8vQm9vdHN0cmFwXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XG5cbmNvbnN0IENvbGxlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiB9ID0gUmVhY3QudXNlQ29udGV4dChTaG9wQ29udGV4dCk7XG5cbiAgaWYgKCFjb2xsZWN0aW9uLnByb2R1Y3RzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc3Bpbm5lclwiPlxuICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgIDwvU3Bpbm5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIGVsc2UgaWYgKCFjb2xsZWN0aW9uLnByb2R1Y3RzWzBdKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPntjb2xsZWN0aW9uLnRpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcHJvZHVjdHMtbXNnXCI+XG4gICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgcmlnaHQgbm93LCBjaGVjayBiYWNrIGxhdGVyITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCB7Y29sbGVjdGlvbi50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPntjb2xsZWN0aW9uLnRpdGxlfTwvaDE+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPVwibGdcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7Y29sbGVjdGlvbi5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0gbWQ9ezZ9IGxnPXs0fSBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmhhbmRsZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaGFuZGxlfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3RzLzppZFwiIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmF2YWlsYWJsZUZvclNhbGVcbiAgICAgICAgICAgICAgICAgICAgPyBcIiRcIiArIHByb2R1Y3QudmFyaWFudHNbMF0ucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgOiBcIlNvbGQgb3V0XCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/collection.js\n");

/***/ })

})