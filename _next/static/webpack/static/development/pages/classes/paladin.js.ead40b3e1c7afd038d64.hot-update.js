webpackHotUpdate("static/development/pages/classes/paladin.js",{

/***/ "./src/components/common/PageHeader.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/PageHeader.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/components/theme.ts\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./src/components/common/Icon.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/components/constants.ts\");\n/* harmony import */ var _AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppLink */ \"./src/components/common/AppLink.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alex/play/wcp/shadowlands-cheatsheet/src/components/common/PageHeader.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n/**\n * The PageHeader component.\n *\n * This header appears above the 'classes' pages and displays a breadcrumb navigation menu. Also, this\n * header allows the user to select spec and covenant filters which apply to the class page.\n */\nvar PageHeader = function PageHeader(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: '/',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: 'inv_revendreth',\n    color: 'white',\n    size: 36,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }), __jsx(Text, {\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }, \"Home\")))), __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(Text, {\n    color: 'white',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, \" / \")), __jsx(HomeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    wowClassName: props.wowClassName,\n    size: 36,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }), __jsx(Text, {\n    color: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].color.classes[props.wowClassName],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, _constants__WEBPACK_IMPORTED_MODULE_4__[\"CLASS_DISPLAY_NAMES\"][props.wowClassName]))), __jsx(Placeholder, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = PageHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHeader);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"PageHeader__Container\",\n  componentId: \"j4b9ah-0\"\n})([\"background:#222;display:flex;padding:4px;width:calc(100% - 8px);position:absolute;height:48px;\"]);\n_c2 = Container;\nvar Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"PageHeader__Placeholder\",\n  componentId: \"j4b9ah-1\"\n})([\"height:56px;\"]);\n_c3 = Placeholder;\nvar HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"PageHeader__HomeContainer\",\n  componentId: \"j4b9ah-2\"\n})([\"display:flex;align-items:center;padding:4px 8px;:hover{filter:brightness(1.25);}:active{filter:brightness(.8);}\"]);\n_c4 = HomeContainer;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"PageHeader__Text\",\n  componentId: \"j4b9ah-3\"\n})([\"margin-left:8px;font-family:\", \";color:\", \";font-size:2em;\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].font.title, function (props) {\n  return props.color;\n});\n_c5 = Text;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"PageHeader\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Placeholder\");\n$RefreshReg$(_c4, \"HomeContainer\");\n$RefreshReg$(_c5, \"Text\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vUGFnZUhlYWRlci50c3g/NjgxMSJdLCJuYW1lcyI6WyJQYWdlSGVhZGVyIiwicHJvcHMiLCJ3b3dDbGFzc05hbWUiLCJ0aGVtZSIsImNvbG9yIiwiY2xhc3NlcyIsIkNMQVNTX0RJU1BMQVlfTkFNRVMiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQbGFjZWhvbGRlciIsIkhvbWVDb250YWluZXIiLCJUZXh0IiwiZm9udCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUE7Ozs7OztBQU1BLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBa0I7QUFDakMsU0FBTyxtRUFDSCxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBUyxRQUFJLEVBQUUsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFFBQUksRUFBRSxnQkFBWjtBQUE4QixTQUFLLEVBQUUsT0FBckM7QUFBOEMsUUFBSSxFQUFFLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsSUFBRDtBQUFNLFNBQUssRUFBRSxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixDQURKLENBREosQ0FESixFQVNJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLENBVEosRUFZSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkNBQUQ7QUFBTSxnQkFBWSxFQUFFQSxLQUFLLENBQUNDLFlBQTFCO0FBQXdDLFFBQUksRUFBRSxFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUVDLDhDQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkosS0FBSyxDQUFDQyxZQUExQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURJLDhEQUFtQixDQUFDTCxLQUFLLENBQUNDLFlBQVAsQ0FBMUUsQ0FGSixDQVpKLENBREcsRUFrQkgsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkcsQ0FBUDtBQW9CSCxDQXJCRDs7S0FBTUYsVTtBQXVCU0EseUVBQWY7QUFFQSxJQUFNTyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0dBQWY7TUFBTUYsUztBQVNOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvQkFBakI7TUFBTUMsVztBQUlOLElBQU1DLGFBQWEsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1SEFBbkI7TUFBTUUsYTtBQWNOLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtRUFFU04sOENBQUssQ0FBQ1UsSUFBTixDQUFXQyxLQUZwQixFQUdHLFVBQUFiLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLEtBQVY7QUFBQSxDQUhSLENBQVY7TUFBTVEsSSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9QYWdlSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCI7XG5pbXBvcnQge0NMQVNTX0RJU1BMQVlfTkFNRVN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBBcHBMaW5rIGZyb20gXCIuL0FwcExpbmtcIjtcbmltcG9ydCB7Q2xhc3NOYW1lfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBwcm9wcyBhY2NlcHRlZCBieSB0aGUgUGFnZUhlYWRlciBjb21wb25lbnQuXG4gKi9cbnR5cGUgUHJvcHMgPSB7XG4gICAgd293Q2xhc3NOYW1lOiBDbGFzc05hbWVcbn1cblxuLyoqXG4gKiBUaGUgUGFnZUhlYWRlciBjb21wb25lbnQuXG4gKlxuICogVGhpcyBoZWFkZXIgYXBwZWFycyBhYm92ZSB0aGUgJ2NsYXNzZXMnIHBhZ2VzIGFuZCBkaXNwbGF5cyBhIGJyZWFkY3J1bWIgbmF2aWdhdGlvbiBtZW51LiBBbHNvLCB0aGlzXG4gKiBoZWFkZXIgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBzcGVjIGFuZCBjb3ZlbmFudCBmaWx0ZXJzIHdoaWNoIGFwcGx5IHRvIHRoZSBjbGFzcyBwYWdlLlxuICovXG5jb25zdCBQYWdlSGVhZGVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIHJldHVybiA8PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17Jy8nfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEhvbWVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXsnaW52X3JldmVuZHJldGgnfSBjb2xvcj17J3doaXRlJ30gc2l6ZT17MzZ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXsnd2hpdGUnfT5Ib21lPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0hvbWVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgICAgICAgPEhvbWVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eyd3aGl0ZSd9PiAvIDwvVGV4dD5cbiAgICAgICAgICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIb21lQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxJY29uIHdvd0NsYXNzTmFtZT17cHJvcHMud293Q2xhc3NOYW1lfSBzaXplPXszNn0gLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17dGhlbWUuY29sb3IuY2xhc3Nlc1twcm9wcy53b3dDbGFzc05hbWVdfT57Q0xBU1NfRElTUExBWV9OQU1FU1twcm9wcy53b3dDbGFzc05hbWVdfTwvVGV4dD5cbiAgICAgICAgICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxQbGFjZWhvbGRlci8+XG4gICAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDhweDtcbmA7XG5cbmNvbnN0IFBsYWNlaG9sZGVyID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDU2cHg7XG5gO1xuXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBcbiAgICA6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yNSk7XG4gICAgfVxuICAgIFxuICAgIDphY3RpdmUge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjgpO1xuICAgIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2PHtjb2xvcjogc3RyaW5nfT5gXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LnRpdGxlfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgZm9udC1zaXplOiAyZW07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/PageHeader.tsx\n");

/***/ })

})