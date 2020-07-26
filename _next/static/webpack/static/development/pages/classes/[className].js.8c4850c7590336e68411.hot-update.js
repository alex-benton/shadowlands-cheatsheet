webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Covenant.tsx":
/*!*****************************************!*\
  !*** ./components/widgets/Covenant.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Icon */ \"./components/common/Icon.tsx\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ \"./components/widgets/common.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Covenant.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n// import {formatDescription} from \"./common\";\n\n\n\nvar Covenant = function Covenant(props) {\n  var parseRange = function parseRange(range) {\n    var result = /(\\d+) yards/.exec(range);\n    if (result && result[1] && parseInt(result[1]) > 0) return result[1];\n    return null;\n  };\n\n  var parseCooldown = function parseCooldown(cooldown) {\n    if (cooldown === 'n/a') return null;\n\n    if (cooldown && cooldown.endsWith('s')) {\n      return cooldown.substring(0, -1);\n    }\n\n    return cooldown;\n  };\n\n  var parseCast = function parseCast(cast) {\n    if (cast === 'Channeled' || cast === 'Instant') return cast;\n\n    if (cast && cast.endsWith('s')) {\n      return cast.substring(0, -1);\n    }\n\n    return cast;\n  };\n\n  console.log(props.data);\n  var range = parseRange(props.data.range);\n  var cooldown = parseCooldown(props.data.cooldown);\n  var cast = parseCast(props.data.cast_time);\n  console.log(range);\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 12\n    }\n  }, __jsx(IconContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    size: 64,\n    icon: props.data.icon,\n    color: props.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  })), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(CovenantName, {\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(AbilityName, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, props.data.name), props.data.cost && props.data.cost !== 'None' ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 70\n    }\n  }, props.data.cost) : null, range ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 30\n    }\n  }, \"\".concat(range, \" yard range\")) : null, cast ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 29\n    }\n  }, \"\".concat(cast)) : null, cooldown ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 33\n    }\n  }, \"\".concat(cooldown, \" cooldown\")) : null)), __jsx(CovenantText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(CovenantDescription, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, Object(_common__WEBPACK_IMPORTED_MODULE_4__[\"formatDescription\"])(props.data.id, props.data.description, props.wowClassName, props.color, null, true).items))));\n};\n\n_c = Covenant;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Covenant);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Container\",\n  componentId: \"n87l1x-0\"\n})([\"display:grid;grid-template-columns:68px 1fr;margin:4px;width:calc(100% - 8px);align-items:start;grid-gap:8px;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Header\",\n  componentId: \"n87l1x-1\"\n})([\"\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Content\",\n  componentId: \"n87l1x-2\"\n})([\"padding:8px;min-height:68px;background:\", \";border-radius:5px;\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.background);\n_c3 = Content;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__IconContainer\",\n  componentId: \"n87l1x-3\"\n})([\"display:flex;align-items:center;\"]);\n_c4 = IconContainer;\nvar CovenantName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantName\",\n  componentId: \"n87l1x-4\"\n})([\"padding:4px;color:\", \";\"], function (props) {\n  return props.color;\n});\n_c5 = CovenantName;\nvar AbilityName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__AbilityName\",\n  componentId: \"n87l1x-5\"\n})([\"font-weight:bold;font-size:16px;\"]);\n_c6 = AbilityName;\nvar AbilityData = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__AbilityData\",\n  componentId: \"n87l1x-6\"\n})([\"font-weight:lighter;\"]);\n_c7 = AbilityData;\nvar CovenantText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantText\",\n  componentId: \"n87l1x-7\"\n})([\"padding:4px;display:flex;flex-direction:column;justify-content:center;\"]);\n_c8 = CovenantText;\nvar CovenantDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantDescription\",\n  componentId: \"n87l1x-8\"\n})([\"color:white;display:inline;\"]);\n/*\nconst CovenantNotes = styled.div`\n    margin-top: 4px;\n    font-size: 14px;\n    color: yellow;\n    display: inline;\n`;\n*/\n\n_c9 = CovenantDescription;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Covenant\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Content\");\n$RefreshReg$(_c4, \"IconContainer\");\n$RefreshReg$(_c5, \"CovenantName\");\n$RefreshReg$(_c6, \"AbilityName\");\n$RefreshReg$(_c7, \"AbilityData\");\n$RefreshReg$(_c8, \"CovenantText\");\n$RefreshReg$(_c9, \"CovenantDescription\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ292ZW5hbnQudHN4PzkwZTQiXSwibmFtZXMiOlsiQ292ZW5hbnQiLCJwcm9wcyIsInBhcnNlUmFuZ2UiLCJyYW5nZSIsInJlc3VsdCIsImV4ZWMiLCJwYXJzZUludCIsInBhcnNlQ29vbGRvd24iLCJjb29sZG93biIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwicGFyc2VDYXN0IiwiY2FzdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2FzdF90aW1lIiwiaWNvbiIsImNvbG9yIiwibmFtZSIsImNvc3QiLCJmb3JtYXREZXNjcmlwdGlvbiIsImlkIiwiZGVzY3JpcHRpb24iLCJ3b3dDbGFzc05hbWUiLCJpdGVtcyIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsIkNvbnRlbnQiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJJY29uQ29udGFpbmVyIiwiQ292ZW5hbnROYW1lIiwiQWJpbGl0eU5hbWUiLCJBYmlsaXR5RGF0YSIsIkNvdmVuYW50VGV4dCIsIkNvdmVuYW50RGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQVNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBa0I7QUFDL0IsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNsQyxRQUFNQyxNQUFNLEdBQUcsY0FBY0MsSUFBZCxDQUFtQkYsS0FBbkIsQ0FBZjtBQUNBLFFBQUlDLE1BQU0sSUFBSUEsTUFBTSxDQUFDLENBQUQsQ0FBaEIsSUFBdUJFLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFSLEdBQXNCLENBQWpELEVBQW9ELE9BQU9BLE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDcEQsV0FBTyxJQUFQO0FBQ0gsR0FKRDs7QUFNQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJB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QUE7QUFBQTtBQUFBLDhFQUFsQjtNQUFNUyxZO0FBT04sSUFBTUMsbUJBQW1CLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUNBQXpCO0FBS0E7Ozs7Ozs7OztNQUxNVSxtQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvd2lkZ2V0cy9Db3ZlbmFudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHRoZW1lLCB7Q2xhc3NOYW1lfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7Q292ZW5hbnRBYmlsaXR5VHlwZX0gZnJvbSBcIi4uL3R5cGVzXCI7XG4vLyBpbXBvcnQge2Zvcm1hdERlc2NyaXB0aW9ufSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9jb21tb24vSWNvblwiO1xuaW1wb3J0IHtmb3JtYXREZXNjcmlwdGlvbn0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgd293Q2xhc3NOYW1lOiBDbGFzc05hbWUsXG4gICAgZGF0YTogQ292ZW5hbnRBYmlsaXR5VHlwZSxcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIGZpbHRlcj86IHN0cmluZyxcbn1cblxuY29uc3QgQ292ZW5hbnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFyc2VSYW5nZSA9IChyYW5nZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IC8oXFxkKykgeWFyZHMvLmV4ZWMocmFuZ2UpO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdFsxXSAmJiBwYXJzZUludChyZXN1bHRbMV0pID4gMCkgcmV0dXJuIHJlc3VsdFsxXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VDb29sZG93biA9IChjb29sZG93bjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChjb29sZG93biA9PT0gJ24vYScpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoY29vbGRvd24gJiYgY29vbGRvd24uZW5kc1dpdGgoJ3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb2xkb3duLnN1YnN0cmluZygwLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb2xkb3duO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlQ2FzdCA9IChjYXN0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGNhc3QgPT09ICdDaGFubmVsZWQnIHx8IGNhc3QgPT09ICdJbnN0YW50JykgcmV0dXJuIGNhc3Q7XG4gICAgICAgIGlmIChjYXN0ICYmIGNhc3QuZW5kc1dpdGgoJ3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhc3Quc3Vic3RyaW5nKDAsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FzdDtcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcbiAgICBjb25zdCByYW5nZSA9IHBhcnNlUmFuZ2UocHJvcHMuZGF0YS5yYW5nZSk7XG4gICAgY29uc3QgY29vbGRvd24gPSBwYXJzZUNvb2xkb3duKHByb3BzLmRhdGEuY29vbGRvd24pO1xuICAgIGNvbnN0IGNhc3QgPSBwYXJzZUNhc3QocHJvcHMuZGF0YS5jYXN0X3RpbWUpO1xuICAgIGNvbnNvbGUubG9nKHJhbmdlKTtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiBzaXplPXs2NH0gaWNvbj17cHJvcHMuZGF0YS5pY29ufSBjb2xvcj17cHJvcHMuY29sb3J9Lz5cbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENvdmVuYW50TmFtZSBjb2xvcj17J3doaXRlJ30+XG4gICAgICAgICAgICAgICAgICAgIDxBYmlsaXR5TmFtZT57cHJvcHMuZGF0YS5uYW1lfTwvQWJpbGl0eU5hbWU+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmNvc3QgJiYgcHJvcHMuZGF0YS5jb3N0ICE9PSAnTm9uZScgPyA8QWJpbGl0eURhdGE+e3Byb3BzLmRhdGEuY29zdH08L0FiaWxpdHlEYXRhPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtyYW5nZSA/IDxBYmlsaXR5RGF0YT57YCR7cmFuZ2V9IHlhcmQgcmFuZ2VgfTwvQWJpbGl0eURhdGE+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2Nhc3QgPyA8QWJpbGl0eURhdGE+e2Ake2Nhc3R9YH08L0FiaWxpdHlEYXRhPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtjb29sZG93biA/IDxBYmlsaXR5RGF0YT57YCR7Y29vbGRvd259IGNvb2xkb3duYH08L0FiaWxpdHlEYXRhPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9Db3ZlbmFudE5hbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb3ZlbmFudFRleHQ+XG4gICAgICAgICAgICAgICAgPENvdmVuYW50RGVzY3JpcHRpb24+e2Zvcm1hdERlc2NyaXB0aW9uKHByb3BzLmRhdGEuaWQsIHByb3BzLmRhdGEuZGVzY3JpcHRpb24sIHByb3BzLndvd0NsYXNzTmFtZSwgcHJvcHMuY29sb3IsIG51bGwsIHRydWUpLml0ZW1zfTwvQ292ZW5hbnREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ292ZW5hbnRUZXh0PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb3ZlbmFudDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjhweCAxZnI7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGdyaWQtZ2FwOiA4cHg7XG4gICAgXG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuXG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWluLWhlaWdodDogNjhweDtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbmA7XG5cbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENvdmVuYW50TmFtZSA9IHN0eWxlZC5kaXY8eyBjb2xvcjogc3RyaW5nIH0+YFxuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG5gXG5cbmNvbnN0IEFiaWxpdHlOYW1lID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jb25zdCBBYmlsaXR5RGF0YSA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG5gO1xuXG5cbmNvbnN0IENvdmVuYW50VGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENvdmVuYW50RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG5gO1xuXG4vKlxuY29uc3QgQ292ZW5hbnROb3RlcyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbmA7XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/widgets/Covenant.tsx\n");

/***/ })

})