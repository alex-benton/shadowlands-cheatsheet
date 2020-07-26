webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Legendaries.tsx":
/*!********************************************!*\
  !*** ./components/widgets/Legendaries.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _Legendary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Legendary */ \"./components/widgets/Legendary.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Legendaries.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// inv_artifact_xp02\n\n\n\n\nvar COLOR_LEGENDARY = '#ff8000';\n\nvar Legendaries = function Legendaries(props) {\n  var legendaries = props.data;\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 12\n    }\n  }, __jsx(Header, {\n    background: COLOR_LEGENDARY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(IconContainer, {\n    color: COLOR_LEGENDARY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(HeaderIcon, {\n    icon: 'inv_artifact_xp02.jpg',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })), __jsx(HeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Legendaries\")), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, legendaries.map(function (legendary) {\n    return __jsx(_Legendary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: legendary.id,\n      data: legendary,\n      className: props.className,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 43\n      }\n    });\n  })));\n};\n\n_c = Legendaries;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Legendaries);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Legendaries__Container\",\n  componentId: \"sc-11nlcz9-0\"\n})([\"max-width:1024px;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Legendaries__Header\",\n  componentId: \"sc-11nlcz9-1\"\n})([\"padding:4px;width:calc(100% - 8px);background:\", \";display:flex;align-items:center;border-radius:4px;\"], function (props) {\n  return props.background;\n});\n_c3 = Header;\nvar HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Legendaries__HeaderText\",\n  componentId: \"sc-11nlcz9-2\"\n})([\"margin-left:8px;font-family:\", \";font-size:1.75em;\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].font.title);\n_c4 = HeaderText;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Legendaries__IconContainer\",\n  componentId: \"sc-11nlcz9-3\"\n})([\"background-color:\", \";border-radius:10%;padding:2px;\"], function (props) {\n  return props.color;\n});\n_c5 = IconContainer;\nvar HeaderIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Legendaries__HeaderIcon\",\n  componentId: \"sc-11nlcz9-4\"\n})([\"background:url('/assets/icons/\", \"');height:50px;width:50px;background-position:center;background-size:contain;background-repeat:no-repeat;border-radius:25%;\"], function (props) {\n  return props.icon;\n});\n_c6 = HeaderIcon;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Legendaries__Content\",\n  componentId: \"sc-11nlcz9-5\"\n})([\"display:flex;padding:8px;flex-direction:column;background:\", \";\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.background);\n_c7 = Content;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Legendaries\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"HeaderText\");\n$RefreshReg$(_c5, \"IconContainer\");\n$RefreshReg$(_c6, \"HeaderIcon\");\n$RefreshReg$(_c7, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvTGVnZW5kYXJpZXMudHN4Pzg0ZTgiXSwibmFtZXMiOlsiQ09MT1JfTEVHRU5EQVJZIiwiTGVnZW5kYXJpZXMiLCJwcm9wcyIsImxlZ2VuZGFyaWVzIiwiZGF0YSIsIm1hcCIsImxlZ2VuZGFyeSIsImlkIiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyIiwiYmFja2dyb3VuZCIsIkhlYWRlclRleHQiLCJ0aGVtZSIsImZvbnQiLCJ0aXRsZSIsIkljb25Db250YWluZXIiLCJjb2xvciIsIkhlYWRlckljb24iLCJpY29uIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBeEI7O0FBT0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFrQjtBQUNsQyxNQUFNQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsSUFBMUI7QUFDQSxTQUFPLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxNQUFEO0FBQVEsY0FBVSxFQUFFSixlQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxhQUFEO0FBQWUsU0FBSyxFQUFFQSxlQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFFLHVCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLENBREcsRUFPSCxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRyxXQUFXLENBQUNFLEdBQVosQ0FBZ0IsVUFBQUMsU0FBUztBQUFBLFdBQUksTUFBQyxrREFBRDtBQUMxQixTQUFHLEVBQUVBLFNBQVMsQ0FBQ0MsRUFEVztBQUUxQixVQUFJLEVBQUVELFNBRm9CO0FBRzFCLGVBQVMsRUFBRUosS0FBSyxDQUFDTSxTQUhTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSjtBQUFBLEdBQXpCLENBREwsQ0FQRyxDQUFQO0FBZUgsQ0FqQkQ7O0tBQU1QLFc7QUFtQlNBLDBFQUFmO0FBR0EsSUFBTVEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlCQUFmO01BQU1GLFM7QUFLTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEdBR00sVUFBQVQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1csVUFBVjtBQUFBLENBSFgsQ0FBWjtNQUFNRCxNO0FBU04sSUFBTUUsVUFBVSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUVHSSw4Q0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBRmQsQ0FBaEI7TUFBTUgsVTtBQU1OLElBQU1JLGFBQWEsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2REFDSyxVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDaUIsS0FBVjtBQUFBLENBRFYsQ0FBbkI7TUFBTUQsYTtBQU1OLElBQU1FLFVBQVUsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzS0FDcUIsVUFBQVQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ21CLElBQVY7QUFBQSxDQUQxQixDQUFoQjtNQUFNRCxVO0FBV04sSUFBTUUsT0FBTyxHQUFHWix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUlLSSw4Q0FBSyxDQUFDSSxLQUFOLENBQVlOLFVBSmpCLENBQWI7TUFBTVMsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvd2lkZ2V0cy9MZWdlbmRhcmllcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbnZfYXJ0aWZhY3RfeHAwMlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSwge0NsYXNzTmFtZX0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge0xlZ2VuZGFyeVR5cGV9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IExlZ2VuZGFyeSBmcm9tIFwiLi9MZWdlbmRhcnlcIjtcblxuY29uc3QgQ09MT1JfTEVHRU5EQVJZID0gJyNmZjgwMDAnO1xudHlwZSBQcm9wcyA9IHtcbiAgICBkYXRhOiBMZWdlbmRhcnlUeXBlW10sXG4gICAgZmlsdGVyPzogc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogQ2xhc3NOYW1lLFxufVxuXG5jb25zdCBMZWdlbmRhcmllcyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBsZWdlbmRhcmllcyA9IHByb3BzLmRhdGE7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgYmFja2dyb3VuZD17Q09MT1JfTEVHRU5EQVJZfT5cbiAgICAgICAgICAgIDxJY29uQ29udGFpbmVyIGNvbG9yPXtDT0xPUl9MRUdFTkRBUll9PlxuICAgICAgICAgICAgICAgIDxIZWFkZXJJY29uIGljb249eydpbnZfYXJ0aWZhY3RfeHAwMi5qcGcnfS8+XG4gICAgICAgICAgICA8L0ljb25Db250YWluZXI+XG4gICAgICAgICAgICA8SGVhZGVyVGV4dD5MZWdlbmRhcmllczwvSGVhZGVyVGV4dD5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAge2xlZ2VuZGFyaWVzLm1hcChsZWdlbmRhcnkgPT4gPExlZ2VuZGFyeVxuICAgICAgICAgICAgICAgIGtleT17bGVnZW5kYXJ5LmlkfVxuICAgICAgICAgICAgICAgIGRhdGE9e2xlZ2VuZGFyeX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIC8+KX1cbiAgICAgICAgPC9Db250ZW50PlxuICAgIDwvQ29udGFpbmVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWdlbmRhcmllcztcblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xuYDtcblxuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2PHsgYmFja2dyb3VuZDogc3RyaW5nIH0+YFxuICAgIHBhZGRpbmc6IDRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmJhY2tncm91bmR9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5gXG5cbmNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50aXRsZX07XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG5gO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGNvbG9yOiBzdHJpbmcgfT5gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIHBhZGRpbmc6IDJweDtcbmA7XG5cbmNvbnN0IEhlYWRlckljb24gPSBzdHlsZWQuZGl2PHsgaWNvbjogc3RyaW5nIH0+YFxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pY29ucy8ke3Byb3BzID0+IHByb3BzLmljb259Jyk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG5gO1xuXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/widgets/Legendaries.tsx\n");

/***/ })

})