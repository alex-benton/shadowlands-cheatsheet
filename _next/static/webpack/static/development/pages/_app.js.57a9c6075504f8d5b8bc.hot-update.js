webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/shadowlands-cheatsheet/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"];\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\n  body {\\n    margin: 0px;\\n    font-family: Helvetica, Arial, sans-serif;\\n    font-weight: 400;\\n    \\n    background-color: #222;\\n    background-image: url('/spooky.jpg');\\n    background-position: top;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    \\n    overflow: hidden;\\n  }\\n  \\n  #__next {\\n    overflow: auto;\\n    height: 100vh;\\n  }\\n  \\n  a {\\n    text-decoration: inherit;\\n  }\\n  \\n  a:-webkit-any-link {\\n    color: inherit;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar theme = {};\n/**\n * Use the 'styled-components' global style mechanism to style the 'body' and default '__next' entrypoint div.\n *\n * See also: https://styled-components.com/docs/api#createglobalstyle\n */\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject());\n/**\n * The app component.\n *\n * Because this file is named '_app', through nextjs magic this will be rendered for each page. The 'Component'\n * component is the actual 'page' that's being rendered.\n *\n * @param Component provided by nextjs. The 'page' that's going to be rendered.\n * @param pageProps provided by nextjs. The props to be passed to the page.\n * @param router provided by nextjs. The nextjs router.\n */\n\n_c = GlobalStyle;\n\nvar App = function App(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      router = _ref.router;\n  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 60\n    }\n  }, __jsx(GlobalStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"link\", {\n    rel: \"apple-touch-icon\",\n    sizes: \"180x180\",\n    href: \"\".concat(router.pageLoader.assetPrefix, \"/apple-touch-icon.png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    type: \"image/png\",\n    sizes: \"32x32\",\n    href: \"\".concat(router.pageLoader.assetPrefix, \"/favicon-32x32.png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    type: \"image/png\",\n    sizes: \"16x16\",\n    href: \"\".concat(router.pageLoader.assetPrefix, \"/favicon-16x16.png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    rel: \"manifest\",\n    href: \"\".concat(router.pageLoader.assetPrefix, \"/site.webmanifest\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:wght@300;400;600;700;800&family=Stalinist+One&display=swap\",\n    rel: \"stylesheet\",\n    key: \"google-fonts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }), __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, \"shadowlands tools\")), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_c2 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"_app__Content\",\n  componentId: \"sc-1u6es4k-0\"\n})([\"overflow-x:auto;\"]);\n_c3 = Content;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c2, \"App\");\n$RefreshReg$(_c3, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbInRoZW1lIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInBhZ2VMb2FkZXIiLCJhc3NldFByZWZpeCIsIkNvbnRlbnQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFJQTs7Ozs7O0FBS0EsSUFBTUMsV0FBVyxHQUFHQywyRUFBSCxtQkFBakI7QUE4QkE7Ozs7Ozs7Ozs7O0tBOUJNRCxXOztBQXdDTixJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLE1BQWFDLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQSxTQUErQyxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFTixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ3ZELE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHVELEVBRW5ELE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sT0FBRyxFQUFDLGtCQUFWO0FBQTZCLFNBQUssRUFBQyxTQUFuQztBQUE2QyxRQUFJLFlBQUtNLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsV0FBdkIsMEJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFdBQXRCO0FBQWtDLFNBQUssRUFBQyxPQUF4QztBQUFnRCxRQUFJLFlBQUtGLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsV0FBdkIsdUJBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFdBQXRCO0FBQWtDLFNBQUssRUFBQyxPQUF4QztBQUFnRCxRQUFJLFlBQUtGLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsV0FBdkIsdUJBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQU0sT0FBRyxFQUFDLFVBQVY7QUFBcUIsUUFBSSxZQUFLRixNQUFNLENBQUNDLFVBQVAsQ0FBa0JDLFdBQXZCLHNCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUNJLFFBQUksRUFBQyw2SEFEVDtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBR0ksT0FBRyxFQUFDLGNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixDQUZtRCxFQWNuRCxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FkbUQsQ0FBL0M7QUFBQSxDQUFaOztNQUFNRixHO0FBbUJTQSxrRUFBZjtBQUVBLElBQU1NLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBYjtNQUFNRixPIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlciwgY3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCB0aGVtZSA9IHtcblxufTtcblxuLyoqXG4gKiBVc2UgdGhlICdzdHlsZWQtY29tcG9uZW50cycgZ2xvYmFsIHN0eWxlIG1lY2hhbmlzbSB0byBzdHlsZSB0aGUgJ2JvZHknIGFuZCBkZWZhdWx0ICdfX25leHQnIGVudHJ5cG9pbnQgZGl2LlxuICpcbiAqIFNlZSBhbHNvOiBodHRwczovL3N0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjcmVhdGVnbG9iYWxzdHlsZVxuICovXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcG9va3kuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAjX19uZXh0IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIH1cbiAgXG4gIGE6LXdlYmtpdC1hbnktbGluayB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG5cbi8qKlxuICogVGhlIGFwcCBjb21wb25lbnQuXG4gKlxuICogQmVjYXVzZSB0aGlzIGZpbGUgaXMgbmFtZWQgJ19hcHAnLCB0aHJvdWdoIG5leHRqcyBtYWdpYyB0aGlzIHdpbGwgYmUgcmVuZGVyZWQgZm9yIGVhY2ggcGFnZS4gVGhlICdDb21wb25lbnQnXG4gKiBjb21wb25lbnQgaXMgdGhlIGFjdHVhbCAncGFnZScgdGhhdCdzIGJlaW5nIHJlbmRlcmVkLlxuICpcbiAqIEBwYXJhbSBDb21wb25lbnQgcHJvdmlkZWQgYnkgbmV4dGpzLiBUaGUgJ3BhZ2UnIHRoYXQncyBnb2luZyB0byBiZSByZW5kZXJlZC5cbiAqIEBwYXJhbSBwYWdlUHJvcHMgcHJvdmlkZWQgYnkgbmV4dGpzLiBUaGUgcHJvcHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBwYWdlLlxuICogQHBhcmFtIHJvdXRlciBwcm92aWRlZCBieSBuZXh0anMuIFRoZSBuZXh0anMgcm91dGVyLlxuICovXG5jb25zdCBBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXJ9OiBBcHBQcm9wcykgPT4gKDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPEdsb2JhbFN0eWxlLz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj17YCR7cm91dGVyLnBhZ2VMb2FkZXIuYXNzZXRQcmVmaXh9L2FwcGxlLXRvdWNoLWljb24ucG5nYH0vPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj17YCR7cm91dGVyLnBhZ2VMb2FkZXIuYXNzZXRQcmVmaXh9L2Zhdmljb24tMzJ4MzIucG5nYH0vPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj17YCR7cm91dGVyLnBhZ2VMb2FkZXIuYXNzZXRQcmVmaXh9L2Zhdmljb24tMTZ4MTYucG5nYH0vPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPXtgJHtyb3V0ZXIucGFnZUxvYWRlci5hc3NldFByZWZpeH0vc2l0ZS53ZWJtYW5pZmVzdGB9Lz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmZhbWlseT1TdGFsaW5pc3QrT25lJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAga2V5PVwiZ29vZ2xlLWZvbnRzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+c2hhZG93bGFuZHMgdG9vbHM8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NvbnRlbnQ+XG48L1RoZW1lUHJvdmlkZXI+KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})