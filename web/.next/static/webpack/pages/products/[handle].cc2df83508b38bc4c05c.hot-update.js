webpackHotUpdate_N_E("pages/products/[handle]",{

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shopify-buy */ \"./node_modules/shopify-buy/index.js\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar ShopContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext();\nvar client = shopify_buy__WEBPACK_IMPORTED_MODULE_10___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nvar ShopProvider = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ShopProvider, _React$Component);\n\n  var _super = _createSuper(ShopProvider);\n\n  function ShopProvider() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, ShopProvider);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      collection: {},\n      products: [],\n      product: {},\n      checkout: {},\n      checkoutTotal: 0\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"createCheckout\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var checkout;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return client.checkout.create();\n\n            case 2:\n              checkout = _context.sent;\n              localStorage.setItem(\"checkout\", checkout.id);\n\n              _this.setState({\n                checkout: checkout\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCheckout\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(checkoutId) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                client.checkout.fetch(checkoutId).then(function (checkout) {\n                  _this.setState({\n                    checkout: checkout\n                  });\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"addItemToCheckout\", /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(variantId, quantity) {\n        var lineItemsToAdd, checkout, checkoutTotal;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                lineItemsToAdd = [{\n                  variantId: variantId,\n                  quantity: parseInt(quantity, 10)\n                }];\n                _context3.next = 3;\n                return client.checkout.addLineItems(_this.state.checkout.id, lineItemsToAdd);\n\n              case 3:\n                checkout = _context3.sent;\n\n                _this.setState({\n                  checkout: checkout\n                });\n\n                checkoutTotal = parseInt(_this.state.checkoutTotal, 10) + 1;\n\n                _this.setState({\n                  checkoutTotal: checkoutTotal\n                });\n\n                localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"removeItemFromCheckout\", /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(checkoutId, lineItemsIds) {\n        var checkoutIdToModify, lineItemsIdToRemove;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return checkoutId;\n\n              case 2:\n                checkoutIdToModify = _context4.sent;\n                _context4.next = 5;\n                return lineItemsIds;\n\n              case 5:\n                lineItemsIdToRemove = _context4.sent;\n                // Remove an item from the checkout\n                client.checkout.removeLineItems(checkoutIdToModify, lineItemsIdToRemove).then(function (checkout) {\n                  // Do something with the updated checkout\n                  _this.setState({\n                    checkout: checkout\n                  });\n\n                  var checkoutTotal = parseInt(_this.state.checkoutTotal, 10) - 1;\n\n                  _this.setState({\n                    checkoutTotal: checkoutTotal\n                  });\n\n                  localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n                });\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x4, _x5) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchAllProducts\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n      var products;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return client.product.fetchAll();\n\n            case 2:\n              products = _context5.sent;\n\n              _this.setState({\n                products: products\n              });\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchProductByHandle\", /*#__PURE__*/function () {\n      var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(handle) {\n        var product;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return client.product.fetchByHandle(handle);\n\n              case 2:\n                product = _context6.sent;\n\n                _this.setState({\n                  product: product\n                });\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      return function (_x6) {\n        return _ref6.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCollection\", /*#__PURE__*/function () {\n      var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(query) {\n        var collections;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                _context7.next = 2;\n                return client.collection.fetchAllWithProducts();\n\n              case 2:\n                collections = _context7.sent;\n                collections.map(function (collection) {\n                  return collection.title === query ? _this.setState({\n                    collection: collection\n                  }) : null;\n                });\n\n              case 4:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7);\n      }));\n\n      return function (_x7) {\n        return _ref7.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ShopProvider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (localStorage.checkout) {\n        this.fetchCheckout(localStorage.checkout);\n      } else {\n        this.createCheckout();\n      }\n\n      if (localStorage.checkoutTotal) {\n        var checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n        this.setState({\n          checkoutTotal: checkoutTotal\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    // checkIfItemInCart = async (checkout, itemId) => {\n    //   const currentCheckout = checkout;\n    //   for (item in currentCheckout.lineItems) {\n    //     if (item.id === itemId) {\n    //       this.setState({ itemInCart: true });\n    //     }\n    //   }\n    // };\n    value: function render() {\n      return __jsx(ShopContext.Provider, {\n        value: _objectSpread(_objectSpread({}, this.state), {}, {\n          fetchAllProducts: this.fetchAllProducts,\n          fetchProductByHandle: this.fetchProductByHandle,\n          addItemToCheckout: this.addItemToCheckout,\n          removeItemFromCheckout: this.removeItemFromCheckout,\n          fetchCollection: this.fetchCollection\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 7\n        }\n      }, this.props.children);\n    }\n  }]);\n\n  return ShopProvider;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\nvar ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zaG9wQ29udGV4dC5qcz80ZjdmIl0sIm5hbWVzIjpbIlNob3BDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiY2xpZW50IiwiQ2xpZW50IiwiYnVpbGRDbGllbnQiLCJkb21haW4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTaG9wUHJvdmlkZXIiLCJjb2xsZWN0aW9uIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiY2hlY2tvdXQiLCJjaGVja291dFRvdGFsIiwiY3JlYXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwic2V0U3RhdGUiLCJjaGVja291dElkIiwiZmV0Y2giLCJ0aGVuIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRJZCIsInF1YW50aXR5IiwibGluZUl0ZW1zVG9BZGQiLCJwYXJzZUludCIsImFkZExpbmVJdGVtcyIsInN0YXRlIiwibGluZUl0ZW1zSWRzIiwiY2hlY2tvdXRJZFRvTW9kaWZ5IiwibGluZUl0ZW1zSWRUb1JlbW92ZSIsInJlbW92ZUxpbmVJdGVtcyIsImZldGNoQWxsIiwiaGFuZGxlIiwiZmV0Y2hCeUhhbmRsZSIsInF1ZXJ5IiwiZmV0Y2hBbGxXaXRoUHJvZHVjdHMiLCJjb2xsZWN0aW9ucyIsIm1hcCIsInRpdGxlIiwiZmV0Y2hDaGVja291dCIsImNyZWF0ZUNoZWNrb3V0IiwiZ2V0SXRlbSIsImZldGNoQWxsUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RCeUhhbmRsZSIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicmVtb3ZlSXRlbUZyb21DaGVja291dCIsImZldGNoQ29sbGVjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJTaG9wQ29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0Ms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QXJFRTtBQUNsQixVQUFJTSxZQUFZLENBQUNILFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUsrQixhQUFMLENBQW1CNUIsWUFBWSxDQUFDSCxRQUFoQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtnQyxjQUFMO0FBQ0Q7O0FBQ0QsVUFBSTdCLFlBQVksQ0FBQ0YsYUFBakIsRUFBZ0M7QUFDOUIsWUFBTUEsYUFBYSxHQUFHRSxZQUFZLENBQUM4QixPQUFiLENBQXFCLGVBQXJCLENBQXRCO0FBQ0EsYUFBSzNCLFFBQUwsQ0FBYztBQUFFTCx1QkFBYSxFQUFFQTtBQUFqQixTQUFkO0FBQ0Q7QUFDRjs7O0FBb0VEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBRVM7QUFDUCxhQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxhQUFLLGtDQUNBLEtBQUtpQixLQURMO0FBRUhnQiwwQkFBZ0IsRUFBRSxLQUFLQSxnQkFGcEI7QUFHSEMsOEJBQW9CLEVBQUUsS0FBS0Esb0JBSHhCO0FBSUhDLDJCQUFpQixFQUFFLEtBQUtBLGlCQUpyQjtBQUtIQyxnQ0FBc0IsRUFBRSxLQUFLQSxzQkFMMUI7QUFNSEMseUJBQWUsRUFBRSxLQUFLQTtBQU5uQixVQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FVRyxLQUFLQyxLQUFMLENBQVdDLFFBVmQsQ0FERjtBQWNEOzs7O0VBL0d3Qm5ELDRDQUFLLENBQUNvRCxTOztBQWtIakMsSUFBTUMsWUFBWSxHQUFHdEQsV0FBVyxDQUFDdUQsUUFBakM7QUFFQTtBQUVlL0MsMkVBQWYiLCJmaWxlIjoiLi9jb250ZXh0L3Nob3BDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tIFwic2hvcGlmeS1idXlcIjtcblxuY29uc3QgU2hvcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IGNsaWVudCA9IENsaWVudC5idWlsZENsaWVudCh7XG4gIGRvbWFpbjogXCJvam9zLXN0b3JlLm15c2hvcGlmeS5jb21cIixcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuOiBcImU1MmY4NDk4YzZiYjVkZWE5YzdjNjY3MDg2MGI3MjI0XCIsXG59KTtcblxuY2xhc3MgU2hvcFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY29sbGVjdGlvbjoge30sXG4gICAgcHJvZHVjdHM6IFtdLFxuICAgIHByb2R1Y3Q6IHt9LFxuICAgIGNoZWNrb3V0OiB7fSxcbiAgICBjaGVja291dFRvdGFsOiAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuY2hlY2tvdXQpIHtcbiAgICAgIHRoaXMuZmV0Y2hDaGVja291dChsb2NhbFN0b3JhZ2UuY2hlY2tvdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZUNoZWNrb3V0KCk7XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuY2hlY2tvdXRUb3RhbCkge1xuICAgICAgY29uc3QgY2hlY2tvdXRUb3RhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRvdGFsOiBjaGVja291dFRvdGFsIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNoZWNrb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmNyZWF0ZSgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRcIiwgY2hlY2tvdXQuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gIH07XG5cbiAgZmV0Y2hDaGVja291dCA9IGFzeW5jIChjaGVja291dElkKSA9PiB7XG4gICAgY2xpZW50LmNoZWNrb3V0XG4gICAgICAuZmV0Y2goY2hlY2tvdXRJZClcbiAgICAgIC50aGVuKChjaGVja291dCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICBhZGRJdGVtVG9DaGVja291dCA9IGFzeW5jICh2YXJpYW50SWQsIHF1YW50aXR5KSA9PiB7XG4gICAgY29uc3QgbGluZUl0ZW1zVG9BZGQgPSBbXG4gICAgICB7XG4gICAgICAgIHZhcmlhbnRJZCxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHF1YW50aXR5LCAxMCksXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgY2hlY2tvdXQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuYWRkTGluZUl0ZW1zKFxuICAgICAgdGhpcy5zdGF0ZS5jaGVja291dC5pZCxcbiAgICAgIGxpbmVJdGVtc1RvQWRkXG4gICAgKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICAgIGNvbnN0IGNoZWNrb3V0VG90YWwgPSBwYXJzZUludCh0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwsIDEwKSArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFRvdGFsXCIsIHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCk7XG4gIH07XG5cbiAgcmVtb3ZlSXRlbUZyb21DaGVja291dCA9IGFzeW5jIChjaGVja291dElkLCBsaW5lSXRlbXNJZHMpID0+IHtcbiAgICBjb25zdCBjaGVja291dElkVG9Nb2RpZnkgPSBhd2FpdCBjaGVja291dElkOyAvLyBJRCBvZiBhbiBleGlzdGluZyBjaGVja291dFxuICAgIGNvbnN0IGxpbmVJdGVtc0lkVG9SZW1vdmUgPSBhd2FpdCBsaW5lSXRlbXNJZHM7XG4gICAgLy8gUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgY2hlY2tvdXRcbiAgICBjbGllbnQuY2hlY2tvdXRcbiAgICAgIC5yZW1vdmVMaW5lSXRlbXMoY2hlY2tvdXRJZFRvTW9kaWZ5LCBsaW5lSXRlbXNJZFRvUmVtb3ZlKVxuICAgICAgLnRoZW4oKGNoZWNrb3V0KSA9PiB7XG4gICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSB1cGRhdGVkIGNoZWNrb3V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgICAgIGNvbnN0IGNoZWNrb3V0VG90YWwgPSBwYXJzZUludCh0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwsIDEwKSAtIDE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRvdGFsOiBjaGVja291dFRvdGFsIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0VG90YWxcIiwgdGhpcy5zdGF0ZS5jaGVja291dFRvdGFsKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGZldGNoQWxsUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQucHJvZHVjdC5mZXRjaEFsbCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0czogcHJvZHVjdHMgfSk7XG4gIH07XG5cbiAgZmV0Y2hQcm9kdWN0QnlIYW5kbGUgPSBhc3luYyAoaGFuZGxlKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNsaWVudC5wcm9kdWN0LmZldGNoQnlIYW5kbGUoaGFuZGxlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogcHJvZHVjdCB9KTtcbiAgfTtcblxuICBmZXRjaENvbGxlY3Rpb24gPSBhc3luYyAocXVlcnkpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IGF3YWl0IGNsaWVudC5jb2xsZWN0aW9uLmZldGNoQWxsV2l0aFByb2R1Y3RzKCk7XG4gICAgY29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PlxuICAgICAgY29sbGVjdGlvbi50aXRsZSA9PT0gcXVlcnlcbiAgICAgICAgPyB0aGlzLnNldFN0YXRlKHsgY29sbGVjdGlvbjogY29sbGVjdGlvbiB9KVxuICAgICAgICA6IG51bGxcbiAgICApO1xuICB9O1xuXG4gIC8vIGNoZWNrSWZJdGVtSW5DYXJ0ID0gYXN5bmMgKGNoZWNrb3V0LCBpdGVtSWQpID0+IHtcbiAgLy8gICBjb25zdCBjdXJyZW50Q2hlY2tvdXQgPSBjaGVja291dDtcbiAgLy8gICBmb3IgKGl0ZW0gaW4gY3VycmVudENoZWNrb3V0LmxpbmVJdGVtcykge1xuICAvLyAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW1JZCkge1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbUluQ2FydDogdHJ1ZSB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2hvcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGZldGNoQWxsUHJvZHVjdHM6IHRoaXMuZmV0Y2hBbGxQcm9kdWN0cyxcbiAgICAgICAgICBmZXRjaFByb2R1Y3RCeUhhbmRsZTogdGhpcy5mZXRjaFByb2R1Y3RCeUhhbmRsZSxcbiAgICAgICAgICBhZGRJdGVtVG9DaGVja291dDogdGhpcy5hZGRJdGVtVG9DaGVja291dCxcbiAgICAgICAgICByZW1vdmVJdGVtRnJvbUNoZWNrb3V0OiB0aGlzLnJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQsXG4gICAgICAgICAgZmV0Y2hDb2xsZWN0aW9uOiB0aGlzLmZldGNoQ29sbGVjdGlvbixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1Nob3BDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2hvcENvbnN1bWVyID0gU2hvcENvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCB7IFNob3BDb25zdW1lciwgU2hvcENvbnRleHQgfTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ })

})