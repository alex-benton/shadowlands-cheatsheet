webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/util.ts":
/*!****************************!*\
  !*** ./components/util.ts ***!
  \****************************/
/*! exports provided: urlPrefix, buildClassData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlPrefix\", function() { return urlPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildClassData\", function() { return buildClassData; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nvar urlPrefix = function urlPrefix(url) {\n  return \"\" ? undefined : url;\n}; // build class pages\n// i can't use a dynamic-routed page because next static export doesn't fully work.\n\n/**\n * Build the data object for the provided class name.\n *\n * Loads JSON data files from '/data/{classname}' and turns them into a data object. This function\n * must be called at build time!\n *\n * @param fs the node fs module.\n * @param wowClassName the class name to build data for.\n */\n\nvar buildClassData = function buildClassData(fs, wowClassName) {\n  // load conduit data\n  var conduitPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'conduits.json');\n  var conduits;\n\n  try {\n    // @ts-ignore\n    conduits = JSON.parse(fs.readFileSync(conduitPath));\n  } catch (_unused) {\n    conduits = [];\n  } // load legendaries\n\n\n  var legendaryPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'legendaries.json');\n  var legendaries;\n\n  try {\n    // @ts-ignore\n    legendaries = JSON.parse(fs.readFileSync(legendaryPath));\n  } catch (_unused2) {\n    legendaries = [];\n  } // load covenant abilities\n\n\n  var covenantPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'covenants.json');\n  var covenants;\n\n  try {\n    // @ts-ignore\n    covenants = JSON.parse(fs.readFileSync(covenantPath));\n  } catch (_unused3) {\n    covenants = [];\n  }\n\n  return {\n    wowClassName: wowClassName,\n    data: {\n      conduits: conduits,\n      covenants: covenants,\n      legendaries: legendaries\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwudHM/OGRlZCJdLCJuYW1lcyI6WyJ1cmxQcmVmaXgiLCJ1cmwiLCJwYXRoIiwiYnVpbGRDbGFzc0RhdGEiLCJmcyIsIndvd0NsYXNzTmFtZSIsImNvbmR1aXRQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJjb25kdWl0cyIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsImxlZ2VuZGFyeVBhdGgiLCJsZWdlbmRhcmllcyIsImNvdmVuYW50UGF0aCIsImNvdmVuYW50cyIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQ7QUFBQSxTQUEwQixLQUF5QkMsU0FBekIsR0FBa0VELEdBQTVGO0FBQUEsQ0FBbEIsQyxDQUdQO0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFTTyxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEVBQUQsRUFBMEJDLFlBQTFCLEVBQXNEO0FBQ2hGO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSiwyQ0FBSSxDQUFDSyxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLEVBQWlDSixZQUFqQyxFQUErQyxlQUEvQyxDQUFwQjtBQUNBLE1BQUlLLFFBQUo7O0FBQ0EsTUFBSTtBQUNBO0FBQ0FBLFlBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLEVBQUUsQ0FBQ1MsWUFBSCxDQUFnQlAsV0FBaEIsQ0FBWCxDQUFYO0FBQ0gsR0FIRCxDQUdFLGdCQUFNO0FBQ0pJLFlBQVEsR0FBRyxFQUFYO0FBQ0gsR0FUK0UsQ0FXaEY7OztBQUNBLE1BQU1JLGFBQWEsR0FBR1osMkNBQUksQ0FBQ0ssSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQ0osWUFBakMsRUFBK0Msa0JBQS9DLENBQXRCO0FBQ0EsTUFBSVUsV0FBSjs7QUFDQSxNQUFJO0FBQ0E7QUFDQUEsZUFBVyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV1IsRUFBRSxDQUFDUyxZQUFILENBQWdCQyxhQUFoQixDQUFYLENBQWQ7QUFDSCxHQUhELENBR0UsaUJBQU07QUFDSkMsZUFBVyxHQUFHLEVBQWQ7QUFDSCxHQW5CK0UsQ0FxQmhGOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUdkLDJDQUFJLENBQUNLLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUNKLFlBQWpDLEVBQStDLGdCQUEvQyxDQUFyQjtBQUNBLE1BQUlZLFNBQUo7O0FBQ0EsTUFBSTtBQUNBO0FBQ0FBLGFBQVMsR0FBR04sSUFBSSxDQUFDQyxLQUFMLENBQVdSLEVBQUUsQ0FBQ1MsWUFBSCxDQUFnQkcsWUFBaEIsQ0FBWCxDQUFaO0FBQ0gsR0FIRCxDQUdFLGlCQUFNO0FBQ0pDLGFBQVMsR0FBRyxFQUFaO0FBQ0g7O0FBRUQsU0FBTztBQUNIWixnQkFBWSxFQUFaQSxZQURHO0FBRUhhLFFBQUksRUFBRTtBQUNGUixjQUFRLEVBQVJBLFFBREU7QUFFRk8sZUFBUyxFQUFUQSxTQUZFO0FBR0ZGLGlCQUFXLEVBQVhBO0FBSEU7QUFGSCxHQUFQO0FBUUgsQ0F2Q00iLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtDbGFzc05hbWV9IGZyb20gXCIuL3RoZW1lXCI7XG5cbmV4cG9ydCBjb25zdCB1cmxQcmVmaXggPSAodXJsOiBzdHJpbmcpIDogc3RyaW5nID0+IHByb2Nlc3MuZW52LlVSTF9QUkVGSVggPyBwYXRoLmpvaW4ocHJvY2Vzcy5lbnYuVVJMX1BSRUZJWCwgdXJsKSA6IHVybDtcblxuXG4vLyBidWlsZCBjbGFzcyBwYWdlc1xuLy8gaSBjYW4ndCB1c2UgYSBkeW5hbWljLXJvdXRlZCBwYWdlIGJlY2F1c2UgbmV4dCBzdGF0aWMgZXhwb3J0IGRvZXNuJ3QgZnVsbHkgd29yay5cbi8qKlxuICogQnVpbGQgdGhlIGRhdGEgb2JqZWN0IGZvciB0aGUgcHJvdmlkZWQgY2xhc3MgbmFtZS5cbiAqXG4gKiBMb2FkcyBKU09OIGRhdGEgZmlsZXMgZnJvbSAnL2RhdGEve2NsYXNzbmFtZX0nIGFuZCB0dXJucyB0aGVtIGludG8gYSBkYXRhIG9iamVjdC4gVGhpcyBmdW5jdGlvblxuICogbXVzdCBiZSBjYWxsZWQgYXQgYnVpbGQgdGltZSFcbiAqXG4gKiBAcGFyYW0gZnMgdGhlIG5vZGUgZnMgbW9kdWxlLlxuICogQHBhcmFtIHdvd0NsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBidWlsZCBkYXRhIGZvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkQ2xhc3NEYXRhID0gKGZzOiB0eXBlb2YgaW1wb3J0KFwiZnNcIiksIHdvd0NsYXNzTmFtZTogQ2xhc3NOYW1lKSA9PiB7XG4gICAgLy8gbG9hZCBjb25kdWl0IGRhdGFcbiAgICBjb25zdCBjb25kdWl0UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsIHdvd0NsYXNzTmFtZSwgJ2NvbmR1aXRzLmpzb24nKTtcbiAgICBsZXQgY29uZHVpdHM7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25kdWl0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNvbmR1aXRQYXRoKSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbmR1aXRzID0gW11cbiAgICB9XG5cbiAgICAvLyBsb2FkIGxlZ2VuZGFyaWVzXG4gICAgY29uc3QgbGVnZW5kYXJ5UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsIHdvd0NsYXNzTmFtZSwgJ2xlZ2VuZGFyaWVzLmpzb24nKTtcbiAgICBsZXQgbGVnZW5kYXJpZXM7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZWdlbmRhcmllcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGxlZ2VuZGFyeVBhdGgpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgbGVnZW5kYXJpZXMgPSBbXVxuICAgIH1cblxuICAgIC8vIGxvYWQgY292ZW5hbnQgYWJpbGl0aWVzXG4gICAgY29uc3QgY292ZW5hbnRQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgd293Q2xhc3NOYW1lLCAnY292ZW5hbnRzLmpzb24nKTtcbiAgICBsZXQgY292ZW5hbnRzO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY292ZW5hbnRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY292ZW5hbnRQYXRoKSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGNvdmVuYW50cyA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd293Q2xhc3NOYW1lLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb25kdWl0cyxcbiAgICAgICAgICAgIGNvdmVuYW50cyxcbiAgICAgICAgICAgIGxlZ2VuZGFyaWVzXG4gICAgICAgIH1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/util.ts\n");

/***/ })

})