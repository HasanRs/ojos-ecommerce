module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/collections/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shopify-buy */ \"shopify-buy\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst ShopContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nconst client = shopify_buy__WEBPACK_IMPORTED_MODULE_1___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nclass ShopProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      collection: {},\n      products: [],\n      product: {},\n      checkout: {},\n      checkoutTotal: 0\n    });\n\n    _defineProperty(this, \"createCheckout\", async () => {\n      const checkout = await client.checkout.create();\n      localStorage.setItem(\"checkout\", checkout.id);\n      this.setState({\n        checkout: checkout\n      });\n    });\n\n    _defineProperty(this, \"fetchCheckout\", async checkoutId => {\n      client.checkout.fetch(checkoutId).then(checkout => {\n        this.setState({\n          checkout: checkout\n        });\n      }).catch(err => console.log(err));\n    });\n\n    _defineProperty(this, \"addItemToCheckout\", async (variantId, quantity) => {\n      const lineItemsToAdd = [{\n        variantId,\n        quantity: parseInt(quantity, 10)\n      }];\n      const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);\n      this.setState({\n        checkout: checkout\n      });\n      const checkoutTotal = parseInt(this.state.checkoutTotal, 10) + 1;\n      this.setState({\n        checkoutTotal: checkoutTotal\n      });\n      localStorage.setItem(\"checkoutTotal\", this.state.checkoutTotal);\n    });\n\n    _defineProperty(this, \"removeItemFromCheckout\", async (checkoutId, lineItemsIds) => {\n      const checkoutIdToModify = await checkoutId; // ID of an existing checkout\n\n      const lineItemsIdToRemove = await lineItemsIds; // Remove an item from the checkout\n\n      client.checkout.removeLineItems(checkoutIdToModify, lineItemsIdToRemove).then(checkout => {\n        // Do something with the updated checkout\n        this.setState({\n          checkout: checkout\n        });\n        const checkoutTotal = parseInt(this.state.checkoutTotal, 10) - 1;\n        this.setState({\n          checkoutTotal: checkoutTotal\n        });\n        localStorage.setItem(\"checkoutTotal\", this.state.checkoutTotal);\n      });\n    });\n\n    _defineProperty(this, \"fetchAllProducts\", async () => {\n      const products = await client.product.fetchAll();\n      this.setState({\n        products: products\n      });\n    });\n\n    _defineProperty(this, \"fetchProductByHandle\", async handle => {\n      const product = await client.product.fetchByHandle(handle);\n      this.setState({\n        product: product\n      });\n    });\n\n    _defineProperty(this, \"fetchCollection\", async query => {\n      const collections = await client.collection.fetchAllWithProducts();\n      collections.map(collection => collection.title === query ? this.setState({\n        collection: collection\n      }) : null);\n    });\n  }\n\n  componentDidMount() {\n    if (localStorage.checkout) {\n      this.fetchCheckout(localStorage.checkout);\n    } else {\n      this.createCheckout();\n    }\n\n    if (localStorage.checkoutTotal) {\n      const checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n      this.setState({\n        checkoutTotal: checkoutTotal\n      });\n    }\n  }\n\n  // checkIfItemInCart = async (checkout, itemId) => {\n  //   const currentCheckout = checkout;\n  //   for (item in currentCheckout.lineItems) {\n  //     if (item.id === itemId) {\n  //       this.setState({ itemInCart: true });\n  //     }\n  //   }\n  // };\n  render() {\n    return __jsx(ShopContext.Provider, {\n      value: _objectSpread(_objectSpread({}, this.state), {}, {\n        fetchAllProducts: this.fetchAllProducts,\n        fetchProductByHandle: this.fetchProductByHandle,\n        addItemToCheckout: this.addItemToCheckout,\n        removeItemFromCheckout: this.removeItemFromCheckout,\n        fetchCollection: this.fetchCollection\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 7\n      }\n    }, this.props.children);\n  }\n\n}\n\nconst ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Nob3BDb250ZXh0LmpzPzRmN2YiXSwibmFtZXMiOlsiU2hvcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJjbGllbnQiLCJDbGllbnQiLCJidWlsZENsaWVudCIsImRvbWFpbiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNob3BQcm92aWRlciIsIkNvbXBvbmVudCIsImNvbGxlY3Rpb24iLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJjaGVja291dCIsImNoZWNrb3V0VG90YWwiLCJjcmVhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJzZXRTdGF0ZSIsImNoZWNrb3V0SWQiLCJmZXRjaCIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50SWQiLCJxdWFudGl0eSIsImxpbmVJdGVtc1RvQWRkIiwicGFyc2VJbnQiLCJhZGRMaW5lSXRlbXMiLCJzdGF0ZSIsImxpbmVJdGVtc0lkcyIsImNoZWNrb3V0SWRUb01vZGlmeSIsImxpbmVJdGVtc0lkVG9SZW1vdmUiLCJyZW1vdmVMaW5lSXRlbXMiLCJmZXRjaEFsbCIsImhhbmRsZSIsImZldGNoQnlIYW5kbGUiLCJxdWVyeSIsImNvbGxlY3Rpb25zIiwiZmV0Y2hBbGxXaXRoUHJvZHVjdHMiLCJtYXAiLCJ0aXRsZSIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hDaGVja291dCIsImNyZWF0ZUNoZWNrb3V0IiwiZ2V0SXRlbSIsInJlbmRlciIsImZldGNoQWxsUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RCeUhhbmRsZSIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicmVtb3ZlSXRlbUZyb21DaGVja291dCIsImZldGNoQ29sbGVjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJTaG9wQ29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Ms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UCxXQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxXQUFLLGtDQUNBLEtBQUtqQixLQURMO0FBRUhrQix3QkFBZ0IsRUFBRSxLQUFLQSxnQkFGcEI7QUFHSEMsNEJBQW9CLEVBQUUsS0FBS0Esb0JBSHhCO0FBSUhDLHlCQUFpQixFQUFFLEtBQUtBLGlCQUpyQjtBQUtIQyw4QkFBc0IsRUFBRSxLQUFLQSxzQkFMMUI7QUFNSEMsdUJBQWUsRUFBRSxLQUFLQTtBQU5uQixRQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVRyxLQUFLQyxLQUFMLENBQVdDLFFBVmQsQ0FERjtBQWNEOztBQS9Hd0M7O0FBa0gzQyxNQUFNQyxZQUFZLEdBQUd6RCxXQUFXLENBQUMwRCxRQUFqQztBQUVBO0FBRWVsRCwyRUFBZiIsImZpbGUiOiIuL2NvbnRleHQvc2hvcENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gXCJzaG9waWZ5LWJ1eVwiO1xuXG5jb25zdCBTaG9wQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgY2xpZW50ID0gQ2xpZW50LmJ1aWxkQ2xpZW50KHtcbiAgZG9tYWluOiBcIm9qb3Mtc3RvcmUubXlzaG9waWZ5LmNvbVwiLFxuICBzdG9yZWZyb250QWNjZXNzVG9rZW46IFwiZTUyZjg0OThjNmJiNWRlYTljN2M2NjcwODYwYjcyMjRcIixcbn0pO1xuXG5jbGFzcyBTaG9wUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb2xsZWN0aW9uOiB7fSxcbiAgICBwcm9kdWN0czogW10sXG4gICAgcHJvZHVjdDoge30sXG4gICAgY2hlY2tvdXQ6IHt9LFxuICAgIGNoZWNrb3V0VG90YWw6IDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jaGVja291dCkge1xuICAgICAgdGhpcy5mZXRjaENoZWNrb3V0KGxvY2FsU3RvcmFnZS5jaGVja291dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlQ2hlY2tvdXQoKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jaGVja291dFRvdGFsKSB7XG4gICAgICBjb25zdCBjaGVja291dFRvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja291dFRvdGFsXCIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ2hlY2tvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tvdXQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuY3JlYXRlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFwiLCBjaGVja291dC5pZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgfTtcblxuICBmZXRjaENoZWNrb3V0ID0gYXN5bmMgKGNoZWNrb3V0SWQpID0+IHtcbiAgICBjbGllbnQuY2hlY2tvdXRcbiAgICAgIC5mZXRjaChjaGVja291dElkKVxuICAgICAgLnRoZW4oKGNoZWNrb3V0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIGFkZEl0ZW1Ub0NoZWNrb3V0ID0gYXN5bmMgKHZhcmlhbnRJZCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCBsaW5lSXRlbXNUb0FkZCA9IFtcbiAgICAgIHtcbiAgICAgICAgdmFyaWFudElkLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocXVhbnRpdHksIDEwKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5hZGRMaW5lSXRlbXMoXG4gICAgICB0aGlzLnN0YXRlLmNoZWNrb3V0LmlkLFxuICAgICAgbGluZUl0ZW1zVG9BZGRcbiAgICApO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgY29uc3QgY2hlY2tvdXRUb3RhbCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCwgMTApICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0VG90YWxcIiwgdGhpcy5zdGF0ZS5jaGVja291dFRvdGFsKTtcbiAgfTtcblxuICByZW1vdmVJdGVtRnJvbUNoZWNrb3V0ID0gYXN5bmMgKGNoZWNrb3V0SWQsIGxpbmVJdGVtc0lkcykgPT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0SWRUb01vZGlmeSA9IGF3YWl0IGNoZWNrb3V0SWQ7IC8vIElEIG9mIGFuIGV4aXN0aW5nIGNoZWNrb3V0XG4gICAgY29uc3QgbGluZUl0ZW1zSWRUb1JlbW92ZSA9IGF3YWl0IGxpbmVJdGVtc0lkcztcbiAgICAvLyBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBjaGVja291dFxuICAgIGNsaWVudC5jaGVja291dFxuICAgICAgLnJlbW92ZUxpbmVJdGVtcyhjaGVja291dElkVG9Nb2RpZnksIGxpbmVJdGVtc0lkVG9SZW1vdmUpXG4gICAgICAudGhlbigoY2hlY2tvdXQpID0+IHtcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHVwZGF0ZWQgY2hlY2tvdXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICAgICAgY29uc3QgY2hlY2tvdXRUb3RhbCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCwgMTApIC0gMTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiLCB0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZmV0Y2hBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5wcm9kdWN0LmZldGNoQWxsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cyB9KTtcbiAgfTtcblxuICBmZXRjaFByb2R1Y3RCeUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2hCeUhhbmRsZShoYW5kbGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBwcm9kdWN0IH0pO1xuICB9O1xuXG4gIGZldGNoQ29sbGVjdGlvbiA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgY2xpZW50LmNvbGxlY3Rpb24uZmV0Y2hBbGxXaXRoUHJvZHVjdHMoKTtcbiAgICBjb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+XG4gICAgICBjb2xsZWN0aW9uLnRpdGxlID09PSBxdWVyeVxuICAgICAgICA/IHRoaXMuc2V0U3RhdGUoeyBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uIH0pXG4gICAgICAgIDogbnVsbFxuICAgICk7XG4gIH07XG5cbiAgLy8gY2hlY2tJZkl0ZW1JbkNhcnQgPSBhc3luYyAoY2hlY2tvdXQsIGl0ZW1JZCkgPT4ge1xuICAvLyAgIGNvbnN0IGN1cnJlbnRDaGVja291dCA9IGNoZWNrb3V0O1xuICAvLyAgIGZvciAoaXRlbSBpbiBjdXJyZW50Q2hlY2tvdXQubGluZUl0ZW1zKSB7XG4gIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gaXRlbUlkKSB7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtSW5DYXJ0OiB0cnVlIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgZmV0Y2hBbGxQcm9kdWN0czogdGhpcy5mZXRjaEFsbFByb2R1Y3RzLFxuICAgICAgICAgIGZldGNoUHJvZHVjdEJ5SGFuZGxlOiB0aGlzLmZldGNoUHJvZHVjdEJ5SGFuZGxlLFxuICAgICAgICAgIGFkZEl0ZW1Ub0NoZWNrb3V0OiB0aGlzLmFkZEl0ZW1Ub0NoZWNrb3V0LFxuICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQ6IHRoaXMucmVtb3ZlSXRlbUZyb21DaGVja291dCxcbiAgICAgICAgICBmZXRjaENvbGxlY3Rpb246IHRoaXMuZmV0Y2hDb2xsZWN0aW9uLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvU2hvcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTaG9wQ29uc3VtZXIgPSBTaG9wQ29udGV4dC5Db25zdW1lcjtcblxuZXhwb3J0IHsgU2hvcENvbnN1bWVyLCBTaG9wQ29udGV4dCB9O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wUHJvdmlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ }),

/***/ "./pages/collections/all.js":
/*!**********************************!*\
  !*** ./pages/collections/all.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Image */ \"react-bootstrap/Image\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"react-bootstrap/Spinner\");\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/collections/all.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n //Bootstrap\n\n\n\n\n\n\n\nconst AllProducts = props => {\n  const {\n    fetchAllProducts,\n    products\n  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchAllProducts();\n    return () => {};\n  }, [fetchAllProducts]);\n  if (!products) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    animation: \"border\",\n    role: \"status\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"OJOS | All\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"All\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    fluid: \"lg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, products ? products.map(product => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    sm: 6,\n    md: 6,\n    lg: 4,\n    key: product.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"product-section\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: `/products/${product.handle}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 19\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: \"products\",\n    fluid: true,\n    src: product.images[0].src,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"product-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: `/products/${product.handle}`,\n    className: \"product-name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }, product.title), __jsx(\"a\", {\n    href: \"/products/:id\",\n    className: \"product-price\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 19\n    }\n  }, product.availableForSale ? \"$\" + product.variants[0].price : \"Sold out\")))) : __jsx(\"div\", {\n    className: \"no-products-msg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"No products right now, check back later!\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0aW9ucy9hbGwuanM/Mjk1NyJdLCJuYW1lcyI6WyJBbGxQcm9kdWN0cyIsInByb3BzIiwiZmV0Y2hBbGxQcm9kdWN0cyIsInByb2R1Y3RzIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJoYW5kbGUiLCJpbWFnZXMiLCJzcmMiLCJ0aXRsZSIsImF2YWlsYWJsZUZvclNhbGUiLCJ2YXJpYW50cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDN0IsUUFBTTtBQUFFQyxvQkFBRjtBQUFvQkM7QUFBcEIsTUFBaUNDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLGdFQUFqQixDQUF2QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEwsb0JBQWdCO0FBQ2hCLFdBQU8sTUFBTSxDQUFFLENBQWY7QUFDRCxHQUhRLEVBR04sQ0FBQ0EsZ0JBQUQsQ0FITSxDQUFUO0FBS0EsTUFBSSxDQUFDQyxRQUFMLEVBQ0UsT0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFFBQUksRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBREY7QUFPRixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRixFQU1FLE1BQUMsZ0VBQUQ7QUFBVyxTQUFLLEVBQUMsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQUFRLEdBQ1BBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFjQyxPQUFELElBQ1gsTUFBQywwREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBRSxDQUF4QjtBQUEyQixNQUFFLEVBQUUsQ0FBL0I7QUFBa0MsT0FBRyxFQUFFQSxPQUFPLENBQUNDLEVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUcsYUFBWUQsT0FBTyxDQUFDRSxNQUFPLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFDLFVBRFo7QUFFRSxTQUFLLE1BRlA7QUFHRSxPQUFHLEVBQUVGLE9BQU8sQ0FBQ0csTUFBUixDQUFlLENBQWYsRUFBa0JDLEdBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUcsYUFBWUosT0FBTyxDQUFDRSxNQUFPLEVBRHBDO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHRixPQUFPLENBQUNLLEtBSlgsQ0FERixFQU9FO0FBQUcsUUFBSSxFQUFDLGVBQVI7QUFBd0IsYUFBUyxFQUFDLGVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsT0FBTyxDQUFDTSxnQkFBUixHQUNHLE1BQU1OLE9BQU8sQ0FBQ08sUUFBUixDQUFpQixDQUFqQixFQUFvQkMsS0FEN0IsR0FFRyxVQUhOLENBUEYsQ0FWRixDQURGLENBRE8sR0E0QlA7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBREYsQ0E3QkosQ0FERixDQU5GLENBREY7QUE2Q0QsQ0E3REQ7O0FBK0RlakIsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xsZWN0aW9ucy9hbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2hvcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9zaG9wQ29udGV4dFwiO1xuXG4vL0Jvb3RzdHJhcFxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xuXG5jb25zdCBBbGxQcm9kdWN0cyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGZldGNoQWxsUHJvZHVjdHMsIHByb2R1Y3RzIH0gPSBSZWFjdC51c2VDb250ZXh0KFNob3BDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQWxsUHJvZHVjdHMoKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtmZXRjaEFsbFByb2R1Y3RzXSk7XG5cbiAgaWYgKCFwcm9kdWN0cylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCBBbGw8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkFsbDwvaDE+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPVwibGdcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7cHJvZHVjdHMgPyAoXG4gICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fSBtZD17Nn0gbGc9ezR9IGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmhhbmRsZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5oYW5kbGV9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3RzLzppZFwiIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYXZhaWxhYmxlRm9yU2FsZVxuICAgICAgICAgICAgICAgICAgICAgID8gXCIkXCIgKyBwcm9kdWN0LnZhcmlhbnRzWzBdLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlNvbGQgb3V0XCJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1wcm9kdWN0cy1tc2dcIj5cbiAgICAgICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgcmlnaHQgbm93LCBjaGVjayBiYWNrIGxhdGVyITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/collections/all.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Col\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCI/NGNjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Col\n");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI/ZGM2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Container\n");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Image\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIj8zZGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9JbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Image\n");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Row\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCI/MWM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Row\n");

/***/ }),

/***/ "react-bootstrap/Spinner":
/*!******************************************!*\
  !*** external "react-bootstrap/Spinner" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Spinner\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiPzc5YTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Spinner\n");

/***/ }),

/***/ "shopify-buy":
/*!******************************!*\
  !*** external "shopify-buy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shopify-buy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9waWZ5LWJ1eVwiPzA4YWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2hvcGlmeS1idXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9waWZ5LWJ1eVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///shopify-buy\n");

/***/ })

/******/ });