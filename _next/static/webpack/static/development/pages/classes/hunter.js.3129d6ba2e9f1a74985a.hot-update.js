webpackHotUpdate("static/development/pages/classes/hunter.js",{

/***/ "./src/components/common/HeaderDropdown.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/HeaderDropdown.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./src/components/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./src/components/common/Icon.tsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppLink */ \"./src/components/common/AppLink.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/shadowlands-cheatsheet/src/components/common/HeaderDropdown.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n/**\n * Defines the props accepted by the HeaderDropdown component.\n */\n\nvar HeaderDropdown = function HeaderDropdown(_ref) {\n  _s();\n\n  var iconSize = _ref.iconSize,\n      selected = _ref.selected,\n      options = _ref.options,\n      placeholder = _ref.placeholder,\n      _onSelect = _ref.onSelect,\n      clearable = _ref.clearable;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState[0],\n      setActive = _useState[1];\n\n  var option = selected !== null && selected !== undefined ? options[selected] : placeholder;\n  return __jsx(Container, {\n    onMouseEnter: function onMouseEnter() {\n      return setActive(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 12\n    }\n  }, __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: option.icon,\n    color: option.color,\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(Text, {\n    color: option.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, option.name)), isActive && __jsx(OptionContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 22\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"map\"])(options, function (option, i) {\n    return __jsx(DropdownOption, {\n      key: i,\n      color: i !== selected ? '#999' : option.color,\n      name: option.name,\n      icon: option.icon,\n      iconSize: iconSize,\n      link: option.link,\n      onSelect: function onSelect() {\n        return _onSelect && _onSelect(i);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 42\n      }\n    });\n  }), selected && clearable && __jsx(DropdownOption, {\n    key: 'unselect',\n    color: '#999',\n    name: 'Clear selection',\n    iconSize: iconSize,\n    onSelect: function onSelect() {\n      _onSelect && _onSelect(undefined);\n      setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 39\n    }\n  })));\n};\n\n_s(HeaderDropdown, \"NIDogoy7bmTp1+ctz7hxf3NMsLg=\");\n\n_c = HeaderDropdown;\nHeaderDropdown.defaultProps = {\n  iconSize: 36,\n  clearable: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderDropdown);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__Container\",\n  componentId: \"sc-1t6j1d7-0\"\n})([\"display:flex;flex-direction:column;cursor:pointer;\"]);\n_c2 = Container;\nvar HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__HomeContainer\",\n  componentId: \"sc-1t6j1d7-1\"\n})([\"display:flex;height:40px;align-items:center;padding:4px 8px;:hover{filter:brightness(1.25);}:active{filter:brightness(.8);}\"]);\n_c3 = HomeContainer;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__Text\",\n  componentId: \"sc-1t6j1d7-2\"\n})([\"margin-left:8px;font-family:\", \";color:\", \";font-size:2em;\"], _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].font.title, function (props) {\n  return props.color;\n});\n_c4 = Text;\nvar OptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__OptionContainer\",\n  componentId: \"sc-1t6j1d7-3\"\n})([\"\"]);\n_c5 = OptionContainer;\n\nvar DropdownOption = function DropdownOption(_ref2) {\n  var icon = _ref2.icon,\n      name = _ref2.name,\n      color = _ref2.color,\n      iconSize = _ref2.iconSize,\n      onSelect = _ref2.onSelect,\n      link = _ref2.link;\n\n  var option = __jsx(DropdownOptionContainer, {\n    onClick: onSelect,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 20\n    }\n  }, __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: icon,\n    color: color,\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }), __jsx(Text, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, name)));\n\n  if (link) return __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 22\n    }\n  }, option);\n  return option;\n};\n\n_c6 = DropdownOption;\nvar DropdownOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"HeaderDropdown__DropdownOptionContainer\",\n  componentId: \"sc-1t6j1d7-4\"\n})([\"background:#222;cursor:pointer;\"]);\n_c7 = DropdownOptionContainer;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"HeaderDropdown\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"HomeContainer\");\n$RefreshReg$(_c4, \"Text\");\n$RefreshReg$(_c5, \"OptionContainer\");\n$RefreshReg$(_c6, \"DropdownOption\");\n$RefreshReg$(_c7, \"DropdownOptionContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vSGVhZGVyRHJvcGRvd24udHN4PzNmNzYiXSwibmFtZXMiOlsiSGVhZGVyRHJvcGRvd24iLCJpY29uU2l6ZSIsInNlbGVjdGVkIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwib25TZWxlY3QiLCJjbGVhcmFibGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwib3B0aW9uIiwidW5kZWZpbmVkIiwiaWNvbiIsImNvbG9yIiwibmFtZSIsIm1hcCIsImkiLCJsaW5rIiwiZGVmYXVsdFByb3BzIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSG9tZUNvbnRhaW5lciIsIlRleHQiLCJ0aGVtZSIsImZvbnQiLCJ0aXRsZSIsInByb3BzIiwiT3B0aW9uQ29udGFpbmVyIiwiRHJvcGRvd25PcHRpb24iLCJEcm9wZG93bk9wdGlvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQW1CQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTRFO0FBQUE7O0FBQUEsTUFBMUVDLFFBQTBFLFFBQTFFQSxRQUEwRTtBQUFBLE1BQWhFQyxRQUFnRSxRQUFoRUEsUUFBZ0U7QUFBQSxNQUF0REMsT0FBc0QsUUFBdERBLE9BQXNEO0FBQUEsTUFBN0NDLFdBQTZDLFFBQTdDQSxXQUE2QztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCOztBQUFBLGtCQUNqRUMsc0RBQVEsQ0FBQyxLQUFELENBRHlEO0FBQUEsTUFDeEZDLFFBRHdGO0FBQUEsTUFDOUVDLFNBRDhFOztBQUUvRixNQUFNQyxNQUFNLEdBQUdSLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUtTLFNBQWxDLEdBQThDUixPQUFPLENBQUNELFFBQUQsQ0FBckQsR0FBa0VF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QUEsTUFBaEVFLElBQWdFLFNBQWhFQSxJQUFnRTtBQUFBLE1BQTFERCxLQUEwRCxTQUExREEsS0FBMEQ7QUFBQSxNQUFuRFosUUFBbUQsU0FBbkRBLFFBQW1EO0FBQUEsTUFBekNJLFFBQXlDLFNBQXpDQSxRQUF5QztBQUFBLE1BQS9CWSxJQUErQixTQUEvQkEsSUFBK0I7O0FBQzNGLE1BQU1QLE1BQU0sR0FBRyxNQUFDLHVCQUFEO0FBQXlCLFdBQU8sRUFBRUwsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNYLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFFBQUksRUFBRU8sSUFBWjtBQUFrQixTQUFLLEVBQUVDLEtBQXpCO0FBQWdDLFFBQUksRUFBRVosUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFWSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsSUFETCxDQUZKLENBRFcsQ0FBZjs7QUFTQSxNQUFJRyxJQUFKLEVBQVUsT0FBTyxNQUFDLGdEQUFEO0FBQVMsUUFBSSxFQUFFQSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JQLE1BQXRCLENBQVA7QUFDVixTQUFPQSxNQUFQO0FBQ0gsQ0FaRDs7TUFBTW1CLGM7QUFlTixJQUFNQyx1QkFBdUIsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBN0I7TUFBTVMsdUIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vSGVhZGVyRHJvcGRvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL0ljb25cIjtcbmltcG9ydCB7bWFwfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQXBwTGluayBmcm9tIFwiLi9BcHBMaW5rXCI7XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgcHJvcHMgYWNjZXB0ZWQgYnkgdGhlIEhlYWRlckRyb3Bkb3duIGNvbXBvbmVudC5cbiAqL1xudHlwZSBQcm9wcyA9IHtcbiAgICBpY29uU2l6ZT86IG51bWJlcixcbiAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBPcHRpb24+LFxuICAgIHBsYWNlaG9sZGVyOiBPcHRpb24sXG4gICAgc2VsZWN0ZWQ/OiBzdHJpbmcsXG4gICAgb25TZWxlY3Q/OiAoa2V5OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IGFueSxcbiAgICBjbGVhcmFibGU/OiBib29sZWFuLFxufVxuXG50eXBlIE9wdGlvbiA9IHtcbiAgICBpY29uPzogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIGxpbms/OiBzdHJpbmcsXG59XG5cbmNvbnN0IEhlYWRlckRyb3Bkb3duID0gKHtpY29uU2l6ZSwgc2VsZWN0ZWQsIG9wdGlvbnMsIHBsYWNlaG9sZGVyLCBvblNlbGVjdCwgY2xlYXJhYmxlfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0ZWQgIT09IG51bGwgJiYgc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnNbc2VsZWN0ZWRdIDogcGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIDxDb250YWluZXIgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX0+XG4gICAgICAgIDxIb21lQ29udGFpbmVyPlxuICAgICAgICAgICAgPEljb24gaWNvbj17b3B0aW9uLmljb259IGNvbG9yPXtvcHRpb24uY29sb3J9IHNpemU9e2ljb25TaXplfS8+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17b3B0aW9uLmNvbG9yfT5cbiAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgICAgICAge2lzQWN0aXZlICYmIDxPcHRpb25Db250YWluZXI+XG4gICAgICAgICAgICB7bWFwKG9wdGlvbnMsIChvcHRpb24sIGkpID0+IDxEcm9wZG93bk9wdGlvbiBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aSAhPT0gc2VsZWN0ZWQgPyAnIzk5OScgOiBvcHRpb24uY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e29wdGlvbi5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNpemU9e2ljb25TaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17b3B0aW9uLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25TZWxlY3QgJiYgb25TZWxlY3QoaSl9XG4gICAgICAgICAgICAvPil9XG4gICAgICAgICAgICB7c2VsZWN0ZWQgJiYgY2xlYXJhYmxlICYmIDxEcm9wZG93bk9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17J3Vuc2VsZWN0J31cbiAgICAgICAgICAgICAgICBjb2xvcj17JyM5OTknfVxuICAgICAgICAgICAgICAgIG5hbWU9eydDbGVhciBzZWxlY3Rpb24nfVxuICAgICAgICAgICAgICAgIGljb25TaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdCAmJiBvblNlbGVjdCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgPC9PcHRpb25Db250YWluZXI+fVxuICAgIDwvQ29udGFpbmVyPlxufVxuXG5IZWFkZXJEcm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWNvblNpemU6IDM2LFxuICAgIGNsZWFyYWJsZTogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRHJvcGRvd247XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IEhvbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBcbiAgICA6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yNSk7XG4gICAgfVxuICAgIFxuICAgIDphY3RpdmUge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjgpO1xuICAgIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQudGl0bGV9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgICBmb250LXNpemU6IDJlbTtcbmA7XG5cbmNvbnN0IE9wdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5gO1xuXG50eXBlIERyb3Bkb3duT3B0aW9uUHJvcHMgPSBPcHRpb24gJiB7XG4gICAgaWNvblNpemU/OiBudW1iZXIsXG4gICAgb25TZWxlY3Q6ICgpID0+IGFueSxcbn1cblxuY29uc3QgRHJvcGRvd25PcHRpb24gPSAoe2ljb24sIG5hbWUsIGNvbG9yLCBpY29uU2l6ZSwgb25TZWxlY3QsIGxpbmt9OiBEcm9wZG93bk9wdGlvblByb3BzKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gPERyb3Bkb3duT3B0aW9uQ29udGFpbmVyIG9uQ2xpY2s9e29uU2VsZWN0fT5cbiAgICAgICAgPEhvbWVDb250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiBpY29uPXtpY29ufSBjb2xvcj17Y29sb3J9IHNpemU9e2ljb25TaXplfS8+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0hvbWVDb250YWluZXI+XG4gICAgPC9Ecm9wZG93bk9wdGlvbkNvbnRhaW5lcj47XG5cbiAgICBpZiAobGluaykgcmV0dXJuIDxBcHBMaW5rIGhyZWY9e2xpbmt9PntvcHRpb259PC9BcHBMaW5rPjtcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuXG5cbmNvbnN0IERyb3Bkb3duT3B0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/HeaderDropdown.tsx\n");

/***/ })

})