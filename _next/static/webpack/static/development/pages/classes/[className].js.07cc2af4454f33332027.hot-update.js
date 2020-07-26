webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Covenant.tsx":
/*!*****************************************!*\
  !*** ./components/widgets/Covenant.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Icon */ \"./components/common/Icon.tsx\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ \"./components/widgets/common.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Covenant.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n// import {formatDescription} from \"./common\";\n\n\n\nvar Covenant = function Covenant(props) {\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 12\n    }\n  }, __jsx(IconContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: props.data.icon,\n    color: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.covenants[props.data.covenant],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  })), __jsx(ConduitName, {\n    color: '#222',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, props.data.name), __jsx(ConduitText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(ConduitDescription, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, Object(_common__WEBPACK_IMPORTED_MODULE_4__[\"formatDescription\"])(props.data.id, props.data.description, props.wowClassName, _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.covenants[props.data.covenant], null, true).items)));\n};\n\n_c = Covenant;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Covenant);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Container\",\n  componentId: \"n87l1x-0\"\n})([\"background:\", \";display:flex;margin:4px;width:calc(100% - 8px);\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.background);\n_c2 = Container;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__IconContainer\",\n  componentId: \"n87l1x-1\"\n})([\"display:flex;align-items:center;\"]);\n_c3 = IconContainer;\nvar ConduitName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__ConduitName\",\n  componentId: \"n87l1x-2\"\n})([\"display:flex;padding:4px 8px;color:\", \";font-weight:bold;width:150px;flex-shrink:0;align-self:center;justify-content:center;text-align:center;\"], function (props) {\n  return props.color;\n});\n_c4 = ConduitName;\nvar ConduitText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__ConduitText\",\n  componentId: \"n87l1x-3\"\n})([\"padding:8px 0;display:flex;flex-direction:column;justify-content:center;\"]);\n_c5 = ConduitText;\nvar ConduitDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__ConduitDescription\",\n  componentId: \"n87l1x-4\"\n})([\"color:white;align-self:center;display:inline;\"]);\n/*\nconst ConduitNotes = styled.div`\n    margin-top: 4px;\n    font-size: 14px;\n    color: yellow;\n    display: inline;\n`;\n*/\n\n_c6 = ConduitDescription;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Covenant\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"IconContainer\");\n$RefreshReg$(_c4, \"ConduitName\");\n$RefreshReg$(_c5, \"ConduitText\");\n$RefreshReg$(_c6, \"ConduitDescription\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ292ZW5hbnQudHN4PzkwZTQiXSwibmFtZXMiOlsiQ292ZW5hbnQiLCJwcm9wcyIsImRhdGEiLCJpY29uIiwidGhlbWUiLCJjb2xvciIsImNvdmVuYW50cyIsImNvdmVuYW50IiwibmFtZSIsImZvcm1hdERlc2NyaXB0aW9uIiwiaWQiLCJkZXNjcmlwdGlvbiIsIndvd0NsYXNzTmFtZSIsIml0ZW1zIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiYmFja2dyb3VuZCIsIkljb25Db250YWluZXIiLCJDb25kdWl0TmFtZSIsIkNvbmR1aXRUZXh0IiwiQ29uZHVpdERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQWtCO0FBQy9CLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUF2QjtBQUE2QixTQUFLLEVBQUVDLDhDQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkwsS0FBSyxDQUFDQyxJQUFOLENBQVdLLFFBQWpDLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURHLEVBSUgsTUFBQyxXQUFEO0FBQWEsU0FBSyxFQUFFLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJOLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxJQUF4QyxDQUpHLEVBS0gsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUJDLGlFQUFpQixDQUFDUixLQUFLLENBQUNDLElBQU4sQ0FBV1EsRUFBWixFQUFnQlQsS0FBSyxDQUFDQyxJQUFOLENBQVdTLFdBQTNCLEVBQXdDVixLQUFLLENBQUNXLFlBQTlDLEVBQTREUiw4Q0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQVosQ0FBc0JMLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxRQUFqQyxDQUE1RCxFQUF3RyxJQUF4RyxFQUE4RyxJQUE5RyxDQUFqQixDQUFxSU0sS0FBMUosQ0FESixDQUxHLENBQVA7QUFTSCxDQVZEOztLQUFNYixRO0FBWVNBLHVFQUFmO0FBRUEsSUFBTWMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUNHWiw4Q0FBSyxDQUFDQyxLQUFOLENBQVlZLFVBRGYsQ0FBZjtNQUFNSCxTO0FBT04sSUFBTUksYUFBYSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdDQUFuQjtNQUFNRSxhO0FBS04sSUFBTUMsV0FBVyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVKQUdKLFVBQUFmLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNJLEtBQVY7QUFBQSxDQUhELENBQWpCO01BQU1jLFc7QUFhTixJQUFNQyxXQUFXLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQWpCO01BQU1JLFc7QUFPTixJQUFNQyxrQkFBa0IsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFBeEI7QUFNQTs7Ozs7Ozs7O01BTk1LLGtCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93aWRnZXRzL0NvdmVuYW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUsIHtDbGFzc05hbWV9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHtDb3ZlbmFudEFiaWxpdHlUeXBlfSBmcm9tIFwiLi4vdHlwZXNcIjtcbi8vIGltcG9ydCB7Zm9ybWF0RGVzY3JpcHRpb259IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL2NvbW1vbi9JY29uXCI7XG5pbXBvcnQge2Zvcm1hdERlc2NyaXB0aW9ufSBmcm9tIFwiLi9jb21tb25cIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICB3b3dDbGFzc05hbWU6IENsYXNzTmFtZSxcbiAgICBkYXRhOiBDb3ZlbmFudEFiaWxpdHlUeXBlLFxuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgZmlsdGVyPzogc3RyaW5nLFxufVxuXG5jb25zdCBDb3ZlbmFudCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiBpY29uPXtwcm9wcy5kYXRhLmljb259IGNvbG9yPXt0aGVtZS5jb2xvci5jb3ZlbmFudHNbcHJvcHMuZGF0YS5jb3ZlbmFudF19IC8+XG4gICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICAgICAgPENvbmR1aXROYW1lIGNvbG9yPXsnIzIyMid9Pntwcm9wcy5kYXRhLm5hbWV9PC9Db25kdWl0TmFtZT5cbiAgICAgICAgPENvbmR1aXRUZXh0PlxuICAgICAgICAgICAgPENvbmR1aXREZXNjcmlwdGlvbj57Zm9ybWF0RGVzY3JpcHRpb24ocHJvcHMuZGF0YS5pZCwgcHJvcHMuZGF0YS5kZXNjcmlwdGlvbiwgcHJvcHMud293Q2xhc3NOYW1lLCB0aGVtZS5jb2xvci5jb3ZlbmFudHNbcHJvcHMuZGF0YS5jb3ZlbmFudF0sIG51bGwsIHRydWUpLml0ZW1zfTwvQ29uZHVpdERlc2NyaXB0aW9uPlxuICAgICAgICA8L0NvbmR1aXRUZXh0PlxuICAgIDwvQ29udGFpbmVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ292ZW5hbnQ7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuYDtcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ29uZHVpdE5hbWUgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5cbmNvbnN0IENvbmR1aXRUZXh0ID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb25kdWl0RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xuYDtcblxuLypcbmNvbnN0IENvbmR1aXROb3RlcyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbmA7XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/widgets/Covenant.tsx\n");

/***/ })

})