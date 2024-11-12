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

/***/ "(app-pages-browser)/./src/components/MainComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/MainComponent.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var providers_MapProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! providers/MapProvider */ \"(app-pages-browser)/./src/providers/MapProvider.tsx\");\n/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/utils */ \"(app-pages-browser)/./src/helpers/utils.tsx\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var components_RouteSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RouteSelection */ \"(app-pages-browser)/./src/components/RouteSelection.tsx\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var components_MapComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapComponent */ \"(app-pages-browser)/./src/components/MapComponent.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MainComponent() {\n    _s();\n    const [favourites, setFavourites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [route, setRoute] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');\n    const filterByRoute = (routeId)=>{\n        console.log(\"Filtering by route \".concat(routeId));\n    };\n    const toggleBusinesses = ()=>{\n        console.log('Toggling other map elements');\n    };\n    const centerMapOnUser = ()=>{\n        console.log('Centering map on user');\n    };\n    const initiatePrediction = ()=>{\n        console.log('Initiating prediction');\n    };\n    function addFavourite() {\n        if (route == '') return;\n        if (favourites.includes(route)) setFavourites((prevFavourites)=>prevFavourites.filter((item)=>item !== route).toSorted(helpers_utils__WEBPACK_IMPORTED_MODULE_3__.numericSort));\n        else setFavourites((prevFavourites)=>[\n                ...prevFavourites,\n                route\n            ].toSorted(helpers_utils__WEBPACK_IMPORTED_MODULE_3__.numericSort));\n    }\n    async function onRouteChange(newRoute) {\n        setRoute(newRoute);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                route: route,\n                favourites: favourites,\n                onRouteChange: onRouteChange,\n                addFavourite: addFavourite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                spacing: 2,\n                direction: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: toggleBusinesses,\n                        children: \"Show/Hide other map elements\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: centerMapOnUser,\n                        children: \"Center on you\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: initiatePrediction,\n                        children: \"Select vehicle/destination for time arrival prediction\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_MapProvider__WEBPACK_IMPORTED_MODULE_2__.MapProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MapComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainComponent, \"7okIuo4wa7FPmo7pRS5pwUrp8OA=\");\n_c = MainComponent;\nvar _c;\n$RefreshReg$(_c, \"MainComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNxQjtBQUNBO0FBQ1I7QUFDSjtBQUNlO0FBQ2hCO0FBRVk7QUFPcEMsU0FBU1E7O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHWiwyQ0FBYyxDQUFTO0lBRWpELE1BQU1hLGdCQUFnQixDQUFDQztRQUNuQkMsUUFBUUMsR0FBRyxDQUFDLHNCQUE4QixPQUFSRjtJQUN0QztJQUVBLE1BQU1HLG1CQUFtQjtRQUNyQkYsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEsTUFBTUUsa0JBQWtCO1FBQ3BCSCxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxNQUFNRyxxQkFBcUI7UUFDdkJKLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLFNBQVNJO1FBQ0wsSUFBR1QsU0FBUyxJQUFJO1FBQ2hCLElBQUdGLFdBQVdZLFFBQVEsQ0FBQ1YsUUFDbkJELGNBQWMsQ0FBQ1ksaUJBQW1CQSxlQUFlQyxNQUFNLENBQUNDLENBQUFBLE9BQVFBLFNBQVNiLE9BQU9jLFFBQVEsQ0FBQ3RCLHNEQUFXQTthQUVwR08sY0FBYyxDQUFDWSxpQkFBbUI7bUJBQUlBO2dCQUFnQlg7YUFBTSxDQUFDYyxRQUFRLENBQUN0QixzREFBV0E7SUFDekY7SUFFQSxlQUFldUIsY0FBY0MsUUFBZ0I7UUFDekNmLFNBQVNlO0lBQ2I7SUFFQSxxQkFDSTs7MEJBQ0EsOERBQUN0QixpRUFBY0E7Z0JBQUNNLE9BQU9BO2dCQUFPRixZQUFZQTtnQkFBWWlCLGVBQWVBO2dCQUFlTixjQUFjQTs7Ozs7OzBCQUNsRyw4REFBQ2hCLDJEQUFLQTtnQkFBQ3dCLFNBQVM7Z0JBQUdDLFdBQVU7O2tDQUN6Qiw4REFBQ3ZCLGtGQUFNQTt3QkFBQ3dCLFNBQVE7d0JBQVdDLFNBQVNkO2tDQUFrQjs7Ozs7O2tDQUd0RCw4REFBQ1gsa0ZBQU1BO3dCQUFDd0IsU0FBUTt3QkFBV0MsU0FBU2I7a0NBQWlCOzs7Ozs7a0NBR3JELDhEQUFDWixrRkFBTUE7d0JBQUN3QixTQUFRO3dCQUFXQyxTQUFTWjtrQ0FBb0I7Ozs7Ozs7Ozs7OzswQkFJNUQsOERBQUNsQiw4REFBV0E7MEJBQ1IsNEVBQUNNLCtEQUFZQTs7Ozs7Ozs7Ozs7O0FBSXpCO0dBbkR3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXhtYWdcXFByb2plY3RzXFx0cmFja2VyY3RwXFxzcmNcXGNvbXBvbmVudHNcXE1haW5Db21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWFwUHJvdmlkZXIgfSBmcm9tICdwcm92aWRlcnMvTWFwUHJvdmlkZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG51bWVyaWNTb3J0IH0gZnJvbSAnaGVscGVycy91dGlscyc7XHJcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcclxuaW1wb3J0IFJvdXRlU2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUm91dGVTZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgcm91dGVEaWN0aW9uYXJ5IH0gZnJvbSAnaGVscGVycy9yb3V0ZWRhdGEnO1xyXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvTWFwQ29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBNYXBDb21wb25lbnRQcm9wcyB7XHJcbiAgICBzdG9wTG9jYXRpb25zOiBhbnk7XHJcbiAgICB0cmlwU3RvcHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IFtmYXZvdXJpdGVzLCBzZXRGYXZvdXJpdGVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgICBjb25zdCBbcm91dGUsIHNldFJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmaWx0ZXJCeVJvdXRlID0gKHJvdXRlSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBGaWx0ZXJpbmcgYnkgcm91dGUgJHtyb3V0ZUlkfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVCdXNpbmVzc2VzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2dnbGluZyBvdGhlciBtYXAgZWxlbWVudHMnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2VudGVyTWFwT25Vc2VyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDZW50ZXJpbmcgbWFwIG9uIHVzZXInKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhdGVQcmVkaWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWF0aW5nIHByZWRpY3Rpb24nKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRmF2b3VyaXRlKCkge1xyXG4gICAgICAgIGlmKHJvdXRlID09ICcnKSByZXR1cm47XHJcbiAgICAgICAgaWYoZmF2b3VyaXRlcy5pbmNsdWRlcyhyb3V0ZSkpIFxyXG4gICAgICAgICAgICBzZXRGYXZvdXJpdGVzKChwcmV2RmF2b3VyaXRlcykgPT4gcHJldkZhdm91cml0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm91dGUpLnRvU29ydGVkKG51bWVyaWNTb3J0KSk7IFxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHNldEZhdm91cml0ZXMoKHByZXZGYXZvdXJpdGVzKSA9PiBbLi4ucHJldkZhdm91cml0ZXMsIHJvdXRlXS50b1NvcnRlZChudW1lcmljU29ydCkpOyBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvblJvdXRlQ2hhbmdlKG5ld1JvdXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBzZXRSb3V0ZShuZXdSb3V0ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFJvdXRlU2VsZWN0aW9uIHJvdXRlPXtyb3V0ZX0gZmF2b3VyaXRlcz17ZmF2b3VyaXRlc30gb25Sb3V0ZUNoYW5nZT17b25Sb3V0ZUNoYW5nZX0gYWRkRmF2b3VyaXRlPXthZGRGYXZvdXJpdGV9Lz5cclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17dG9nZ2xlQnVzaW5lc3Nlc30+XHJcbiAgICAgICAgICAgICAgICBTaG93L0hpZGUgb3RoZXIgbWFwIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2NlbnRlck1hcE9uVXNlcn0+XHJcbiAgICAgICAgICAgICAgICBDZW50ZXIgb24geW91XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2luaXRpYXRlUHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgICAgICBTZWxlY3QgdmVoaWNsZS9kZXN0aW5hdGlvbiBmb3IgdGltZSBhcnJpdmFsIHByZWRpY3Rpb25cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8TWFwUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxNYXBDb21wb25lbnQvPlxyXG4gICAgICAgIDwvTWFwUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFwUHJvdmlkZXIiLCJ1c2VTdGF0ZSIsIm51bWVyaWNTb3J0IiwiU3RhY2siLCJSb3V0ZVNlbGVjdGlvbiIsIkJ1dHRvbiIsIk1hcENvbXBvbmVudCIsIk1haW5Db21wb25lbnQiLCJmYXZvdXJpdGVzIiwic2V0RmF2b3VyaXRlcyIsInJvdXRlIiwic2V0Um91dGUiLCJmaWx0ZXJCeVJvdXRlIiwicm91dGVJZCIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVCdXNpbmVzc2VzIiwiY2VudGVyTWFwT25Vc2VyIiwiaW5pdGlhdGVQcmVkaWN0aW9uIiwiYWRkRmF2b3VyaXRlIiwiaW5jbHVkZXMiLCJwcmV2RmF2b3VyaXRlcyIsImZpbHRlciIsIml0ZW0iLCJ0b1NvcnRlZCIsIm9uUm91dGVDaGFuZ2UiLCJuZXdSb3V0ZSIsInNwYWNpbmciLCJkaXJlY3Rpb24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MainComponent.tsx\n"));

/***/ })

});