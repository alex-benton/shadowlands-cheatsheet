webpackHotUpdate("static/development/pages/classes/paladin.js",{

/***/ "./src/components/util.ts":
/*!********************************!*\
  !*** ./src/components/util.ts ***!
  \********************************/
/*! exports provided: urlPrefix, buildClassData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlPrefix\", function() { return urlPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildClassData\", function() { return buildClassData; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Module containing utility functions that don't fit anywhere else.\n//\n\n\n/**\n * Formats a local (within-the-app) URL string by adding a URL prefix based on the current deployment.\n *\n * All within-the-app links need a prefixed URL in order to work when this app is deployed.\n *\n * @param url the URL to format\n * @return the formatted URL.\n */\nvar urlPrefix = function urlPrefix(url) {\n  return \"\" ? undefined : url;\n};\n/**\n * The type definition for class page data.\n */\n\n/**\n * Build the data object for the provided class name.\n *\n * Loads JSON data files from '/data/{classname}' and turns them into a data object. This function\n * must be called at build time!\n *\n * @param fs the node fs module.\n * @param wowClassName the class name to build data for.\n * @returns\n */\nvar buildClassData = function buildClassData(fs, wowClassName) {\n  // load conduit data\n  var conduitPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'conduits.json');\n  var conduits;\n\n  try {\n    // @ts-ignore\n    conduits = JSON.parse(fs.readFileSync(conduitPath));\n  } catch (_unused) {\n    conduits = [];\n  } // load legendaries\n\n\n  var legendaryPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'legendaries.json');\n  var legendaries;\n\n  try {\n    // @ts-ignore\n    legendaries = JSON.parse(fs.readFileSync(legendaryPath));\n  } catch (_unused2) {\n    legendaries = [];\n  } // load covenant abilities\n\n\n  var covenantPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'data', wowClassName, 'covenants.json');\n  var covenants;\n\n  try {\n    // @ts-ignore\n    covenants = JSON.parse(fs.readFileSync(covenantPath));\n  } catch (_unused3) {\n    covenants = [];\n  }\n\n  return {\n    wowClassName: wowClassName,\n    data: {\n      conduits: conduits,\n      covenants: covenants,\n      legendaries: legendaries\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlsLnRzPzE0NDEiXSwibmFtZXMiOlsidXJsUHJlZml4IiwidXJsIiwicGF0aCIsImJ1aWxkQ2xhc3NEYXRhIiwiZnMiLCJ3b3dDbGFzc05hbWUiLCJjb25kdWl0UGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiY29uZHVpdHMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJsZWdlbmRhcnlQYXRoIiwibGVnZW5kYXJpZXMiLCJjb3ZlbmFudFBhdGgiLCJjb3ZlbmFudHMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7Ozs7Ozs7O0FBUU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFNBQTBCLEtBQXlCQyxTQUF6QixHQUFrRUQsR0FBNUY7QUFBQSxDQUFsQjtBQUVQOzs7O0FBWUE7Ozs7Ozs7Ozs7QUFVTyxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEVBQUQsRUFBMEJDLFlBQTFCLEVBQWlFO0FBQzNGO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSiwyQ0FBSSxDQUFDSyxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLEVBQWlDSixZQUFqQyxFQUErQyxlQUEvQyxDQUFwQjtBQUNBLE1BQUlLLFFBQUo7O0FBQ0EsTUFBSTtBQUNBO0FBQ0FBLFlBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLEVBQUUsQ0FBQ1MsWUFBSCxDQUFnQlAsV0FBaEIsQ0FBWCxDQUFYO0FBQ0gsR0FIRCxDQUdFLGdCQUFNO0FBQ0pJLFlBQVEsR0FBRyxFQUFYO0FBQ0gsR0FUMEYsQ0FXM0Y7OztBQUNBLE1BQU1JLGFBQWEsR0FBR1osMkNBQUksQ0FBQ0ssSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQ0osWUFBakMsRUFBK0Msa0JBQS9DLENBQXRCO0FBQ0EsTUFBSVUsV0FBSjs7QUFDQSxNQUFJO0FBQ0E7QUFDQUEsZUFBVyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV1IsRUFBRSxDQUFDUyxZQUFILENBQWdCQyxhQUFoQixDQUFYLENBQWQ7QUFDSCxHQUhELENBR0UsaUJBQU07QUFDSkMsZUFBVyxHQUFHLEVBQWQ7QUFDSCxHQW5CMEYsQ0FxQjNGOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUdkLDJDQUFJLENBQUNLLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUNKLFlBQWpDLEVBQStDLGdCQUEvQyxDQUFyQjtBQUNBLE1BQUlZLFNBQUo7O0FBQ0EsTUFBSTtBQUNBO0FBQ0FBLGFBQVMsR0FBR04sSUFBSSxDQUFDQyxLQUFMLENBQVdSLEVBQUUsQ0FBQ1MsWUFBSCxDQUFnQkcsWUFBaEIsQ0FBWCxDQUFaO0FBQ0gsR0FIRCxDQUdFLGlCQUFNO0FBQ0pDLGFBQVMsR0FBRyxFQUFaO0FBQ0g7O0FBRUQsU0FBTztBQUNIWixnQkFBWSxFQUFaQSxZQURHO0FBRUhhLFFBQUksRUFBRTtBQUNGUixjQUFRLEVBQVJBLFFBREU7QUFFRk8sZUFBUyxFQUFUQSxTQUZFO0FBR0ZGLGlCQUFXLEVBQVhBO0FBSEU7QUFGSCxHQUFQO0FBUUgsQ0F2Q00iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91dGlsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vIE1vZHVsZSBjb250YWluaW5nIHV0aWxpdHkgZnVuY3Rpb25zIHRoYXQgZG9uJ3QgZml0IGFueXdoZXJlIGVsc2UuXG4vL1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtDbGFzc05hbWV9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQge0NvbmR1aXRUeXBlLCBDb3ZlbmFudEFiaWxpdHlUeXBlLCBMZWdlbmRhcnlUeXBlfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKipcbiAqIEZvcm1hdHMgYSBsb2NhbCAod2l0aGluLXRoZS1hcHApIFVSTCBzdHJpbmcgYnkgYWRkaW5nIGEgVVJMIHByZWZpeCBiYXNlZCBvbiB0aGUgY3VycmVudCBkZXBsb3ltZW50LlxuICpcbiAqIEFsbCB3aXRoaW4tdGhlLWFwcCBsaW5rcyBuZWVkIGEgcHJlZml4ZWQgVVJMIGluIG9yZGVyIHRvIHdvcmsgd2hlbiB0aGlzIGFwcCBpcyBkZXBsb3llZC5cbiAqXG4gKiBAcGFyYW0gdXJsIHRoZSBVUkwgdG8gZm9ybWF0XG4gKiBAcmV0dXJuIHRoZSBmb3JtYXR0ZWQgVVJMLlxuICovXG5leHBvcnQgY29uc3QgdXJsUHJlZml4ID0gKHVybDogc3RyaW5nKSA6IHN0cmluZyA9PiBwcm9jZXNzLmVudi5VUkxfUFJFRklYID8gcGF0aC5qb2luKHByb2Nlc3MuZW52LlVSTF9QUkVGSVgsIHVybCkgOiB1cmw7XG5cbi8qKlxuICogVGhlIHR5cGUgZGVmaW5pdGlvbiBmb3IgY2xhc3MgcGFnZSBkYXRhLlxuICovXG5leHBvcnQgdHlwZSBDbGFzc0RhdGEgPSB7XG4gICAgd293Q2xhc3NOYW1lOiBDbGFzc05hbWUsXG4gICAgZGF0YToge1xuICAgICAgICBjb3ZlbmFudHM6IENvdmVuYW50QWJpbGl0eVR5cGVbXSxcbiAgICAgICAgY29uZHVpdHM6IENvbmR1aXRUeXBlW10sXG4gICAgICAgIGxlZ2VuZGFyaWVzOiBMZWdlbmRhcnlUeXBlW10sXG4gICAgfVxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBkYXRhIG9iamVjdCBmb3IgdGhlIHByb3ZpZGVkIGNsYXNzIG5hbWUuXG4gKlxuICogTG9hZHMgSlNPTiBkYXRhIGZpbGVzIGZyb20gJy9kYXRhL3tjbGFzc25hbWV9JyBhbmQgdHVybnMgdGhlbSBpbnRvIGEgZGF0YSBvYmplY3QuIFRoaXMgZnVuY3Rpb25cbiAqIG11c3QgYmUgY2FsbGVkIGF0IGJ1aWxkIHRpbWUhXG4gKlxuICogQHBhcmFtIGZzIHRoZSBub2RlIGZzIG1vZHVsZS5cbiAqIEBwYXJhbSB3b3dDbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gYnVpbGQgZGF0YSBmb3IuXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgYnVpbGRDbGFzc0RhdGEgPSAoZnM6IHR5cGVvZiBpbXBvcnQoXCJmc1wiKSwgd293Q2xhc3NOYW1lOiBDbGFzc05hbWUpOiBDbGFzc0RhdGEgPT4ge1xuICAgIC8vIGxvYWQgY29uZHVpdCBkYXRhXG4gICAgY29uc3QgY29uZHVpdFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCB3b3dDbGFzc05hbWUsICdjb25kdWl0cy5qc29uJyk7XG4gICAgbGV0IGNvbmR1aXRzO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uZHVpdHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjb25kdWl0UGF0aCkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICBjb25kdWl0cyA9IFtdXG4gICAgfVxuXG4gICAgLy8gbG9hZCBsZWdlbmRhcmllc1xuICAgIGNvbnN0IGxlZ2VuZGFyeVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCB3b3dDbGFzc05hbWUsICdsZWdlbmRhcmllcy5qc29uJyk7XG4gICAgbGV0IGxlZ2VuZGFyaWVzO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGVnZW5kYXJpZXMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhsZWdlbmRhcnlQYXRoKSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGxlZ2VuZGFyaWVzID0gW11cbiAgICB9XG5cbiAgICAvLyBsb2FkIGNvdmVuYW50IGFiaWxpdGllc1xuICAgIGNvbnN0IGNvdmVuYW50UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsIHdvd0NsYXNzTmFtZSwgJ2NvdmVuYW50cy5qc29uJyk7XG4gICAgbGV0IGNvdmVuYW50cztcbiAgICB0cnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvdmVuYW50cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNvdmVuYW50UGF0aCkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICBjb3ZlbmFudHMgPSBbXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHdvd0NsYXNzTmFtZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29uZHVpdHMsXG4gICAgICAgICAgICBjb3ZlbmFudHMsXG4gICAgICAgICAgICBsZWdlbmRhcmllc1xuICAgICAgICB9XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/util.ts\n");

/***/ })

})