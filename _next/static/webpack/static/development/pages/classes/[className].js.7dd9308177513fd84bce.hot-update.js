webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Covenants.tsx":
/*!******************************************!*\
  !*** ./components/widgets/Covenants.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./components/constants.ts\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Icon */ \"./components/common/Icon.tsx\");\n/* harmony import */ var _Covenant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Covenant */ \"./components/widgets/Covenant.tsx\");\n\n\nvar _COVENANTS,\n    _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Covenants.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar COVENANT_CATEGORY_SIGNATURE = 'signature';\nvar COVENANT_CATEGORY_COMBAT = 'combat';\nvar COVENANTS = (_COVENANTS = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANTS, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_NIGHTFAE\"], {\n  name: 'Night Fae',\n  color: 'rgb(120 197 255)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANTS, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_VENTHYR\"], {\n  name: 'Venthyr',\n  color: 'rgb(234 125 125)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANTS, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_NECROLORD\"], {\n  name: 'Necrolord',\n  color: 'rgb(193 145 228)'\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANTS, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_KYRIAN\"], {\n  name: 'Kyrian',\n  color: 'rgb(173 137 86)'\n}), _COVENANTS);\n\nvar Covenants = function Covenants(props) {\n  var _COVENANT_KYRIAN, _COVENANT_VENTHYR, _COVENANT_NECROLORD, _COVENANT_NIGHTFAE, _props$data$reduce;\n\n  var categorized = props.data.reduce(function (acc, val) {\n    acc[val.covenant][val.type].push(val);\n    return acc;\n  }, (_props$data$reduce = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_KYRIAN\"], (_COVENANT_KYRIAN = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_KYRIAN, COVENANT_CATEGORY_SIGNATURE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_KYRIAN, COVENANT_CATEGORY_COMBAT, []), _COVENANT_KYRIAN)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_VENTHYR\"], (_COVENANT_VENTHYR = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_VENTHYR, COVENANT_CATEGORY_SIGNATURE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_VENTHYR, COVENANT_CATEGORY_COMBAT, []), _COVENANT_VENTHYR)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_NECROLORD\"], (_COVENANT_NECROLORD = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_NECROLORD, COVENANT_CATEGORY_SIGNATURE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_NECROLORD, COVENANT_CATEGORY_COMBAT, []), _COVENANT_NECROLORD)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_props$data$reduce, _constants__WEBPACK_IMPORTED_MODULE_4__[\"COVENANT_NIGHTFAE\"], (_COVENANT_NIGHTFAE = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_NIGHTFAE, COVENANT_CATEGORY_SIGNATURE, []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_COVENANT_NIGHTFAE, COVENANT_CATEGORY_COMBAT, []), _COVENANT_NIGHTFAE)), _props$data$reduce));\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 12\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(CategoryHeader, {\n    background: '#222',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    icon: 'covenant_abilities.jpg',\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }), __jsx(HeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"Covenant abilities\"))), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_5__[\"map\"])(categorized, function (abilities, name) {\n    return __jsx(Category, {\n      key: name,\n      covenant: name,\n      abilities: abilities,\n      wowClassName: props.className,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 66\n      }\n    });\n  })));\n};\n\n_c = Covenants;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Covenants);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__Container\",\n  componentId: \"sc-1lcrf08-0\"\n})([\"max-width:1024px;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__Header\",\n  componentId: \"sc-1lcrf08-1\"\n})([\"margin-top:8px;\"]);\n_c3 = Header;\nvar HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__HeaderText\",\n  componentId: \"sc-1lcrf08-2\"\n})([\"margin-left:8px;font-family:\", \";font-size:1.75em;color:white;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].font.title);\n_c4 = HeaderText;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__Content\",\n  componentId: \"sc-1lcrf08-3\"\n})([\"padding:8px;\"]);\n_c5 = Content;\n\nvar Category = function Category(props) {\n  var category = COVENANTS[props.covenant];\n  return __jsx(CategoryContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 12\n    }\n  }, __jsx(CategoryHeader, {\n    background: category.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    covenantName: props.covenant,\n    color: category.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }), __jsx(CategoryHeaderText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, category.name)), __jsx(CategoryContent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, props.abilities.signature.map(function (ability) {\n    return __jsx(_Covenant__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      color: category.color,\n      key: ability.id,\n      data: ability,\n      wowClassName: props.wowClassName,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 55\n      }\n    });\n  }), props.abilities.combat.map(function (ability) {\n    return __jsx(_Covenant__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      color: category.color,\n      key: ability.id,\n      data: ability,\n      wowClassName: props.wowClassName,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 52\n      }\n    });\n  })));\n};\n\n_c6 = Category;\nvar CategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__CategoryContainer\",\n  componentId: \"sc-1lcrf08-4\"\n})([\"background:\", \";padding:8px;display:flex;flex-direction:column;margin-bottom:8px;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].color.background);\n_c7 = CategoryContainer;\nvar CategoryHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__CategoryHeader\",\n  componentId: \"sc-1lcrf08-5\"\n})([\"color:#222;padding:4px;width:calc(100% - 8px);background:\", \";display:flex;align-items:center;border-radius:4px;\"], function (props) {\n  return props.background;\n});\n_c8 = CategoryHeader;\nvar CategoryHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__CategoryHeaderText\",\n  componentId: \"sc-1lcrf08-6\"\n})([\"margin-left:8px;font-family:\", \";font-size:1.75em;\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].font.title);\n_c9 = CategoryHeaderText;\nvar CategoryContent = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Covenants__CategoryContent\",\n  componentId: \"sc-1lcrf08-7\"\n})([\"display:flex;flex-wrap:wrap;padding:8px;\"]);\n_c10 = CategoryContent;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"Covenants\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"HeaderText\");\n$RefreshReg$(_c5, \"Content\");\n$RefreshReg$(_c6, \"Category\");\n$RefreshReg$(_c7, \"CategoryContainer\");\n$RefreshReg$(_c8, \"CategoryHeader\");\n$RefreshReg$(_c9, \"CategoryHeaderText\");\n$RefreshReg$(_c10, \"CategoryContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ292ZW5hbnRzLnRzeD81YzEyIl0sIm5hbWVzIjpbIkNPVkVOQU5UX0NBVEVHT1JZX1NJR05BVFVSRSIsIkNPVkVOQU5UX0NBVEVHT1JZX0NPTUJBVCIsIkNPVkVOQU5UUyIsIkNPVkVOQU5UX05JR0hURkFFIiwibmFtZSIsImNvbG9yIiwiQ09WRU5BTlRfVkVOVEhZUiIsIkNPVkVOQU5UX05FQ1JPTE9SRCIsIkNPVkVOQU5UX0tZUklBTiIsIkNvdmVuYW50cyIsInByb3BzIiwiY2F0ZWdvcml6ZWQiLCJkYXRhIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiY292ZW5hbnQiLCJ0eXBlIiwicHVzaCIsIm1hcCIsImFiaWxpdGllcyIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsIkhlYWRlclRleHQiLCJ0aGVtZSIsImZvbnQiLCJ0aXRsZSIsIkNvbnRlbnQiLCJDYXRlZ29yeSIsImNhdGVnb3J5Iiwic2lnbmF0dXJlIiwiYWJpbGl0eSIsImlkIiwid293Q2xhc3NOYW1lIiwiY29tYmF0IiwiQ2F0ZWdvcnlDb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiQ2F0ZWdvcnlIZWFkZXIiLCJDYXRlZ29yeUhlYWRlclRleHQiLCJDYXRlZ29yeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsMkJBQTJCLEdBQUcsV0FBcEM7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRyxRQUFqQztBQUVBLElBQU1DLFNBQVMsMkhBQ1ZDLDREQURVLEVBQ1U7QUFDakJDLE1BQUksRUFBRSxXQURXO0FBRWpCQyxPQUFLLEVBQUU7QUFGVSxDQURWLHlHQUtWQywyREFMVSxFQUtTO0FBQ2hCRixNQUFJLEVBQUUsU0FEVTtBQUVoQkMsT0FBSyxFQUFFO0FBRlMsQ0FMVCx5R0FTVkUsNkRBVFUsRUFT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OztNQUFNTCxRO0FBd0JOLElBQU1PLGlCQUFpQixHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBGQUNMRyw4Q0FBSyxDQUFDdEIsS0FBTixDQUFZa0MsVUFEUCxDQUF2QjtNQUFNRCxpQjtBQVFOLElBQU1FLGNBQWMsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUhBSUYsVUFBQWQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQzZCLFVBQVY7QUFBQSxDQUpILENBQXBCO01BQU1DLGM7QUFVTixJQUFNQyxrQkFBa0IsR0FBR2xCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkRBRUxHLDhDQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FGTixDQUF4QjtNQUFNWSxrQjtBQU1OLElBQU1DLGVBQWUsR0FBR25CLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0RBQXJCO09BQU1rQixlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93aWRnZXRzL0NvdmVuYW50cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lLCB7Q2xhc3NOYW1lLCBDb3ZlbmFudE5hbWV9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHtDb3ZlbmFudEFiaWxpdHlUeXBlfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7Q09WRU5BTlRfS1lSSUFOLCBDT1ZFTkFOVF9ORUNST0xPUkQsIENPVkVOQU5UX05JR0hURkFFLCBDT1ZFTkFOVF9WRU5USFlSfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge21hcH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL2NvbW1vbi9JY29uXCI7XG5pbXBvcnQgQ292ZW5hbnQgZnJvbSBcIi4vQ292ZW5hbnRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBkYXRhOiBDb3ZlbmFudEFiaWxpdHlUeXBlW10sXG4gICAgZmlsdGVyPzogc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogQ2xhc3NOYW1lLFxufVxuXG5jb25zdCBDT1ZFTkFOVF9DQVRFR09SWV9TSUdOQVRVUkUgPSAnc2lnbmF0dXJlJztcbmNvbnN0IENPVkVOQU5UX0NBVEVHT1JZX0NPTUJBVCA9ICdjb21iYXQnO1xuXG5jb25zdCBDT1ZFTkFOVFMgPSB7XG4gICAgW0NPVkVOQU5UX05JR0hURkFFXToge1xuICAgICAgICBuYW1lOiAnTmlnaHQgRmFlJyxcbiAgICAgICAgY29sb3I6ICdyZ2IoMTIwIDE5NyAyNTUpJ1xuICAgIH0sXG4gICAgW0NPVkVOQU5UX1ZFTlRIWVJdOiB7XG4gICAgICAgIG5hbWU6ICdWZW50aHlyJyxcbiAgICAgICAgY29sb3I6ICdyZ2IoMjM0IDEyNSAxMjUpJ1xuICAgIH0sXG4gICAgW0NPVkVOQU5UX05FQ1JPTE9SRF06IHtcbiAgICAgICAgbmFtZTogJ05lY3JvbG9yZCcsXG4gICAgICAgIGNvbG9yOiAncmdiKDE5MyAxNDUgMjI4KSdcbiAgICB9LFxuICAgIFtDT1ZFTkFOVF9LWVJJQU5dOiB7XG4gICAgICAgIG5hbWU6ICdLeXJpYW4nLFxuICAgICAgICBjb2xvcjogJ3JnYigxNzMgMTM3IDg2KSdcbiAgICB9XG59XG5cbmNvbnN0IENvdmVuYW50cyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZCA9IHByb3BzLmRhdGEucmVkdWNlPFJlY29yZDwnbmlnaHRmYWUnIHwgJ3ZlbnRoeXInIHwgJ25lY3JvbG9yZCcgfCAna3lyaWFuJywgUmVjb3JkPCdzaWduYXR1cmUnIHwgJ2NvbWJhdCcsIENvdmVuYW50QWJpbGl0eVR5cGVbXT4+PigoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgYWNjW3ZhbC5jb3ZlbmFudF1bdmFsLnR5cGVdLnB1c2godmFsKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICAgIFtDT1ZFTkFOVF9LWVJJQU5dOiB7XG4gICAgICAgICAgICBbQ09WRU5BTlRfQ0FURUdPUllfU0lHTkFUVVJFXTogW10sXG4gICAgICAgICAgICBbQ09WRU5BTlRfQ0FURUdPUllfQ09NQkFUXTogW10sXG4gICAgICAgIH0sXG4gICAgICAgIFtDT1ZFTkFOVF9WRU5USFlSXToge1xuICAgICAgICAgICAgW0NPVkVOQU5UX0NBVEVHT1JZX1NJR05BVFVSRV06IFtdLFxuICAgICAgICAgICAgW0NPVkVOQU5UX0NBVEVHT1JZX0NPTUJBVF06IFtdLFxuICAgICAgICB9LFxuICAgICAgICBbQ09WRU5BTlRfTkVDUk9MT1JEXToge1xuICAgICAgICAgICAgW0NPVkVOQU5UX0NBVEVHT1JZX1NJR05BVFVSRV06IFtdLFxuICAgICAgICAgICAgW0NPVkVOQU5UX0NBVEVHT1JZX0NPTUJBVF06IFtdLFxuICAgICAgICB9LFxuICAgICAgICBbQ09WRU5BTlRfTklHSFRGQUVdOiB7XG4gICAgICAgICAgICBbQ09WRU5BTlRfQ0FURUdPUllfU0lHTkFUVVJFXTogW10sXG4gICAgICAgICAgICBbQ09WRU5BTlRfQ0FURUdPUllfQ09NQkFUXTogW10sXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXRlZ29yeUhlYWRlciBiYWNrZ3JvdW5kPXsnIzIyMid9PlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249eydjb3ZlbmFudF9hYmlsaXRpZXMuanBnJ30gY29sb3I9eyd3aGl0ZSd9IC8+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+Q292ZW5hbnQgYWJpbGl0aWVzPC9IZWFkZXJUZXh0PlxuICAgICAgICAgICAgPC9DYXRlZ29yeUhlYWRlcj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAge21hcChjYXRlZ29yaXplZCwgKGFiaWxpdGllcywgbmFtZTogQ292ZW5hbnROYW1lKSA9PiA8Q2F0ZWdvcnkga2V5PXtuYW1lfSBjb3ZlbmFudD17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFiaWxpdGllcz17YWJpbGl0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd293Q2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9Lz4pfVxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb3ZlbmFudHM7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDhweDtcbmA7XG5cbmNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50aXRsZX07XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuYDtcblxudHlwZSBDYXRlZ29yeVByb3BzID0ge1xuICAgIGNvdmVuYW50OiBDb3ZlbmFudE5hbWUsXG4gICAgYWJpbGl0aWVzOiBSZWNvcmQ8J3NpZ25hdHVyZScgfCAnY29tYmF0JywgQ292ZW5hbnRBYmlsaXR5VHlwZVtdPlxuICAgIHdvd0NsYXNzTmFtZTogQ2xhc3NOYW1lLFxufVxuXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wczogQ2F0ZWdvcnlQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gQ09WRU5BTlRTW3Byb3BzLmNvdmVuYW50XTtcbiAgICByZXR1cm4gPENhdGVnb3J5Q29udGFpbmVyPlxuICAgICAgICA8Q2F0ZWdvcnlIZWFkZXIgYmFja2dyb3VuZD17Y2F0ZWdvcnkuY29sb3J9PlxuICAgICAgICAgICAgPEljb24gY292ZW5hbnROYW1lPXtwcm9wcy5jb3ZlbmFudH0gY29sb3I9e2NhdGVnb3J5LmNvbG9yfS8+XG4gICAgICAgICAgICA8Q2F0ZWdvcnlIZWFkZXJUZXh0PntjYXRlZ29yeS5uYW1lfTwvQ2F0ZWdvcnlIZWFkZXJUZXh0PlxuICAgICAgICA8L0NhdGVnb3J5SGVhZGVyPlxuICAgICAgICA8Q2F0ZWdvcnlDb250ZW50PlxuICAgICAgICAgICAge3Byb3BzLmFiaWxpdGllcy5zaWduYXR1cmUubWFwKGFiaWxpdHkgPT4gPENvdmVuYW50XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhdGVnb3J5LmNvbG9yfVxuICAgICAgICAgICAgICAgIGtleT17YWJpbGl0eS5pZH1cbiAgICAgICAgICAgICAgICBkYXRhPXthYmlsaXR5fVxuICAgICAgICAgICAgICAgIHdvd0NsYXNzTmFtZT17cHJvcHMud293Q2xhc3NOYW1lfVxuICAgICAgICAgICAgLz4pfVxuICAgICAgICAgICAge3Byb3BzLmFiaWxpdGllcy5jb21iYXQubWFwKGFiaWxpdHkgPT4gPENvdmVuYW50XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhdGVnb3J5LmNvbG9yfVxuICAgICAgICAgICAgICAgIGtleT17YWJpbGl0eS5pZH1cbiAgICAgICAgICAgICAgICBkYXRhPXthYmlsaXR5fVxuICAgICAgICAgICAgICAgIHdvd0NsYXNzTmFtZT17cHJvcHMud293Q2xhc3NOYW1lfVxuICAgICAgICAgICAgLz4pfVxuICAgICAgICA8L0NhdGVnb3J5Q29udGVudD5cbiAgICA8L0NhdGVnb3J5Q29udGFpbmVyPjtcbn1cblxuY29uc3QgQ2F0ZWdvcnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5gO1xuXG5jb25zdCBDYXRlZ29yeUhlYWRlciA9IHN0eWxlZC5kaXY8eyBiYWNrZ3JvdW5kOiBzdHJpbmcgfT5gXG4gICAgY29sb3I6ICMyMjI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZH07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbmBcblxuY29uc3QgQ2F0ZWdvcnlIZWFkZXJUZXh0ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQudGl0bGV9O1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuYDtcblxuY29uc3QgQ2F0ZWdvcnlDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiA4cHg7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/widgets/Covenants.tsx\n");

/***/ })

})