webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.ts\");\n/* harmony import */ var _components_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/util */ \"./components/util.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/shadowlands-cheatsheet/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"];\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\n  body {\\n    margin: 0px;\\n    font-family: Helvetica, Arial, sans-serif;\\n    font-weight: 400;\\n    \\n    background-color: #222;\\n    background-image: url('\", \"');\\n    background-position: top;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    \\n    overflow: hidden;\\n  }\\n  \\n  #__next {\\n    overflow: auto;\\n    height: 100vh;\\n  }\\n  \\n  a {\\n    text-decoration: inherit;\\n  }\\n  \\n  a:-webkit-any-link {\\n    color: inherit;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n/**\n * Use the 'styled-components' global style mechanism to style the 'body' and default '__next' entrypoint div.\n *\n * See also: https://styled-components.com/docs/api#createglobalstyle\n */\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject(), Object(_components_util__WEBPACK_IMPORTED_MODULE_6__[\"urlPrefix\"])(\"/spooky.jpg\"));\n/**\n * The app component.\n *\n * Because this file is named '_app', through nextjs magic this will be rendered for each page. The 'Component'\n * component is the actual 'page' that's being rendered.\n *\n * @param Component provided by nextjs. The 'page' that's going to be rendered.\n * @param pageProps provided by nextjs. The props to be passed to the page.\n * @param router provided by nextjs. The nextjs router.\n */\n\n_c = GlobalStyle;\n\nvar App = function App(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      router = _ref.router;\n  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _components_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 60\n    }\n  }, __jsx(GlobalStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"link\", {\n    rel: \"apple-touch-icon\",\n    sizes: \"180x180\",\n    href: \"\".concat(router.pageLoader ? router.pageLoader.assetPrefix : '', \"/apple-touch-icon.png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    type: \"image/png\",\n    sizes: \"32x32\",\n    href: \"\".concat(router.pageLoader ? router.pageLoader.assetPrefix : '', \"/favicon-32x32.png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    type: \"image/png\",\n    sizes: \"16x16\",\n    href: \"\".concat(router.pageLoader ? router.pageLoader.assetPrefix : '', \"/favicon-16x16.png\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    rel: \"manifest\",\n    href: \"\".concat(router.pageLoader ? router.pageLoader.assetPrefix : '', \"/site.webmanifest\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:wght@300;400;600;700;800&family=Stalinist+One&display=swap\",\n    rel: \"stylesheet\",\n    key: \"google-fonts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }), __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"shadowlands tools\")), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_c2 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"_app__Content\",\n  componentId: \"sc-1u6es4k-0\"\n})([\"overflow-x:auto;\"]);\n_c3 = Content;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c2, \"App\");\n$RefreshReg$(_c3, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ1cmxQcmVmaXgiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ0aGVtZSIsInBhZ2VMb2FkZXIiLCJhc3NldFByZWZpeCIsIkNvbnRlbnQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsb0JBUVlDLGtFQUFTLGVBUnJCLENBQWpCO0FBOEJBOzs7Ozs7Ozs7OztLQTlCTUYsVzs7QUF3Q04sSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxNQUFFQyxTQUFGLFFBQUVBLFNBQUY7QUFBQSxNQUFhQyxTQUFiLFFBQWFBLFNBQWI7QUFBQSxNQUF3QkMsTUFBeEIsUUFBd0JBLE1BQXhCO0FBQUEsU0FBK0MsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUMseURBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDdkQsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEdUQsRUFFbkQsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxPQUFHLEVBQUMsa0JBQVY7QUFBNkIsU0FBSyxFQUFDLFNBQW5DO0FBQTZDLFFBQUksWUFBS0QsTUFBTSxDQUFDRSxVQUFQLEdBQW9CRixNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLFdBQXRDLEdBQW9ELEVBQXpELDBCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxXQUF0QjtBQUFrQyxTQUFLLEVBQUMsT0FBeEM7QUFBZ0QsUUFBSSxZQUFLSCxNQUFNLENBQUNFLFVBQVAsR0FBb0JGLE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQkMsV0FBdEMsR0FBb0QsRUFBekQsdUJBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFdBQXRCO0FBQWtDLFNBQUssRUFBQyxPQUF4QztBQUFnRCxRQUFJLFlBQUtILE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQkYsTUFBTSxDQUFDRSxVQUFQLENBQWtCQyxXQUF0QyxHQUFvRCxFQUF6RCx1QkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTSxPQUFHLEVBQUMsVUFBVjtBQUFxQixRQUFJLFlBQUtILE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQkYsTUFBTSxDQUFDRSxVQUFQLENBQWtCQyxXQUF0QyxHQUFvRCxFQUF6RCxzQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFDSSxRQUFJLEVBQUMsNkhBRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUdJLE9BQUcsRUFBQyxjQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVkosQ0FGbUQsRUFjbkQsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQseUZBQWVKLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBZG1ELENBQS9DO0FBQUEsQ0FBWjs7TUFBTUYsRztBQW1CU0Esa0VBQWY7QUFFQSxJQUFNTyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQWI7TUFBTUYsTyIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBQcm9wc30gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXIsIGNyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vY29tcG9uZW50cy90aGVtZVwiO1xuaW1wb3J0IHt1cmxQcmVmaXh9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxcIjtcblxuLyoqXG4gKiBVc2UgdGhlICdzdHlsZWQtY29tcG9uZW50cycgZ2xvYmFsIHN0eWxlIG1lY2hhbmlzbSB0byBzdHlsZSB0aGUgJ2JvZHknIGFuZCBkZWZhdWx0ICdfX25leHQnIGVudHJ5cG9pbnQgZGl2LlxuICpcbiAqIFNlZSBhbHNvOiBodHRwczovL3N0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjcmVhdGVnbG9iYWxzdHlsZVxuICovXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXJsUHJlZml4KGAvc3Bvb2t5LmpwZ2ApfScpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgI19fbmV4dCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB9XG4gIFxuICBhOi13ZWJraXQtYW55LWxpbmsge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5gO1xuXG4vKipcbiAqIFRoZSBhcHAgY29tcG9uZW50LlxuICpcbiAqIEJlY2F1c2UgdGhpcyBmaWxlIGlzIG5hbWVkICdfYXBwJywgdGhyb3VnaCBuZXh0anMgbWFnaWMgdGhpcyB3aWxsIGJlIHJlbmRlcmVkIGZvciBlYWNoIHBhZ2UuIFRoZSAnQ29tcG9uZW50J1xuICogY29tcG9uZW50IGlzIHRoZSBhY3R1YWwgJ3BhZ2UnIHRoYXQncyBiZWluZyByZW5kZXJlZC5cbiAqXG4gKiBAcGFyYW0gQ29tcG9uZW50IHByb3ZpZGVkIGJ5IG5leHRqcy4gVGhlICdwYWdlJyB0aGF0J3MgZ29pbmcgdG8gYmUgcmVuZGVyZWQuXG4gKiBAcGFyYW0gcGFnZVByb3BzIHByb3ZpZGVkIGJ5IG5leHRqcy4gVGhlIHByb3BzIHRvIGJlIHBhc3NlZCB0byB0aGUgcGFnZS5cbiAqIEBwYXJhbSByb3V0ZXIgcHJvdmlkZWQgYnkgbmV4dGpzLiBUaGUgbmV4dGpzIHJvdXRlci5cbiAqL1xuY29uc3QgQXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyfTogQXBwUHJvcHMpID0+ICg8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxHbG9iYWxTdHlsZS8+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9e2Ake3JvdXRlci5wYWdlTG9hZGVyID8gcm91dGVyLnBhZ2VMb2FkZXIuYXNzZXRQcmVmaXggOiAnJ30vYXBwbGUtdG91Y2gtaWNvbi5wbmdgfS8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPXtgJHtyb3V0ZXIucGFnZUxvYWRlciA/IHJvdXRlci5wYWdlTG9hZGVyLmFzc2V0UHJlZml4IDogJyd9L2Zhdmljb24tMzJ4MzIucG5nYH0vPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj17YCR7cm91dGVyLnBhZ2VMb2FkZXIgPyByb3V0ZXIucGFnZUxvYWRlci5hc3NldFByZWZpeCA6ICcnfS9mYXZpY29uLTE2eDE2LnBuZ2B9Lz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj17YCR7cm91dGVyLnBhZ2VMb2FkZXIgPyByb3V0ZXIucGFnZUxvYWRlci5hc3NldFByZWZpeCA6ICcnfS9zaXRlLndlYm1hbmlmZXN0YH0vPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDAmZmFtaWx5PVN0YWxpbmlzdCtPbmUmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICBrZXk9XCJnb29nbGUtZm9udHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5zaGFkb3dsYW5kcyB0b29sczwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ29udGVudD5cbjwvVGhlbWVQcm92aWRlcj4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIG92ZXJmbG93LXg6IGF1dG87XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})