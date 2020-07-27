webpackHotUpdate("static/development/pages/classes/monk.js",{

/***/ "./src/components/util.ts":
/*!********************************!*\
  !*** ./src/components/util.ts ***!
  \********************************/
/*! exports provided: urlPrefix, buildClassData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlPrefix\", function() { return urlPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildClassData\", function() { return buildClassData; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Module containing utility functions that don't fit anywhere else.\n//\n\nvar urlPrefix = function urlPrefix(url) {\n  return \"\" ? undefined : url;\n};\n/**\n * The type definition for class page data.\n */\n\n/**\n * Build the data object for the provided class name.\n *\n * Loads JSON data files from '/data/{classname}' and turns them into a data object. This function\n * must be called at build time!\n *\n * @param fs the node fs module.\n * @param wowClassName the class name to build data for.\n * @returns\n */\nvar buildClassData = function buildClassData(fs, wowClassName) {\n  // load conduit data\n  var conduitPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'conduits.json');\n  var conduits;\n\n  try {\n    // @ts-ignore\n    conduits = JSON.parse(fs.readFileSync(conduitPath));\n  } catch (_unused) {\n    conduits = [];\n  } // load legendaries\n\n\n  var legendaryPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'legendaries.json');\n  var legendaries;\n\n  try {\n    // @ts-ignore\n    legendaries = JSON.parse(fs.readFileSync(legendaryPath));\n  } catch (_unused2) {\n    legendaries = [];\n  } // load covenant abilities\n\n\n  var covenantPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'covenants.json');\n  var covenants;\n\n  try {\n    // @ts-ignore\n    covenants = JSON.parse(fs.readFileSync(covenantPath));\n  } catch (_unused3) {\n    covenants = [];\n  }\n\n  return {\n    wowClassName: wowClassName,\n    data: {\n      conduits: conduits,\n      covenants: covenants,\n      legendaries: legendaries\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlsLnRzPzE0NDEiXSwibmFtZXMiOlsidXJsUHJlZml4IiwidXJsIiwicGF0aCIsImJ1aWxkQ2xhc3NEYXRhIiwiZnMiLCJ3b3dDbGFzc05hbWUiLCJjb25kdWl0UGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiY29uZHVpdHMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJsZWdlbmRhcnlQYXRoIiwibGVnZW5kYXJpZXMiLCJjb3ZlbmFudFBhdGgiLCJjb3ZlbmFudHMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFJTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFEO0FBQUEsU0FBMEIsS0FBeUJDLFNBQXpCLEdBQWtFRCxHQUE1RjtBQUFBLENBQWxCO0FBR1A7Ozs7QUFZQTs7Ozs7Ozs7OztBQVVPLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsRUFBRCxFQUEwQkMsWUFBMUIsRUFBaUU7QUFDM0Y7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLDJDQUFJLENBQUNLLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUNKLFlBQWpDLEVBQStDLGVBQS9DLENBQXBCO0FBQ0EsTUFBSUssUUFBSjs7QUFDQSxNQUFJO0FBQ0E7QUFDQUEsWUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsRUFBRSxDQUFDUyxZQUFILENBQWdCUCxXQUFoQixDQUFYLENBQVg7QUFDSCxHQUhELENBR0UsZ0JBQU07QUFDSkksWUFBUSxHQUFHLEVBQVg7QUFDSCxHQVQwRixDQVczRjs7O0FBQ0EsTUFBTUksYUFBYSxHQUFHWiwyQ0FBSSxDQUFDSyxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLEVBQWlDSixZQUFqQyxFQUErQyxrQkFBL0MsQ0FBdEI7QUFDQSxNQUFJVSxXQUFKOztBQUNBLE1BQUk7QUFDQTtBQUNBQSxlQUFXLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixFQUFFLENBQUNTLFlBQUgsQ0FBZ0JDLGFBQWhCLENBQVgsQ0FBZDtBQUNILEdBSEQsQ0FHRSxpQkFBTTtBQUNKQyxlQUFXLEdBQUcsRUFBZDtBQUNILEdBbkIwRixDQXFCM0Y7OztBQUNBLE1BQU1DLFlBQVksR0FBR2QsMkNBQUksQ0FBQ0ssSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQ0osWUFBakMsRUFBK0MsZ0JBQS9DLENBQXJCO0FBQ0EsTUFBSVksU0FBSjs7QUFDQSxNQUFJO0FBQ0E7QUFDQUEsYUFBUyxHQUFHTixJQUFJLENBQUNDLEtBQUwsQ0FBV1IsRUFBRSxDQUFDUyxZQUFILENBQWdCRyxZQUFoQixDQUFYLENBQVo7QUFDSCxHQUhELENBR0UsaUJBQU07QUFDSkMsYUFBUyxHQUFHLEVBQVo7QUFDSDs7QUFFRCxTQUFPO0FBQ0haLGdCQUFZLEVBQVpBLFlBREc7QUFFSGEsUUFBSSxFQUFFO0FBQ0ZSLGNBQVEsRUFBUkEsUUFERTtBQUVGTyxlQUFTLEVBQVRBLFNBRkU7QUFHRkYsaUJBQVcsRUFBWEE7QUFIRTtBQUZILEdBQVA7QUFRSCxDQXZDTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3V0aWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gTW9kdWxlIGNvbnRhaW5pbmcgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCBkb24ndCBmaXQgYW55d2hlcmUgZWxzZS5cbi8vXG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQge0NsYXNzTmFtZX0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7Q29uZHVpdFR5cGUsIENvdmVuYW50QWJpbGl0eVR5cGUsIExlZ2VuZGFyeVR5cGV9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cmxQcmVmaXggPSAodXJsOiBzdHJpbmcpIDogc3RyaW5nID0+IHByb2Nlc3MuZW52LlVSTF9QUkVGSVggPyBwYXRoLmpvaW4ocHJvY2Vzcy5lbnYuVVJMX1BSRUZJWCwgdXJsKSA6IHVybDtcblxuXG4vKipcbiAqIFRoZSB0eXBlIGRlZmluaXRpb24gZm9yIGNsYXNzIHBhZ2UgZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgQ2xhc3NEYXRhID0ge1xuICAgIHdvd0NsYXNzTmFtZTogQ2xhc3NOYW1lLFxuICAgIGRhdGE6IHtcbiAgICAgICAgY292ZW5hbnRzOiBDb3ZlbmFudEFiaWxpdHlUeXBlW10sXG4gICAgICAgIGNvbmR1aXRzOiBDb25kdWl0VHlwZVtdLFxuICAgICAgICBsZWdlbmRhcmllczogTGVnZW5kYXJ5VHlwZVtdLFxuICAgIH1cbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgZGF0YSBvYmplY3QgZm9yIHRoZSBwcm92aWRlZCBjbGFzcyBuYW1lLlxuICpcbiAqIExvYWRzIEpTT04gZGF0YSBmaWxlcyBmcm9tICcvZGF0YS97Y2xhc3NuYW1lfScgYW5kIHR1cm5zIHRoZW0gaW50byBhIGRhdGEgb2JqZWN0LiBUaGlzIGZ1bmN0aW9uXG4gKiBtdXN0IGJlIGNhbGxlZCBhdCBidWlsZCB0aW1lIVxuICpcbiAqIEBwYXJhbSBmcyB0aGUgbm9kZSBmcyBtb2R1bGUuXG4gKiBAcGFyYW0gd293Q2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIGJ1aWxkIGRhdGEgZm9yLlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkQ2xhc3NEYXRhID0gKGZzOiB0eXBlb2YgaW1wb3J0KFwiZnNcIiksIHdvd0NsYXNzTmFtZTogQ2xhc3NOYW1lKTogQ2xhc3NEYXRhID0+IHtcbiAgICAvLyBsb2FkIGNvbmR1aXQgZGF0YVxuICAgIGNvbnN0IGNvbmR1aXRQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgd293Q2xhc3NOYW1lLCAnY29uZHVpdHMuanNvbicpO1xuICAgIGxldCBjb25kdWl0cztcbiAgICB0cnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbmR1aXRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY29uZHVpdFBhdGgpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uZHVpdHMgPSBbXVxuICAgIH1cblxuICAgIC8vIGxvYWQgbGVnZW5kYXJpZXNcbiAgICBjb25zdCBsZWdlbmRhcnlQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgd293Q2xhc3NOYW1lLCAnbGVnZW5kYXJpZXMuanNvbicpO1xuICAgIGxldCBsZWdlbmRhcmllcztcbiAgICB0cnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxlZ2VuZGFyaWVzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMobGVnZW5kYXJ5UGF0aCkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICBsZWdlbmRhcmllcyA9IFtdXG4gICAgfVxuXG4gICAgLy8gbG9hZCBjb3ZlbmFudCBhYmlsaXRpZXNcbiAgICBjb25zdCBjb3ZlbmFudFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCB3b3dDbGFzc05hbWUsICdjb3ZlbmFudHMuanNvbicpO1xuICAgIGxldCBjb3ZlbmFudHM7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb3ZlbmFudHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjb3ZlbmFudFBhdGgpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgY292ZW5hbnRzID0gW11cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3b3dDbGFzc05hbWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvbmR1aXRzLFxuICAgICAgICAgICAgY292ZW5hbnRzLFxuICAgICAgICAgICAgbGVnZW5kYXJpZXNcbiAgICAgICAgfVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/util.ts\n");

/***/ })

})