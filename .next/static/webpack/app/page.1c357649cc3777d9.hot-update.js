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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapComponent */ \"(app-pages-browser)/./src/components/MapComponent.tsx\");\n/* harmony import */ var components_RouteSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/RouteSelect */ \"(app-pages-browser)/./src/components/RouteSelect.tsx\");\n/* harmony import */ var providers_MapProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! providers/MapProvider */ \"(app-pages-browser)/./src/providers/MapProvider.tsx\");\n/* harmony import */ var components_FavouriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FavouriteButton */ \"(app-pages-browser)/./src/components/FavouriteButton.tsx\");\n/* harmony import */ var components_RouteButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/RouteButtons */ \"(app-pages-browser)/./src/components/RouteButtons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [favourites, setFavourites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [route, setRoute] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');\n    const filterByRoute = (routeId)=>{\n        console.log(\"Filtering by route \".concat(routeId));\n    };\n    const toggleBusinesses = ()=>{\n        console.log('Toggling other map elements');\n    };\n    const centerMapOnUser = ()=>{\n        console.log('Centering map on user');\n    };\n    const initiatePrediction = ()=>{\n        console.log('Initiating prediction');\n    };\n    function addFavourite() {\n        if (route == '') return;\n        if (favourites.includes(route)) setFavourites((prevFavourites)=>prevFavourites.filter((item)=>item !== route).toSorted());\n        else setFavourites((prevFavourites)=>[\n                ...prevFavourites,\n                route\n            ].toSorted());\n    }\n    async function onRouteChange(newRoute) {\n        setRoute(newRoute);\n    }\n    async function fetchVehicles() {\n        const response = await fetch('https://api.tranzy.ai/v1/opendata/vehicles', {\n            method: 'GET',\n            headers: {\n                'Accept': 'application/json',\n                'X-API-KEY': \"1v6BK493vzooj5F97rbEcRiuAGwS0VJPPJ7fCI0U\",\n                'X-Agency-Id': '2'\n            }\n        });\n        const data = response.json();\n        console.log(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tracker Bus CTP Cluj-Napoca\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteButtons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        favouriteRoutes: favourites,\n                        onButtonPress: onRouteChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteSelect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        routeValue: route,\n                        onRouteChange: onRouteChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_FavouriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isRouteFavourite: favourites.includes(route),\n                        addFavourite: addFavourite\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: toggleBusinesses,\n                        children: \"Show/Hide other map elements\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: centerMapOnUser,\n                        children: \"Center on you\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: initiatePrediction,\n                        children: \"Select vehicle/destination for time arrival prediction\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_MapProvider__WEBPACK_IMPORTED_MODULE_4__.MapProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MapComponent__WEBPACK_IMPORTED_MODULE_2__.MapComponent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bottom-routefetchtext\",\n                style: {\n                    position: 'fixed',\n                    bottom: '10px',\n                    left: '0',\n                    right: '0',\n                    textAlign: 'center',\n                    fontSize: '12px',\n                    color: 'black'\n                },\n                children: \"Last time fetching a route:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bottom-warningtext\",\n                style: {\n                    position: 'fixed',\n                    bottom: '30px',\n                    left: '0',\n                    right: '0',\n                    textAlign: 'center',\n                    fontSize: '12px',\n                    color: 'black'\n                },\n                children: \"Some warning messages will be displayed here.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"7okIuo4wa7FPmo7pRS5pwUrp8OA=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDd0I7QUFDTjtBQUNHO0FBQ0E7QUFDSztBQUNOO0FBRXBDLFNBQVNPOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQVcsRUFBRTtJQUN6RCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1gsMkNBQWMsQ0FBUztJQUVqRCxNQUFNWSxnQkFBZ0IsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBOEIsT0FBUkY7SUFDdEM7SUFFQSxNQUFNRyxtQkFBbUI7UUFDckJGLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1FLGtCQUFrQjtRQUNwQkgsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEsTUFBTUcscUJBQXFCO1FBQ3ZCSixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxTQUFTSTtRQUNMLElBQUdULFNBQVMsSUFBSTtRQUNoQixJQUFHRixXQUFXWSxRQUFRLENBQUNWLFFBQ25CRCxjQUFjLENBQUNZLGlCQUFtQkEsZUFBZUMsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxTQUFTYixPQUFPYyxRQUFRO2FBRXhGZixjQUFjLENBQUNZLGlCQUFtQjttQkFBSUE7Z0JBQWdCWDthQUFNLENBQUNjLFFBQVE7SUFDN0U7SUFFQSxlQUFlQyxjQUFjQyxRQUFnQjtRQUN6Q2YsU0FBU2U7SUFDYjtJQUVBLGVBQWVDO1FBQ1gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDhDQUE4QztZQUN2RUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLFVBQVU7Z0JBQ1YsYUFBYUMsMENBQXNDO2dCQUNuRCxlQUFlO1lBQ25CO1FBQ0o7UUFDQSxNQUFNRyxPQUFPUCxTQUFTUSxJQUFJO1FBQzFCdEIsUUFBUUMsR0FBRyxDQUFDb0I7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDs7a0NBQ0csOERBQUMvQiwrREFBWUE7d0JBQUNpQyxpQkFBaUIvQjt3QkFBWWdDLGVBQWVmOzs7Ozs7a0NBQzFELDhEQUFDdkIsOERBQVdBO3dCQUFDdUMsWUFBWS9CO3dCQUFPZSxlQUFlQTs7Ozs7O2tDQUMvQyw4REFBQ3BCLGtFQUFlQTt3QkFBQ3FDLGtCQUFrQmxDLFdBQVdZLFFBQVEsQ0FBQ1Y7d0JBQVFTLGNBQWNBOzs7Ozs7a0NBQzdFLDhEQUFDd0I7d0JBQU9DLFdBQVU7d0JBQU1DLFNBQVM3QjtrQ0FBa0I7Ozs7OztrQ0FHbkQsOERBQUMyQjt3QkFBT0MsV0FBVTt3QkFBTUMsU0FBUzVCO2tDQUFpQjs7Ozs7O2tDQUdsRCw4REFBQzBCO3dCQUFPQyxXQUFVO3dCQUFNQyxTQUFTM0I7a0NBQW9COzs7Ozs7Ozs7Ozs7MEJBSXpELDhEQUFDZiw4REFBV0E7MEJBQ1IsNEVBQUNGLGlFQUFZQTs7Ozs7Ozs7OzswQkFFakIsOERBQUNvQztnQkFBSVMsSUFBRztnQkFBd0JDLE9BQU87b0JBQUVDLFVBQVU7b0JBQVNDLFFBQVE7b0JBQVFDLE1BQU07b0JBQUtDLE9BQU87b0JBQUtDLFdBQVc7b0JBQVVDLFVBQVU7b0JBQVFDLE9BQU87Z0JBQVE7MEJBQUc7Ozs7OzswQkFHNUosOERBQUNqQjtnQkFBSVMsSUFBRztnQkFBcUJDLE9BQU87b0JBQUVDLFVBQVU7b0JBQVNDLFFBQVE7b0JBQVFDLE1BQU07b0JBQUtDLE9BQU87b0JBQUtDLFdBQVc7b0JBQVVDLFVBQVU7b0JBQVFDLE9BQU87Z0JBQVE7MEJBQUc7Ozs7Ozs7Ozs7OztBQUtySztHQXpFd0IvQztLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxheG1hZ1xcUHJvamVjdHNcXHRyYWNrZXJjdHBcXHNyY1xcYXBwXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwQ29tcG9uZW50JztcclxuaW1wb3J0IFJvdXRlU2VsZWN0IGZyb20gJ2NvbXBvbmVudHMvUm91dGVTZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXBQcm92aWRlciB9IGZyb20gJ3Byb3ZpZGVycy9NYXBQcm92aWRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhdm91cml0ZUJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0Zhdm91cml0ZUJ1dHRvbic7XHJcbmltcG9ydCBSb3V0ZUJ1dHRvbnMgZnJvbSAnY29tcG9uZW50cy9Sb3V0ZUJ1dHRvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICAgIGNvbnN0IFtmYXZvdXJpdGVzLCBzZXRGYXZvdXJpdGVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgICBjb25zdCBbcm91dGUsIHNldFJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckJ5Um91dGUgPSAocm91dGVJZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEZpbHRlcmluZyBieSByb3V0ZSAke3JvdXRlSWR9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUJ1c2luZXNzZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZ2dsaW5nIG90aGVyIG1hcCBlbGVtZW50cycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJNYXBPblVzZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NlbnRlcmluZyBtYXAgb24gdXNlcicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWF0ZVByZWRpY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYXRpbmcgcHJlZGljdGlvbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRGYXZvdXJpdGUoKSB7XHJcbiAgICAgICAgaWYocm91dGUgPT0gJycpIHJldHVybjtcclxuICAgICAgICBpZihmYXZvdXJpdGVzLmluY2x1ZGVzKHJvdXRlKSkgXHJcbiAgICAgICAgICAgIHNldEZhdm91cml0ZXMoKHByZXZGYXZvdXJpdGVzKSA9PiBwcmV2RmF2b3VyaXRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3V0ZSkudG9Tb3J0ZWQoKSk7IFxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHNldEZhdm91cml0ZXMoKHByZXZGYXZvdXJpdGVzKSA9PiBbLi4ucHJldkZhdm91cml0ZXMsIHJvdXRlXS50b1NvcnRlZCgpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Sb3V0ZUNoYW5nZShuZXdSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0Um91dGUobmV3Um91dGUpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hWZWhpY2xlcygpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50cmFuenkuYWkvdjEvb3BlbmRhdGEvdmVoaWNsZXMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVFJBTlpZX0FQSV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgJ1gtQWdlbmN5LUlkJzogJzInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlRyYWNrZXIgQnVzIENUUCBDbHVqLU5hcG9jYTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVCdXR0b25zIGZhdm91cml0ZVJvdXRlcz17ZmF2b3VyaXRlc30gb25CdXR0b25QcmVzcz17b25Sb3V0ZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZVNlbGVjdCByb3V0ZVZhbHVlPXtyb3V0ZX0gb25Sb3V0ZUNoYW5nZT17b25Sb3V0ZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgPEZhdm91cml0ZUJ1dHRvbiBpc1JvdXRlRmF2b3VyaXRlPXtmYXZvdXJpdGVzLmluY2x1ZGVzKHJvdXRlKX0gYWRkRmF2b3VyaXRlPXthZGRGYXZvdXJpdGV9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dG9nZ2xlQnVzaW5lc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdy9IaWRlIG90aGVyIG1hcCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2NlbnRlck1hcE9uVXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2VudGVyIG9uIHlvdVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2luaXRpYXRlUHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHZlaGljbGUvZGVzdGluYXRpb24gZm9yIHRpbWUgYXJyaXZhbCBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNYXBQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxNYXBDb21wb25lbnQvPlxyXG4gICAgICAgICAgICA8L01hcFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXJvdXRlZmV0Y2h0ZXh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzEwcHgnLCBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgTGFzdCB0aW1lIGZldGNoaW5nIGEgcm91dGU6XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXdhcm5pbmd0ZXh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzMwcHgnLCBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgU29tZSB3YXJuaW5nIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIGhlcmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBDb21wb25lbnQiLCJSb3V0ZVNlbGVjdCIsIk1hcFByb3ZpZGVyIiwidXNlU3RhdGUiLCJGYXZvdXJpdGVCdXR0b24iLCJSb3V0ZUJ1dHRvbnMiLCJQYWdlIiwiZmF2b3VyaXRlcyIsInNldEZhdm91cml0ZXMiLCJyb3V0ZSIsInNldFJvdXRlIiwiZmlsdGVyQnlSb3V0ZSIsInJvdXRlSWQiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlQnVzaW5lc3NlcyIsImNlbnRlck1hcE9uVXNlciIsImluaXRpYXRlUHJlZGljdGlvbiIsImFkZEZhdm91cml0ZSIsImluY2x1ZGVzIiwicHJldkZhdm91cml0ZXMiLCJmaWx0ZXIiLCJpdGVtIiwidG9Tb3J0ZWQiLCJvblJvdXRlQ2hhbmdlIiwibmV3Um91dGUiLCJmZXRjaFZlaGljbGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVFJBTlpZX0FQSV9LRVkiLCJkYXRhIiwianNvbiIsImRpdiIsImgxIiwiZmF2b3VyaXRlUm91dGVzIiwib25CdXR0b25QcmVzcyIsInJvdXRlVmFsdWUiLCJpc1JvdXRlRmF2b3VyaXRlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImlkIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29sb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});