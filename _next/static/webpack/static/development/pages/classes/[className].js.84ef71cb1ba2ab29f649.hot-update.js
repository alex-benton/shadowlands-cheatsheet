webpackHotUpdate("static/development/pages/classes/[className].js",{

/***/ "./components/widgets/Covenant.tsx":
/*!*****************************************!*\
  !*** ./components/widgets/Covenant.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./components/theme.ts\");\n/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Icon */ \"./components/common/Icon.tsx\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ \"./components/widgets/common.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/wcp/components/widgets/Covenant.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n// import {formatDescription} from \"./common\";\n\n\n\nvar Covenant = function Covenant(props) {\n  console.log(props.data);\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }\n  }, __jsx(IconContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    size: 64,\n    icon: props.data.icon,\n    color: props.color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  })), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(CovenantName, {\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, props.data.name), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, props.data.cost))), __jsx(CovenantText, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(CovenantDescription, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, Object(_common__WEBPACK_IMPORTED_MODULE_4__[\"formatDescription\"])(props.data.id, props.data.description, props.wowClassName, props.color, null, true).items))));\n};\n\n_c = Covenant;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Covenant);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Container\",\n  componentId: \"n87l1x-0\"\n})([\"display:grid;grid-template-columns:68px 1fr;margin:4px;width:calc(100% - 8px);align-items:start;grid-gap:8px;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Header\",\n  componentId: \"n87l1x-1\"\n})([\"\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__Content\",\n  componentId: \"n87l1x-2\"\n})([\"padding:8px;min-height:68px;background:\", \";border-radius:5px;\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.background);\n_c3 = Content;\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__IconContainer\",\n  componentId: \"n87l1x-3\"\n})([\"display:flex;align-items:center;\"]);\n_c4 = IconContainer;\nvar CovenantName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantName\",\n  componentId: \"n87l1x-4\"\n})([\"padding:4px;color:\", \";font-weight:bold;\"], function (props) {\n  return props.color;\n});\n_c5 = CovenantName;\nvar CovenantText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantText\",\n  componentId: \"n87l1x-5\"\n})([\"padding:4px;display:flex;flex-direction:column;justify-content:center;\"]);\n_c6 = CovenantText;\nvar CovenantDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Covenant__CovenantDescription\",\n  componentId: \"n87l1x-6\"\n})([\"color:white;display:inline;\"]);\n/*\nconst CovenantNotes = styled.div`\n    margin-top: 4px;\n    font-size: 14px;\n    color: yellow;\n    display: inline;\n`;\n*/\n\n_c7 = CovenantDescription;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Covenant\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Content\");\n$RefreshReg$(_c4, \"IconContainer\");\n$RefreshReg$(_c5, \"CovenantName\");\n$RefreshReg$(_c6, \"CovenantText\");\n$RefreshReg$(_c7, \"CovenantDescription\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpZGdldHMvQ292ZW5hbnQudHN4PzkwZTQiXSwibmFtZXMiOlsiQ292ZW5hbnQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaWNvbiIsImNvbG9yIiwibmFtZSIsImNvc3QiLCJmb3JtYXREZXNjcmlwdGlvbiIsImlkIiwiZGVzY3JpcHRpb24iLCJ3b3dDbGFzc05hbWUiLCJpdGVtcyIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsIkNvbnRlbnQiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJJY29uQ29udGFpbmVyIiwiQ292ZW5hbnROYW1lIiwiQ292ZW5hbnRUZXh0IiwiQ292ZW5hbnREZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFrQjtBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFDQSxTQUFPLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFFLEVBQVo7QUFBZ0IsUUFBSSxFQUFFSCxLQUFLLENBQUNHLElBQU4sQ0FBV0MsSUFBakM7QUFBdUMsU0FBSyxFQUFFSixLQUFLLENBQUNLLEtBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURHLEVBSUgsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxZQUFEO0FBQWMsU0FBSyxFQUFFLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1MLEtBQUssQ0FBQ0csSUFBTixDQUFXRyxJQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNTixLQUFLLENBQUNHLElBQU4sQ0FBV0ksSUFBakIsQ0FGSixDQURKLENBREosRUFPSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkMsaUVBQWlCLENBQUNSLEtBQUssQ0FBQ0csSUFBTixDQUFXTSxFQUFaLEVBQWdCVCxLQUFLLENBQUNHLElBQU4sQ0FBV08sV0FBM0IsRUFBd0NWLEtBQUssQ0FBQ1csWUFBOUMsRUFBNERYLEtBQUssQ0FBQ0ssS0FBbEUsRUFBeUUsSUFBekUsRUFBK0UsSUFBL0UsQ0FBakIsQ0FBc0dPLEtBQTVILENBREosQ0FQSixDQUpHLENBQVA7QUFnQkgsQ0FsQkQ7O0tBQU1iLFE7QUFvQlNBLHVFQUFmO0FBRUEsSUFBTWMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFIQUFmO01BQU1GLFM7QUFVTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBWjtBQUlBLElBQU1FLE9BQU8sR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RUFHS0csOENBQUssQ0FBQ2IsS0FBTixDQUFZYyxVQUhqQixDQUFiO01BQU1GLE87QUFPTixJQUFNRyxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQW5CO01BQU1LLGE7QUFLTixJQUFNQyxZQUFZLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBRUwsVUFBQWYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ssS0FBVjtBQUFBLENBRkEsQ0FBbEI7TUFBTWdCLFk7QUFPTixJQUFNQyxZQUFZLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQWxCO01BQU1PLFk7QUFPTixJQUFNQyxtQkFBbUIsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtQ0FBekI7QUFLQTs7Ozs7Ozs7O01BTE1RLG1CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93aWRnZXRzL0NvdmVuYW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUsIHtDbGFzc05hbWV9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHtDb3ZlbmFudEFiaWxpdHlUeXBlfSBmcm9tIFwiLi4vdHlwZXNcIjtcbi8vIGltcG9ydCB7Zm9ybWF0RGVzY3JpcHRpb259IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL2NvbW1vbi9JY29uXCI7XG5pbXBvcnQge2Zvcm1hdERlc2NyaXB0aW9ufSBmcm9tIFwiLi9jb21tb25cIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICB3b3dDbGFzc05hbWU6IENsYXNzTmFtZSxcbiAgICBkYXRhOiBDb3ZlbmFudEFiaWxpdHlUeXBlLFxuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgZmlsdGVyPzogc3RyaW5nLFxufVxuXG5jb25zdCBDb3ZlbmFudCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgICA8SWNvbiBzaXplPXs2NH0gaWNvbj17cHJvcHMuZGF0YS5pY29ufSBjb2xvcj17cHJvcHMuY29sb3J9Lz5cbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENvdmVuYW50TmFtZSBjb2xvcj17J3doaXRlJ30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5jb3N0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ292ZW5hbnROYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q292ZW5hbnRUZXh0PlxuICAgICAgICAgICAgICAgIDxDb3ZlbmFudERlc2NyaXB0aW9uPntmb3JtYXREZXNjcmlwdGlvbihwcm9wcy5kYXRhLmlkLCBwcm9wcy5kYXRhLmRlc2NyaXB0aW9uLCBwcm9wcy53b3dDbGFzc05hbWUsIHByb3BzLmNvbG9yLCBudWxsLCB0cnVlKS5pdGVtc308L0NvdmVuYW50RGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0NvdmVuYW50VGV4dD5cbiAgICAgICAgPC9Db250ZW50PlxuICAgIDwvQ29udGFpbmVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ292ZW5hbnQ7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY4cHggMWZyO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBncmlkLWdhcDogOHB4O1xuICAgIFxuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcblxuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1pbi1oZWlnaHQ6IDY4cHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5gO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb3ZlbmFudE5hbWUgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5cbmNvbnN0IENvdmVuYW50VGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENvdmVuYW50RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG5gO1xuXG4vKlxuY29uc3QgQ292ZW5hbnROb3RlcyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbmA7XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/widgets/Covenant.tsx\n");

/***/ })

})