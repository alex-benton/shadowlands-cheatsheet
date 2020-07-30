webpackHotUpdate("static/development/pages/classes/monk.js",{

/***/ "./src/components/common/HeaderDropdown.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/HeaderDropdown.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./src/components/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./src/components/common/Icon.tsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppLink */ \"./src/components/common/AppLink.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/shadowlands-cheatsheet/src/components/common/HeaderDropdown.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/**\n * Defines the props accepted by the HeaderDropdown component.\n */\n\nvar HeaderDropdown = function HeaderDropdown(_ref) {\n  _s();\n\n  var iconSize = _ref.iconSize,\n      selected = _ref.selected,\n      options = _ref.options,\n      placeholder = _ref.placeholder,\n      _onSelect = _ref.onSelect,\n      clearable = _ref.clearable;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState[0],\n      setActive = _useState[1];\n\n  var option = selected !== null && selected !== undefined ? options[selected] : placeholder;\n  return __jsx(Container, {\n    onMouseEnter: function onMouseEnter() {\n      return setActive(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 12\n    }\n  }, __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: option.icon,\n    color: option.color,\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(Text, {\n    color: option.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, option.name)), isActive && __jsx(OptionContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 22\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"map\"])(options, function (option, i) {\n    return __jsx(DropdownOption, {\n      key: i,\n      color: i !== selected ? '#999' : option.color,\n      name: option.name,\n      icon: option.icon,\n      iconSize: iconSize,\n      link: option.link,\n      onSelect: function onSelect() {\n        return _onSelect && _onSelect(i);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 42\n      }\n    });\n  }), selected && clearable && __jsx(DropdownOption, {\n    key: 'unselect',\n    color: '#999',\n    name: 'Clear selection',\n    iconSize: iconSize,\n    onSelect: function onSelect() {\n      _onSelect && _onSelect(undefined);\n      setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 39\n    }\n  })));\n};\n\n_s(HeaderDropdown, \"NIDogoy7bmTp1+ctz7hxf3NMsLg=\");\n\n_c = HeaderDropdown;\nHeaderDropdown.defaultProps = {\n  iconSize: 36,\n  clearable: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderDropdown);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__Container\",\n  componentId: \"sc-1t6j1d7-0\"\n})([\"display:flex;flex-direction:column;cursor:pointer;\"]);\n_c2 = Container;\nvar HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__HomeContainer\",\n  componentId: \"sc-1t6j1d7-1\"\n})([\"display:flex;height:40px;align-items:center;padding:4px 8px;:hover{filter:brightness(1.25);}:active{filter:brightness(.8);}\"]);\n_c3 = HomeContainer;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__Text\",\n  componentId: \"sc-1t6j1d7-2\"\n})([\"margin-left:8px;font-family:\", \";color:\", \";font-size:2em;\"], _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].font.title, function (props) {\n  return props.color;\n});\n_c4 = Text;\nvar OptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__OptionContainer\",\n  componentId: \"sc-1t6j1d7-3\"\n})([\"position:absolute;top:0;padding-top:56px;\"]);\n_c5 = OptionContainer;\n\nvar DropdownOption = function DropdownOption(_ref2) {\n  var icon = _ref2.icon,\n      name = _ref2.name,\n      color = _ref2.color,\n      iconSize = _ref2.iconSize,\n      onSelect = _ref2.onSelect,\n      link = _ref2.link;\n\n  var option = __jsx(DropdownOptionContainer, {\n    onClick: onSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 20\n    }\n  }, __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: icon,\n    color: color,\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }), __jsx(Text, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, name)));\n\n  if (link) return __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 22\n    }\n  }, option);\n  return option;\n};\n\n_c6 = DropdownOption;\nvar DropdownOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__DropdownOptionContainer\",\n  componentId: \"sc-1t6j1d7-4\"\n})([\"background:#222;cursor:pointer;\"]);\n_c7 = DropdownOptionContainer;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"HeaderDropdown\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"HomeContainer\");\n$RefreshReg$(_c4, \"Text\");\n$RefreshReg$(_c5, \"OptionContainer\");\n$RefreshReg$(_c6, \"DropdownOption\");\n$RefreshReg$(_c7, \"DropdownOptionContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vSGVhZGVyRHJvcGRvd24udHN4PzNmNzYiXSwibmFtZXMiOlsiSGVhZGVyRHJvcGRvd24iLCJpY29uU2l6ZSIsInNlbGVjdGVkIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwib25TZWxlY3QiLCJjbGVhcmFibGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwib3B0aW9uIiwidW5kZWZpbmVkIiwiaWNvbiIsImNvbG9yIiwibmFtZSIsIm1hcCIsImkiLCJsaW5rIiwiZGVmYXVsdFByb3BzIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSG9tZUNvbnRhaW5lciIsIlRleHQiLCJ0aGVtZSIsImZvbnQiLCJ0aXRsZSIsInByb3BzIiwiT3B0aW9uQ29udGFpbmVyIiwiRHJvcGRvd25PcHRpb24iLCJEcm9wZG93bk9wdGlvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQW1CQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTRFO0FBQUE7O0FBQUEsTUFBMUVDLFFBQTBFLFFBQTFFQSxRQUEwRTtBQUFBLE1BQWhFQyxRQUFnRSxRQUFoRUEsUUFBZ0U7QUFBQSxNQUF0REMsT0FBc0QsUUFBdERBLE9BQXNEO0FBQUEsTUFBN0NDLFdBQTZDLFFBQTdDQSxXQUE2QztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCOztBQUFBLGtCQUNqRUMsc0RBQVEsQ0FBQyxLQUFELENBRHlEO0FBQUEsTUFDeEZDLFFBRHdGO0FBQUEsTUFDOUVDLFNBRDhFOztBQUUvRixNQUFNQyxNQUFNLEdBQUdSLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUtTLFNBQWxDLEdBQThDUixPQUFPLENBQUNELFFBQUQsQ0FBckQsR0FBa0VF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QUFBLE1BQWhFRSxJQUFnRSxTQUFoRUEsSUFBZ0U7QUFBQSxNQUExREQsS0FBMEQsU0FBMURBLEtBQTBEO0FBQUEsTUFBbkRaLFFBQW1ELFNBQW5EQSxRQUFtRDtBQUFBLE1BQXpDSSxRQUF5QyxTQUF6Q0EsUUFBeUM7QUFBQSxNQUEvQlksSUFBK0IsU0FBL0JBLElBQStCOztBQUMzRixNQUFNUCxNQUFNLEdBQUcsTUFBQyx1QkFBRDtBQUF5QixXQUFPLEVBQUVMLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDWCxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkNBQUQ7QUFBTSxRQUFJLEVBQUVPLElBQVo7QUFBa0IsU0FBSyxFQUFFQyxLQUF6QjtBQUFnQyxRQUFJLEVBQUVaLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsSUFBRDtBQUFNLFNBQUssRUFBRVksS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLElBREwsQ0FGSixDQURXLENBQWY7O0FBU0EsTUFBSUcsSUFBSixFQUFVLE9BQU8sTUFBQyxnREFBRDtBQUFTLFFBQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCUCxNQUF0QixDQUFQO0FBQ1YsU0FBT0EsTUFBUDtBQUNILENBWkQ7O01BQU1tQixjO0FBZU4sSUFBTUMsdUJBQXVCLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQTdCO01BQU1TLHVCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlckRyb3Bkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCI7XG5pbXBvcnQge21hcH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEFwcExpbmsgZnJvbSBcIi4vQXBwTGlua1wiO1xuXG4vKipcbiAqIERlZmluZXMgdGhlIHByb3BzIGFjY2VwdGVkIGJ5IHRoZSBIZWFkZXJEcm9wZG93biBjb21wb25lbnQuXG4gKi9cbnR5cGUgUHJvcHMgPSB7XG4gICAgaWNvblNpemU/OiBudW1iZXIsXG4gICAgb3B0aW9uczogUmVjb3JkPHN0cmluZywgT3B0aW9uPixcbiAgICBwbGFjZWhvbGRlcjogT3B0aW9uLFxuICAgIHNlbGVjdGVkPzogc3RyaW5nLFxuICAgIG9uU2VsZWN0PzogKGtleTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBhbnksXG4gICAgY2xlYXJhYmxlPzogYm9vbGVhbixcbn1cblxudHlwZSBPcHRpb24gPSB7XG4gICAgaWNvbj86IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgY29sb3I6IHN0cmluZyxcbiAgICBsaW5rPzogc3RyaW5nLFxufVxuXG5jb25zdCBIZWFkZXJEcm9wZG93biA9ICh7aWNvblNpemUsIHNlbGVjdGVkLCBvcHRpb25zLCBwbGFjZWhvbGRlciwgb25TZWxlY3QsIGNsZWFyYWJsZX06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdGVkICE9PSBudWxsICYmIHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyBvcHRpb25zW3NlbGVjdGVkXSA6IHBsYWNlaG9sZGVyO1xuICAgIHJldHVybiA8Q29udGFpbmVyIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9PlxuICAgICAgICA8SG9tZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJY29uIGljb249e29wdGlvbi5pY29ufSBjb2xvcj17b3B0aW9uLmNvbG9yfSBzaXplPXtpY29uU2l6ZX0vPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9e29wdGlvbi5jb2xvcn0+XG4gICAgICAgICAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0hvbWVDb250YWluZXI+XG4gICAgICAgIHtpc0FjdGl2ZSAmJiA8T3B0aW9uQ29udGFpbmVyPlxuICAgICAgICAgICAge21hcChvcHRpb25zLCAob3B0aW9uLCBpKSA9PiA8RHJvcGRvd25PcHRpb24ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2kgIT09IHNlbGVjdGVkID8gJyM5OTknIDogb3B0aW9uLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtvcHRpb24uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e29wdGlvbi5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IG9uU2VsZWN0ICYmIG9uU2VsZWN0KGkpfVxuICAgICAgICAgICAgLz4pfVxuICAgICAgICAgICAge3NlbGVjdGVkICYmIGNsZWFyYWJsZSAmJiA8RHJvcGRvd25PcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9eyd1bnNlbGVjdCd9XG4gICAgICAgICAgICAgICAgY29sb3I9eycjOTk5J31cbiAgICAgICAgICAgICAgICBuYW1lPXsnQ2xlYXIgc2VsZWN0aW9uJ31cbiAgICAgICAgICAgICAgICBpY29uU2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QgJiYgb25TZWxlY3QodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz59XG4gICAgICAgIDwvT3B0aW9uQ29udGFpbmVyPn1cbiAgICA8L0NvbnRhaW5lcj5cbn1cblxuSGVhZGVyRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIGljb25TaXplOiAzNixcbiAgICBjbGVhcmFibGU6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckRyb3Bkb3duO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgXG4gICAgOmhvdmVyIHtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMjUpO1xuICAgIH1cbiAgICBcbiAgICA6YWN0aXZlIHtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKC44KTtcbiAgICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdjx7IGNvbG9yOiBzdHJpbmcgfT5gXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LnRpdGxlfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgZm9udC1zaXplOiAyZW07XG5gO1xuXG5jb25zdCBPcHRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDU2cHg7XG5gO1xuXG50eXBlIERyb3Bkb3duT3B0aW9uUHJvcHMgPSBPcHRpb24gJiB7XG4gICAgaWNvblNpemU/OiBudW1iZXIsXG4gICAgb25TZWxlY3Q6ICgpID0+IGFueSxcbn1cblxuY29uc3QgRHJvcGRvd25PcHRpb24gPSAoe2ljb24sIG5hbWUsIGNvbG9yLCBpY29uU2l6ZSwgb25TZWxlY3QsIGxpbmt9OiBEcm9wZG93bk9wdGlvblByb3BzKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gPERyb3Bkb3duT3B0aW9uQ29udGFpbmVyIG9uQ2xpY2s9e29uU2VsZWN0fT5cbiAgICAgICAgPEhvbWVDb250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiBpY29uPXtpY29ufSBjb2xvcj17Y29sb3J9IHNpemU9e2ljb25TaXplfS8+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0hvbWVDb250YWluZXI+XG4gICAgPC9Ecm9wZG93bk9wdGlvbkNvbnRhaW5lcj47XG5cbiAgICBpZiAobGluaykgcmV0dXJuIDxBcHBMaW5rIGhyZWY9e2xpbmt9PntvcHRpb259PC9BcHBMaW5rPjtcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuXG5cbmNvbnN0IERyb3Bkb3duT3B0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/HeaderDropdown.tsx\n");

/***/ })

})