"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/RouteSelect.tsx":
/*!****************************************!*\
  !*** ./src/components/RouteSelect.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RouteSelect)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputLabel */ \"(app-pages-browser)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-pages-browser)/./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Select */ \"(app-pages-browser)/./node_modules/@mui/material/Select/Select.js\");\n/* harmony import */ var constants_routedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/routedata */ \"(app-pages-browser)/./src/constants/routedata.tsx\");\n\n\n\n\n\n\n\n\nfunction RouteSelect(param) {\n    let { routeValue = \"\", onRouteChange } = param;\n    const handleChange = (event)=>{\n        onRouteChange(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            minWidth: 75,\n            maxWidth: 90\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            fullWidth: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    id: \"route-select-label\",\n                    children: \"Route\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\RouteSelect.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    labelId: \"route-simple-select-label\",\n                    id: \"route-simple-select\",\n                    value: routeValue,\n                    label: \"Route\",\n                    onChange: handleChange,\n                    children: Object.keys(constants_routedata__WEBPACK_IMPORTED_MODULE_2__.routeDictionary).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            value: key,\n                            children: key\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\RouteSelect.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\RouteSelect.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\RouteSelect.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\RouteSelect.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = RouteSelect;\nvar _c;\n$RefreshReg$(_c, \"RouteSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JvdXRlU2VsZWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNLO0FBQ2M7QUFDSjtBQUNNO0FBQ2E7QUFDWDtBQU92QyxTQUFTTyxZQUFZLEtBQW9EO1FBQXBELEVBQUVDLGFBQWEsRUFBRSxFQUFFQyxhQUFhLEVBQW9CLEdBQXBEO0lBQ2xDLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJGLGNBQWNFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNsQztJQUVBLHFCQUNFLDhEQUFDWix5REFBR0E7UUFBQ2EsSUFBSTtZQUFFQyxVQUFVO1lBQUlDLFVBQVU7UUFBRztrQkFDcEMsNEVBQUNaLGlFQUFXQTtZQUFDYSxTQUFTOzs4QkFDcEIsOERBQUNmLGdFQUFVQTtvQkFBQ2dCLElBQUc7OEJBQXFCOzs7Ozs7OEJBQ3BDLDhEQUFDYiw0REFBTUE7b0JBQ0xjLFNBQVE7b0JBQ1JELElBQUc7b0JBQ0hMLE9BQU9MO29CQUNQWSxPQUFNO29CQUNOQyxVQUFVWDs4QkFHVFksT0FBT0MsSUFBSSxDQUFDakIsZ0VBQWVBLEVBQUVrQixHQUFHLENBQUMsQ0FBQ0Msb0JBQ2pDLDhEQUFDdEIsOERBQVFBOzRCQUFXVSxPQUFPWTtzQ0FDeEJBOzJCQURZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTNCO0tBMUJ3QmxCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxjb21wb25lbnRzXFxSb3V0ZVNlbGVjdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QsIHsgU2VsZWN0Q2hhbmdlRXZlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XHJcbmltcG9ydCB7IHJvdXRlRGljdGlvbmFyeSB9IGZyb20gJ2NvbnN0YW50cy9yb3V0ZWRhdGEnO1xyXG5cclxuaW50ZXJmYWNlIFJvdXRlU2VsZWN0UHJvcHMge1xyXG4gIHJvdXRlVmFsdWU6IHN0cmluZztcclxuICBvblJvdXRlQ2hhbmdlOiAobmV3Um91dGU6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVTZWxlY3QoeyByb3V0ZVZhbHVlID0gXCJcIiwgb25Sb3V0ZUNoYW5nZSB9OiBSb3V0ZVNlbGVjdFByb3BzKSB7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBTZWxlY3RDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgb25Sb3V0ZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IG1pbldpZHRoOiA3NSwgbWF4V2lkdGg6IDkwIH19PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxyXG4gICAgICAgIDxJbnB1dExhYmVsIGlkPVwicm91dGUtc2VsZWN0LWxhYmVsXCI+Um91dGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbGFiZWxJZD1cInJvdXRlLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgaWQ9XCJyb3V0ZS1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgIHZhbHVlPXtyb3V0ZVZhbHVlfVxyXG4gICAgICAgICAgbGFiZWw9XCJSb3V0ZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICB7T2JqZWN0LmtleXMocm91dGVEaWN0aW9uYXJ5KS5tYXAoKGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtrZXl9IHZhbHVlPXtrZXl9PlxyXG4gICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJGb3JtQ29udHJvbCIsIlNlbGVjdCIsInJvdXRlRGljdGlvbmFyeSIsIlJvdXRlU2VsZWN0Iiwicm91dGVWYWx1ZSIsIm9uUm91dGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3giLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbElkIiwibGFiZWwiLCJvbkNoYW5nZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RouteSelect.tsx\n"));

/***/ })

});