webpackHotUpdate_N_E("pages/products/[handle]",{

/***/ "./pages/products/[handle].js":
/*!************************************!*\
  !*** ./pages/products/[handle].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/products/[handle].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n // Bootstrap\n\n\n\nvar ProductDetails = function ProductDetails(props) {\n  _s();\n\n  // const [size, setSize] = React.useState();\n  // const handleChange = (event) => {\n  //   setSize(event.target.value);\n  // };\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      show = _React$useState2[0],\n      setShow = _React$useState2[1];\n\n  var handle = props.params.handle;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_5__[\"ShopContext\"]),\n      checkout = _React$useContext.checkout,\n      fetchProductByHandle = _React$useContext.fetchProductByHandle,\n      addItemToCheckout = _React$useContext.addItemToCheckout,\n      product = _React$useContext.product; // const checkIfItemInCart = async () => {\n  //   console.log(checkout);\n  // };\n  // console.log(checkout.lineItems);\n  // const currentCheckoutItems = await checkout.lineItems;\n  // currentCheckoutItems.forEach((item) => {\n  //   if (item.id === id) {\n  //     console.log(\"in cart!\");\n  //     // this.setState({ itemInCart: true });\n  //   }\n  // });\n\n\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    fetchProductByHandle(handle);\n    return function () {};\n  }, [fetchProductByHandle, handle]); // useEffect(() => {\n  //   fetchCheckout(checkout.id);\n  //   // checkIfItemInCart();\n  //   return () => {};\n  // }, [fetchCheckout]);\n\n  if (!product.title) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Spinner\"], {\n    animation: \"border\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));\n  return __jsx(\"div\", {\n    id: \"product-details-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      justifyContent: \"flex-end\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Toast\"], {\n    style: {\n      position: \"fixed\"\n    },\n    show: show,\n    delay: 3000,\n    autohide: true,\n    onClose: function onClose() {\n      return setShow(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Toast\"].Body, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, \"You added \", product.title, \" to your cart!\"))), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", product.title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    md: 6,\n    lg: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    id: \"product-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Image\"], {\n    src: product.images[0].src,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    md: 6,\n    lg: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    id: \"product-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, product.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  }, product.availableForSale ? \"$\" + product.variants[0].price : \"Sold out\"), product.availableForSale ? __jsx(\"button\", {\n    className: \"add-to-cart-btn\",\n    onClick: function onClick() {\n      addItemToCheckout(product.variants[0].id, 1);\n      setShow(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }, \"Add to Cart\") : __jsx(\"button\", {\n    disabled: true,\n    className: \"add-to-cart-btn\",\n    onClick: function onClick() {\n      addItemToCheckout(product.variants[0].id, 1);\n      setShow(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, \"Add to Cart\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 15\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 15\n    }\n  }, product.description), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 15\n    }\n  }, \"Sizing\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 15\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 15\n    }\n  }, \"Shipping\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"))))));\n};\n\n_s(ProductDetails, \"sW2rT+Kucyijo95ygqCZsjdGbJI=\");\n\n_c = ProductDetails;\n\nProductDetails.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var params;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return context.query;\n\n          case 2:\n            params = _context.sent;\n            return _context.abrupt(\"return\", {\n              params: params\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2hhbmRsZV0uanM/MTI2MiJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlIiwicGFyYW1zIiwidXNlQ29udGV4dCIsIlNob3BDb250ZXh0IiwiY2hlY2tvdXQiLCJmZXRjaFByb2R1Y3RCeUhhbmRsZSIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicHJvZHVjdCIsInVzZUVmZmVjdCIsInRpdGxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJpbWFnZXMiLCJzcmMiLCJhdmFpbGFibGVGb3JTYWxlIiwidmFyaWFudHMiLCJwcmljZSIsImlkIiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDaEM7QUFFQTtBQUNBO0FBQ0E7QUFMZ0Msd0JBT1JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBUFE7QUFBQTtBQUFBLE1BT3pCQyxJQVB5QjtBQUFBLE1BT25CQyxPQVBtQjs7QUFTaEMsTUFBSUMsTUFBTSxHQUFHTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUQsTUFBMUI7O0FBVGdDLDBCQWU1QkosNENBQUssQ0FBQ00sVUFBTixDQUFpQkMsZ0VBQWpCLENBZjRCO0FBQUEsTUFXOUJDLFFBWDhCLHFCQVc5QkEsUUFYOEI7QUFBQSxNQVk5QkMsb0JBWjhCLHFCQVk5QkEsb0JBWjhCO0FBQUEsTUFhOUJDLGlCQWI4QixxQkFhOUJBLGlCQWI4QjtBQUFBLE1BYzlCQyxPQWQ4QixxQkFjOUJBLE9BZDhCLEVBaUJoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDROQW5ERixDQURGLENBTkYsQ0FERixDQXZCRixDQURGO0FBK0ZELENBL0lEOztHQUFNekIsYzs7S0FBQUEsYzs7QUFpSk5BLGNBQWMsQ0FBQzBCLGVBQWY7QUFBQSw4TEFBaUMsaUJBQWdCQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNWQSxPQUFPLENBQUNDLEtBREU7O0FBQUE7QUFDekJyQixrQkFEeUI7QUFBQSw2Q0FFeEI7QUFBRUEsb0JBQU0sRUFBRUE7QUFBVixhQUZ3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZVAsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baGFuZGxlXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFNob3BDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvc2hvcENvbnRleHRcIjtcblxuLy8gQm9vdHN0cmFwXG5pbXBvcnQgeyBJbWFnZSwgU3Bpbm5lciwgVG9hc3QsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9IChwcm9wcykgPT4ge1xuICAvLyBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAvLyAgIHNldFNpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgLy8gfTtcblxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IGhhbmRsZSA9IHByb3BzLnBhcmFtcy5oYW5kbGU7XG4gIGNvbnN0IHtcbiAgICBjaGVja291dCxcbiAgICBmZXRjaFByb2R1Y3RCeUhhbmRsZSxcbiAgICBhZGRJdGVtVG9DaGVja291dCxcbiAgICBwcm9kdWN0LFxuICB9ID0gUmVhY3QudXNlQ29udGV4dChTaG9wQ29udGV4dCk7XG5cbiAgLy8gY29uc3QgY2hlY2tJZkl0ZW1JbkNhcnQgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coY2hlY2tvdXQpO1xuICAvLyB9O1xuICAvLyBjb25zb2xlLmxvZyhjaGVja291dC5saW5lSXRlbXMpO1xuICAvLyBjb25zdCBjdXJyZW50Q2hlY2tvdXRJdGVtcyA9IGF3YWl0IGNoZWNrb3V0LmxpbmVJdGVtcztcbiAgLy8gY3VycmVudENoZWNrb3V0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAvLyAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJpbiBjYXJ0IVwiKTtcbiAgLy8gICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBpdGVtSW5DYXJ0OiB0cnVlIH0pO1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFByb2R1Y3RCeUhhbmRsZShoYW5kbGUpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW2ZldGNoUHJvZHVjdEJ5SGFuZGxlLCBoYW5kbGVdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoQ2hlY2tvdXQoY2hlY2tvdXQuaWQpO1xuICAvLyAgIC8vIGNoZWNrSWZJdGVtSW5DYXJ0KCk7XG4gIC8vICAgcmV0dXJuICgpID0+IHt9O1xuICAvLyB9LCBbZmV0Y2hDaGVja291dF0pO1xuXG4gIGlmICghcHJvZHVjdC50aXRsZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWRldGFpbHMtcGFnZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUb2FzdFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICBkZWxheT17MzAwMH1cbiAgICAgICAgICBhdXRvaGlkZVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3coZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPFRvYXN0LkJvZHk+WW91IGFkZGVkIHtwcm9kdWN0LnRpdGxlfSB0byB5b3VyIGNhcnQhPC9Ub2FzdC5Cb2R5PlxuICAgICAgICA8L1RvYXN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCB7cHJvZHVjdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPVwicHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0gbWQ9ezZ9IGxnPXs0fT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0gbWQ9ezZ9IGxnPXs0fT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGgxPntwcm9kdWN0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmF2YWlsYWJsZUZvclNhbGVcbiAgICAgICAgICAgICAgICAgID8gXCIkXCIgKyBwcm9kdWN0LnZhcmlhbnRzWzBdLnByaWNlXG4gICAgICAgICAgICAgICAgICA6IFwiU29sZCBvdXRcIn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICB7LyogTGVhdmUgaW4gaW4gY2FzZSBzaXplcyBuZWVkIHRvIGJlIGltcGxlbWVudGVkICovfVxuICAgICAgICAgICAgICB7LyogPHNlbGVjdCBpZD1cInNpemUtc2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIGtleT1cIm51bGxcIj5TZWxlY3QgU2l6ZTwvb3B0aW9uPlxuICAgICAgICAgICAge3NpemVzICYmXG4gICAgICAgICAgICAgIHNpemVzLm1hcCgoc2l6ZSkgPT4gPG9wdGlvbiB2YWx1ZT17c2l6ZX0ga2V5PXtzaXplfT48L29wdGlvbj4pfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAge3NpemUgPT09IHVuZGVmaW5lZCB8fCBzaXplID09PSBcIlNlbGVjdCBTaXplXCIgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC1idG5cIj5cbiAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgIHtwcm9kdWN0LmF2YWlsYWJsZUZvclNhbGUgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnQtYnRuXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXRlbVRvQ2hlY2tvdXQocHJvZHVjdC52YXJpYW50c1swXS5pZCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC10by1jYXJ0LWJ0blwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEl0ZW1Ub0NoZWNrb3V0KHByb2R1Y3QudmFyaWFudHNbMF0uaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxoND5TaXppbmc8L2g0PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBDb21wbGltZW50YXJ5IGdyb3VuZCBzaGlwcGluZyBvbiBhbGwgZG9tZXN0aWMgb3JkZXJzLiBSZXR1cm5zXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWQgd2l0aGluIDcgZGF5cyBvZiBkZWxpdmVyeSBvbiBmdWxsIHByaWNlIGl0ZW1zLiBBbGwgc2FsZVxuICAgICAgICAgICAgICAgIGl0ZW1zIGFuZCBtYXNrcyBhcmUgZmluYWwgc2FsZS4gSW50ZXJuYXRpb25hbCBzaGlwcGluZyBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICB0byBzZWxlY3QgY291bnRyaWVzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxoND5TaGlwcGluZzwvaDQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIENvbXBsaW1lbnRhcnkgZ3JvdW5kIHNoaXBwaW5nIG9uIGFsbCBkb21lc3RpYyBvcmRlcnMuIFJldHVybnNcbiAgICAgICAgICAgICAgICBhY2NlcHRlZCB3aXRoaW4gNyBkYXlzIG9mIGRlbGl2ZXJ5IG9uIGZ1bGwgcHJpY2UgaXRlbXMuIEFsbCBzYWxlXG4gICAgICAgICAgICAgICAgaXRlbXMgYW5kIG1hc2tzIGFyZSBmaW5hbCBzYWxlLiBJbnRlcm5hdGlvbmFsIHNoaXBwaW5nIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIHRvIHNlbGVjdCBjb3VudHJpZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvZHVjdERldGFpbHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1zID0gYXdhaXQgY29udGV4dC5xdWVyeTtcbiAgcmV0dXJuIHsgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[handle].js\n");

/***/ })

})