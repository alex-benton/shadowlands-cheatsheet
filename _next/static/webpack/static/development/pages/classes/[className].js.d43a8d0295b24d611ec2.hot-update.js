webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Conduits.tsx":
/*!*****************************************!*\
  !*** ./components/widgets/Conduits.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _Conduit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Conduit */ \"./components/widgets/Conduit.tsx\");\n/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Icon */ \"./components/common/Icon.tsx\");\n\n\nvar _CONDUIT_CATEGORIES,\n    _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Conduits.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar CONDUIT_CATEGORY_POTENCY = 'potency';\nvar CONDUIT_CATEGORY_ENDURANCE = 'endurance';\nvar CONDUIT_CATEGORY_FINESSE = 'finesse';\nvar CONDUIT_CATEGORIES = (_CONDUIT_CATEGORIES = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CONDUIT_CATEGORIES, CONDUIT_CATEGORY_POTENCY, {\n  name: 'Potency',\n  icon: 'inv_misc_uncutgemnormal3.jpg',\n  color: 'rgb(215, 121, 177)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CONDUIT_CATEGORIES, CONDUIT_CATEGORY_ENDURANCE, {\n  name: 'Endurance',\n  icon: 'inv_misc_uncutgemnormal2.jpg',\n  color: 'rgb(146, 246, 244)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_CONDUIT_CATEGORIES, CONDUIT_CATEGORY_FINESSE, {\n  name: 'Finesse',\n  icon: 'inv_misc_uncutgemnormal5.jpg',\n  color: 'rgb(227, 227, 152)'\n}), _CONDUIT_CATEGORIES);\n\nvar Conduits = function Conduits(props) {\n  var _props$data$reduce;\n\n  var categorized = props.data.reduce(function (acc, val) {\n    if (!props.filter || val.specs.includes(props.filter)) {\n      acc[val.type].push(val);\n    }\n\n    return acc;\n  }, (_props$data$reduce = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, CONDUIT_CATEGORY_POTENCY, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, CONDUIT_CATEGORY_ENDURANCE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, CONDUIT_CATEGORY_FINESSE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, \"unknown\", []), _props$data$reduce));\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 12\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(CategoryHeader, {\n    background: '#222',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: 'covenant_abilities.jpg',\n    color: '#222',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }), __jsx(HeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, \"Conduits\"))), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(Category, {\n    category: CONDUIT_CATEGORY_POTENCY,\n    data: categorized[CONDUIT_CATEGORY_POTENCY],\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(Category, {\n    category: CONDUIT_CATEGORY_ENDURANCE,\n    data: categorized[CONDUIT_CATEGORY_ENDURANCE],\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(Category, {\n    category: CONDUIT_CATEGORY_FINESSE,\n    data: categorized[CONDUIT_CATEGORY_FINESSE],\n    className: props.className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Conduits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Conduits);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__Container\",\n  componentId: \"fd0ude-0\"\n})([\"max-width:1024px;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__Header\",\n  componentId: \"fd0ude-1\"\n})([\"background:#222;padding:8px;margin-top:8px;\"]);\n_c3 = Header;\nvar HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"Conduits__HeaderText\",\n  componentId: \"fd0ude-2\"\n})([\"margin-left:8px;font-family:\", \";font-size:1.75em;color:white;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].font.title);\n_c4 = HeaderText;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__Content\",\n  componentId: \"fd0ude-3\"\n})([\"padding:8px;\"]);\n_c5 = Content;\n\nvar Category = function Category(props) {\n  var category = CONDUIT_CATEGORIES[props.category];\n  return __jsx(CategoryContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 12\n    }\n  }, __jsx(CategoryHeader, {\n    background: category.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, __jsx(IconContainer, {\n    color: category.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(CategoryIcon, {\n    icon: category.icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  })), __jsx(CategoryHeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, category.name)), __jsx(CategoryContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, props.data.map(function (conduit) {\n    return __jsx(_Conduit__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: conduit.id,\n      data: conduit,\n      meta: category,\n      className: props.className,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 40\n      }\n    });\n  })));\n};\n\n_c6 = Category;\nvar CategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryContainer\",\n  componentId: \"fd0ude-4\"\n})([\"padding:8px;display:flex;flex-direction:column;background:\", \";margin-bottom:8px;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].color.background);\n_c7 = CategoryContainer;\nvar CategoryHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryHeader\",\n  componentId: \"fd0ude-5\"\n})([\"padding:4px;width:calc(100% - 8px);background:\", \";display:flex;align-items:center;border-radius:4px;\"], function (props) {\n  return props.background;\n});\n_c8 = CategoryHeader;\nvar CategoryHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryHeaderText\",\n  componentId: \"fd0ude-6\"\n})([\"margin-left:8px;font-family:\", \";font-size:1.75em;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].font.title);\n_c9 = CategoryHeaderText;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__IconContainer\",\n  componentId: \"fd0ude-7\"\n})([\"background-color:\", \";border-radius:10%;padding:2px;\"], function (props) {\n  return props.color;\n});\n_c10 = IconContainer;\nvar CategoryIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryIcon\",\n  componentId: \"fd0ude-8\"\n})([\"background:url('/assets/icons/\", \"');height:50px;width:50px;background-position:center;background-size:contain;background-repeat:no-repeat;border-radius:25%;\"], function (props) {\n  return props.icon;\n});\n_c11 = CategoryIcon;\nvar CategoryContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Conduits__CategoryContent\",\n  componentId: \"fd0ude-9\"\n})([\"display:flex;flex-wrap:wrap;padding:8px;\"]);\n_c12 = CategoryContent;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Conduits\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"HeaderText\");\n$RefreshReg$(_c5, \"Content\");\n$RefreshReg$(_c6, \"Category\");\n$RefreshReg$(_c7, \"CategoryContainer\");\n$RefreshReg$(_c8, \"CategoryHeader\");\n$RefreshReg$(_c9, \"CategoryHeaderText\");\n$RefreshReg$(_c10, \"IconContainer\");\n$RefreshReg$(_c11, \"CategoryIcon\");\n$RefreshReg$(_c12, \"CategoryContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ29uZHVpdHMudHN4PzY4YzQiXSwibmFtZXMiOlsiQ09ORFVJVF9DQVRFR09SWV9QT1RFTkNZIiwiQ09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0UiLCJDT05EVUlUX0NBVEVHT1JZX0ZJTkVTU0UiLCJDT05EVUlUX0NBVEVHT1JJRVMiLCJuYW1lIiwiaWNvbiIsImNvbG9yIiwiQ29uZHVpdHMiLCJwcm9wcyIsImNhdGVnb3JpemVkIiwiZGF0YSIsInJlZHVjZSIsImFjYyIsInZhbCIsImZpbHRlciIsInNwZWNzIiwiaW5jbHVkZXMiLCJ0eXBlIiwicHVzaCIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsIkhlYWRlclRleHQiLCJzcGFuIiwidGhlbWUiLCJmb250IiwidGl0bGUiLCJDb250ZW50IiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIm1hcCIsImNvbmR1aXQiLCJpZCIsIkNhdGVnb3J5Q29udGFpbmVyIiwiYmFja2dyb3VuZCIsIkNhdGVnb3J5SGVhZGVyIiwiQ2F0ZWdvcnlIZWFkZXJUZXh0IiwiSWNvbkNvbnRhaW5lciIsIkNhdGVnb3J5SWNvbiIsIkNhdGVnb3J5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBLElBQU1BLHdCQUF3QixHQUFHLFNBQWpDO0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsV0FBbkM7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUFqQztBQUVBLElBQU1DLGtCQUFrQiw2SUFDbkJILHdCQURtQixFQUNRO0FBQ3hCSSxNQUFJLEVBQUUsU0FEa0I7QUFFeEJDLE1BQUksRUFBRSw4QkFGa0I7QUFHeEJDLE9BQUssRUFBRTtBQUhpQixDQURSLGtIQU1uQkwsMEJBTm1CLEVBTVU7QUFDMUJHLE1BQUksRUFBRSxXQURvQjtBQUUxQkMsTUFBSSxFQUFFLDhCQUZvQjtBQUcxQkMsT0FBSyxFQUFFO0FBSG1CLENBTlYsa0hBV25CSix3QkFYbUIsRUFXUTtBQUN4QkUsTUFBSSxFQUFFLFNBRGtCO0FBRXhCQyxNQUFJLEVBQUUsOEJBRmtCO0FBR3hCQyxPQUFLLEVBQUU7QUFIaUIsQ0FYUix1QkFBeEI7O0FBa0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFDL0IsTUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsTUFBWCxDQUEwRixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN4SCxRQUFJLENBQUNMLEtBQUssQ0FBQ00sTUFBUCxJQUFpQkQsR0FBRyxDQUFDRSxLQUFKLENBQVVDLFFBQVYsQ0FBbUJSLEtBQUssQ0FBQ00sTUFBekIsQ0FBckIsRUFBdUQ7QUFDbkRGLFNBQUcsQ0FBQ0MsR0FBRyxDQUFDSSxJQUFMLENBQUgsQ0FBY0MsSUFBZCxDQUFtQkwsR0FBbkI7QUFDSDs7QUFDRCxXQUFPRCxHQUFQO0FBQ0gsR0FMbUIsMElBTWZaLHdCQU5lLEVBTVksRUFOWixpSEFPZkMsMEJBUGUsRUFPYyxFQVBkLGlIQVFmQyx3QkFSZSxFQVFZLEVBUlosNEhBU1AsRUFUTyx1QkFBcEI7QUFZQSxTQUFPLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGNBQUQ7QUFBZ0IsY0FBVSxFQUFFLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFFLHdCQUFaO0FBQXNDLFNBQUssRUFBRSxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLENBREcsRUFPSCxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsUUFBRDtBQUNJLFlBQVEsRUFBRUYsd0JBRGQ7QUFFSSxRQUFJLEVBQUVTLFdBQVcsQ0FBQ1Qsd0JBQUQsQ0FGckI7QUFHSSxhQUFTLEVBQUVRLEtBQUssQ0FBQ1csU0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBTUEsTUFBQyxRQUFEO0FBQ0ksWUFBUSxFQUFFbEIsMEJBRGQ7QUFFSSxRQUFJLEVBQUVRLFdBQVcsQ0FBQ1IsMEJBQUQsQ0FGckI7QUFHSSxhQUFTLEVBQUVPLEtBQUssQ0FBQ1csU0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5BLEVBV0EsTUFBQyxRQUFEO0FBQ0ksWUFBUSxFQUFFakIsd0JBRGQ7QUFFSSxRQUFJLEVBQUVPLFdBQVcsQ0FBQ1Asd0JBQUQsQ0FGckI7QUFHSSxhQUFTLEVBQUVNLEtBQUssQ0FBQ1csU0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhBLENBUEcsQ0FBUDtBQXlCSCxDQXRDRDs7S0FBTVosUTtBQXdDU0EsdUVBQWY7QUFFQSxJQUFNYSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUJBQWY7TUFBTUYsUztBQUlOLElBQU1HLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtREFBWjtNQUFNQyxNO0FBTU4sSUFBTUMsVUFBVSxHQUFHSCx5REFBTSxDQUFDSSxJQUFWO0FBQUE7QUFBQTtBQUFBLHVFQUVHQyw4Q0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBRmQsQ0FBaEI7TUFBTUosVTtBQU9OLElBQU1LLE9BQU8sR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvQkFBYjtNQUFNTyxPOztBQVdOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUN0QixLQUFELEVBQTBCO0FBQ3ZDLE1BQU11QixRQUFRLEdBQUc1QixrQkFBa0IsQ0FBQ0ssS0FBSyxDQUFDdUIsUUFBUCxDQUFuQztBQUNBLFNBQU8sTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxjQUFEO0FBQWdCLGNBQVUsRUFBRUEsUUFBUSxDQUFDekIsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsYUFBRDtBQUFlLFNBQUssRUFBRXlCLFFBQVEsQ0FBQ3pCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUV5QixRQUFRLENBQUMxQixJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQjBCLFFBQVEsQ0FBQzNCLElBQTlCLENBSkosQ0FERyxFQU9ILE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tJLEtBQUssQ0FBQ0UsSUFBTixDQUFXc0IsR0FBWCxDQUFlLFVBQUFDLE9BQU87QUFBQSxXQUFJLE1BQUMsZ0RBQUQ7QUFDdkIsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEVBRFU7QUFFdkIsVUFBSSxFQUFFRCxPQUZpQjtBQUd2QixVQUFJLEVBQUVGLFFBSGlCO0FBSXZCLGVBQVMsRUFBRXZCLEtBQUssQ0FBQ1csU0FKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUF0QixDQURMLENBUEcsQ0FBUDtBQWdCSCxDQWxCRDs7TUFBTVcsUTtBQW9CTixJQUFNSyxpQkFBaUIsR0FBR2QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwRkFJTEksOENBQUssQ0FBQ3BCLEtBQU4sQ0FBWThCLFVBSlAsQ0FBdkI7TUFBTUQsaUI7QUFTTixJQUFNRSxjQUFjLEdBQUdoQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhHQUdGLFVBQUFkLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUM0QixVQUFWO0FBQUEsQ0FISCxDQUFwQjtNQUFNQyxjO0FBU04sSUFBTUMsa0JBQWtCLEdBQUdqQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUVMSSw4Q0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBRk4sQ0FBeEI7TUFBTVUsa0I7QUFNTixJQUFNQyxhQUFhLEdBQUdsQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUNLLFVBQUFkLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNGLEtBQVY7QUFBQSxDQURWLENBQW5CO09BQU1pQyxhO0FBTU4sSUFBTUMsWUFBWSxHQUFHbkIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzS0FDbUIsVUFBQWQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0gsSUFBVjtBQUFBLENBRHhCLENBQWxCO09BQU1tQyxZO0FBVU4sSUFBTUMsZUFBZSxHQUFHcEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnREFBckI7T0FBTW1CLGUiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dpZGdldHMvQ29uZHVpdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSwge0NsYXNzTmFtZX0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge0NvbmR1aXRUeXBlfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBDb25kdWl0IGZyb20gXCIuL0NvbmR1aXRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9jb21tb24vSWNvblwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGRhdGE6IENvbmR1aXRUeXBlW10sXG4gICAgZmlsdGVyPzogc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogQ2xhc3NOYW1lLFxufVxuXG5jb25zdCBDT05EVUlUX0NBVEVHT1JZX1BPVEVOQ1kgPSAncG90ZW5jeSc7XG5jb25zdCBDT05EVUlUX0NBVEVHT1JZX0VORFVSQU5DRSA9ICdlbmR1cmFuY2UnO1xuY29uc3QgQ09ORFVJVF9DQVRFR09SWV9GSU5FU1NFID0gJ2ZpbmVzc2UnO1xuXG5jb25zdCBDT05EVUlUX0NBVEVHT1JJRVMgPSB7XG4gICAgW0NPTkRVSVRfQ0FURUdPUllfUE9URU5DWV06IHtcbiAgICAgICAgbmFtZTogJ1BvdGVuY3knLFxuICAgICAgICBpY29uOiAnaW52X21pc2NfdW5jdXRnZW1ub3JtYWwzLmpwZycsXG4gICAgICAgIGNvbG9yOiAncmdiKDIxNSwgMTIxLCAxNzcpJyxcbiAgICB9LFxuICAgIFtDT05EVUlUX0NBVEVHT1JZX0VORFVSQU5DRV06IHtcbiAgICAgICAgbmFtZTogJ0VuZHVyYW5jZScsXG4gICAgICAgIGljb246ICdpbnZfbWlzY191bmN1dGdlbW5vcm1hbDIuanBnJyxcbiAgICAgICAgY29sb3I6ICdyZ2IoMTQ2LCAyNDYsIDI0NCknLFxuICAgIH0sXG4gICAgW0NPTkRVSVRfQ0FURUdPUllfRklORVNTRV06IHtcbiAgICAgICAgbmFtZTogJ0ZpbmVzc2UnLFxuICAgICAgICBpY29uOiAnaW52X21pc2NfdW5jdXRnZW1ub3JtYWw1LmpwZycsXG4gICAgICAgIGNvbG9yOiAncmdiKDIyNywgMjI3LCAxNTIpJyxcbiAgICB9XG59XG5cbmNvbnN0IENvbmR1aXRzID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpemVkID0gcHJvcHMuZGF0YS5yZWR1Y2U8UmVjb3JkPCdwb3RlbmN5JyB8ICdlbmR1cmFuY2UnIHwgJ2ZpbmVzc2UnIHwgJ3Vua25vd24nLCBDb25kdWl0VHlwZVtdPj4oKGFjYywgdmFsKSA9PiB7XG4gICAgICAgIGlmICghcHJvcHMuZmlsdGVyIHx8IHZhbC5zcGVjcy5pbmNsdWRlcyhwcm9wcy5maWx0ZXIpKSB7XG4gICAgICAgICAgICBhY2NbdmFsLnR5cGVdLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgICAgW0NPTkRVSVRfQ0FURUdPUllfUE9URU5DWV06IFtdLFxuICAgICAgICBbQ09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0VdOiBbXSxcbiAgICAgICAgW0NPTkRVSVRfQ0FURUdPUllfRklORVNTRV06IFtdLFxuICAgICAgICB1bmtub3duOiBbXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8Q2F0ZWdvcnlIZWFkZXIgYmFja2dyb3VuZD17JyMyMjInfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXsnY292ZW5hbnRfYWJpbGl0aWVzLmpwZyd9IGNvbG9yPXsnIzIyMid9IC8+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+Q29uZHVpdHM8L0hlYWRlclRleHQ+XG4gICAgICAgICAgICA8L0NhdGVnb3J5SGVhZGVyPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxDYXRlZ29yeVxuICAgICAgICAgICAgY2F0ZWdvcnk9e0NPTkRVSVRfQ0FURUdPUllfUE9URU5DWX1cbiAgICAgICAgICAgIGRhdGE9e2NhdGVnb3JpemVkW0NPTkRVSVRfQ0FURUdPUllfUE9URU5DWV19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICBjYXRlZ29yeT17Q09ORFVJVF9DQVRFR09SWV9FTkRVUkFOQ0V9XG4gICAgICAgICAgICBkYXRhPXtjYXRlZ29yaXplZFtDT05EVUlUX0NBVEVHT1JZX0VORFVSQU5DRV19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICBjYXRlZ29yeT17Q09ORFVJVF9DQVRFR09SWV9GSU5FU1NFfVxuICAgICAgICAgICAgZGF0YT17Y2F0ZWdvcml6ZWRbQ09ORFVJVF9DQVRFR09SWV9GSU5FU1NFXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kdWl0cztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuYDtcblxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5zcGFuYFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50aXRsZX07XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuYDtcblxuXG50eXBlIENhdGVnb3J5UHJvcHMgPSB7XG4gICAgY2F0ZWdvcnk6ICdwb3RlbmN5JyB8ICdlbmR1cmFuY2UnIHwgJ2ZpbmVzc2UnLFxuICAgIGRhdGE6IENvbmR1aXRUeXBlW10sXG4gICAgY2xhc3NOYW1lOiBDbGFzc05hbWUsXG59XG5cbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzOiBDYXRlZ29yeVByb3BzKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBDT05EVUlUX0NBVEVHT1JJRVNbcHJvcHMuY2F0ZWdvcnldO1xuICAgIHJldHVybiA8Q2F0ZWdvcnlDb250YWluZXI+XG4gICAgICAgIDxDYXRlZ29yeUhlYWRlciBiYWNrZ3JvdW5kPXtjYXRlZ29yeS5jb2xvcn0+XG4gICAgICAgICAgICA8SWNvbkNvbnRhaW5lciBjb2xvcj17Y2F0ZWdvcnkuY29sb3J9PlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gaWNvbj17Y2F0ZWdvcnkuaWNvbn0vPlxuICAgICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENhdGVnb3J5SGVhZGVyVGV4dD57Y2F0ZWdvcnkubmFtZX08L0NhdGVnb3J5SGVhZGVyVGV4dD5cbiAgICAgICAgPC9DYXRlZ29yeUhlYWRlcj5cbiAgICAgICAgPENhdGVnb3J5Q29udGVudD5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcChjb25kdWl0ID0+IDxDb25kdWl0XG4gICAgICAgICAgICAgICAga2V5PXtjb25kdWl0LmlkfVxuICAgICAgICAgICAgICAgIGRhdGE9e2NvbmR1aXR9XG4gICAgICAgICAgICAgICAgbWV0YT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAvPil9XG4gICAgICAgIDwvQ2F0ZWdvcnlDb250ZW50PlxuICAgIDwvQ2F0ZWdvcnlDb250YWluZXI+O1xufVxuXG5jb25zdCBDYXRlZ29yeUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuYDtcblxuY29uc3QgQ2F0ZWdvcnlIZWFkZXIgPSBzdHlsZWQuZGl2PHsgYmFja2dyb3VuZDogc3RyaW5nIH0+YFxuICAgIHBhZGRpbmc6IDRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmJhY2tncm91bmR9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5gXG5cbmNvbnN0IENhdGVnb3J5SGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LnRpdGxlfTtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbmA7XG5cbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgcGFkZGluZzogMnB4O1xuYDtcblxuY29uc3QgQ2F0ZWdvcnlJY29uID0gc3R5bGVkLmRpdjx7IGljb246IHN0cmluZyB9PmBcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaWNvbnMvJHtwcm9wcyA9PiBwcm9wcy5pY29ufScpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuYDtcblxuY29uc3QgQ2F0ZWdvcnlDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiA4cHg7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/widgets/Conduits.tsx\n");

/***/ })

})