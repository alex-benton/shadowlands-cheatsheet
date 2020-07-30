webpackHotUpdate("static/development/pages/classes/monk.js",{

/***/ "./src/components/common/Icon.tsx":
/*!****************************************!*\
  !*** ./src/components/common/Icon.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/components/theme.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ \"./src/components/util.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/components/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/shadowlands-cheatsheet/src/components/common/Icon.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Icon = function Icon(props) {\n  var determineIcon = function determineIcon() {\n    if (props.wowClassName) return \"/assets/\".concat(props.wowClassName, \".png\");\n    if (props.covenantName) return \"/assets/\".concat(props.covenantName, \".png\");\n\n    if (props.icon) {\n      if (_constants__WEBPACK_IMPORTED_MODULE_4__[\"CLASS_NAMES\"].includes(props.icon)) return \"/assets/\".concat(props.icon, \".png\");\n      return \"/assets/icons/\".concat(!props.icon.endsWith('.jpg') ? \"\".concat(props.icon, \".jpg\") : props.icon);\n    }\n\n    return \"/assets/icons/inv_misc_questionmark.jpg\";\n  };\n\n  var color = props.color ? props.color : props.wowClassName ? _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.classes[props.wowClassName] : props.covenantName ? _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.covenants[props.covenantName] : 'black';\n  var icon = determineIcon();\n  var borderSize = Math.max(2, Math.floor(props.size / 24));\n  return __jsx(Container, {\n    className: props.className,\n    color: color,\n    padding: borderSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 12\n    }\n  }, __jsx(Content, {\n    icon: icon,\n    size: props.size,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = Icon;\nIcon.defaultProps = {\n  icon: 'inv_misc_questionmark',\n  size: 50\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Icon__Container\",\n  componentId: \"guj10n-0\"\n})([\"background-color:\", \";border-radius:10%;padding:\", \"px;\"], function (props) {\n  return props.color;\n}, function (props) {\n  return props.padding;\n});\n_c2 = Container;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.attrs(function (props) {\n  return {\n    style: {\n      background: \"url(\".concat(Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"urlPrefix\"])(props.icon), \")\"),\n      height: \"\".concat(props.size, \"px\"),\n      width: \"\".concat(props.size, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"Icon__Content\",\n  componentId: \"guj10n-1\"\n})([\"background:\", \";height:\", \";width:\", \";background-position:center;background-size:contain;background-repeat:no-repeat;border-radius:25%;\"], function (props) {\n  return props.background;\n}, function (props) {\n  return props.height;\n}, function (props) {\n  return props.width;\n});\n_c3 = Content;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Icon\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbi50c3g/MTJmYyJdLCJuYW1lcyI6WyJJY29uIiwicHJvcHMiLCJkZXRlcm1pbmVJY29uIiwid293Q2xhc3NOYW1lIiwiY292ZW5hbnROYW1lIiwiaWNvbiIsIkNMQVNTX05BTUVTIiwiaW5jbHVkZXMiLCJlbmRzV2l0aCIsImNvbG9yIiwidGhlbWUiLCJjbGFzc2VzIiwiY292ZW5hbnRzIiwiYm9yZGVyU2l6ZSIsIk1hdGgiLCJtYXgiLCJmbG9vciIsInNpemUiLCJjbGFzc05hbWUiLCJkZWZhdWx0UHJvcHMiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwYWRkaW5nIiwiQ29udGVudCIsImF0dHJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwidXJsUHJlZml4IiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFXQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQWtCO0FBQzNCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QixRQUFJRCxLQUFLLENBQUNFLFlBQVYsRUFBd0IseUJBQWtCRixLQUFLLENBQUNFLFlBQXhCO0FBQ3hCLFFBQUlGLEtBQUssQ0FBQ0csWUFBVixFQUF3Qix5QkFBa0JILEtBQUssQ0FBQ0csWUFBeEI7O0FBQ3hCLFFBQUlILEtBQUssQ0FBQ0ksSUFBVixFQUFnQjtBQUNaLFVBQUlDLHNEQUFXLENBQUNDLFFBQVosQ0FBcUJOLEtBQUssQ0FBQ0ksSUFBM0IsQ0FBSixFQUFtRCx5QkFBa0JKLEtBQUssQ0FBQ0ksSUFBeEI7QUFDbkQscUNBQXdCLENBQUNKLEtBQUssQ0FBQ0ksSUFBTixDQUFXRyxRQUFYLENBQW9CLE1BQXBCLENBQUQsYUFBa0NQLEtBQUssQ0FBQ0ksSUFBeEMsWUFBcURKLEtBQUssQ0FBQ0ksSUFBbkY7QUFDSDs7QUFDRDtBQUNILEdBUkQ7O0FBU0EsTUFBTUksS0FBSyxHQUFHUixLQUFLLENBQUNRLEtBQU4sR0FBY1IsS0FBSyxDQUFDUSxLQUFwQixHQUE0QlIsS0FBSyxDQUFDRSxZQUFOLEdBQXFCTyw4Q0FBSyxDQUFDRCxLQUFOLENBQVlFLE9BQVosQ0FBb0JWLEtBQUssQ0FBQ0UsWUFBMUIsQ0FBckIsR0FBK0RGLEtBQUssQ0FBQ0csWUFBTixHQUFxQk0sOENBQUssQ0FBQ0QsS0FBTixDQUFZRyxTQUFaLENBQXNCWCxLQUFLLENBQUNHLFlBQTVCLENBQXJCLEdBQWlFLE9BQTFLO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSCxhQUFhLEVBQTFCO0FBQ0EsTUFBTVcsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlELElBQUksQ0FBQ0UsS0FBTCxDQUFXZixLQUFLLENBQUNnQixJQUFOLEdBQWEsRUFBeEIsQ0FBWixDQUFuQjtBQUNBLFNBQU8sTUFBQyxTQUFEO0FBQ0gsYUFBUyxFQUFFaEIsS0FBSyxDQUFDaUIsU0FEZDtBQUVILFNBQUssRUFBRVQsS0FGSjtBQUdILFdBQU8sRUFBRUksVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0gsTUFBQyxPQUFEO0FBQVMsUUFBSSxFQUFFUixJQUFmO0FBQXFCLFFBQUksRUFBRUosS0FBSyxDQUFDZ0IsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxHLENBQVA7QUFPSCxDQXBCRDs7S0FBTWpCLEk7QUFzQk5BLElBQUksQ0FBQ21CLFlBQUwsR0FBb0I7QUFDaEJkLE1BQUksRUFBRSx1QkFEVTtBQUVoQlksTUFBSSxFQUFFO0FBRlUsQ0FBcEI7QUFLZWpCLG1FQUFmO0FBRUEsSUFBTW9CLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnRUFDUyxVQUFBckIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1EsS0FBVjtBQUFBLENBRGQsRUFHQSxVQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDc0IsT0FBVjtBQUFBLENBSEwsQ0FBZjtNQUFNSCxTO0FBTU4sSUFBTUksT0FBTyxHQUFHSCx5REFBTSxDQUFDQyxHQUFQLENBQVdHLEtBQVgsQ0FBaUQsVUFBQXhCLEtBQUs7QUFBQSxTQUFLO0FBQ3ZFeUIsU0FBSyxFQUFFO0FBQ0hDLGdCQUFVLGdCQUFTQyx1REFBUyxDQUFDM0IsS0FBSyxDQUFDSSxJQUFQLENBQWxCLE1BRFA7QUFFSHdCLFlBQU0sWUFBSzVCLEtBQUssQ0FBQ2dCLElBQVgsT0FGSDtBQUdIYSxXQUFLLFlBQUs3QixLQUFLLENBQUNnQixJQUFYO0FBSEY7QUFEZ0UsR0FBTDtBQUFBLENBQXRELENBQUg7QUFBQTtBQUFBO0FBQUEsaUpBT0ssVUFBQWhCLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUMwQixVQUFWO0FBQUEsQ0FQVixFQVFDLFVBQUExQixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDNEIsTUFBVjtBQUFBLENBUk4sRUFTQSxVQUFBNUIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQzZCLEtBQVY7QUFBQSxDQVRMLENBQWI7TUFBTU4sTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JY29uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge3VybFByZWZpeH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7Q2xhc3NOYW1lLCBDb3ZlbmFudE5hbWV9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHtDTEFTU19OQU1FU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGljb24/OiBzdHJpbmcsXG4gICAgd293Q2xhc3NOYW1lPzogQ2xhc3NOYW1lLFxuICAgIGNvdmVuYW50TmFtZT86IENvdmVuYW50TmFtZSxcbiAgICBzaXplOiBudW1iZXIsXG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5jb25zdCBJY29uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRldGVybWluZUljb24gPSAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy53b3dDbGFzc05hbWUpIHJldHVybiBgL2Fzc2V0cy8ke3Byb3BzLndvd0NsYXNzTmFtZX0ucG5nYDtcbiAgICAgICAgaWYgKHByb3BzLmNvdmVuYW50TmFtZSkgcmV0dXJuIGAvYXNzZXRzLyR7cHJvcHMuY292ZW5hbnROYW1lfS5wbmdgO1xuICAgICAgICBpZiAocHJvcHMuaWNvbikge1xuICAgICAgICAgICAgaWYgKENMQVNTX05BTUVTLmluY2x1ZGVzKHByb3BzLmljb24gYXMgQ2xhc3NOYW1lKSkgcmV0dXJuIGAvYXNzZXRzLyR7cHJvcHMuaWNvbn0ucG5nYDtcbiAgICAgICAgICAgIHJldHVybiBgL2Fzc2V0cy9pY29ucy8keyFwcm9wcy5pY29uLmVuZHNXaXRoKCcuanBnJykgPyBgJHtwcm9wcy5pY29ufS5qcGdgIDogcHJvcHMuaWNvbn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgL2Fzc2V0cy9pY29ucy9pbnZfbWlzY19xdWVzdGlvbm1hcmsuanBnYDtcbiAgICB9O1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IHByb3BzLndvd0NsYXNzTmFtZSA/IHRoZW1lLmNvbG9yLmNsYXNzZXNbcHJvcHMud293Q2xhc3NOYW1lXSA6IHByb3BzLmNvdmVuYW50TmFtZSA/IHRoZW1lLmNvbG9yLmNvdmVuYW50c1twcm9wcy5jb3ZlbmFudE5hbWVdIDogJ2JsYWNrJztcbiAgICBjb25zdCBpY29uID0gZGV0ZXJtaW5lSWNvbigpO1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSBNYXRoLm1heCgyLCBNYXRoLmZsb29yKHByb3BzLnNpemUgLyAyNCkpO1xuICAgIHJldHVybiA8Q29udGFpbmVyXG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHBhZGRpbmc9e2JvcmRlclNpemV9XG4gICAgPlxuICAgICAgICA8Q29udGVudCBpY29uPXtpY29ufSBzaXplPXtwcm9wcy5zaXplfS8+XG4gICAgPC9Db250YWluZXI+O1xufVxuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpY29uOiAnaW52X21pc2NfcXVlc3Rpb25tYXJrJyxcbiAgICBzaXplOiA1MFxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZywgcGFkZGluZzogbnVtYmVyIH0+YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmd9cHg7XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdi5hdHRyczx7IGljb246IHN0cmluZywgc2l6ZTogbnVtYmVyIH0+KHByb3BzID0+ICh7XG4gICAgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3VybFByZWZpeChwcm9wcy5pY29uKX0pYCxcbiAgICAgICAgaGVpZ2h0OiBgJHtwcm9wcy5zaXplfXB4YCxcbiAgICAgICAgd2lkdGg6IGAke3Byb3BzLnNpemV9cHhgLFxuICAgIH1cbn0pKWBcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmJhY2tncm91bmR9O1xuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9O1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Icon.tsx\n");

/***/ })

})