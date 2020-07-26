webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Conduits.tsx":
/*!*****************************************!*\
  !*** ./components/widgets/Conduits.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _Conduit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Conduit */ \"./components/widgets/Conduit.tsx\");\n\n\nvar _CONDUIT_CATEGORIES,\n    _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Conduits.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar CONDUIT_CATEGORY_POTENCY = 'potency';\nvar CONDUIT_CATEGORY_ENDURANCE = 'endurance';\nvar CONDUIT_CATEGORY_FINESSE = 'finesse';\nvar CONDUIT_CATEGORIES = (_CONDUIT_CATEGORIES = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CONDUIT_CATEGORIES, CONDUIT_CATEGORY_POTENCY, {\n  name: 'Potency',\n  icon: 'inv_misc_uncutgemnormal3.jpg',\n  color: 'rgb(215, 121, 177)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CONDUIT_CATEGORIES, CONDUIT_CATEGORY_ENDURANCE, {\n  name: 'Endurance',\n  icon: 'inv_misc_uncutgemnormal2.jpg',\n  color: 'rgb(146, 246, 244)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CONDUIT_CATEGORIES, CONDUIT_CATEGORY_FINESSE, {\n  name: 'Finesse',\n  icon: 'inv_misc_uncutgemnormal5.jpg',\n  color: 'rgb(227, 227, 152)'\n}), _CONDUIT_CATEGORIES);\n\nvar Conduits = function Conduits(props) {\n  var _props$data$reduce;\n\n  var categorized = props.data.reduce(function (acc, val) {\n    if (!props.filter || val.specs.includes(props.filter)) {\n      acc[val.type].push(val);\n    }\n\n    return acc;\n  }, (_props$data$reduce = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, CONDUIT_CATEGORY_POTENCY, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, CONDUIT_CATEGORY_ENDURANCE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, CONDUIT_CATEGORY_FINESSE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, \"unknown\", []), _props$data$reduce));\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 12\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(CategoryHeader, {\n    background: '#222',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(HeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, \"Conduits\"))), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(Category, {\n    category: CONDUIT_CATEGORY_POTENCY,\n    data: categorized[CONDUIT_CATEGORY_POTENCY],\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(Category, {\n    category: CONDUIT_CATEGORY_ENDURANCE,\n    data: categorized[CONDUIT_CATEGORY_ENDURANCE],\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(Category, {\n    category: CONDUIT_CATEGORY_FINESSE,\n    data: categorized[CONDUIT_CATEGORY_FINESSE],\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Conduits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Conduits);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__Container\",\n  componentId: \"fd0ude-0\"\n})([\"background:\", \";max-width:1024px;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].color.background);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__Header\",\n  componentId: \"fd0ude-1\"\n})([\"background:#222;padding:8px;margin-top:8px;\"]);\n_c3 = Header;\nvar HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"Conduits__HeaderText\",\n  componentId: \"fd0ude-2\"\n})([\"font-family:\", \";font-size:1.75em;color:white;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].font.title);\n_c4 = HeaderText;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__Content\",\n  componentId: \"fd0ude-3\"\n})([\"padding:8px;\"]);\n_c5 = Content;\n\nvar Category = function Category(props) {\n  var category = CONDUIT_CATEGORIES[props.category];\n  return __jsx(CategoryContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 12\n    }\n  }, __jsx(CategoryHeader, {\n    background: category.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, __jsx(IconContainer, {\n    color: category.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(CategoryIcon, {\n    icon: category.icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  })), __jsx(CategoryHeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, category.name)), __jsx(CategoryContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, props.data.map(function (conduit) {\n    return __jsx(_Conduit__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: conduit.id,\n      data: conduit,\n      meta: category,\n      className: props.className,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 40\n      }\n    });\n  })));\n};\n\n_c6 = Category;\nvar CategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryContainer\",\n  componentId: \"fd0ude-4\"\n})([\"padding:8px;display:flex;flex-direction:column;\"]);\n_c7 = CategoryContainer;\nvar CategoryHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryHeader\",\n  componentId: \"fd0ude-5\"\n})([\"padding:4px;width:calc(100% - 8px);background:\", \";display:flex;align-items:center;border-radius:4px;\"], function (props) {\n  return props.background;\n});\n_c8 = CategoryHeader;\nvar CategoryHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryHeaderText\",\n  componentId: \"fd0ude-6\"\n})([\"margin-left:8px;font-family:\", \";font-size:1.75em;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].font.title);\n_c9 = CategoryHeaderText;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__IconContainer\",\n  componentId: \"fd0ude-7\"\n})([\"background-color:\", \";border-radius:10%;padding:2px;\"], function (props) {\n  return props.color;\n});\n_c10 = IconContainer;\nvar CategoryIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryIcon\",\n  componentId: \"fd0ude-8\"\n})([\"background:url('/assets/icons/\", \"');height:50px;width:50px;background-position:center;background-size:contain;background-repeat:no-repeat;border-radius:25%;\"], function (props) {\n  return props.icon;\n});\n_c11 = CategoryIcon;\nvar CategoryContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryContent\",\n  componentId: \"fd0ude-9\"\n})([\"display:flex;flex-wrap:wrap;padding:8px;\"]);\n_c12 = CategoryContent;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Conduits\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"HeaderText\");\n$RefreshReg$(_c5, \"Content\");\n$RefreshReg$(_c6, \"Category\");\n$RefreshReg$(_c7, \"CategoryContainer\");\n$RefreshReg$(_c8, \"CategoryHeader\");\n$RefreshReg$(_c9, \"CategoryHeaderText\");\n$RefreshReg$(_c10, \"IconContainer\");\n$RefreshReg$(_c11, \"CategoryIcon\");\n$RefreshReg$(_c12, \"CategoryContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ29uZHVpdHMudHN4PzY4YzQiXSwibmFtZXMiOlsiQ09ORFVJVF9DQVRFR09SWV9QT1RFTkNZIiwiQ09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0UiLCJDT05EVUlUX0NBVEVHT1JZX0ZJTkVTU0UiLCJDT05EVUlUX0NBVEVHT1JJRVMiLCJuYW1lIiwiaWNvbiIsImNvbG9yIiwiQ29uZHVpdHMiLCJwcm9wcyIsImNhdGVnb3JpemVkIiwiZGF0YSIsInJlZHVjZSIsImFjYyIsInZhbCIsImZpbHRlciIsInNwZWNzIiwiaW5jbHVkZXMiLCJ0eXBlIiwicHVzaCIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiYmFja2dyb3VuZCIsIkhlYWRlciIsIkhlYWRlclRleHQiLCJzcGFuIiwiZm9udCIsInRpdGxlIiwiQ29udGVudCIsIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJtYXAiLCJjb25kdWl0IiwiaWQiLCJDYXRlZ29yeUNvbnRhaW5lciIsIkNhdGVnb3J5SGVhZGVyIiwiQ2F0ZWdvcnlIZWFkZXJUZXh0IiwiSWNvbkNvbnRhaW5lciIsIkNhdGVnb3J5SWNvbiIsIkNhdGVnb3J5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVFBLElBQU1BLHdCQUF3QixHQUFHLFNBQWpDO0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsV0FBbkM7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUFqQztBQUVBLElBQU1DLGtCQUFrQiw2SUFDbkJILHdCQURtQixFQUNRO0FBQ3hCSSxNQUFJLEVBQUUsU0FEa0I7QUFFeEJDLE1BQUksRUFBRSw4QkFGa0I7QUFHeEJDLE9BQUssRUFBRTtBQUhpQixDQURSLGtIQU1uQkwsMEJBTm1CLEVBTVU7QUFDMUJHLE1BQUksRUFBRSxXQURvQjtBQUUxQkMsTUFBSSxFQUFFLDhCQUZvQjtBQUcxQkMs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SCxDQUFwQjtNQUFNYSxjO0FBU04sSUFBTUMsa0JBQWtCLEdBQUdqQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUVMQyw4Q0FBSyxDQUFDSyxJQUFOLENBQVdDLEtBRk4sQ0FBeEI7TUFBTVMsa0I7QUFNTixJQUFNQyxhQUFhLEdBQUdsQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUNLLFVBQUFkLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNGLEtBQVY7QUFBQSxDQURWLENBQW5CO09BQU1pQyxhO0FBTU4sSUFBTUMsWUFBWSxHQUFHbkIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzS0FDbUIsVUFBQWQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0gsSUFBVjtBQUFBLENBRHhCLENBQWxCO09BQU1tQyxZO0FBVU4sSUFBTUMsZUFBZSxHQUFHcEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnREFBckI7T0FBTW1CLGUiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dpZGdldHMvQ29uZHVpdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSwge0NsYXNzTmFtZX0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge0NvbmR1aXRUeXBlfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDb25kdWl0IGZyb20gXCIuL0NvbmR1aXRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBkYXRhOiBDb25kdWl0VHlwZVtdLFxuICAgIGZpbHRlcj86IHN0cmluZyxcbiAgICBjbGFzc05hbWU6IENsYXNzTmFtZSxcbn1cblxuY29uc3QgQ09ORFVJVF9DQVRFR09SWV9QT1RFTkNZID0gJ3BvdGVuY3knO1xuY29uc3QgQ09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0UgPSAnZW5kdXJhbmNlJztcbmNvbnN0IENPTkRVSVRfQ0FURUdPUllfRklORVNTRSA9ICdmaW5lc3NlJztcblxuY29uc3QgQ09ORFVJVF9DQVRFR09SSUVTID0ge1xuICAgIFtDT05EVUlUX0NBVEVHT1JZX1BPVEVOQ1ldOiB7XG4gICAgICAgIG5hbWU6ICdQb3RlbmN5JyxcbiAgICAgICAgaWNvbjogJ2ludl9taXNjX3VuY3V0Z2Vtbm9ybWFsMy5qcGcnLFxuICAgICAgICBjb2xvcjogJ3JnYigyMTUsIDEyMSwgMTc3KScsXG4gICAgfSxcbiAgICBbQ09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0VdOiB7XG4gICAgICAgIG5hbWU6ICdFbmR1cmFuY2UnLFxuICAgICAgICBpY29uOiAnaW52X21pc2NfdW5jdXRnZW1ub3JtYWwyLmpwZycsXG4gICAgICAgIGNvbG9yOiAncmdiKDE0NiwgMjQ2LCAyNDQpJyxcbiAgICB9LFxuICAgIFtDT05EVUlUX0NBVEVHT1JZX0ZJTkVTU0VdOiB7XG4gICAgICAgIG5hbWU6ICdGaW5lc3NlJyxcbiAgICAgICAgaWNvbjogJ2ludl9taXNjX3VuY3V0Z2Vtbm9ybWFsNS5qcGcnLFxuICAgICAgICBjb2xvcjogJ3JnYigyMjcsIDIyNywgMTUyKScsXG4gICAgfVxufVxuXG5jb25zdCBDb25kdWl0cyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZCA9IHByb3BzLmRhdGEucmVkdWNlPFJlY29yZDwncG90ZW5jeScgfCAnZW5kdXJhbmNlJyB8ICdmaW5lc3NlJyB8ICd1bmtub3duJywgQ29uZHVpdFR5cGVbXT4+KChhY2MsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIXByb3BzLmZpbHRlciB8fCB2YWwuc3BlY3MuaW5jbHVkZXMocHJvcHMuZmlsdGVyKSkge1xuICAgICAgICAgICAgYWNjW3ZhbC50eXBlXS5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICAgIFtDT05EVUlUX0NBVEVHT1JZX1BPVEVOQ1ldOiBbXSxcbiAgICAgICAgW0NPTkRVSVRfQ0FURUdPUllfRU5EVVJBTkNFXTogW10sXG4gICAgICAgIFtDT05EVUlUX0NBVEVHT1JZX0ZJTkVTU0VdOiBbXSxcbiAgICAgICAgdW5rbm93bjogW11cbiAgICB9KTtcblxuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgPENhdGVnb3J5SGVhZGVyIGJhY2tncm91bmQ9eycjMjIyJ30+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+Q29uZHVpdHM8L0hlYWRlclRleHQ+XG4gICAgICAgICAgICA8L0NhdGVnb3J5SGVhZGVyPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxDYXRlZ29yeVxuICAgICAgICAgICAgY2F0ZWdvcnk9e0NPTkRVSVRfQ0FURUdPUllfUE9URU5DWX1cbiAgICAgICAgICAgIGRhdGE9e2NhdGVnb3JpemVkW0NPTkRVSVRfQ0FURUdPUllfUE9URU5DWV19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICBjYXRlZ29yeT17Q09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0V9XG4gICAgICAgICAgICBkYXRhPXtjYXRlZ29yaXplZFtDT05EVUlUX0NBVEVHT1JZX0VORFVSQU5DRV19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICBjYXRlZ29yeT17Q09ORFVJVF9DQVRFR09SWV9GSU5FU1NFfVxuICAgICAgICAgICAgZGF0YT17Y2F0ZWdvcml6ZWRbQ09ORFVJVF9DQVRFR09SWV9GSU5FU1NFXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kdWl0cztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLnNwYW5gXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50aXRsZX07XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuYDtcblxuXG50eXBlIENhdGVnb3J5UHJvcHMgPSB7XG4gICAgY2F0ZWdvcnk6ICdwb3RlbmN5JyB8ICdlbmR1cmFuY2UnIHwgJ2ZpbmVzc2UnLFxuICAgIGRhdGE6IENvbmR1aXRUeXBlW10sXG4gICAgY2xhc3NOYW1lOiBDbGFzc05hbWUsXG59XG5cbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzOiBDYXRlZ29yeVByb3BzKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBDT05EVUlUX0NBVEVHT1JJRVNbcHJvcHMuY2F0ZWdvcnldO1xuICAgIHJldHVybiA8Q2F0ZWdvcnlDb250YWluZXI+XG4gICAgICAgIDxDYXRlZ29yeUhlYWRlciBiYWNrZ3JvdW5kPXtjYXRlZ29yeS5jb2xvcn0+XG4gICAgICAgICAgICA8SWNvbkNvbnRhaW5lciBjb2xvcj17Y2F0ZWdvcnkuY29sb3J9PlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gaWNvbj17Y2F0ZWdvcnkuaWNvbn0vPlxuICAgICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENhdGVnb3J5SGVhZGVyVGV4dD57Y2F0ZWdvcnkubmFtZX08L0NhdGVnb3J5SGVhZGVyVGV4dD5cbiAgICAgICAgPC9DYXRlZ29yeUhlYWRlcj5cbiAgICAgICAgPENhdGVnb3J5Q29udGVudD5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcChjb25kdWl0ID0+IDxDb25kdWl0XG4gICAgICAgICAgICAgICAga2V5PXtjb25kdWl0LmlkfVxuICAgICAgICAgICAgICAgIGRhdGE9e2NvbmR1aXR9XG4gICAgICAgICAgICAgICAgbWV0YT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAvPil9XG4gICAgICAgIDwvQ2F0ZWdvcnlDb250ZW50PlxuICAgIDwvQ2F0ZWdvcnlDb250YWluZXI+O1xufVxuXG5jb25zdCBDYXRlZ29yeUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IENhdGVnb3J5SGVhZGVyID0gc3R5bGVkLmRpdjx7IGJhY2tncm91bmQ6IHN0cmluZyB9PmBcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuYFxuXG5jb25zdCBDYXRlZ29yeUhlYWRlclRleHQgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50aXRsZX07XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG5gO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGNvbG9yOiBzdHJpbmcgfT5gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIHBhZGRpbmc6IDJweDtcbmA7XG5cbmNvbnN0IENhdGVnb3J5SWNvbiA9IHN0eWxlZC5kaXY8eyBpY29uOiBzdHJpbmcgfT5gXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ljb25zLyR7cHJvcHMgPT4gcHJvcHMuaWNvbn0nKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbmA7XG5cbmNvbnN0IENhdGVnb3J5Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogOHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/widgets/Conduits.tsx\n");

/***/ })

})