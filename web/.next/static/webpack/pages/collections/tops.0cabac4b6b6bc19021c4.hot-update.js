webpackHotUpdate_N_E("pages/collections/tops",{

/***/ "./pages/collections/tops.js":
/*!***********************************!*\
  !*** ./pages/collections/tops.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/collections/tops.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // Sanity.io\n\n\n //Bootstrap\n\n\n\n\n\n\n\nvar Tops = function Tops(props) {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]),\n      fetchCollection = _React$useContext.fetchCollection,\n      collection = _React$useContext.collection;\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    var query = \"Tops\";\n    fetchCollection(query);\n    return function () {};\n  }, [fetchCollection]);\n  if (!collection.products) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    animation: \"border\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"OJOS | Tops\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"Tops\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    fluid: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, collection.products.map(function (product) {\n    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      xs: 12,\n      sm: 6,\n      md: 6,\n      lg: 4,\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"product-section\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: \"products\",\n      fluid: true,\n      src: product.images[0].src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }))), __jsx(\"div\", {\n      className: \"product-description\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      className: \"product-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }, product.title), __jsx(\"a\", {\n      href: \"/products/:id\",\n      className: \"product-price\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }, product.availableForSale ? \"$\" + product.variants[0].price : \"Sold out\")));\n  }))));\n};\n\n_s(Tops, \"F4g46WxPPxrrBMcvDAPQR8lvdn0=\");\n\n_c = Tops;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tops);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tops\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvdG9wcy5qcz83OTY5Il0sIm5hbWVzIjpbIlRvcHMiLCJwcm9wcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlNob3BDb250ZXh0IiwiZmV0Y2hDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInVzZUVmZmVjdCIsInF1ZXJ5IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJoYW5kbGUiLCJpbWFnZXMiLCJzcmMiLCJ0aXRsZSIsImF2YWlsYWJsZUZvclNhbGUiLCJ2YXJpYW50cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsMEJBQ2tCQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxnRUFBakIsQ0FEbEI7QUFBQSxNQUNkQyxlQURjLHFCQUNkQSxlQURjO0FBQUEsTUFDR0MsVUFESCxxQkFDR0EsVUFESDs7QUFHdEJKLDhDQUFLLENBQUNLLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJQyxLQUFLLEdBQUcsTUFBWjtBQUNBSCxtQkFBZSxDQUFDRyxLQUFELENBQWY7QUFDQSxXQUFPLFlBQU0sQ0FBRSxDQUFmO0FBQ0QsR0FKRCxFQUlHLENBQUNILGVBQUQsQ0FKSDtBQU1BLE1BQUksQ0FBQ0MsVUFBVSxDQUFDRyxRQUFoQixFQUNFLE9BQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixRQUFJLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixDQURGO0FBT0YsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNRSxNQUFDLGlFQUFEO0FBQVcsU0FBSyxFQUFDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsVUFBVSxDQUFDRyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsV0FDdkIsTUFBQywyREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLENBQWpCO0FBQW9CLFFBQUUsRUFBRSxDQUF4QjtBQUEyQixRQUFFLEVBQUUsQ0FBL0I7QUFBa0MsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLHNCQUFlRCxPQUFPLENBQUNFLE1BQXZCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkRBQUQ7QUFDRSxlQUFTLEVBQUMsVUFEWjtBQUVFLFdBQUssTUFGUDtBQUdFLFNBQUcsRUFBRUYsT0FBTyxDQUFDRyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsQ0FERixFQVVFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksc0JBQWVKLE9BQU8sQ0FBQ0UsTUFBdkIsQ0FETjtBQUVFLGVBQVMsRUFBQyxjQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0YsT0FBTyxDQUFDSyxLQUpYLENBREYsRUFPRTtBQUFHLFVBQUksRUFBQyxlQUFSO0FBQXdCLGVBQVMsRUFBQyxlQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dMLE9BQU8sQ0FBQ00sZ0JBQVIsR0FDRyxNQUFNTixPQUFPLENBQUNPLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDLEtBRDdCLEdBRUcsVUFITixDQVBGLENBVkYsQ0FEdUI7QUFBQSxHQUF4QixDQURILENBREYsQ0FORixDQURGO0FBdUNELENBeEREOztHQUFNbkIsSTs7S0FBQUEsSTtBQTBEU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xsZWN0aW9ucy90b3BzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgU2hvcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9zaG9wQ29udGV4dFwiO1xuLy8gU2FuaXR5LmlvXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uLy4uL2ltYWdlVXJsQnVpbGRlclwiO1xuXG4vL0Jvb3RzdHJhcFxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xuXG5jb25zdCBUb3BzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZmV0Y2hDb2xsZWN0aW9uLCBjb2xsZWN0aW9uIH0gPSBSZWFjdC51c2VDb250ZXh0KFNob3BDb250ZXh0KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBxdWVyeSA9IFwiVG9wc1wiO1xuICAgIGZldGNoQ29sbGVjdGlvbihxdWVyeSk7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbZmV0Y2hDb2xsZWN0aW9uXSk7XG5cbiAgaWYgKCFjb2xsZWN0aW9uLnByb2R1Y3RzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc3Bpbm5lclwiPlxuICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgIDwvU3Bpbm5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T0pPUyB8IFRvcHM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlRvcHM8L2gxPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD1cImxnXCI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge2NvbGxlY3Rpb24ucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IG1kPXs2fSBsZz17NH0ga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5oYW5kbGV9YH0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmhhbmRsZX1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0cy86aWRcIiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdC5hdmFpbGFibGVGb3JTYWxlXG4gICAgICAgICAgICAgICAgICAgID8gXCIkXCIgKyBwcm9kdWN0LnZhcmlhbnRzWzBdLnByaWNlXG4gICAgICAgICAgICAgICAgICAgIDogXCJTb2xkIG91dFwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/collections/tops.js\n");

/***/ })

})