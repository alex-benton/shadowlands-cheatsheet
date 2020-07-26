webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Legendary.tsx":
/*!******************************************!*\
  !*** ./components/widgets/Legendary.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./components/widgets/common.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Legendary.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar COLOR_LEGENDARY = '#ff8000';\n\nvar Legendary = function Legendary(props) {\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 12\n    }\n  }, __jsx(IconContainer, {\n    color: COLOR_LEGENDARY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(LegendaryIcon, {\n    icon: props.data.icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  })), __jsx(LegendaryName, {\n    color: COLOR_LEGENDARY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, props.data.name), __jsx(LegendarySlots, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, props.data.slots.join(\", \"))), __jsx(LegendaryDescription, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, Object(_common__WEBPACK_IMPORTED_MODULE_2__[\"formatDescription\"])(props.data.id, props.data.description, props.className, COLOR_LEGENDARY).items));\n};\n\n_c = Legendary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Legendary);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Legendary__Container\",\n  componentId: \"sc-1ttit88-0\"\n})([\"background:\", \";display:flex;margin:4px;width:calc(100% - 8px);\"], _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].color.background);\n_c2 = Container;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Legendary__IconContainer\",\n  componentId: \"sc-1ttit88-1\"\n})([\"background-color:\", \";border-radius:10%;padding:2px;\"], function (props) {\n  return props.color;\n});\n_c3 = IconContainer;\nvar LegendaryIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Legendary__LegendaryIcon\",\n  componentId: \"sc-1ttit88-2\"\n})([\"background:url('/assets/icons/\", \".jpg');height:50px;width:50px;background-position:center;background-size:contain;background-repeat:no-repeat;border-radius:25%;\"], function (props) {\n  return props.icon;\n});\n_c4 = LegendaryIcon;\nvar LegendaryName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Legendary__LegendaryName\",\n  componentId: \"sc-1ttit88-3\"\n})([\"padding:4px 8px;color:\", \";font-weight:bold;width:150px;flex-shrink:0;align-self:center;text-align:center;\"], function (props) {\n  return props.color;\n});\n_c5 = LegendaryName;\nvar LegendarySlots = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Legendary__LegendarySlots\",\n  componentId: \"sc-1ttit88-4\"\n})([\"font-weight:lighter;font-size:14px;color:white;\"]);\n_c6 = LegendarySlots;\nvar LegendaryDescription = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Legendary__LegendaryDescription\",\n  componentId: \"sc-1ttit88-5\"\n})([\"color:white;align-self:center;display:inline;\"]);\n_c7 = LegendaryDescription;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Legendary\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"IconContainer\");\n$RefreshReg$(_c4, \"LegendaryIcon\");\n$RefreshReg$(_c5, \"LegendaryName\");\n$RefreshReg$(_c6, \"LegendarySlots\");\n$RefreshReg$(_c7, \"LegendaryDescription\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvTGVnZW5kYXJ5LnRzeD9kZGU1Il0sIm5hbWVzIjpbIkNPTE9SX0xFR0VOREFSWSIsIkxlZ2VuZGFyeSIsInByb3BzIiwiZGF0YSIsImljb24iLCJuYW1lIiwic2xvdHMiLCJqb2luIiwiZm9ybWF0RGVzY3JpcHRpb24iLCJpZCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsIkljb25Db250YWluZXIiLCJMZWdlbmRhcnlJY29uIiwiTGVnZW5kYXJ5TmFtZSIsIkxlZ2VuZGFyeVNsb3RzIiwiTGVnZW5kYXJ5RGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUF4Qjs7QUFRQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQWtCO0FBQ2hDLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLGFBQUQ7QUFBZSxTQUFLLEVBQUVGLGVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGFBQUQ7QUFBZSxRQUFJLEVBQUVFLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERyxFQUlILE1BQUMsYUFBRDtBQUFlLFNBQUssRUFBRUosZUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUUsS0FBSyxDQUFDQyxJQUFOLENBQVdFLElBQWpCLENBREosRUFFSSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkgsS0FBSyxDQUFDQyxJQUFOLENBQVdHLEtBQVgsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWpCLENBRkosQ0FKRyxFQVFILE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkMsaUVBQWlCLENBQUNOLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxFQUFaLEVBQWdCUCxLQUFLLENBQUNDLElBQU4sQ0FBV08sV0FBM0IsRUFBd0NSLEtBQUssQ0FBQ1MsU0FBOUMsRUFBeURYLGVBQXpELENBQWpCLENBQTJGWSxLQUFsSCxDQVJHLENBQVA7QUFVSCxDQVhEOztLQUFNWCxTO0FBYVNBLHdFQUFmO0FBR0EsSUFBTVksU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUNHQyw4Q0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBRGYsQ0FBZjtNQUFNTCxTO0FBT04sSUFBTU0sYUFBYSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUNLLFVBQUFiLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNlLEtBQVY7QUFBQSxDQURWLENBQW5CO01BQU1FLGE7QUFNTixJQUFNQyxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEtBQ2tCLFVBQUFiLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLElBQVY7QUFBQSxDQUR2QixDQUFuQjtNQUFNZ0IsYTtBQVVOLElBQU1DLGFBQWEsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtSEFFTixVQUFBYixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDZSxLQUFWO0FBQUEsQ0FGQyxDQUFuQjtNQUFNSSxhO0FBVU4sSUFBTUMsY0FBYyxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFwQjtNQUFNTyxjO0FBT04sSUFBTUMsb0JBQW9CLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscURBQTFCO01BQU1RLG9CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93aWRnZXRzL0xlZ2VuZGFyeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUsIHtDbGFzc05hbWV9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHtMZWdlbmRhcnlUeXBlfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7Zm9ybWF0RGVzY3JpcHRpb259IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ09MT1JfTEVHRU5EQVJZID0gJyNmZjgwMDAnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogQ2xhc3NOYW1lLFxuICAgIGRhdGE6IExlZ2VuZGFyeVR5cGUsXG4gICAgZmlsdGVyPzogc3RyaW5nLFxufVxuXG5jb25zdCBMZWdlbmRhcnkgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICAgIDxJY29uQ29udGFpbmVyIGNvbG9yPXtDT0xPUl9MRUdFTkRBUll9PlxuICAgICAgICAgICAgPExlZ2VuZGFyeUljb24gaWNvbj17cHJvcHMuZGF0YS5pY29ufSAvPlxuICAgICAgICA8L0ljb25Db250YWluZXI+XG4gICAgICAgIDxMZWdlbmRhcnlOYW1lIGNvbG9yPXtDT0xPUl9MRUdFTkRBUll9PlxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPExlZ2VuZGFyeVNsb3RzPntwcm9wcy5kYXRhLnNsb3RzLmpvaW4oXCIsIFwiKX08L0xlZ2VuZGFyeVNsb3RzPlxuICAgICAgICA8L0xlZ2VuZGFyeU5hbWU+XG4gICAgICAgIDxMZWdlbmRhcnlEZXNjcmlwdGlvbj57Zm9ybWF0RGVzY3JpcHRpb24ocHJvcHMuZGF0YS5pZCwgcHJvcHMuZGF0YS5kZXNjcmlwdGlvbiwgcHJvcHMuY2xhc3NOYW1lLCBDT0xPUl9MRUdFTkRBUlkpLml0ZW1zfTwvTGVnZW5kYXJ5RGVzY3JpcHRpb24+XG4gICAgPC9Db250YWluZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVnZW5kYXJ5O1xuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuYDtcblxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBjb2xvcjogc3RyaW5nIH0+YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBwYWRkaW5nOiAycHg7XG5gO1xuXG5jb25zdCBMZWdlbmRhcnlJY29uID0gc3R5bGVkLmRpdjx7IGljb246IHN0cmluZyB9PmBcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaWNvbnMvJHtwcm9wcyA9PiBwcm9wcy5pY29ufS5qcGcnKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbmA7XG5cbmNvbnN0IExlZ2VuZGFyeU5hbWUgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgTGVnZW5kYXJ5U2xvdHMgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG5gXG5cbmNvbnN0IExlZ2VuZGFyeURlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/widgets/Legendary.tsx\n");

/***/ })

})