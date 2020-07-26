webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Covenant.tsx":
/*!*****************************************!*\
  !*** ./components/widgets/Covenant.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Icon */ \"./components/common/Icon.tsx\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ \"./components/widgets/common.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Covenant.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n// import {formatDescription} from \"./common\";\n\n\n\nvar Covenant = function Covenant(props) {\n  var parseRange = function parseRange(range) {\n    var result = /(\\d+) yards/.exec(range);\n    if (result && result[1] && parseInt(result[1]) > 0) return result[1];\n    return null;\n  };\n\n  var parseCooldown = function parseCooldown(cooldown) {\n    if (cooldown === 'n/a') return null;\n\n    if (cooldown && cooldown.endsWith('s')) {\n      return cooldown.substring(0, -1);\n    }\n\n    return cooldown;\n  };\n\n  var parseCast = function parseCast(cast) {};\n\n  console.log(props.data);\n  var range = parseRange(props.data.range);\n  var cooldown = parseCooldown(props.data.cooldown);\n  console.log(range);\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }\n  }, __jsx(IconContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    size: 64,\n    icon: props.data.icon,\n    color: props.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  })), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(CovenantName, {\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, __jsx(AbilityName, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, props.data.name), props.data.cost && props.data.cost !== 'None' ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 70\n    }\n  }, props.data.cost) : null, range ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 30\n    }\n  }, \"\".concat(range, \" yard range\")) : null, __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, props.data.cast_time), cooldown ? __jsx(AbilityData, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 33\n    }\n  }, \"\".concat(cooldown, \" cooldown\")) : null)), __jsx(CovenantText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(CovenantDescription, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, Object(_common__WEBPACK_IMPORTED_MODULE_4__[\"formatDescription\"])(props.data.id, props.data.description, props.wowClassName, props.color, null, true).items))));\n};\n\n_c = Covenant;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Covenant);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Container\",\n  componentId: \"n87l1x-0\"\n})([\"display:grid;grid-template-columns:68px 1fr;margin:4px;width:calc(100% - 8px);align-items:start;grid-gap:8px;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Header\",\n  componentId: \"n87l1x-1\"\n})([\"\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Content\",\n  componentId: \"n87l1x-2\"\n})([\"padding:8px;min-height:68px;background:\", \";border-radius:5px;\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.background);\n_c3 = Content;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__IconContainer\",\n  componentId: \"n87l1x-3\"\n})([\"display:flex;align-items:center;\"]);\n_c4 = IconContainer;\nvar CovenantName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantName\",\n  componentId: \"n87l1x-4\"\n})([\"padding:4px;color:\", \";\"], function (props) {\n  return props.color;\n});\n_c5 = CovenantName;\nvar AbilityName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__AbilityName\",\n  componentId: \"n87l1x-5\"\n})([\"font-weight:bold;font-size:16px;\"]);\n_c6 = AbilityName;\nvar AbilityData = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__AbilityData\",\n  componentId: \"n87l1x-6\"\n})([\"font-weight:lighter;\"]);\n_c7 = AbilityData;\nvar CovenantText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantText\",\n  componentId: \"n87l1x-7\"\n})([\"padding:4px;display:flex;flex-direction:column;justify-content:center;\"]);\n_c8 = CovenantText;\nvar CovenantDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantDescription\",\n  componentId: \"n87l1x-8\"\n})([\"color:white;display:inline;\"]);\n/*\nconst CovenantNotes = styled.div`\n    margin-top: 4px;\n    font-size: 14px;\n    color: yellow;\n    display: inline;\n`;\n*/\n\n_c9 = CovenantDescription;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Covenant\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Content\");\n$RefreshReg$(_c4, \"IconContainer\");\n$RefreshReg$(_c5, \"CovenantName\");\n$RefreshReg$(_c6, \"AbilityName\");\n$RefreshReg$(_c7, \"AbilityData\");\n$RefreshReg$(_c8, \"CovenantText\");\n$RefreshReg$(_c9, \"CovenantDescription\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ292ZW5hbnQudHN4PzkwZTQiXSwibmFtZXMiOlsiQ292ZW5hbnQiLCJwcm9wcyIsInBhcnNlUmFuZ2UiLCJyYW5nZSIsInJlc3VsdCIsImV4ZWMiLCJwYXJzZUludCIsInBhcnNlQ29vbGRvd24iLCJjb29sZG93biIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwicGFyc2VDYXN0IiwiY2FzdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaWNvbiIsImNvbG9yIiwibmFtZSIsImNvc3QiLCJjYXN0X3RpbWUiLCJmb3JtYXREZXNjcmlwdGlvbiIsImlkIiwiZGVzY3JpcHRpb24iLCJ3b3dDbGFzc05hbWUiLCJpdGVtcyIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsIkNvbnRlbnQiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJJY29uQ29udGFpbmVyIiwiQ292ZW5hbnROYW1lIiwiQWJpbGl0eU5hbWUiLCJBYmlsaXR5RGF0YSIsIkNvdmVuYW50VGV4dCIsIkNvdmVuYW50RGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQVNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBa0I7QUFDL0IsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNsQyxRQUFNQyxNQUFNLEdBQUcsY0FBY0MsSUFBZCxDQUFtQkYsS0FBbkIsQ0FBZjtBQUNBLFFBQUlDLE1BQU0sSUFBSUEsTUFBTSxDQUFDLENBQUQsQ0FBaEIsSUFBdUJFLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFSLEdBQXNCLENBQWpELEVBQW9ELE9BQU9BLE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDcEQsV0FBTyxJQUFQO0FBQ0gsR0FKRDs7QUFNQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJB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ekIsUTtBQTJDU0EsdUVBQWY7QUFFQSxJQUFNMEIsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFIQUFmO01BQU1GLFM7QUFVTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBWjtBQUlBLElBQU1FLE9BQU8sR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RUFHS0csOENBQUssQ0FBQ2QsS0FBTixDQUFZZSxVQUhqQixDQUFiO01BQU1GLE87QUFPTixJQUFNRyxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQW5CO01BQU1LLGE7QUFLTixJQUFNQyxZQUFZLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0NBRUwsVUFBQTNCLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNnQixLQUFWO0FBQUEsQ0FGQSxDQUFsQjtNQUFNaUIsWTtBQUtOLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3Q0FBakI7TUFBTU8sVztBQUtOLElBQU1DLFdBQVcsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0QkFBakI7TUFBTVEsVztBQUtOLElBQU1DLFlBQVksR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4RUFBbEI7TUFBTVMsWTtBQU9OLElBQU1DLG1CQUFtQixHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1DQUF6QjtBQUtBOzs7Ozs7Ozs7TUFMTVUsbUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dpZGdldHMvQ292ZW5hbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSwge0NsYXNzTmFtZX0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge0NvdmVuYW50QWJpbGl0eVR5cGV9IGZyb20gXCIuLi90eXBlc1wiO1xuLy8gaW1wb3J0IHtmb3JtYXREZXNjcmlwdGlvbn0gZnJvbSBcIi4vY29tbW9uXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vY29tbW9uL0ljb25cIjtcbmltcG9ydCB7Zm9ybWF0RGVzY3JpcHRpb259IGZyb20gXCIuL2NvbW1vblwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHdvd0NsYXNzTmFtZTogQ2xhc3NOYW1lLFxuICAgIGRhdGE6IENvdmVuYW50QWJpbGl0eVR5cGUsXG4gICAgY29sb3I6IHN0cmluZyxcbiAgICBmaWx0ZXI/OiBzdHJpbmcsXG59XG5cbmNvbnN0IENvdmVuYW50ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHBhcnNlUmFuZ2UgPSAocmFuZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAvKFxcZCspIHlhcmRzLy5leGVjKHJhbmdlKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHRbMV0gJiYgcGFyc2VJbnQocmVzdWx0WzFdKSA+IDApIHJldHVybiByZXN1bHRbMV07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlQ29vbGRvd24gPSAoY29vbGRvd246IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoY29vbGRvd24gPT09ICduL2EnKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGNvb2xkb3duICYmIGNvb2xkb3duLmVuZHNXaXRoKCdzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjb29sZG93bi5zdWJzdHJpbmcoMCwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29sZG93bjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZUNhc3QgPSAoY2FzdDogc3RyaW5nKSA9PiB7XG5cbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBwYXJzZVJhbmdlKHByb3BzLmRhdGEucmFuZ2UpO1xuICAgIGNvbnN0IGNvb2xkb3duID0gcGFyc2VDb29sZG93bihwcm9wcy5kYXRhLmNvb2xkb3duKTtcbiAgICBjb25zb2xlLmxvZyhyYW5nZSk7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICAgIDxJY29uQ29udGFpbmVyPlxuICAgICAgICAgICAgPEljb24gc2l6ZT17NjR9IGljb249e3Byb3BzLmRhdGEuaWNvbn0gY29sb3I9e3Byb3BzLmNvbG9yfS8+XG4gICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDb3ZlbmFudE5hbWUgY29sb3I9eyd3aGl0ZSd9PlxuICAgICAgICAgICAgICAgICAgICA8QWJpbGl0eU5hbWU+e3Byb3BzLmRhdGEubmFtZX08L0FiaWxpdHlOYW1lPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5jb3N0ICYmIHByb3BzLmRhdGEuY29zdCAhPT0gJ05vbmUnID8gPEFiaWxpdHlEYXRhPntwcm9wcy5kYXRhLmNvc3R9PC9BYmlsaXR5RGF0YT4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7cmFuZ2UgPyA8QWJpbGl0eURhdGE+e2Ake3JhbmdlfSB5YXJkIHJhbmdlYH08L0FiaWxpdHlEYXRhPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxBYmlsaXR5RGF0YT57cHJvcHMuZGF0YS5jYXN0X3RpbWV9PC9BYmlsaXR5RGF0YT5cbiAgICAgICAgICAgICAgICAgICAge2Nvb2xkb3duID8gPEFiaWxpdHlEYXRhPntgJHtjb29sZG93bn0gY29vbGRvd25gfTwvQWJpbGl0eURhdGE+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0NvdmVuYW50TmFtZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvdmVuYW50VGV4dD5cbiAgICAgICAgICAgICAgICA8Q292ZW5hbnREZXNjcmlwdGlvbj57Zm9ybWF0RGVzY3JpcHRpb24ocHJvcHMuZGF0YS5pZCwgcHJvcHMuZGF0YS5kZXNjcmlwdGlvbiwgcHJvcHMud293Q2xhc3NOYW1lLCBwcm9wcy5jb2xvciwgbnVsbCwgdHJ1ZSkuaXRlbXN9PC9Db3ZlbmFudERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9Db3ZlbmFudFRleHQ+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICA8L0NvbnRhaW5lcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdmVuYW50O1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OHB4IDFmcjtcbiAgICBtYXJnaW46IDRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ3JpZC1nYXA6IDhweDtcbiAgICBcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG5cbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtaW4taGVpZ2h0OiA2OHB4O1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuYDtcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ292ZW5hbnROYW1lID0gc3R5bGVkLmRpdjx7IGNvbG9yOiBzdHJpbmcgfT5gXG4gICAgcGFkZGluZzogNHB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbmBcblxuY29uc3QgQWJpbGl0eU5hbWUgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5cbmNvbnN0IEFiaWxpdHlEYXRhID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbmA7XG5cblxuY29uc3QgQ292ZW5hbnRUZXh0ID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgQ292ZW5hbnREZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbmA7XG5cbi8qXG5jb25zdCBDb3ZlbmFudE5vdGVzID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogaW5saW5lO1xuYDtcbiovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/widgets/Covenant.tsx\n");

/***/ })

})